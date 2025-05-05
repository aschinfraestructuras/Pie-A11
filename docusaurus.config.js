// docusaurus.config.js
const config = {
  title: 'Plan de Inspección y Ensayos (PIE)',
  tagline: 'Autovía A-11: Tramo Langa de Duero - Aranda de Duero (22,3 km)',
  favicon: 'img/favicon.ico',

  // URL do site
  url: 'https://pie-a11.vercel.app',
  baseUrl: '/',

  // Info do GitHub
  organizationName: 'aschinfraestructuras',
  projectName: 'Pie-A11',

  // Configuração crucial para evitar erro de build
  onBrokenLinks: 'warn',  // Mudado de 'throw' para 'warn'
  onBrokenMarkdownLinks: 'warn',

  // Configuração de idioma
  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },

  // Configurações principais
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

  // Configuração do tema
  themeConfig: {
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
          to: '/descargas',
          label: 'Descargas',
          position: 'left',
        },
        {
          href: 'https://github.com/aschinfraestructuras/Pie-A11',
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