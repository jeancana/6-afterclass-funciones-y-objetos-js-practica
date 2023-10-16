/* alert('probando') */


// ***** EXPLICANDO LAS VARIABLES CON EJEMPLOS *******

// Al crear una Variable y asignarle un Dato  ---> estoy creando un tipo de dato que tiene posibilidad de ir cambiando 
// CONCLUSION: El tipo de Dato ahora es variable/varia/loPuedoCambiar
// Ejemplo: 
190
console.log(`-- Explicando los VARIABLES`)
let num = 0 
console.log(` let num = ${num}`) 
num = 2
console.log(`cambio num = 2/ ahora num vale ${num}`)  
num = 4
console.log(`cambio num = 4/ ahora num vale ${num}`)  
num = 77
console.log(`cambio num = 77/ ahora num vale ${num}`)  
num = 190
console.log(`cambio num = 190/ ahora num vale ${num}`)  



// ***** EXPLICANDO LAS CONSTANTES CON EJEMPLOS *******

// Al crear una Constante y asignarle un Dato  ---> estoy creando un tipo de dato que NO tiene posibilidad de ir cambiando 
// Tiene un UNICO especio en la memoria de la Maquina Asignado y NO es posible cambiarlo por otro
// CONCLUSION: El tipo de Dato ahora es constante/permanece/noLoPuedoCambiar

console.log(`-- Explicando las CONSTANTES`)

console.log(`-- Creando Constante y Asignadoles Datos Primitivos`)
// Ejemplo1:
//--- Creando un Dato como constante 
const num1 = 0
console.log(`const num = ${num1}`)

/* 
--- Intentando cambiar/pisarlo
num1 = 155
--- Da error
 */
// Nota: se deja en texto xq da Error el intentar cambiar el Dato creado como constante

console.log(`1. Creando un objetoLiteral Cajon como Variables `)
// Aca cree objeto literal que tiene un UNICO espacio en memoria

//Esto tiene una direccion de Memoria Unica 
let cajon = {
    // Es es un Objeto Literal vacio
}
console.log(cajon)

// Aca estoy asginadole/Sobreescribiendo/cambiando el espacio UNICO/Direccion en memoria de cajon por otro NUEVO y UNICO/Direccion en memoria 
//--Asignandole otra direccion en memoria a cajon
cajon = {} 
console.log(cajon)

//Nota SOBRE EL ESPACIO EN MEMORIA QUE DEJO DE USARSE: el espacio en Memoria inicial que fue sustituido POR EL NUEVO, es destruido por el Garbage Collector  

// Como es un Dato Variable no se Rompe el codigo y se puede cambiar sin problema



console.log(`----------------- Creando Objetos constantes/DatosPunterosConstante ---------------------`)
// Ejemplo2 : con PUNTEROS constantes

console.log(`1. Creando un objetoLiteral Producto como constante `)
//--- Creando un objeto literal como constante 
const producto = {
    // Es es un Objeto Literal vacio
}
// Verificancdo el  Objeto Literal producto - Vacio

console.log(producto)
// Los {} en el objeto "producto" indica una direccion UNICA memoria
/*
--- Intentando cambiar/pisar/Asignar al objeto literal producto al asignarle otro { }/espacioEnmemoria Unico al objeto "producto" 

--- Logica Operando: 
aca estoy diciendo que al objeto literal producto le voy asignar ' = ' un nuevo espacio unico en la memoria/ por eso da error xq es CONSTANTE --->  NO se puede cambiar el espacio en la memoria asignado al Objeto producto  

producto = { }

--- Da error/ NO SE PUEDE / son 2 lugares distintos en la memoria y las constantes NO pueden cambiar 

*/
// Nota: se deja en texto xq da Error el intentar cambiar el objeto creado como constante



//Ejemplo3: Agregando propiedades/valores al Objeto Literal producto1 - que inicia vacio

console.log(`2. Creando un objetoLiteral Producto2 como constante - Inicia vacio`)
const producto2 = {
    // Es es un Objeto Literal vacio
}
// Verificancdo el  Objeto Literal producto - Vacio
console.log(producto2)

console.log(`3. Agregando la propiedad/valor .nombre = 'Zapato' al Objeto Literal producto2 a traves de Notacion de Punto `)
// --- Agregando la propiedad/valor .nombre = 'Hector' al Objeto Literal producto1 a traves de Notacion de Puntob
// Estoy agregando propiedades a la misma direccion en memoria
producto2.nombre = 'Zapato'
// Verificancdo las propiedades del Objeto Literal producto
console.log(producto2)

// Cambiando/pisando/sobreescribiendo el Valor en producto2.nombre
console.log(`4. Cambiando/pisando/sobreescribiendo la propiedad en producto2.nombre`)
producto2.nombre = 'Sandalia'
console.log(producto2)

/*  NOTA IMPORTANTE: 
--- Al crear Objetos como constante me aseguro de que tengan un unico/fijo espacio en memoria y no sea modificado por otro espacio de la memoria diferente 

--- Es buena practica que los Objetos Creados/instanciados sean Unicos/Fijos 
--- Lo que deberia modificarse en el Objeto Creado/Instanciado debe ser sus propiedades/valores y Funciones/Metodos
--- NO DEBERIA Modificarse el espacion en memoria >>> { } 
--- Los corchetes Asignan un espacion UNICO/FIJO en la memoria de la Maquina al Objeto
*/