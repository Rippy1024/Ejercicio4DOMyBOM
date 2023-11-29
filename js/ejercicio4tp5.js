function actualizarReloj() {
  const fechaInfo = document.getElementById('fechaInfo');
  const horaInfo = document.getElementById('horaInfo');

  const opcionesFecha = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
  const opcionesHora = { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true };

  const fechaActual = new Date();
  fechaInfo.textContent = fechaActual.toLocaleDateString('es-ES', opcionesFecha);
  horaInfo.textContent = fechaActual.toLocaleTimeString('en-US', opcionesHora);
}

setInterval(actualizarReloj, 1000);

actualizarReloj();