//OPERADORES DE ASIGNACIÓN
let edad = 43;

// Selecciona el objeto HTML, no su valor
let elemento = document.querySelector('.container');

let numero = 10;
numero *= 10; // numero = numero * 10

function dibujarCapa(numero) {
    elemento.innerHTML += `<div>${numero}</div>`;
}

// OPERADORES ARÍSTMETICOS + - * / %
// Incremento y decremento ++ --
numero++;
// dibujarCapa(numero);
numero--;
//dibujarCapa(numero);

numero = 20
let resultado = numero++

// dibujarCapa(resultado)

//OPERADORES DE COMPARACIÓN == <= >= != ===
// === Igualdad estricta (valor y tipo)

let valor1= 5
let valor2= '5'

resultado = valor1 == valor2 //con === sería false
//dibujarCapa(resultado)

//OPERADOR DE NEGACIÓN !
// false  | 0 | "" | null | undefined | NaN

resultado = false
//dibujarCapa(!resultado) //true (!0 es true) 

//OPERADORES TERNARIOS

let encontrado =  true;
(encontrado) ? dibujarCapa('Sí, lo he encontrado') : dibujarCapa('No, no lo he encontrado')
