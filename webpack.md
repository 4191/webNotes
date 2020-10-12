#webpack

## webpack 打包，何时会输出新文件

1. 代码没变化时，run build 会走，但是没有新文件产生
2. 代码有变化时，run build 会产生新的 html、js 文件，其他静态文件如果已经有了则不再产生新文件覆盖（通过查看文件新建时间得知）

## clean-webpack-plugin 使用方法

新版本直接在 plugins 数组下添加：
new CleanWebpackPlugin 即可

老版本需要添加些配置，如图：
![](img/clean-webpack-plugin%E4%BD%BF%E7%94%A8%E6%96%B9%E6%B3%95.png)

其中新版本引入方式需要用大括号包裹

## happypack 插件 可明细那提高编译、打包速度，自测可减少一半时间

参考:[https://www.qdtalk.com/2018/11/16/webpack4plugin-2/]
自测 rkp1630 总控软件项目中 img 、less 相关文件用与不用效果不大，1s？
估计时多进程取了最长的 js、jsx 文件编译时长
