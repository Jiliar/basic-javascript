var students = ["Mary", "Barak", "Joe", "Bill"];

//For
function helloStudentsWithFor(){
    for(let i = 0; i < students.length; i++){
        console.log(`Hello, ${students[i]}!`);
    }
}

//ForEach
function helloStudentsWithForeach(){
    students.forEach(element => console.log(`Hello, ${element}!`));
}

//DoWhile
function helloStudentsWithDoWhile(){
    let index = 0;
    do{
        console.log(`Hello, ${students[index]}!`);    
        index++;
    }while(index < students.length);
}

//While
function helloStudentsWithWhile(){
    let index = 0;
    while(index < students.length){
        console.log(`Hello, ${students[index]}!`);    
        index++;
    }
}

helloStudentsWithFor();
helloStudentsWithForeach();
helloStudentsWithDoWhile();
helloStudentsWithWhile();