window.onload = function () {
    var btnStart  = document.querySelector(".btnfirst")
    btnStart.addEventListener("mouseover", function hoverMouseOn() {
        btnStart.classList.add("btn");
    })
    btnStart.addEventListener("mouseleave", function hoverMouseOff() {
        btnStart.classList.remove("btn");
    })
    btnStart.addEventListener("click", function clickMouseLocation() {
        window.location.href = "#secondpage";
    })
    function loadFile(event) {
        let image = document.getElementsByClassName("imgoutput")[0];
        image.src = URL.createObjectURL(event.target.files[0]);
    };
    function showTextTop(event) {
        let text1 = document.getElementById('memetop').value;
        let showText1 = document.getElementById('texttop');
        showText1.innerHTML = text1;
    }
    showTextTop();
    function showTextBottom(event) {
        let text2 = document.getElementById('memebottom').value;
        let showText2 = document.getElementById('textbottom');
        showText2.innerHTML = text2;
    }
    showTextBottom(); 
    var buttonplus = document.getElementById("btnmaistext1")
    buttonplus.addEventListener("click", function addFontSize() {
        let plus = document.getElementById("texttop").style.fontSize = "50px";
    })
    var buttonless = document.getElementById("btnmenostext1")
    buttonless.addEventListener("click", function lessFontSize() {
        let less = document.getElementById("texttop").style.fontSize = "20px";
    })
    var buttonplus2 = document.getElementById("btnmaistext2")
    buttonplus2.addEventListener("click", function addFontSize() {
        let plus2 = document.getElementById("textbottom").style.fontSize = "50px";
    })
    var buttonless2 = document.getElementById("btnmenostext2")
    buttonless2.addEventListener("click", function lessFontSize() {
        let less2 = document.getElementById("textbottom").style.fontSize = "20px";
    })
}


    // const canvas = document.getElementById('box ');
    // function addLink() {
    //     var link = document.createElement('a');
    //     link.innerHTML = 'Download!';
    //     link.addEventListener('click', function(e) {
    //       link.href = canvas.toDataURL();
    //       link.download = "salt-bae.png";
    //     }, false);
    //     link.className = "btndonwload";
    //     document.querySelectorAll('section')[1].appendChild(link);
    //   }