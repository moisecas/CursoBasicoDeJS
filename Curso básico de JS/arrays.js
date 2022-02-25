//estructura de corchetes, es de tipo objeto, lista de datos que guarda ciertos valores
var frutas = ["manzana", "peras", "piñas"]; //deben ir separados por comas 
console.log(frutas); 

console.log(frutas.length); //saber la longitud de los elementos

//para imrpimir una posición especifica del array
console.log(frutas[0]); //imprime la posición 0 

//hay dos tipos de elementos
//metodos: mutar

var frutas = ["manzana", "peras", "piñas"];
var masFrutas = frutas.push("uvas"); //agregar mas elementos al array 
var ultimo = frutas.pop("uvas") //.pop eliminar el ultimo elemento del array 

var nuevaLongitud = frutas.unshift("uvas"); //enviarlo al inicio de la lista o del array

var borrarFruta = frutas.shift("uvas"); //eliminar el elemento del inicio 
var ubicacionFruta = frutas.indexOf("peras"); //saber la posición del elemento 