
/* ========================================
   SKILLS.JS
   Skills data and rendering
======================================== */


/* 1. SKILLS ARRAY */

const skills = [
  {
    name: "HTML5",
    icon: "html5",
    color: "E34F26",
    description: "Creating semantic and structured web pages."
  },
  {
    name: "CSS3",
    icon: "css3",
    color: "1572B6",
    description: "Designing layouts, styling and responsive websites."
  },
  {
    name: "JavaScript",
    icon: "javascript",
    color: "F7DF1E",
    description: "Building interactive and dynamic web experiences."
  },
  {
    name: "Git",
    icon: "git",
    color: "F05032",
    description: "Managing versions and tracking code changes."
  },
  {
    name: "Visual Studio Code",
    icon: "visualstudiocode",
    color: "007ACC",
    description: "Writing, editing and organizing development projects."
  }
];


/* 2. CREATE ICON URL */

function getIconUrl(icon, color) {
  return `https://cdn.simpleicons.org/${icon}/${color}`;
}


/* 3. FALLBACK ICON URL */

function getFallbackUrl(icon) {
  return `https://cdn.jsdelivr.net/npm/simple-icons@v16/icons/${icon}.svg`;
}


/* 4. RENDER SKILLS */

export function renderSkills() {

  const skillsContainer = document.getElementById("skills-container");

  // Stop if the container doesn't exist on this page
  if (!skillsContainer) return;

  // Generate one card for every skill
  skillsContainer.innerHTML = skills.map(skill => {

    return `
      <article class="skill-card">

        <img
          class="skill-icon"
          src="${getIconUrl(skill.icon, skill.color)}"
          alt="${skill.name} logo"
          onerror="this.onerror=null; this.src='${getFallbackUrl(skill.icon)}';"
        />

        <h3>${skill.name}</h3>

        <p>${skill.description}</p>

      </article>
    `;

  }).join("");

}

