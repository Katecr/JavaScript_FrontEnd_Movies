window.addEventListener('load', function() {

  // capturar los siguientes elementos
  let main = document.querySelector('main');
  let body = document.querySelector('body');
  let tituloH2 = document.querySelector('h2');
  let a = document.querySelector('a');
  let p = document.querySelectorAll('p');

  // capturar nombre del usuario
  let nameUser = prompt('Ingrese su nombre');

  // Asignar nombre al H2, si no se asigna predetrminar Invitado
  tituloH2.innerText += (nameUser != null) ? ' '+nameUser : ' Invitado';

  // Volver mayuscula el H2
  tituloH2.style.textTransform = 'uppercase';

  // Asignar color a la etiqueta a
  a.style.color = '#E51B3E';

  // Preguntar al usuario si desea colocar fondo
  let confirmWindow = confirm('Desea colocar un fondo de pantalla');

  if(confirmWindow){
    body.classList.add('fondo');
  }

  // Asignar clase según el método par e impar
  for (let i = 0; i < p.length; i++) {
    if(i % 2 == 0){
      p[i].classList.add('destacadoPar');
    }else{
      p[i].classList.add('destacadoImpar');
    }
  }

  // Añadirle un estilo al main
  main.style.display = 'block';

});