const fs = require('fs');
const Cryptr = require('cryptr');

// rl = readline.creteInterface({process.input,process.output});

const cryptr = new Cryptr('password');
const input = process.argv;

//for adding the file with value
//example node makeapi.js [read --operations] [filename.txt] [value for write => values / for read => new filename]

if(input[2]=="add"){
    fs.writeFileSync(input[3],cryptr.encrypt(input[4]));
}
else if(input[2]=="remove"){
    fs.unlinkSync(input[3]);
}
else if(input[2]=="read"){
    fs.readFile(input[3],'utf8',function(err,data){
        if(err) throw err;
        const dec = cryptr.decrypt(data);
        fs.writeFileSync(input[4],dec);
        console.log(dec);
    })
    }
else{
    console.log("invalid option");
}