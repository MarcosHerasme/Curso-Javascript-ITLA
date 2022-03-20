'use strict';

const balance = document.querySelector('#operacion');

/*Escuchas*/
balance.addEventListener('click', regOp);

function regOp(event){

  const pantalla = document.querySelector('#pantalla');

  console.log('Hola, Aqui operaciones arriba');
  console.log('- - - - -');

  pantalla.innerHTML = `
    <main class="container position-fixed top-50 start-50 translate-middle">
      <div class="row justify-content-center">
        <div class="col-sm-auto">
          <div class="card">
            <div class="card-header">
              <h3 class="card-title">Registro de Operaciones</h3>
            </div>
              <div class="card-body">
                  <form id="entrada">
                  <div id="radioButtons" class="d-flex justify-content-evenly">
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value="Ingreso">
                    <label class="form-check-label" for="flexRadioDefault1">
                      Ingresos
                    </label>
                  </div>
                  <div class="form-check my-1">
                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" value="Egreso" checked>
                    <label class="form-check-label" for="flexRadioDefault2">
                      Egresos
                    </label>
                  </div>
                  </div>
                  <div class="mb-3 my-1 mt-2">
                  <label for="form-select" class="form-label">Tipo</label>
                    <select id="listado-tipo" class="form-select" aria-label="Default select example">
                        <option selected>Selecione la operación</option>
                      </select>
                  </div>
                  <label for="date" class="form-label">Fecha</label>
                   <div class="col-9">
                     <div class="input-group date" id="datepicker">
                       <input type="date" class="form-control" id="date"/>
                     </div>
                  </div>
                  <div class="mb-3 mt-2">
                    <label for="monto" class="form-label">Monto</label>
                    <input type="number" class="form-control" id="monto" maxlength="10" pattern="\d{10}"/>
                  </div>
                  <div class="mb-3">
                    <label for="nota" class="form-label">Nota</label>
                    <textarea rows = "3" cols = "40" class="form-control" id="nota"></textarea>
                  </div>
                  <div class="d-flex justify-content-end">
                  <button type="submit" class="btn btn-primary">Registrar</button>
                  </div>
                </form>
            </div>
        </div>
      </div>
    </div>
  </main>
      `;

      const listGastos = document.querySelector('#listado-tipo');
      const bottonIngEgr = document.querySelectorAll('input[name="flexRadioDefault"');
      const listadoTipo = losTipos();

      /*Selección por defecto - Opciones Iniciales*/
      EgresoOP();

      /*Creación Opciones menú para Ingreso*/
      bottonIngEgr[0].addEventListener('change', IngresoOp);
      function IngresoOp(){let ingrEgr = "Ingreso"

        ingrEgr = "Ingreso";
        listGastos.innerHTML = '';
        for (var i = 0; i < listadoTipo.length; i++) {

          const a = listadoTipo[i]
          if (a.tipo === ingrEgr){

            listGastos.innerHTML = listGastos.innerHTML +
            `
              <option>${a.descr}</option>
            `
          }
        }
      } /* fin radio botón Ingreso */

      /*Creación Opciones menú para Egreso*/
      bottonIngEgr[1].addEventListener('change', EgresoOP);
      function EgresoOP() {let ingrEgr = "Egreso"
      listGastos.innerHTML = '';
      ingrEgr = "Egreso";

      for (var i = 0; i < listadoTipo.length; i++) {

        const a = listadoTipo[i]
        if (a.tipo === ingrEgr){

          listGastos.innerHTML = listGastos.innerHTML +
          `
            <option>${a.descr}</option>
          `
        }
      }
    } /* fin radio botón Egreso */

}
