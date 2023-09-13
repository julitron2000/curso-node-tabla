const fs = require('fs');
var colors = require('colors');

const crearArchivo = async( base = 5, listar = false, hasta = 5 ) => {

    // FORMA 1 DE VOLVERLA PROMESA

    // return new Promise( (resolve, reject) => {
    //     console.log('========================');
    //     console.log(`      Tabla del ${base}  `);
    //     console.log('========================');
    //     let salida = '';

    //     for ( let i = 1; i <= 10; i++) {
    //         salida += `${base} x ${i} = ${base*i}\n`;
    //     }

    //     console.log(salida);

    //     fs.writeFileSync( `tabla-${base}.txt`, salida);

    //     resolve(`tabla ${base}.txt`);

    // })


    // FORMA 2 DE VOLVERLA PROMESA haciendo async a la funcion
    try {
        if(listar){
            console.log('========================'.red);
            console.log(`      Tabla del ${colors.yellow(base)}  `);
            console.log('========================'.red);
        }
        
        let salida = '';
        let guardarSalida = '';
    
        for ( let i = 1; i <= hasta; i++) {
            salida += `${base} ${colors.yellow('x')} ${i} ${colors.yellow('=')} ${base*i}\n`;
            guardarSalida += `${base} x ${i} = ${base*i}\n`;
        }

        if(listar){
            console.log(salida);
        }
        
        fs.writeFileSync( `./salida/tabla-${base}.txt`, guardarSalida);
    
        return `tabla ${base}.txt`;

    } catch (err) {
        throw err;
    }
}

module.exports = {
    crearArchivo
}