let argumento1 = document.getElementById("caixa-de-texto-superior")
let argumento2 = document.getElementById("caixa-de-texto-inferior")

argumento1.addEventListener("keyup",function(){
    let mensagem = document.getElementById("mensagem-parte-superior-da-foto-meme")
    mensagem.innerText = this.value;
})

argumento2.addEventListener("keyup",function(){
    let mensagem2 = document.getElementById("mensagem-parte-inferior-da-foto-meme")
    mensagem2.innerText = this.value;
})

function carregarImagem(event) {
    let img = document.getElementsByClassName('imagem-inserida')[0];
    img.src = URL.createObjectURL(event.target.files[0]);
};
