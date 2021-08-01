---
title: 字符串
lang: zh-CN
---

```java
import org.apache.commons.lang.StringEscapeUtils;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class StringUtils {

    public static boolean isBlank(Object str) {
        return str == null || str.toString().isEmpty();
    }

    public static boolean isBlank(String str) {
        return str == null || str.isEmpty();
    }

    public static Pattern TRIM_PATTERN = Pattern.compile("\\s*|\t|\r|\n");

    /**
     * 去除首位空格
     * @param str 输入字符串
     * @return 去除首位空格后的字符串
     */
    public static String trimString(String str) {
        str = str + "";
        str = str.trim();
        return str;
    }

    /**
     * 替换参数格式化
     * @param formatString 待格式化字符串
     * @param matchReplaceList 匹配替换列表
     * @return 替换结果
     */
    public static String parseString(String formatString, Map<String, String> matchReplaceList) {
        int count = matchReplaceList.size();
        String url = formatString;
        for (String key : matchReplaceList.keySet()) {
            url = url.replaceAll(key, matchReplaceList.get(key));
        }
        return url;
    }

    /**
     * 限制字符串长度
     * 如果输入字符串越界，则打印信息
     * @param inputStr 输入字符串
     * @param limitLength 限制字符长度
     * @return 处理后的字符串
     */
    public static String limitLength(String inputStr, int limitLength) {
        // 正则表达式规则
        String regEx = "^\\w*\\s*\\.\\s*";
        // 编译正则表达式
        Pattern pattern = Pattern.compile(regEx);
        // 忽略大小写的写法
        // Pattern pat = Pattern.compile(regEx, Pattern.CASE_INSENSITIVE);
        Matcher matcher = pattern.matcher(inputStr.trim());
        // 查找字符串中是否有匹配正则表达式的字符/字符串
        String result = matcher.replaceAll("");
        if(limitLength > 0 && result.length() > limitLength) {
            result = result.substring(0, limitLength - 1);
        }
        return result;
    }

    /**
     * 清除空白字符串
     * @param str 原始字符串
     * @return 清除空白字符后的字符串
     */
    public static String replaceBlank(String str){
        String dest = null;
        if(str == null){
            return dest;
        }else{
            Matcher m = TRIM_PATTERN.matcher(str);
            dest = m.replaceAll("");
            return dest;
        }
    }

    /**
     * 隐藏信息
     * @param str 输入字符串
     * @param replaceSymbol 替换符号
     * @param beforeLength 开始长度
     * @param afterLength 尾部长度，两者之间内容用符号替换
     * @return 处理后字符串
     */
    public static String hideInfo(String str, String replaceSymbol, int beforeLength, int afterLength) {
        if(StringUtils.isBlank(str)) {
            return str;
        }
        if(StringUtils.isBlank(replaceSymbol)) {
            replaceSymbol = "*";        // 替换字符串，默认使用“*”
        }
        int length = str.length();
        int maxIndex = length - afterLength;
        StringBuffer sb = new StringBuffer();
        for(int i=0; i<length; i++) {
            if(i < beforeLength || (i >= maxIndex && maxIndex>1)) {
                sb.append(str.charAt(i));
            } else {
                sb.append(replaceSymbol);
            }
        }
        return sb.toString();
    }

    /**
     *
     * 方法描述 隐藏银行卡号中间的字符串（使用*号），显示前四后四
     *
     * @param cardNo 卡号
     * @return 处理后字符串
     */
    public static String hideCardNo(String cardNo) {
        return hideInfo(cardNo, "*", 4, 4);
    }

    /**
     *
     * 方法描述 隐藏手机号中间位置字符，显示前三后三个字符
     *
     * @param phoneNo 手机号码
     * @return 处理后字符串
     *
     */
    public static String hidePhoneNo(String phoneNo) {
        return hideInfo(phoneNo, "*", 3, 3);
    }

    /**
     * 隐藏名字
     * @param name 姓名
     * @return
     */
    public static String hideName(String name) {
        return hideInfo(name, "*", 1, 1);
    }

    public static String unescapeXml(String raw) {
        return StringEscapeUtils.unescapeXml(raw);
    }

    public static String escapeXml(String raw) {
        return StringEscapeUtils.escapeXml(raw);
    }
}
```

