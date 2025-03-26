function Inscripcion(nombre,apellido,edad){
    this.nombre=nombre;
    this.apellido=apellido;
    this.edad=edad;
}

const inscripcion01=new Inscripcion("Samuel","Reyes",24);
const inscripcion02=new Inscripcion("Sandra","Bances",26);

console.log(inscripcion01);
console.log(inscripcion02);

const verInscipciones = (inscripcion)=>{
     console.log("Mi nombre es "+ inscripcion.nombre +" "+ inscripcion.apellido +" y tengo "+ inscripcion.edad)
};
verInscipciones(inscripcion01);
verInscipciones(inscripcion02)