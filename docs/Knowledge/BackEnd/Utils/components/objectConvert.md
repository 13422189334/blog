---
title: 对象转换
lang: zh-CN
date: 2022-05-16 11:21:30
permalink: /Java/Utils/ObjectConvert
category: 
  - Java工具类
tag: 
  - Java工具类
---

```java
import java.math.BigDecimal;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDateTime;
import java.util.Date;

public class ConvertUtils {
    /**
     * Object转成指定的类型
     * @param obj
     * @param type
     * @param <T>
     * @return
     */
    public static<T> T convert(Object obj, Class<T> type) {
        if (obj != null && !StringUtils.isBlank(obj)) {
            String objStr = obj.toString();
            if (type.equals(Integer.class)||type.equals(int.class)) {
                return (T)new Integer(objStr);
            } else if (type.equals(Long.class)||type.equals(long.class)) {
                return (T)new Long(objStr);
            } else if (type.equals(Boolean.class)||type.equals(boolean.class)) {
                return (T) new Boolean(objStr);
            } else if (type.equals(Short.class)||type.equals(short.class)) {
                return (T) new Short(objStr);
            } else if (type.equals(Float.class)||type.equals(float.class)) {
                return (T) new Float(objStr);
            } else if (type.equals(Double.class)||type.equals(double.class)) {
                return (T) new Double(objStr);
            } else if (type.equals(Byte.class)||type.equals(byte.class)) {
                return (T) new Byte(objStr);
            } else if (type.equals(Character.class)||type.equals(char.class)) {
                return (T)new Character(objStr.charAt(0));
            } else if (type.equals(String.class)) {
                return (T) obj;
            } else if (type.equals(BigDecimal.class)) {
                return (T) new BigDecimal(objStr);
            } else if (type.equals(LocalDateTime.class)) {
                //DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
                return (T) LocalDateTime.parse(objStr);
            } else if (type.equals(Date.class)) {
                try
                {
                    SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss.SSS");
                    return (T) formatter.parse(objStr);
                }
                catch (ParseException e)
                {
                    throw new RuntimeException(e.getMessage());
                }

            }else{
                return null;
            }
        } else {
            if (type.equals(int.class)) {
                return (T)new Integer(0);
            } else if (type.equals(long.class)) {
                return (T)new Long(0L);
            } else if (type.equals(boolean.class)) {
                return (T)new Boolean(false);
            } else if (type.equals(short.class)) {
                return (T)new Short("0");
            } else if (type.equals(float.class)) {
                return (T) new Float(0.0);
            } else if (type.equals(double.class)) {
                return (T) new Double(0.0);
            } else if (type.equals(byte.class)) {
                return (T) new Byte("0");
            } else if (type.equals(char.class)) {
                return (T) new Character('\u0000');
            }else {
                return null;
            }
        }
    }
}
```

