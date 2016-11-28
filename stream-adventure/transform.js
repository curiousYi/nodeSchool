var through2 = require('through2');

function write(buffer, encoding, next){
    var str = buffer.toString();
    var output = str.toUpperCase();
    this.push(output)
    next();

}

function end (done) {
        done();
}

var through = through2(write, end);


process.stdin.pipe(through).pipe(process.stdout);
