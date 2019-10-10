function inserirImagem() {
    let imagemInput = document.querySelector('#carregar-imagem')

    imagemInput.addEventListener('change', function(){
        carregarImagem(event)
    })
}

function carregarImagem(event) {
    let img = document.querySelector('.imagem-inserida')
    img.src = URL.createObjectURL(event.target.files[0])
}

function writeText(){
    let textoOutput = document.querySelector('#valor-saida')
    textoOutput.textContent = document.querySelector('#valor-input').value
}   
