//---------------->>PATH MODULES<<-------------------

 const path = require('path');

 console.log(path.dirname('C:/Users/HP/Documents/BACKEND 2.O/Path Module/path.js '));  // give the path
 console.log(path.extname('C:/Users/HP/Documents/BACKEND 2.O/Path Module/path.js '));  // give the extension of file using currently
 console.log(path.basename('C:/Users/HP/Documents/BACKEND 2.O/Path Module/path.js '));  // give the name of file using currently



 // console.log(path.parse('C:/Users/HP/Documents/BACKEND 2.O/Path Module/path.js '));  // upr ki sari information eksath dedega 
 // -------OUTPUT--------
 
 //{
     //  root: 'C:/',
     //  dir: 'C:/Users/HP/Documents/BACKEND 2.O/Path Module',     
     //  base: 'path.js ',
  //  ext: '.js ',
  //  name: 'path'
  //}
  
  //--------->>Suppose we wan to get individual answer like parse.name<<----------
  
  const myPath = path.parse('C:/Users/HP/Documents/BACKEND 2.O/Path Module/path.js ');  // upr ki sari information eksath dedega 
  console.log(myPath.name);
  console.log(myPath.root);