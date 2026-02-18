const boton = document.querySelector(".boton");
const dato = document.getElementById("dato");

boton.addEventListener("click", () => {
    dato.classList.toggle("oculto");
});
