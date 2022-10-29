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
   
    engine(username, 0, "Debe colocar nombre de usuario");
    engine(email , 1 , "Debe colocar su Email");
    engine(password, 2 , "Su contraseña debe contener mas de 8 caracteres");
    if(username.value.length, email.value.length, password.value.length  == " ") {
      alert("Debe completar los campos")
    }

    if((username.value.length, email.value.length, password.value.length  != " ") && (counter < 1)) {
      counter ++;
      let nuevoContenido = document.createElement("div");
      nuevoContenido.innerHTML = `<div class="card">
      <div class="card-info">
        <p class="text-title"> Hola ${username.value}</p>
        <p class="text-body">¡Tu registro en MiTrabajo fue exitoso!</p>
        <a href="irAlPerfil.html">Ir al perfil</a>
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
"codigo postal" : 5000,
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

function test(){
  var acer = document.getElementById("acercaDeMi").value;
  var mip = document.getElementById("miProfesion").value;
  var mie = document.getElementById("miExperiencia").value;
  var min = document.getElementById("miNro").value;

var acerdade = localStorage.setItem("acercaDeMi", acer);
var miProfesion = localStorage.setItem("miProfesion", mip);
var miExperiencia = localStorage.setItem("miExperiencia", mie);
var miNumero  = localStorage.setItem("miNro", min);


var acerdade = localStorage.getItem("acercaDeMi", acer);
var miProfesion = localStorage.getItem("miProfesion", mip);
var miExperiencia = localStorage.getItem("miExperiencia", mie);
var miNumero  = localStorage.getItem("miNro", min);
}
