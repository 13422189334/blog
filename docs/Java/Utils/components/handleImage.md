---
title: 图片处理
lang: zh-CN
---

```java
import java.awt.Color;
import java.awt.Font;
import java.awt.FontMetrics;
import java.awt.Graphics;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.util.Random;

import javax.imageio.ImageIO;

/**
 * 图像处理: 1、水印文字 2、水印图标 3、缩略图 4、裁剪图像
 *
 */
public class ImgUtils {
    private File file; // 原文件或目录
    private String text = "测试水印"; // 水印文字
    private Color color = new Color(255, 255, 255); // 水印字体颜色及透明度
    private Font font = new Font("simhei", Font.PLAIN, 14); // 水印字体
    private String dir; // 水印图片存放目录
    private int position = 8;// 水印位置

    /**
     * @param file 原图
     * @param dir 存放目录
     */
    public ImgUtils(File file, String dir) {
        this.file = file;
        this.dir = dir;
    }

    public ImgUtils() {

    }

    /**
     * @return 获取文字
     */
    public String getText() {
        return text;
    }

    /**
     * @param text 水印文字设置
     */
    public void setText(String text) {
        this.text = text;
    }

    /**
     * @return 获取颜色
     */
    public Color getColor() {
        return color;
    }

    /**
     * @param color 设置水印字体颜色及透明度
     */
    public void setColor(Color color) {
        this.color = color;
    }

    /**
     * @return 获取字体
     */
    public Font getFont() {
        return font;
    }

    /**
     * @param font 水印字体设置
     */
    public void setFont(Font font) {
        this.font = font;
    }

    /**
     * @return 获取存放目录
     */
    public String getDir() {
        return dir;
    }

    /**
     * @param dir 设置水印图片存放目录
     */
    public void setDir(String dir) {
        this.dir = dir;
    }

    /**
     * @return 获取位置
     */
    public int getPosition() {
        return position;
    }

    /**
     * @param position 设置水印位置
     */
    public void setPosition(int position) {
        this.position = position;
    }

    private String checkFile() {
        String msg = null;
        if (file == null || !file.canRead()) {
            msg = "文件不存在";
        } else if (".jpg;.jpeg;.png;.bmp".indexOf(file.getName().toLowerCase()) < 0) {
            msg = "图片文件格式只支持：jpg、png、bmp";
        }
        return msg;
    }

    /**
     *
     * @param stream 数据流
     * @param size 大小
     * @param isRateSize 比例还是实际宽度
     * @param createWatermark 是否创建水印
     * @param saveFileName 保存文件名
     * @return
     */
    public String createThumbnailAndWatermark(InputStream stream, double size, boolean isRateSize, boolean createWatermark, String saveFileName) {
        try {
            BufferedImage bf = ImageIO.read(stream);
            int iw = bf.getWidth();
            int ih = bf.getHeight();
            int w,h;
            // 如果是比例大小，按比例缩放
            if (isRateSize) {
                w = (int) (iw * size);
                h = (int) (ih * size);
            } else {
                w = (int) size;
                h = (int) ((double) size / iw * ih);
            }
            BufferedImage di = new BufferedImage(w, h, BufferedImage.TYPE_INT_RGB);
            Graphics g = di.getGraphics();
            g.drawImage(bf, 0, 0, w, h, null);
            if(createWatermark) {
                this.drawString(bf, g, position, w, h);
            }
            g.dispose();
            File dir = new File(saveFileName);
            if (!dir.getParentFile().exists()) {
                return "指定存放目录不存在！！";
            }
            ImageIO.write(di, "jpg", dir);
            return null;
        } catch (IOException e) {
            e.printStackTrace();
            return e.getMessage();
        }
    }

    private void drawString(BufferedImage bf, Graphics g, int position, int width, int height){
        g.setFont(font); // 设置字体
        g.setColor(color); // 设置颜色
        FontMetrics f = g.getFontMetrics(); // 创建字体规格
        int fw = f.stringWidth(text); // 获取字体宽度
        int fh = f.getHeight(); // 获取字体高度
        int x = 0, y = 0, offset = 14;
        Random r = new Random();
        switch (position) {
            case 1: // 左上
                x = offset;
                y = offset + font.getSize();
                break;
            case 2: // 中上
                x = (int) ((width - fw) / 2f);
                y = offset + font.getSize();
                break;
            case 3: // 右上
                x = width - fw - offset;
                y = offset + font.getSize();
                break;
            case 4: // 左中
                x = offset;
                y = (int) ((height - fh) / 2f) + font.getSize();
                break;
            case 5: // 中心
                x = (int) ((width - fw) / 2f);
                y = (int) ((height - fh) / 2f) + font.getSize();
                break;
            case 6: // 右中
                x = width - fw - offset;
                y = (int) ((height - fh) / 2f) + font.getSize();
                break;
            case 7: // 左下
                x = offset;
                y = height - fh - offset + font.getSize();
                break;
            case 8: // 中下
                x = (int) ((width - fw) / 2f);
                y = height - fh - offset + font.getSize();
                break;
            case 9: // 右下
                x = width - fw - offset;
                y = height - fh - offset + font.getSize();
                break;
            default: // 随机
                x = r.nextInt(width - fw - offset) + offset;
                y = r.nextInt(height - fh - offset) + font.getSize();
                break;
        }
        g.drawString(text, x, y);// 写入文字
    }

    /**
     * 添加水印文字
     */
    public String addWatermark() {
        try {
            String msg = checkFile();
            if (msg != null) {
                return msg;
            }
            BufferedImage bf = ImageIO.read(file); // 读取文件
            Graphics g = bf.getGraphics();// 创建画笔
            // 书写
            this.drawString(bf, g, position, bf.getWidth(), bf.getHeight());
            g.dispose();// 关闭画笔
            String ext = file.getName().substring(file.getName().lastIndexOf(".") + 1);
            File dir = new File(this.dir + file.getName().substring(0, file.getName().lastIndexOf(".")) + "_text." + ext);
            if (!dir.getParentFile().exists()) {
                return "指定存放目录不存在！！";
            }
            ImageIO.write(bf, "jpg", dir);// 写入图片
        } catch (IOException e) {
            e.printStackTrace();
        }
        return null;
    }

    /**
     * 根据百分比生成缩略图
     *
     * @param thum 指定缩略图的百分比
     */
    public String createImgThumbnail(double thum) {
        try {
            String msg = checkFile();
            if (msg != null) {
                return msg;
            }
            BufferedImage i = ImageIO.read(file);
            int iw = i.getWidth();
            int ih = i.getHeight();
            int w = (int) (iw * thum);
            int h = (int) (ih * thum);
            BufferedImage di = new BufferedImage(w, h, BufferedImage.TYPE_INT_RGB);
            Graphics g = di.getGraphics();
            g.drawImage(i, 0, 0, w, h, null);
            g.dispose();
            String ext = file.getName().substring(file.getName().lastIndexOf(".") + 1);
            File dir = new File(this.dir + file.getName().substring(0, file.getName().lastIndexOf(".")) + "_p_thum." + ext);
            if (!dir.getParentFile().exists()) {
                return "指定存放目录不存在！！";
            }
            ImageIO.write(di, "jpg", dir);
        } catch (IOException e) {
            e.printStackTrace();
        }
        return null;
    }

    /**
     * 根据宽生成缩略图
     *
     * @param thum 指定缩略图的宽
     */
    public String createThumbnail(int thum) {
        try {
            String msg = checkFile();
            if (msg != null) {
                return msg;
            }
            BufferedImage i = ImageIO.read(file);
            int iw = i.getWidth();
            int ih = i.getHeight();
            int w = thum;
            int h = (int) ((double) thum / iw * ih);
            BufferedImage di = new BufferedImage(w, h, BufferedImage.TYPE_INT_RGB);
            Graphics g = di.getGraphics();
            g.drawImage(i, 0, 0, w, h, null);
            g.dispose();
            String ext = file.getName().substring(file.getName().lastIndexOf(".") + 1);
            File dir = new File(this.dir + file.getName().substring(0, file.getName().lastIndexOf(".")) + "_w_thum." + ext);
            if (!dir.getParentFile().exists()) {
                return "指定存放目录不存在！！";
            }
            ImageIO.write(di, "jpg", dir);
        } catch (IOException e) {
            e.printStackTrace();
        }
        return null;
    }

    /**
     * 裁剪图像
     *
     * @param w 剪切的宽
     * @param h 剪切的高
     * @param x 指定从原图的宽开始
     * @param y 指定从原图的高开始
     */
    public void imgCrop(int w, int h, int x, int y) {
        try {
            if (!file.canRead()) {
                System.out.println("请定义一个原图文件");
                return;
            } else if (!file.getName().toLowerCase().endsWith(".jpg")) {
                if (!file.getName().toLowerCase().endsWith(".png")) {
                    System.out.println("请先定义原图片文件,格式为：jpg、png");
                    return;
                }
            }
            BufferedImage bi = ImageIO.read(file);
            BufferedImage ni = new BufferedImage(w, h, BufferedImage.TYPE_INT_RGB);
            Graphics g = ni.getGraphics();
            int nw = w + x;
            int nh = h + y;
            g.drawImage(bi, 0, 0, w, h, x, y, nw, nh, null);
            g.dispose();
            String ext = file.getName().substring(file.getName().lastIndexOf(".") + 1);
            File dir = new File(this.dir + file.getName().substring(0, file.getName().lastIndexOf(".")) + "_crop." + ext);
            if (!dir.getParentFile().exists()) {
                System.out.println("指定存放目录不存在！！");
                return;
            }
            ImageIO.write(ni, "jpg", dir);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
```

