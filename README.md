# md-Links

## Índice
* [1. Documentación técnica](#1-docuemntación-técnica)
* [2. Guía de uso](#2-guía-de-uso)
* [3. Guía de instalación](#3-guía-de-instalación)
* [4. Diagrama de flujo](#4-diagrama-de-flujo)

**1. Documentación Técnica**

La librería **md-links** es una herramienta construida con Node.js que permite leer y analizar archivos en formato Markdown. Su principal función es identificar los enlaces contenidos en dichos archivos y proporcionar estadísticas sobre ellos. Utiliza las bibliotecas **marked** para el análisis sintáctico del Markdown y **axios** para la validación de los enlaces.

**Funcionalidades**

- **Búsqueda de Enlaces:** Identifica y extrae todos los enlaces presentes en un archivo Markdown.
- **Estadísticas Básicas:** Reporta cuántos enlaces se encontraron y cuántos de ellos son únicos.
- **Validación de Enlaces:** Verifica si los enlaces son válidos, proporcionando información sobre su estado (http status, OK o fail).

**2. Guía de Uso**

**Instalación**

`npm install sylviagomez/DEV011-md-links`

**Comandos**

- **Búsqueda de Enlaces:**

`mdLinks <path> `

Resultado: Array de objetos con información sobre los enlaces encontrados, incluyendo el texto, el enlace y el path absoluto.

- **Validación de Enlaces:**

`mdLinks <path> -v/--validate `

Resultado: Array de objetos con información extendida, incluyendo el estado (OK o roto) de cada enlace.

- **Estadísticas Básicas:**

`mdLinks <path> -s/--stats `

Resultado: Objeto con el total de enlaces y enlaces únicos.

- **Estadísticas con Validación:**

`mdLinks <path> -v/--validate -s/--stats `

Resultado: Objeto con el total de enlaces, enlaces únicos y enlaces rotos.

**Validaciones Previas**

Antes de entregar los resultados, la librería realiza las siguientes validaciones:

- **Existencia de la Ruta:** Verifica que la ruta proporcionada exista.
- **Formato Markdown:** Asegura que el archivo en la ruta especificada sea de formato Markdown.
- **Presencia de Enlaces:** Si el archivo no contiene enlaces, se devuelve un array vacío.

**3. Guía de Instalación**

Para instalar la librería, ejecuta el siguiente comando:

`npm install sylviagomez/DEV011-md-links `

**4. Diagrama de Flujo**

Puedes consultar el diagrama de flujo [aquí](https://lucid.app/lucidchart/8b5c3c22-872f-4164-b7a2-9b3a04da68a0/edit?invitationId=inv_f4981bf5-8d31-4c65-bbe3-1f3860bf58ce&page=0_0).

