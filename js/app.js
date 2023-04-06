/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/


/** 
* * Build the nav menu
*/
const navBarList = document.getElementById("navbar__list"); // <unordered list> element located in <nav> element located in <header> element
const sections = document.querySelectorAll("section");  // <section> element in html file

/**
 * ! Helper Functions
 */

// Create Nav Menu Links
const navMenuLinks = (listItem) => {
  return `<a class="menu__link" href="#${listItem.id}">${listItem.dataset.nav}</a>`;
};

// Viewport Parameters
const viewPort = (section) => {
  const forBoundingClient = section.getBoundingClientRect ();
  return (
    forBoundingClient.top >= -200 && forBoundingClient.bottom <= (window.innerHeight || document.elementFromPoint.clientHeight) + 200
  );
};

/**
 * ! Main Functions
 */

// Create Nav Bar
const navBar = () => {
  const navMenu = Array.from(sections).map(navMenuLinks);
  navBarList.innerHTML = navMenu.join("");
};
navBar ();

// Link Scroll Feature
const scrollTo = (event) => {
  event.preventDefault();
  const targetId = event.target.getAttribute("href");
  const targetSection = document.querySelector(targetId);
  targetSection.scrollIntoView({ behavior: "smooth" });
};

// Active Link and Section 
const navLinks = document.querySelectorAll(".menu__link");
navLinks.forEach((link) => {
  link.addEventListener('click', scrollTo);
});

const setActiveClass = () => {
  navLinks.forEach((link) => {
    const targetId = link.getAttribute("href");
    const targetSection = document.querySelector(targetId); 

    if (viewPort(targetSection)) {
      link.classList.add("active");
      targetSection.classList.add("your-active-class");
    } else {
      link.classList.remove("active");
      targetSection.classList.remove("your-active-class");
    }
    });
};

window.addEventListener("scroll", setActiveClass);

