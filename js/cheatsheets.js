
// ========================================
// CHEATSHEETS MODULE
// ========================================

import {
  categories,
  cheatsheets
} from "../data/cheatsheets.js";


// ========================================
// 1. CHEATSHEETS CARDS AND TABS
// ========================================

export function initializeCheatsheets() {

  const tabsContainer = document.getElementById("cheatsheets-tabs");
  const cardsContainer = document.getElementById("cheatsheets-grid");

  if (!tabsContainer || !cardsContainer) return;

  let activeCategory = categories[0];


  // --------------------------------------
  // CREATE CATEGORY TABS
  // --------------------------------------

  function renderTabs() {

    tabsContainer.innerHTML = "";

    categories.forEach((category, index) => {

      const button = document.createElement("button");

      button.className = "cheatsheet-tab";
      button.type = "button";
      button.textContent = category;

      button.setAttribute("role", "tab");

      button.setAttribute(
        "aria-selected",
        category === activeCategory
      );

      button.setAttribute(
        "aria-controls",
        "cheatsheets-grid"
      );

      button.id = `tab-${index}`;

      button.addEventListener("click", () => {

        activeCategory = category;

        renderTabs();
        renderCards();

      });

      tabsContainer.appendChild(button);

    });

  }


  // --------------------------------------
  // CREATE CARDS
  // --------------------------------------

  function renderCards() {

    cardsContainer.innerHTML = "";

    const filteredCards = cheatsheets.filter(
      card => card.category === activeCategory
    );

    filteredCards.forEach(card => {

      const article = document.createElement("article");

      article.className = "cheatsheet-card";


      // Main clickable link

      const cardLink = document.createElement("a");

      cardLink.className = "cheatsheet-card-link";
      cardLink.href = card.href;

      cardLink.setAttribute(
        "aria-label",
        `Open ${card.title} cheatsheet`
      );


      // Technology icon

      const icon = document.createElement("img");

      icon.className = "cheatsheet-icon";

      icon.src =
        `https://cdn.simpleicons.org/${card.icon}/${card.iconColor}`;

      icon.alt = `${card.title} icon`;
      icon.loading = "lazy";


      // Title

      const title = document.createElement("h3");

      title.textContent = card.title;


      // Description

      const description = document.createElement("p");

      description.textContent = card.description;


      // Footer

      const footer = document.createElement("span");

      footer.className = "cheatsheet-card-footer";
      footer.textContent = "View cheatsheet →";


      cardLink.append(
        icon,
        title,
        description,
        footer
      );

      article.appendChild(cardLink);


      // External resource

      if (card.externalUrl) {

        const externalLink = document.createElement("a");

        externalLink.className = "cheatsheet-external-link";
        externalLink.href = card.externalUrl;

        externalLink.target = "_blank";
        externalLink.rel = "noopener noreferrer";

        externalLink.textContent = "Official resource ↗";

        article.appendChild(externalLink);

      }

      cardsContainer.appendChild(article);

    });

  }


  renderTabs();
  renderCards();

}


// ========================================
// 2. CREATE CHEATSHEET DETAIL PAGE
// ========================================

export function initializeCheatsheetDetails() {

  const container = document.getElementById("cheatsheet-details");

  // Only execute on cheatsheets.html

  if (!container) return;


  // --------------------------------------
  // CREATE A SECTION
  // --------------------------------------

  cheatsheets.forEach(card => {

    const section = document.createElement("section");

    section.className = "cheatsheet-detail-section";
    section.id = card.id;


    // Section header

    const header = document.createElement("div");

    header.className = "detail-header";


    // Icon

    const icon = document.createElement("img");

    icon.className = "detail-icon";

    icon.src =
      `https://cdn.simpleicons.org/${card.icon}/${card.iconColor}`;

    icon.alt = `${card.title} icon`;


    // Category

    const category = document.createElement("span");

    category.className = "detail-category";
    category.textContent = card.category;


    // Title

    const title = document.createElement("h2");

    title.textContent = `${card.title} Cheatsheet`;


    // Introduction

    const intro = document.createElement("p");

    intro.className = "detail-intro";
    intro.textContent = card.intro;


    header.append(
      icon,
      category,
      title,
      intro
    );

    section.appendChild(header);


    // ----------------------------------
    // CONTENT SECTIONS
    // ----------------------------------

    card.sections.forEach(content => {

      const contentSection = document.createElement("div");

      contentSection.className = "detail-content";


      const heading = document.createElement("h3");

      heading.textContent = content.title;

      contentSection.appendChild(heading);


      // Description

      if (content.description) {

        const description = document.createElement("p");

        description.textContent = content.description;

        contentSection.appendChild(description);

      }


      // List of elements

      if (content.items) {

        const list = document.createElement("ul");

        list.className = "detail-list";

        content.items.forEach(item => {

          const listItem = document.createElement("li");

          // Items can be [title, description] or plain text

          if (Array.isArray(item)) {

            const strong = document.createElement("strong");

            strong.textContent = item[0];

            const text = document.createElement("span");

            text.textContent = item[1];

            listItem.append(strong, text);

          } else {

            listItem.textContent = item;

          }

          list.appendChild(listItem);

        });

        contentSection.appendChild(list);

      }


      // Code examples

      if (content.code) {

        const pre = document.createElement("pre");

        const code = document.createElement("code");

        code.textContent = content.code;

        pre.appendChild(code);

        contentSection.appendChild(pre);

      }


      section.appendChild(contentSection);

    });


    // ----------------------------------
    // PRACTICAL TIPS
    // ----------------------------------

    if (card.tips) {

      const tipsContainer = document.createElement("div");

      tipsContainer.className = "detail-tips";


      const tipsTitle = document.createElement("h3");

      tipsTitle.textContent = "Practical Tips";

      const tipsList = document.createElement("ul");

      card.tips.forEach(tip => {

        const item = document.createElement("li");

        item.textContent = tip;

        tipsList.appendChild(item);

      });

      tipsContainer.append(
        tipsTitle,
        tipsList
      );

      section.appendChild(tipsContainer);

    }


    // ----------------------------------
    // EXTERNAL RESOURCE BUTTON
    // ----------------------------------

    if (card.externalUrl) {

      const externalLink = document.createElement("a");

      externalLink.href = card.externalUrl;

      externalLink.target = "_blank";
      externalLink.rel = "noopener noreferrer";

      externalLink.className = "detail-external-link";

      externalLink.textContent = `Visit official ${card.title} resource ↗`;

      section.appendChild(externalLink);

    }


    // Add section to page

    container.appendChild(section);

  });


  // --------------------------------------
  // SCROLL TO THE SELECTED CHEATSHEET
  // --------------------------------------

  const selectedId = decodeURIComponent(
    window.location.hash.substring(1)
  );

  if (selectedId) {

    const selectedSection = document.getElementById(selectedId);

    if (selectedSection) {

      selectedSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

    }

  }

}
