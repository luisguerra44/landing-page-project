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
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav




window.onload = () => {
    this.createListItem();
} 


function createListItem ( text, url ){
  let li = document.createElement('li'); 
  li.setAttribute("class","listItemsClass");
  let a = document.createElement("a");
  li.style.position = "relative";
  li.style.display = "inline-block";
  li.style.margin = '20px';
  li.style.color = 'green';
  li.innerHTML = "<a href='"+url+"'>"+text+"</a>";
  return li; 
} 

let myList = document.getElementById('navbar__list');

let items = [
createListItem('home','#section1'),
createListItem('about','#section2'),
createListItem('about us','#section3'),
createListItem('contact','#section4'),
];

items.forEach((li) => {
myList.appendChild(li);
});

//
// Add class 'active' to section when near top of viewport
//


window.addEventListener('scroll', event => {
  let navigationLinks= document.querySelectorAll ('nav ul li a');
  let fromTop = window.scrollY;

  navigationLinks.forEach(link => {
    let section = document.querySelector(link.hash);

    if (
        section.offsetTop <= fromTop &&
        section.offsetTop + section.offsetHeight > fromTop
    ) {
      link.classList.add('menu__link');
    } else {
      link.classList.remove('menu__link');
    }
  })
})


//
// Scroll to anchor ID using scrollTO event
//


const navbarMenu = document.querySelector("ul");
const navbarLinks = document.querySelectorAll("a");

for(let i=0; i<navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", navbarLinkClick)
}

function navbarLinkClick(event) {
  smoothScroll (event); // to call the smoothScroll function

  if(navbarMenu.classList.contains("open")) {
    navbarToggler.click();
  }

}

function smoothScroll(event) {
  event.preventDefault();
  const targetId = event.currentTarget.getAttribute("href")==="#" ? "header" : event.currentTarget.getAttribute("href");
  document.querySelector(targetId).scrollIntoView({
    behavior: "smooth",
    block: "start"
  })
}
/**
 * End Main Functions
 * Begin Events
 * 
*/


// Build menu 

// Scroll to section on link click

