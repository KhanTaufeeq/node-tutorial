// reading files

const fs = require('fs');
// const { log } = require('util');

// fs.readFile('./docs/blog1.txt', (err,data) => {
//     if(err){
//         console.log(err);
//     }else{
//         console.log(data.toString());
//     }
// });

// console.log('before readFile');

// writing files 

// edit the same file
fs.writeFile('./docs/blog1.txt', 'writing file',() => {
    console.log('file was written');
})


// creates a new file
fs.writeFile('./docs/blog2.txt', 'writing in a new file',() => {
    console.log('second file was written');
})

fs.writeFile('./docs/blog3.txt', 'Node JS', () => {
    console.log('a new file is created');
});

console.log('how to create a new file and write something in it');

// dictionaries

if(!fs.existsSync('./template')){
    fs.mkdir('./template', err => {
        if(err) {
            console.log(err);
        } else{
            console.log('folder created');
        }
    })
}


