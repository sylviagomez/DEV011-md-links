const mdLinks = require ('./index');
const filePath = 'README.md';

mdLinks(filePath)
   .then((res) => console.log(res))
   .catch((err) => console.log(err));
