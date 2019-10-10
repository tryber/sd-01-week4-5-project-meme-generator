var textoSuperiorFinal = document.getElementById("textofinalcima"); //p final
var textoInferiorFinal = document.getElementById("textofinalbaixo"); //p final
var textoSuperior = document.getElementById("textocima"); //txt de cima inicial
var textoInferior = document.getElementById("textobaixo"); //txt baixo inicial

//colocando o texto na imagem
textoSuperior.addEventListener('keyup', function () {
    textoSuperiorFinal.innerHTML = textoSuperior.value;
})

textoInferior.addEventListener('keyup', function () {
    textoInferiorFinal.innerHTML = textoInferior.value;
})

function adicionandoImagem(event) {
    var image = document.getElementById('output');
    //caminho da imagem para o output
    image.src = URL.createObjectURL(event.target.files[0]);
};

//mudar a cor da fonte
var cor = document.getElementById("color");
cor.addEventListener('change', function () {
    textoSuperiorFinal.style.color = cor.value;
    textoInferiorFinal.style.color = cor.value;
})

//alterando a borda
var display = document.getElementById('output');
var borda = document.getElementById("borda");
borda.addEventListener('change', function () {
    display.style.borderWidth = borda.value;
})

//buscando imagens precarregadas e mostrando na tela
var imgprincipal = document.getElementById('output');
for (let i = 0; i < 5; i++) {
    let imagemCarregada = document.getElementsByClassName("imgcarregadas")[i];
    imagemCarregada.addEventListener('click', function () {
        imgprincipal.src = imagemCarregada.src;
    })
}

//alterando o tamanho da fonte 
var tamanho = document.getElementById("tamanho");
tamanho.addEventListener('change', function () {
    textoSuperiorFinal.style.fontSize = tamanho.value;
    textoInferiorFinal.style.fontSize = tamanho.value;
})

//baixando a imagem
function printDiv(divName) {
    var printContents = document.getElementById(divName).innerHTML;
    var originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
}