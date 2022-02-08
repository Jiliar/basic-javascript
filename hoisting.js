//HOISTING DE VARIABLES

console.log(name);
var name = "Jiliar";
//output: undefined
 
//Que hace el motor de Javascript
var name = undefined
console.log(name + " soy ese hoisting");
name = "Jiliar"


//HOISTING DE FUNCIONES

helloWorld();

function helloWorld(){
    console.log("Hello "+name)
}

//SOLUCIÓN
//Las variables deben estar declaradas antes de iniciar el codigo
//Primero se debe definir las funciones luego hacer el llamado de ellas