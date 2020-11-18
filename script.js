const textos = {
  link1: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. ",
  link2:
    "Vitae voluptates, animi illum cum repellendus adipisci nulla, ipsam natus rem pariatur excepturi dolores consequatur nisi eos",
  link3: "Maiores maxime placeat nam necessitatibus.",
};

//le asigno un evento de click al boton hamburguesa para que pueda ser capaz de abrir y cerrar el nav #drawer
let menu = document.querySelector(".material-icons");
let drawer = document.querySelector("#drawer");
menu.addEventListener("click", function (e) {
  if (drawer.style.left) {
    drawer.style.left = "";
  } else {
    drawer.style.left = "0px";
  }
});

//le asigno un evento de resize para que sea capaz de cambiarle el color de fonto al body por rojo si estamos a mas de 600px y azul si estamos a menos.
window.addEventListener("resize", function () {
  if (window.outerWidth > 600) {
    document.body.style.backgroundColor = "red";
  } else {
    document.body.style.backgroundColor = "blue";
  }
});

//que los links tomen el texto que les corresponde y que tambien puedan cerrar el drawer
let links = document.querySelectorAll("a");
links.forEach(function (element) {
  element.addEventListener("click", function (e) {
    e.preventDefault();
    drawer.style.left = "";
    let texto = textos[e.target.innerText];
    document.querySelector("article").innerText = texto;
  });
});

//efecto de animacion con el border inferior de los inputs.
let inputs = document.querySelectorAll("input,textarea");
inputs.forEach(function (input) {
  input.addEventListener("focus", function (e) {
    e.target.parentNode.children[0].classList.add("subir");
    e.target.parentNode.classList.add("animacionBorde");
  });

  input.addEventListener("blur", function (e) {
    if (e.target.value.length <= 0) {
      e.target.parentNode.children[0].classList.remove("subir");
    }
    e.target.parentNode.classList.add("animacionBorde");
  });
});
