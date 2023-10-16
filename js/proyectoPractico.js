
// ***************** DEMO ***********************

/* 

*** RECORDATORIO *** 
- Objeto: es un elemento individual/ Un solo elemento --> Se crea mediante el Objeto Literal
- FuncionConstructora/ObjetoConstructor: Sirve para crear/instanciar muchos objetos del mismo tipo
- Clase: Sirve para crear/instanciar muchos objetos del mismo tipo

*/

// Creando un Solo Objeto Individual - Se guarda/asigna en espacio unico en memoria 
console.log('-------- Objeto Individual ----------')
const tecladoGris = {
    color: 'Gris',
    precio: 15000
}
console.log(tecladoGris)

// Creando un Molde que me permita Instaciar multiple teclados de mucho colores - usando FuncionConstructora
console.log('--------  Usando FuncionConstructora -----------------')    
function Teclado(color, precio) {
        this.color = color
        this.precio = precio
    }


// Creando muchos teclados pasandole las propiedades al Objeto por Parametro 
const teclado1 = new Teclado('rojo', 1000)
console.log(teclado1)
const teclado2 = new Teclado('Verde', 3000)
console.log(teclado2)
const teclado3 = new Teclado('Amarillo', 1000)
console.log(teclado3)

// Creando un Molde que me permita Instaciar multiple teclados de mucho colores - usando Clases
console.log('-------- usando Clases ----------')
class FabricaMoldes {
    constructor(tipo, precio) {
        this.tipo = tipo
        this.precio = precio
    }
}

const molde1 = new FabricaMoldes('Ceramica',20)
console.log(molde1)
const molde2 = new FabricaMoldes('Plastico', 50)
console.log(molde2)
const molde3 = new FabricaMoldes('Metal', 30)
console.log(molde3)

console.log('-------- EJERCICIO PRACTICO CREANDO UN OBJETO UNICO/LITERAL----------')

// Creando un Objeto que me alcanza para todo  
const reproductorMusica = {
    
    //Propiedad cancion del Objeto reproductor
    cancion: " ",
    //Metodo reproducir del Objeto reproductor
    reproducir: function (cancion) {
        console.log(`Reproduciendo la cancion: ${cancion}`)
    },
    //Metodo pausar del Objeto reproductor
    pausar: function (cancion) {
        console.log(`Pausando la cancion: ${cancion}...`)
    },
    //Metodo borrar del Objeto reproductor
    borrar: function (cancion) {
        console.log(`borrando la cancion: ${cancion}`)
    },
    //Metodo crearPlaylist del Objeto reproductor
    crearPlaylist: function (nombre) {
        console.log(`Se creo la playlist: ${nombre}`)
    },
    //Metodo reproducirPlaylist del Objeto reproductor
    reproducirPlaylist: function (nombre) {
        console.log(`Reproduciendo la playlist: ${nombre}`)
    },

}

// Echando a Andar el objeto Unico creado - Usando mi reproductor de Musica
reproductorMusica.reproducir("StarWay to Heaven")
reproductorMusica.pausar("StarWay to Heaven")
reproductorMusica.borrar("StarWay to Heaven")
reproductorMusica.crearPlaylist("Musica para Rodar con Katherine")
reproductorMusica.reproducirPlaylist("Musica para Rodar con Katherine")


console.log('-- EJERCICIO PRACTICO NROS2 CREANDO UN OBJETO UNICO/LITERAL USANDO FUNCION FLECHA --')

const reproductorMusica2 = {

    //Propiedad cancion del Objeto reproductor
    cancion: " ",
    //Metodo reproducir del Objeto reproductor
    reproducir: (cancion) =>console.log(`Reproduciendo la cancion: ${cancion}`),
    
    //Metodo pausar del Objeto reproductor
    pausar: () => console.log(`Pausando la cancion: ${cancion}...`),
    
    //Metodo borrar del Objeto reproductor
    borrar: (cancion) => console.log(`borrando la cancion: ${cancion}`),
    
    //Metodo crearPlaylist del Objeto reproductor
    crearPlaylist: (nombre) => console.log(`Se creo la playlist: ${nombre}`),
    
    //Metodo reproducirPlaylist del Objeto reproductor
    reproducirPlaylist: (nombre) => console.log(`Reproduciendo la playlist: ${nombre}`),

}

reproductorMusica.reproducir("Musica Ligera")
reproductorMusica.pausar("Musica Ligera")
reproductorMusica.borrar("Musica Ligera")
reproductorMusica.crearPlaylist("Musica para Rodar con Michell")
reproductorMusica.reproducirPlaylist("Musica para Rodar con Michell")