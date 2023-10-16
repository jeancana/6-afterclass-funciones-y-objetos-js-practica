/* alert('probando') */


// ************ DEMOSTRANDO TODOS LOS TIPOS DE DATOS QUE EXISTEN EN JAVASCRIPT *****************


// ************ 1 DATOS PRIMITIVOS QUE EXISTEN EN JAVASCRIPT ******************

// 1. Tipo de Dato STRING - PRIMITIVO ---> engloba todas las cadenas de caracteres, incluyendo al caracter mismo 
console.log('1. Demostrando el tipo de Dato STRING - Usando typeof ')
let holaMundo = 'hola mundo'
console.log(holaMundo)
console.log(typeof holaMundo)

// 2. Tipo de Dato NUMBER - PRIMITIVO ---> engloba todos los Nros REALES del Infinito Negativo al Infinito Positivo 
console.log('2. Demostrando el tipo de Dato NUMBER - Usando typeof ')
let num = 5
console.log(num)
console.log(typeof num)

// 3. Tipo de Dato BOOLEAN - PRIMITIVO ---> Es un tipo de dato que se usa para condicionar/Asignar un estado inicial a la variable, asigna una bandera TRUE o FALSE y con ella evaluas una condicion

console.log('3. Demostrando el tipo de Dato BOOLEAN - Usando typeof ')
let verdad = true
console.log(verdad)
console.log(typeof verdad)

let mentira = false
console.log(mentira)
console.log(typeof mentira)

// 4. Tipo de Dato NULL - PRIMITIVO ---> ES UN VALOR INTENCIONALMENTE AGREGADO POR EL PROGRAMADOR Y Va representar un valor ausente/Va representar un valor ausente/Una variable que no tiene valor 
//Nota: El programador a decidido INTENCIONALMETE colocarle ese valor especial NULL a la variable y esto significa que la variable NO tiene valor asginado
console.log('4. Demostrando el tipo de Dato NULL - Usando typeof ')
let nulo = null
console.log(nulo)
console.log(typeof nulo)

// 5. Tipo de Dato UNDEFINED - PRIMITIVO --->Es una variable que NO HA SIDO INICIALIZADA/No ha sido asignado un valor a la variable Y Va representar un valor ausente/Una variable que no tiene valor
//NOTA: Es un valor asignado Exclusivamente por Javascritp de manera automatica al detectar que un variable NO HA SIDO INICIALIZADA/No ha sido asignado un valor a la variable
console.log('5. Demostrando el tipo de Dato UNDEFINED - NO HA SIDO INICIALIZADA/NO DEFINIDA - Usando typeof ')
// NO HA SIDO INICIALIZADA
let indefinida 
console.log(indefinida)
console.log(typeof indefinida)


// 6. Tipo de Dato NaN (Not a Number) - PRIMITIVO ---> es un tipo de Dato que Asigna Javascritp cuando al asignar o hacer operaciones Aritmeticas con Datos que NO son de tipo Number
//NOTA: Es un valor asignado Exclusivamente por Javascritp de manera automatica al detectar que Asignans o estas haciendo Operaciones Aritmeticas con Datos que NO son de tipo NUMBER
console.log('6. Demostrando el tipo de Dato NaN (Not a Number) - NO HA SIDO INICIALIZADA/NO DEFINIDA - Usando typeof ')
// NO HA SIDO INICIALIZADA
let noEsunNumero = "hola" - null
console.log(noEsunNumero)



// ************ 2 DATOS COMPUESTOS/COMPLEJOS/PUNTEROS/ESPECIALES ******************

console.log('7. Demostrando el tipo de Dato Puntero/Compuesto/Complejo FUNCTION - Usando typeof ')
let funcion = function funcion(){}
console.log(funcion)
console.log(typeof funcion)

console.log('8. Demostrando el tipo de Dato Puntero/Compuesto/Complejo OBJETC - Usando typeof ')
const objeto = {}
console.log(objeto)
console.log(typeof objeto)

console.log('9. Demostrando el tipo de Dato Puntero/Compuesto/Complejo Array - Usando typeof ')
const vector =[]
console.log(vector)
console.log(typeof vector)

console.log('9. Demostrando el tipo de Dato Puntero/Compuesto/Complejo Class- Usando typeof ')
class Clase {}
console.log(Clase)
console.log(typeof Clase)