var gulp = require('gulp'),
    cleanCSS = require('gulp-clean-css'),
    sass = require('gulp-sass'),
    sasslint = require('gulp-sass-lint'),
    globSass = require('gulp-sass-glob'),
    jshint = require('gulp-jshint'),
    stylish = require('jshint-stylish'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    imagemin = require('gulp-imagemin'),
    cache = require('gulp-cache'),
    browserSync = require('browser-sync'),
    del = require('del'),
    autoprefixer = require('gulp-autoprefixer');

/**
 *  Configs gulp
 */
var config = require('./gulp.config.js');

/**
 * Clean
 */
gulp.task('clean', function() {
  'use strict';
  return del([
    config.dist + '*'
  ]);
});

/**
 * Task to validate JS files
 */

gulp.task('js-validate', function() {
  'use strict';
  console.log('Analizing All Javascript Code of project with JSHINT');

  return gulp.src(config.paths.scripts.scriptsValidate)
  .pipe(jshint())
  .pipe(jshint.reporter(stylish))
  .pipe(jshint.reporter('default'));
});

/**
 * Task to validate SCSS files
 */
gulp.task('scss-validate', function () {
  'use strict';
  console.log('Analizing All SCSS Code of project with SASS-lint');

  return gulp.src(config.paths.styles.stylesValidate)
      .pipe(sasslint({
          configFile: './.sass-lint.yml'
      }))
      .pipe(sasslint.format())
      .pipe(sasslint.failOnError());
});

/**
 * Task to minify images
 */
gulp.task('imagemin', function() {
  'use strict';
  return del([config.paths.images.destination]),
    gulp.src(config.paths.images.source)
        .pipe(cache(imagemin({
            optimizationLevel: 5,
            progressive: true,
            interlaced: true
          })))
        .pipe(gulp.dest(config.paths.images.destination));
});

/**
 * Task to move and minify javascripts
 */
gulp.task('scripts', function compiling() {
  'use strict';
  console.log('Minifying JS');
  return gulp
      .src(config.paths.scripts.source)
      .pipe(concat(config.paths.scripts.filename))
      .pipe(uglify())
      .pipe(gulp.dest(config.paths.scripts.destination));
});

/**
 * Task to convert SASS to CSS files with gulp sass and minify using clean-css
 */
gulp.task('sass', function(){
  'use strict';
  console.log('Converting SASS and minifying CSS');
  return gulp.src(config.paths.styles.source + 'styles.scss')
    .pipe(concat(config.paths.styles.filename))
    .pipe(globSass()) //to use sass files imports
    .pipe(sass())
    .pipe(autoprefixer({browsers: ['last 2 versions', '> 5%']}))
    .pipe(cleanCSS())
    .pipe(gulp.dest(config.paths.styles.destination));
});

/**
 * Task to copy all the fonts
 */
gulp.task('copyfonts', ['clean'], function() {
  'use strict';
  console.log('Copying fonts...');
  gulp.src(config.paths.fonts.source + '.{ttf,woff,eof,svg,eot}*')
  .pipe(gulp.dest(config.paths.fonts.destination));
});

/**
 * Watch task
 */
gulp.task('watch', ['sync'], function() {
  'use strict';
  gulp.watch(config.paths.scripts.source + '**/*.js', ['scripts']);
  gulp.watch(config.paths.images.source, ['imagemin']);
  gulp.watch(config.paths.styles.source + '**/*.scss', ['sass']);
});

/**
 * Default task
 */
gulp.task('default', ['clean'], function() {
  'use strict';
  gulp.start('js-validate', 'scss-validate', 'scripts', 'imagemin', 'sass');
});

/**
 * BrowserSync task
 */
gulp.task('sync', ['default'], function () {
  'use strict';
  console.log('Starting browser-sync on port ' + config.defaultPort);

  browserSync.init({
      port: config.sync.defaultPort,
      files: [config.src+'**/*.*', config.dist + '**/*.*'],
      server: './'
  });

  gulp.watch([
    'dist/**'
  ]).on('change', browserSync.reload);
});
