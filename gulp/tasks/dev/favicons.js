var gulp   = require('gulp'),
    $ = require('gulp-load-plugins')(),
    config = require('../../config');


gulp.task('favicons', function() {
    gulp.src(config.paths.favicons.src)
    .pipe($.newer(config.paths.favicons.dest))
    .pipe(gulp.dest(config.paths.favicons.dest))
});
