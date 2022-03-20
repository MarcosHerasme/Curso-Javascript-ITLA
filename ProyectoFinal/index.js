const express = require('express');
const app = express();
const path = require('path');

// Ruta de documentos estáticos
app.use(express.static('Recursos'));
app.use('/librerias', express.static('node_modules'));


// Función de Respuesta
function respuesta(request, response){
  response.send('Por aquí andamos -- nodemon arriba')};

// Páginas del Proyecto
function el_indexHTML(request, response){
  response.sendFile(path.join(__dirname, '/index.html'))};

function ingresos(request, response){
  response.sendFile(path.join(__dirname, '/Paginas/ingresos.html'))};

function egresos(request, response){
  response.sendFile(path.join(__dirname, '/Paginas/egresos.html'))};

console.log('Librerias presentes en el proyecto');
console.log('-- Node.js');
console.log('-- Nodemon');
console.log('-- Bootstrap');
console.log('Hola, Express esta encendido presiona Command . (MacOS) o CRTL C (Windows)');

// Echo
app.get('/', respuesta);

// Página inicial
app.get('/', el_indexHTML);
app.get('/index', el_indexHTML);
app.get('/index.html', el_indexHTML);

app.get('/ingresos.html', ingresos);

app.get('/egresos.html', egresos);



// Puerto en la red donde se escucha
app.listen(3000);
