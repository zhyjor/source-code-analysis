module.exports = {
  base: '/source-code-analysis/', //目标地址是：https://openhacking.github.io/vuepress-template/，所以需要配置base地址后缀
  locales: {
    '/': {
      lang: 'zh-CN',
      title: '秋染蒹葭',
      description: '源码分享'
    }
  },
  themeConfig: {
    // displayAllHeaders: true, // 默认值：false
    // sidebar: 'auto',
    locales: {
      '/': {
        // 多语言下拉菜单的标题
        selectText: '选择语言',
        // 该语言在下拉菜单中的标签
        label: '简体中文',
        // 编辑链接文字
        editLinkText: '在 GitHub 上编辑此页',
        // Service Worker 的配置
        serviceWorker: {
          updatePopup: {
            message: "发现新内容可用.",
            buttonText: "刷新"
          }
        },
        // 当前 locale 的 algolia docsearch 选项
        algolia: {},
        nav: [
          // { text: '指南', link: '/guide/', ariaLabel: '指南' },
          { text: '源码学习', link: '/react/', ariaLabel: 'react' },
          { text: '博客', link: 'https://zhyjor.com', ariaLabel: '学习' },
          { text: 'Github', link: 'https://github.com/zhyjor/source-code-analysis' }
        ],
        sidebar: [
          {
            title: 'React源码',   // 必要的
            path: '/react/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: true, // 可选的, 默认值是 true,
            sidebarDepth: 1,    // 可选的, 默认值是 1
            children: [
              {
                title: 'plugin',   // 必要的
                path: '/react/plugin',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 2,    // 可选的, 默认值是 1
                children: ['plugin']
              },
              {
                title: 'theme',   // 必要的
                path: '/react/theme',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 2,    // 可选的, 默认值是 1
                children: ['theme']
              },
            ]
          },
          {
            title: 'Vue源码',   // 必要的
            path: '/vue/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            collapsable: true, // 可选的, 默认值是 true,
            sidebarDepth: 1,    // 可选的, 默认值是 1
            children: [
              {
                title: 'plugin',   // 必要的
                path: '/vue/plugin',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 2,    // 可选的, 默认值是 1
                children: ['plugin']
              },
              {
                title: 'theme',   // 必要的
                path: '/vue/theme',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 2,    // 可选的, 默认值是 1
                children: ['theme']
              },
            ]
          },
        ]
      }
    }
  },

}
