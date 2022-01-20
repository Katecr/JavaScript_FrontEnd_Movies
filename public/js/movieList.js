window.addEventListener('load', function() {

  // capturar los siguientes elementos
  let body = document.querySelector('body');
  let tituloH1 = document.querySelector('h1');

  // capturar nombre del usuario
  let modeView = prompt('¿Desea modo oscuro?');

  // Asignar nombre al H2, si no se asigna predetrminar Invitado
  if(modeView){
    body.style.background = '#7f7f7f';
    body.classList.add('fondoMoviesList');
  }
  
  //Agregar a la etiqueta h1 mensaje y estilos
  tituloH1.innerText += 'LISTADO DE PELÍCULAS';
  tituloH1.style.color = 'white';
  tituloH1.style.background = 'teal';
  tituloH1.style.padding = '20px';
  
});