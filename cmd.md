## 查看被占用端口的 PID

```
netstat -aon | findstr "80" // 列出所有端口情况 | 匹配结果包含为80字段的情况
返回：
TCP    0.0.0.0:808            0.0.0.0:0              LISTENING       5636
TCP    0.0.0.0:7680           0.0.0.0:0              LISTENING       16864
```

## 查看哪个进程或者程序占用了 80 端口

```
tasklist | findstr "5636"

PS D:\win10_Leung\Desktop\bugRepository\webNotes> tasklist | findstr '5636'
OneApp.IGCC.WinService.ex     5636 Services                   0     16,280 K
```

## 使用程序名杀死进程

```
taskkill /f /t /im OneApp.IGCC.WinService.ex
```

## 使用 PID 杀死进程

```
taskkill /f /pid 5636
```
