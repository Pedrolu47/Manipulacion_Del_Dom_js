let botonElem = document.getElementById('boton-cambiar-cita');
let citaElem = document.getElementById('cita');
let autorElem = document.getElementById('autor');

function obtenerCita(min, max) {
  // Sin incluir max en los valores posibles
  return Math.floor(Math.random() * (max - min) + min);
}
function cambiarCita() {
  let indiceAleatorio = obtenerCita(0, citas.length);
  /* let { autor, texto } = citas[indiceAleatorio]; */
  citaElem.innerText = `"${citas[indiceAleatorio].texto}"`;
  autorElem.innerText = citas[indiceAleatorio].autor;
}

cambiarCita();

botonElem.addEventListener('click', cambiarCita);