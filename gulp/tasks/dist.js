const config = require('../config')

module.exports = function(gulp, plugins){
    return function(){
        var stream = 
            gulp
                .src(config.dist.src)
                .pipe(gulp.dest(config.dist.dest))

        return stream
    }
}