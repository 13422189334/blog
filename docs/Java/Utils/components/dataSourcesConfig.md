---
title: 多数据源配置
lang: zh-CN
date: 2022-05-16 11:26:43
permalink: /pages/7bf6bc/
categories: 
  - Java
  - Utils
  - components
tags: 
  - 
---

数据库连接多数据源，业务中可能需要调用不同数据库数据。

**1. application.yml**

**注意自己驱动的jar的版本，一定要单独连接每个数据库成功再做多数据源，要不然报错很刺激**

```yaml
server:
  port: 8081
spring:
  http:
    multipart:
      enabled: true
      maxFileSize: 10Mb
      maxRequestSize: 10Mb
  mvc:
    hiddenmethod:
      filter:
        enabled: true
  application:
    name: webapi
  datasource: #database
    primary: # 1.0 DataSourceConfig
      jdbc-url: jdbc:postgresql://12345:12345/12345
      username: 12345
      password: 12345
      driver-class-name: org.postgresql.Driver
    secondary: # 2.0 Datasource
      jdbc-url: jdbc:informix-sqli://12345:12345/12345:informixServer=12345;NEWCODESET=gbk,8859-1,819
      username: 12345
      password: 12345
      driver-class-name: com.informix.jdbc.IfxDriver
```

​	**注意写法，先配置好两个数据源** primary secondary 单数据源数据库连接关键字是url多数据源是jdbc-url 写错就报错。

**2. config类**

​	**数据源的修改，本质上是JDBC的多配置**

​	**先写总配置文件 DataSourceConfig**

```java
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.jdbc.DataSourceBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import javax.sql.DataSource;

@Configuration
public class DataSourceConfig {
    /**
     * 数据源1 引用配置文件 primary
     * @return
     */
    @Primary
    @Bean(name = "primaryDataSource")
    @ConfigurationProperties(prefix = "spring.datasource.primary")
    public DataSource dataSourceSentence() {
        return DataSourceBuilder.create().build();
    }
    /**
     * 数据源2  引用配置文件 secondary
     * @return
     */
    @Primary
    @Bean(name = "secondaryDataSource")
    @ConfigurationProperties(prefix = "spring.datasource.secondary")
    public DataSource dataSourcePreprocess() {
        return DataSourceBuilder.create().build();
    }
}
```

**PrimaryConfig**

```java
import org.apache.ibatis.session.SqlSessionFactory;
import org.mybatis.spring.SqlSessionFactoryBean;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import tk.mybatis.spring.annotation.MapperScan;
import javax.sql.DataSource;

/**
 * 注意这个扫描的包 你的不同mapper那个数据库使用写在对应的包下 对POJO service无关
 */
@Configuration
@MapperScan(basePackages = {"com.picc.web.dao"}, sqlSessionFactoryRef = "sqlSessionFactory1")
public class PrimaryConfig {
    public class MybatisPreprocessConfig {
        /**
         * 和总配置文件注入bean名称一致 其他无需修改
         */
        @Autowired
        @Qualifier("primaryDataSource")
        private DataSource ds1;
        @Bean(name = "sqlSessionFactory1")
        @Primary
        public SqlSessionFactory sqlSessionFactory1() throws Exception {
            SqlSessionFactoryBean sqlSessionFactoryBean = new SqlSessionFactoryBean();
            sqlSessionFactoryBean.setDataSource(ds1);
            return sqlSessionFactoryBean.getObject();
        }
        @Bean
        @Primary
        public SqlSessionTemplate sqlSessionTemplate1() throws Exception {
            SqlSessionTemplate sqlSessionTemplate = new SqlSessionTemplate(sqlSessionFactory1());
            return sqlSessionTemplate;
        }
    }
}
```
​	**SecondaryConfig**

```java

import org.apache.ibatis.session.SqlSessionFactory;
import org.mybatis.spring.SqlSessionFactoryBean;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import tk.mybatis.spring.annotation.MapperScan;
import javax.sql.DataSource;

/**
 * 注意这个扫描的包 你的不同mapper那个数据库使用写在对应的包下 对POJO service无关
*/
@Configuration
@MapperScan(basePackages = {"com.picc.web.dao2"}, sqlSessionFactoryRef = "sqlSessionFactory2")
public class SecondaryConfig {
    /**
     * 和总配置文件注入bean名称一致 其他无需修改
     */
    @Autowired
    @Qualifier("secondaryDataSource")
    private DataSource ds2;
    @Bean(name = "sqlSessionFactory2")
    @Primary
    public SqlSessionFactory sqlSessionFactory2() throws Exception {
        SqlSessionFactoryBean sqlSessionFactoryBean = new SqlSessionFactoryBean();
        sqlSessionFactoryBean.setDataSource(ds2);
        return sqlSessionFactoryBean.getObject();
    }
    @Bean
    @Primary
    public SqlSessionTemplate sqlSessionTemplate2() throws Exception {
        SqlSessionTemplate sqlSessionTemplate = new SqlSessionTemplate(sqlSessionFactory2());
        return sqlSessionTemplate;
    }
}
```

**3. 启动类**

之前写的是EnableAutoConfiguration使用指定数据源配置，我使用的 SpringBoot 2.4 直接写在 SpringBootApplication 即可

```java
import com.ulisesbocchio.jasyptspringboot.annotation.EnableEncryptableProperties;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.scheduling.annotation.EnableScheduling;
import tk.mybatis.spring.annotation.MapperScan;
//@EnableAutoConfiguration(exclude = {DataSourceAutoConfiguration.class})
@EnableScheduling
@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class})
@EnableEncryptableProperties
public class WebapiApplication {
    public static void main(String[] args) {
        SpringApplication.run(WebapiApplication.class, args);
    }
}
```



