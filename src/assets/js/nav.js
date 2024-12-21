// add classes for mobile navigation toggling
var CSbody = document.querySelector("body");
const CSnavbarMenu = document.querySelector("#cs-navigation");
const CShamburgerMenu = document.querySelector("#cs-navigation .cs-toggle");

CShamburgerMenu.addEventListener('click', function() {
    CShamburgerMenu.classList.toggle("cs-active");
    CSnavbarMenu.classList.toggle("cs-active");
    CSbody.classList.toggle("cs-open");
    // run the function to check the aria-expanded value
    ariaExpanded();
});

// checks the value of aria expanded on the cs-ul and changes it accordingly whether it is expanded or not 
function ariaExpanded() {
    const csUL = document.querySelector('#cs-expanded');
    const csExpanded = csUL.getAttribute('aria-expanded');

    if (csExpanded === 'false') {
        csUL.setAttribute('aria-expanded', 'true');
    } else {
        csUL.setAttribute('aria-expanded', 'false');
    }
}

    // This script adds a class to the body after scrolling 100px
// and we used these body.scroll styles to create some on scroll 
// animations with the navbar

document.addEventListener('scroll', (e) => { 
    const scroll = document.documentElement.scrollTop;
    if(scroll >= 100){
document.querySelector('body').classList.add('scroll')
    } else {
    document.querySelector('body').classList.remove('scroll')
    }
});


// mobile nav toggle code
const dropDowns = Array.from(document.querySelectorAll('#cs-navigation .cs-dropdown'));
    for (const item of dropDowns) {
        const onClick = () => {
        item.classList.toggle('cs-active')
    }
    item.addEventListener('click', onClick)
    }

    // your local storage reset for local testing. uncomment this command so you can still access you pop up after clicking the close or submit button.
// localStorage.setItem('closed', 'false');

document.addEventListener('DOMContentLoaded', function() {
    // Variables
    var CSmodal = document.getElementById('cs-modal-1605');
    var CScloseButton = document.getElementById('cs-close-1605');
    var CSsubmitButton = document.getElementById('cs-submit-1605');

    // Remove or bypass localStorage check to always show the modal
    // Uncomment the next line to clear the modalClosed flag for testing or permanent usage
    // localStorage.removeItem('modalClosed');

    // Show the modal after a delay (set to 0 for immediate display)
    setTimeout(function() {
        CSmodal.classList.add('cs-loaded');
        CSmodal.style.zIndex = 12000; // Make it visible
    }, 0);

    // Close button event listener
    CScloseButton.addEventListener('click', function() {
        // Add 'cs-closed' class and remove 'cs-loaded' class
        CSmodal.classList.add('cs-closed');
        CSmodal.classList.remove('cs-loaded');
        CSmodal.style.zIndex = -1000; // Hide the modal

        // Store the closed state in localStorage (optional, you can comment this out)
        // localStorage.setItem('modalClosed', 'true');
    });

    // Optional: Add event listener for the submit button if you want any functionality
    CSsubmitButton.addEventListener('click', function() {
        // Your submit button logic here (e.g., form submission)
    });
});
  
    
                                