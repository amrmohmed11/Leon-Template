const menu_icon = document.getElementById("menu-icon");
const menu = document.getElementById("menu");
// console.log(menu_icon);
menu_icon.addEventListener("click", () => {
  menu.classList.toggle("ul-show");
});
