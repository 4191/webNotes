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

<!-- ```
``` -->


