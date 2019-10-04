let btnStart = document.getElementsByClassName("btnfirst")[0]
btnStart.addEventListener("mouseover", function clickStart(){
    btnStart.classList.add("btnStart");
})
btnStart.addEventListener("mouseleave", function unclickStart(){
    btnStart.classList.remove("btnStart");
})
btnStart.addEventListener("click", function clickLocationStart(){
    window.location.href = "#secondpage";    
})