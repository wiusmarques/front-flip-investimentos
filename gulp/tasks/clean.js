const config = require('../config'),
    del = require('del')

module.exports = function(gulp, plugins){
    return function(cb){
        
        var stream = del('./dist', cb)
        return stream
    }   
}