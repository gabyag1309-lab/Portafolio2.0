const menuToggle = document.getElementById("menu-toggle");
const siteNav = document.getElementById("site-nav");

menuToggle.addEventListener("click", function () {

  siteNav.classList.toggle("active");

  const isOpen = siteNav.classList.contains("active");

  menuToggle.setAttribute("aria-expanded", isOpen);

});