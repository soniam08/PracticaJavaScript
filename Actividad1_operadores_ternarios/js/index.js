// Valor a modificar
let nota=10;

/*
A mostrar en el <div class="resultado">
Si es de 5 a 10: "¡¡Has APROBADO!!"(color "green")
o sinó: "Has suspendido" (color "red")

A mostrar en el <div class="nota">
De 9 en adelante:       "Excelente"
De 7 a menos de 9:      "Notable"
De 5 hasta menos de 7:  "Aprobado"
Menos de 5:             "Suspendido"
Menos de 0 o más de 10: "No te flipes"
*/

/* Usar sólo TERNARIOS
(...) ? :
*/

document.querySelector('.resultado').innerHTML = 
    (nota >= 5 && nota <= 10) 
    ? '<span style="color:green">¡¡Has APROBADO!!</span>' 
    : '<span style="color:red">Has suspendido</span>';


let texto = "";
if (nota < 0 || nota > 10) {
    texto = "No te flipes";
} else if (nota >= 9) {
    texto = "Excelente";
} else if (nota >= 7 && nota < 9) {
    texto = "Notable";
} else if (nota >= 5 && nota < 7) {
    texto = "Aprobado";
} else {
    texto = "Suspendido";
}
document.querySelector('.nota').innerHTML = texto;