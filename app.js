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

const sections = document.querySelectorAll('section');
const listTag = document.getElementById('navbar__list');
const sectionsArray = [...sections];

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

//fuction that's called from the activeSection variable. sets the active class
function rectHandler() {
    for(let section of sectionsArray) {
        section.classList.toggle("your-active-class", section.getBoundingClientRect().top < 100 && section.getBoundingClientRect().top >-500);
    }
};

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

//for loop to dynamically add sections to the navbar as a tags
for (let section of sectionsArray) {
    const listItem = document.createElement('li');
    const aTag = document.createElement('a');
    const attr = section.getAttribute('data-nav');
    aTag.append(attr);
    listItem.append(aTag);
    listTag.appendChild(listItem);
    listItem.className = "menu__link";
}

// Add class 'active' to section when near top of viewport

const activeSection = window.addEventListener('scroll', rectHandler);

// Scroll to anchor ID using scrollTO event

//select all anchor tags
const tags = document.querySelectorAll('a');

//select all id tags (the page has an id tag that we don't need at the first index, we'll work around that in the foloorwing for loop)
const tagss = document.querySelectorAll('*[id]');

//for loop handles the scrolling funtionality when clicking a section in the navbar
for(let i = 0; i < tags.length; i++) {
    tags[i].addEventListener('click', function(e) {
        e.preventDefault();
        tagss[i+1].scrollIntoView({
            behavior: 'smooth'
        });
    })
}

/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu

// Scroll to section on link click

// Set sections as active


