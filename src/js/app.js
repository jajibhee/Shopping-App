//grab the classes in the html
const menu = document.querySelector(".menu");
const btnLine = document.querySelectorAll(".btn-line");
const dropdown = document.querySelector(".dropdown");

menu.addEventListener("click", toggleMenu);
function toggleMenu() {
  dropdown.classList.toggle("show");
}

// dropdown.addEventListener('click', dropMenu);

// function dropMenu(){
//   dropdown.classList.toggle('show');
// }
