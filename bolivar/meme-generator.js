// Select Image
function select(x) {
    var textlefttop = document.getElementById("text-left-top");
    var textleftbottom = document.getElementById("text-left-bottom");
    if (x.selectedIndex === 0){
        for(i = 0; i < document.getElementsByClassName("meme-R").length; i++){
            document.getElementsByClassName("meme-R")[i].style.display = "none";
        }
        textlefttop.style.left = "480px"
        textleftbottom.style.left = "480px"
    } 
    else if (x.selectedIndex === 1){
        for(i = 0; i < document.getElementsByClassName("meme-R").length; i++){
        document.getElementsByClassName("meme-R")[i].style.display = "block";
        }
        textlefttop.style.left = "180px"
        textleftbottom.style.left = "180px"
    }
};

// Upload Image
// Event itself contains the properties and methods which are common to all events
function handleFile1(event) {
    var img = document.getElementById("meme-image1");
    // Return a DOMString containing an object URL
    // The target property of the Event interface is a reference to the object that dispatched the event
    img.src = URL.createObjectURL(event.target.files[0]);
}; 

function handleFile2(event) {
    var img = document.getElementById("meme-image2");
    img.src = URL.createObjectURL(event.target.files[0]);
}; 

// Typing the text    
function leftTextTop(x){
    document.getElementById("text-left-top").innerHTML = x.value;
}

function leftTextBottom(x){
    document.getElementById("text-left-bottom").innerHTML = x.value;
}

function rightTextTop(x){
    document.getElementById("text-right-top").innerHTML = x.value;
}

function rightTextBottom(x){
    document.getElementById("text-right-bottom").innerHTML = x.value;
}

//Selec Border

var count = 0;

function changeBorder(){
    var img1 = document.getElementById("meme-image1");
    var img2 = document.getElementById("meme-image2");
    var text = document.getElementById("border")
    count += 1;
    if (count == 1){
        img1.style.border = "10px solid red"
        img2.style.border = "10px solid red"
        text.innerHTML = "Red Kiss"
    }
    else if (count == 2){
        img1.style.border = "10px double blue"
        img2.style.border = "10px double blue"
        text.innerHTML = "Two Blue"
    }
    else if (count == 3){
        img1.style.border = "10px solid pink"
        img1.style.borderRadius = "5px"
        img2.style.border = "10px solid pink"
        img2.style.borderRadius = "5px"
        text.innerHTML = "Sassy Pink"
    }
    else if (count == 4){
        img1.style.border = "10px dotted green"
        img2.style.border = "10px dotted green"
        text.innerHTML = "Green Mark"
    }
    else if (count == 5){
        img1.style.border = "10px solid yellow"
        img1.style.borderRadius = "5px 5px"
        img2.style.border = "10px solid yellow"
        img2.style.borderRadius = "5px 5px"
        text.innerHTML = "Hello Yellow"
    }
    else if (count == 6){
        img1.style.border = "10px dashed purple"
        img2.style.border = "10px dashed purple"
        text.innerHTML = "Açaí"
    }
    else if (count == 7){
        img1.style.border = "10px solid orange"
        img1.style.borderRadius = "5px 5px"
        img2.style.border = "10px solid orange"
        img2.style.borderRadius = "5px 5px"
        text.innerHTML = "Mix Orange"
    }
    else if (count == 8){
        img1.style.border = "10px dotted blue"
        img2.style.border = "10px dotted pink"
        text.innerHTML = "Damares"
    }
    else {
        img1.style.border = "none"
        img2.style.border = "none"
        text.innerHTML = "None"
        count = 0;
    }
}

// Select Size
function changeSize(){
    var pixels = 30;
    var top = 1600;
    var bottom = 1970;
    var textlefttop = document.getElementById("text-left-top");
    var textleftbottom = document.getElementById("text-left-bottom");
    var textrighttop = document.getElementById("text-right-top");
    var textrightbottom = document.getElementById("text-right-bottom");
    var text = document.getElementById("size")
    count += 1
    if (count > 7){ 
        count = 0;
    }
    else {
        for (i = 0; i < count; i ++){
            pixels += 5;
            top -= 10;
            bottom -= 10;
        }
    }
    var n = pixels.toString();
    var m = top.toString();
    var p = bottom.toString();
    textlefttop.style.fontSize = n + "px";
    textlefttop.style.top = m + "px";
    textleftbottom.style.fontSize = n + "px";
    textleftbottom.style.top = p + "px";
    textrighttop.style.fontSize = n + "px";
    textrighttop.style.top = m + "px";
    textrightbottom.style.fontSize = n + "px";
    textrightbottom.style.top = p + "px";
    text.innerHTML = n + "px";
    textLimitsLT();
    textLimitsLB();
    textLimitsRT();
    textLimitsRB();
    removeCharacters(textlefttop, document.getElementById("input1"));
    removeCharacters(textleftbottom, document.getElementById("input2"));
    removeCharacters(textrighttop, document.getElementById("input3"));
    removeCharacters(textrightbottom, document.getElementById("input4"));
}

// // Select Text Limits
function textLimitsLT(){
    var p = document.getElementById("text-left-top");
    if (p.style.fontSize !== ""){
        var size = p.style.fontSize.split("");
        var pixel = Number(size[0] + size[1]);
        var result = 59 - (pixel - 30);
        var n = result.toString();
    }
    document.getElementById("input1").maxLength = n;
}

function textLimitsLB(){
    var p = document.getElementById("text-left-bottom");
    if (p.style.fontSize !== ""){
        var size = p.style.fontSize.split("");
        var pixel = Number(size[0] + size[1]);
        var result = 59 - (pixel - 30);
        var n = result.toString();
    }
    document.getElementById("input2").maxLength = n;
}

function textLimitsRT(){
    var p = document.getElementById("text-right-top");
    if (p.style.fontSize !== ""){
        var size = p.style.fontSize.split("");
        var pixel = Number(size[0] + size[1]);
        var result = 59 - (pixel - 30);
        var n = result.toString();
    }
    document.getElementById("input3").maxLength = n;
}

function textLimitsRB(){
    var p = document.getElementById("text-right-bottom");
    if (p.style.fontSize !== ""){
        var size = p.style.fontSize.split("");
        var pixel = Number(size[0] + size[1]);
        var result = 59 - (pixel - 30);
        var n = result.toString();
    }
    document.getElementById("input4").maxLength = n;
}

// // Erase the extra Characters
function removeCharacters(text, input){
    var array = text.innerText.split("")
    for (i = 0; i < (array.length - input.maxLength); i++){
        array.pop()
    }
    var write = ""
    for (i = 0; i < array.length; i++){
        write += array[i]
    }
    text.innerText = write;
};

//Select Category
function setCategory(x) {
    if (x.selectedIndex === 0){
        document.getElementsByClassName("picture1")[0].style.display = "block";
        document.getElementsByClassName("picture2")[0].style.display = "none";
        document.getElementsByClassName("picture3")[0].style.display = "none";
    } 
    else if (x.selectedIndex === 1){
        document.getElementsByClassName("picture1")[0].style.display = "none";
        document.getElementsByClassName("picture2")[0].style.display = "block";
        document.getElementsByClassName("picture3")[0].style.display = "none";
    }
    else if (x.selectedIndex === 2){
        document.getElementsByClassName("picture1")[0].style.display = "none";
        document.getElementsByClassName("picture2")[0].style.display = "none";
        document.getElementsByClassName("picture3")[0].style.display = "block";

    }
};



function addEventClick(){
    var imgtwo = document.getElementById("meme-image1");
    var imgone = document.getElementById("meme-image2");
    var img1 = document.getElementsByClassName("cats")
    var img2 = document.getElementsByClassName("gretchen")
    var img3 = document.getElementsByClassName("RuPaul")
    var count = 0;
    img1[0].addEventListener("click", function(){
        count += 1
        if (count % 2 == 0){
            imgone.src = img1[0].src
        }
        else if (count % 2 !== 0){
            imgtwo.src = img1[0].src
        }
    })
    img1[1].addEventListener("click", function(){
        count += 1
        if (count % 2 == 0){
            imgone.src = img1[1].src
        }
        else if (count % 2 !== 0){
            imgtwo.src = img1[1].src
        }
    })
    img1[2].addEventListener("click", function(){
        count += 1
        if (count % 2 == 0){
            imgone.src = img1[2].src
        }
        else if (count % 2 !== 0){
            imgtwo.src = img1[2].src
        }
    })
    img2[0].addEventListener("click", function(){
        count += 1
        if (count % 2 == 0){
            imgone.src = img2[0].src
        }
        else if (count % 2 !== 0){
            imgtwo.src = img2[0].src
        }
    })
    img2[1].addEventListener("click", function(){
        count += 1
        if (count % 2 == 0){
            imgone.src = img2[1].src
        }
        else if (count % 2 !== 0){
            imgtwo.src = img2[1].src
        }
    })
    img2[2].addEventListener("click", function(){
        count += 1
        if (count % 2 == 0){
            imgone.src = img2[2].src
        }
        else if (count % 2 !== 0){
            imgtwo.src = img2[2].src
        }
    })
    img3[0].addEventListener("click", function(){
        count += 1
        if (count % 2 == 0){
            imgone.src = img3[0].src
        }
        else if (count % 2 !== 0){
            imgtwo.src = img3[0].src
        }
    })
    img3[1].addEventListener("click", function(){
        count += 1
        if (count % 2 == 0){
            imgone.src = img3[1].src
        }
        else if (count % 2 !== 0){
            imgtwo.src = img3[1].src
        }
    })
    img3[2].addEventListener("click", function(){
        count += 1
        if (count % 2 == 0){
            imgone.src = img3[2].src
        }
        else if (count % 2 !== 0){
            imgtwo.src = img3[2].src
        }
    })
}


window.onload = function () {
    addEventClick()
}

