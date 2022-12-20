let hamburger = document.querySelector(".hamburger"),
  menu = document.querySelector(".menu"),
  closeEl = document.querySelector(".menu__close");

hamburger.addEventListener("click", () => {
  menu.classList.add("active");
});

closeEl.addEventListener("click", () => {
  menu.classList.remove("active");
});

// skales
let persents = document.querySelectorAll(".progress__item-percent"),
  full = document.querySelectorAll(".progress__item-full");

persents.forEach((item, i) => {
  full[i].style.width = item.textContent;
});
