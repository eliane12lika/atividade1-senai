//exercicio 1 = criar um programa que imprima x,y,z//
var x = 1;
var y = 2;
var z = 3;
console.log("x", "y", "z")

var x;
var y;
var z;
console.log("x:, y:, z:")

var x = 1 

var y = 2 

var z = 3 

console.log("x:", x, "y:", y, "z:", z) 


//exercicio 2 = imprimir numeros de 1 a 10//

for(let numero= 1; numero <=10; numero ++){
    console.log(numero)
}

//exercicio 3 = imprimir numeros impares menor que 100//

for (var i = 1; i <= 100; i += 2) {  

    console.log(i);  
    
    } 

//exercicio 4 = imprimir tabuada do 8//

for(let i=0; i <11; i++){
    console.log("8 x " + i + " = " + 8*i);
}

//exercicio 5 = somar numeros de 1 a 10//
var soma = 0;
for(var i = 1; i<= 10; i++){
    soma+= i;
}
console.log(soma);

//exercicio 6 = Imprimir todas as tabuadas do número 1 ao 10 

function ImprimirTabuada(n) { 

    for (var i = 1; i <= 10; i++) { 
   
    var linha = n + " * " + i + " = " + n * i; console.log(linha); 
   
    }  
   
   }  
   
   for (var i = 1; i <= 10; i++) {  
   
   ImprimirTabuada(i); console.log(""); 
   
   } 


   //outra forma//

   for(let i=0; i <11; i++){
    console.log("1 x " + i + " = " + 1*i);
}
console.log(" ")

for(let i=0; i <11; i++){
    console.log("2 x " + i + " = " + 2*i);
}
console.log(" ")

for(let i=0; i <11; i++){
    console.log("3 x " + i + " = " + 3*i);
}
console.log(" ")

for(let i=0; i <11; i++){
    console.log("4 x " + i + " = " + 4*i);
}
console.log(" ")

for(let i=0; i <11; i++){
    console.log("5 x " + i + " = " + 5*i);
}
console.log(" ")

for(let i=0; i <11; i++){
    console.log("6 x " + i + " = " + 6*i);
}
console.log(" ")

for(let i=0; i <11; i++){
    console.log("7 x " + i + " = " + 7*i);
}
console.log(" ")

for(let i=0; i <11; i++){
    console.log("8 x " + i + " = " + 8*i);
}
console.log(" ")

for(let i=0; i <11; i++){
    console.log("9 x " + i + " = " + 9*i);
}
console.log(" ")

for(let i=0; i <11; i++){
    console.log("10 x " + i + " = " + 10*i);
}
console.log(" ")