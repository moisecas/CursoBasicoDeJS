//dos tipos de funciones, declarativas y de expresión. 

//declarativas, con function nombreFuncion () {}

function miFuncion(){ //declaración de función
    return 3; 
}



//expresión o anonimas, variable que guarda una función

var miFuncion = function(a,b){ //requiere parametros
    
    return a + b; 

}

//llamado de la función
miFuncion();