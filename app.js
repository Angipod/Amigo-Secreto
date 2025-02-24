// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Crear array para almacenar los nombres
let amigos = [];

//Implementar funcion para agregar amigos

function agregarAmigo (){
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();
    inputAmigo.value = "";
    

//Validar que el campo no este vacio
if(nombre === ""){
    alert("Por favor, escriba un nombre.");
    return; //Stop a la funcion
}

//Validar que el nombre no este repetido.
if(amigos.includes(nombreAmigo)){
    alert(`El nombre ${nombreAmigo}`, "ya esta en la lista");
    return;
}

//Agregar el nombre al array de amigos
amigos.push(nombreAmigo);git

//Limpiar campo de entrada
inputAmigo.ariaValueMax = "";

//Actualizar lista de amigos en HTML
actualizarLista();

}

//funcion para actualizacion de lista en interfaz

function actualizarLista(){
const listaAmigos = document.getElementById('listaAmigos');

//limpiar el contenido de la lista
listaAmigos.innerHTML = ""; //Borra contenido previo en el contenedor de la lista

    //Recorrer el array con un ciclo for
    for(let i = 0; i <amigos.length; i++){
    const li = document.createElement('li');
    li.textContent = amigos[i];
    listaAmigos.appendChild(li);
}

}

    //funcion para seleccionar un amigo aleatorio
    function sortearAmigo(){

        //Validar que haya amigos disponibles
        if(amigos.length === 0){ //Comprueba si el array 'amigos' esta vacio.
            alert("no tienes amigos disponibles para sortear. Agrega por lo menos uno");
            return;
        }
    //Generar indice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length); //Genera N° aleatorio entre 0 y la longitud de array
    
    //obtener el nombre sorteado
    const amigoSorteado = amigos[indiceAleatorio]; //usa el indice aleatorio para obtener un nombre del array.

    //mostrar el resltado en el HTML
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `Amigo sorteado: <strong>${amigoSorteado}</strong>`;


}