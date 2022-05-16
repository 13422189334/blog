---
title: 图片转换
lang: zh-CN
date: 2022-05-16 11:21:30
permalink: /pages/a8d68e/
categories: 
  - Java
  - Utils
  - components
tags: 
  - 
---

```java
package io.easy.common.utils;
import java.io.ByteArrayOutputStream;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;

import sun.misc.BASE64Decoder;
import sun.misc.BASE64Encoder;

public class Base64Utils {
    /**
     * 测试
     * @param args
     * @throws Exception
     */
    public static void main(String[] args) throws Exception {

        //图片--->base64
        //本地图片
        String url = "D:/Project/workbench-ui/src/assets/images/arc-bar.png";
        String str = Base64Utils.ImageToBase64ByLocal(url);
        System.out.println("data:image/png;base64," + str);

        //在线图片地址
        String string = "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1705581946,4177791147&fm=26&gp=0.jpg";
        String ste = Base64Utils.ImageToBase64ByOnline(string);
        System.out.println("data:image/png;base64," + ste);
    }

    /**
     * 本地图片转换成base64字符串
     * @param imgFile    图片本地路径
     * @author jsh
     */
    public static String ImageToBase64ByLocal(String imgFile) {// 将图片文件转化为字节数组字符串，并对其进行Base64编码处理
        InputStream in = null;
        byte[] data = null;
        try {
            in = new FileInputStream(imgFile);

            data = new byte[in.available()];
            in.read(data);
            in.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
        BASE64Encoder encoder = new BASE64Encoder();
        return encoder.encode(data);
    }

    /**
     * 在线图片转换成base64字符串
     * @param imgURL    图片线上路径
     * @author jsh
     */
    public static String ImageToBase64ByOnline(String imgURL) {
        ByteArrayOutputStream data = new ByteArrayOutputStream();
        try {
            URL url = new URL(imgURL);
            byte[] by = new byte[1024];
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();
            conn.setRequestMethod("GET");
            conn.setConnectTimeout(5000);
            InputStream is = conn.getInputStream();
            int len = -1;
            while ((len = is.read(by)) != -1) {
                data.write(by, 0, len);
            }
            is.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
        BASE64Encoder encoder = new BASE64Encoder();
        return encoder.encode(data.toByteArray());
    }

    /**
     * 验证字符串是否为空
     *
     * @param input
     * @return
     */
    private static boolean isEmpty(String input) {
        return input == null || input.equals("");
    }
}
```

