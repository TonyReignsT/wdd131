// Update the current year in the footer
const yearElement = document.getElementById("currentyear");
const currentYear = new Date().getFullYear();
yearElement.innerHTML = `<span class="highlight">${currentYear}</span>`;

// Update the last modified date in the footer
const lastModifiedElement = document.getElementById("lastModified");
lastModifiedElement.textContent = `Last Modified: ${document.lastModified}`;

// Hamburger menu functionality
// const toggleButton = document.getElementById('menu-toggle');
// const navMenu = document.querySelector('.nav-menu');

// toggleButton.addEventListener('click', function () {
//     navMenu.classList.toggle('open');
//     toggleButton.innerHTML = navMenu.classList.contains('open') ? '&times;' : '&#9776;';
// });

document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('menu-toggle');
    const toggleIcon = toggleButton.querySelector('.icon');
    const navMenu = document.querySelector('.nav-menu');

    toggleButton.addEventListener('click', function () {
        navMenu.classList.toggle('open');
        toggleIcon.innerHTML = navMenu.classList.contains('open') ? '&times;' : '&#9776;';
    });
});