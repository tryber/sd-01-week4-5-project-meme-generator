// Upload Image
// Event itself contains the properties and methods which are common to all events
function handleFiles(event) {
    var img = document.getElementById("meme-image");
    // Return a DOMString containing an object URL
    // The target property of the Event interface is a reference to the object that dispatched the event
    img.src = URL.createObjectURL(event.target.files[0]);
}; 


