// const estudiante=[

//     {
//         nombre: "samuel",
//         universidad:"BYU-I",
//         carrera:"Ingeneria de Software",
//     },
//     {
//         nombre: "Sandra",
//         universidad:"Ensign College",
//         carrera:"Psicologia",
//     },
//     {
//         nombre: "Maritza",
//         universidad:"BYU-I",
//         carrera:"Ingeneria de Software",
//     }

// ]

// for(let i=0;i<estudiante.length;i++){
//     console.log("=========================")
//     console.log("Nombre: "+ estudiante[i].nombre),
//     console.log("Universidad: "+ estudiante[i].universidad),
//     console.log("Carrera: "+ estudiante[i].carrera)
// }


const union={

    profetas:["Rusell M. Nelson","Thomas S. Monson", "Gordon B. Hinckley"],
    miembrosObispado:["Carlos Simbalo","Fuchan Yeh","Samuel Reyes"],
    familias:["Reyes","Simbalo","Llontop"]
};

console.log("Profetas de la Restauracion: ")
union.profetas.forEach((elemento)=>{
    console.log(elemento)
})
console.log("-----------------------------------")
console.log("Obispado barrio Unión:")
union.miembrosObispado.forEach((elemento)=>{
    console.log(elemento)
})
console.log("-----------------------------------");
console.log("Famlias del Barrio Union: ");
union.familias.forEach((elemento)=>{
    console.log("Familia "+ elemento)
})
