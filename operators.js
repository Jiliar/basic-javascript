// OPERADORES

// ARITMETICOS

let a = 1;
let b = 2;
let res;

res = a + b// Suma a + b,  afirmación unitaria +a : Positivo, concatenación "a" + "la" : "ala"
console.log('Suma: '+res);
res = a - b// Resta a - b, negación unitaria -a : Negativo
console.log('Resta: '+res);
res = a * b// Producto a * b
console.log('Producto: '+res);
res = a / b// División
console.log('División: '+res);
res = a % b// Residuo a % b
console.log('Residuo: '+res);
res = a** // Potencia a ** b, a elevado a b
console.log('Potencia: '+res);
res = a++ // Incremento (suma uno) a++ : a = a + 1
console.log('Incremento: '+res);
res = a-- // Decremento (resta uno) a-- : a = a - 1
console.log('Decremento: '+res);

// ASIGNACIÓN

res = a = b// Asignación a = b
console.log('Asignación: '+res);
res = a += b// Asignación de adición  a += b : a = a + b
console.log('Asignación de adición: '+res);
res = a -= b// Asignación de sustracción  a -= b : a = a - b
console.log('Asignación de sustracción: '+res);
res = a *= b// Asignación de multiplicación  a *= b : a = a * b
console.log('Asignación de multiplicación: '+res);
res = a /= b// Asignación de división  a /= b : a = a / b
console.log('Asignación de división: '+res);
res = a %= b// Asignación de residuo  a %= b : a = a % b
console.log('Asignación de residuo: '+res);
res = a **= b// Asignación de potencia  a **= b : a = a ** b
console.log('Asignación de potencia: '+res);
res = a <<= b// Asignación de desplazamiento a la izquierda  a <<= b : a = a << b
console.log('Asignación de desplazamiento a la izquierda: '+res);
res = a >>= b// Asignación de desplazamiento a la derecha  a >>= b : a = a >> b
console.log('Asignación de desplazamiento a la derecha: '+res);
res = a >>>= b// Asignación sin signo de desplazamiento a la derecha  a >>>= b : a = a >>> b
console.log('Asignación sin signo de desplazamiento a la derecha: '+res);
res = a &= b// Asignación AND  a &= b : a = a & b
console.log('Asignación AND: '+res);
res = a ^= b// Asignación XOR  a ^= b : a = a ^ b
console.log('Asignación XOR : '+res);
res = a |= b// Asignación OR  a |= b : a = a | b
console.log('Asignación OR: '+res);

// COMPARACIÓN

res = a == b // Igualdad a == b, a tiene el mismo valor que b
console.log('Igualdad a == b: '+res);
res = a != b// Distinto a != b, a tiene un valor diferente a b
console.log('Distinto a != b: '+res);
res = a === b // Identidad a === b igual valor igual tipo de dato
console.log('Identidad a === b igual valor igual tipo de dato: '+res);
res = a !== b // Sin Identidad a !== b igual valor o igual tipo de dato
console.log('Sin Identidad a !== b igual valor o igual tipo de dato: '+res);
res = a > b // Mayor que a > b
console.log('Mayor que: '+res);
res = a >= b // Mayor o igual que a >= b
console.log('Mayor o igual que : '+res);
res = a < b // Menor que a < b
console.log('Menor que a: '+res);
res = a <= b // Menor o igual que a <= b
console.log('Menor o igual que: '+res);

// LOGICOS

res = a && b // AND, Y, a && b : a y b
console.log('AND: '+res);
res = a || b // OR, O, a || b : a o b
console.log('OR: '+res);
res = ! a && b // NOT, Negación, a = true : !a = false
console.log('NOT: '+res);

// LOGICOS A NIVEL DE BITS

res = a << b// Desplazamiento a la izquierda  a << b
console.log('Desplazamiento a la izquierda: '+res);
res = a >> b// Desplazamiento a la derecha  a >> b
console.log('Desplazamiento a la derecha: '+res);
res = a >>> b// Desplazamiento a la derecha sin signo  a >>> b
console.log('Desplazamiento a la derecha sin signo: '+res);
res = a & b// AND  a & b
console.log('AND: '+res);
res = a ^ b// XOR  a ^ b
console.log('XOR: '+res);
res = a | b// OR  a | b
console.log('OR: '+res);
res = ~ a// NOT  a | b```
console.log('NOT: '+res);