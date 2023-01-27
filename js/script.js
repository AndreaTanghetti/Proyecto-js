function mensaje() {
    alert("Para crear su cuenta, llene los siguientes campos");
}
function mensajeDos() {
    alert("Su cuanta fue creada con exito. Por favor, inicie sesion");
}
mensaje();
let usuario = prompt("Nombre de usuario");
let clave = parseInt(prompt("Clave numerica"));
mensajeDos();
let usuarioAutorizado;
let intento = 0;
for (let i = 0; i < 3; i++) {
    usuarioAutorizado = prompt("Ingrese su usuario");

    if (usuarioAutorizado != usuario) {
        continue; 
    }

    intento = parseInt(prompt("ingrese su clave"));
    if (clave != intento) {
        alert("usuario o clave incorrecta. vuelva a intentarlo. ");
    continue; 
    } 

    alert("Sesion iniciada con exito");
    break;
}
