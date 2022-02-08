//EXAMPLE 1:

//Comparación de numeros

let a = 5;
let b = 3;
if(a > b){
    console.log(a+" is greater than "+b);
}else if(a < b){
    console.log(a+" is less than "+b);
}else{
    console.log(a+" is equals to "+b);
}


//EXAMPLE 2:

//Piedra, papel o tijeras

var op1 = "Piedra";
var op2 = "Papel";
var op3 = "Tijera";

var resultado = function(user, cpu){
    if(user != cpu){
        if(user === op1 && cpu === op3){
            console.log("el usuario GANO con "+ op1)
        }else if(user === op2 && cpu === op1){
            console.log( "el usuario GANO con " + op2)
        }else if(user === op3 && cpu === op2){
            console.log("el usuario GANO con " + op3)
        }else{
            console.log("La CPU Gano!!")
        }
    }else if(user === cpu){
        console.log("Empate")
    }
};

resultado(op1,op3) //el usuario GANO con Piedra```

//EXAMPLE 3

//Operador Ternario
let result = a === b ? " I am not like "+b : "Correct, I am like "+b;
console.log(result);