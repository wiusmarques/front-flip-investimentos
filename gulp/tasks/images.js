const config = require('../config')
    imagemin = require('gulp-imagemin'),
    newer = require('gulp-newer')

module.exports = function(gulp, plugins){
    return function(){
        var stream = 
            gulp
                .src(config.images.src)
                .pipe(newer(config.images.newer))
                .pipe(
                    imagemin([
                        imagemin.gifsicle(config.images.gifsicle),
                        imagemin.jpegtran(config.images.jpegtran),
                        imagemin.optipng(config.images.optipng),
                        imagemin.svgo(config.images.svgo)
                    ])
                )
                .pipe(gulp.dest(config.images.dest))

        return stream
    }
}