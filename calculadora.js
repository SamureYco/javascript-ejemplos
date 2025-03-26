//Se agrega Number para transformar a numero elstring que recibe del usuario

let nombre=prompt('¿Cúal es tu nombre?')
let operacion=prompt('¿Cual es la operacion que quieres realizar? (suma, resta o multiplicacion)')
let num1= Number(prompt('Ingresa el primer numero'))
let num2= Number(prompt('Ingresa otro numero '))

function Calculadora (operacion,num1, num2){
    this.operacion=operacion;
    this.num1=num1;
    this.num2=num2;

    this.calcular=function(){
        switch(this.operacion.toLowerCase()){
            case "suma":
                return this.num1+this.num2;
            case "resta":
                return this.num1-this.num2;
            case "multiplicacion":
                return this.num1*this.num2;
            default:
                return "Operación no valida"    
        }
    }
}

// Verificar que los números sean válidos
// NaN (Not a Number).
if (isNaN(num1) || isNaN(num2)) {
    console.log("Por favor, ingresa números válidos.");
    alert("Por favor, ingresa números válidos.");
} else {
    let miCalculadora = new Calculadora(operacion, num1, num2);
    alert(`${nombre}, el resultado de la ${operacion} es: ${miCalculadora.calcular()}`);
}

    // if(operacion=="suma"){
    //     return num1+num2
    // } else if (operacion=="resta"){
    //     return num1-num2
    // }else if (operacion==="multiplicacion"){
    //     return num1*num2
    // }else if (operacion="division"){
    //     return num1/num2
    // }else{
    //     return -1
    // }


