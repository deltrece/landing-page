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
const navBarList = document.getElementById("navbar__list"); // <unordered list> element located in <nav> element located in <header> element
//const navMenu = document.getElementsByClassName("menu__link"); // class label in css file
const navBarMenu  = document.getElementsByClassName("navbar__menu"); // class label in css file
const sections = document.querySelectorAll("section");  // <section> element in html file (four of them)
const active = document.getElementsByClassName("your-active-class"); // class label in <section> element
const container = document.querySelectorAll("landing__container"); // class label in <div> section


/**
 * ! End Global Variables Above
 * ? Start Helper Functions Below
 * 
*/

/**
 * ? Viewport Helper Function (Note:repitive for the viewport)
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

//function navLink(section) {}
//function activeSection(section) {}

/**
 * ? End Helper Functions Above
 * ! Begin Main Functions Below
 * 
*/

/** 
* * build the nav// active state w/ css//create a funtion using template literals that returns a new element//helper function
*/



// create li element
const listItem = document.createElement("li");

// append li element to ul element
navBarList.append(listItem);

//console.log(listItem);

// sections.forEach((section)=> { // callback function
//   //create list item
//   //adding the nav link
//   //add text inside
// })


// navbar__list.append(navBarList);

// console.log(navBarList);

// const navbar__list = document.createElement("li");
// navbar__list.innerHTML = `${"sections"}`;
// navbar__list.textContent = `${"sections"}`;
// document.getElementById("navbar__list"); 
// navBarList.appendChild(navbar__list);

// console.log(navbar__list);
 

/** 
* * Add class 'active' to section when near top of viewport .getbounding rect//foreach function// if/else statement
*/

/** 
* * Scroll to anchor ID using scrollTO event //onclick/ add click event listener//when I build the anchor link
*/ 


/**
 * ! End Main Functions Above
 * ? Begin Events Below
 * 
*/



