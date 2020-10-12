# 脚手架说明

此版本的脚手架是基于 create-react-app 脚手架进行改进的，没有暴露原始配置

## 1.webpack 配置

-   使用 react-app-rewired,customize-cra 来对原始配置进行修改，配置文件在 config-overrides 中。
-   devServer 和 webpack 属性中的 config 参数就是配置额引用，可以在其基础上进行修改。
-   customize-cra 的详细配置信息：https://github.com/arackaf/customize-cra

## 2.文件夹结构

```
│  .eslintignore
│  .eslintrc.json
│  .gitignore
│  .prettierignore
│  .prettierrc.json
│  config-overrides.js
│  package-lock.json
│  package.json
│  README.md
│
├─.vscode
│      launch.json
│
├─public
│      favicon.ico
│      index.html
│      logo192.png
│      logo512.png
│
└─src
    │  App.js
    │  index.js
    │  index.less
    │  setupTests.js
    │
    ├─assets
    │      logo.svg
    │
    ├─components
    ├─config
    │      menuConfig.js
    │
    ├─globalContext
    │      globalContext.js
    │
    ├─pages
    │  ├─app_router
    │  │  │  AppRouter.js
    │  │  │  app_router.css
    │  │  │  app_router.test.js
    │  │  │
    │  │  └─header
    │  │          index.js
    │  │          index.less
    │  │
    │  ├─home
    │  ├─login
    │  │      Login.js
    │  │      login.less
    │  │
    │  ├─not-found
    │  │  │  not-found.less
    │  │  │  NotFound.js
    │  │  │
    │  │  └─images
    │  │          404.png
    │  │
    │  ├─page1
    │  │      Page1.js
    │  │
    │  ├─page2
    │  │      Page2.js
    │  │
    │  └─page3
    │          Component1.js
    │          Component2.js
    │          Page3.js
    │
    ├─service
    │      index.js
    │      request.js
    │
    ├─utils
    │      constants.js
    │      storageUtils.js
    │
    └─__mocks__
            index.js

```

## 3. 文件夹功能

-   .eslintrc.json //eslint 配置文件
-   .gitignore //git 提交忽略文件
-   .prettierignore //prettier 忽略文件
-   .prettierrc.json //prettier 配置文件
-   config-overrides.js //webpack 以及 deserver 配置添加或修改文件
-   .vscode
    │ - launch.json //vscode 启动项目文件，需要注意端口号
-   config //项目中的配置信息
-   public //此文件夹不会被 webpack 处理，webpack 会直接赋值一份，因此放一些不会改动的静态文件，压缩好的插件等。在 public 中引用使用%PUBLIC_URL%，webpack 会自动改写路径
-   src //源码文件夹，webpack 打包文件夹
    -   index.js //webpack 打包入口
    -   setupTests.js //初始化测试环境，在运行测试之前自动执行
    -   assets//可以被 webpack 打包的文件，可以减少 http 请求，无需担心浏览器缓存旧版本
    -   components//公共组件
    -   pages//页面组件
    -   server //请求函数封装文件夹
    -   utils//公用函数，操作等
-   **mocks**//测试模块模拟请求

## 4.新增

-   添加打包需求

    ```json
    {
        "start": "react-app-rewired start --REACT_APP_ENV=local", //本地开发环境，不打包
         "start:test": "react-app-rewired start --REACT_APP_ENV=local_test", //本地测试环境，不打包，使用mock接口
        "build:prod": "react-app-rewired build --REACT_APP_ENV=prod", //打包生产环境，不显示源码。不打包mock
        "build:test": "react-app-rewired build --REACT_APP_ENV=test", //打包测试环境，打包mock，使用mock接口
        "build:dev": "react-app-rewired build --REACT_APP_ENV=dev", //打包开发环境，显示源码，不打包mock
        "test": "react-app-rewired test --env=jsdom"， //测试,如果知道你的测试都不依赖于 jsdom ，可以安全地设置 --env=node ，这样测试会运行得更快
        "eject": "react-scripts eject" //暴露create-react-app的react-scripts里的所有内容(webpack配置，脚本指令配置等)，并将其从node_modules里删除，此过程不可逆，后续react-scripts无法通过npm升级，只能自己维护
    }

    ```

-   添加 eslint(js|mjs|jsx|ts|tsx)，其中 eslint 需要 vscode 安装插件
-   新增 prettier 全局格式化，提交代码格式化
-   webpack 打包进度条,webpack 忽略 eslint 警告
-   测试模块:关于测试部分的测试用例写法:https://www.html.cn/create-react-app/docs/running-tests/
-   改变 antd 的主题颜色
-   context 传递变量以及管理变量：脚手架例子实现动态更新 context，以及使用 hook 接受变量的方法
-   新增使用 axios 封装的 Ajax 请求函数，以及 fetch 封装的 Fetch 请求函数
-   添加 less 和 less-loader,可以在项目中使用 less 文件设置样式

## 5.待增加

-   1. 针对后端返回的大文件，等待时间过长的问题
-   2. 首屏预渲染，依赖一个很大的插件，下载需更改镜像，参考文档：https://www.juejin.im/post/6844903843365404686
-   3. typeScript 脚手架需要单独做
