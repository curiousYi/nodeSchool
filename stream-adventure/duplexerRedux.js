const duplexer2 = require('duplexer2');
const writeStream = require('stream').Writable;

module.exports = function(counter) {
    let chunk = null;
    const countryObj = {};
    while(null !== (chunk = counter.read())){
        let countryCode = chunk.toString();
        if(countryObj[countryCode]){
            countryObj[countryCode]++;
        }
        else{
            countryObj[countryCode] = 1;
        }
    }
    counter.on('end', function(){
        counter.setCounts(countryObj);
    })
    duplex = duplexer2(counter, .stdout);

}
