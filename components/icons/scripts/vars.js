const vars = {
  // External.
  cagovUrl:
    'https://california.azureedge.net/cdt/statetemplate/5.6.2/fonts/CaGov.svg',
  stateTemplateIconsDir:
    '../../../node_modules/cagov-template-v6/images/icons/',

  // This component.
  componentDir: 'dist',
  componentDirFonts: 'src/fonts/', // If changed, update .eleventy.js
  componentFontAll: 'src/fonts/CaGov.svg',
  componentFileSome: 'cagovSomeIcons.svg',
  componentFileAll: 'dist/allIcons.svg',

  componentSubdir: 'dist/svg',
  componentPatternEach: 'dist/svg/*.svg',

  // DS Website.
  siteDir: '/cagov-icons-svg/', // If changed, update .eleventy.js
  siteFileTemplate: '../../docs/site/_includes/layouts/icon-library.njk',
};

export default vars;
