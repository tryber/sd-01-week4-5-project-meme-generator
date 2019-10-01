var finalcima = document.getElementById("textofinalcima"); //p final
var finalbaixo = document.getElementById("textofinalbaixo"); //p final

var txtcima = document.getElementById("textocima"); //txt de cima inicial
var txtbaixo = document.getElementById("textobaixo"); //txt baixo inicial

//colocando o texto na imagem
txtcima.addEventListener('keyup', function(){
    finalcima.innerHTML = txtcima.value;
})

txtbaixo.addEventListener('keyup', function(){
    finalbaixo.innerHTML = txtbaixo.value;
})

//adicionando a img ao div
function loadFile(event) {
	var image = document.getElementById('output');
    //caminho da imagem para o output
    image.src = URL.createObjectURL(event.target.files[0]);
};

//mudar a cor da fonte
var cor = document.getElementById("color");
cor.addEventListener('change', function(){
    finalcima.style.color = cor.value;
    finalbaixo.style.color = cor.value;
})

var display = document.getElementById('output');
var borda = document.getElementById("borda");
borda.addEventListener('change', function(){
display.style.background = borda.value;
})

//buscando imagens precarregadas e mostrando na tela
var imgprincipal = document.getElementById('output');
var im1 = document.getElementById('img1');
var im2 = document.getElementById('img2');
var im3 = document.getElementById('img3');
var im4 = document.getElementById('img4');
var im5 = document.getElementById('img5');

im1.addEventListener('click', function(){
    imgprincipal.src = im1.src;
})
im2.addEventListener('click', function(){
    imgprincipal.src = im2.src;
})
im3.addEventListener('click', function(){
    imgprincipal.src = im3.src;
})
im4.addEventListener('click', function(){
    imgprincipal.src = im4.src;
})
im5.addEventListener('click', function(){
    imgprincipal.src = im5.src;
})


