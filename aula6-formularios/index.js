const form = document.getElementById("orderForm");

//Add um evento do tipo submit ao formulário
form.addEventListener("submit", function (ev) {
  ev.preventDefault(); //evita que a pagina seja atualizada e a perda dos dados selecionados, comportamento padrão

  const name = document.querySelector('input[name = "name"]').value;
  const address = document.querySelector('input[name = "address"]').value;
  const breadType = document.querySelector('select[name = "breadType"]').value;
  const main = document.querySelector('input[name = "main"]').value;
  const observations = document.querySelector(
    'textarea[name = "observations"]'
  ).value;

  //checkbox com mais de 1 opção
  let salad = "";
  document
    .querySelectorAll('input[name = "salad"]:checked')
    .forEach(function (item) {
      salad += " . " + item.value + "\n";
    }); //checked pega os inputs marcados. "item" = cada elemento selecionado
  console.log({ name, address, breadType, main, observations });

  alert(
    "Pedido Realizado!" +
      "\nNome do cliente: " +
      name +
      "\nEndereço de entrega: " +
      address +
      "\nTipo de pão: " +
      breadType +
      "\nRecheio: \n - " +
      main +
      "\n" +
      salad +
      "Observações: " +
      observations
  );
});
