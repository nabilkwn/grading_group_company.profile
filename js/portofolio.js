document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector("#btn");
  const closeBtn = document.querySelector(".pop-up-close-btn");
  const poUpMenu = document.querySelector(".mobile-menu-list");
  const menuIcon = document.querySelector(".menu-btn");
  const headerSection = document.querySelector("#head-container");
  const mainBody = document.querySelector("#header-body");
  const mobileMenuList1 = document.querySelector(".for-clik-1");
  const mobileMenuList2 = document.querySelector(".for-clik-2");

  // Check if elements exist before adding event listeners
  if (
    !menuBtn ||
    !closeBtn ||
    !poUpMenu ||
    !menuIcon ||
    !headerSection ||
    !mainBody
  ) {
    console.error("One or more elements are missing in the DOM");
    return;
  }

  // Function to close any open pop-ups and remove blur
  const removePopUpAndBlur = () => {
    const existingPopUp = document.querySelector(".pop-up-project");
    if (existingPopUp) {
      document.body.removeChild(existingPopUp);
    }
    const blurElements = document.querySelectorAll(".blur");
    blurElements.forEach((element) => {
      element.classList.remove("blur");
    });
  };

  // Ensure menu is closed on page load
  const closeMenuOnLoad = () => {
    poUpMenu.classList.add("disappear");
    menuIcon.classList.remove("disappear");
    headerSection.classList.remove("blur");
    mainBody.classList.remove("blur");
  };

  const openMenu = () => {
    poUpMenu.classList.remove("disappear");
    menuIcon.classList.add("disappear");
    headerSection.classList.add("blur");
    mainBody.classList.add("blur");
  };

  const closeMenu = () => {
    poUpMenu.classList.add("disappear");
    menuIcon.classList.remove("disappear");
    headerSection.classList.remove("blur");
    mainBody.classList.remove("blur");
  };

  menuBtn.addEventListener("click", openMenu);
  closeBtn.addEventListener("click", closeMenu);
  mobileMenuList1.addEventListener("click", closeMenu);
  mobileMenuList2.addEventListener("click", closeMenu);

  const description = [
    {
      id: 1,
      title: "Landing Page Sahabat Kita",
      list: ["WEB", "Front End Dev", "2023"],
      image: "../assets/portofolio/project/w11.png",
      desc: "Original landing page project real for UMKM.",
      lang: ["Html", "Css", "Javascript"],
      category: "card1 works",
    },
    {
      id: 2,
      title: "Weather App",
      list: ["APP", "Back End Dev", "2023"],
      image: "../assets/portofolio/project/w10.png",
      desc: "An Application Cataloging Various Beaches and Beach Travel Service Providers.",
      lang: ["Express Js", "React Js"],
      category: "card1 works",
    },
    {
      id: 3,
      title: "Travel Beach Tour",
      list: ["WEB", "Front End Dev", "2024"],
      image: "../assets/portofolio/project/w12.png",
      desc: "An app to check the weather and temperature in your area.",
      lang: ["Html", "Css", "JQuery"],
      category: "card1 works",
    },
  ];

  const workSection = document.querySelector(".works-section");

  if (!workSection) {
    console.error("Element .works-section not found in the DOM");
    return;
  }

  for (let i = 0; i < description.length; i += 1) {
    const cardContainer = document.createElement("article");
    cardContainer.classList.add("card1", "works");
    workSection.appendChild(cardContainer);

    const projectImage = document.createElement("img");
    projectImage.src = description[i].image;
    projectImage.classList.add("project-card-image");
    cardContainer.appendChild(projectImage);

    const cardContent = document.createElement("div");
    cardContent.classList.add("work-area");
    cardContainer.appendChild(cardContent);

    const cardHeadContainer = document.createElement("div");
    cardHeadContainer.classList.add("work-head");
    cardContent.appendChild(cardHeadContainer);

    const cardHeading = document.createElement("h3");
    cardHeading.innerText = description[i].title;
    cardHeadContainer.appendChild(cardHeading);

    const frameList = document.createElement("ul");
    frameList.classList.add("frame");
    cardHeadContainer.appendChild(frameList);

    description[i].list.forEach((item) => {
      const frameListItem = document.createElement("li");
      frameListItem.classList.add("dark-text");
      frameListItem.innerText = item;
      frameList.appendChild(frameListItem);
    });

    const mainCardText = document.createElement("p");
    mainCardText.classList.add("main-text");
    mainCardText.innerText = description[i].desc;
    cardContent.appendChild(mainCardText);

    const languageContainer = document.createElement("ul");
    languageContainer.classList.add("language");
    cardContent.appendChild(languageContainer);

    description[i].lang.forEach((lang) => {
      const langItem = document.createElement("li");
      langItem.innerText = lang;
      languageContainer.appendChild(langItem);
    });

    const btnHolder = document.createElement("div");
    btnHolder.classList.add("btn-container");
    cardContent.appendChild(btnHolder);

    const btn = document.createElement("button");
    btn.classList.add("see-project-btn");
    btn.type = "button";
    btn.innerText = "See Project";
    btnHolder.appendChild(btn);

    btn.addEventListener("click", () => {
      m = i;
      popUpCard(m);
      const addblur1 = document.querySelector("#head-container");
      const addblur2 = document.querySelector(".mobile-menu-list");
      const addblur3 = document.querySelector("#header-body");
      addblur1.classList.add("blur");
      addblur2.classList.add("blur");
      addblur3.classList.add("blur");
    });
  }

  removePopUpAndBlur();
  closeMenuOnLoad();

  function popUpCard(m) {
    const popUpMainContainer = document.createElement("div");
    popUpMainContainer.classList.add("pop-up-project");
    document.body.prepend(popUpMainContainer);

    const headAndClose = document.createElement("div");
    headAndClose.classList.add("header-and-close-btn");
    popUpMainContainer.append(headAndClose);

    const projectHead = document.createElement("h3");
    projectHead.innerText = description[m].title;
    projectHead.classList.add("project-head");
    headAndClose.append(projectHead);

    const closeBtn = document.createElement("img");
    closeBtn.classList.add("dark-close-btn");
    closeBtn.src = "../assets/portofolio/Icon.png";
    headAndClose.append(closeBtn);

    const headInfo = document.createElement("ul");
    headInfo.classList.add("head-info");
    popUpMainContainer.append(headInfo);

    description[m].list.forEach((item) => {
      const headInfoList = document.createElement("li");
      headInfoList.classList.add("head-info-text");
      headInfoList.innerText = item;
      headInfo.append(headInfoList);
    });

    const popUpImg = document.createElement("img");
    popUpImg.classList.add("project-image");
    popUpImg.src = description[m].image;
    popUpMainContainer.append(popUpImg);

    const textToolsContainer = document.createElement("div");
    textToolsContainer.classList.add("txt-tools-container");
    popUpMainContainer.append(textToolsContainer);

    const projectTextSummry = document.createElement("p");
    projectTextSummry.classList.add("project-text-summyr");
    projectTextSummry.innerText = description[m].desc;
    textToolsContainer.append(projectTextSummry);

    const toolsAndBtn = document.createElement("div");
    toolsAndBtn.classList.add("tools-and-btns");
    textToolsContainer.append(toolsAndBtn);

    const tools = document.createElement("ul");
    tools.classList.add("tools");
    toolsAndBtn.append(tools);

    description[m].lang.forEach((lang) => {
      const toolsText = document.createElement("li");
      toolsText.classList.add("tool-text");
      toolsText.innerText = lang;
      tools.append(toolsText);
    });

    const projectSeeBtns = document.createElement("div");
    projectSeeBtns.classList.add("project-see-btns");
    toolsAndBtn.append(projectSeeBtns);

    const seeLive = document.createElement("button");
    seeLive.classList.add("see-live", "see-project-btn");
    seeLive.innerText = "See live";
    const seeLiveImg = document.createElement("img");
    seeLiveImg.classList.add("btn-img");
    seeLiveImg.src = "../assets/portofolio/btn-1.png";
    seeLive.append(seeLiveImg);
    projectSeeBtns.append(seeLive);

    const seeSource = document.createElement("button");
    seeSource.classList.add("see-source", "see-project-btn");
    seeSource.innerText = "See source";
    const seeSourceImg = document.createElement("img");
    seeSourceImg.classList.add("btn-img");
    seeSourceImg.src = "../assets/portofolio/btn-2.png";
    seeSource.append(seeSourceImg);
    projectSeeBtns.append(seeSource);

    closeBtn.addEventListener("click", () => {
      document.body.removeChild(popUpMainContainer);
      removeBlurElements();
    });
  }

  function removeBlurElements() {
    const blurElements = document.querySelectorAll(".blur");
    blurElements.forEach((element) => {
      element.classList.remove("blur");
    });
  }
});
