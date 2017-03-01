var gulp = require('gulp'),
    $ = require('gulp-load-plugins')(),
    pngquant = require('imagemin-pngquant'),
    config = require('../../config');

    config.imagemin.use = [pngquant()];

// gulp.task('webp', ['images'], function () {
//     return gulp.src(['src/img/*.jpg', 'src/img/*.png'])
//         .pipe($.cached('src/img'))
//         .pipe($.webp())
//         .pipe(gulp.dest('build/img'))
// });

gulp.task('images', ['sprites'], config.wrapPipe(function(success, error) {
    return gulp.src(config.images.src)
        .pipe($.newer(config.images.dest))
        .pipe($.imagemin(config.imagemin).on('error', error))
        .pipe(gulp.dest(config.images.dest))
}));


