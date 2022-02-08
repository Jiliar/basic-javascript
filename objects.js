let car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2021,
    type: "luxury"
}

console.log(car);
//Get data from objects
console.log('Car\'s brand is '+car.brand) // Get Brand
//Add property to Object
car.details = function(){
    console.log(`Car ${this.model} ${this.year}`)
}
console.log(car);

//Get Function
console.log(car.details());
