let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);

let username = id("username"),
  email = id("email"),
  password = id("password"),
  form = id("form"),
  errorMsg = classes("error"),
  successIcon = classes("success-icon"),
  failureIcon = classes("failure-icon");

form.addEventListener("submit", (event) => {
  event.preventDefault();
const nuevoContenido = document.createElement("div");
nuevoContenido.innerHTML = `<h1> Hola ${username.value}! Tu registro fue exitoso</h1>`;
nuevoContenido.className = "info-cliente";
form.appendChild(nuevoContenido)

  engine(username, 0, "Debe colocar nombre de usuario");
  if(username.value.length, email.value.length, password.value.length == 0) alert ("Complete sus datos")
  engine(email, 1, "Debe colocar su Email");
  engine(password, 2, "Su contraseña debe contener mas de 8 caracteres");
  console.log(username.value, email.value, password.value)
});

let engine = (id, serial, message) => {
  if (id.value.trim() === "") {
    errorMsg[serial].innerHTML = message;
    id.style.border = "2px solid red";

    // iconos
    failureIcon[serial].style.opacity = "1";
    successIcon[serial].style.opacity = "0";
  } else {
    errorMsg[serial].innerHTML = "";
    id.style.border = "2px solid green";

    // iconos
    failureIcon[serial].style.opacity = "0";
    successIcon[serial].style.opacity = "1";
  }
};
localStorage.setItem("usuario", 100)
console.log(localStorage.getItem("usuario"))