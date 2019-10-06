//variavel da div principal
let divPrincipal = document.querySelector("#fotoprincipal")
//variaveis foto
let fotoprincipal = document.querySelector("#fotoparatrocar")
let foto1 = document.querySelector("#foto1")
let foto2 = document.querySelector("#foto2")
let foto3 = document.querySelector("#foto3")
let foto4 = document.querySelector("#foto4")
let foto5 = document.querySelector("#foto5")
//variaveis texto
let texto1 = document.querySelector("#texto1")
let texto2 = document.querySelector("#texto2")
let textocima = document.querySelector("#texto_memeCima")
let textobaixo = document.querySelector("#texto_memeBaixo")
let textoMeme = document.querySelector(".texto_meme")
//variaveis dos arquivos
let foto_a = "imagens/godplease.jpg"
let foto_b = "imagens/jura.jpg"
let foto_c = "imagens/kiko.jpg"
let foto_d = "imagens/mudarseassunto.jpg"
let foto_e = "imagens/rir.jpg"
let fotoUpload = document.querySelector("#imagemCarregada")
let btnSubmit = document.querySelector("#fotoupload")
let corBorda = document.querySelector("#colorido")
let corFonte1 = document.querySelector("#coloridoFONTE1")
let corFonte2 = document.querySelector("#coloridoFONTE2")

//funções de trocar as fotos
function trocarFoto(parametro) {
    fotoprincipal.src = parametro 
}

//adicionando a img ao div
function loadFile(event) {
    fotoprincipal.src = URL.createObjectURL(event.target.files[0]);
}

//funções dos eventos TESTE
// seção de mouser ouver
// foto1.addEventListener("mouseover", function() {
//     trocarFoto(foto_a)
// })
// foto2.addEventListener("mouseover", function() {
//     trocarFoto(foto_b)
// })
// foto3.addEventListener("mouseover", function() {
//     trocarFoto(foto_c)
// })
// foto4.addEventListener("mouseover", function() {
//     trocarFoto(foto_d)
// })
// foto5.addEventListener("mouseover", function() {
//     trocarFoto(foto_e)
// })

// seção de onclick
foto1.addEventListener("click", function(){
    trocarFoto(foto_a)
})
foto2.addEventListener("click", function(){
    trocarFoto(foto_b)
})
foto3.addEventListener("click", function(){
    trocarFoto(foto_c)
})
foto4.addEventListener("click", function(){
    trocarFoto(foto_d)
})
foto5.addEventListener("click", function(){
    trocarFoto(foto_e)
})

//seção para o texto
texto1.addEventListener("keyup", function(){
textocima.innerHTML = texto1.value
})
texto2.addEventListener("keyup", function(){
textobaixo.innerHTML = texto2.value
})

//função para salvar o documento

function printDiv(divName) {
    var printContents = document.getElementById(divName).innerHTML;
    var originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
}
//função trocar cor moldura
corBorda.addEventListener("change", function(){
    divPrincipal.style.borderColor = corBorda.value
})
//cor da fonte
corFonte1.addEventListener("change", function(){
    textocima.style.color = corFonte1.value
})
corFonte2.addEventListener("change", function(){
    textobaixo.style.color = corFonte2.value
})
