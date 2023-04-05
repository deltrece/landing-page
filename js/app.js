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
 * ! Define Global Variables Below
 * 
*/
// global functions are methods of the global object:
console.log("Wasssuuuppp!!!");

const pageBody = document.body;

/**
 * ! End Global Variables Above
 * ? Start Helper Functions Below
 * 
*/

/**
 * ? Viewport Helper Function (Note:repitive for the viewport)
*/

/**
 * ? End Helper Functions Above
 * ! Begin Main Functions Below
 * 
*/

/** 
* * build the nav
*/
const navBarList = document.getElementById("navbar__list"); // <unordered list> element located in <nav> element located in <header> element
const navBarMenu  = document.getElementsByClassName("navbar__menu"); // class label in css file
const sections = document.querySelectorAll("section");  // <section> element in html file (four of them)

sections.forEach((section)=> { // <--callback function
  const listItem = document.createElement("li"); // create list element
  navBarList.append(listItem);  // add li element to ul element

  const linkName = document.createElement("a"); // anchor link created
  linkName.innerHTML = `${section.dataset.nav}`; // text of section
  linkName.setAttribute("href", '#'+section.id); // link to section 
  linkName.classList.add("menu__link");
  listItem.appendChild(linkName); // add to nav menu
  // need onclick event listener {behavior: "smooth"}
	});
   

/** 
* * Add class 'active' to section when near top of viewport 
*/
const active = document.getElementsByClassName("your-active-class"); // class label in <section> element
const div = document.querySelectorAll('div'); // div element

function makeActive(){
  for(const section of sections) {
      const div = section.getBoundingClientRect();
      if (div.top <= 150 && div.bottom >= 150) {
      //apply active state on current section and corresponding Nav link
      section.classList.add("your-active-class");
      document.querySelector(`${'#'+section.id}`).classList.add("active");
      } else {
      //Remove active state from other section and corresponding Nav link
      section.classList.remove("your-active-class");
      document.querySelector(`${'#'+section.id}`).classList.remove("active");
      }
   }
}

window.addEventListener("scroll", function() {
	div.forEach(function(div) {
		const bounds = div.getBoundingClientRect();
		const isInViewport = bounds.top >= 0
			&& bounds.left > 0
			&& bounds.right <= window.innerWidth
			&& bounds.bottom <= window.innerWidth;

		if (isInViewport) {
			div.classList.add("your-active-class");
		} else {
			div.classList.remove("your-active-class");
		}
	});
})

/** 
* * Scroll to anchor ID using scrollTo event //onclick/ add click event listener//when I build the anchor link
*/ 
const container = document.querySelectorAll("landing__container"); // class label in <div> section

// document.querySelectorAll("section").forEach(anchor => {
//   anchor.addEventListener("click, function"(e){
//     e.preventDefault();
//     document.querySelector(this.getAttribute("section")).scrollIntoView({
//         behavior : "smooth";
//     });
//   });
// });

// (window).scroll(function() {
//   ("section").each(function(){
//      section = (this).offset().top;
//      section = (window).scrollTop();
//      onclick.preventDefault();
//      section.scrollIntoView({behavior: "smooth"});
     
//   });
// })

// onclick.preventDefault();
// section.scrollIntoView({ behavior: "smooth" });

/**
 * ! End Main Functions Above
 * ? Begin Events Below
 * 
*/
// Build menu 

// Scroll to section on link click

// Set sections as active


