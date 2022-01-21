const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

(module.exports = {
  title: 'Canyon',
  tagline: '前端代码覆盖率统计方案',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/canyon.io/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.png',
  organizationName: 'canyon',
  projectName: 'canyon',

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'http://canyon.io/-/tree/master',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Canyon',
        logo: {
          alt: 'Istanbul Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            label: "文档",
            to: "/docs/introduction",
            position: "left",
          },
          {
            label: "更新日志",
            to: "/docs/CHANGELOG",
            position: "left",
          },
          {
            label: "API",
            href: 'http://.com/redoc/',
            position: "left",
          },

          {
            href: 'https://github.com/canyon999/babel-plugin-canyon',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '文档',
            items: [
              {
                label: '介绍',
                href: '/docs/introduction/',
              },
            ],
          },
          {
            title: '相关',
            items: [
              {
                label: '前端覆盖率平台',
                href: 'http://canyon.com',
              },
              {
                label: 'Istanbul',
                href: 'https://istanbul.js.org/',
              }
            ],
          },
          {
            title: '更多',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/canyon999/babel-plugin-canyon',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Canyon, Inc. Built with zhangtao25.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      announcementBar: {
        id: 'support_us',
        content: '<div>如果你喜欢 QuestDB，<a href="https://github.com/canyon999/canyon" target="_blank">在 GitHub 上给我们一颗星</a>！⭐️</div>',
        backgroundColor: '#fafbfc',
        textColor: '#091E42',
        isCloseable: false,
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
        switchConfig: {
          darkIcon: '🌙',
          lightIcon: '\u2600',
          // React inline style object
          // see https://reactjs.org/docs/dom-elements.html#style
          darkIconStyle: {
            marginLeft: '2px',
          },
          lightIconStyle: {
            marginLeft: '1px',
          },
        },
      }
    }),
});
