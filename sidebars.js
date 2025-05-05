/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'index',
      label: 'Índice General',
    },
    {
      type: 'doc',
      id: 'introduccion',
      label: '1. Introducción',
    },
    {
      type: 'doc',
      id: 'objetivos',
      label: '2. Objetivos',
    },
    {
      type: 'doc',
      id: 'normativa-aplicable',
      label: '3. Normativa Aplicable',
    },
    {
      type: 'category',
      label: '4. Organización del Control de Calidad',
      items: [
        'organizacion/responsabilidades',
        'organizacion/organigrama',
        'organizacion/laboratorios',
      ],
    },
    {
      type: 'category',
      label: '5. Programación de Ensayos',
      items: [
        'programacion/movimiento-tierras',
        'programacion/drenaje',
        'programacion/estructuras',
        'programacion/firmes-pavimentos',
        'programacion/senalizacion',
        'programacion/restauracion',
      ],
    },
    {
      type: 'doc',
      id: 'criterios',
      label: '6. Criterios de Aceptación',
    },
    {
      type: 'doc',
      id: 'documentacion',
      label: '7. Documentación',
    },
    {
      type: 'doc',
      id: 'puntos-inspeccion',
      label: '8. Puntos de Inspección',
    },
    {
      type: 'doc',
      id: 'medios',
      label: '9. Medios Materiales y Humanos',
    },
    {
      type: 'doc',
      id: 'presupuesto',
      label: '10. Presupuesto',
    },
    {
      type: 'doc',
      id: 'anexos',
      label: '11. Anexos',
    },
    {
      type: 'doc',
      id: 'conclusiones',
      label: '12. Conclusiones',
    },
    {
      type: 'doc',
      id: 'descargas',
      label: 'Descargas',
    },
  ],
};

module.exports = sidebars;