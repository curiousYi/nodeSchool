var net = require('net');

var portNumber = +process.argv[2]
// console.log('heres portNumber ',typeof portNumber)

function listener(socket){
    var date = new Date();
    var year = date.getFullYear();
    var adjMonth = date.getMonth() + 1;
    var month = adjMonth.toString().length === 2 ? adjMonth.toString() : '0'+ adjMonth.toString();
    var dd = date.getDate().toString().length === 2 ? date.getDate().toString() : '0' + date.getDate().toString();
    var hours = date.getHours().toString().length === 2 ? date.getHours().toString() : '0' + date.getHours.toString();
    var min = date.getMinutes().toString().length === 2 ? date.getMinutes().toString() : '0' + date.getMinutes().toString();

    var dateToReturn = year + '-' + month + '-'+ dd + ' '+hours + ':'+min;
    // console.log('heres the date ', dateToReturn);
    socket.write(dateToReturn + '\n');
    socket.end();
}
var server = net.createServer(listener)

// console.log('we created a server');
server.listen(portNumber);
