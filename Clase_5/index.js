const express = require('express');
const app = express();
const path = require('path');

// Ruta de documentos estáticos
app.use(express.static('recursos'));

// Función de Respuesta
function respuesta(request, response){
  response.send('Por aquí andamos')
};

function el_indexHTML(request, response){
  response.sendFile(path.join(__dirname, '/index.html'))
};

function ejemplo1(request, response){
  response.sendFile(path.join(__dirname, '/ejemplo1.html'))
};

function ejemplo2(request, response){
  response.sendFile(path.join(__dirname, '/ejemplo2.html'))
};

console.log('Hola, Express esta encendido presiona Command . (MacOS) o CRTL C (Windows)');


app.get('/', respuesta)

app.get('/index', el_indexHTML)

app.get('/ejemplo1.html', ejemplo1)

app.get('/ejemplo2.html', ejemplo2)


// Puerto en la red donde se escucha
app.listen(3000)
