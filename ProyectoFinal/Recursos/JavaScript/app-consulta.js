"use strict"

window.addEventListener('load', function(event){
  console.log('La funcion Consulta ha sido llamada');
  console.log(getData());

  const listOpera = document.querySelector('#consulta');

  /*Escuchas*/
  listOpera.addEventListener('click', appConsulta);

function appConsulta () {
  const data = getData();
  const listado = document.querySelector('#pantalla');

  /* Generador de listado de transsacciones */
  listado.innerHTML = '<div style="height: 50px;"></div>';
  for (let i = 0; i < data.length; i++) {
    const trans = data[i];
    const fechaDia = new Date(+trans.fecha).getDate();
    const fechaMes = new Date(+trans.fecha).getUTCMonth()+1;
    const fechaYear = new Date(+trans.fecha).getFullYear();
    listado.innerHTML = listado.innerHTML + `
    <div class="list-group col-6 margen centrado">
      <a href="#" class="list-group-item list-group-item-action active" aria-current="true">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">${trans.operacion}</h5>
          <small>${fechaDia} - ${fechaMes} - ${fechaYear}</small>
        </div>
        <p class="mb-1">${trans.nota}</p>
        <small>${trans.tipo}</small>
      </a>
    </div>
        `;
  }; /* Fin del for */
};  /* Fin de la función Generador de listado */
});
