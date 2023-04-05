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

/**
 *
 * You can probably remove this console message haha
 */
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
 *
 * If the code below isn't going to be used. You can remove it.
 */

/*
function isInViewport(element) {  //this is a helper function
  const rect = element.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
*/

/**
 * ? End Helper Functions Above
 * ! Begin Main Functions Below
 *
 */

/**
 * * build the nav// active state w/ css//create a funtion using template literals that returns a new element//
 */
const navBarList = document.getElementById("navbar__list"); // <unordered list> element located in <nav> element located in <header> element

// You can probably remove this navMenu variable since it is commented out and not being used.
//const navMenu = document.getElementsByClassName("menu__link"); // class label in css file

const navBarMenu = document.getElementsByClassName("navbar__menu"); // class label in css file
const sections = document.querySelectorAll("section"); // <section> element in html file (four of them)

sections.forEach((section) => {
  // <--callback function
  const listItem = document.createElement("li"); // create list element
  navBarList.append(listItem); // add li element to ul element

  const linkName = document.createElement("a"); // anchor link created
  linkName.innerHTML = `${section.dataset.nav}`; // text of section
  linkName.setAttribute("href", "#" + section.id); // link to section

  /**
   * I don't remember if it is in the directions or not, but I think the a href in
   * navigation need to have the menu__link class.
   * So I added it for you
   **/
  linkName.classList.add("menu__link");
  listItem.appendChild(linkName); // add to nav menu

  /**
   *
   *  The commented code below can be removed
   */
  // section.addEventListener("click", (event) => { // Adding a "click" event listener per link
  //   event.preventDefault();  //prevents default behavior
  //   linkName = event.target.dataset.nav; // Targeting each "data-block" dataset per clicked link
  //   scrollTo(section.id);
  // });
});

/**
 *
 *  You can remove all this commented out code, since it is not being used.
 */
//document.addEventListener("scroll", function() { makeActive();});

// scrollTo(()=>{
//   linkName.addEventListener("click", function());
//   behavior: "smooth";
// })

/**
 * * Add class 'active' to section when near top of viewport
 */
// const container = document.querySelectorAll("landing__container"); // class label in <div> section
// const active = document.getElementsByClassName("your-active-class"); // class label in <section> element
// const div = document.querySelectorAll('div'); // div element

// function makeActive(){
//   for(const section of sections) {
//       const div = section.getBoundingClientRect();
//       if (div.top <= 150 && div.bottom >= 150) {
//       //apply active state on current section and corresponding Nav link
//       section.landing__container.add("your-active-class");
//       document.querySelector(`${'#'+section.id}`).landing__container.add("active");
//       } else {
//       //Remove active state from other section and corresponding Nav link
//       section.landing__container.remove("your-active-class");
//       document.querySelector(`${'#'+section.id}`).landing__container.remove("active");
//       }
//    }
// }

// window.addEventListener("scroll", function() {
// 	div.forEach(function(div) {
// 		const bounds = div.getBoundingClientRect();
// 		const isInViewport = bounds.top >= 0
// 			&& bounds.left > 0
// 			&& bounds.right <= window.innerWidth
// 			&& bounds.bottom <= window.innerWidth;

// 		if (isInViewport) {
// 			div.landing__container.add("your-active-class");
// 		} else {
// 			div.landing__container.remove("your-active-class");
// 		}
// 	});
// })

/**
 * * Scroll to anchor ID using scrollTo event //onclick/ add click event listener//when I build the anchor link
 */

/**
 * ! End Main Functions Above
 * ? Begin Events Below
 *
 */
// Build menu

// Scroll to section on link click

// Set sections as active

/***
 *
 *  Overall great job!!
 *  After you clean up all the unused code. I know there are 2 other things you need to do.
 *  1. Make the navigation link have "your-active-class" class if the related section is in the view port
 *  2. Add a scroll effect that will slide to the section when the user clicks the link
 */
