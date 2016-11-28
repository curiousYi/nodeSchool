var through = require('through2');
var split = require('split');

var counter = 0;
function write(buffer, encoding, next){
    var str = buffer.toString();
    var output;
    if(counter % 2 === 0){output = str.toLowerCase() }
    else{output = str.toUpperCase();
    }
    this.push(output)
    counter++;
    next();

}

function end (done) {
    done();
}


process.stdin
    .pipe(split(/(\r?\n)/))
    .pipe(through(write, end))
    .pipe(process.stdout)
;
