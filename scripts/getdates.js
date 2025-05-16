// const year = document.querySelector("#currentyear");
// const today = new Date();

// year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;

// // last modified
// const lastModified = document.querySelector('#lastModified');
// lastModified.textContent = `Last Modified: ${document.lastModified}`;
const yearElement = document.getElementById("currentyear");
const lastModifiedElement = document.getElementById("lastModified");

const currentYear = new Date().getFullYear();
yearElement.innerHTML = `<span class="highlight">${currentYear}</span>`;

lastModifiedElement.textContent = `Last Modified: ${document.lastModified}`;

