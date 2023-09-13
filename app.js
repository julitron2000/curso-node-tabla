const {crearArchivo} = require('./helpers/multiplicar');
const argv = require('./config/yargs');
require('colors');


console.clear();


// usando Yargs

crearArchivo( argv.b, argv.l, argv.h)
    .then( (nombreArchivo) => console.log(nombreArchivo.green,' ha sido creado') )
    .catch( (err) => console.log(err) );