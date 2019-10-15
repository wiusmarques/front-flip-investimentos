module.exports = {
    // -------------------------------------------- autoprefixer
    autoprefixer: {
        opts: {
            browsers: ['last 3 versions']
        }
    },
    // --------------------------------------------- browsersync
    browsersync: {
        server: {
            server: 'build',
            index: 'pages/index.html',
        },
        watch: [
            './src/assets/scss/*.scss',
            './src/assets/scss/**/*.scss',
            './src/assets/js/*.js',
            './src/templates/**/*.html', 
        ],
    },
    // --------------------------------------------- styles
    styles: {
        src: {
            custom: './src/assets/scss/*.scss',
            all: [
                './src/assets/scss/**/*.scss',
                './src/assets/scss/*.scss',
            ],
        },
        dest: './build/assets/css',
        concat: 'styles.min.css', 
        mapsPath: 'maps',
        sass: {
            outputStyle: 'expanded',
        }, 
        postcss: {
            removeAll: true,
        }
    },
    // --------------------------------------------- scripts
    scripts: {
        src: {
            custom: './src/assets/js/*.js',
            all: [
                './src/assets/js/vendors/jquery.js',
                './src/assets/js/vendors/lazyload.js',
                './src/assets/js/vendors/bootstrap.js',
                './src/assets/js/vendors/swiper.js',
                './src/assets/js/*.js',
            ],
        },
        dest: 'build/assets/js',
        concat: 'bundle.min.js',
    },
    // --------------------------------------------- templates
    templates: {
        src: {
            pages: [
                './src/templates/**/*.html',
                '!src/templates/partials/**',
            ],
            all: './src/templates/**/*.html',
        },
        dest: 'build/pages',
        nunjunks: {
            searchPaths: ['src/templates/'],
        }
    },
    // --------------------------------------------- images
    images: {
        src: 'src/assets/images/**/*',
        dest: 'build/assets/images',
        newer: 'build/assets/images',
        imagemin: {
            gifsicle: {
                interlaced: true,
            },
            jpegtran: {
                progressive: true,
            },
            optipng: {
                optimizationLevel: 5, 
            },
            svgo: {
                plugins: [{
                    removeViewBox: false,
                    collapseGroups: true,
                }],
            },
        }
    },
    // --------------------------------------------- images
    fonts: {
        src: 'src/assets/fonts/*',
        dest: 'build/assets/fonts',
    },
    // --------------------------------------------- dist
    dist: {
        src: 'build/**',
        dest: 'dist/',
    }
}