var btnStart = document.getElementsByClassName("btnfirst")[0]
btnStart.addEventListener("mouseover", function hoverMouseOn(){
    btnStart.classList.add("btn");
})
btnStart.addEventListener("mouseleave", function hoverMouseOff(){
    btnStart.classList.remove("btn");
})
btnStart.addEventListener("click", function clickMouseLocation(){
    window.location.href = "#secondpage";   
})
var btnUpload