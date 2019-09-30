var edicao = document.getElementById("teste"); //p final
var txtcima = document.getElementById("textocima"); //txt de cima
var textobaixo = document.getElementById("textobaixo");

txtcima.addEventListener('keyup', function(){
    edicao.innerHTML = txtcima.value;
})

function loadFile(event) {
	var image = document.getElementById('output');
    //caminho da imagem para o output
    image.src = URL.createObjectURL(event.target.files[0]);
};