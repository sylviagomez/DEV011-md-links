const mdLinks = require ('./index');
const filePath = 'docs/01-milestone.md';

mdLinks(filePath)
   .then((res) => console.log(res))
   .catch((err) => console.log(err));
