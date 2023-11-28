const fs = require('fs');
const path = require('path'); 
const marked = require('marked');
const axios = require('axios');
const filePath = 'test/archivo-prueba.md';


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

// ------------------------------Find Links---------------------------------
function findLinks(validPath){
   return new Promise ((resolve, reject) => {
      readingFile(validPath)
      .then(fileContent => {
      // Configura el renderizador personalizado
      const renderer = new marked.Renderer();
      const links =[];
      // link(string href, string title, string text)
      renderer.link = function (href, title, text) {
         links.push({
            href: href,
            path: validPath,
            text: text
          });
      return href;
      };
      // Convierte el contenido del archivo utilizando marked y el renderizador personalizado
      marked.parse(fileContent, {renderer:renderer});
      resolve(links);
      
      })
      .catch(error => {
         reject(error);
      });
   });
}

// -----------------------------Validate Links------------------------------
function validateLinks(links){
   return new Promise((resolve) => {
      const hrefLinks = links.map((link) => {
         return axios.get(link.href)
            .then(function (response) {
               // Manejar respuesta exitosa
               if (response.status >= 200 && response.status <= 299) {
                  return{
                     ...link,
                     status: response.status,
                     ok: response.statusText,
                  };
               } 
            })
            .catch(function (response) {
               // Manejar error
               //reject({error});
               return{
                  ...link,
                     status: response.status ? response.status : 'error',
                     ok: response.statusText ? response.statusText :'fail',
               };
            });
      })
      // resolve(Promise.all(hrefLinks))
      Promise.all(hrefLinks)
         .then((validatedLinks) => {
            resolve(validatedLinks);
         })
   });
}

// -------------------------Calculate Stadistics----------------------------
function statistics(linksArray,validate){
   return new Promise((resolve) => {
      let total = 0;
      let unique = 0;
      let broken = 0;
      const uniqueLink = [];
      const brokenLink = [];
      linksArray.forEach(link => {
         if (link.href){
          total ++
          if (!uniqueLink.includes(link.href)) {
            uniqueLink.push(link.href);
            unique++;
            }
         }
      });
      if (validate) {
         linksArray.forEach(link => {
            if (link.status !== undefined && !(link.status >= 200 && link.status <= 299)) {
               brokenLink.push(link.status);
               broken++;
            }

         }); 
      }
      if (validate){
         resolve ({total, unique, broken})
      }      else{
         resolve ({total, unique})
      }      
   })
}

// --------------------------------Exports----------------------------------
module.exports = {
   getAbsolutePath,
   validatePathExists,
   validateMdExtension,
   readingFile,
   findLinks,
   validateLinks,
   statistics,
};
