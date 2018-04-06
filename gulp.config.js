//paths
var src = './',
    dist = './dist/',
    srcNodeModules = './node_modules/';

// scripts to validate
var jsScriptsValidate = [
  src + 'scripts/**/*.js'
];

// Scss files to validate
var stylesValidate = [
  src + 'scss/base/**/*.scss',
  src + 'scss/components/**/*.scss',
  src + 'scss/layout/**/*.scss',
  src + 'scss/trumps/**/*.scss',
  src + 'scss/util/**/*.scss',
  src + 'scss/variables/**/*.scss',
  '!' + src + 'scss/base/_icomoon.scss'
];

module.exports = {
  src: src,
  dist: dist,
  language: 'CSS',

/*Browser Sync configurations*/
  sync: {
      httpAddress: 'http://localhost:/',
      defaultPort: 3000
  },

  paths: {

      nodemodules: {
          source: srcNodeModules
      },

      scripts: {
        filename: 'scripts.min.js',
        destination: dist + 'scripts/',
        source: [
          src + 'scripts/**/*'
        ],
        scriptsValidate: jsScriptsValidate
      },

      styles: {
        filename: 'styles.min.css',
        source: src + 'scss/',
        destination: dist + 'styles/',
        stylesValidate: stylesValidate
      },

      images: {
          source: src + 'images/**/*',
          destination: dist + 'images/'
      },

      fonts: {
        source: src + 'fonts/**/*',
        destination: dist + 'fonts/'
      },

      reportFolder: './.qualityReports/'
  }
};
