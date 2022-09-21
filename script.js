//Seleccionar las etiquetas en variables.
const inputTexto= document.querySelector(".input-texto");
const mensaje= document.querySelector(".mensaje");

//Función del botón para encriptar texto.
function btnEncriptar() {
    const textoEncriptado = encriptar(inputTexto.value);
    mensaje.value = textoEncriptado;
    mensaje.style.backgroundImage = "none";
    inputTexto.value = "";
}

//Función con las condiciones para encriptar texto.
function encriptar(stringEncriptada) {
    let matrizCodigo = [
        ["e","enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o","ober"],
        ["u","ufat"]];
        stringEncriptada = stringEncriptada.toLowerCase();

        for(let i = 0;i < matrizCodigo.length;i++) {
            if(stringEncriptada.includes(matrizCodigo[i][0])) {
                stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
            }     
        }
        return stringEncriptada;
}

//Función del botón para desencriptar texto.
function btnDesencriptar() {
    const textoDesencriptado = desencriptar(inputTexto.value);
    mensaje.value = textoDesencriptado;
    mensaje.style.backgroundImage = "none";
    inputTexto.value = "";
}

//Función con las condiciones para desencriptar texto.
function desencriptar(stringDesencriptada) {
    let matrizCodigo = [
        ["e","enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o","ober"],
        ["u","ufat"]];
        stringDesencriptada = stringDesencriptada.toLowerCase();

        for(let i = 0;i < matrizCodigo.length;i++) {
            if(stringDesencriptada.includes(matrizCodigo[i][1])) {
                stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])
            }     
        }
        return stringDesencriptada;
}

//Función para darle la función de copiar el texto al botón.
function copiar() {
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value); //escribe y lee datos arbitrarios desde y hacia el portapapeles.
    mensaje.value = "";
}

