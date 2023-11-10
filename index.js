module.exports = () => {
  // ...
};

const mdLinks = require("md-links");
const { unlink } = require('node:fs/promises');

function deleteFile(path) {
  return unlink(path)
    .then(() => {
      console.log(`successfully deleted ${path}`);
    })
    .catch((error) => {
      console.error('there was an error:', error.message);
    });
}

deleteFile('/tmp/hello');

mdLinks("./some/example.md")
  .then(links => {
    // => [{ href, text, file }, ...]
  })
  .catch(console.error);