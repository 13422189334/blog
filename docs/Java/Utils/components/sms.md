---
title: sms短信
lang: zh-CN
date: 2022-05-16 11:21:30
permalink: /pages/3b70e8/
categories: 
  - Java
  - Utils
  - components
tags: 
  - 
---

```java
import com.alibaba.fastjson.JSON;
import io.easy.modules.sys.entity.SysSmsLogEntity;
import io.easy.modules.sys.entity.SysSmsResponseEntity;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import java.io.IOException;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class SMSUtils {

    private static Logger _logger = LoggerFactory.getLogger(SMSUtils.class);
    public enum SmsConfigType{
        SEND_CODE(1), CHECK_CODE(2), SEND_SMS(3);
        private int index ;
        public int getIndex() {
            return index;
        }
        private SmsConfigType( int index ){
            this.index = index ;
        }
    }

    /**
     * 发送短信消息
     * @param apiFormat API地址格式
     * @param phone 手机号码
     * @return 响应结果
     */
    public static SysSmsLogEntity sendSMSCode(String apiFormat, String phone) {
        phone = StringUtils.replaceBlank(phone);
        if(StringUtils.isBlank(phone)) {
            return null;
        }
        // 构建用于替换字典
        Map<String, String> matchReplaceList = new HashMap<String, String>();
        matchReplaceList.put("param1", phone);
        String url = StringUtils.parseString(apiFormat, matchReplaceList);
        String res = HttpUtils.doGet(url);
        // [{"code":"00","sId":"2015072231000100000065"}]
        List<SysSmsLogEntity> source = JSON.parseArray(res, SysSmsLogEntity.class);
        if (source != null && source.size() > 0) {
            SysSmsLogEntity result = source.get(0);
            result.setCallUrl(url);
            result.setMobile(phone);
            return result;
        }
        return null;
    }

    /**
     * 校验短信验证码
     * @param apiFormat API地址格式
     * @param phone 手机号
     * @param smsCode 验证码
     * @return 响应结果
     */
    public static SysSmsLogEntity checkSMSCode(String apiFormat, String phone, String smsCode) {
        phone = StringUtils.replaceBlank(phone);
        smsCode = StringUtils.replaceBlank(smsCode);
        if(StringUtils.isBlank(phone)) {
            return null;
        }
        //http://120.197.89.93:80/EOPS1.0/captcha/auth/手机号码;callerId=param2;password=param3;randomCode=param4
        Map<String, String> matchReplaceList = new HashMap<String, String>();
        matchReplaceList.put("param1", phone);
        matchReplaceList.put("param4", smsCode);
        String url = StringUtils.parseString(apiFormat, matchReplaceList);
        String res = HttpUtils.doGet(url);
        SysSmsLogEntity result = new SysSmsLogEntity();
        result.setCode(res);
        result.setCallUrl(url);
        result.setMobile(phone);
        return result;
    }


    /**
     * 发送单条模版短信
     * @param apiUrl 请求地址
     * @param requestParams 请求参数
     * @param phone 手机号码
     * @return 处理过结果
     * @throws IOException
     */
    public static SysSmsLogEntity sendSMS(String apiUrl, Map<String, String> requestParams, String phone) throws IOException {
        phone = StringUtils.replaceBlank(phone);
        if(StringUtils.isBlank(phone)) {
            return null;
        }
        String res = HttpUtils.sendSMS2(apiUrl, requestParams);
        // [{"code":"00","sId":"2015072231000100000065"}]
        List<SysSmsLogEntity> source = JSON.parseArray(res, SysSmsLogEntity.class);
        if (source != null && source.size() > 0) {
            SysSmsLogEntity result = source.get(0);
            result.setCallUrl(apiUrl);
            result.setMobile(phone);
            return result;
        }
        return null;
    }

    /**
     * 处理验证码结果
     * @param smsResponseEntityList 配置列表
     * @param code 短信响应code
     * @param configId 选定配置Id
     * @return 响应结果
     */
    public static SysSmsResponseEntity handleCodeResult(List<SysSmsResponseEntity> smsResponseEntityList, String code, int configId) {
        for (SysSmsResponseEntity sysSmsResponseEntity: smsResponseEntityList) {
            if (sysSmsResponseEntity.getCode().equals(code) && sysSmsResponseEntity.getConfigId() == configId) {
                return sysSmsResponseEntity;
            }
        }
        SysSmsResponseEntity responseEntity = new SysSmsResponseEntity();
        responseEntity.setCode(code);
        responseEntity.setStatus(0);
        responseEntity.setMsg("未知原因");
        return responseEntity;
    }

    /**
     * 随机生成6位随机验证码
     * 方法说明
     */
    public static String createRandomVcode(){
        //验证码
        String vcode = "";
        for (int i = 0; i < 6; i++) {
            vcode = vcode + (int)(Math.random() * 9);
        }
        return vcode;
    }

```

