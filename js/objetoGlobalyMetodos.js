/* alert('probando') */

// ***************** OBJETO GLOBAL JAVASCRIPT ************************
/* 
DEL OBJETO GLOBAL ****
1. En Javascritp todo proviene del OBJETO GLOBAL
2. Javascritp Siempre trabaja con Metodos y No trabaja con funciones - INTERNAMENTE
3. Todo dentro de Javascritp es un Metodo xq viene del OBJETO GLOBAL, todo comando que usemos va a ir al OBJETO GLOBAL 
*/

// ******* Diferencia entre METODOS y FUNCIONES contenidos en Javascritp/dentro del lenguaje *******
/* 
Lo que viene por default dentro del Lenguaje para ser usado por el programador

*** Dato importante DIFERENCIA ENTRE un METODO Y FUNCION dentro Javascritp *** 

1. Esto es una FUNCION dentro de Javascritp ----> alert() 
1.1 Viene sola desde un principio SOLO con los parentesis al final
1.2 Al estar escrito directamente es un funcion (no tiene punto ni ALGO antes)

2. Esto es un METODO dentro de Javascritp ---->"hola".toUpperCase() 
2.1 Viene primero ALGO, luego va el punto y al final lo que esta acompañando al parentesis es el METODO que se va a usar 
*/

// Prueba 1 - Funcion alert() - mostrar algo por una ventana: 

alert('Funcion Alert')

// Prueba 2 - Metodo toUpperCase() - volver mayusculas un String: 

"hola".toUpperCase()


// ******* Diferencia entre METODOS y FUNCIONES hechas por el Programador con Javascritp *******

// Prueba 1 - Funcion/bloqueDecodigo - Hecho por el programador: 
// Toda function que esta fuera de una Objeto es una FUNCION 

function saludar(){ 
    console.log('hola mundo')
}

// Prueba 2 - Metodo - Hecho por el programador:  
// Toda function que esta dentro de un objeto es un METODO 

// Objeto Literal producto1
let producto1 = {
    nombre: 'mouse',
    // A la llave del Par le estoy agregando una function 
    // Toda funcion que este dentro de un objeto se le llama Metodo 
    vender: function () {
        console.log('Producto vendido')
     }

}

// Usando el metodo contenido en producto1 
producto1.vender()


