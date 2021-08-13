var agente = {
    nombre: 'aspiradora'
};


var espacio = {
    estado: true
};

var contadorMov;


function moverAgente() {
    if (document.getElementById("espacio1Agente").innerHTML = '<img id="agente" src="images/aspiradora.PNG" />') {
        document.getElementById("espacio1Agente").innerHTML = '<img id="limpio" src="images/limpio.PNG" />';
        document.getElementById("espacio2Agente").innerHTML = '<img id="agente" src="images/aspiradora.PNG" />';
    }
    limpiar();
    prueba2();
    contadorMov++;

}

function prueba() {
    if (document.getElementById("espacio1Agente").innerHTML = '<img id="agente" src="images/limpio.PNG" />') {
        document.getElementById("espacio2Agente").innerHTML = '<img id="limpio" src="images/limpio.PNG" />';
        document.getElementById("espacio1Agente").innerHTML = '<img id="agente" src="images/aspiradora.PNG" />';
    }
    contadorMov++;
}


function limpiar() {
    if ((document.getElementById("espacio1Agente").innerHTML = '<img id="agente" src="images/aspiradora.PNG" />')
        && (document.getElementById("espacio1Basura").innerHTML = '<img id="agente" src="images/basura.PNG" />')) {
        document.getElementById("espacio1Basura").innerHTML = '<img id="agente" src="images/limpio.PNG" />';
        document.getElementById("espacio2Agente").innerHTML = '<img id="agente" src="images/aspiradora.PNG" />';
        document.getElementById("espacio1Agente").innerHTML = '<img id="agente" src="images/limpio.PNG" />';
    }
}

function prueba2() {
    if ((document.getElementById("espacio2Agente").innerHTML = '<img id="agente" src="images/aspiradora.PNG" />')
        && (document.getElementById("espacio2Basura").innerHTML = '<img id="agente" src="images/basura.PNG" />')) {
        document.getElementById("espacio2Basura").innerHTML = '<img id="agente" src="images/limpio.PNG" />';

    }
}



















