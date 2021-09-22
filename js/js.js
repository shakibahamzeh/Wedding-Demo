const responsiveNav = document.querySelector(".menu-responsive-slide");
const toggleIcon = document.querySelector(".fa-bars");
const closeIcon = document.querySelector(".fa-times");

toggleIcon.addEventListener("click", () => {
  responsiveNav.style.width = "100%";
});
closeIcon.addEventListener("click", () => {
  responsiveNav.style.width = "0";
});
