// const mdLinks = require('md-links');
const { getAbsolutePath,
   validatePathExists,
   validateMdExtension,
   readingFile,
   findLinks,
   validateLinks,
} = require('./functions');




function mdLinks(userPath, validate) {
  return new Promise((resolve, reject) => {
   const absolutePath = getAbsolutePath(userPath);
   validatePathExists(absolutePath)
      .then(() => validateMdExtension(absolutePath))
      .then(() => findLinks(absolutePath))
      .then(links => {
         if (validate) {
            validateLinks(links)
            .then(res=>resolve(res))
         }else{
            resolve(links);
         }
       })
      .catch((error) => {
         reject(error)
      });
});
};

// --------------------------------Exports---------------------------------

module.exports = mdLinks;
