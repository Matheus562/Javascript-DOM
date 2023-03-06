//Usando sessionStorage
document.getElementById("sessionBtn").addEventListener("click", function () {
  const input = document.getElementById("session");
  //salvar o conteudo do input no sessionStorage
  sessionStorage.setItem("info", input.value); //setItem atribui um item
  input.value = ""; //limpando o input)
});
//Ler os dados armazenados
document.getElementById("readSesssion").addEventListener("click", function () {
  const info = sessionStorage.getItem("info");
  alert("A informação salva é: " + info);
});

//Local Storage
document.getElementById("localBtn").addEventListener("click", function () {
  const input = document.getElementById("local");
  //salvar o conteudo do input no localStorage
  localStorage.setItem("text", input.value);
  input.value = "";
});
//Ler os dados armazenados
document.getElementById("readLocal").addEventListener("click", function () {
  const text = localStorage.getItem("text");
  alert("O texto salvo no local storage é: " + text);
});

//cookie
document.getElementById("cookieBtn").addEventListener("click", function () {
  const input = document.getElementById("cookie");
  //cookieName=value; expires=UTCStringDate; path=/;
  const cookie = "info=" + input.value + ";";
  const expiration = "expires=" + new Date(2023, 08, 09) + ";";
  const path = "path=/;";
  document.cookie = cookie + expiration + path;
  input.value = "";
  console.log(document.cookie);
});

document.getElementById("cookie2Btn").addEventListener("click", function () {
  const input = document.getElementById("cookie2");
  //cookieName=value; expires=UTCStringDate; path=/;
  const cookie = "text=" + input.value + ";";
  const expiration = "expires=" + new Date(2023, 10, 09) + ";";
  const path = "path=/;";
  document.cookie = cookie + expiration + path;
  input.value = "";
  console.log(document.cookie);
});
