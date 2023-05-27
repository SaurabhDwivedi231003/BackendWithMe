// ===========>>CHALLENGE TIME <<==========

// create a folder name it as Seenu
// create a file in it named bio.txt and add data in it.
// add more data into file with existing data
// read the data without getting buffer data
// file encoding
// rename the file as mybio.txt
// now delete both the file and the folder 



const fs = require('fs');   // import FILE SYSTEM module

// fs.mkdir('Seenu' , (err)=>{
//     console.log('folder created');
// });


//fs.writeFile('./Seenu/bio.txt' , 'this is bio.txt' , (err)=>{
//    console.log('file bio.txt has been created');
//    console.log(err);
//});


// fs.appendFile('./Seenu/bio.txt' , '   adding more in  bio.txt' , (err)=>{
//     console.log(' added more content in bio.txt');
// });

// const data = fs.readFile('./Seenu/bio.txt' , 'utf-8' , (err , data)=>{
//     console.log(err);
//     console.log(data);
// });

// fs.rename( './Seenu/bio.txt' , './Seenu/myBio.txt' , (error)=>{
//     console.log(error);
// });

// fs.unlink('./Seenu/myBio.txt' , (err)=>{
//     console.log("file deleted ")
// });

fs.rmdir('./Seenu' , (err)=>{
    console.log("folder bhi delete krdiya saab !");
})