const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const presult = document.querySelector('#result');

//btn.addEventListener('click', Onclick);  --> sin la etiqueta form
form.addEventListener('submit', sumarInputsValues);
//btn.addEventListener('click', sumarInputsValues);
form.addEventListener('mouseover',movMouse);
input1.addEventListener('mousedown', msgUsu);
input2.addEventListener('mousedown', msgUsu1);

function Onclick(){
    const sumaInputs = parseInt(input1.value) + parseInt(input2.value);
    presult.innerText = "Resultado: "+ sumaInputs
}

function sumarInputsValues(event){
    //console.log({event});
    event.preventDefault(); // evita que se recargue el formulario
    const sumaInputs = parseInt(input1.value) + parseInt(input2.value);
    presult.innerText = "Resultado: "+ sumaInputs
}

function movMouse(event){
    presult.innerText = "Moused Over";
}

function msgUsu(event){
    presult.innerText = "Ingrese el primer valor";
}

function msgUsu1(event){
    presult.innerText = "Ingrese el segundo valor";
}