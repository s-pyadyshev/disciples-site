var gulp   = require('gulp'),
    $ = require('gulp-load-plugins')(),
    config = require('../../config');

gulp.task('fonts', function() {
    gulp.src(config.fonts.src)
    .pipe($.newer(config.fonts.dest))
    .pipe(gulp.dest(config.fonts.dest))
});
