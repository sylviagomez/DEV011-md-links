// const mdLinks = require('md-links');
const { getAbsolutePath,
   validatePathExists,
   validateMdExtension,
   readingFile,
} = require('./functions');




function mdLinks(userPath) {
  return new Promise((resolve, reject) => {
   const absolutePath=getAbsolutePath(userPath);
   validatePathExists(absolutePath)
      .then(() => validateMdExtension(absolutePath))
      .then(() => readingFile(absolutePath))
      .then(fileContent => {
         resolve(fileContent);
       })
      .catch((error) => {
         console.error('Error:', error.message);
      });
});
};

// --------------------------------Exports---------------------------------

module.exports = mdLinks;
