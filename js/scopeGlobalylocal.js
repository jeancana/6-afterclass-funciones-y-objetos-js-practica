
// Esto es una variable Global/Scope Global ---> todos los bloques de codigo futuro la puede usar
let nombre = 'Adrian'

// Creando una funcion Estatica para hacer entender el Scope loca/ variable local

// Ejemplo Nro.1 
function saludar() {
    // Esto es una variable local que solo podra ser usado si llamamos a la funcion saludar()
    let apellido = 'Rodriguez'
    console.log("Hola mi apellido es " + apellido + ' VARIABLE LOCAL')
} 
// Usando la variable Local - llamando la funcion saludar()
saludar()


console.log('')
// Ejemplo Nro.2 - 

// Usando la variable Global y la variable Local 
console.log(`hola mi nombre es ${nombre} - VARIABLE GLOBAL`) 
saludar()


console.log('')
// Ejemplo Nro.3 poniendo a nombre como variable dentro la funcion 
function saludar2() {
    // Esto es una variable local que solo podra ser usado si llamamos a la funcion saludar()
    let nombre = 'Pedro'
    let apellido = 'Rodriguez'
    console.log("Hola mi nombre es " + nombre + ' VARIABLE LOCAL')
    console.log("Hola mi apellido es " + apellido + ' VARIABLE LOCAL')
} 
// llamando a la funcion saludar2()
saludar2()

// ACA vuelvo a llamar a la variable local a pesar que las 2 se denominan nombre
console.log(`hola mi nombre es ${nombre} - VARIABLE GLOBAL`)