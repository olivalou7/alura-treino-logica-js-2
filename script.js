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

/*****funcao para exibir texto em tag específica */

// let mensagem = document.querySelector("h1");
// mensagem.innerHTML = "Texto"

function exibir_na_tela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

let numero = 7;
palavra_maior_menor = numero > 5 ? "maior" : "menor";

let mensagem = `O número ${numero} é ${palavra_maior_menor} que 5`;

function chamada_funcao() {
    exibir_na_tela(".titulo-2", "Testando função");
    exibir_na_tela('.mensagem', mensagem);
}

/*****função limpar campo preenchido */

function teste_botao() {
    let numero_digitado = document.querySelector('.input-number').value;
    let mensagem_teste_botao = `Você digitou ${numero_digitado}`;
    
    exibir_na_tela('.exemplo-limpar-campo', mensagem_teste_botao);
    // removendo atributo 'disabled' do botão com id 'reiniciar'
    document.getElementById('reiniciar').removeAttribute('disabled');
}

function limpar_campo() {
    let numero_digitado = document.querySelector('.input-number');
    numero_digitado.value = "";
    document.getElementById('reiniciar').setAttribute('disabled', true);
}