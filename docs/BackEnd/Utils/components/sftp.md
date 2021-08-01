---
title: sftp上传下载
lang: zh-CN
---

```java
<!-- Sftp工具 -->
<dependency>
    <groupId>com.jcraft</groupId>
    <artifactId>jsch</artifactId>
    <version>0.1.54</version>
</dependency>
```

```java
import java.io.File;
import java.io.FileOutputStream;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Properties;
import java.util.Vector;
import org.apache.log4j.Logger;
import com.jcraft.jsch.*;
import com.jcraft.jsch.ChannelSftp.LsEntry;

public class SftpClientUtil
{
    private static final Logger logger = Logger.getLogger(SftpClientUtil.class);

    /** Sftp */
    private ChannelSftp sftp = null;
    /** 主机 */
    private String host = "";
    /** 端口 */
    private int port = 0;
    /** 用户名 */
    private String username = "";
    /** 密码 */
    private String password = "";

    /**
     * 构造函数
     *
     * @param host 主机
     * @param port 端口
     * @param username 用户名
     * @param password 密码
     *
     */
    public SftpClientUtil(String host, int port, String username, String password)
    {
        this.host = host;
        this.port = port;
        this.username = username;
        this.password = password;
    }

    /**
     * 连接sftp服务器
     *
     * @throws Exception
     */
    public void connect() throws Exception
    {

        JSch jsch = new JSch();
        Session sshSession = jsch.getSession(this.username, this.host, this.port);
        logger.debug(SftpClientUtil.class + "Session created.");

        sshSession.setPassword(password);
        Properties sshConfig = new Properties();
        sshConfig.put("StrictHostKeyChecking", "no");
        sshSession.setConfig(sshConfig);
        sshSession.connect(20000);
        logger.debug(SftpClientUtil.class + " Session connected.");

        logger.debug(SftpClientUtil.class + " Opening Channel.");
        Channel channel = sshSession.openChannel("sftp");
        channel.connect();
        this.sftp = (ChannelSftp) channel;
        logger.debug(SftpClientUtil.class + " Connected to " + this.host + ".");
    }

    /**
     * Disconnect with server
     * @throws Exception
     */
    public void disconnect() throws Exception
    {
        if (this.sftp != null)
        {
            if (this.sftp.isConnected())
            {
                this.sftp.disconnect();
            } else if (this.sftp.isClosed())
            {
                logger.debug(SftpClientUtil.class + " sftp is closed already");
            }
        }
    }

    /**
     * 下载单个文件
     *
     * @param directory 下载目录
     * @param downloadFile 下载的文件
     * @param saveDirectory 存在本地的路径
     * @throws Exception
     */
    public void download(String directory, String downloadFile, String saveDirectory) throws Exception
    {
        File pathFile = new File(saveDirectory);
        if (!pathFile.exists())
        {
            pathFile.mkdirs();
        }
        String saveFile = saveDirectory + "//" + downloadFile;
        this.sftp.cd(directory);
        File file = new File(saveFile);
        this.sftp.get(downloadFile, new FileOutputStream(file));
    }

    /**
     * 下载目录下全部文件
     *
     * @param directory 下载目录
     * @param saveDirectory 存在本地的路径
     * @throws Exception
     */
    public void downloadByDirectory(String directory, String saveDirectory) throws Exception
    {
        String downloadFile = "";
        List<String> downloadFileList = this.listFiles(directory);
        Iterator<String> it = downloadFileList.iterator();
        while (it.hasNext())
        {
            downloadFile = it.next().toString();
            if (downloadFile.toString().indexOf(".") < 0)
            {
                continue;
            }
            this.download(directory, downloadFile, saveDirectory);
        }
    }

    /**
     * 新建子目录
     *
     * @param dst 远程服务器路径
     * @throws Exception
     */
    public void mkdir(String dst, String subDir) throws Exception
    {
        this.sftp.cd(dst);
        try {
            if(this.sftp.ls(subDir).size() > 0) {
                return;
            }
        } catch (SftpException se) {
            logger.error(se.getMessage());
        }
        this.sftp.mkdir(subDir);
    }

    /**
     * 上传单个文件
     *
     * @param src 本地文件
     * @param dst 远程服务器路径
     * @throws Exception
     */
    public void upload(String src, String dst) throws Exception
    {
        this.sftp.put(src, dst);
    }

    /**
     * 列出目录下的文件
     *
     * @param directory 要列出的目录
     * @return list 文件名列表
     * @throws Exception
     */
    @SuppressWarnings("unchecked")
    public List<String> listFiles(String directory) throws Exception
    {
        Vector fileList;
        List<String> fileNameList = new ArrayList<String>();
        fileList = this.sftp.ls(directory);
        Iterator it = fileList.iterator();
        while (it.hasNext())
        {
            String fileName =((LsEntry) it.next()).getFilename();
            if (".".equals(fileName) || "..".equals(fileName))
            {
                continue;
            }
            fileNameList.add(fileName);
        }
        return fileNameList;
    }

    public ChannelSftp getSftp()
    {
        return sftp;
    }

    public void setSftp(ChannelSftp sftp)
    {
        this.sftp = sftp;
    }
}
```

