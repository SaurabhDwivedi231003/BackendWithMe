//  -------------C R U D  OPERATION-----------
// C - Create
// R - Read
// U - Update
// D - Delete


//------------->>Create a Folder 'Saurabh'<<--------------

// const fs = require('fs');
// fs.mkdirSync('Saurabh');

//------------->>Create a file 'bio' inside a Folder 'Saurabh'<<--------------

// fs.writeFileSync('Saurabh/bio.txt' , " WELCOME TO CORE MODULE"); 

//------------->>ADD content inside a file which exist/create new<<--------------

// fs.appendFileSync('Saurabh/bio.txt' , " hello here DUDE !"); 

//------------->>Read a data first in buffer format or then convert to string using 'utf8' <<--------------

// const data = fs.readFileSync('Saurabh/bio.txt' , 'utf8');
// console.log(data);


//------------->>Rename a file <<--------------

// fs.renameSync('Saurabh/bio.txt' , 'Saurabh/mybio.txt');

//------------->> Delete the file permanently <<--------------

// fs.unlinkSync('Saurabh/bio.txt');

//------------->> Delete the directory/folder permanently <<--------------
// fs.rmdirSync('Saurabh');


