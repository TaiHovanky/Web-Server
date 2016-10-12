var middleware = {
    requireAuthentication: function(req, res, next){
        console.log('private route hit');
        next();
    }, //requireAuthentication runs first before rest of functions. Next tells comp to move on
    logger: function(req, res, next){
        console.log('request: ' + new Date().toString() + ' ' + req.method + ' ' + req.originalUrl); //prints Get, Post, etc.
        next();
    }
}

module.exports = middleware;