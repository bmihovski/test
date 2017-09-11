var express = require('express');
var http = require('http');
var logger = require('morgan');
var app = express();
// app.use(function (request,response,next) {
//     console.log("In comes a " + request.method + " to " + request.url);
//     next();
// });

app.use(logger('short'));

app.use(function (request,response,next) {
    var minute = (new Date()).getMinutes();
    if ((minute % 2 == 0)) {
        next();
    }else{
        response.statusCode = 403;
        response.end('Not Authorised');
    }
});

app.use(function (request,response) {
   response.end('Secret info: the password is "swordfish,"!');
});

http.createServer(app).listen(3000);