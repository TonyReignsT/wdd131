const yearElement = document.getElementById("currentyear");
const lastModifiedElement = document.getElementById("lastModified");

const currentYear = new Date().getFullYear();
yearElement.innerHTML = `<span class="highlight">${currentYear}</span>`;

lastModifiedElement.textContent = `Last Modified: ${document.lastModified}`;

yearElement.innerHTML = `<span class="highlight">${currentYear}</span>`;

lastModifiedElement.textContent = `Last Modified: ${document.lastModified}`;
