let number = 0;
let requestData = null; // Variable para almacenar los datos recuperados

const videoArea = document.getElementById("video");
const titleArea = document.getElementById("title");
const contentArea = document.getElementById("content");
const button = document.getElementById('btn');

function getData() {
  const request = new XMLHttpRequest();
  request.onreadystatechange = function() {
    if (request.readyState == 4) {
      if(request.status == 200) {
        requestData = request.response; // Almacenar los datos recuperados
        updateContent(); // Llamar a la función para actualizar el contenido
      }
    }
  }
  request.open("GET", "ajax.json");
  request.responseType = "json";
  request.send(null);
}

function updateContent() {
  titleArea.innerHTML = requestData[number].title;
  contentArea.innerHTML = requestData[number].content;
  videoArea.setAttribute("src", requestData[number].url);
  number == 2 ? number = 0 : number++;
}

button.addEventListener('click', e => {
  // Llamar a la función para actualizar el contenido cuando se haga clic en el botón
  updateContent();
});

window.onload = getData;
