// Ejemplo de condiciones
// condicional switch


const prompt = require('prompt');
prompt.start();
prompt.get(['fruta'], function (err, result) {

    // obtenemos el valor que el usuario digita 
    let fruta = result.fruta

    switch (fruta) {
        case 'uvas':
            console.log('🍇 precio: 150.00 lb');
            break;
        case 'limon':
            console.log('🍋 precio: 50.00 lb');
            break;
        case 'kiwi':
            console.log('🥝 precio: 220.00 lb');
            break;
        case 'papas':
            console.log('🥔 precio 43.00 lb')
        case 'zanahoria':
            console.log('🥕 precio 23.00 lb')
        case 'brocoli':
            console.log('🥦 precio 63.00 lb')
            break;
        default:
            console.log('no se encontro ninguna fruta')
            break;
    }

});