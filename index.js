
const form = document.getElementsByTagName("form")[0];
const tbody = document.getElementsByTagName("tbody")[0];

/** @type {HTMLInputElement} */
let inputCodigo = document.getElementById("codigo");
/** @type {HTMLInputElement} */
let inputNombre = document.getElementById("nombre");
/** @type {HTMLInputElement} */
let inputCantidad = document.getElementById("cantidad");
/** @type {HTMLInputElement} */
let inputPrecio = document.getElementById("precio");
/** @type {HTMLInputElement} */
let selectCategoria = document.getElementById("categoria");


let tfootCantidadTotal = document.getElementById("cantidad-total");
let tfootPrecioTotal = document.getElementById("precio-total");
let tfootGranTotal = document.getElementById("gran-total");

let indice =1;
let cantidadTotal = 0;
let precioTotal= 0;
let granTotal =0;

let currentRow;

form.addEventListener("submit",onSubmit);

/**
 * 
 * @param {Event} event 
 */
function onSubmit(event) {

    event.preventDefault();

    const data = new FormData(form);
    const values = Array.from(data.entries());
    console.log(values);

    const [frmCodigo,frmNombre,frmCantidad,frmPrecio,frmCategoria]=values;

    let codigo = frmCodigo[1];
    const nombre = frmNombre[1];
    const cantidad = frmCantidad[1];
    const precio = frmPrecio[1];
    const categoria = frmCategoria[1];
    const total = precio * cantidad;
    
    cantidadTotal = parseFloat(cantidad) + cantidadTotal;
    precioTotal = parseFloat(precio) + precioTotal;
    granTotal = parseFloat(total) + granTotal;

    let tr;

    if(!codigo)
    {
        codigo = indice++;
        tr= document.createElement("tr");
        tbody.appendChild(tr);
    }
    else
    {
        tr = currentRow;
    }


    //const tr = document.createElement("tr");
    /*
    const tdId = document.createElement("td");
    tdId.innerHTML = (codigo++).toString();

    const tdNombre = document.createElement("td");
    tdNombre.innerHTML = nombre;
    
    const tdCantidad = document.createElement("td");
    tdCantidad.innerHTML = cantidad.toString();

    const tdPrecio = document.createElement("td");
    tdPrecio.innerHTML = precio.toString();

    const tdTotal = document.createElement("td");
    tdTotal.innerHTML = (total).toString();

    const tdLinks = document.createElement("td");
    tdLinks.innerHTML = '<a href="#" onclick="onEdit(event)" >Editar</a>|<a href="#" onclick="onDelete(event)">Eliminar</a>';

    tr.appendChild(tdId);
    tr.appendChild(tdNombre);
    tr.appendChild(tdCantidad);
    tr.appendChild(tdPrecio);
    tr.appendChild(tdTotal);
    tr.appendChild(tdLinks);
*/
    tr.dataset.categoria = categoria;
 
    tr.innerHTML =`
        <td>${codigo}</td>
        <td>${nombre}</td>
        <td>${cantidad}</td>
        <td>${precio}</td>
        <td>${total}</td>
        <td><a href="#" onclick="onEdit(event)" >Editar</a>|<a href="#" onclick="onDelete(event)">Eliminar</a></td>
    `;


    tfootCantidadTotal.innerHTML = cantidadTotal;
    tfootPrecioTotal.innerHTML = precioTotal;
    tfootGranTotal.innerHTML= granTotal;
    
    form.reset();

}
/**
 * 
 * @param {Event} event 
 */
function onEdit(event) {
    event.preventDefault();

/** @type {HTMLAnchorElement} */
   const anchor = event.target;
   const tr =anchor.parentElement.parentElement;
   const tds = tr.getElementsByTagName("td");

   const [tdCodigo,tdNombre,tdCantidad,tdPrecio]=tds;

   inputCodigo.value = tdCodigo.innerText;
   inputNombre.value = tdNombre.innerText;
   inputCantidad.value = tdCantidad.innerText;
   inputPrecio.value = tdPrecio.innerText;
   selectCategoria.value = tr.dataset.categoria;

   currentRow = tr;

    console.log("on edit");
}

/**
 * 
 * @param {Event} event 
 */
 function onDelete(event) {
     event.preventDefault();

     /** @type {HTMLAnchorElement} */
   const anchor = event.target;
   const tr =anchor.parentElement.parentElement;
  
   tbody.removeChild(tr);

    console.log("on delete");
}