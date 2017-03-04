var gulp = require('gulp'),
    $ = require('gulp-load-plugins')(),
    browserify = require('browserify'),
    babel = require('babelify'),
    fileinclude = require('gulp-file-include'),
    uglify = require('gulp-uglify'),
    source = require('vinyl-source-stream'),
    sourcemaps = require('gulp-sourcemaps'),
    vinylSourceStream = require('vinyl-source-stream'),
    es = require('event-stream'),
    config = require('../../config');

gulp.task('js', ['js-vendor', 'js-app']);

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


// User scripts
gulp.task('js-app', config.wrapPipe(function(success, error) {

    return gulp.src(config.js.src.app)
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file',
            indent: true
        }).on('error', error))
        .pipe(sourcemaps.init())
        .pipe(uglify().on('error', error))
        // .pipe(sourcemaps.write())
        .pipe(gulp.dest(config.js.dest.app))
}));

