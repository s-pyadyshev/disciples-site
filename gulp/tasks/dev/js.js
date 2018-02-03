var gulp = require('gulp');
var config = require('../../config');
var $ = require('gulp-load-plugins')();
var browserify = require('browserify');
var babel = require('babelify');
var fileinclude = require('gulp-file-include');
var uglify = require('gulp-uglify');
var source = require('vinyl-source-stream');
var sourcemaps = require('gulp-sourcemaps');
var vinylSourceStream = require('vinyl-source-stream');
var es = require('event-stream');

gulp.task('js', ['js-vendor', 'js-app', 'copy-jquery']);

// Vendor scripts
gulp.task('js-vendor', config.wrapPipe(function(success, error) {

    return gulp.src(config.js.src.vendor)
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file',
            indent: true
        }).on('error', error))
        .pipe(gulp.dest(config.js.dest.vendor))
}));

// Scripts for legacy browsers
gulp.task('js-legacy', config.wrapPipe(function(success, error) {

    return gulp.src(config.jsLegacy.src)
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file',
            indent: true
        }).on('error', error))
        .pipe(gulp.dest(config.jsLegacy.dest))
}));

// User scripts
gulp.task('js-app', config.wrapPipe(function(success, error) {

    return gulp.src(config.js.src.app)
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file',
            indent: true
        }).on('error', error))
        // .pipe(sourcemaps.init())
        // .pipe(uglify().on('error', error))
        // .pipe(sourcemaps.write())
        .pipe(gulp.dest(config.js.dest.app))
}));

gulp.task('browserify', function () {
  var files = [
    'app.js'
  ];
  var tasks = files.map(function (entry) {
    return browserify({
      entries: ['src/js/' + entry],
      debug: true
    })
      .transform(babel)
      .bundle()
      .on('error', $.notify.onError({
        title: "Scripts Error",
        message: "<%= error.message %>"
      }))
      .pipe(vinylSourceStream(entry))
      .pipe(gulp.dest('js/'))
  });
  return es.merge.apply(null, tasks);
});

gulp.task('js-lint', () => {
  return gulp.src('build/js/app.js')
    .pipe($.eslint())
    .pipe($.eslint.format())
    .pipe($.eslint.failAfterError());
});

gulp.task('js-uglify', config.wrapPipe(function(success, error) {

    return gulp.src('js/app.js')
        .pipe(uglify().on('error', error))
        .pipe(gulp.dest('js/app.min.js'))
}));