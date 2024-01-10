const fs=require('fs');
const path = require('path');
const dirpath =path.join(__dirname,'files');
//console.warn(dirpath)
// for(i=0;i<5;i++)
// {
//     fs.writeFileSync(dirpath+"/hello"+i+".txt",'simple file');
// }

fs.readdir(dirpath,(err,files)=>{
    //console.warn(files)
    files.forEach((item)=>{
        console.log('file name is ',item)
    })
})