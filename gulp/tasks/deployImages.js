const config = require('../config')
    imagemin = require('gulp-imagemin'),
    newer = require('gulp-newer')

module.exports = function(gulp, plugins){
    return function(){
        var stream = 
            gulp
                .src(config.deployImages.src)
                .pipe(newer(config.deployImages.newer))
                .pipe(
                    imagemin([
                        imagemin.gifsicle(config.deployImages.gifsicle),
                        imagemin.jpegtran(config.deployImages.jpegtran),
                        imagemin.optipng(config.deployImages.optipng),
                        imagemin.svgo(config.deployImages.svgo)
                    ])
                )
                .pipe(gulp.dest(config.deployImages.dest))

        return stream
    }
}