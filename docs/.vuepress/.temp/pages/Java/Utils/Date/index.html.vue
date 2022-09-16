<template><div><div class="language-java ext-java line-numbers-mode"><pre v-pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>commons<span class="token punctuation">.</span>lang<span class="token punctuation">.</span></span><span class="token class-name">StringUtils</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>joda<span class="token punctuation">.</span>time<span class="token punctuation">.</span></span><span class="token class-name">DateTime</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>joda<span class="token punctuation">.</span>time<span class="token punctuation">.</span></span><span class="token class-name">LocalDate</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>joda<span class="token punctuation">.</span>time<span class="token punctuation">.</span>format<span class="token punctuation">.</span></span><span class="token class-name">DateTimeFormat</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>joda<span class="token punctuation">.</span>time<span class="token punctuation">.</span>format<span class="token punctuation">.</span></span><span class="token class-name">DateTimeFormatter</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>text<span class="token punctuation">.</span></span><span class="token class-name">SimpleDateFormat</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Date</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DateUtils</span> <span class="token punctuation">{</span>
   <span class="token doc-comment comment">/** 时间格式(yyyy-MM-dd) */</span>
   <span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token constant">DATE_PATTERN</span> <span class="token operator">=</span> <span class="token string">"yyyy-MM-dd"</span><span class="token punctuation">;</span>
   <span class="token doc-comment comment">/** 时间格式(yyyy-MM-dd HH:mm:ss) */</span>
   <span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token constant">DATE_TIME_PATTERN</span> <span class="token operator">=</span> <span class="token string">"yyyy-MM-dd HH:mm:ss"</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 日期格式化 日期格式为：yyyy-MM-dd
     * <span class="token keyword">@param</span> <span class="token parameter">date</span>  日期
     * <span class="token keyword">@return</span>  返回yyyy-MM-dd格式日期
     */</span>
   <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token function">format</span><span class="token punctuation">(</span><span class="token class-name">Date</span> date<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">format</span><span class="token punctuation">(</span>date<span class="token punctuation">,</span> <span class="token constant">DATE_PATTERN</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 日期格式化 日期格式为：yyyy-MM-dd
     * <span class="token keyword">@param</span> <span class="token parameter">date</span>  日期
     * <span class="token keyword">@param</span> <span class="token parameter">pattern</span>  格式，如：DateUtils.DATE_TIME_PATTERN
     * <span class="token keyword">@return</span>  返回yyyy-MM-dd格式日期
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token function">format</span><span class="token punctuation">(</span><span class="token class-name">Date</span> date<span class="token punctuation">,</span> <span class="token class-name">String</span> pattern<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>date <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">SimpleDateFormat</span> df <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SimpleDateFormat</span><span class="token punctuation">(</span>pattern<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span> df<span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span>date<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 字符串转换成日期
     * <span class="token keyword">@param</span> <span class="token parameter">strDate</span> 日期字符串
     * <span class="token keyword">@param</span> <span class="token parameter">pattern</span> 日期的格式，如：DateUtils.DATE_TIME_PATTERN
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Date</span> <span class="token function">stringToDate</span><span class="token punctuation">(</span><span class="token class-name">String</span> strDate<span class="token punctuation">,</span> <span class="token class-name">String</span> pattern<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">StringUtils</span><span class="token punctuation">.</span><span class="token function">isBlank</span><span class="token punctuation">(</span>strDate<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token class-name">DateTimeFormatter</span> fmt <span class="token operator">=</span> <span class="token class-name">DateTimeFormat</span><span class="token punctuation">.</span><span class="token function">forPattern</span><span class="token punctuation">(</span>pattern<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> fmt<span class="token punctuation">.</span><span class="token function">parseLocalDateTime</span><span class="token punctuation">(</span>strDate<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toDate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 根据周数，获取开始日期、结束日期
     * <span class="token keyword">@param</span> <span class="token parameter">week</span>  周期  0本周，-1上周，-2上上周，1下周，2下下周
     * <span class="token keyword">@return</span>  返回date[0]开始日期、date[1]结束日期
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Date</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">getWeekStartAndEnd</span><span class="token punctuation">(</span><span class="token keyword">int</span> week<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">DateTime</span> dateTime <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DateTime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">LocalDate</span> date <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LocalDate</span><span class="token punctuation">(</span>dateTime<span class="token punctuation">.</span><span class="token function">plusWeeks</span><span class="token punctuation">(</span>week<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        date <span class="token operator">=</span> date<span class="token punctuation">.</span><span class="token function">dayOfWeek</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">withMinimumValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Date</span> beginDate <span class="token operator">=</span> date<span class="token punctuation">.</span><span class="token function">toDate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Date</span> endDate <span class="token operator">=</span> date<span class="token punctuation">.</span><span class="token function">plusDays</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toDate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span>beginDate<span class="token punctuation">,</span> endDate<span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 对日期的【秒】进行加/减
     *
     * <span class="token keyword">@param</span> <span class="token parameter">date</span> 日期
     * <span class="token keyword">@param</span> <span class="token parameter">seconds</span> 秒数，负数为减
     * <span class="token keyword">@return</span> 加/减几秒后的日期
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Date</span> <span class="token function">addDateSeconds</span><span class="token punctuation">(</span><span class="token class-name">Date</span> date<span class="token punctuation">,</span> <span class="token keyword">int</span> seconds<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">DateTime</span> dateTime <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DateTime</span><span class="token punctuation">(</span>date<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> dateTime<span class="token punctuation">.</span><span class="token function">plusSeconds</span><span class="token punctuation">(</span>seconds<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toDate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 对日期的【分钟】进行加/减
     *
     * <span class="token keyword">@param</span> <span class="token parameter">date</span> 日期
     * <span class="token keyword">@param</span> <span class="token parameter">minutes</span> 分钟数，负数为减
     * <span class="token keyword">@return</span> 加/减几分钟后的日期
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Date</span> <span class="token function">addDateMinutes</span><span class="token punctuation">(</span><span class="token class-name">Date</span> date<span class="token punctuation">,</span> <span class="token keyword">int</span> minutes<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">DateTime</span> dateTime <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DateTime</span><span class="token punctuation">(</span>date<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> dateTime<span class="token punctuation">.</span><span class="token function">plusMinutes</span><span class="token punctuation">(</span>minutes<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toDate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 对日期的【小时】进行加/减
     *
     * <span class="token keyword">@param</span> <span class="token parameter">date</span> 日期
     * <span class="token keyword">@param</span> <span class="token parameter">hours</span> 小时数，负数为减
     * <span class="token keyword">@return</span> 加/减几小时后的日期
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Date</span> <span class="token function">addDateHours</span><span class="token punctuation">(</span><span class="token class-name">Date</span> date<span class="token punctuation">,</span> <span class="token keyword">int</span> hours<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">DateTime</span> dateTime <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DateTime</span><span class="token punctuation">(</span>date<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> dateTime<span class="token punctuation">.</span><span class="token function">plusHours</span><span class="token punctuation">(</span>hours<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toDate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 对日期的【天】进行加/减
     *
     * <span class="token keyword">@param</span> <span class="token parameter">date</span> 日期
     * <span class="token keyword">@param</span> <span class="token parameter">days</span> 天数，负数为减
     * <span class="token keyword">@return</span> 加/减几天后的日期
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Date</span> <span class="token function">addDateDays</span><span class="token punctuation">(</span><span class="token class-name">Date</span> date<span class="token punctuation">,</span> <span class="token keyword">int</span> days<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">DateTime</span> dateTime <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DateTime</span><span class="token punctuation">(</span>date<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> dateTime<span class="token punctuation">.</span><span class="token function">plusDays</span><span class="token punctuation">(</span>days<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toDate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 对日期的【周】进行加/减
     *
     * <span class="token keyword">@param</span> <span class="token parameter">date</span> 日期
     * <span class="token keyword">@param</span> <span class="token parameter">weeks</span> 周数，负数为减
     * <span class="token keyword">@return</span> 加/减几周后的日期
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Date</span> <span class="token function">addDateWeeks</span><span class="token punctuation">(</span><span class="token class-name">Date</span> date<span class="token punctuation">,</span> <span class="token keyword">int</span> weeks<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">DateTime</span> dateTime <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DateTime</span><span class="token punctuation">(</span>date<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> dateTime<span class="token punctuation">.</span><span class="token function">plusWeeks</span><span class="token punctuation">(</span>weeks<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toDate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 对日期的【月】进行加/减
     *
     * <span class="token keyword">@param</span> <span class="token parameter">date</span> 日期
     * <span class="token keyword">@param</span> <span class="token parameter">months</span> 月数，负数为减
     * <span class="token keyword">@return</span> 加/减几月后的日期
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Date</span> <span class="token function">addDateMonths</span><span class="token punctuation">(</span><span class="token class-name">Date</span> date<span class="token punctuation">,</span> <span class="token keyword">int</span> months<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">DateTime</span> dateTime <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DateTime</span><span class="token punctuation">(</span>date<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> dateTime<span class="token punctuation">.</span><span class="token function">plusMonths</span><span class="token punctuation">(</span>months<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toDate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 对日期的【年】进行加/减
     *
     * <span class="token keyword">@param</span> <span class="token parameter">date</span> 日期
     * <span class="token keyword">@param</span> <span class="token parameter">years</span> 年数，负数为减
     * <span class="token keyword">@return</span> 加/减几年后的日期
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">Date</span> <span class="token function">addDateYears</span><span class="token punctuation">(</span><span class="token class-name">Date</span> date<span class="token punctuation">,</span> <span class="token keyword">int</span> years<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">DateTime</span> dateTime <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DateTime</span><span class="token punctuation">(</span>date<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> dateTime<span class="token punctuation">.</span><span class="token function">plusYears</span><span class="token punctuation">(</span>years<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toDate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">String</span> <span class="token function">secondToDate</span><span class="token punctuation">(</span><span class="token class-name">Long</span> result<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Long</span> h <span class="token operator">=</span>  result <span class="token operator">/</span> <span class="token number">3600</span><span class="token punctuation">;</span>
        <span class="token class-name">Long</span> m <span class="token operator">=</span> result <span class="token operator">/</span> <span class="token number">60</span> <span class="token operator">%</span> <span class="token number">60</span><span class="token punctuation">;</span>
        <span class="token class-name">Long</span> s <span class="token operator">=</span> result <span class="token operator">%</span> <span class="token number">60</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> dateString <span class="token operator">=</span> h <span class="token operator">+</span> <span class="token string">":"</span> <span class="token operator">+</span> m <span class="token operator">+</span> <span class="token string">":"</span> <span class="token operator">+</span> s<span class="token punctuation">;</span>
        <span class="token keyword">return</span> dateString<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


