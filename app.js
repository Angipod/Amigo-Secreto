// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.



let amigos = []

// Agregarr amigos a la lista

function agregarAmigo() {

    
    let amigo = document.getElementById("amigo")
    let amigoValor = amigo.value  //amigo.value.trim()

    console.log( amigo )
    console.log( amigoValor )

//Validar entrada: Si el campo de texto está vacío, el programa mostrará una alerta pidiendo un nombre válido.

    if ( amigoValor == "" ) {
        console.log( "El amigo no puedo ser vacio. Ingresa un nombre." )
 
// sigue agregando amigos a lista simepre y cuando se valide entrada
        
    } else {
        amigos.push(amigoValor)
        
        console.log("amigos LISTA:")
        console.log(amigos)
        console.log("----")
    }

    let listaAmigos = document.getElementById("listaAmigos")
    listaAmigos.innerHTML = amigos

}

//Funcion sortearAmigo

function sortearAmigo() {


    console.log("Numero de amigos:", amigos.length)

    let numeroAleatorio = Math.floor( Math.random(10)* amigos.length)
    console.log(numeroAleatorio)


    
    amigoSeleccionado = amigos[numeroAleatorio]
    console.log("amigoSeleccionado:", amigoSeleccionado)

    let resultado = document.getElementById("resultado")
    resultado.innerHTML =  amigoSeleccionado

}

//Mostrar lista

