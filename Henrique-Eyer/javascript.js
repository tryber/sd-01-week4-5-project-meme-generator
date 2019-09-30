
var img=document.getElementById('imagem');
var texto=document.getElementById('texto-meme');
var divImg=document.getElementById('imagemMeme');
var dados=document.getElementById('formulario');
var txtmeme=document.getElementById('txt-meme');


img.addEventListener('change', function (){
    loadFile(event);
})

texto.addEventListener('keyup', function (){
    
    txtmeme.innerHTML=texto.value;
    
})

var loadFile = function(event) {

	divImg.src = URL.createObjectURL(event.target.files[0]);
};