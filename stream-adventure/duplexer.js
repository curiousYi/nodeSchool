const spawn = require('child_process').spawn;
const duplexer2 = require('duplexer2');

module.exports = function (cmd, args) {
    // spawn the process and return a single stream
    // joining together the stdin and stdout here
    const whatever = spawn(cmd, args);

    duplex = duplexer2(whatever.stdin, whatever.stdout);

    return duplex;
};
