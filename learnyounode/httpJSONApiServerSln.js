var http = require('http');

//https://nodejs.org/en/docs/guides/anatomy-of-an-http-transaction/
var portNumber = +process.argv[2]

var server = http.createServer()

server.on('request', (req, res) => {
    if(req.method === 'GET' && req.url.slice(0, 14) === '/api/parsetime'){
        console.log('we are here')
        var timeString = req.url.slice(19);
        var dateObj = new Date(timeString);

        var returnObj = {
            hour: dateObj.getHours(),
            minute: dateObj.getMinutes(),
            second: dateObj.getSeconds()
        }

        res.writeHead(200, { 'Content-Type': 'application/json' });

        res.end(JSON.stringify(returnObj))

    }

    if(req.method === 'GET' && req.url.slice(0, 13) === '/api/unixtime'){
        var timeString = req.url.slice(18);
        var unixtime = Date.parse(timeString);

        var returnObj = {
            unixtime: unixtime
        }

        res.writeHead(200, { 'Content-Type': 'application/json' });

        res.end(JSON.stringify(returnObj))
    }
})

server.listen(portNumber);
