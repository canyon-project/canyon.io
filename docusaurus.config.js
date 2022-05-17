const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const GITHUB_URL = 'https://github.com/pnpm/pnpm';
const GITHUB_SPONSOR_URL = 'https://github.com/sponsors/pnpm';
const SPONSOR_URL = 'https://opencollective.com/pnpm';
const TRANSLATE_URL = "https://crowdin.com/project/pnpm";

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
  "customFields": {
    "users": require('./users.json'),
    "repoUrl": GITHUB_URL,
    "translationRecruitingLink": TRANSLATE_URL,
  },
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
            href: 'https://github.com/canyon-project/canyon',
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
            title: 'Community',
            items: [
              {
                label: 'User Showcase',
                href: 'https://canyon-project.github.io/canyon.io/users',
              }
            ],
          },
          {
            title: 'Contributing',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/canyon-project/canyon',
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
        content: '<div>如果你喜欢 Canyon，<a href="https://github.com/canyon-project/canyon" target="_blank">在 GitHub 上给我们一颗星</a>！⭐️</div>',
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
