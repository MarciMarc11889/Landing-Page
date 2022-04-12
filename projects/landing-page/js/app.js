
// Define Global Variables
const   sections    = document.querySelectorAll("section"),
        navBar      = document.getElementById("navbar__list");

// build the nav
for (let i=0; i <= sections.length-1; i++) {
    const newLi=document.createElement("li");
    newLi.classList.add("menu__link");
    let newContent = sections.item(i).dataset.nav;
    newLi.append(newContent);
    navBar.appendChild(newLi);
}

// List items in the Navbar in the following variable
const listItems = document.getElementsByClassName("menu__link");

// Add class 'active' to section when near top of viewport
window.addEventListener("scroll", () =>{

    for (let i=0; i <= sections.length-1; i++){
        let posSect=sections[i].getBoundingClientRect();
        
        if (posSect.top <= 300 && posSect.bottom >= 300 ){
            sections[i].classList.add("your-active-class");
            listItems[i].classList.add("your-active-class");
        }
        else {
            sections[i].classList.remove("your-active-class");
            listItems[i].classList.remove("your-active-class");
        }
    }
})

// Scroll to anchor ID using scrollTO event
navBar.addEventListener("click", (e) =>{

    for (let i=0; i <= sections.length-1; i++) {

        if (sections.item(i).dataset.nav === e.target.textContent){
            sections.item(i).scrollIntoView({
                block: "start", behavior: "smooth"
            });
        }
    }
})


