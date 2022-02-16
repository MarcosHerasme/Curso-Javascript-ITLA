// Ejemplo de condiciones
// condicional if, else, else if
/*
    Operadores Comparacion: <, >, >=, <=,  ==, ===, !=, !==
    Operdaores Logicos: || (or), && (and)
*/

const prompt = require('/Users/marcosherasme/Documents/GitHub/diplomadoJavascript2022T1/clase_3/node_modules/prompt/lib/prompt.js')
prompt.start();
prompt.get(['valor1', 'valor2'], function (err, result) {
    // console.log('Ingrese los valores:');
    let valor1 = result.valor1
    let valor2 = result.valor2

    // Condicion utilizando la instruccion if
    if (valor1 > valor2) {
        console.log("👌 Valor 1 es mayor que el valor 2")
    }
    else if (valor1 < valor2) {
        console.log("👋 Valor 2 es mayor que el valor 1")
    }
    else if (valor1 == valor2) {
        console.log("🤜 Valor 1 es igual a valor 2")
    }
    else {
        console.log("👉 La condicion no se ha cumplido")
    }
});
