## 拉取分支
1. 先clone master主支
```
   git clone [http://myrepo.xxx.com/project/.git]
```
2. git branch -a，列出所有分支名称
3. checkout 你想要的分支
```
   // 拉取远程仓库的【uat】分支，本地命名为【dev】
	git checkout -b dev origin/uat
```

## 上传代码至分支
```
// git push <远程主机名> <本地分支名>:<远程分支名>
git push origin 1630:RKP1630-monitor-panel
```
## 如果远程新建了一个分支，本地没有该分支。 执行如下命令，本地会新加branch_name（与远程分支同名）分支，并自动与远程同名分支关联。
```
git clone xx
git checkout --track origin/branch_name
```

---
## 拉取分支简单版
```
git clone -b 分支名 仓库地址
```
<!-- ```
``` -->

### 阮一峰
```
查看远程库信息，使用git remote -v；

本地新建的分支如果不推送到远程，对其他人就是不可见的；

从本地推送分支，使用git push origin branch-name，如果推送失败，先用git pull抓取远程的新提交；

在本地创建和远程分支对应的分支，使用git checkout -b branch-name origin/branch-name，本地和远程分支的名称最好一致；

建立本地分支和远程分支的关联，使用git branch --set-upstream branch-name origin/branch-name；

从远程抓取分支，使用git pull，如果有冲突，要先处理冲突。
```
