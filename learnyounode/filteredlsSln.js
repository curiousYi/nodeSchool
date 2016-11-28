var fs = require('fs');
var path = require('path');



function printFilteredFiles(filePath, fileExt){
    // console.log('heres path ', path)
        // console.log('heres fileExt ', fileExt)

    fs.readdir(filePath, (err, files) => {
        var output = [];
        if (err) {return console.error (err)}
        output = files.filter(file =>
            {
                // console.log('file ',file)
                // console.log('extNam ',path.extname(file))
                // console.log('fileExt ',fileExt)
                // console.log(path.extname(file) === fileExt)
                return path.extname(file) === fileExt
            }
        )
        // console.log('output', output);
        output.forEach(file => {console.log(file)});
    })
}

// console.log('heres process argv ', process.argv)
var filePath = process.argv[2];
var fileExt = '.'+ process.argv[3];

// console.log('heres process argv ', process.argv)
printFilteredFiles(filePath, fileExt)
