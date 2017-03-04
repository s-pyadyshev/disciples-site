var dest = "./";
var src = "./src";

var paths = { 
    src: {
        html: 'src/*.jade',
        jade: 'src/**/*.jade',
        css: 'src/main.css',
        styleModules: 'src/scss/modules/**/*.scss',
        scss: 'src/scss/main.scss',
        jsVendor: 'src/js/vendor.js',
        jsApp: 'src/js/app.js',
        jsLegacy: 'src/js/legacy.js',
        fonts: 'src/fonts/**/*.*',
        images: ['src/img/**/*.*', '!src/img/sprite/**/*.*', '!src/img/sprite-2x/**/*.*', '!src/img/svg/*.svg'],
        webp: ['build/img/**/*.jpg', 'build/img/**/*.png'],
        sprites: ['src/img/sprite/**/*.png', 'src/img/sprite-2x/**/*.png'],
        sprites2x: 'src/img/sprite-2x/**/*-2x.png',
        styleSprites: 'src/scss/partials',
        svg: 'src/img/svg/*.svg',
        svgSprite: 'src/templates/_svg.jade',
        favicons: 'src/favicons/*'
    },

    dest: { 
        html: './',
        jade: './',
        css: './',
        styleModules: 'src/scss/partials/',
        scss: './css/',
        jsVendor: './js',
        jsApp: './js',
        jsLegacy: './js',
        fonts: '/fonts',
        images: './img',
        sprites: 'src/img',
        svgSprite: 'src/templates',
        favicons: '/favicons'
    } 
};

module.exports = {

    html: {
        src: paths.src.html,
        dest: paths.dest.html
    },

    jade: {
        src: paths.src.jade,
        dest: paths.dest.jade
    },

    htmlPrettify: {
        'unformatted': [ 'pre', 'code', 'textarea' ],
        'indent_with_tabs': true,
        'preserve_newlines': true,
        'brace_style': 'expand',
        'end_with_newline': true
    },

    scss: {
        src: paths.src.scss,
        dest: paths.dest.scss
    },

    styleModules: {
        src: paths.src.styleModules,
        dest: paths.dest.styleModules
    },

    js: {
        src: {
            vendor: paths.src.jsVendor,
            app: paths.src.jsApp
        },
        dest: {
            vendor: paths.dest.jsVendor,
            app: paths.dest.jsApp
        },
    },

    jsLegacy: {
        src: paths.src.jsLegacy,
        dest: paths.dest.jsLegacy
    },

    images: {
        src: paths.src.images,
        dest: paths.dest.images
    },

    imagemin: {
        progressive: true,
        svgoPlugins: [{removeViewBox: false}],
        interlaced: true
    },

    webp: {
        src: paths.src.webp,
        dest: paths.dest.webp
    },

    sprites: {
        src: paths.src.sprites,
        src2x: paths.src.sprites2x,
        dest: {
            css: paths.src.styleSprites,
            img: paths.dest.sprites,
        },
        dest2x: {
            css: paths.src.styleSprites,
            img: paths.dest.sprites2x,
        },
    },

    sprites2x: {
        src: paths.src.sprites2x
    },

    svg: {
        src: paths.src.svg,
        dest: paths.dest.svg
    },

    svgSprite: {
        src: paths.src.svgSprite,
        dest: paths.dest.svgSprite
    },

    favicons: {
        src: paths.src.favicons,
        dest: paths.dest.favicons
    },

    fonts: {
        src: paths.src.fonts,
        dest: paths.dest.fonts
    },

    browserSync: {
        server: {
            baseDir: './'
        },
        tunnel: false,
        open: "local",
        host: 'localhost',
        port: 3000,
        logPrefix: "webserver"
    },

    // https://habrahabr.ru/post/259225/
    // https://gist.github.com/a1ip/d6f25c31dacb3b96c8cc
    wrapPipe: function(taskFn) {
        return function(done) {
            var onSuccess = function() {
                done();
            };
            var onError = function(err) {
                done(err);
            }
            var outStream = taskFn(onSuccess, onError);
            if(outStream && typeof outStream.on === 'function') {
                outStream.on('end', onSuccess);
            }
        }
    }
};

// https://www.mikestreety.co.uk/blog/advanced-gulp-file
// https://makina-corpus.com/blog/metier/2015/make-your-gulp-modular
