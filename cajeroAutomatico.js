let saldo=1000;
let historial=[];

function verHistorial(){
    if (historial.length===0){
        return("No hay transacciones registradas.")
    }
    let mensaje = "Historial de Transacciones:\n";
    historial.forEach((trans, index) => {
        mensaje += `${index + 1}. ${trans.fecha} - ${trans.tipo}: $${trans.cantidad} (Saldo: $${trans.saldo})\n`;
    });

    alert(mensaje);
}

//Funcion para obener fecha y hora actual
function obtenerFecha(){
    return new Date().toLocaleString();
}

//Funcion para ver el saldo
function verSaldo(){
    alert ("Tu saldo actual es: $"+saldo)
}
function depositar(){
    let cantidad=parseFloat(prompt("Cantidad a depositar: "));
    if (cantidad>0){
        saldo+=cantidad;
        historial.push({tipo:"Deposito",cantidad:saldo,fecha:obtenerFecha()})
        alert("Deposito exitoso.Nuevo saldo es: $"+ saldo)
    }else{
        alert("Cantidad no valida")
    }
}
function retirarDinero(){
    let cantidad=parseFloat(prompt("Cantidad a retitar: "))
    if (cantidad>0 && cantidad<= saldo){
        saldo-=cantidad;
        historial.push({tipo:"Retiro",cantidad:cantidad,saldo:saldo,fecha:obtenerFecha()})
        alert("Retiro exitoso. Nuevo saldo: $"+saldo)
    }else{
        alert("Cantidad no válida o saldo insuficiente")
    }
}
// Función principal del cajero
function iniciarCajero() {
    let opcion;
    
    do {
        opcion = prompt("Seleccione una opción:\n1. Ver saldo\n2. Depositar\n3. Retirar\n4. Ver historial\n5. Salir");
        
        switch (opcion) {
            case "1":
                verSaldo();
                break;
            case "2":
                depositar();
                break;
            case "3":
                retirarDinero();
                break;
            case "4":
                verHistorial();
                break;
            case "5":
                alert("Gracias por usar el cajero.");
                break;
            default:
                alert("Opción no válida. Inténtelo de nuevo.");
        }
    } while (opcion !== "5");
}

// Iniciar el cajero
iniciarCajero();
