// const mdLinks = require('md-links');
const path = require('path');
const fs = require('fs');
const filePath = 'README.md';

function mdLinks(filePath) {
  return new Promise((resolve, reject) => {
    const absolutePath = path.resolve(filePath);
    if (!fs.existsSync(absolutePath)) {  
      reject(new Error('La ruta no existe'))
    }else if (path.extname(absolutePath) !== '.md' ){
      reject(new Error('La ruta no es un archivo Markdown'))
    }else {
      resolve ('funciona');
    }
});
}

module.exports = mdLinks;

console.log(mdLinks (filePath).then(res=>console.log(res)).catch(err=>console.log(err)));