const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.getElementsByClassName('parrafito');
const pid = document.getElementById('pid');
const input = document.querySelector('input');

console.log(input.value);

console.log({
    h1,
    p,
    parrafito,
    pid,
    input
});

h1.innerHTML = "Patito <br> Feo";
h1.innerText = "Patito <br> Feo";
//console.log(h1.getAttribute("pantalla"));
//console.log(h1.getAttribute('class'));
//h1.setAttribute('class','rojo');

h1.classList.add('rojo');
h1.classList.remove('verde');
//h1.classList.toggle('verde');
//h1.classList.contains('verde');
input.value = "456";

//console.log(document.createElement('span'));
//console.log(document.createElement('img'));

const img = document.createElement('img');
img.setAttribute('src','https://ausopen.com/sites/default/files/styles/480x/public/202401/29/jannik-sinner-daniil-medvedev-ao-2024.jpg?itok=Q8JvJ8Tv');
//console.log(img);
pid.innerHTML = "";
pid.append(img);

