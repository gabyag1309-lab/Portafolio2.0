// ========================================
// MAIN.JS
// Main JavaScript file
// ========================================


// =========================
// IMPORT MODULES
// =========================

import { createHeader, createFooter } from "./template.js";

import { initializeDarkMode } from "./dark-mode.js";

import { initializeBurgerMenu } from "./burger.js";

import { renderSkills } from "./skills.js";

import { initializeCheatsheets } from "./cheatsheets.js";


// =========================
// INSERT HEADER AND FOOTER
// =========================

// Get the root path from the current HTML page

const root = document.body.dataset.root || "./";


// Insert header

const headerContainer = document.getElementById("site-header");

if (headerContainer) {

  headerContainer.innerHTML = createHeader(root);

}


// Insert footer

const footerContainer = document.getElementById("site-footer");

if (footerContainer) {

  footerContainer.innerHTML = createFooter();

}


// =========================
// INITIALIZE FEATURES
// =========================

// Dark mode

initializeDarkMode();


// Hamburger menu

initializeBurgerMenu();


// Skills page

renderSkills();


// Cheatsheets section

initializeCheatsheets();