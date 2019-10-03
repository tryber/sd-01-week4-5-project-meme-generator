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



