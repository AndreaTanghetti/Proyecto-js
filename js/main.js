class Servicio {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}


const opciones = [
    { nombre: "Esmaltado semipermanente", precio: 1000 },
    { nombre: "Uñas esculpidas", precio: 2000 },
    { nombre: "Perfilado de cejas", precio: 700 },
    { nombre: "Depi facial con hilo", precio: 1500 },
    { nombre: "Depilación definitiva", precio: 3000 }
];


alert("Hola! Gracias por visitar nuestra página. Te regalamos un voucher del 20% para que uses en tu primer pago.");
alert("Copia el siguiente código y pégalo cuando vayas a pagar. Código: PRIMERAVEZ")


const carrito = [];
let precioTotal;
let eleccion = "";


while (eleccion !== "salir") {
    eleccion = prompt(
        "Te contamos cuáles son los servicios que tenemos para vos: \n" + opciones.map((servicio, index) => index + 1 + ")" + servicio.nombre).join("\n") + "\n ¿Cuál servicio te interesa?\n (Escriba el numero de la opcion elegida o escriba 'salir' para salir)"
    );

    if (eleccion >= 1 && eleccion <= opciones.length) {
        const servicioSeleccionado = opciones[eleccion - 1];
        carrito.push(servicioSeleccionado);

        alert(servicioSeleccionado.nombre + " $ " + servicioSeleccionado.precio + ". Se agrego al carrito");

        eleccion = prompt("¿Desea elegir otro servicio? \n (si/no)").toLowerCase();

        while (eleccion !== "si" && eleccion !== "no") {
            alert("Por favor ingrese 'si' para continuar o 'no' para salir ");
            eleccion = prompt("¿Desea elegir otro servicio? \n (si/no)").toLowerCase();
        } 


        if (eleccion === "no") {
            eleccion = "salir";
            precioTotal = carrito.reduce((acumulador, servicioSeleccionado) => acumulador + servicioSeleccionado.precio, 0);
            alert("Servicios elegidos:\n" + carrito.map((servicio, index) => index + 1 + ") " + servicio.nombre + " $" + servicio.precio).join("\n") + "\n" + "Total a pagar $" + precioTotal);
            let descuento = prompt("¿Tienes algún voucher? (si/no)").toLowerCase();
            if (descuento === "si") {
                descuento = prompt("Por favor ingrese el código del voucher").toUpperCase();
                if (descuento === "PRIMERAVEZ") {
                    let precioDescuento = precioTotal - (precioTotal * 0.20)
                    alert("El total a pagar con el descuento es: $" + precioDescuento)
                }
            }
        }
    }
}
class Cliente {
    constructor(nombre, telefono) {
        this.nombre = nombre;
        this.telefono = telefono;
    }
}
const nombre = prompt("A nombre de quien reservamos el turno?")
const telefono = prompt("Celular de contacto? ")
const cliente1 = new Cliente(nombre, telefono)

alert(cliente1.nombre + ", nos pondremos en contacto con vos al numero " + cliente1.telefono + " para definir fecha, horario del turno y metodo de pago.\n Gracias por elegirnos❤")
