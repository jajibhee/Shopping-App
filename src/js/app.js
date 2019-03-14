//grab the classes in the html
const menu = document.querySelector(".menu");
const btnLine = document.querySelectorAll(".btn-line");
const dropdown = document.querySelector(".dropdown");
const section = document.querySelector(".section");
const profileCategories = document.querySelector(".profile-categories");
const categoryItems = document.querySelectorAll(".category-items");

menu.addEventListener("click", toggleMenu);
function toggleMenu() {
  menu.classList.toggle("active");
  dropdown.classList.toggle("show");
  section.classList.toggle("close");
  profileCategories.classList.toggle("active");

  categoryItems.forEach(items => items.classList.toggle("active"));

  btnLine.forEach(item => item.classList.toggle("active"));
}

categoryItems.addEventListener("click", activeItem);
function activeItem() {
  categoryItems.forEach(items => items.classList.toggle("current"));
}
