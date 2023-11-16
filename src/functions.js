const fs = require('fs');
const path = require('path'); 
const filePath = 'docs/01-milestone.md';


// ------------------------------Absolute path-----------------------------
function getAbsolutePath(file) {
      const absolutePath = path.resolve(file);
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
function readingFile(validPath) {
   return new Promise((resolve, reject) => {
     fs.readFile(validPath, 'utf-8', (err, data) => {
       if (err) {
         reject(err);
         return;
       }
        resolve(data);
     });
   });
 }
// --------------------------------Exports---------------------------------
module.exports = {
   getAbsolutePath,
   validatePathExists,
   validateMdExtension,
   readingFile,
};

