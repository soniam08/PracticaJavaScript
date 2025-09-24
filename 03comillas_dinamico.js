let nombre = "Tana";
let edad = 43;

let actual = new Date().getFullYear();

function calcularNacimiento() {
    return actual - edad;
}

document.querySelector('body').innerHTML = `
<div>
    <p>Mi nombre es ${nombre}</p>
    <p>Tengo ${edad} años, y he nacido en ${calcularNacimiento()}</p>
</div>
`;