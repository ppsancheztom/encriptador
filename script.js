// let mensaje= null;

function encriptar(){
    leerMensaje();
}

function leerMensaje(){
    let mensaje = document.querySelector('.txtMensaje');
    let textoMensaje = mensaje.value;
    
    if(textoMensaje.trim() === '') {
        console.log("El mensaje está vacio.");
        // return;
    }else{

        let caracteres = textoMensaje.split('');
        console.log("Caracteres del texto",caracteres);
        desAvisoIni();
    }
}

function desAvisoIni(){
     // Desactivar elementos con la clase "avisoInicial"
    var elementosAviso = document.querySelectorAll('.avisoInicial');
    elementosAviso.forEach(function(elemento) {
        elemento.style.display='none';
    });

    document.getElementById('btnCopiar').style.display='block'

    document.getElementById('Mensaje').value='';
}

function actAvisoIni(){
     // activar elementos con la clase "avisoInicial"
    var elementosAviso = document.querySelectorAll('.avisoInicial');
    elementosAviso.forEach(function(elemento) {
        elemento.style.display='block';
    });

    document.getElementById('btnCopiar').style.display='none'
}

function copiar(){
    actAvisoIni();
}