const mdLinks = require ('./index');
const filePath = 'test/archivo-prueba.md';

mdLinks(filePath)
   .then((res) => console.log(res))
   .catch((err) => console.log(err));
