// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const {themes} = require('prism-react-renderer')
const lightCodeTheme = themes.duotoneLight;
const darkCodeTheme = themes.duotoneDark;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Sheffield Whisky Society',

  // Set the production url of your site here
  url: 'https://steeldram.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Sheffield Whisky Society', // Usually your GitHub org/user name.
  projectName: 'Sheffield Whisky Society', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          path: 'news',
          blogTitle: 'News',
          routeBasePath: 'news',
          authorsMapPath: 'authors.yml',
          showReadingTime: true,
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
      // Replace with your project's social card
      navbar: {
        title: 'Sheffield Whisky Society',
        logo: {
          alt: 'Sheffield Whisky Society Logo',
          src: 'logo.jpg',
        },
        items: [
          {
            to: '/news', 
            label: 'News', 
            position: 'left'
          },
          {
            to: '/docs/links', 
            label: 'Links', 
            position: 'left'
          }
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} Sheffield Whisky Society.  <a href="mailto:hello@steeldram.com">Contact Us.</a>`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  
};

module.exports = config;
