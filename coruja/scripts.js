var texto = document.getElementById("texto")
var message = document.getElementById("mensagem-meme")
var message2 = document.getElementById("mensagem-meme2")


texto.addEventListener("keyup",function(){
    message.innerText = this.value;
})

texto2.addEventListener("keyup",function(){
    message2.innerText = this.value;
})

function carregarImagem(event) {
    let img = document.getElementsByClassName('imagem-inserida')[0];
    img.src = URL.createObjectURL(event.target.files[0]);
};
