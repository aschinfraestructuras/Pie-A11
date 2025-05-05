// docusaurus.config.js
const config = {
  title: 'Plan de Inspección y Ensayos (PIE)',
  tagline: 'Autovía A-11: Tramo Langa de Duero - Aranda de Duero (22,3 km)',
  favicon: 'img/favicon-asch.ico',

  // URL do site
  url: 'https://pie-a11.vercel.app',
  baseUrl: '/',

  // Info do GitHub - mantida mas sem exibição na UI
  organizationName: 'aschinfraestructuras',
  projectName: 'Pie-A11',

  // Configuração crucial para evitar erro de build
  onBrokenLinks: 'warn',
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
          routeBasePath: '/docs', // Mantém o caminho /docs/
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
    // Aumenta a claridade e simplicidade
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
    },
    navbar: {
      title: 'PIE Autovía A-11',
      logo: {
        alt: 'Logo ASCH',
        src: 'img/logo-asch.png', // Alterado para usar o logo da ASCH
      },
      items: [
        {
          // Alterado para direcionar para a página de introdução que funciona
          to: '/docs/introduccion',
          label: 'Documentación',
          position: 'left',
        },
        {
          to: '/descargas',
          label: 'Descargas',
          position: 'left',
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
              to: '/docs/introduccion',
            },
            {
              label: 'Índice General',
              to: '/docs/introduccion', // Também atualizado para a introdução
            },
          ],
        },
        {
          title: 'Enlaces',
          items: [
            // UTE OHL-ASCH convertido em texto sem link
            {
              html: 'UTE OHL-ASCH',
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
    // Melhorias visuais
    metadata: [{name: 'keywords', content: 'plan, inspeccion, ensayos, autovia, A-11, calidad, obra civil'}],
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 4,
    },
  },
};

module.exports = config;