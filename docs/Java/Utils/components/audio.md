---
title: Audio
lang: zh-CN
---

```java
import javazoom.jl.decoder.Bitstream;
import javazoom.jl.decoder.Header;
import java.io.BufferedInputStream;
import java.io.File;
import java.net.URL;
import java.net.URLConnection;

public class AudioUtils {

    public static Integer getDuration(String url) throws Exception {
//        URL urlfile = new URL(url);
        File file = new File(url);
        if (!file.exists()) {
            return null;
        }
        URL urlfile = file.toURI().toURL();
        URLConnection con = urlfile.openConnection();
        int b = con.getContentLength();// 得到音乐文件的总长度
        BufferedInputStream bis = new BufferedInputStream(con.getInputStream());
        Bitstream bt = new Bitstream(bis);
        Header h = bt.readFrame();
        int time = (int) h.total_ms(b);
        return time / 1000;
    }

}
```

