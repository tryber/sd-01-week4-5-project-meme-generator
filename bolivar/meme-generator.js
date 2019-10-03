// Select Image
function select(x) {
    if (x.selectedIndex === 0){
        for(i = 0; i < document.getElementsByClassName("meme-R").length; i++){
            document.getElementsByClassName("meme-R")[i].style.display = "none";
        } 
    } 
    else if (x.selectedIndex === 1){
        for(i = 0; i < document.getElementsByClassName("meme-R").length; i++){
        document.getElementsByClassName("meme-R")[i].style.display = "block";
        }
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

// Select the text    
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
    count += 1
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
    else if (count == 9){
        img1.style.border = "none"
        img2.style.border = "none"
        text.innerHTML = "None"
    }
    else {
        count = 0;
    }
}

