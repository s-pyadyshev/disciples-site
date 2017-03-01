var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    config = require('../../config'),
    iconfont = require('gulp-iconfont'),
    runTimestamp = Math.round(Date.now() / 1000),
    consolidate  = require('gulp-consolidate'),
    iconfontCss = require('gulp-iconfont-css');

var fontName = 'icons';

gulp.task('iconfont', config.wrapPipe(function(success, error) {

    return gulp.src(config.svg.src)
        .pipe(iconfontCss({
            fontName: fontName,
            path: 'gulp/template/_iconfont.scss',
            targetPath: 'src/scss/partials/iconfont.scss',
            fontPath: 'build/fonts'
        }))
        .pipe(iconfont({
            fontName: fontName,
            prependUnicode: true, /*recommended option*/
            formats: ['ttf', 'eot', 'woff'],
            timestamp: runTimestamp, /*recommended to get consistent builds when watching files*/
            /*If some font glyphs aren't converted properly you should add 
            the normalize: true option and a fontHeight greater than 1000 (fontHeight: 1001).*/
            normalize: true,
            fontHeight: 1024,
        }))
        .pipe(gulp.dest(config.html.dest + "/fonts"));
}));
