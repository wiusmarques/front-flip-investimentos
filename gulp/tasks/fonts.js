const config = require('../config')

module.exports = function(gulp, plugins){
    return function(){
        var stream = 
            gulp
                .src(config.fonts.src)
                .pipe(gulp.dest(config.fonts.dest))

        return stream
    }
}