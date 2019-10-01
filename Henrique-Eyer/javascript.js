
var img=document.getElementById('imagem');//Pegar imagem desejada
var inputtextoc=document.getElementById('texto-memec');//inputtexto
var inputtextob=document.getElementById('texto-memeb');//inputtexto
var divImg=document.getElementById('imagemMeme');//Elemento onde a imagem fica
var ptxtc=document.getElementById('txt-memec');//pc
var ptxtb=document.getElementById('txt-memeb');//pb

var txtUP=document.getElementById('sizeletra-Up')//pega o elemnto botao para aumentar a letra

var txtDown=document.getElementById('sizeletra-Down')//pega o elemnto botao para aumentar a letra

//funçoes para mudar o valor do font size dos textos da imagem
txtUP.addEventListener('change', function (){
    if(txtUP.value> 45){
        txtUP.value=45;
    }
    if(txtUP.value< 10){
        txtUP.value=10;
    }
    ptxtc.style.fontSize=txtUP.value;
})
txtDown.addEventListener('change', function (){
    if(txtDown.value> 45){
        txtDown.value=45;
    }
    if(txtDown.value< 10){
        txtDown.value=10;
    }
    ptxtb.style.fontSize=txtDown.value;
})



//função para ativar o load file quando o usuario escolher a imagem
img.addEventListener('change', function (){

    loadFile(event);

})

//função para adicionar o evento de keyup para parte de cima do texto 
//função faz com que o paragrafo de dentro da imgem receba o texto digitado
inputtextoc.addEventListener('keyup', function (){

    ptxtc.innerHTML=inputtextoc.value;

})
//função para adicionar o evento de keyup para parte de baixo do texto
//função faz com que o paragrafo de dentro da imgem receba o texto digitado
inputtextob.addEventListener('keyup', function (){
    
    ptxtb.innerHTML=inputtextob.value;
    
})

//variavel que recebe a função para carregar a imagem na div.
var loadFile = function(event) {
	divImg.src = URL.createObjectURL(event.target.files[0]);
};