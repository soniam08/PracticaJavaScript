
let nombre1 = "Tana";
let nombre2 = 'Lucia';

let resultado1 = "Mi nombre es " + (nombre1 + nombre2); //Concatena
let resultado2 = "Mi nombre es " + nombre1;
console.log(resultado1);
console.log(resultado2);

let resultado3 = `Mi nombre es ${nombre1} ${nombre2}`; //Usando comillas invertidas
console.log(resultado3);

let edad = 25;
let actual = 2025;

function calcularNacimiento() {
    return actual - edad;
}

let resultado4 = `Tengo ${edad} años, y he nacido en ${calcularNacimiento()}`;
console.log(resultado4);
