const menuButton = document.querySelector(".menu-btn");
const menuButtonIcon = document.querySelector(".menu-icon");
const hamburgerMenu = document.querySelector(".mobile-nav");

/* Open the sidenav */
function openNav() {
  hamburgerMenu.classList.add("is-active");
  menuButtonIcon.src = "./images/icon-close.svg";
  hamburgerMenu.style.width = "100%";
}

/* Close/hide the sidenav */
function closeNav() {
  hamburgerMenu.classList.remove("is-active");
  hamburgerMenu.style.width = "0";
  menuButtonIcon.src = "./images/icon-hamburger.svg";
}

menuButton.addEventListener("click", () =>
  hamburgerMenu.classList.contains("is-active") ? closeNav() : openNav()
);
