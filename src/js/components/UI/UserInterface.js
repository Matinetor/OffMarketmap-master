/**
 * Represents the About Us modal in the user interface.
 * @extends UIComponent
 */
class AboutUsModal {
  constructor() {}

  /**
   * Creates the About Us modal element and appends it to the document body.
   * @param {Array} tabs - The array of tab objects.
   */
  createElement(tabs) {
    const principalContainer = document.createElement("div");
    principalContainer.id = "whole-about";

    const aboutHeader = document.createElement("div");
    aboutHeader.className = "about-header";
    aboutHeader.style.padding = "20px";
    aboutHeader.style.backgroundColor = "#2c3e50";
    aboutHeader.style.color = "white";
    aboutHeader.style.borderTopLeftRadius = "8px";
    aboutHeader.style.borderTopRightRadius = "8px";

    const aboutTitle = document.createElement("h3");
    aboutTitle.innerText = "Red de Facultades de Agrimensura";
    aboutTitle.style.margin = "0";
    aboutTitle.style.fontWeight = "bold";

    const aboutExitBtn = document.createElement("a");
    aboutExitBtn.id = "aboutExitBtn";
    aboutExitBtn.classList = "about-exit";
    aboutExitBtn.innerHTML = '<i class="fa fa-times" style="color: white;"></i>';
    aboutExitBtn.style.cursor = "pointer";
    aboutExitBtn.onclick = () => {
      const notiDots = document.querySelectorAll(".notification-dot");
      notiDots.forEach((dot) => {
        dot.remove();
      });
      principalContainer.remove();
      this.isVisible = false;

      // Crear elemento de imagen para el logo institucional
    const aboutLogo = document.createElement("img");
    aboutLogo.src = "src/styles/images/CoNaPEA_logo.png";
    aboutLogo.style.width = "60px";
    aboutLogo.style.height = "60px";
    aboutLogo.style.borderRadius = "10px";
    aboutLogo.style.marginBottom = "10px";
    
    // Lo sumás al header junto con el título
    aboutHeader.appendChild(aboutLogo);
    };

    const aboutMainSection = document.createElement("div");
    aboutMainSection.className = "about-main-section";

    const aboutTabsContainer = document.createElement("div");
    aboutTabsContainer.className = "about-tabs-bar";

    aboutHeader.appendChild(aboutTitle);
    aboutHeader.appendChild(aboutExitBtn);

    principalContainer.appendChild(aboutHeader);
    aboutMainSection.appendChild(aboutTabsContainer);
    principalContainer.appendChild(aboutMainSection);

    document.body.appendChild(principalContainer);

    tabs.forEach((tab, i) => {
      const tabItem = new AboutUsTab();
      tabItem.createElement(tab, i);
    });

    const tabContent = new AboutUsTab();

    const readmeContainer = tabContent.createReadmeContainer();
    const functionContainer = tabContent.createFunctionsContainer();
    //const contributorContainer = tabContent.createContributorsContainer();

    aboutMainSection.appendChild(readmeContainer);
    aboutMainSection.appendChild(functionContainer);
    //aboutMainSection.appendChild(contributorContainer);
  }
}

/**
 * Represents the About Us tab in the user interface.
 * @extends UIComponent
 */
class AboutUsTab {
  constructor() {}

  /**
   * Creates and appends a tab element to the about-tabs-bar container.
   * @param {Object} tab - The tab object containing name and id properties.
   * @param {number} i - The index of the tab.
   */
  createElement(tab, i) {
    const tabElement = document.createElement("div");
    tabElement.classList.add("tab");

    if (tab.name) {
      tabElement.innerHTML = tab.name;
      tabElement.id = tab.id;
    } else {
      tabElement.innerHTML = "TODPN"; // Te Olvidaste De Ponerle Nombre
    }

    tabElement.addEventListener("click", () => {
      modalAboutUs.showTab(i);
    });

    document.querySelector(".about-tabs-bar").appendChild(tabElement);
  }

  /**
   * Creates the readme container element.
   * @returns {HTMLElement} - The created readme container element.
   */
  createReadmeContainer() {
    const readmeContainer = document.createElement("div");
    readmeContainer.classList.add(
      "content-about-tab",
      "content-about-deactivate",
      "readme-container",
    );

    readmeContainer.id = "readme-container";
    readmeContainer.style.padding = "30px 20px";
    readmeContainer.style.textAlign = "center";
    readmeContainer.style.fontFamily = "Arial, sans-serif";

    // Título / Nombre del Creador
    const creatorName = document.createElement("h4");
    creatorName.innerText = "Matías Iván Bizai Germaná";
    creatorName.style.margin = "0 0 5px 0";
    creatorName.style.fontWeight = "bold";
    creatorName.style.color = "#2c3e50";
    creatorName.style.fontSize = "1.4rem";

    // Subtítulo / Profesión
    const creatorTitle = document.createElement("p");
    creatorTitle.innerText = "Ing. Agrimensor (FIUBA) | Técnico Geógrafo Matemático";
    creatorTitle.style.color = "#7f8c8d";
    creatorTitle.style.fontSize = "0.95rem";
    creatorTitle.style.marginBottom = "30px";

    // Contenedor flexible para los botones
    const btnContainer = document.createElement("div");
    btnContainer.style.display = "flex";
    btnContainer.style.flexDirection = "column";
    btnContainer.style.gap = "12px";
    btnContainer.style.alignItems = "center";

    // Función auxiliar para maquetar los botones rápidamente
    const createBtn = (text, iconClass, color, url) => {
        const btn = document.createElement("a");
        btn.href = url;
        btn.target = "_blank";
        btn.style.display = "flex";
        btn.style.alignItems = "center";
        btn.style.justifyContent = "center";
        btn.style.gap = "10px";
        btn.style.width = "100%";
        btn.style.maxWidth = "260px";
        btn.style.padding = "12px";
        btn.style.borderRadius = "6px";
        btn.style.color = "white";
        btn.style.backgroundColor = color;
        btn.style.textDecoration = "none";
        btn.style.fontWeight = "bold";
        btn.style.boxShadow = "0 2px 4px rgba(0,0,0,0.1)";
        btn.style.transition = "opacity 0.2s ease, transform 0.2s ease";
        
        btn.onmouseover = () => {
            btn.style.opacity = "0.9";
            btn.style.transform = "translateY(-2px)";
        };
        btn.onmouseout = () => {
            btn.style.opacity = "1";
            btn.style.transform = "translateY(0)";
        };

        const icon = document.createElement("i");
        icon.className = iconClass;
        icon.style.fontSize = "1.3rem";

        const span = document.createElement("span");
        span.innerText = text;

        btn.appendChild(icon);
        btn.appendChild(span);
        return btn;
    };

    // Tus enlaces reales
    const linkLinkedIn = "https://www.linkedin.com/in/mat%C3%ADas-iv%C3%A1n-bizai-german%C3%A1-25962071/"; 
    const linkIgPersonal = "https://www.instagram.com/bizaimatias/";
    const linkIgEstudio = "https://www.instagram.com/bg_geoagrim/";

    const btnLinkedIn = createBtn("Conectar en LinkedIn", "fa-brands fa-linkedin", "#0077b5", linkLinkedIn);
    const btnIgPersonal = createBtn("Instagram Personal", "fa-brands fa-instagram", "#e1306c", linkIgPersonal);
    const btnIgEstudio = createBtn("BG Geomática y Agrimensura", "fa-brands fa-instagram", "#c13584", linkIgEstudio);

    btnContainer.appendChild(btnLinkedIn);
    btnContainer.appendChild(btnIgPersonal);
    btnContainer.appendChild(btnIgEstudio);

    readmeContainer.appendChild(creatorName);
    readmeContainer.appendChild(creatorTitle);
    readmeContainer.appendChild(btnContainer);

    // Elemento fantasma con el ID que about.js exige para evitar errores internos
    const dummyLink = document.createElement("div");
    dummyLink.id = "link-to-repo";
    dummyLink.style.display = "none";
    readmeContainer.appendChild(dummyLink);
    
    return readmeContainer;
  }

  /**
   * Creates the functions container element.
   * @returns {HTMLElement} - The created functions container element.
   */
  createFunctionsContainer() {
    const functionsContainer = document.createElement("div");
    functionsContainer.classList.add(
      "content-about-tab",
      "content-about-deactivate",
    );
    functionsContainer.style.overflow = "auto";
    functionsContainer.id = "functions-container";
    return functionsContainer;
  }

  /**
   * Creates the contributors container element.
   * @returns {HTMLElement} - The created contributors container element.
   
  createContributorsContainer() {
      const contributorContainer = document.createElement('div');
      contributorContainer.classList.add('content-about-tab', 'contributor-container', 'content-about-deactivate');
      contributorContainer.id = "contributors-container";

      return contributorContainer;
  }*/
}

// <div id="passwordToggleContainer"></div>

class InputToggle {
  constructor(parent, type, _onclick, content) {
    this.container = document.getElementById(parent);
    this.render(type, _onclick, content);
  }

  render(type, _onclick, content) {
    const html = `
      <div class="input-group">
        <input id="txtPassword" type="${type}" class="form-control" onchange="this.togglePasswordButton">
        <span class="input-group-btn">
          <button id="show_password" class="btn btn-success" type="button" style="display: none;" onclick="${_onclick}"> 
            <span>${content}</span>
          </button>
        </span>
      </div>
    `;
    this.container.innerHTML = html;
  }

  togglePasswordVisibility() {
    const passwordInput = document.getElementById("txtPassword");
    const eyeIcon = document.getElementById("eye-icon");

    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      eyeIcon.classList.remove("fa-eye-slash");
      eyeIcon.classList.add("fa-eye");
    } else {
      passwordInput.type = "password";
      eyeIcon.classList.remove("fa-eye");
      eyeIcon.classList.add("fa-eye-slash");
    }
  }

  togglePasswordButton() {
    const passwordInput = document.getElementById("txtPassword");
    const showPasswordButton = document.getElementById("show_password");
    if (passwordInput.value.length > 0) {
      showPasswordButton.style.display = "inline-block";
    } else {
      showPasswordButton.style.display = "none";
    }
  }
}