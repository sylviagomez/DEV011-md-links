// const mdLinks = require('md-links');
const { getAbsolutePath,
   validatePathExists,
   validateMdExtension,
   findLinks,
   validateLinks,
   statistics,
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
            .then(validatedLinks => {
               statistics(validatedLinks, validate)
                  .then(stats => {
                     resolve({ links: validatedLinks, stats });
                  })
                  .catch(error => reject(error));
            })
            .catch(error => reject(error));
      } else {
         statistics(links, validate)
            .then(stats => {
               resolve({ links, stats });
            })
            .catch(error => reject(error));
      }
       })
      .catch((error) => {
         reject(error)
      });
});
};

// --------------------------------Exports---------------------------------

module.exports = mdLinks;
