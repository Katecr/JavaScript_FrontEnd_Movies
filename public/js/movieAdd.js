alert('hola add')

window.addEventListener('load', function() {

  // capturar los siguientes elementos  
  let tituloH1 = document.querySelector('h1');
  let section = document.querySelector('section');
  let article = document.querySelector('article');

  //Agregar a la etiqueta h1 mensaje y estilos
  tituloH1.innerText = 'AGREGAR PELÍCULAS';
  tituloH1.classList.add('titulo');
  article.classList.add('fondoTransparente');
  section.classList.add('fondoCRUD'); 
});