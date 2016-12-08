var concat = require('concat-stream');
var http = require('http');


function write(buffer){
    var str = buffer.toString();
    console.log(str.split("").reverse().join(""));

}

process.stdin.pipe(concat(write));


/*https://github.com/nodeschool/discussions/issues/388*/
/* originally I tried to do  .pipe(process.stdout());


/concat is used to buffer the entire contents of another stream, once you've buffered all the contents, it's no longer necessary to stream the data, simpler just to manipulate it directly.

This is why the concat stream is a write-only stream. You pipe a readable stream into concat and then your callback is called once concat is finished reading and concatenating all the data.

Remember the rule readable.pipe(writable). Streams can be read only, write only, or both. If a stream is not readable, you cannot pipe it into another stream./
