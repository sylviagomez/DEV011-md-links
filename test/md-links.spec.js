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

  // it('debería resolver con los enlaces del archivo Markdown correctamente', () => {
  //   const filePath = 'test/archivo-prueba.md'; 
  //   const expectedLinks = {"href": "https://www.google.com/", "text": "https://www.google.com/", "title": "C:\\Users\\vicia\\Documents\\Laboratoria\\DEV011-md-links\\test\\archivo-prueba.md"};
  //   expect(mdLinks(filePath)).resolves.toEqual([expectedLinks]);  
  // });

  it('debería rechazar con un error para una ruta inexistente', () => {
    const nonExistingPath = '/ruta/inexistente'; 
    expect(mdLinks(nonExistingPath)).rejects.toThrowError('La ruta no existe');
  });

  it('debería rechazar con un error para un archivo no Markdown', () => {
    const filePath = 'C:\\Users\\vicia\\Documents\\Laboratoria\\DEV011-md-links\\test\\README.js'; 
    expect(mdLinks(filePath)).rejects.toThrowError('La ruta no es un archivo Markdown'); 
});

it('debería resolver con los enlaces del archivo Markdown correctamente (sin validación)', () => {
  const filePath = 'test/archivo-prueba.md';
  const expectedLinks = {
    href: 'https://www.google.com/',
    text: 'https://www.google.com/',
    title: 'C:\\Users\\vicia\\Documents\\Laboratoria\\DEV011-md-links\\test\\archivo-prueba.md',
  };

  return expect(mdLinks(filePath, false)).resolves.toEqual([expectedLinks]);
});

it('debería resolver con los enlaces del archivo Markdown correctamente (con validación)', () => {
  const filePath = 'test/archivo-prueba.md';
  const expectedValidatedLinks = {
    href: 'https://www.google.com/',
    text: 'https://www.google.com/',
    title: 'C:\\Users\\vicia\\Documents\\Laboratoria\\DEV011-md-links\\test\\archivo-prueba.md',
    status: 200,
    ok: 'OK',
  };

  return expect(mdLinks(filePath, true)).resolves.toEqual([expectedValidatedLinks]);
});

})
