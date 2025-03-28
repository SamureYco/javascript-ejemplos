const estudiante=[

    {
        nombre: "samuel",
        universidad:"BYU-I",
        carrera:"Ingeneria de Software",
    },
    {
        nombre: "Sandra",
        universidad:"Ensign College",
        carrera:"Psicologia",
    },
    {
        nombre: "Maritza",
        universidad:"BYU-I",
        carrera:"Ingeneria de Software",
    }

]

for(let i=0;i<estudiante.length;i++){
    console.log("=========================")
    console.log("Nombre: "+ estudiante[i].nombre),
    console.log("Universidad: "+ estudiante[i].universidad),
    console.log("Carrera: "+ estudiante[i].carrera)
}


