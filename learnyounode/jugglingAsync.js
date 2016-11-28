var http = require('http');

var output = []
var counter = 0;

function collectData(url, index) {
    var wholeString;
    var tempString = [];

    http.get(url, (response) =>{
        response.setEncoding("utf8");
        response.on("data", function(data) {
            tempString.push(data);
        });
        response.on("error", function(err) {
            console.error(err);
        })
        response.on("end", function(end) {
            //crucially reliant on periods to end sentences!
            wholeString = tempString.join("");
            // console.log('heres wholeString ', wholeString)
            output[index] = (wholeString);
            counter++;
            if (counter === 3) {
                //        console.log('heres output', output)
                // console.log('heres length ', output.length)
                for (var j = 0; j < output.length; j++) {
                    console.log(output[j]);
                }
            }

        })}

    )

}

var urls = [process.argv[2], process.argv[3], process.argv[4]];


for (var i = 0; i < urls.length; i++) {
    // console.log(url);
    // console.log('heres url ,', urls);
    collectData(urls[i], i);
}

// console.log('heres output ', output);
// // for(str in output){
// //     console.log(str);
// // }
