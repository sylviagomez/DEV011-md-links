#!/usr/bin/env node
const process = require('process'); 
const mdLinks = require ('./index');
const args = process.argv; 
const path = args[2];
const validate = args.includes('-v', '--validate');
const stats = args.includes('-s', '--stats')

mdLinks(path, validate)
   .then((result) => {
      if (stats) {
         console.log(result.stats);
      } else {
         console.log(result.links);
      }
   })
   .catch((err) => console.log(err));

