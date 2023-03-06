function useLightTheme() {
  document.body.style.color = "#212529";
  document.body.style.backgroundColor = "#f1f5f9";
}
function useDarkTheme() {
  document.body.style.color = "#f1f5f9";
  document.body.style.backgroundColor = "#212529";
}

//botão que alterna trocando as classes quando clicado
function switchTheme() {
  document.body.classList.toggle("is-light"); //Adiciona a classe is-light ao inputElement caso ela não exista e remove-a caso exista
  document.body.classList.toggle("is-dark");
}
document.getElementById("lightBtn").addEventListener("click", useLightTheme);
document.getElementById("darkBtn").addEventListener("click", useDarkTheme);
document.getElementById("switchBtn").addEventListener("click", switchTheme);
