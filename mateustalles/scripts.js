
    //função de criar URL e adicionar imagem a partir do upload
    const img = document.querySelector(".imagem-meme");
    const input = document.querySelector(".imagem-upload");
    input.addEventListener("change", function() {   
        img.src = URL.createObjectURL(this.files[0]);
    });

    //função de inserir texto
    function inserirTexto(id) {
        let texto = document.getElementById(id);
            texto.addEventListener("keyup", function() {
            let idRef = (id.slice(-1))-1
            document.querySelectorAll("[class^='text ']")[idRef].innerText=texto.value;
    })
    };

    //inserindo texto se referindo a classe e index do item input no documento.
    inserirTexto("frase-meme1");
    inserirTexto("frase-meme2")

    //Botão de aumentar e diminuir fonte.
    let btnSize = document.querySelectorAll(".text-button");
    for (let i = 0 ; i < btnSize.length ; i++) {
    btnSize[i].addEventListener("click", function() {
            if ( i== 0) {
                let changeSizeUp = document.querySelector(".text.up");
                let changeSizeDown = document.querySelector(".text.down");
                    if (changeSizeUp.style.fontSize=="") {
                        changeSizeUp.style.fontSize="53px";
                        changeSizeDown.style.fontSize="53px";
                    } else {
                        changeSizeUp.style.fontSize=parseInt(changeSizeUp.style.fontSize) + 3 +"px";
                        changeSizeDown.style.fontSize=parseInt(changeSizeDown.style.fontSize) + 3 +"px";
                    }
            }
                
             else if ( i == 1) {
                let changeSizeUp = document.querySelector(".text.up");
                let changeSizeDown = document.querySelector(".text.down");
                    if (changeSizeUp.style.fontSize=="") {
                        changeSizeUp.style.fontSize="47px";
                        changeSizeDown.style.fontSize="47px";
                    } else {
                        changeSizeUp.style.fontSize=parseInt(changeSizeUp.style.fontSize) - 3 +"px";
                        changeSizeDown.style.fontSize=parseInt(changeSizeDown.style.fontSize) - 3 +"px";
                    }
             }
         });
    }

    //Menu de mudança de bordas por tipo

    let btnBordas = document.querySelectorAll(".btn-borders");
    for (let tipo of btnBordas) {
        console.log(tipo.id)
        tipo.addEventListener ("click", function(){
        let imgContainer = document.querySelector(".imagem-container");
        imgContainer.style.border=tipo.id;
        });
    }


    //mudar cor das bordas;

    let corBordas = document.querySelectorAll(".border-colors");
    for (let color of corBordas) {
        color.addEventListener("click", function () {
            let imgContainer = document.querySelector(".imagem-container");
            imgContainer.style.borderColor = getComputedStyle(color).backgroundColor;
        })
    }

    //atribuir imagem das miniaturas à moldura

    let miniAturas = document.querySelectorAll(".img-small");
    for (let minis of miniAturas) {
        minis.addEventListener("click", function() {
            let imgMeme = document.querySelector(".imagem-meme");
            imgMeme.src=minis.src;
        })
    }


    //opcional, testando salvar imagens usando canvas
    //tirado de: https://stackoverflow.com/questions/33668608/generate-an-image-of-a-div-and-save-as

    //Creating dynamic link that automatically click
    function downloadURI(uri, name) {
        var link = document.createElement("a");
        link.download = name;
        link.href = uri;
        link.click();
        //after creating link you should delete dynamic link
        //clearDynamicLink(link); 
    }
