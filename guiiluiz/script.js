function loadFile(event) {
    var image = document.getElementById('output');
    image.src = URL.createObjectURL(event.target.files[0]);
};

function textoFrase(frase,id) {
    var txtbaixo = document.getElementById(id)
    txtbaixo.innerHTML = frase.value;
}

function aumentaLetra() {
    var txtbaixo = document.getElementById("textobaixo")
    txtbaixo.style.fontSize = "40px";

    var txtcima = document.getElementById("textocima")
    txtcima.style.fontSize = "40px";
}

function diminuiLetra() {
    var txtbaixo = document.getElementById("textobaixo")
    var txtcima = document.getElementById("textocima")

    if (txtbaixo.style.fontSize == "30px" && txtcima.style.fontSize == "30px") {
        txtbaixo.style.fontSize = "20px";
        txtcima.style.fontSize = "20px";
    } else if (txtbaixo.style.fontSize == "40px" && txtcima.style.fontSize == "40px") {
        txtbaixo.style.fontSize = "30px";
        txtcima.style.fontSize = "30px";
    }
}

function mudaBorda(borda) {
    var div = document.getElementById("img")
    div.style.borderStyle = borda;

}

function corFonte(color) {
    var textocima = document.getElementsByClassName("fonte")[0]
    var textobaixo = document.getElementsByClassName("fonte")[1]
    textocima.style.color = color;
    textobaixo.style.color = color;
}

function mudaTemplate(template) {
    var image = document.getElementById('output');
    image.src = template;    
}
