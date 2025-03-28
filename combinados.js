// const arrayDeObjetos=[

//     {nombre:"Samuel",
//     edad:24,
//     comidaFavorita: "Pollo a la brasa"
//     },
//     {nombre:"Sandra",
//     edad:25,
//     comidaFavorita: "Ceviche"
//     },
    
//     {nombre:"Maritza",
//     edad:50,
//     comidaFavorita: "Causa Chiclayana"
//     },
//     {nombre:"Margarita",
//     edad:47,
//     comidaFavorita: "ceviche de palabritas"
//     },
// ]

// for(let i=0;i<arrayDeObjetos.length;i++){
//     console.log("======================================")
//     console.log("Nombre: "+ arrayDeObjetos[i].nombre);
//     console.log("Edad: "+ arrayDeObjetos[i].edad);
//     console.log("Comida Favorita: "+ arrayDeObjetos[i].comidaFavorita)

// }

const objetoConArray = {
    nombre: "objeto con array",
    arr:["abeja", "sapo", "obeja", "araña"],
};

objetoConArray.arr.forEach((elemento) => { 
    console.log(elemento+" jajaja")
});

objetoConArray.arr.forEach((elemento)=>{
    console.log(elemento+ " nononon")
});
// for(i=0; i<objetoConArray.arr.length;i++){
//     console.log(objetoConArray)
// }