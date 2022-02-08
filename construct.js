//Functión constructura
function car(brand, model, year){
    this.brand = brand;
    this.model = model;
    this.year = year
}

var autos = [];

//Input data;
for(let i = 0 ; i < 5 ; i++){
  var marca = prompt("Ingresa la marca del auto");
  var modelo = prompt("Ingresa el modelo del auto");
  var annio = prompt("Ingresa el año del auto");
  autos.push(new car(marca, modelo, annio)|);
}

//Output data
for(let i = 0 ; i < autos.length ; i++){
  console.log(autos[i]);
}