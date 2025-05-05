// @ts-check

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Plan de Inspección y Ensayos (PIE)',
  tagline: 'Autovía A-11: Tramo Langa de Duero - Aranda de Duero (22,3 km)',
  favicon: 'img/favicon.ico',

  url: 'https://pie-autovia-a11.vercel.app',
  baseUrl: '/',

  organizationName: 'your-org',
  projectName: 'pie-autovia-a11',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    image: 'img/social-card.jpg',
    navbar: {
      title: 'PIE Autovía A-11',
      logo: {
        alt: 'Logo PIE',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentación',
        },
        {
          href: '/descargas',
          label: 'Descargas',
          position: 'left',
        },
        {
          href: 'https://github.com/your-username/pie-autovia-a11',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentación',
          items: [
            {
              label: 'Introducción',
              to: '/introduccion',
            },
            {
              label: 'Índice General',
              to: '/',
            },
          ],
        },
        {
          title: 'Enlaces',
          items: [
            {
              label: 'UTE OHL-ASCH',
              href: '#',
            },
            {
              label: 'Ministerio de Transportes',
              href: 'https://www.mitma.gob.es/',
            },
          ],
        },
      ],
      copyright: 'Copyright © ' + new Date().getFullYear() + ' UTE Obrascón Huarte Laín - ASCH Infraestructuras y Servicios',
    },
  },
};

module.exports = config;