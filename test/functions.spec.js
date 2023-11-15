const path = require('path');
const fs = require('fs');
const {
  getAbsolutePath,
  validatePathExists,
  validateMdExtension,
} = require('../functions');

// -------------------------------getAbsolutePath---------------------------------
describe('getAbsolutePath', () => {
  it('debería ser una función', () => {
    expect(typeof getAbsolutePath).toBe('function');
  });

  it('debería devolver la ruta absoluta correcta para una ruta relativa', () => {
    const relativePath = 'example.txt';
    const expectedResult = path.resolve(relativePath);
    const result = getAbsolutePath(relativePath);
    expect(result).toBe(expectedResult);
  });

  it('debería devolver la misma ruta para una ruta absoluta', () => {
    const absolutePath = 'C:\\path\\to\\file.txt';
    const result = getAbsolutePath(absolutePath);
    expect(result).toBe(absolutePath);
  });
});

// -------------------------------validatePathExists-------------------------------
describe('validatePathExists', () => {
  it('debería ser una función', () => {
    expect(typeof validatePathExists).toBe('function');
  });

  it('debería resolver con "La ruta existe" para una ruta existente', () => {
    const existingPath =
      'C:\\Users\\vicia\\Documents\\Laboratoria\\DEV011-md-links\\README.md';
    //expect.resolves para devolver el valor de una promesa cumplida
    return expect(validatePathExists(existingPath)).resolves.toBe('La ruta existe');
  });

  it('debería rechazar con un error para una ruta que no existe', () => {
    const nonExistingPath = '/ruta/inexistente';
    //expect.rejects para devolver el valor de una promesa rechazada
    //toThrowError revisa el error específico que manda la función
    return expect(validatePathExists(nonExistingPath)).rejects.toThrowError('La ruta no existe');
  });
});

// -------------------------------validateMdExtension-------------------------------
describe('validateMdExtension', () => {
  it('debería ser una función', () => {
    expect(typeof validateMdExtension).toBe('function');
  });

  it('debería resolver con "El archivo es Markdown" para una extensión de archivo Markdown válida', () => {
    const validExtensions = ['.md', '.mkd', '.mdwn', '.mdown', '.mdtxt', '.mdtext', '.markdown', '.text'];
    // promise.all array iterable de promesas
    // validExtensions.map(ext => { ... }) genera un array de promesas con extensiones válidas
    return Promise.all(validExtensions.map((ext) => {
        return expect(validateMdExtension(`file${ext}`)).resolves.toBe('El archivo es Markdown');
      })
    );
  });

  it('debería rechazar con un error para una extensión de archivo que no es Markdown', () => {
    const invalidExtension = '.txt';
    return expect(validateMdExtension(`file${invalidExtension}`)).rejects.toThrowError('La ruta no es un archivo Markdown');
  });
});
