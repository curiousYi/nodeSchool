var trumpet = require('trumpet');
var tr = trumpet();
var through2 = require('through2');

function write(buffer, encoding, next) {
    var str = buffer.toString();
    var output = str.toUpperCase();
    this.push(output)
    next();

}

function end(done) {
    done();
}


var through = through2(write, end);

var loud = tr.select('.loud').createStream();

loud.pipe(through).pipe(loud);


process.stdin.pipe(tr).pipe(process.stdout);
