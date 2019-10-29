module.exports = {
    title: '前端进阶',
    description: '种一棵树最好的时间是十年前，其次就是现在', // 注入到当前页面的 HTML <head> 中的标签
    head: [
        ['link', { rel: 'icon', href: './img/favicon.png' }], // 增加一个自定义的 favicon(网页标签的图标)
    ],
    markdown: {
        lineNumbers: true // 代码块显示行号
    },
    themeConfig: {
        sidebarDepth: 2, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
        lastUpdated: 'Last Updated' // 文档更新时间：每个文件git最后提交的时间
    },
    base: '/vueDoc/',
    configureWebpack: {
        resolve: {
            alias: {
                '@': '/docs/.vuepress'
            }
        }
    },
    // 导航栏
    themeConfig: {
        // 上边栏
        nav: [{
                text: '前端积累',
                link: '/fundamental/'
            },
            {
                text: '前端算法',
                link: '/algorithm/'
            },
            {
                text: '浏览器相关',
                link: '/browser/'
            }
        ],
        // 侧边栏
        sidebar: {
            '/fundamental/': [{
                'title': '原型链',
                children: [
                    '/fundamental/property/property'
                ]
            }, {
                'title': '异步',
                children: [
                    '/fundamental/async/promise',
                    '/fundamental/async/await',
                    '/fundamental/async/poll'
                ]
            }, {
                'title': '模块化',
                children: [
                    '/fundamental/module/module'
                ]
            }, {
                'title': 'webpack',
                children: [
                    '/fundamental/webpack/webpack'
                ]
            }, {
                'title': 'CSS',
                children: [
                    '/fundamental/css/BFC'
                ]
            }, {
                'title': 'HTML',
                children: [
                    '/fundamental/html/html'
                ]
            }],
            '/algorithm/': [
                '数组',
                // '字符串'
            ],
            '/browser/': [
                '缓存'
            ]
        }
    },
}