const {
    override,
    addLessLoader,
    useEslintRc,
    disableEsLint,
    overrideDevServer,
    addWebpackAlias,
} = require('customize-cra');
const webpack = require('webpack');
// const PrerenderSpaPlugin = require('prerender-spa-plugin');

//1、自定义环境变量REACT_APP_ENV配置
for (let i = 0; i < process.argv.length; i++) {
    if (process.argv[i].indexOf('--') === 0) {
        let item = process.argv[i]
            .substring('--'.length, process.argv[i].length)
            .split('=');
        process.env[item[0]] = item[1];
    }
}

//2、关闭map打包,只在本地开发local，才会打包
process.env.GENERATE_SOURCEMAP =
    process.env.REACT_APP_ENV !== 'local' ? 'false' : 'true';

//3、progress 进度条插件
const chalk = require('chalk');
const progressBarPlugin = require('progress-bar-webpack-plugin')({
    width: 60,
    format:
        `${chalk.green('build')} [ ${chalk.cyan(':bar')} ]` +
        ` ${chalk.cyan(':msg')} ${chalk.red('(:percent)')}`,
    clear: true,
});

//4、修改build文件夹路劲需要
const path = require('path');
const paths = require('react-scripts/config/paths');
const staticFile = 'build'; //打包出来的资源文件夹（如果不做设置则默认是build文件夹）
paths.appBuild = path.join(path.dirname(paths.appBuild), staticFile);

// 5、本地开发时代理服务器解决跨域问题（仅仅本地开发有效）
const devServerConfig = () => (config) => {
    return {
        ...config,
        // 服务开启gzip
        compress: true,
        proxy: {
            '/_api': {
                target: 'http://localhost:9000',
                changeOrigin: true,
                // pathRewrite: {
                //     '^/': '/',
                // },
            },
        },
    };
};

//6.控制mocks以及日志额打包，优化生产环境代码配置
const DefinePlugin = new webpack.DefinePlugin({
    IS_DEV: JSON.stringify(process.env.REACT_APP_ENV),
});

module.exports = {
    webpack: override(
        //7、样式模块化和antd主题修改等配置
        addLessLoader({
            //localIdentName: '[name]__[local]--[hash:base64:5]',
            lessOptions: {
                javascriptEnabled: true,
                cssModules: {
                    //样式模块化配置（但是这儿似乎不是必须，因为当前的脚手架默认支持）
                    localIdentName: '[path][name]__[local]--[hash:base64:5]',
                },
                //下面这行很特殊，这里是更改主题的关键，这里我只更改了主色，当然还可以更改其他的。
                // modifyVars: {
                //     '@primary-color': '#1890ff',
                //     '@modal-confirm-body-padding': '8px',
                //     '@table-padding-horizontal': '10px',
                //     '@table-padding-vertical': '8px',
                //     '@layout-header-background': '#317CC8',
                //     '@layout-body-background': '#fafafa',
                //     // '@table-header-color': '#F4F4F4',
                // },
            },
        }),

        disableEsLint(), //忽略eslint警告

        // 8、设置路径别名，这样就不需要在项目中引用公用组件或一些公用模块的时候写很长很长的路径了，可根据实际需要配置
        // addWebpackAlias({
        //     ['@']: path.join(__dirname, '/src'),
        //     '@util': path.join(__dirname, '/src/utils'),
        //     '@static': path.join(__dirname, '/src/static'),
        //     '@store': path.join(__dirname, '/src/store'),
        //     '@common': path.join(__dirname, '/src/common'),
        // }),

        // 9、webpack的一些配置项修改，此处修改打包输入目录和编译进度条配置
        (config) => {
            const compress =
                config.optimization.minimizer[0].options.terserOptions.compress;
            // 本地开发无需要设置打包
            if (process.env.REACT_APP_ENV.indexOf('local') === -1) {
                config.output.path = path.join(
                    path.dirname(config.output.path || '/'),
                    staticFile
                );
            }
            if (process.env.REACT_APP_ENV === 'prod') {
                config.optimization.minimizer[0].options.terserOptions.compress = {
                    ...compress,
                    drop_debugger: true,
                    drop_console: true,
                };
            }
            config.plugins.push(progressBarPlugin);
            config.plugins.push(DefinePlugin);

            //10.预渲染方案，目前依然存在问题
            // if (process.env.REACT_APP_ENV !== 'local') {
            //     config.plugins = config.plugins.concat([
            //         new PrerenderSpaPlugin({
            //             staticDir: path.join(__dirname, 'build'),
            //             routes: ['/'],
            //             renderer: new PrerenderSpaPlugin.PuppeteerRenderer({
            //                 injectProperty: '__PRERENDER_INJECTED',
            //                 inject: {
            //                     prerender: true,
            //                 },
            //                 // 这个是监听 document.dispatchEvent 事件，决定什么时候开始预渲染
            //                 // document.dispatchEvent(new Event('render-event'))
            //                 renderAfterDocumentEvent: 'custom-render-trigger',
            //             }),
            //         }),
            //     ]);
            // }

            return config;
        }
    ),
    // 11、本地开发时代理服务器配置
    devServer: overrideDevServer(devServerConfig()),
};
