var finalcima = document.getElementById("textofinalcima"); //p final
var finalbaixo = document.getElementById("textofinalbaixo"); //p final

var txtcima = document.getElementById("textocima"); //txt de cima inicial
var txtbaixo = document.getElementById("textobaixo"); //txt baixo inicial

txtcima.addEventListener('keyup', function(){
    finalcima.innerHTML = txtcima.value;
})

txtbaixo.addEventListener('keyup', function(){
    finalbaixo.innerHTML = txtbaixo.value;
})

function loadFile(event) {
	var image = document.getElementById('output');
    //caminho da imagem para o output
    image.src = URL.createObjectURL(event.target.files[0]);
};