
// Datos del cliente primeras entregas

/*
let nombre = prompt("Ingrese su nombre de usuario");
if (nombre === "") {
    console.log("Necesitas un nombre de usuario ");
} else {
    console.log(nombre);
    alert(`Bienvenido ${nombre} ¿Qué precisas para tu hogar?`);
}
*/

// Productos que van a ir en la página con sus valores

const productos = [
    {id:1, nombre: "Dispenser", precio: 1500},
    {id:2, nombre: "Picadora manual", precio: 2000},
    {id:3, nombre: "Angry mama", precio: 1000},
    {id:4, nombre: "Tabla de picar", precio: 1250},   
]


productos.forEach((productos) => {
    console.log (productos.nombre);
    console.log (productos.precio);
})


// pasando a Json

const aJson = JSON.stringify(productos)
localStorage.setItem("productos",aJson)
const productosArray = JSON.parse(localStorage.getItem("productos"))
productosArray.push("colador")
localStorage.setItem("productos",JSON.stringify(productosArray))


//Fitrados

const dispenser = productos.filter((productos) => productos.nombre.includes ("Dispenser"));
console.log(dispenser);

const picadora = productos.filter((productos) => productos.nombre.includes ("Picadora manual"));
console.log(picadora);

const limpieza = productos.filter((productos) => productos.nombre.includes ("Angry mama"));
console.log(limpieza);

const tablita = productos.filter((productos) => productos.nombre.includes ("Tabla de picar"));
console.log(tablita);


// Base para crear carrito
let total = productos.reduce((acumulado, p) =>{
    return acumulado + p.precio;
},0);

console.log (total)
// Constantes que se agregaron 

// Modificando html de a poco
let brand = document.querySelector(".navbar-brand").textContent ="Munay Cosas Marivillosas";
let shop = document.querySelector("#shop").textContent = "Tus cosas";

//Algunos eventos (pueden que no queden todos/ninguno)

//Variable con el elemento del DOM
let nombreForm = document.querySelector("#nombre");
let correoForm = document.querySelector("#correo");

//Eventos
nombreForm.addEventListener("input", function () {
  // console.log(nombreForm.value);
  if (nombreForm.value === "") {
    console.log("Ingrese un nombre válido");
  }
});

correoForm.addEventListener("input", function () {
  // console.log(correoForm.value);
  if (correoForm.value === "") {
    console.log("Ingrese un correo electrónico válido");
  }
});

let formulario = document.querySelector("#formulario");

let info = document.querySelector(".info");

//agregar informacion al DOM
const pintarInfo = formulario.addEventListener("submit", function (e) {
  e.preventDefault();
  info.innerHTML = `
  <div class="alert alert-warning" role="alert">
<h5> Bienvenido ${nombreForm.value} a la familia Munay. Vas a recibir nuestros productos y ofertas en ${correoForm.value}.</h5></div>`;
});
