var gulp  = require('gulp'),
    browserSync = require('browser-sync'),
    config = require('../../config'),
    watch = require('gulp-watch');

gulp.task('setWatch', function() {
    global.isWatching = true;
});

gulp.task('jade-watch', ['jade'], function (done) {
    browserSync.reload();
    done();
});

gulp.task('scss-watch', ['scss'], function (done) {
    browserSync.reload();
    done();
});

gulp.task('js-watch', ['browserify'], function (done) {
    browserSync.reload();
    done();
});

gulp.task('images-watch', ['images'], function (done) {
    browserSync.reload();
    done();
});

gulp.task('svg-watch', ['svg'], function (done) {
    browserSync.reload();
    done();
});

// https://www.browsersync.io/docs/gulp
gulp.task('watch', ['setWatch'], function() {
    browserSync(config.browserSync);
    gulp.watch('src/scss/**/*.scss', ['scss-watch']);
    gulp.watch('src/js/**/*.js', ['js-watch']);
    gulp.watch('src/img/**/*.*', ['images-watch']);
    gulp.watch('src/img/svg/*.svg', ['svg-watch']);
    gulp.watch('src/**/*.jade', ['jade-watch']);
});

// https://habrahabr.ru/post/250569
