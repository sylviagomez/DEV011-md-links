const mdLinks = require ('./index');
const path = 'README.MD';
const validate = true;

mdLinks(path, validate)
   .then((res) => console.log(res))
   .catch((err) => console.log(err));
