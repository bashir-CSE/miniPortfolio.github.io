const open = document.querySelector(".menu>button");
var navbar = document.querySelector(".nav-bar");
open.addEventListener("click", () => {
	navbar.classList.toggle(`show`);
});
