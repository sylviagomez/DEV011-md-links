// const mdLinks = require('md-links');
const { getAbsolutePath,
   validatePathExists,
   validateMdExtension,
   readingFile,
   findLinks,
} = require('./functions');




function mdLinks(userPath) {
  return new Promise((resolve, reject) => {
   const absolutePath = getAbsolutePath(userPath);
   validatePathExists(absolutePath)
      .then(() => validateMdExtension(absolutePath))
      .then(() => findLinks(absolutePath))
      .then(links => {
         resolve(links);
       })
      .catch((error) => {
         reject(error)
      });
});
};

// --------------------------------Exports---------------------------------

module.exports = mdLinks;
