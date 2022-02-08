let a = 5;
switch(a){
    case 1:
        console.log("UNO");
    break;
    case 2:
        console.log("DOS");
    break;
    case 3:
        console.log("TRES");
    break;
    case 4:
        console.log("CUATRO");
    break;
    case 5:
        console.log("CINCO");
    break;
    default:
        console.log("¡Es otro número!")
}


//Piedra, Papel y Tijeras
var pregunta = prompt("Ingresa tu opción: piedra, papel o tijera "); 
var user = pregunta.toLowerCase();
var options = ["piedra", "papel", "tijera"];
var machine = options[Math.floor(Math.random() * 3)];


// let numero = 'a';
//con true los casos van a pasar 
switch (true) {
    case (user === machine):
        console.log('es un empate');
        break;
    case (machine === 'piedra' && user === 'papel'):
        console.log('Ganaste')
        break;
    case (machine === 'papel'  && user === 'tijera'):
        console.log('Ganaste')
        break;
    case (machine === 'tijera' && user === 'piedra'):
        console.log('Ganaste')
        break;
    default:
        console.log('¡Perdiste!');       
}
