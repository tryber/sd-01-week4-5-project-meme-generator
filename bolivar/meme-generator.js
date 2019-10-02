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
    // Return a DOMString containing an object URL
    // The target property of the Event interface is a reference to the object that dispatched the event
    img.src = URL.createObjectURL(event.target.files[0]);
}; 

    
function select(x) {
    if (x.selectedIndex === 0){
        document.getElementsByClassName("meme-R")[0].style.display = "none";
    } 
    else if (x.selectedIndex === 1){
        document.getElementsByClassName("meme-R")[0].style.display = "block";
    }
}; 

    


