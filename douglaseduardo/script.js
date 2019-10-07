//variavel da div principal
let divPrincipal = document.querySelector("#fotoPrincipal")
//variaveis foto
let fotoPrincipal = document.querySelector("#fotoParaTrocar")
let foto1 = document.querySelector("#foto1")
let foto2 = document.querySelector("#foto2")
let foto3 = document.querySelector("#foto3")
let foto4 = document.querySelector("#foto4")
let foto5 = document.querySelector("#foto5")
//variaveis texto
let texto1 = document.querySelector("#texto1")
let texto2 = document.querySelector("#texto2")
let textoCima = document.querySelector("#textoMemeCima")
let textoBaixo = document.querySelector("#textoMemeBaixo")
let textoMeme = document.querySelector(".textoMeme")
//variaveis dos arquivos
let fotoA = "imagens/godplease.jpg"
let fotoB = "imagens/jura.jpg"
let fotoC = "imagens/kiko.jpg"
let fotoC = "imagens/mudarseassunto.jpg"
let fotoE = "imagens/rir.jpg"
let fotoUpload = document.querySelector("#imagemCarregada")
let btnSubmit = document.querySelector("#fotoUpload")
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
