// const mdLinks = require('md-links');
const { getAbsolutePath,
   validatePathExists,
   validateMdExtension,
} = require('./functions');




function mdLinks(userPath) {
  return new Promise((resolve, reject) => {
   const absolutePath=getAbsolutePath(userPath);
   validatePathExists(absolutePath)
      .then(() => validateMdExtension(absolutePath))
      .then(() => {
         console.log('Todas las validaciones han pasado correctamente.');
      })
      .catch((error) => {
         console.error('Error:', error.message);
      });
});
};

// --------------------------------Exports---------------------------------

module.exports = mdLinks;
