
// ========================================
// BURGER.JS
// Mobile navigation functionality
// ========================================

export function initializeBurgerMenu() {

  // Get HTML elements

  const menuToggle = document.getElementById("menu-toggle");

  const siteNav = document.getElementById("site-nav");


  // Stop if elements don't exist

  if (!menuToggle || !siteNav) return;


  // =========================
  // OPEN AND CLOSE MENU
  // =========================

  menuToggle.addEventListener("click", function () {

    // Toggle active class

    siteNav.classList.toggle("active");


    // Check if menu is open

    const isOpen = siteNav.classList.contains("active");


    // Update accessibility attribute

    menuToggle.setAttribute("aria-expanded", isOpen);

  });


  // =========================
  // CLOSE MENU AFTER CLICKING A LINK
  // =========================

  const navLinks = siteNav.querySelectorAll("a");

  navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

      siteNav.classList.remove("active");

      menuToggle.setAttribute("aria-expanded", "false");

    });

  });

}
