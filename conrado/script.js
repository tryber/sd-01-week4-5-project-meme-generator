var btnStart = document.getElementsByClassName("btnfirst")[0]
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
    let image = document.getElementsByClassName('imgoutput')[0];
    image.src = URL.createObjectURL(event.target.files[0]);
};
function showTextTop(event) {
    let text1 = document.getElementById('memetop').value;
    let showText1 = document.getElementById('texttop');
    showText1.innerHTML = text1;
}

function showTextBottom(event) {
   let text2 = document.getElementById('memebottom').value;
   let showText2 = document.getElementById('textbottom');
   showText2.innerHTML = text2;
}  

var buttonplus = document.getElementById("btnmaistext1")
    buttonplus.addEventListener("click", function teste() {
    let plus = document.getElementById("texttop").style.fontSize = "large";
})