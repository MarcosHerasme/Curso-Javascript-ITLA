/*
Diplomado ITLAS 2022 T1
Ejercicios con node.js y terminal


*/

// invocando el paquete npm prompt
let opcionNum = 0;
const prompt = require('/Users/marcosherasme/Documents/GitHub/diplomadoJavascript2022T1/Tarea_JS_ITLA/node_modules/prompt/lib/prompt.js');
prompt.start()

console.clear();
console.log('Estas son las tareas del 1 al 6');
console.log('Elija una opción :');
console.log('1 - Determinar si puede conducir');
console.log('2 - Su calificación');
console.log('3 - Pago por estacionamiento');
console.log('4 - ¿Es par positivo?');
console.log('5 - El valor de su compra');
console.log('6 - El tamaño de la rueda');
console.log('S - Salir');

prompt.get(['opcionNum'], function (err, result) {

let opcionNumero = result.opcionNum;

// console.log(opcionNumero);

switch (opcionNumero) {

    case ('1'):
        console.log('Determinar si puede conducir');
        // Opción 1
        // Indicar si puede conducir.
        console.log('---------------------------------------');
        console.log('----------¿Qué edad tiene?-------------');
        console.log('---------------------------------------');
        console.log(' ');
        prompt.get(['edad'], function (err, result) {
            // console.log('Ingrese los valores:');
            let edad = result.edad
            console.log(' ');

            // Condicion utilizando la instruccion if
            if (edad >= 18) {
                console.log("Usted reune las condiciones minimas")
                console.log("y necesarias para poder conducir")
                console.log(' ');
            }
            else {
              console.log("Usted NO reune las condiciones minimas")
              console.log("y necesarias para poder conducir")
              console.log(' ');
            }
        });
        break;
    // - - - - - - - - - - - - - - - - - -
    case ('2'):
        console.log(' ');
        console.log('Su calificación');
        console.log(' ');
        // Opción 2
        // Calificación según la nota.
        prompt.get(['nota'], function (err, result) {
            // console.log('Ingrese los valores:');
            let nota = result.nota
            console.log(' ');
            // Condicion utilizando la instruccion if
            if (nota < 3) {
                console.log('Muy deficiente')
                console.log(' ');
              }
            else if (nota >= 3 && nota < 5) {
                console.log('Insuficiente')
                console.log(' ');
              }
            else if (nota >= 5 && nota < 6) {
                console.log('Suficiente')
                console.log(' ');
              }
            else if (nota >= 6 && nota < 7) {
                console.log('Bien')
                console.log(' ');
              }
            else if (nota >= 7 && nota < 9) {
                console.log('Notable')
                console.log(' ');
              }
            else if (nota >= 9 && nota < 10) {
                console.log('Sobresaliente')
                console.log(' ')
              } else {
                console.log("Rango de nota no establecido")
                console.log(' ');
              }
        });
        break;
    // - - - - - - - - - - - - - - - - - -
    case ('3'):
        console.log(' ');
        // Opción 3
        // Estacionamiento.
        console.log('---------------------------------------');
        console.log('--------Pago por Estacionamiento-------');
        console.log('---------------------------------------');
        console.log(' ');
        console.log('¿Qué tiempo ha estado estacionado?');
        console.log(' ');
        console.log('Ejemplo: 2 horas 15 minutos => 2.25');
        console.log('Ejemplo: 1 horas 30 minutos => 1.50');
        console.log('Ejemplo: 3 horas 45 minutos => 3.75');
        console.log(' ');
        prompt.get(['horasUso'], function (err, result) {
            // console.log('Ingrese los valores:');
            let horasUso = result.horasUso;
            let pagoUso = Math.ceil(horasUso) * 1.5;
            console.log(' ');
            console.log("Su pago es de: " + pagoUso + ' dólares');
            console.log(' ');
            });
        break;
    // - - - - - - - - - - - - - - - - - -
    case ('4'):
        console.log(' ');
        console.log('¿Es par positivo?');
        console.log(' ');
        // Opción 4
        // un número es o no es, par positivo.
        prompt.get(['numPos'], function (err, result) {
            // console.log('Ingrese los valores:');
            let numPos = result.numPos
            let numRest = result.numPos % 2
            // console.log(numRest);
            console.log(' ');
            // Condicion utilizando la instruccion if
            if (numPos <= 0) {
                console.log('Es negativo')
                console.log(' ');
              }
            else if (numRest === 0) {
                console.log('El numero: ' + numPos + ' es par positivo')
                console.log(' ');
              } else {
                console.log('El numero: ' + numPos + ' NO es par positivo')
                console.log(' ');
              }
        });
        break;
    // - - - - - - - - - - - - - - - - - -
    case ('5'):
        console.log(' ');
        // Opción 5
        // El monto de la compra, el monto del descuento.
        console.log('----------------------------------------');
        console.log('-----¿Cuantas unidades ha comprado?-----');
        console.log('----------------------------------------');
        console.log(' ');
        prompt.get(['unidadesAdd', 'valorProducto'], function (err, result) {
            // console.log('Ingrese los valores:');
            let unidadesAdd = result.unidadesAdd
            let valorProducto = result.valorProducto
            console.log(' ');

            // Condicion utilizando la instruccion if
            if (unidadesAdd <= 36) {
                let valorAhorro = (unidadesAdd * valorProducto) - (unidadesAdd * valorProducto * 0.9)
                console.log("------------------------------------")
                console.log("Su compra hace un total de : " + (unidadesAdd * valorProducto))
                console.log("Su descuento es del 10%, para un ahorro de: " + valorAhorro + ' pesos')
                console.log("Su compra hace un total de : " + (unidadesAdd * valorProducto * .9) + ' pesos')
                console.log(' ');
            }
            else {
                let valorAhorro = (unidadesAdd * valorProducto) - (unidadesAdd * valorProducto * 0.85)
                let regaloNum = (unidadesAdd - 36) % 12
            }
        });
        break;
    // - - - - - - - - - - - - - - - - - -
    case ('6'):
        console.log('El tamaño de la rueda');
        // Opción 6
        // El diámetro de una rueda y su grosor.
        break;
    // - - - - - - - - - - - - - - - - - -
    case ('S'):
        console.log('Gracias por participar, vualva pronto');
        break;
    case ('s'):
        console.log('Gracias por participar, vualva pronto');
        break;
    default:
        console.log('No selecionó nada, 😐');

                          }

});
