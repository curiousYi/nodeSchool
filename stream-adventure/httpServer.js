var http = require('http');
var through2 = require('through2');

function write(buf, _, next){
    var str = buf.toString();
    var output = str.toUpperCase();
    this.push(output);
    next();

}

function end (done) {
    done();
}

var through = through2(write, end);

var server = http.createServer(function(req, res) {
  if (req.method === 'POST') {
      req.pipe(through).pipe(res);
  }
});
server.listen(process.argv[2]);
