var express = require('express');
var app = express();
var port = process.env.PORT || 4000;
var middleware = require('./middleware');

app.use(middleware.logger);

app.get('/', middleware.requireAuthentication, function(req, res){
    res.send('the port used is '+ port);
});

app.get('/about', middleware.requireAuthentication, function(req, res){
    res.send('about us');
});

app.use(express.static(__dirname + '/public'));

app.listen(port, function(){
    console.log('use port ' + port);
});