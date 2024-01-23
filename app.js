
/*
let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Indica un número del 1 al 10';

function asignarTextoElemento(){
    let titulo = document.querySelector('h1');
    titulo.innerHTML = 'Juego del numero secreto';
}
*Buscar Codigo: Ctrl+F
*/
let numeroSecreto = 0;

let intentos = 0;
let ListaNumeros = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}


/*La funcion realiza la Accion */
function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(numeroUsuario);

    //Numero acertado
    if (numeroUsuario === numeroSecreto) { //Utilizando el operador Ternario
        asignarTextoElemento('p', `Acertaste el numero en el ${intentos} ${(intentos === 1 ? 'vez' : 'veces')}`);

        /*
        *Utilizando el Dom
        *Activando el Botton (reiniciar)
        */
        document.getElementById('reiniciar').removeAttribute('disabled');

        //El usuario No Acerto
    } else {

        if (numeroUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El numero secreto es menor');
        } else {
            asignarTextoElemento('p', 'El numero secreto es mayor');
        }
        intentos++;
        limpiarCaja(); //Llamando a la funcion

    }
    return
}
//Creando una funcion que limpia
function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    //Creando numero
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
    console.log(numeroGenerado);


    //Ya se pasaron la cantidad maxima de numeros
    if (ListaNumeros.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se alcazo el limite maximo de numeros');

    } else {
        //El numero generado está en la lista
        if (ListaNumeros.includes(numeroGenerado)) {
            return generarNumeroSecreto();

            //Si no esta en la lista, agregarlo
        } else {
            ListaNumeros.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function reiniciarJuego() {
    /*
    * Limpiar caja.
    * Indicar mensaje de intentos.
    * Generar el número aleatorio.
    * Desabilitar el botón de nuevo juego.
    * Inicializar el número intentos.
    */
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');


}
function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', `Indicar un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

condicionesIniciales();
