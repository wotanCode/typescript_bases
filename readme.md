# CURSO TYPESCRIPT

#### Notas
tsc -w O tsc --watch = Iniciammos el modo observador
tsc app = transpila el codigo de ts a javascript
tsc --init = Esto inicia el tsconfig para configuraciones propias de typescript

### tsconfig

#### Documentación
https://www.typescriptlang.org/docs/handbook/tsconfig-json.html

#### sourceMap
Sirve para hacer un map del ts. Solo hay que descomentar en el tsconfig.json el sourcemap y dejarlo como true.
Esto sirve para al usar console.log() me muestra donde se da este pero en el archivo ts, no el JS

#### removeComments
Elimina comentarios al hacer la traspilación de ts a js