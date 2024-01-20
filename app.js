let numeroSecreto=0;
let intentos=0;
let listaNumerosSorteados=[];
let numeroMaximo=10;

function asignarTexto(elemento,texto)
{
    let elemtentoHTML = document.querySelector(elemento);
    elemtentoHTML.innerHTML=texto;
}

function verificarIntento()
{
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    //el == es de tipo boleano, es decir nos responde true o false
    //el === valida que ambos sean del mismo tipo
    if(numeroUsuario===numeroSecreto)
    {
        asignarTexto('p',`Acertaste el número en ${intentos} ${(intentos===1)? 'intento':'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else if (numeroUsuario > numeroSecreto)
        asignarTexto('p',"El numero secreto es menor");
    else
    asignarTexto('p',"El numero secreto es mayor");
    intentos++;
    limpiarCaja();
}

function limpiarCaja()
{
    //se utiliza el # para indicar que se trata de un id
    let valorCaja=document.querySelector('#valorUsuario');
    valorCaja.value='';
}

function numeroAleatorio()
{
    let numGenerado = Math.floor(Math.random()*numeroMaximo)+1;
   //si ya sorteamos todos los numeros 
   if(listaNumerosSorteados.length == numeroMaximo)
   {
    asignarTexto('p','Ya se sortearon todos los numeros posibles')
   }
   else
   {
    //si el numero generado esta incluido en la lista
    //includes nos permite recorrer la lista
    if(listaNumerosSorteados.includes(numGenerado))
       return numeroAleatorio(numGenerado);

    else
    {
        //push nos permite agregar elementos a nuestra lista
    listaNumerosSorteados.push(numGenerado);
    return numGenerado;
    }
   }
}

function condicionesIniciales()
{
    asignarTexto('h1','Juego del numero secreto!');
    asignarTexto('p',`Ingresa un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = numeroAleatorio();
    intentos=1;
}
function reiniciarJuego()
{   //limpiar la caja 
    limpiarCaja();
    //indicar mensaje de intervalo de numeros
    //generar el número aleatorio
   //reiniciar el número de intentos 
   condicionesIniciales();
   //deshabilitar el boton de nuevo juego
   document.querySelector('#reiniciar').setAttribute('disabled','true');
   
}


condicionesIniciales();