

// Validar el texto de entrada
function validarTexto(texto) {
    const regex = /^[a-z\s]*$/;
    return regex.test(texto);
}

// Encriptar el texto de entrada
function encriptar() {
    const input = document.getElementById('input-text').value;
    const errorMessage = document.getElementById('error-message');
    const muñeco = document.getElementById('muñeco');
    const copyButton = document.getElementById('copy-button');

    if (!validarTexto(input) || input.trim() === '') {
        errorMessage.textContent = 'Por favor, ingrese solo letras minúsculas sin caracteres especiales.';
        return;
    }

    const textoEncriptado = input
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    document.getElementById('output-text').value = textoEncriptado;
    errorMessage.textContent = '';  // Clear error message if valid
    muñeco.style.display = 'none';  // Ocultar la imagen solo si hay texto válido
    copyButton.style.display = 'block';  // Mostrar el botón "Copiar" solo si hay texto válido
}

// Desencriptar el texto de entrada
function desencriptar() {
    const input = document.getElementById('input-text').value;
    const errorMessage = document.getElementById('error-message');
    const muñeco = document.getElementById('muñeco');
    const copyButton = document.getElementById('copy-button');

    if (!validarTexto(input) || input.trim() === '') {
        errorMessage.textContent = 'Por favor, ingrese solo letras minúsculas sin caracteres especiales.';
        return;
    }

    const textoDesencriptado = input
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    document.getElementById('output-text').value = textoDesencriptado;
    errorMessage.textContent = '';  // Clear error message if valid
    muñeco.style.display = 'none';  // Ocultar la imagen solo si hay texto válido
    copyButton.style.display = 'block';  // Mostrar el botón "Copiar" solo si hay texto válido
}

// Copiar el texto encriptado o desencriptado al portapapeles
function copiar() {
    const outputText = document.getElementById('output-text');
    outputText.select();
    outputText.setSelectionRange(0, 99999); // Para dispositivos móviles
    document.execCommand("copy");
    alert("Texto copiado al portapapeles");
}

// Ocultar el botón "Copiar" cuando se borra el campo de entrada
document.getElementById('input-text').addEventListener('input', function() {
    if (this.value === '') {
        document.getElementById('copy-button').style.display = 'none';
        document.getElementById('muñeco').style.display = 'block'; // Mostrar la imagen de nuevo si el texto se borra
    }
});


