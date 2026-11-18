// ========================================
// TEMPLATE.JS
// Shared HTML templates
// ========================================


// =========================
// HEADER TEMPLATE
// =========================


// ========================================
// TEMPLATE.JS
// Shared HTML templates
// ========================================


// =========================
// HEADER TEMPLATE
// =========================

export function createHeader(root = "./") {

  return `

    <header class="header">

      <div class="container">

        <div class="header-content">

          <!-- LOGO -->

          <a href="${root}index.html" class="logo">

            <img
              src="https://res.cloudinary.com/plxc7nnd/image/upload/v1793822584/Elegant_Slate_Blue_GAG_Logo_bg_removed.png.png"
              alt="GAG Logo"
            />

          </a>


          <!-- HAMBURGER BUTTON -->

          <button
            type="button"
            class="menu-toggle"
            id="menu-toggle"
            aria-label="Toggle navigation menu"
            aria-expanded="false"
          >

            <span class="hamburger"></span>

          </button>


          <!-- NAVIGATION -->

          <nav class="site-nav" id="site-nav">

            <ul class="nav-list">

              <li>
                <a href="${root}html/about.html">About</a>
              </li>

              <li>
                <a href="${root}html/skills.html">Skills</a>
              </li>

              <li>
                <a href="${root}index.html#cheatsheets">Cheatsheets</a>
              </li>

              <li>
                <a href="${root}index.html#resources">Resources</a>
              </li>

              <li>
                <a href="${root}html/contacto.html">Contact</a>
              </li>

            </ul>

          </nav>


          <!-- DARK MODE BUTTON -->

          <button
            type="button"
            class="theme-toggle"
            id="theme-toggle"
            aria-label="Switch to dark mode"
            title="Toggle dark mode"
          >

            <!-- SUN ICON -->

            <svg
              class="sun-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="12" cy="12" r="4"></circle>
              <path d="M12 2v2"></path>
              <path d="M12 20v2"></path>
              <path d="m4.93 4.93 1.42 1.42"></path>
              <path d="m17.65 17.65 1.42 1.42"></path>
              <path d="M2 12h2"></path>
              <path d="M20 12h2"></path>
              <path d="m6.35 17.65-1.42 1.42"></path>
              <path d="m19.07 4.93-1.42 1.42"></path>
            </svg>


            <!-- MOON ICON -->

            <svg
              class="moon-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.463.402.807a6.5 6.5 0 0 0 8.268 8.268c.344-.215.829-.003.803.397Z"></path>
            </svg>

          </button>

        </div>

      </div>

    </header>

  `;

}


// =========================
// FOOTER TEMPLATE
// =========================

export function createFooter() {

  return `

    <footer class="footer">

      <p>© 2026 Gabriela Alvarez | GAG Portfolio</p>

    </footer>

  `;

}
