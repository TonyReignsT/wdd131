// Handles date and time modified
const yearElement = document.getElementById("currentyear");
const lastModifiedElement = document.getElementById("lastModified");

const currentYear = new Date().getFullYear();
yearElement.innerHTML = `<span class="highlight">${currentYear}</span>`;

lastModifiedElement.textContent = `Last Modified: ${document.lastModified}`;

const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5,
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7,
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5,
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9,
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0,
  },
];

//Get the select elements
const productSelect = document.getElementById("name");
console.log(productSelect);

//Add options dynamically
products.forEach((product) => {
  const option = document.createElement("option");
  option.value = product.name.toLowerCase().replace(" ", "-"); // Convert name to lowercase and replace spaces with hyphens
  option.textContent = product.name;
  productSelect.appendChild(option);
});
