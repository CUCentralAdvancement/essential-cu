'use strict';

const
  // Load gulp plugins and assigning them semantic names.
  gulp            = require('gulp'), // Gulp (duh)
  util            = require('gulp-util'), // Gulp utility plugin, enabling messages, errors and allows the ability to pass in flags
  concat          = require('gulp-concat'),

  // CSS related plugins
  sass            = require('gulp-sass'), // Gulp plugin for Sass compilation
  sassLint        = require("gulp-sass-lint"), // Sass linting
  autoprefixer    = require('gulp-autoprefixer'), // Autoprefixing magic

  // JS related plugins
  jsLint          = require("gulp-jshint"), // JS linting

  // Utility related plugins
  rename          = require('gulp-rename'), // Renames files (E.g. style.css -> style.min.css)
  browserSync     = require('browser-sync').create(),

  paths = {
    npmDir: './node_modules'
  },

  includePaths = [
    // Add paths to any sass @imports that you will use from node_modules here
    paths.npmDir + '/foundation-sites/scss'
  ];


// Static Server + watching scss/html files
// gulp.task('serve', function() {
//
//   browserSync.init({
//       server: "./"
//   });
//
//   gulp.watch("assets/sass/**/*.scss", ['sass']);
//   gulp.watch("./*.html").on('change', browserSync.reload);
//   gulp.watch("assets/css/main.css").on('change', browserSync.reload);
// });

// Compile sass into CSS & auto-inject into browsers
// gulp.task('sass', function() {
//   return gulp.src("assets/sass/main.scss")
//     .pipe(sass().on('error', sass.logError))
//     .pipe(concat('main.css'))
//     .pipe(rename('style.css'))
//     .pipe(autoprefixer({
//       browsers: ['last 2 versions', 'ios >= 8',],
//       cascade: false
//     }))
//     .pipe(gulp.dest("./"))
//     .pipe(browserSync.reload({
//       stream: true
//     }));
// });
gulp.task('build-sass', function () {
  return gulp.src(['assets/sass/main.scss'])
    .pipe(sass({includePaths: includePaths}).on('error', sass.logError))
    .pipe(concat('main.css'))
    .pipe(rename('style.css'))
    .pipe(autoprefixer({
      browsers: [
        'ios >= 8',
        'last 2 versions'
      ]
    }))
    .pipe(gulp.dest('./'))
    .pipe(browserSync.reload({
      stream: true
    }));
});

// gulp.task('default', ['sass', 'serve']);

/**
 * Sass Lint
 */
gulp.task('sass-lint', function () {
  return gulp.src(['assets/sass/**/*.s+(a|c)ss'])
    .pipe(sassLint({configFile: 'sass-lint.yml'}))
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError());
});

/**
 * Javascript
 */
// `gulp js-lint`
gulp.task('js-lint', function () {
  return gulp.src(['js/**/*.js', '!js/**/*.min.js'])
    .pipe(jsLint())
    .pipe(jsLint.reporter('default'));
});

/**
 * Browser-sync
 */
gulp.task('browser-sync', function() {
  browserSync.init({
    server: "./",
    snippetOptions: {
      blacklist: ['/node_modules/**']
    },
    reloadDelay: 2000 // Wait for 2 seconds before any browsers should try to inject/reload a file.
  });
});

/**
 * Gulp Build-CSS
 */
// `gulp build-css`
gulp.task('build-css', ['build-sass']);

/**
 * Gulp Build
 */
// `gulp build` - Add build-js, any other build processes down the road
gulp.task('build', function() {
  return gulp.start('build-css');
});

/**
 * Gulp Watch
 */
// `gulp watch`
gulp.task('watch', ['build', 'browser-sync'], function() {

  gulp.watch("./*.html").on('change', browserSync.reload);
  // gulp.watch("assets/css/main.css").on('change', browserSync.reload);

  // Watch Sass files
  gulp.watch('assets/sass/**/*.scss', ['build-sass']);

  // Watch JS
  gulp.watch([
    'assets/js/**/*.js'
  ]).on('change', function(file) {
    browserSync.reload();
    util.log(util.colors.yellow('Javascript changed' + ' (' + file.path + ')'));
  });
});

