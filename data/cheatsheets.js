
// ========================================
// CHEATSHEETS DATA
// ========================================

export const categories = [
  "Documentación",
  "Aprendizaje",
  "Herramientas",
  "Accesibilidad",
  "Blogs & Comunidades",
  "Inspiración & Design"
];

export const cheatsheets = [

  // ========================================
  // HTML
  // ========================================

  {
    id: "html",
    title: "HTML",
    description: "Learn the structure and essential elements of HTML.",
    category: "Documentación",
    icon: "html5",
    iconColor: "E34F26",
    href: "./cheatsheets.html#html",
    externalUrl: "https://developer.mozilla.org/en-US/docs/Web/HTML",

    intro: "HTML (HyperText Markup Language) is the standard language used to structure content on the web.",

    sections: [
      {
        title: "Basic HTML Structure",
        description: "Every HTML document starts with this basic structure.",
        code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Website</title>
</head>
<body>

  <h1>Hello World!</h1>

</body>
</html>`
      },
      {
        title: "Common HTML Elements",
        items: [
          ["<h1> to <h6>", "Headings, from most important to least important."],
          ["<p>", "Defines a paragraph."],
          ["<a>", "Creates a hyperlink."],
          ["<img>", "Displays an image."],
          ["<div>", "Groups content into a block."],
          ["<span>", "Groups inline content."],
          ["<ul> and <ol>", "Create unordered and ordered lists."],
          ["<li>", "Defines a list item."]
        ]
      },
      {
        title: "HTML Forms",
        description: "Forms collect information from users.",
        code: `<form action="#" method="POST">

  <label for="email">Email:</label>

  <input
    type="email"
    id="email"
    name="email"
    required
  >

  <button type="submit">
    Send
  </button>

</form>`
      },
      {
        title: "Semantic HTML",
        items: [
          ["<header>", "Introductory content or page header."],
          ["<nav>", "Navigation links."],
          ["<main>", "The main content of the page."],
          ["<section>", "A thematic group of content."],
          ["<article>", "Independent, reusable content."],
          ["<footer>", "Footer information."]
        ]
      }
    ],

    tips: [
      "Use semantic HTML instead of relying only on div elements.",
      "Always include alt text for meaningful images.",
      "Use labels to identify form inputs.",
      "Keep heading levels in a logical order."
    ]
  },


  // ========================================
  // FREECODECAMP
  // ========================================

  {
    id: "freecodecamp",
    title: "freeCodeCamp",
    description: "Interactive coding lessons and practical exercises.",
    category: "Aprendizaje",
    icon: "freecodecamp",
    iconColor: "0A0A23",
    href: "./cheatsheets.html#freecodecamp",
    externalUrl: "https://www.freecodecamp.org/",

    intro: "freeCodeCamp is a free learning platform where you can develop programming skills through interactive lessons and projects.",

    sections: [
      {
        title: "How to Get Started",
        items: [
          ["Step 1", "Create a free account."],
          ["Step 2", "Choose a certification or learning path."],
          ["Step 3", "Complete lessons in order."],
          ["Step 4", "Practice with coding challenges."],
          ["Step 5", "Build projects to apply what you learn."]
        ]
      },
      {
        title: "Recommended Learning Paths",
        items: [
          ["Responsive Web Design", "HTML, CSS, layouts and responsive websites."],
          ["JavaScript", "Variables, functions, arrays, objects and DOM."],
          ["Front End Development", "Building interactive user interfaces."],
          ["Back End Development", "Server-side programming and databases."]
        ]
      },
      {
        title: "Study Strategies",
        items: [
          ["Practice daily", "Short and consistent sessions are more effective than occasional long sessions."],
          ["Write your own code", "Avoid simply copying the solutions."],
          ["Experiment", "Change examples and observe what happens."],
          ["Build projects", "Use what you learn to create real applications."]
        ]
      }
    ],

    tips: [
      "Try to solve challenges before looking at the solutions.",
      "Keep notes of concepts that you find difficult.",
      "Revisit previous lessons to reinforce your knowledge.",
      "Add completed projects to your portfolio."
    ]
  },


  // ========================================
  // VISUAL STUDIO CODE
  // ========================================

  {
    id: "vscode",
    title: "Visual Studio Code",
    description: "Shortcuts, extensions and useful development features.",
    category: "Herramientas",
    icon: "visualstudiocode",
    iconColor: "007ACC",
    href: "./cheatsheets.html#vscode",
    externalUrl: "https://code.visualstudio.com/",

    intro: "Visual Studio Code is a source code editor that helps developers write, organize and debug code.",

    sections: [
      {
        title: "Essential Keyboard Shortcuts (Mac)",
        items: [
          ["Cmd + S", "Save the current file."],
          ["Cmd + P", "Quickly open a file."],
          ["Cmd + Shift + P", "Open the Command Palette."],
          ["Cmd + /", "Comment or uncomment a line."],
          ["Option + Shift + F", "Format the document."],
          ["Cmd + D", "Select the next occurrence."],
          ["Cmd + Shift + K", "Delete the current line."],
          ["Cmd + B", "Show or hide the sidebar."]
        ]
      },
      {
        title: "Useful Extensions",
        items: [
          ["Live Server", "Launch a local development server with automatic reload."],
          ["Prettier", "Format your code automatically."],
          ["ESLint", "Identify JavaScript code problems."],
          ["Auto Rename Tag", "Automatically rename matching HTML tags."],
          ["Material Icon Theme", "Improve file identification with icons."]
        ]
      },
      {
        title: "Integrated Terminal",
        description: "Open the terminal inside VS Code using Control + backtick.",
        code: `# Check Node.js version
node -v

# Check npm version
npm -v

# Run a JavaScript file
node script.js

# Initialize a Git repository
git init`
      },
      {
        title: "Useful Features",
        items: [
          ["Command Palette", "Access almost every VS Code command."],
          ["IntelliSense", "Get code suggestions and completions."],
          ["Integrated Terminal", "Run commands without leaving the editor."],
          ["Source Control", "Manage Git changes and commits."],
          ["Debugger", "Set breakpoints and inspect your code."]
        ]
      }
    ],

    tips: [
      "Learn the Command Palette shortcut: Cmd + Shift + P.",
      "Use folders to keep your projects organized.",
      "Install only extensions that you actually need.",
      "Use Git to save and track your project changes."
    ]
  },


  // ========================================
  // WEB ACCESSIBILITY
  // ========================================

  {
    id: "accessibility",
    title: "Web Accessibility",
    description: "Guidelines for building inclusive websites.",
    category: "Accesibilidad",
    icon: "w3c",
    iconColor: "005A9C",
    href: "./cheatsheets.html#accessibility",
    externalUrl: "https://www.w3.org/WAI/",

    intro: "Web accessibility makes websites usable for people with different abilities, devices and interaction needs.",

    sections: [
      {
        title: "The Four WCAG Principles",
        items: [
          ["Perceivable", "Information must be presented in ways users can perceive."],
          ["Operable", "Interface components must be usable through different input methods."],
          ["Understandable", "Information and navigation should be clear."],
          ["Robust", "Content should work with different browsers and assistive technologies."]
        ]
      },
      {
        title: "Accessible HTML",
        code: `<button type="button">
  Open menu
</button>

<label for="username">
  Username
</label>

<input
  type="text"
  id="username"
>

<img
  src="profile.jpg"
  alt="Profile portrait"
>`
      },
      {
        title: "Accessibility Checklist",
        items: [
          ["Images", "Provide meaningful alt text."],
          ["Keyboard", "Make interactive elements keyboard accessible."],
          ["Contrast", "Ensure sufficient text and background contrast."],
          ["Forms", "Associate labels with form controls."],
          ["Headings", "Use a logical heading hierarchy."],
          ["Links", "Use descriptive link text."]
        ]
      }
    ],

    tips: [
      "Never rely on color alone to communicate information.",
      "Test your website using only a keyboard.",
      "Use semantic HTML whenever possible.",
      "Include visible focus indicators."
    ]
  },


  // ========================================
  // CSS-TRICKS
  // ========================================

  {
    id: "css-tricks",
    title: "CSS-Tricks",
    description: "CSS tutorials, layout techniques and web development tips.",
    category: "Blogs & Comunidades",
    icon: "css",
    iconColor: "663399",
    href: "./cheatsheets.html#css-tricks",
    externalUrl: "https://css-tricks.com/",

    intro: "CSS-Tricks is a web development publication with articles and practical explanations about CSS and front-end development.",

    sections: [
      {
        title: "CSS Selectors",
        code: `/* Element selector */
p {
  color: blue;
}

/* Class selector */
.card {
  padding: 20px;
}

/* ID selector */
#header {
  background: white;
}

/* Descendant selector */
.card p {
  font-size: 16px;
}

/* Hover pseudo-class */
button:hover {
  opacity: 0.8;
}`
      },
      {
        title: "Flexbox Essentials",
        code: `.container {
  display: flex;

  justify-content: center;
  align-items: center;

  gap: 20px;
  flex-wrap: wrap;
}`
      },
      {
        title: "CSS Grid Essentials",
        code: `.grid-container {
  display: grid;

  grid-template-columns:
    repeat(3, 1fr);

  gap: 20px;
}`
      },
      {
        title: "Useful CSS Properties",
        items: [
          ["display", "Controls how an element is displayed."],
          ["position", "Controls element positioning."],
          ["margin", "Creates space outside an element."],
          ["padding", "Creates space inside an element."],
          ["border-radius", "Rounds element corners."],
          ["transition", "Creates smooth property changes."],
          ["transform", "Moves, rotates or scales elements."]
        ]
      }
    ],

    tips: [
      "Use Flexbox for one-dimensional layouts.",
      "Use Grid for two-dimensional layouts.",
      "Use CSS variables to maintain consistent colors.",
      "Test layouts at different screen sizes."
    ]
  },


  // ========================================
  // DRIBBBLE
  // ========================================

  {
    id: "dribbble",
    title: "Dribbble",
    description: "Visual inspiration for UI, web and graphic design.",
    category: "Inspiración & Design",
    icon: "dribbble",
    iconColor: "EA4C89",
    href: "./cheatsheets.html#dribbble",
    externalUrl: "https://dribbble.com/",

    intro: "Dribbble is a creative platform where designers share visual projects, explore trends and discover design inspiration.",

    sections: [
      {
        title: "How to Find Inspiration",
        items: [
          ["Search by category", "Explore web design, dashboards, mobile apps and landing pages."],
          ["Use keywords", "Search for specific styles, colors or interface elements."],
          ["Explore collections", "Save interesting projects for future reference."],
          ["Compare designs", "Look at how different designers solve similar problems."]
        ]
      },
      {
        title: "UI Design Elements",
        items: [
          ["Typography", "Choose readable fonts and establish a clear hierarchy."],
          ["Color palettes", "Use consistent colors to communicate visual identity."],
          ["Spacing", "Create breathing room between elements."],
          ["Buttons", "Make interactive elements visually recognizable."],
          ["Cards", "Organize related information into clear groups."],
          ["Navigation", "Make it easy for users to find their way."]
        ]
      },
      {
        title: "Design Inspiration Checklist",
        items: [
          "Identify the purpose of the design.",
          "Observe the color palette.",
          "Analyze typography and spacing.",
          "Notice how the layout adapts to different screens.",
          "Consider accessibility and usability.",
          "Adapt ideas instead of copying designs directly."
        ]
      }
    ],

    tips: [
      "Create a collection of designs you find interesting.",
      "Look for patterns rather than copying entire interfaces.",
      "Prioritize usability over decoration.",
      "Always consider mobile and desktop layouts."
    ]
  }

];
