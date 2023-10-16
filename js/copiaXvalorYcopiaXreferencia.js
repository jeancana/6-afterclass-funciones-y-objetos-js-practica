/* alert('probando') */

// Refrescando el Operador de Asignacion ' = '

// ******************** APRENDIENDO COPIA POR VALOR ******************
// ---- CONCLUSION: los datos primitivos hacen COPIA X VALOR 

let num = 5
let num1 = num

// Verificando que esta en cada variable 
console.log('Verificando que esta en cada variable ')
console.log(`En num esta ${num}`)
console.log(`En num1 esta ${num1}`)
console.log('------------------------------')

console.log(`la variable num1 es = ${num1} `)
// Pisando a la variable num1 
num1 = 8
// consologenadola para ver que dato tiene dentro de ella
console.log(`Pisando la variable num1 es = ${num1} `)



// ******************** APREDIENDO COPIA POR REFERENCIA  ******************
// ---- CONCLUSION: los datos Punteros hacen COPIA X REFERENCIA 

// ***** Usando Tipos de Datos Punteros - Objetos Punteros *****

// Creando un Objeto Literal 
let obj1 = {

    x: 15,
    y: 10 
}

let obj2 = obj1  
console.log('------------------------------')
console.log('Verificando Obj1')
console.log(obj1)
console.log('Verificando ---> let obj1 = Obj2')
console.log(obj2)

console.log('-- Usando Notacion de Punto para Verificar las Propiedades del Obj1 y obj2--')
console.log('Verificando la posicion en memoria guardada en Obj1.X')
console.log(obj1.x)
console.log('Verificando la posicion en memoria guardada en Obj2.x')
console.log(obj2.x)
console.log('Verificando la posicion en memoria guardada enObj1.y')
console.log(obj1.y)
console.log('Verificando la posicion en memoria guardada en Obj2.y')
console.log(obj2.y)

console.log('Pisando el Dato ahora sera/ cambiando la posicion/value en memoria, ahora sera --> Obj2.x = 25 ')
obj2.x = 25

// Al pisarlo cambio es la propiedad/valor del PAR key:value que comparten en ambos Objetos obj1 y obj2
console.log('Verificando Obj1.X - quedo pisado en ambos objetos')
console.log(obj1.x)
console.log('Verificando Obj2.x - quedo pisado en ambos objetos')
console.log(obj2.x)
/* 
---> Esto sucede xq los Objetos punteros **NO HACEN** una Copia por Valor/Dato de los datos contenidos en una Variable en la otra variable
---> SINO una COPIA POR REFERENCIA del Par "key:Value" que esta guardada en una posicion/espacio en la memoria de la maquina y lo comparten ambos objetos ahora, en otras palabras HACE UNA COPIA DE LA REFERENCIA en la MEMORIA en el obj2 (es como decir de obj1 y obj2 estan clonados)
---> El valor/value en el PAR key:value se actualiza y queda guardado en memoria de la maquina nuevamente.
---> Al Asignarle a obj2 = obj1, se hace una extension por referencia del mismo PAR key:value
---> SI cambia el valor/dato/propiedad de alguno de los 2 objetos, Cambiara para todos los objetos referenciados al PAR, xq ambos objetos comparten el mismo PAR 
---> Xq lo que esta cambiando UNICAMENTE "x referencia" es el valor/dato/propiedad del PAR key:value alojado en la posicion de memoria de la maquina
---> Al estar compartiendo ambos un unico PAR Key:Value "x referencia", comparten una unica posicion de memoria en la maquina y el PAR es el que cambia 
*/