//Coerción Implicita

let a = 4 + "7";
console.log(typeof a);
//output: string

let b = 4 * "7";
console.log(typeof b);
//output: number

let a = 20;
let b = a + "";
console.log(b);
//output: string

//Coerción Explicita

let c = String(a);
console.log(typeof c);
//output: string

