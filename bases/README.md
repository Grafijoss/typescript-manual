# Comandos

- tsc + file_name: transpila el archivo a js
- tsc --init: creates the config file of typescript
- tsc --watch - tsc -w: transpila el archivo de forma automatica
- ctrl + space: muestra las opciones tipo. (ctrl+space)

# Tipos

- Interfaces
- Genericos
- Tuplas

# Depuración 

En el archivo tsconfig.json descomentamos la linea para depurar los archivos ts y no solo los archivos transpilados
crea un archivo .map

```javascript
"sourceMap": true,
```

## Remover los comentarios en los archivos js

En el archivo tsconfig.json descomentamos la linea para eliminar los comentarios de los archivos js y bajar el peso de los archivos

```javascript
"removeComments": true,     
```

## Incluir y excluir carpetas y archivos
En el archivo tsconfig.json al final del objeto podemos añadir las carpetas o archivos que necesitamos

```javascript
"exclude": [
    "nombre_caroeta"
],
"include": [
    "nombre_caroeta"
]
```

## Archivo de salida

En el archivo tsconfig.json descomentamos y definimos la ruta y el nombre de nuestro archivo de salida

```javascript
"module": "AMD", 
"outFile": "./main.js",    
```

## Cambiar el standar de js

En el archivo tsconfig.json definimos la versión

```javascript
"target": "ES6",
```

# Código fuente del curso de TypeScript

Esto es parte de mi curso de TypeScript que enseño en Udemu
[Curso completo de TypeScript](https://fernando-herrera.com/#/search/tu%20completa%20gu%C3%ADa)


[Otros cursos que usan TypeScript](https://fernando-herrera.com/#/search/typescript)

