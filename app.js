let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);

let username = id("username"),
  email = id("email"),
  password = id("password"),
  form = id("form"),
  errorMsg = classes("error"),
  successIcon = classes("success-icon"),
  failureIcon = classes("failure-icon");

let counter = 0;

  form.addEventListener("submit", (e) => {
    counter ++;
    engine(username, 0, "Debe colocar nombre de usuario");
    engine(email , 1 , "Debe colocar su Email");
    engine(password, 2 , "Su contraseña debe contener mas de 8 caracteres");
    if(username.value.length, email.value.length, password.value.length  == " ") {
      alert("Debe completar los campos")
    }

    if((username.value.length, email.value.length, password.value.length  != " ") && (counter <= 1)) {
      let nuevoContenido = document.createElement("div");
      nuevoContenido.innerHTML = `<div class="card">
      <div class="card-info">
        <p class="text-title"> Hola ${username.value}</p>
        <p class="text-body">¡Tu registro en MiTrabajo fue exitoso!</p>
      </div></div>`;
      form.appendChild(nuevoContenido)
    }
    e.preventDefault();
  
  })

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


const button = document.getElementById('mandar')
 button.addEventListener ('click',() => {
const newPost = {
"nombre de usuario": "Sebastian11",
"email" : "Sebaspalacioss08@hotmail.com",
"direccion" : " falucho 208",
"edad" : 25 ,
"ciudad" : "Cordoba",
"pais" : "Argentina",
"codigo posta" : 5000,
} 

fetch('https://jsonplaceholder.typicode.com/users/' , {
method: 'POST',
body: JSON.stringify(newPost),
headers: { "content-type": "posts/"
 }
}) 
.then(data => console.log(newPost))
localStorage.setItem("usuario", 10)

})