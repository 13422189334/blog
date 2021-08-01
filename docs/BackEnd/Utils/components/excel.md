---
title: Excel
lang: zh-CN
---

```java
import org.apache.poi.hssf.usermodel.*;
import org.apache.poi.ss.usermodel.CellType;
import org.apache.poi.xssf.usermodel.XSSFCell;
import org.apache.poi.xssf.usermodel.XSSFRow;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.URLEncoder;
import java.text.DecimalFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class ExcelUtil {
    public static final String OFFICE_EXCEL_2003_POSTFIX = "xls";
    public static final String OFFICE_EXCEL_2010_POSTFIX = "xlsx";
    public static final String EMPTY = "";
    public static final String POINT = ".";
    public static SimpleDateFormat sdf = new SimpleDateFormat("yyyy/MM/dd");

    /**
     * 获得path的后缀名
     *
     * @param path
     * @return
     */
    public static String getPostfix(String path) {
        if (path == null || EMPTY.equals(path.trim())) {
            return EMPTY;
        }
        if (path.contains(POINT)) {
            return path.substring(path.lastIndexOf(POINT) + 1, path.length());
        }
        return EMPTY;
    }

    /**
     * 单元格格式
     *
     * @param hssfCell
     * @return
     */
    @SuppressWarnings({"static-access", "deprecation"})
    public static String getHValue(HSSFCell hssfCell) {
        if (hssfCell.getCellType() == CellType.BOOLEAN) {
            return String.valueOf(hssfCell.getBooleanCellValue());
        } else if (hssfCell.getCellType() == CellType.NUMERIC) {
            String cellValue = "";
            if (HSSFDateUtil.isCellDateFormatted(hssfCell)) {
                Date date = HSSFDateUtil.getJavaDate(hssfCell.getNumericCellValue());
                cellValue = sdf.format(date);
            } else {
                DecimalFormat df = new DecimalFormat("#.##");
                cellValue = df.format(hssfCell.getNumericCellValue());
                String strArr = cellValue.substring(cellValue.lastIndexOf(POINT) + 1, cellValue.length());
                if (strArr.equals("00")) {
                    cellValue = cellValue.substring(0, cellValue.lastIndexOf(POINT));
                }
            }
            return cellValue;
        } else {
            return String.valueOf(hssfCell.getStringCellValue());
        }
    }

    /**
     * 单元格格式
     *
     * @param xssfCell
     * @return
     */
    public static String getXValue(XSSFCell xssfCell) {
        if (xssfCell.getCellType() == CellType.BOOLEAN) {
            return String.valueOf(xssfCell.getBooleanCellValue());
        } else if (xssfCell.getCellType() == CellType.NUMERIC) {
            String cellValue = "";
            if (XSSFDateUtil.isCellDateFormatted(xssfCell)) {
                Date date = XSSFDateUtil.getJavaDate(xssfCell.getNumericCellValue());
                cellValue = sdf.format(date);
            } else {
                DecimalFormat df = new DecimalFormat("#.##");
                cellValue = df.format(xssfCell.getNumericCellValue());
                String strArr = cellValue.substring(cellValue.lastIndexOf(POINT) + 1, cellValue.length());
                if (strArr.equals("00")) {
                    cellValue = cellValue.substring(0, cellValue.lastIndexOf(POINT));
                }
            }
            return cellValue;
        } else {
            return String.valueOf(xssfCell.getStringCellValue());
        }
    }

    public static int totalCells; //每一行总单元格数

    /**
     * read the Excel .xlsx,.xls
     *
     * @param fileName jsp中的上传文件
     * @param input
     * @return
     * @throws IOException
     */
    public List<ArrayList<String>> readExcel(String fileName, InputStream input) throws IOException {
        if (input == null || ExcelUtil.EMPTY.equals(fileName.trim())) {
            return null;
        } else {
            String postfix = ExcelUtil.getPostfix(fileName);
            if (!ExcelUtil.EMPTY.equals(postfix)) {
                if (ExcelUtil.OFFICE_EXCEL_2003_POSTFIX.equals(postfix)) {
                    return readXls(input);
                } else if (ExcelUtil.OFFICE_EXCEL_2010_POSTFIX.equals(postfix)) {
                    return readXlsx(input);
                } else {
                    return null;
                }
            }
        }
        return null;
    }

    /**
     * read the Excel 2010 .xlsx
     *
     * @param input
     * @return
     * @throws IOException
     */
    @SuppressWarnings("deprecation")
    public List<ArrayList<String>> readXlsx(InputStream input) {
        List<ArrayList<String>> list = new ArrayList<ArrayList<String>>();
        // IO流读取文件
        XSSFWorkbook wb = null;
        ArrayList<String> rowList = null;
        Integer totalRows;
        try {
            // 创建文档
            wb = new XSSFWorkbook(input);
            //读取sheet(页)
            for (int numSheet = 0; numSheet < wb.getNumberOfSheets(); numSheet++) {
                XSSFSheet xssfSheet = wb.getSheetAt(numSheet);
                if (xssfSheet == null) {
                    continue;
                }
                totalRows = xssfSheet.getLastRowNum();
                //读取Row,从第二行开始
                for (int rowNum = 1; rowNum <= totalRows; rowNum++) {
                    XSSFRow xssfRow = xssfSheet.getRow(rowNum);
                    if (xssfRow != null) {
                        rowList = new ArrayList<String>();
                        totalCells = xssfRow.getLastCellNum();
                        //读取列，从第一列开始
                        for (int c = 0; c <= totalCells + 1; c++) {
                            XSSFCell cell = xssfRow.getCell(c);
                            if (cell == null) {
                                rowList.add(ExcelUtil.EMPTY);
                                continue;
                            }
                            rowList.add(ExcelUtil.getXValue(cell).trim());
                        }
                        list.add(rowList);
                    }
                }
            }
            return list;
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            try {
                input.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
        return null;
    }

    /**
     * read the Excel 2003-2007 .xls
     *
     * @param input
     * @return
     * @throws IOException
     */
    public List<ArrayList<String>> readXls(InputStream input) {
        List<ArrayList<String>> list = new ArrayList<ArrayList<String>>();
        // IO流读取文件
        HSSFWorkbook wb = null;
        ArrayList<String> rowList = null;
        Integer totalRows;
        try {
            // 创建文档
            wb = new HSSFWorkbook(input);
            //读取sheet(页)
            for (int numSheet = 0; numSheet < wb.getNumberOfSheets(); numSheet++) {
                HSSFSheet hssfSheet = wb.getSheetAt(numSheet);
                if (hssfSheet == null) {
                    continue;
                }
                totalRows = hssfSheet.getLastRowNum();
                //读取Row,从第二行开始
                for (int rowNum = 1; rowNum <= totalRows; rowNum++) {
                    HSSFRow hssfRow = hssfSheet.getRow(rowNum);
                    if (hssfRow != null) {
                        rowList = new ArrayList<String>();
                        totalCells = hssfRow.getLastCellNum();
                        //读取列，从第一列开始
                        for (short c = 0; c <= totalCells + 1; c++) {
                            HSSFCell cell = hssfRow.getCell(c);
                            if (cell == null) {
                                rowList.add(ExcelUtil.EMPTY);
                                continue;
                            }
                            rowList.add(ExcelUtil.getHValue(cell).trim());
                        }
                        list.add(rowList);
                    }
                }
            }
            return list;
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            try {
                input.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
        return null;
    }

    public static void exportExcel(HSSFWorkbook wb, HttpServletResponse response) {
        // 第六步，下载excel
        OutputStream out = null;
        try {
            out = response.getOutputStream();
            String fileName = "enroll.xls";// 文件名
            response.setContentType("application/x-msdownload");
            response.setHeader("Content-Disposition", "attachment; filename="
                    + URLEncoder.encode(fileName, "UTF-8"));
            wb.write(out);
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            try {
                out.close();
                wb.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }
}
```

