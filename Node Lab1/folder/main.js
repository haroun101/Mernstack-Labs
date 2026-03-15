const fs = require("fs")
const path = require("path")
let folders = [];
fs.mkdir( "newfolder" , {recursive : true} , err => {} )

fs.readdir("folder" ,(err , array) => {
    if(!err){
        console.log(array);
        // let files;
        for(var i = 0 ; i<array.length ;i++){
            let fileName = array[i];
            var extend
            for(var j = 0 ; j < fileName.length ; j++){
                if(fileName[j] == '.'){
                    extend = fileName.substring(j+1);
                }
            }
            // folders.push(extend)
            fs.mkdir(extend , {recursive : true} , err => {})
            const oldPath = path.join("folder" , fileName);
            const newPath =  path.join(extend , fileName);
            fs.rename(oldPath , newPath , err => {
                if(err) console.log(err)
                    else console.log("ok")
            })
        }

        // for(var i = 0 ;i<folders.length ;i++){
        //     const old = path.join("newfolder" , folders);
        //     fs.mkdir(old , {recursive : true} , err => {})
        // }
    }
})
