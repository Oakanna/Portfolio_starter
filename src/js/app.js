let hamburger = document.querySelector(".hamburger"),
  menu = document.querySelector(".menu"),
  closeEl = document.querySelector(".menu__close");

hamburger.addEventListener("click", () => {
  menu.classList.add("active");
});

closeEl.addEventListener("click", () => {
  menu.classList.remove("active");
});
