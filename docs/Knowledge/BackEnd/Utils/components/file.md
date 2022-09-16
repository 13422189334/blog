---
title: 文件上传下载
lang: zh-CN
date: 2022-05-16 11:21:30
permalink: /Java/Utils/File
category: 
  - Java工具类
tag: 
  - Java工具类
---

```java
public class ResultEntity {
    private boolean suceesss;
    private String code;
    private String msg;
    public ResultEntity(boolean suceesss, String code, String msg) {
        this.suceesss = suceesss;
        this.code = code;
        this.msg = msg;
    }
    public boolean isSuceesss() {
        return suceesss;
    }
    public void setSuceesss(boolean suceesss) {
        this.suceesss = suceesss;
    }
    public String getCode() {
        return code;
    }
    public void setCode(String code) {
        this.code = code;
    }
    public String getMsg() {
        return msg;
    }
    public void setMsg(String msg) {
        this.msg = msg;
    }
}
```

```java
import org.springframework.core.io.ClassPathResource;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.*;

public class FileUtils {
    // 默认400像素宽度
    final static double THUMBNAIL_WIDTH = 400;

    public static String getRunPath() {
        return System.getProperty("user.dir");
    }

    /**
     * 写文件
     *
     * @param text     文本
     * @param fileName 文件流
     */
    public static void writeFile(String text, String fileName) {
        try {
            File file = new File(fileName);
            //if file doesnt exists, then create it
            if (!file.exists()) {
                file.createNewFile();
            }
            //true = append file
            FileWriter fileWritter = new FileWriter(file.getName(), true);
            fileWritter.write(text);
            fileWritter.close();
            System.out.println("Done");
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    /**
     * 导出资源文件
     *
     * @param resFullName 资源文件
     * @param saveName    保存名字
     * @param isDownload  是否下载
     * @param response    响应
     */
    public static void exportRes(String resFullName, String saveName, Boolean isDownload, HttpServletResponse response) {
        try {
            ClassPathResource resource = new ClassPathResource(resFullName);
            if (!resource.exists()) {
                throw new IOException("文件不存在");
            }
            // 以流的形式下载文件。
            InputStream fis = resource.getInputStream();
            export(fis, saveName, isDownload, response);
        } catch (IOException ex) {
            ex.printStackTrace();
        }
    }

    /**
     * 导出文件
     *
     * @param fileFullName 文件完整名称
     * @param isDownload   是否下载，否则在线打开
     * @param response     网络响应
     */
    public static void export(String fileFullName, Boolean isDownload, HttpServletResponse response) {
        export(fileFullName, null, isDownload, response);
    }


    /**
     * 导出文件
     *
     * @param fileFullName 文件完整名称
     * @param saveName     保存名称
     * @param isDownload   是否下载，否则在线打开
     * @param response     网络响应
     */
    public static void export(String fileFullName, String saveName, Boolean isDownload, HttpServletResponse response) {
        try {
            File file = new File(fileFullName);
            if (!file.exists()) {
                throw new IOException("文件不存在");
            }
            // 如果保存名称为空，则取文件名
            if (StringUtils.isBlank(saveName)) {
                saveName = file.getName();
            }
            // 以流的形式下载文件。
            InputStream fis = new BufferedInputStream(new FileInputStream(file));
            export(fis, saveName, isDownload, response);
        } catch (IOException ex) {
            ex.printStackTrace();
        }
    }

    /**
     * 导出文件
     *
     * @param fs         文件流
     * @param saveName   下载保存名字
     * @param isDownload 是否下载
     * @param response   响应
     */
    static void export(InputStream fs, String saveName, Boolean isDownload, HttpServletResponse response) throws IOException {
        saveName = new String(saveName.getBytes("UTF-8"), "ISO-8859-1");
        // 清空response
        response.reset();
        // 设置response的Header
        response.setCharacterEncoding("UTF-8");
        if (isDownload) {
            response.addHeader("Content-Disposition", "attachment;filename=" + saveName);
//            response.setContentType("application/octet-stream");
        } else {
            response.addHeader("Content-Disposition", "inline;filename=" + saveName);
        }
        String suffix = saveName.substring(saveName.lastIndexOf(".") + 1);
        response.setContentType(MimeUtils.getMineFormExt(suffix));
        // 循环取出流中的数据
        byte[] b = new byte[100];
        int len;
        while ((len = fs.read(b)) > 0) {
            response.getOutputStream().write(b, 0, len);
        }
        fs.close();
    }

    /**
     * 上传文件
     *
     * @param req       请求
     * @param multiReq  多段请求
     * @param basePath  基本路径
     * @param childPath 子路径
     * @param filterExt 过滤文件扩展名
     * @param isImage   是否图像
     * @return
     */
    public static ResultEntity uploadFile(HttpServletRequest req,
                                          MultipartHttpServletRequest multiReq, String basePath, String childPath, String filterExt, boolean isImage, boolean thumbnail, boolean watermark) {
        // 获取上传文件的路径
        String uploadFileName = multiReq.getFile("file").getOriginalFilename();
        FileOutputStream fos = null;
        FileInputStream fis = null;
        String fileUrl = "";
        ResultEntity res = null;
        try {
            fis = (FileInputStream) multiReq.getFile("file").getInputStream();
            String ext = uploadFileName.substring(uploadFileName.lastIndexOf(".")).toLowerCase();
            if (filterExt.toLowerCase().indexOf(ext) < 0) {
                res = new ResultEntity(false, "0", "不支持的文件格式");
            } else {
                // 按日期生成文件名
                String newFileName = Long.toString(System.currentTimeMillis());
                fileUrl = childPath + newFileName + ext;
                String saveFullFileName = basePath + fileUrl;
                File dest = new File(saveFullFileName);
                if (!dest.getParentFile().exists()) { //判断文件父目录是否存在
                    dest.getParentFile().mkdirs();
                }
                // 判断是否图像，是就创建水印
                if (isImage) {
                    ImgUtils imgUtils = new ImgUtils();
                    String err;
                    if (thumbnail) {
                        // 默认400宽度
                        err = imgUtils.createThumbnailAndWatermark(fis, THUMBNAIL_WIDTH, false, watermark, saveFullFileName);
                    } else {
                        err = imgUtils.createThumbnailAndWatermark(fis, 1, true, watermark, saveFullFileName);
                    }
                    if (!StringUtils.isBlank(err)) {
                        res = new ResultEntity(false, "0", err);
                    } else {
                        res = new ResultEntity(true, "1", fileUrl);
                    }
                } else {
                    fos = new FileOutputStream(dest);
                    byte[] temp = new byte[1024];
                    int i = fis.read(temp);
                    while (i != -1) {
                        fos.write(temp, 0, temp.length);
                        fos.flush();
                        i = fis.read(temp);
                    }
                    res = new ResultEntity(true, "1", fileUrl);
                }
            }
        } catch (IOException e) {
            e.printStackTrace();
            res = new ResultEntity(false, "0", e.getMessage());
        } finally {
            if (fis != null) {
                try {
                    fis.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
            if (fos != null) {
                try {
                    fos.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
            return res;
        }
    }
}
```

