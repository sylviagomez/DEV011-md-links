const mdLinks = require('../src/index'); 

describe('mdLinks', () => {
  it('debería ser una función', () => {
    expect(typeof mdLinks).toBe('function');
  });

  it('debería ser una función que retorna una promesa', () => {
    const filePath = 'test/archivo-prueba.md';
    const result = mdLinks(filePath);
    expect(result).toBeInstanceOf(Promise);
  });
  it('debería rechazar con un error para una ruta inexistente', () => {
    const nonExistingPath = '/ruta/inexistente'; 
    expect(mdLinks(nonExistingPath)).rejects.toThrowError('La ruta no existe');
  });

  it('debería rechazar con un error para un archivo que no es Markdown', () => {
    const filePath = 'C:\\Users\\vicia\\Documents\\Laboratoria\\DEV011-md-links\\test\\README.js'; 
    expect(mdLinks(filePath)).rejects.toThrowError('La ruta no es un archivo Markdown'); 
});

it('debería resolver con los enlaces del archivo Markdown correctamente (sin validación)', () => {
  const filePath = 'test/archivo-prueba.md';
  const expectedLinks = {"links": 
  [{"href": "https://www.google.com/", 
  "text": "https://www.google.com/", 
  "path": "C:\\Users\\vicia\\Documents\\Laboratoria\\DEV011-md-links\\test\\archivo-prueba.md"}], 
  "stats": {"total": 1, "unique": 1}
  }

  return expect(mdLinks(filePath, false)).resolves.toEqual(expectedLinks);
});

it('debería resolver con los enlaces del archivo Markdown correctamente (con validación)', () => {
  const filePath = 'test/archivo-prueba.md';
  const expectedValidatedLinks = {"links": 
  [{"href": "https://www.google.com/", 
  "ok": "OK", "status": 200, 
  "text": "https://www.google.com/", 
  "path": "C:\\Users\\vicia\\Documents\\Laboratoria\\DEV011-md-links\\test\\archivo-prueba.md"}], 
  "stats": {"broken": 0, "total": 1, "unique": 1}
  }
  return expect(mdLinks(filePath, true)).resolves.toEqual(expectedValidatedLinks);
});

})
