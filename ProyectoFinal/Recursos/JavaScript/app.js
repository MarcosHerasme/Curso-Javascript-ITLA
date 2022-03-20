'use strict';

console.log('Hola, la página principal está arriba');

window.addEventListener('load', function(event){
  console.log('La funcion ha sido llamada');
  console.log(getData());

  const data = getData();
  const listado = document.querySelector('#listado');

  for (let i = 0; i < data.length; i++) {
    const trans = data[i];
    const fechaDia = new Date(+trans.fecha_registro).getDate();
    const fechaMes = new Date(+trans.fecha_registro).getUTCMonth()+1;
    const fechaYear = new Date(+trans.fecha_registro).getFullYear();
    listado.innerHTML = listado.innerHTML + `
    <div class="list-group col-6 margen centrado">
      <a href="#" class="list-group-item list-group-item-action active" aria-current="true">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">${trans.type}</h5>
          <small>${fechaDia} - ${fechaMes} - ${fechaYear}</small>
        </div>
        <p class="mb-1">Some placeholder content in a paragraph.</p>
        <small>And some small print.</small>
      </a>
    </div>
        `;
  }
})
