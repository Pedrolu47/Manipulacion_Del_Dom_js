const inputRojo = document.getElementById('rojo');
const inputVerde = document.getElementById('verde');
const inputAzul = document.getElementById('azul');

const textoRojo = document.getElementById('texto-rojo');
const textoVerde = document.getElementById('texto-verde');
const textoAzul = document.getElementById('texto-azul');

let rojo = inputRojo.value;
let verde = inputVerde.value;
let azul = inputAzul.value;

// Actualizar el texto de los parrafos

textoRojo.innerText = rojo;
textoVerde.innerText = verde;
textoAzul.innerText = azul;

// Actualizar el color de fondo
function actualizarColor(rojo, verde, rojo) {
  const colorRGB = `rgb(${rojo}, ${verde}, ${azul})`;
  document.body.style.backgroundColor = colorRGB;
}

// Para actualizar Rojo
inputRojo.addEventListener('change', (e) => {
  rojo = e.target.value;
  textoRojo.innerText = rojo;
  actualizarColor(rojo, verde, azul);
});
// Para actualizar Verde otra forma de hacerlo
inputVerde.addEventListener('change', () => {
  verde = inputVerde.value;
  textoVerde.innerText = verde;
  actualizarColor(rojo, verde, azul);
});
// Para actualizar Azul
inputAzul.addEventListener('change', (e) => {
  azul = e.target.value;
  textoAzul.innerText = azul;
  actualizarColor(rojo, verde, azul);
});