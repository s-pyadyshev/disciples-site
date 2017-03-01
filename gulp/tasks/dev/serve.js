var gulp        = require('gulp'),
    browsersync = require('browser-sync'),
    config      = require('../../config');

gulp.task('serve', function() {
    browsersync(config.browsersync);
});
