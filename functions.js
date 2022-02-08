//Declarative Function

function myFunction(){
    console.log(3);
}

myFunction();

//Expressive Function

var myFunction = function(a,b){ // Anonymus function
    console.log( a + b);
}

myFunction();


//String Template
function saludarEstudiantes(student){
    console.log(`Hello ${student}`);
}


saludarEstudiantes('Diego');

//Return data

function sumar(a,b){
    return a + b;
}