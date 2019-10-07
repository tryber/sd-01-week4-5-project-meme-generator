
var img = document.getElementById('imagem');//Pegar imagem desejada
var inputtextoc = document.getElementById('texto-memec');//inputtexto
var inputtextob = document.getElementById('texto-memeb');//inputtexto
var divImg = document.getElementById('imagemMeme');//Elemento onde a imagem fica
var ptxtc = document.getElementById('txt-memec');//paragrafo superio
var ptxtb = document.getElementById('txt-memeb');//paragrafo inferior


var txtUP = document.getElementById('sizeletra-Up')//pega o elemnto botao para aumentar a letra

var txtDown = document.getElementById('sizeletra-Down')//pega o elemnto botao para aumentar a letra

var corSup = document.getElementById('corSup');//Pegar o elemento input color superior
var corInf = document.getElementById('corInf');//Pegar o elemento input color inferior

var colecao = document.getElementsByClassName('memesimg');//pega todas as que possui os memes pre definidos.

var borda = document.getElementById("borda");

var bordadiv = document.querySelector('.div-imagem');

var salvar = document.getElementById('salvar');

var qtd = 0;

//função para salvar os memes já criados
salvar.addEventListener('click', function(){
    
    var pegamemepS = document.createElement("p");
    pegamemepS.className = "txt-meme c";
    pegamemepS.id = "txt-memec"+qtd;
    pegamemepS.innerHTML = inputtextoc.value
    pegamemepS.style.fontSize = txtUP.value*0.25;
    pegamemepS.style.color = corSup.value;
    
    var pegamemepI = document.createElement("p");
    pegamemepI.className = "txt-meme b";
    pegamemepI.id = "txt-memeb"+qtd;
    pegamemepI.innerHTML = inputtextob.value;
    pegamemepI.style.color = corInf.value;
    pegamemepI.style.fontSize = txtDown*0.25;
    
    var pegamemeimg = document.createElement("img");
    pegamemeimg.src = divImg.src;
    
    var pegameme = document.createElement("div");
    pegameme.className = "itemcolection";
    
    
    
    
    var divcollection = document.querySelector(".collection");
    divcollection.appendChild(pegameme);
    pegameme.appendChild(pegamemeimg);
    pegameme.appendChild(pegamemepI);
    pegameme.appendChild(pegamemepS);
    qtd++;
})


//função para mudar a bordar
borda.addEventListener('change', function(){
    bordadiv.style.borderStyle = borda.value;
})


// Funçoes para mudar as imagem caso clique
for(let i=0;i<colecao.length;i++){
    colecao[i].addEventListener('click', function (){
        divImg.src = colecao[i].src;
    })
}

//funçoes para mudar o valor do font size dos textos da imagem
txtUP.addEventListener('change', function (){
    ptxtc.style.fontSize = get_size_text(txtUP);
})
txtDown.addEventListener('change', function (){
    ptxtb.style.fontSize = get_size_text(txtDown);
})

function get_size_text(component){
    if(component.value > 55) return 55;
    if(component.value < 15) return 15;
    return component.value;
}
//fim funçoes para mudar o tamanho

//função para modificar as cores
corSup.addEventListener('change', function(){
    ptxtc.style.color = corSup.value;
})
corInf.addEventListener('change', function(){
    ptxtb.style.color = corInf.value;
})




//função para ativar o load file quando o usuario escolher a imagem
img.addEventListener('change', function (){
    
    loadFile(event);
    
})

//função para adicionar o evento de keyup para parte de cima do texto 
//função faz com que o paragrafo de dentro da imgem receba o texto digitado
inputtextoc.addEventListener('keyup', function (){
    
    ptxtc.innerHTML = inputtextoc.value;
    
})
//função para adicionar o evento de keyup para parte de baixo do texto
//função faz com que o paragrafo de dentro da imgem receba o texto digitado
inputtextob.addEventListener('keyup', function (){
    
    ptxtb.innerHTML = inputtextob.value;
    
})

//variavel que recebe a função para carregar a imagem na div.
var loadFile = function(event) {
    divImg.src = URL.createObjectURL(event.target.files[0]);
};