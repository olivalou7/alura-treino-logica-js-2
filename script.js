/********querySelector */

let titulo = document.querySelector('h1');
titulo.innerHTML = "Titulo da página";

let paragrafo = document.querySelector('p');
paragrafo.innerHTML = "Parágrafo da página";

let classe_paragrafo = document.querySelector('.paragrafo');
classe_paragrafo.innerHTML = "Paragrafo com classe";

let box_e_paragrafo = document.querySelector('#box h2');
box_e_paragrafo.innerHTML = "Título 2 dentro da box";

let formulario_email = document.querySelector('.formulario input[type = "email"]');
formulario_email.placeholder= "Formulário e-mail";

let formulario_number = document.querySelector('.formulario input[type = "number"]');
formulario_number.value= "2025";



