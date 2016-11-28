var http = require('http');

var output = []

function collectData(response){
    response.setEncoding("utf8");
    response.on("data", function(data){
        output.push(data);
    });
    response.on("error", function(err){
        console.error(err);
    })
    response.on("end", function(end){
        //crucially reliant on periods to end sentences!
        var wholeString = output.join("");
        console.log(wholeString.length);
        console.log(wholeString);
    })
}

var url = process.argv[2];

http.get(url, collectData).on("error", console.error)
