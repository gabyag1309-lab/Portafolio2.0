
// ========================================
// DARK-MODE.JS
// Dark mode functionality
// ========================================

export function initializeDarkMode() {

  // Get the dark mode button

  const themeToggle = document.getElementById("theme-toggle");


  // Stop if the button doesn't exist

  if (!themeToggle) return;


  // =========================
  // LOAD SAVED THEME
  // =========================

  const savedTheme = localStorage.getItem("theme");


  // Use saved theme or default to light mode

  const currentTheme = savedTheme || "light";

  document.documentElement.setAttribute("data-theme", currentTheme);


  // Update button accessibility text

  updateThemeButton(currentTheme);


  // =========================
  // TOGGLE DARK MODE
  // =========================

  themeToggle.addEventListener("click", function () {

    const currentTheme =
      document.documentElement.getAttribute("data-theme");

    const newTheme =
      currentTheme === "dark" ? "light" : "dark";


    // Apply new theme

    document.documentElement.setAttribute("data-theme", newTheme);


    // Save preference

    localStorage.setItem("theme", newTheme);


    // Update button

    updateThemeButton(newTheme);

  });

}


// =========================
// UPDATE BUTTON
// =========================

function updateThemeButton(theme) {

  const themeToggle = document.getElementById("theme-toggle");

  if (!themeToggle) return;


  if (theme === "dark") {

    themeToggle.setAttribute("aria-label", "Switch to light mode");

    themeToggle.setAttribute("title", "Switch to light mode");

  } else {

    themeToggle.setAttribute("aria-label", "Switch to dark mode");

    themeToggle.setAttribute("title", "Switch to dark mode");

  }

}
