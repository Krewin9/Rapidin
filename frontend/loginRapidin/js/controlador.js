const entrar_btn = document.querySelector("#entrar-btn");
const crear_btn = document.querySelector("#crear-btn");
const container = document.querySelector(".container");

crear_btn.addEventListener("click", () => {
  container.classList.add("crear-mode");
});

entrar_btn.addEventListener("click", () => {
  container.classList.remove("crear-mode");
});