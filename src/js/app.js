//grab the menu icon
const menu = document.querySelector(".menu");
const btnLine = document.querySelectorAll(".btn-line");

menu.addEventListener("click", toggleMenu);

function toggleMenu() {
  menu.classList.toggle("show");
}
