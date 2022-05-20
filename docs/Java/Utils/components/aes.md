---
title: AES加解密
lang: zh-CN
date: 2022-05-16 11:21:30
permalink: /Java/Utils/AES
categories: 
  - JavaUtils
tags: 
  - 
---

```java
public static void main(String[] args) throws Exception {
   DeshfuUtil desUtil = new DeshfuUtil();
   System.out.println("加密:"+encrypt("abcdef")
         .toUpperCase());
   System.out.println("解密:"+decrypt("7E91EA4F56943F90"));

}
```

```java
public class DeshfuUtil {
   private static final String PASSWORD_CRYPT_KEY = "TOGETHER!@#$%";
   // 解密数据
   public static String decrypt(String message) throws Exception {

      byte[] bytesrc = convertHexString(message);
      Cipher cipher = Cipher.getInstance("DES/CBC/PKCS5Padding");
      DESKeySpec desKeySpec = new DESKeySpec(JavaMD5.getMD5ofStr(PASSWORD_CRYPT_KEY)
            .substring(0, 8).getBytes("UTF-8"));
      SecretKeyFactory keyFactory = SecretKeyFactory.getInstance("DES");
      SecretKey secretKey = keyFactory.generateSecret(desKeySpec);
      IvParameterSpec iv = new IvParameterSpec(JavaMD5.getMD5ofStr(PASSWORD_CRYPT_KEY)
            .substring(0, 8).getBytes("UTF-8"));
      cipher.init(Cipher.DECRYPT_MODE, secretKey, iv);
      byte[] retByte = cipher.doFinal(bytesrc);
      return new String(retByte);
   }

   public static String encrypt(String message) throws Exception {
      Cipher cipher = Cipher.getInstance("DES/CBC/PKCS5Padding");
      DESKeySpec desKeySpec = new DESKeySpec(JavaMD5.getMD5ofStr(PASSWORD_CRYPT_KEY)
            .substring(0, 8).getBytes("UTF-8"));
      SecretKeyFactory keyFactory = SecretKeyFactory.getInstance("DES");
      SecretKey secretKey = keyFactory.generateSecret(desKeySpec);
      IvParameterSpec iv = new IvParameterSpec(JavaMD5.getMD5ofStr(PASSWORD_CRYPT_KEY)
            .substring(0, 8).getBytes("UTF-8"));
      cipher.init(Cipher.ENCRYPT_MODE, secretKey, iv);
      return toHexString(cipher.doFinal(message.getBytes("UTF-8")));
   }

   public static byte[] convertHexString(String ss) {
      byte digest[] = new byte[ss.length() / 2];
      for (int i = 0; i < digest.length; i++) {
         String byteString = ss.substring(2 * i, 2 * i + 2);
         int byteValue = Integer.parseInt(byteString, 16);
         digest[i] = (byte) byteValue;
      }
      return digest;
   }

   public static String toHexString(byte b[]) {
      StringBuffer hexString = new StringBuffer();
      for (int i = 0; i < b.length; i++) {
         String plainText = Integer.toHexString(0xff & b[i]);
         if (plainText.length() < 2)
            plainText = "0" + plainText;
         hexString.append(plainText);
      }
      return hexString.toString();
   }
}
```
