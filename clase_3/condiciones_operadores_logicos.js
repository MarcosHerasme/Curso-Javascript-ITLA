// Ejemplo de condiciones
// condicional if, else, else if
/* 
    Operadores Comparacion: <, >, >=, <=,  ==, ===, !=, !==
    Operadores Logicos: || (or), && (and)
*/ 

const prompt = require('prompt');
prompt.start();
prompt.get(['edad'], function (err, result) {
    // console.log('Ingrese los valores:');
    let edad = result.edad

    // Condicion utilizando la instruccion if
    if (edad > 18 && edad < 35) {
        console.log("👌 Adulto joven")
    }
    else {
        console.log("👉 Rango de edad no establecido")
    }

    if (edad > 18 || edad < 35) {
        console.log("👌 Adulto joven")
    } else {
        console.log("👉 Rango de edad no establecido")
    }
});