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

var display = document.getElementsByClassName("imgdisplay")[0];
var borda = document.getElementById("borda");
borda.addEventListener('change', function(){
display.style.background = borda.value;
})
