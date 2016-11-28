var http = require('http');
var fs = require('fs');
var map = require('through2-map')
var portNumber = +process.argv[2]
var fileLocation = process.argv[3]

var server = http.createServer();

server.on('request', (req, res) => {

    console.log('reqmethod ,', req.method);

    if(req.method.toLowerCase() === 'post'){
        req.pipe(map(function (chunk) {
           return chunk.toString().toUpperCase().reverse().join('')
         })).pipe(res)
    }
})

server.listen(portNumber);
