const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname,'files');
// console.log(dirPath);

// for( var i = 1; i <= 5; i++){
//     fs.writeFileSync(dirPath + `/hello${i}.txt `, `this is multiple file named hello${i}.txt`)
// }

fs.readdir(dirPath,(err,files)=>{
    files.forEach(item => {
        console.log(item);
        
    });
})