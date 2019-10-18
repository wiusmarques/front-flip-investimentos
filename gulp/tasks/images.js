const config = require('../config')


module.exports = function(gulp, plugins){
    return function(){
        var stream = 
            gulp
                .src(config.images.src)
                .pipe(gulp.dest(config.images.dest))

        return stream
    }
}