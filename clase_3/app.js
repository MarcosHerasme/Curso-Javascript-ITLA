// Incluimos la lirearia prompt a nuestro codigo
// para poder utilizarla
const prompt = require('prompt')

let nombre = ''

// Es necesario iniciar el prompt para poder utilizarlo y lo hacemos
// con la siguiente instrucción
prompt.start()

// Con la siguiente instruccion solicitamos valores al usuario
prompt.get(['nombre'], function (err, result) {
    console.log('Dime tu nombre:')
    console.log('Tu nombre es: ' + result.nombre)
})
