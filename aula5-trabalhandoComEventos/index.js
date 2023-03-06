function register(ev) {
  //console.log(ev);
  const sectionElement = ev.currentTarget.parentNode; //refrencia o elemento
  const username = sectionElement.children.username.value;
  const password = sectionElement.children.password.value;
  const passwordConfirmation =
    sectionElement.children.passwordConfirmation.value;
  //currentTarget elemento que causou o evento
  if (password === passwordConfirmation) {
    alert("Usuário " + username + " registrado!");
  } else {
    alert("As senhas não conferem!");
  }
  document.getElementById("username").value = "";
  document.getElementById("password").value = "";
  document.getElementById("passwordConfirmation").value = "";
}

const button = document.getElementById("register-button");

button.addEventListener("click", register); //Ouve / Espera o evento ocorrer. Add dinamicamente o evento

function removeEvent() {
  button.removeEventListener("click", register);
  alert("Evento removido!");
}
button.addEventListener("mouseover", function (ev) {
  console.log(ev.currentTarget);
});
