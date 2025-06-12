// Temple data
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
  },
  {
    templeName: "Birmingham England Temple",
    location: "Royal Sutton Coldfield Birmingham, United Kingdom",
    dedicated: "2025, March, 22",
    area: 10800,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/birmingham-england-temple/birmingham-england-temple-45435-main.jpg",
  },
  {
    templeName: "Columbus Ohio Temple",
    location: "Columbus, Ohio, United States",
    dedicated: "1998, April, 25",
    area: 11745,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/columbus-ohio-temple/columbus-ohio-temple-57341-main.jpg",
  },
  {
    templeName: "Apia Samoa Temple",
    location: "Apia, Samoa",
    dedicated: "1981, February, 19",
    area: 18691,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/apia-samoa-temple/apia-samoa-temple-13905-main.jpg",
  },
];

// DOM elements
const templeContainer = document.getElementById("temple-container");
const pageTitle = document.getElementById("page-title");
const navLinks = document.querySelectorAll(".nav-menu a");

// Function to create temple card HTML
function createTempleCard(temple) {
  return `
        <div class="temple">
            <h2 class="temple-name">${temple.templeName}</h2>
            <p class="temple-location"><strong>Location:</strong> ${
              temple.location
            }</p>
            <p class="temple-dedicated"><strong>Dedicated:</strong> ${
              temple.dedicated
            }</p>
            <p class="temple-area"><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
            <img src="${temple.imageUrl}" alt="${
    temple.templeName
  }" class="temple-image" loading="lazy">
        </div>
    `;
}

// Function to display temples
function displayTemples(templesToShow) {
  templeContainer.innerHTML = templesToShow
    .map((temple) => createTempleCard(temple))
    .join("");
}

// Function to filter temples
function filterTemples(filter) {
  let filteredTemples = [];
  let title = "";

  switch (filter) {
    case "old":
      filteredTemples = temples.filter((temple) => {
        const year = parseInt(temple.dedicated.split(",")[0]); // To extract the year from the dedicated date
        return year < 1900;
      });
      title = "Old Temples";
      break;
    case "new":
      filteredTemples = temples.filter((temple) => {
        const year = parseInt(temple.dedicated.split(",")[0]);
        return year > 2000;
      });
      title = "New Temples";
      break;
    case "large":
      filteredTemples = temples.filter((temple) => temple.area > 90000);
      title = "Large Temples";
      break;
    case "small":
      filteredTemples = temples.filter((temple) => temple.area < 10000);
      title = "Small Temples";
      break;
    default:
      filteredTemples = temples;
      title = "Home";
  }

  displayTemples(filteredTemples);
  pageTitle.textContent = title;
}

// Initialize page
document.addEventListener("DOMContentLoaded", function () {
  // Update footer information
  const yearElement = document.getElementById("currentyear");
  const currentYear = new Date().getFullYear();
  yearElement.textContent = currentYear;

  const lastModifiedElement = document.getElementById("lastModified");
  lastModifiedElement.textContent = `Last Modified: ${document.lastModified}`;

  // Mobile menu toggle
  const toggleButton = document.getElementById("menu-toggle");
  const toggleIcon = toggleButton.querySelector(".icon");
  const navMenu = document.querySelector(".nav-menu");

  toggleButton.addEventListener("click", function () {
    navMenu.classList.toggle("open");
    toggleIcon.innerHTML = navMenu.classList.contains("open")
      ? "&times;"
      : "&#9776;";
  });

  // Navigation filter functionality
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      // Remove active class from all links
      navLinks.forEach((l) => l.classList.remove("active"));
      // Add active class to clicked link
      this.classList.add("active");

      // Get filter type and apply filter
      const filter = this.getAttribute("data-filter");
      filterTemples(filter);

      // Close mobile menu if open
      navMenu.classList.remove("open");
      toggleIcon.innerHTML = "&#9776;";
    });
  });

  // Display all temples initially
  displayTemples(temples);
});
