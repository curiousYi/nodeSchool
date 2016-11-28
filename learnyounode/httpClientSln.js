var http = require('http');

function handleResponse(response){
    response.setEncoding("utf8") //converts data to a string
    response.on("data", function(data){
                    console.log(data);
                })
    response.on("error", function(err){
        console.error(err);
    })
}


var url = process.argv[2];

http.get(url, handleResponse)
