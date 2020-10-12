const Mock = require('mockjs');
//用法：https://github.com/nuysoft/Mock/wiki/Mock.mock()

//指定被拦截的 Ajax 请求的响应时间，单位是毫秒。值可以是正整数，
Mock.setup({
    timeout: '200-600',
});

Mock.mock('/_api/getData', {
    // 属性 list 的值是一个数组，其中含 10 个元素
    'list|10': [
        {
            // 生成一个大于等于 1、小于等于 20 的整数，
            //属性值 number(1) 只是用来确定类型(这里的1是number类型，不代表数量，如果改成'1', 则数据类型是字符串) 。
            //语法规则：https://github.com/nuysoft/Mock/wiki/Syntax-Specification
            'id|1-20': 1,
        },
    ],
});
