const argv = require('./config/yargs');
require('colors');
const { crearArchivoTabla } = require('./helpers/multiplicar')

console.clear()

crearArchivoTabla(argv.b, argv.h, argv.l)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow.bgBlack,' creado'.rainbow.bgBlack))
    .catch(err => console.log(err));

