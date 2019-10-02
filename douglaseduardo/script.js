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
//variaveis dos arquivos
let foto_a = "imagens/godplease.jpg"
let foto_b = "imagens/jura.jpg"
let foto_c = "imagens/kiko.jpg"
let foto_d = "imagens/mudarseassunto.jpg"
let foto_e = "imagens/rir.jpg"
let fotoUpload = document.querySelector("#imagemCarregada")
let btnSubmit = document.querySelector("#fotoupload")


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
function cont(){
    var tela_impressao = window.open('about:blank')
    tela_impressao.document.write(divPrincipal.innerHTML)
    tela_impressao.window.print()
    tela_impressao.window.close()
}
//função trocar cor moldura
function trocarCor() {
    divPrincipal.style.border = "3px, solid, favcolor"
}


