
function calling(nombre,mision){
    this.nombre=nombre;
    this.mision=mision;
}
const calling01=new calling("Samuel","Colombia, Bogota Sur");
const calling02= new calling("Sandra","Ciudad de México");

const verCalling=(calling)=>{
    console.log("Apreciado "+ calling.nombre+ ", Usted a sido llamado a la misión "+calling.mision)
}
console.log(verCalling(calling01));
console.log(verCalling(calling02));
