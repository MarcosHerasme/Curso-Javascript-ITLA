'use strict'

var x ;
var y ;

window.addEventListener('load', function(event){

const balance = document.querySelector('#pantalla');

balance.innerHTML =`
<main class="container position-fixed top-50 start-50 translate-middle">
  <div class="row justify-content-center">
    <div class="col-8">
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">Balances</h3>
        </div>
          <div class="card-body">
              <form>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Total de Ingresos</label>
                <div class="card">
                  <div class="card-body text-end">
                    <div id="tl_ingresos"></div>
                  </div>
                </div>
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Total de Egresos</label>
                <div class="card">
                  <div class="card-body text-end">
                    <div id="tl_egresos"></div>
                  </div>
                </div>
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Balance</label>
                <div class="card">
                  <div class="card-body text-end">
                    <div id="tl_balance"></div>
                  </div>
                </div>
              </div>
            </form>
        </div>
    </div>
  </div>
</div>
</main>
    `;

document.getElementById("tl_ingresos").innerHTML = sumaIngresos().toLocaleString("en-US");
document.getElementById("tl_egresos").innerHTML = sumaEgresos().toLocaleString("en-US");
document.getElementById("tl_balance").innerHTML = elbalance().toLocaleString("en-US");

  });

var sumaIngreso = 0;

  function sumaIngresos(){
    const data = getData();
    sumaIngreso = 0;

    for (let i = 0; i < data.length; i++) {
      const trans = data[i];

      if (trans.operacion === "Ingreso") { sumaIngreso = sumaIngreso + trans.monto};
    }
    x = sumaIngreso
    return sumaIngreso;}


  var sumaEgreso = 0;

    function sumaEgresos(){
      const data = getData();
      sumaEgreso = 0;

      for (let i = 0; i < data.length; i++) {
        const trans = data[i];

        if (trans.operacion === "Egreso") {
          sumaEgreso = sumaEgreso + trans.monto};
          y = sumaEgreso;
      }
      return sumaEgreso;}

function elbalance() {
   return x - y
 };
