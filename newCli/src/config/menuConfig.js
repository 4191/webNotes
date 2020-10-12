//menu的路由路径信息可以在这里配置，然后遍历生成，便于之后更改
/**
 * @desc 根据页面路径确当前导航栏选中项
 * @param {*} path 当前页面路径
 */
const dealPath = (path) => {
    let selectedKeys = null;
    switch (path) {
        case 'page1':
            selectedKeys = ['1'];
            break;
        case 'page2':
            selectedKeys = ['2'];
            break;
        case 'page3':
            selectedKeys = ['3'];
            break;
        default:
            selectedKeys = ['0'];
    }
    return selectedKeys;
};

/**
 * @desc 渲染导航栏
 */
const dealNav = [
    {
        subMenu: false,
        key: '1',
        path: '/page1',
        name: 'Page1',
    },
    {
        subMenu: true,
        key: '2',
        path: '/page2',
        name: 'Page2',
        children: [
            {
                key: '2-1',
                path: '/page1',
                name: 'Page1',
            },
            {
                key: '2-2',
                path: '/page3',
                name: 'Page3',
            },
        ],
    },
    {
        subMenu: false,
        key: '3',
        path: '/page3',
        name: 'Page3',
    },
];
//支持下拉框
export { dealPath, dealNav };
