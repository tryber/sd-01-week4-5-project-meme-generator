//Função de criar URL e adicionar imagem a partir do upload
    const img = document.querySelector(".image-meme");
    const inputImg = document.querySelector(".image-upload");
    inputImg.addEventListener("change", function() {   
        img.src = URL.createObjectURL(this.files[0]);
    });
     
    function insertText(id) {
        let textMeme = document.getElementById(id);
        textMeme.addEventListener("keyup", function() {
            let idRef = (id.slice(-1))-1
            document.querySelectorAll("[class^='text ']")[idRef].innerText=textMeme.value;
        })
    };

    insertText("meme-text1");
    insertText("meme-text2")

    let memeTexts = document.querySelectorAll("[class^='text ']");
    document.querySelector(".btn-font-increase").addEventListener("click", function() {
        for (text of memeTexts) {
            text.style.fontSize=parseInt(getComputedStyle(text).fontSize) + 3 + "px"
            }
        })
            
    document.querySelector(".btn-font-decrease").addEventListener("click", function() {
        for (text of memeTexts) {
            text.style.fontSize=parseInt(getComputedStyle(text).fontSize) - 3 + "px"
            }
        });

    let btnBorders = document.querySelectorAll(".btn-borders");
    for (let border of btnBorders) {
        console.log(border.id)
        border.addEventListener ("click", function(){
        let imgContainer = document.querySelector(".image-container");
        imgContainer.style.border=border.id;
        });
    }

    let corBordas = document.querySelectorAll(".border-colors");
    for (let color of corBordas) {
        color.addEventListener("click", function () {
            let imgContainer = document.querySelector(".image-container");
            imgContainer.style.borderColor = getComputedStyle(color).backgroundColor;
        })
    }

//Atribui imagem das miniaturas à moldura

    let miniatures = document.querySelectorAll(".img-small");
    for (let miniature of miniatures) {
        miniature.addEventListener("click", function() {
            let imgMeme = document.querySelector(".image-meme");
            imgMeme.src=miniature.src;
        })
    }
