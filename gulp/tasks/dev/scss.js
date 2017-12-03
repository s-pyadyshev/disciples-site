var gulp = require('gulp'),
    $ = require('gulp-load-plugins')(),
    gcmq = require('gulp-group-css-media-queries');
    config = require('../../config');

gulp.task('scss', ['style-modules'], config.wrapPipe(function(success, error) {

    return gulp.src(config.scss.src)
        // .pipe(sourcemaps.init())
        .pipe($.sass({outputStyle: 'expanded'}).on('error', $.sass.logError))
        // .pipe(sourcemaps.write())
        .pipe($.autoprefixer())
        .pipe(gcmq())
        .pipe($.csso())
        .pipe(gulp.dest(config.scss.dest))
}));

gulp.task('style-modules', function() {

    return gulp.src(config.styleModules.src)
        .pipe($.concat('_modules.scss'))
        .pipe(gulp.dest(config.styleModules.dest))
});
