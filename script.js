// let mensaje= null;
// * Definir la variables para solo letras minusculas
let regexSoloLetrasMinusculas = /^[a-z\s]+$/;

// * Definir la expresión regular para caracteres especiales
// let regexCaracteresEspeciales = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;



function encriptar(){
    let palabras = leerMensaje();
    limpiar="";
    document.getElementById('mensajeED').textContent=limpiar;
    if (palabras === null){
    }else{
        for (let i = 0; i < palabras.length; i++) {
            let caracteres = palabras[i].split(''); // Dividir cada palabra en caracteres
            // console.log("Caracteres de la palabra" + (i+1) + ":", caracteres);
        
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
            // console.log("Palabra encriptada " + (i + 1) + ":", caracteres.join(''));
            // * unir caracteres de palabra en una variable
            menEcriptado=caracteres.join('');
            
            let divMensaje = document.getElementById('mensajeED');

            // ? Crear un elemento parrafo para cada palabra
            let nuevoParrafo = document.createElement('p');
            nuevoParrafo.textContent=menEcriptado;
            divMensaje.appendChild(nuevoParrafo);

            // divMensaje.appendChild(document.createElement('br'));

            // document.getElementById('mensajeED').textContent.
        }
    }
}

function desencriptar(){
    let palabras= leerMensaje();
    console.log('palabras: '+ palabras)

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
        // console.log("Palabras del texto:", palabras);

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
    let mensaje = document.getElementById('mensajeED').innerText

    // Copiar el texto al portapapeles
    navigator.clipboard.writeText(mensaje)
        .then(() => {
            // console.log('Texto copiado al portapapeles: ' + mensaje);
            // Aquí puedes agregar cualquier lógica adicional después de copiar el texto
        })
        .catch(err => {
            console.error('Error al copiar el texto: ', err);
        });



    // ? copiar mensaje de div
    // let mensaje = document.getElementById('mensajeED').innerText;
    // console.log("mensaje: "+mensaje)

    // let palabras = mensaje.split(/\s+/); // Dividir el mensaje en palabras
    // console.log("Palabras del texto:", palabras);
    
    // desAvisoIni();
    // ?


    document.getElementById('mensajeED').textContent="";
}

function aceptar(){
    document.getElementById('emergente').style.display='none';
    actAvisoIni();
}