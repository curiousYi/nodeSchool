var fs = require('fs');
var path = require('path');



module.exports = function printFilteredFiles(filePath, fileExt, callBkFn){
    // console.log('heres path ', path)
        // console.log('heres fileExt ', fileExt)

    fs.readdir(filePath, (err, files) => {
        var output = [];
        if (err) {return callBkFn(err)}
        output = files.filter(file =>
            {
                // console.log('file ',file)
                // console.log('extNam ',path.extname(file))
                // console.log('fileExt ',fileExt)
                // console.log(path.extname(file) === fileExt)
                return path.extname(file) === '.' + fileExt
            }
        )

       callBkFn(null, output);
    })
}


