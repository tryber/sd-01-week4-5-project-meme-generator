//variaveis foto
let fotoprincipal = document.querySelector("#fotoparatrocar")
let foto1 = document.querySelector("#foto1")
let foto2 = document.querySelector("#foto2")
let foto3 = document.querySelector("#foto3")
let foto4 = document.querySelector("#foto4")
let foto5 = document.querySelector("#foto5")
//variaveis texto
let textoDoForms = document.querySelector(".texto")
let textoDaTagP = document.querySelector("#texto_meme")
//variaveis dos arquivos
let foto_a = "imagens/desanimo.jpg"
let foto_b = "imagens/mimimi.jpg"
let foto_c = "imagens/pensando.jpg"
let foto_d = "imagens/prantos.jpg"
let foto_e = "imagens/engomadinho.jpg"
//funções de colocar o texto
function colocarTexto() {
    textoDaTagP.innerHTML = textoDoForms.innerHTML
}
//funções de trocar as fotos
function trocarFoto(parametro) {
    fotoprincipal.src = parametro 
}
//funções dos eventos
// seção de mouser ouver
foto1.addEventListener("mouseover", function() {
    trocarFoto(foto_a)
})
foto2.addEventListener("mouseover", function() {
    trocarFoto(foto_b)
})
foto3.addEventListener("mouseover", function() {
    trocarFoto(foto_c)
})
foto4.addEventListener("mouseover", function() {
    trocarFoto(foto_d)
})
foto5.addEventListener("mouseover", function() {
    trocarFoto(foto_e)
})
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
textoDoForms.addEventListener("keyup", function{
    colocarTexto()
})

