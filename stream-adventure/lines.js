var through = require('through2');
var split = require('split');

var counter = 0;
function write(buffer, encoding, next){
    var str = buffer.toString();
    var output;

    if(counter % 2 === 1){
        output = str.toUpperCase();
        output += '\n';
    }
    else{
        output = str.toLowerCase();
        output += '\n';
    }
    counter++;
    this.push(output)
    next();

}

function end (done) {
    done();
}


process.stdin
    .pipe(split())
    .pipe(through(write, end))
    .pipe(process.stdout)
;


/* /(\r?\n)/  */
