
var img=document.getElementById('imagem');
var inputtextoc=document.getElementById('texto-memec');//inputtexto
var inputtextob=document.getElementById('texto-memeb');//inputtexto
var divImg=document.getElementById('imagemMeme');
var dados=document.getElementById('formulario');
var ptxtc=document.getElementById('txt-memec');//pc
var ptxtb=document.getElementById('txt-memeb');//pb


img.addEventListener('change', function (){
    loadFile(event);
})

inputtextoc.addEventListener('keyup', function (){
    
    ptxtc.innerHTML=inputtextoc.value;
    
})
inputtextob.addEventListener('keyup', function (){
    
    ptxtb.innerHTML=inputtextob.value;
    
})


var loadFile = function(event) {
	divImg.src = URL.createObjectURL(event.target.files[0]);
};