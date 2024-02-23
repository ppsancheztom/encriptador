// let mensaje= null;
// * Definir la variables para solo letras minusculas
let regexSoloLetrasMinusculas = /^[a-z\s]+$/;

// * Definir la expresión regular para caracteres especiales
// let regexCaracteresEspeciales = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;



function encriptar(){
    let palabras = leerMensaje();
    if (palabras === null){

    }else{
        for (let i = 0; i < palabras.length; i++) {
            let caracteres = palabras[i].split(''); // Dividir cada palabra en caracteres
            console.log("Caracteres de la palabra" + (i+1) + ":", caracteres);
        
            for (let j = 0; j < caracteres.length; j++) {
                // Aplicar las conversiones según las reglas especificadas
                switch (caracteres[j]) {
                    case 'e':
                        caracteres[j] = 'enter';
                        break;
                    case 'i':
                        caracteres[j] = 'imes';
                        break;
                    case 'a':
                        caracteres[j] = 'ai';
                        break;
                    case 'o':
                        caracteres[j] = 'ober';
                        break;
                    case 'u':
                        caracteres[j] = 'ufat';
                        break;
                    // Puedes agregar más casos para otras letras si es necesario
                }
            }
            // Mostrar la palabra encriptada en la consola
            console.log("Palabra encriptada " + (i + 1) + ":", caracteres.join(''));

            document.getElementById('mensajeED').value="Hola";
        }
    }
}

function desencriptar(){
    let palabras= leerMensaje();


}

function leerMensaje(){
    let mensaje = document.querySelector('.txtMensaje');
    let textoMensaje = mensaje.value;
    
    if(!regexSoloLetrasMinusculas.test(textoMensaje)){
        document.getElementById('emergente').style.display='block';
        document.getElementById('Mensaje').value="";
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