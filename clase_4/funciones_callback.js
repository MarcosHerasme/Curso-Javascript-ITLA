// Ejemplo de creacion de funciones


// funcion basica
function miFuncion(callback) {
    console.log('Se ejecuto mi funcion')
    callback()
}

function miCallback() {
    console.log('Saludos desde miCallback')
}

function miCallback2() {
    let edad = 29;
    console.log('Mi edad es: ' + edad)
}


miFuncion(miCallback)
miFuncion(miCallback2)
