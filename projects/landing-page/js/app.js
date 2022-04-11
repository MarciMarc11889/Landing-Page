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
 * Define Global Variables
 * 
*/
const   sections    = document.querySelectorAll("section"),
        navBar      = document.getElementById("navbar__list");

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

window.addEventListener("scroll", () =>{
    for (let i=0; i <= sections.length-1; i++){
        let posSect=sections[i].getBoundingClientRect();
        
        if (posSect.top <= 300 && posSect.bottom >= 300 ){
            sections[i].classList.add("your-active-class");
        }
        else {
            sections[i].classList.remove("your-active-class");
        }
    }
})

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
for (let i=0; i <= sections.length-1; i++) {
    const newLi=document.createElement("li");
    newLi.classList.add("navbar__menu", "menu__link");
    let newContent = sections.item(i).dataset.nav;
    newLi.append(newContent);
    navBar.appendChild(newLi);
}

// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


