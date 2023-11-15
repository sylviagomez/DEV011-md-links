const readline = require('readline')
const fs = require('fs');
const path = require('path'); 
const filePath = 'README.md';
// ------------------------------Absolute path-----------------------------
function getAbsolutePath(filePath) {
      const absolutePath = path.resolve(filePath);
      return absolutePath;
};

// ------------------------------Path exists-------------------------------
function validatePathExists(path) {
   return new Promise((resolve, reject) => {
   if (!fs.existsSync(path)) {  
      reject(new Error('La ruta no existe'))
   }else {
      resolve('La ruta existe')
   }
});
}

// --------------------------Validate MD extension-------------------------
function validateMdExtension(extension) {
   return new Promise((resolve, reject) => {
      const validExtensions = ['.md', '.mkd', '.mdwn', '.mdown', '.mdtxt', '.mdtext', '.markdown', '.text'];
      const pathExtension= path.extname(extension);
   if (!validExtensions.includes(pathExtension.toLowerCase())){
      reject(new Error('La ruta no es un archivo Markdown'))
    }else {
      resolve ('El archivo es Markdown');
}
});
}
// -------------------------------Read file--------------------------------
// console.log("Opening file!");

// fs.stat('README.md', function(err, stats) {
//    if (err) {
//       return console.error(err);
//    }

//    const buf = Buffer.alloc(stats.size);

//    console.log("File open successfully");
//    console.log("Reading the file");

//    fs.open('README.md', 'r', function(err, fd) {
//       if (err) {
//          return console.error(err);
//       }

//       fs.read(fd, buf, 0, buf.length, 0, function(err, bytes) {
//          if (err) {
//             console.log(err);
//          }

//          console.log(bytes + " bytes read");

//          // Print only read bytes to avoid junk.
//          if (bytes > 0) {
//             console.log(buf.slice(0, bytes).toString());
//          }

//          // Close the file
//          fs.close(fd, function(err) {
//             if (err) {
//                console.error(err);
//             }
//             console.log("File closed successfully");
//          });
//       });
//    });
// });

// --------------------------------Exports---------------------------------
module.exports = {
   getAbsolutePath,
   validatePathExists,
   validateMdExtension,
};

console.log(getAbsolutePath(filePath));


validatePathExists (filePath)
.then((res) => console.log(res))
.catch((err) => console.log(err));

validateMdExtension (filePath)
.then((res) => console.log(res))
.catch((err) => console.log(err));