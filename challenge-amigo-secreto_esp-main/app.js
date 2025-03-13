let listaNombresSorteados = [];

limpiarLista();

function recibirValor() {
    return document.getElementById(`amigo`).value;
}

function agregarAmigo() {
    var valorEnCaja = recibirValor();
    if(valorEnCaja == ``){
        alert(`Porfvor ingrese un nombre`);
    }
    else {
        listaNombresSorteados.push(valorEnCaja);
        document.getElementById(`amigo`).value=``;
        document.getElementById(`amigo`).focus();
    }
    recorrerLista();
}

function recorrerLista(){
    let listaAmigos = document.getElementById(`listaAmigos`)
    listaAmigos.innerHTML = ``;

    for(i=0; i<listaNombresSorteados.length; i++ )
    {
        let elementoHTML = document.createElement(`li`);
        elementoHTML.textContent = `Num ${i+1} .- ${listaNombresSorteados[i]}`;
        listaAmigos.appendChild(elementoHTML);
    }
}
function sortearAmigo() {
    if (listaNombresSorteados.length==0)
    {
        alert(`No hay amigos en la lista`);
        return;
    }
    let amigoSecreto = listaNombresSorteados[Math.floor(Math.random()* listaNombresSorteados.length)];
    let resultado = document.getElementById(`resultado`);
    resultado.innerHTML = `Tu amigo secreto es: ${amigoSecreto}`;
}
function limpiarLista() {
    listaNombresSorteados = [];
    recorrerLista();
    document.getElementById(`resultado`).innerHTML = ``;
}
