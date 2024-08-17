/*
> Seleccionar Elementos con JavaScript.
*/

// Seleccionar elemento por id.

// Contenedor

/* console.log(contenedor.innerHTML);
console.log(typeof contenedor.innerHTML); */

/* const titulo = document.getElementById('titulo');
console.log(titulo.tagName); */
/* const toppings = document.getElementsByClassName('topping');
console.log(toppings); */

// Seleccionar elemento por etiqueta.
/* const eti = document.getElementsByTagName('li');
console.log(eti); */

// Cambiar color con tag
/* function cambiarColor() {
    var elementos = document.getElementsByTagName("li");
    for (var i = 0; i < elementos.length; i++) {
        elementos[i].style.color = "red";
    }
} */

// Cambiar color con class
/* const primerToppingNoMarron = document.querySelector("ul li:not(.fondo-marron)");
console.log(primerToppingNoMarron); */
/* const toppingsNaranja = document.querySelectorAll("ul li.fondo-naranja");
console.log(toppingsNaranja[0]); */
/* const primerTopping = document.querySelector('.topping');
primerTopping.style.backgroundColor = 'red';
primerTopping.style.color = '#C0C0C0'; */

/* const listaDeToppings = document.getElementById('lista-toppings');
console.log(' > innerText')
console.log(listaDeToppings.innerText)

console.log(' > textContent')
console.log(listaDeToppings.textContent)

console.log(' > innerHTML')
console.log(listaDeToppings.innerHTML) */

/* const titulo = document.getElementById('titulo');
titulo.innerText = 'Mis Toppings Favoritos';
console.log(titulo); */

/* const enlaces = document.getElementsByTagName('a');
console.log(enlaces[0].getAttribute('href')); */

 // Clases con JS y el DOM
/* const primerTopping = document.querySelector('.topping');

primerTopping.classList.add('mi-clase-nueva');
primerTopping.classList.remove('mi-clase-nueva');
console.log(primerTopping.classList.contains('fondo-marron'));
console.log(primerTopping.classList); */

// Operaciones Importantes en el DOM

// Crear Elementos
/* const listaDeToppings = document.getElementById('lista-toppings');
const toppingNuevo = document.createElement('li');
toppingNuevo.classList.add('topping', 'fondo-marron');
toppingNuevo.innerText = 'Queso Extra';
listaDeToppings.append(toppingNuevo);
console.log(toppingNuevo);
console.log(typeof toppingNuevo);

// Eliminar Elementos

toppingNuevo.remove();
console.log(listaDeToppings);
listaDeToppings.remove();
console.log(listaDeToppings); */

// Jerarquía del DOM
/* const listaDeToppings = document.getElementById('lista-toppings');
console.log(listaDeToppings.previousElementSibling); */
// Eventos

// Eventos del DOM
// Conceptos target(elemento que recibe el evento)
// Trigger(Desencadenante de un evento)
// Event Handler( Funcion que se ejecuta cuando ocurre un evento)
// Event Listener( Conexion Evento -> Funcion)
const toppings = document.getElementsByClassName('topping');
/* function mostrarClick(e) {
    console.log(e.target.innerText);
} */

for (const topping of toppings) {
    topping.addEventListener('click', (e) => {
        console.log(e.target.innerText);
    });
}