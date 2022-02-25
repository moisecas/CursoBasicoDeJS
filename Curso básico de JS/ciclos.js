
var estudiantes = ["maria","juan","sebastian"]; 
function saludarEstudiantes(estudiante){
    console.log(`Hola, ${estudiante}`);
}
//casi siempre iniciara con una variable i
for (var i=0; i < estudiantes.length; i++){ //mientras sea menor a la longitud del array haga algo 
    saludarEstudiantes(estudiantes[i]);  


}