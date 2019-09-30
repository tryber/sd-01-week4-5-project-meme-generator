

function loadFile(event) {
	var image = document.getElementById('output');
    //caminho da imagem para o output
    image.src = URL.createObjectURL(event.target.files[0]);
};