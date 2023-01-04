const fs = require('fs');
require('colors');

const crearArchivoTabla = async (base = 5, hasta = 10, listar = false) => {

    try{
        let salida = '';
        let view = '';

        for (let i = 1; i<=hasta; i++){
            view += `${base} ${'x'.green} ${i} = ${base*i}\n`;
            salida += `${base} x ${i} = ${base*i}\n`;
        }
        
        if(listar){
            console.log('================='.green);
            console.log(`  Tabla del: ${base}`.black);
            console.log('================='.green);
            console.log(view);
        }
    
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
    
        return `tabla-${base}.txt`;
    }
    catch(err){
        throw err;
    }

};

module.exports = {
    crearArchivoTabla
}