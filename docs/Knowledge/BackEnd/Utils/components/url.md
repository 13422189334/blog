---
title: URL参数解析
lang: zh-CN
date: 2022-05-16 11:21:30
permalink: /Java/Utils/Url
category: 
  - Java工具类
tag: 
  - Java工具类
---

```java
import java.util.HashMap;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class UrlUtils {
    /**
     * 解析出url请求的路径，包括页面
     * @param strURL url地址
     * @return url路径
     */
    public static String GetUrl(String strURL)
    {
        String strPage=null;
        String[] arrSplit=null;
        strURL=strURL.trim();
        arrSplit=strURL.split("[?]");
        if(strURL.length()>0)
        {
            if(arrSplit.length>1)
            {
                if(arrSplit[0]!=null)
                {
                    strPage=arrSplit[0];
                }
            }
        }
        return strPage;
    }
    /**
     * 去掉url中的路径，留下请求参数部分
     * @param strURL url地址
     * @return url请求参数部分
     */
    private static String TruncateUrlPage(String strURL)
    {
        String strAllParam=null;
        String[] arrSplit=null;
        strURL=strURL.trim();
        arrSplit=strURL.split("[?]");
        if(strURL.length()>1)
        {
            if(arrSplit.length>1)
            {
                if(arrSplit[1]!=null)
                {
                    strAllParam=arrSplit[1];
                }
            }
        }
        return strAllParam;
    }
    /**
     * @param URL  url地址
     * @param name 获取参数名
     * @return  url请求参数部分
     */
    public static String getParam(String URL,String name)
    {
        Map<String, String> mapRequest = new HashMap<String, String>();
        String[] arrSplit=null;
        String strUrlParam=TruncateUrlPage(URL);
        if(strUrlParam==null)
            return null;
        //每个键值为一组
        arrSplit=strUrlParam.split("[&]");
        for(String strSplit:arrSplit)
        {
            String[] arrSplitEqual=null;
            arrSplitEqual= strSplit.split("[=]");
            //解析出键值
            if(arrSplitEqual.length>1)
            {
                mapRequest.put(arrSplitEqual[0], arrSplitEqual[1]);//正确解析
            }
            else
            {
                if(arrSplitEqual[0]!="")
                {
                    //只有参数没有值，不加入
                    mapRequest.put(arrSplitEqual[0], "");
                }
            }
        }
        return mapRequest.get(name);
    }

    public static void main(String[] args) {
        // 请求url
        String str = "https://xxx.com/easy-xxx/xxx/xxx/xxx?fileName=dmlkZW8vMjAxOS0wOS0yNC8xNTY5MzM2NzQ0MjQ1Lm1wMw==";
        //url页面路径
        System.out.println(UrlUtils.GetUrl(str));
        //url参数键值对
        String strRequestKeyAndValues = UrlUtils.getParam(str,"fileName");
        //获取无效键时，输出null
        System.out.println(strRequestKeyAndValues);
    }

}
```

