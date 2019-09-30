// Image Function
function drawImage() {
    // Add a constant to the HTML canvas
    const canvas = document.getElementById("canvas");
    // getContext() - Method returns a drawing context on the canvas, or null if the context identifier is not supported
    // 2d - Leading to the creation of a CanvasRenderingContext2D object representing a two-dimensional rendering con
    const ctx = canvas.getContext("2d");
    // Clear a rectangle within a given rectangle
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // Add a constant to the HTML image
    const img = document.getElementById("meme-image");
    //  DrawImage - Draw the image onto the canvas
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  }
  //  The entire page and all of its related files and components are loaded before the function listed in the onload event handler is executed, hence the term "on load."
  window.onload = function() {
    drawImage();
  }