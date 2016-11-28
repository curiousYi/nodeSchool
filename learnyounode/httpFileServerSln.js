var http = require('http');
var fs = require('fs');

var portNumber = +process.argv[2]
var fileLocation = process.argv[3]

var server = http.createServer(function(req, res){
    var readableStream = fs.createReadStream(fileLocation);
    readableStream.setEncoding('utf8');
    readableStream.on('data', (chunk) => { res.write(chunk)});
    readableStream.on('end', () => {res.end()});
})

server.listen(portNumber);
