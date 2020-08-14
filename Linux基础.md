# Linux 基础

## mabaxterm 软件的使用

- ssh 域名 i username port 22

## 命令快捷键

- tab
- ctrl u : 删除光标前（当前行）
- ctrl k : 删除光标后（当前行）
- ctrl L: 清屏
- ctrl d: 退出终端
- ctrl a ：移动到行首
- ctrl e： 移动到行尾
- ctrl b\f:左右移动
- ctrl n\p: 上下翻命令
- shift+up: 上翻
- shift+down: 下翻

## linux 基础命令

- ls

  - a 隐藏文件查看
  - h 显示目录、文件大小
  - R 类似 tree

- cd

  - - 上次所在目录
  - ./ 和 ../ : 当前目录/ 上一层目录

- mkdir 建空目录

  - p 递归创建 （mkdir -p 1/1/1/1/1)

- touch 建空文件

- cp 复制

  - r 递归复制
  - f 覆盖同名
  - p 保持原文件权限 （不加 就是谁复制 用谁的权限）

- mv [source][target] 剪切

  - f 覆盖同名文件不提示

- rm 删除

  - f 不提示 前置删除
  - i 提示用户确认
  - r 递归删除

- find [查找范围] 查找

  - name 按名称查
  - iname 忽略大小写
  - size
  - type f 文件类型 d 路径
  - user

  - find . -type d -name -iname "v\*"
  - e.g. find /root/ -name '666'
  - e.g. find . -type f -size +20k -size -100k

- locate 查找文件 （从文件数据库里找，比较快，但不一定实时，可以 updatedb 更新，默认一天更新一次）

- which [命令] 查看命令路径

- whereis [命令] 查看 程序路径、bash 路径、main 手册路径

- ps 查看进程

  - aux 所有进程、以用户为主的格式、当前用户在所有终端的进程
  - ef|grep xx 所有进程、进程信息完整
  - --help

- netstat 查看端口号 （主要看 listen）
  - a 所有 udp 和 tcp 链接
  - n 能显示数字的都显示数字（eg. 22:sshd
  - t tcp
  - u udp
  - p 显示建立相关连接的程序名
- eg. netstat -atup | grep 22

- ss 约等于 netstat

- chmod 赋权

  - x 可执行 1 r 读 4 w 写 2
  - e.g. chmod 700 [file]
  - e.g. chmod +x [file]

- lsof [文件或目录的绝对路径] 查看文件、端口号被那个进程占用

  - i :[端口号]

- tree 树状形式显示目录 （层级过多，服务器会宕机（终端内容均在内存里））

  - L 限制目录显示层级
  - d 只看目录
  - f 只看文件

- echo "6666" > [文件名]

  - > 重定向（删除已有内容)
  - > > 追加重定向

- cat 查看小文件

- tac 反着看小文件

- head/tail 从头/尾看文件

  - 14 指定前 14 行（默认 10 行）
  - e.g. head -14 文件名
    - tail -f 文件名 不退出，一直看（适合实时看日志啥的）

- ifconfig 查看网络信息

  - a 所有
  - 设备名 相关信息

- ethtool 查看网口信息（速率啥的）

  - 设备名

- shutdown 关机（init0）、重启（init6）
  - -r now
  - -h now

## vi 文本编辑器

- 三种工作模式

  - 默认命令模式
  - aio 等进入输入模式 ctrl c 退回命令模式
  - ： 进入末行模式， esc 退回命令模式

- 快捷键
- 编辑模式
  - a 在光标后
  - A 光标行尾
  - i 光标前
  - I 光标行首
  - o 光标下行
  - O 光标上行
  - 1G 或 gg 跳第一行
  - #G 跳第 G 行
- 命令模式

  - dd 删除当前行
  - yy 复制
  - p 贴下行
  - P 贴上行

- 命令

  - / 字符串 搜索字符串
  - n 下一个
  - N 上一个
  - kjhl 上下左右
  - ZZ 保存
  - wq 保存、退出
  - u 撤销
  - U 撤销左右
  - ctrl r 撤销撤销

- 末行

  - set nu 显示行号
  - set nonu 不显示行号
  - w 保存
  - W /root/newfile 另存为 newfile 文件
  - q 不保存退出
  - q! 强制不保存退出
  - [%]s /xx/yy[/g][全局]替换 xx 为 yy[全行]

## 系统文件

- rc.local 自启路径 (注意 x 可执行权限)
- /grub/splash xpm.gz 引导菜单
- /etc/profile 全局变量 系统文件
  - PATH shell 去哪找命令、程序
  - LD_LIBRARY_PATH 动态库默认变量，path 找不到会找这里
  - CPATH 头文件环境变量，指定除默认路径外的地方
  - \$ 变量
  - ： 分割

## 三剑客（grep、sed、awk)

- grep [选项] 查找条件
  - i 忽略大小写
  - v 反向查找（显示除查找条件以外的内容）

## 管道符

- | 传递

# 下位机服务相关

## 启停

## 查看状态

- itb

  ### 目录：\$HRP_HOME

  /home/simpole/V4.0.0

- simpole

### 目录：\$SIMPOLE_HOME (/)

## LT

目录：\$
1630 home/hirain/，其他/home/simpole/V x.x.x

### 配置文件

- cardNum 服务下管几个
- NamingServiceId
- ...
- CorbaEth 找不着就一个个试

## 通用

- debugFlag
- cardNum
- card0Name
- cardxSlot
- 自检 上位机激励等，定位问题
- 起不来可以先 stop 在 start
-

# 堡垒机 （有一层跳板（10.10.10.10））

## vscode 远程开发调试

ssh

simpole 10.10.1.139（10.10.10.10）
centos 7.3 版本以下有影响
服务和 vscode 版本有关系 1.41.0 支持 39
vscod 1.41.0 :cesvn.hirain.net/ce_change/历史文件/esw/software

1. 插件 3 个 remote ssh\ wsh\
2. 免密登录：

   1. ssh-keygen 产生公钥
   2. 导入服务器

3. 小电脑 添加 in.ag.hirain.com 222 hongbin.liang#utf-8
4.
