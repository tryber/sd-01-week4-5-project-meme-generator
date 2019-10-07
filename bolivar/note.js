<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
	<link rel="stylesheet" type="text/css" href="style.css">
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<title>Gerador de Memes - GM</title>
	<script language="javascript" type="text/javascript">
		function loadFile(event) {
			var image = document.getElementById('output');
			image.src = URL.createObjectURL(event.target.files[0]);
		};
		function textoCima(frasecima) {
			var txtcima = document.getElementById("textocima")
			txtcima.innerHTML = frasecima.value;
		}
		function textoBaixo(frase) {
			var txtbaixo = document.getElementById("textobaixo")
			txtbaixo.innerHTML = frase.value;
		}
		function aumentaLetra() {
			var txtbaixo = document.getElementById("textobaixo")
			txtbaixo.style.fontSize = "40px";
			var txtcima = document.getElementById("textocima")
			txtcima.style.fontSize = "40px";
		}
		function diminuiLetra() {
			var txtbaixo = document.getElementById("textobaixo")
			var txtcima = document.getElementById("textocima")
			if (txtbaixo.style.fontSize == "30px" && txtcima.style.fontSize == "30px") {
				txtbaixo.style.fontSize = "20px";
				txtcima.style.fontSize = "20px";
			}else if (txtbaixo.style.fontSize == "40px" && txtcima.style.fontSize == "40px") {
				txtbaixo.style.fontSize = "30px";
				txtcima.style.fontSize = "30px";
			}			
		}
	</script>
</head>

<body>
	<span id="fonte1">Gerador de Memes BRABO</span>
	<div>
		<span>Selecione uma imagem de fundo para seu meme: </span><input type="file" name="image" id="diretorio"
			onchange="loadFile(event)" />
	</div>
	<span>Digite aqui uma frase para parte de <strong>cima</strong> do seu meme: </span><input type="text"
		id="frasecima" maxlength="55" onkeyup="textoCima(frasecima)"><br>
	<span>Digite aqui uma frase para parte de <strong>baixo</strong> do seu meme: </span><input type="text" id="frase"
		maxlength="55" onkeyup="textoBaixo(frase)"><br>
	<div style="margin-left: 10%">
		<button type="submit" onclick="aumentaLetra()">Aumentar Letra</button>
		<button type="submit" onclick="diminuiLetra()">Diminuir Letra</button>
	</div>
	<div class="img">
		<img id="output" alt="Gerador de Memes" />
		<p id="textocima" class="fonte"></p>
		<p id="textobaixo" class="fonte"></p>
	</div>
</body>

</html>











        
        <form><input type="file" id="file"></form>
        

        

		function updateImage(img){
    // URL.createObjectURL() creates a DOMString containing a URL representing the object given in the parameter which, in this case, is the uploaded file.
    img.src = URL.createObjectURL(file);
}



 



        
		

function drawBackgroundImage(canvas, ctx) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    var img = handleFiles(event);  
    ctx.drawImage(document.getElementById("meme-image"), 0, 0, canvas.width, canvas.height);
}
onload = function() {
    var canvas = document.getElementById("canvas");
    
    drawBackgroundImage(canvas, ctx);
};

<!-- Create a Canvas -->
        <!-- A canvas is a rectangular area on an HTML page. By default, a canvas has no border and no content. -->
        <canvas id="canvas"></canvas>

		var canvas = document.getElementById("canvas");
// getContext() - Method returns a drawing context on the canvas, or null if the context identifier is not supported
// 2d - Leading to the creation of a CanvasRenderingContext2D object representing a two-dimensional rendering
var ctx = canvas.getContext('2d');
ctx.drawImage(document.getElementById("meme-image"), 0, 0, canvas.width, canvas.height);



<!-- Upload a File -->
        <!-- Form: defines a form that is used to collect user input -->
        <!-- Post: appends form-data inside the body of the HTTP request (data is not shown is in URL) -->
        <!-- Enctype: specifies how the form-data should be encoded when submitting it to the server -->
        <form method="post" enctype="multipart/form-data">
        <!-- Input: specifies an input field where the user can enter data -->
        <!-- Acept: specifies a filter for what file types the user can pick from the file input dialog box -->
        <!-- The onchange event occurs when the value of an element has been changed -->
        <!-- In a method, this refers to the owner object --></form>


		<!-- Form: defines a form that is used to collect user input -->
        <!-- Post: appends form-data inside the body of the HTTP request (data is not shown is in URL) -->
        <!-- Enctype: specifies how the form-data should be encoded when submitting it to the server --></form>


 
		
		
		
		
		
var limiter = {
  allowed: 0, // Max. allowed characters
  counter: null, // Target word countering counter
  textarea: null, // Target textarea

  // INITIATE WORD COUNTER & LIMITER
  init: function (max, counter, textarea) {
    limiter.allowed = max;
    limiter.counter = counter;
    limiter.counter.innerHTML = limiter.allowed;
    limiter.textarea = textarea;
    limiter.textarea.setAttribute("maxlength", limiter.allowed);
    limiter.textarea.addEventListener("keyup", limiter.update);
    limiter.textarea.removeAttribute("disabled");
  },

  // UPDATE REMAINING WORD COUNT
  update: function (evt) {
    let remain = limiter.allowed - limiter.textarea.value.length;
    limiter.counter.innerHTML = remain;
  },

  // SAVE OR SUBMIT FORM
  save: function () {
    // Check - You might want to make this a little more elegant...
    let inlength = limiter.textarea.value.length;
    if (inlength==0 || inlength>limiter.allowed) {
      alert("Invalid text entry.");
    }

    // OK - Submit
    else {
      // Maybe use AJAX
      var xhr = new XMLHttpRequest(),
          data = new FormData();
      data.append("text", limiter.textarea.value);
      xhr.open("POST", "ajax-upload.php", true);
      xhr.onload = function(res){
        // Do something...
      };
      // xhr.send(data);
      alert("OK");
    }
    return false;
  }
};

// INIT
window.onload = function () {
  limiter.init(
    160,
    document.getElementById("remain"),
    document.getElementById("textin")
  );
};




