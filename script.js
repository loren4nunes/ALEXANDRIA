function abrirSciHub() {

  window.open(
    "https://www.sci-hub.in/",
    "_blank"
  );

}

function abrirConnectPapers() {

  window.open(
    "https://www.connectedpapers.com/",
    "_blank"
  );

}

function abrirPdfDrive() {

  window.open(
    "https://www.pdfdrive.com/",
    "_blank"
  );

}

function abrirLibGen() {

  window.open(
    "https://libgen.is/",
    "_blank"
  );

}

function abrirChatGPT() {

  window.open(
    "https://chatgpt.com/",
    "_blank"
  );

}

function pesquisarArtigos() {

  const query =
  document.getElementById("search-box").value;

  if(query){

    window.open(
      "https://scholar.google.com/scholar?q=" + query,
      "_blank"
    );

    document
    .getElementById("page")
    .classList.remove("active");

    document
    .getElementById("result")
    .classList.add("active");

  }

}

function abrirRecursos(){

  document
  .getElementById("page")
  .classList.remove("active");

  document
  .getElementById("resources")
  .classList.add("active");

}

function abrirInstrucoes(){

  document
  .getElementById("page")
  .classList.remove("active");

  document
  .getElementById("instructions")
  .classList.add("active");

}

function voltarParaPesquisa(){

  document
  .getElementById("resources")
  .classList.remove("active");

  document
  .getElementById("instructions")
  .classList.remove("active");

  document
  .getElementById("result")
  .classList.remove("active");

  document
  .getElementById("page")
  .classList.add("active");

}
