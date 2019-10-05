function carregarImagem(event) {
    let img = document.getElementsByClassName('imagem-inserida')[0];
    img.src = URL.createObjectURL(event.target.files[0]);
};

function writeText(){
    let textoInput = document.querySelector('#valor-input').value
    let textoOutput = document.querySelector('#valor-saida')
    textoOutput.textContent = textoInput;
}   
