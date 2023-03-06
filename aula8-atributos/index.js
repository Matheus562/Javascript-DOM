const input = document.getElementById("input");

//mudando valor
document.getElementById("value").addEventListener("click", function () {
  input.value = input.value === "" ? "Hello word" : ""; // verificação if ternario. Se value estiver vazio o valor sera transformado em Hello word, se tiver ocupado se tornará vazio
  //input.value = "Olá, mundo";

  console.log(input.value); //Pega o valor em tempo real
});

//mudando tipo
document.getElementById("type").addEventListener("click", function () {
  // input.type = input.type !== "radio" ? "radio" : "text"; //Se input for diferente de 'radio' transforma em 'radio'. Se for igual a 'radio' transforma em 'text'
  input.setAttribute("type", "radio");
});

//mudar placeholder
document.getElementById("placeholder").addEventListener("click", function () {
  input.placeholder = "Digite algo";
});

//desabilitar o botão
document.getElementById("disable").addEventListener("click", function () {
  input.setAttribute("disabled", !input.disabled); //disabled atributo que desabilita o input
});

document.getElementById("data").addEventListener("click", function () {
  const data = input.dataset.somethingElse;
  console.log("O valor do atributo data-something-else é: " + data);
  input.dataset.somethingElse = "Algum outro valor";
  console.log(
    "O valor do atributo data-something-else agora é: " +
      input.dataset.somethingElse
  );
}); //dataset referencia todos elementos data presente no html
