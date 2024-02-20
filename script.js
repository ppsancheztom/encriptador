// let mensaje= null;
// * Definir la variables para solo letras minusculas
let regexSoloLetrasMinusculas = /^[a-záéíóúüñ]+$/i;

// * Definir la expresión regular para caracteres especiales
let regexCaracteresEspeciales = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;



function encriptar(){
    let palabras = leerMensaje();
    if (palabras === null){

    }else{
        for (let i = 0; i < palabras.length; i++) {
            let caracteres = palabras[i].split(''); // Dividir cada palabra en caracteres
            console.log("Caracteres de la palabra" + (i+1) + ":", caracteres);
        }
    }
}

function desencriptar(){
    let palabras= leerMensaje();


}

function leerMensaje(){
    let mensaje = document.querySelector('.txtMensaje');
    let textoMensaje = mensaje.value;
    
    if(textoMensaje.trim() === ''
    // || !regexSoloLetrasMinusculas.test(textoMensaje)|| !regexCaracteresEspeciales.test(textoMensaje)
    ) {
        // console.log("El mensaje está vacio.");
        document.getElementById('emergente').style.display='block';
        return null;
    }else{

        let palabras = textoMensaje.split(' '); // Dividir el mensaje en palabras
        console.log("Palabras del texto:", palabras);

        desAvisoIni();

        return palabras;
    }
}

function desAvisoIni(){
     // Desactivar elementos con la clase "avisoInicial"
    var elementosAviso = document.querySelectorAll('.avisoInicial');
    elementosAviso.forEach(function(elemento) {
        elemento.style.display='none';
    });

    document.getElementById('btnCopiar').style.display='block';

    document.getElementById('Mensaje').value='';
}

function actAvisoIni(){
     // activar elementos con la clase "avisoInicial"
    var elementosAviso = document.querySelectorAll('.avisoInicial');
    elementosAviso.forEach(function(elemento) {
        elemento.style.display='block';
    });

    document.getElementById('btnCopiar').style.display='none';
}

function copiar(){
    actAvisoIni();
}

function aceptar(){
    document.getElementById('emergente').style.display='none';
    actAvisoIni();
}