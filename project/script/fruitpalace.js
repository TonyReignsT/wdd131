// Fruit data
const fruits = [
  {
    id: 1,
    name: "Fresh Oranges",
    price: 3.99,
    type: "citrus",
    // emoji: "🍊",
    imgUrl:
      "images/orange-fruits.jpg",
    description:
      "Sweet and juicy oranges packed with vitamin C. Perfect for fresh juice or healthy snacking.",
  },
  {
    id: 2,
    name: "Ripe Bananas",
    price: 2.49,
    type: "tropical",
    // emoji: "🍌",
    imgUrl:
      "images/banana.jpg",
    description:
      "Perfectly ripe bananas rich in potassium and natural sugars. Great for smoothies and baking.",
  },
  {
    id: 3,
    name: "Fresh Strawberries",
    price: 4.99,
    type: "berry",
    // emoji: "🍓",
    imgUrl:
      "images/strawberries.jpg",
    description:
      "Sweet, juicy strawberries bursting with flavor. Ideal for desserts, salads, or eating fresh.",
  },
  {
    id: 4,
    name: "Green Apples",
    price: 3.49,
    type: "stone",
    // emoji: "🍏",
    imgUrl:
      "images/apples.jpg",
    description:
      "Crisp and tart green apples with a refreshing crunch. Perfect for pies or healthy snacking.",
  },
  {
    id: 5,
    name: "Tropical Pineapple",
    price: 5.99,
    type: "tropical",
    // emoji: "🍍",
    imgUrl:
      "images/pineapple.jpg",
    description:
      "Sweet and tangy pineapple with tropical flavor. Rich in enzymes and perfect for grilling.",
  },
  {
    id: 6,
    name: "Fresh Grapes",
    price: 4.49,
    type: "berry",
    // emoji: "🍇",
    imgUrl:
      "images/grapes.jpg",
    description:
      "Sweet, seedless grapes perfect for snacking. Rich in antioxidants and natural sweetness.",
  },
  {
    id: 7,
    name: "Juicy Peaches",
    price: 4.79,
    type: "stone",
    // emoji: "🍑",
    imgUrl:
      "images/peaches.jpg",
    description:
      "Sweet, juicy peaches with a delicate flavor. Perfect for cobblers, smoothies, or fresh eating.",
  },
  {
    id: 8,
    name: "Fresh Lemons",
    price: 2.99,
    type: "citrus",
    // emoji: "🍋",
    imgUrl:
      "images/lemon.jpg",
    description:
      "Bright, zesty lemons perfect for cooking, baking, and making refreshing lemonade.",
  },
  {
    id: 9,
    name: "Sweet Watermelon",
    price: 6.99,
    type: "tropical",
    // emoji: "🍉",
    imgUrl:
      "images/watermelon.jpg",
    description:
      "Refreshing and sweet watermelon perfect for summer. High water content and naturally sweet.",
  },
  {
    id: 10,
    name: "Fresh Blueberries",
    price: 5.49,
    type: "berry",
    // emoji: "🫐",
    imgUrl:
      "images/blueberries.jpg",
    description:
      "Antioxidant-rich blueberries with a sweet-tart flavor. Perfect for pancakes, muffins, or snacking.",
  },
];

// Function to create fruit cards
// function createFruitCard(fruit) {
//     return `
//         <div class="fruit-card" data-id="${fruit.id}">
//             <div class="fruit-image">${fruit.imgUrl}</div>
//             <div class="fruit-info">
//                 <h3 class="fruit-name">${fruit.name}</h3>
//                 <div class="fruit-price">$${fruit.price.toFixed(2)}</div>
//                 <div class="fruit-type">${fruit.type}</div>
//                 <p class="fruit-description">${fruit.description}</p>
//                 <button class="add-to-cart" onclick="addToCart(${fruit.id})">Add to Cart</button>
//             </div>
//         </div>
//     `;
// }

function createFruitCard(fruit) {
  return `
        <div class="fruit-card" data-id="${fruit.id}">
            <div class="fruit-image">
                ${
                  fruit.imgUrl
                    ? `<img src="${fruit.imgUrl}" alt="${fruit.name}" loading="lazy">`
                    : `<div class="placeholder-image">No Image Available</div>`
                }
            </div>
            <div class="fruit-info">
                <h3 class="fruit-name">${fruit.name}</h3>
                <div class="fruit-price">$${fruit.price.toFixed(2)}</div>
                <div class="fruit-type">${fruit.type}</div>
                <p class="fruit-description">${fruit.description}</p>
                <button class="add-to-cart" onclick="addToCart(${
                  fruit.id
                })">Add to Cart</button>
            </div>
        </div>
    `;
}

 // Function to display fruits
 function displayFruits(fruitsToShow = fruits) {
    const fruitGrid = document.getElementById('fruitGrid');
    fruitGrid.innerHTML = fruitsToShow.map(fruit => createFruitCard(fruit)).join('');
}

//  Function to add item to cart (placeholder)
 function addToCart(fruitId) {
    const fruit = fruits.find(f => f.id === fruitId);
    alert(`Added ${fruit.name} to cart!`);
    // Add the item to a cart array or send to a server
}


// Search functionality
function setupSearch() {
    const searchInput = document.getElementById('searchFilter');
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const filteredFruits = fruits.filter(fruit => 
            fruit.name.toLowerCase().includes(searchTerm) ||
            fruit.type.toLowerCase().includes(searchTerm) ||
            fruit.description.toLowerCase().includes(searchTerm)
        );
        displayFruits(filteredFruits);
    });
}


// Contact form functionality
function setupContactForm() {
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(this);
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');
        
        // Simple validation
        if (!name || !email || !subject || !message) {
            alert('Please fill in all required fields.');
            return;
        }
        
        // Simulate form submission
        alert(`Thank you, ${name}! Your message has been sent. We'll get back to you soon at ${email}.`);
        this.reset();
    });
}

 // Initialize footer dates
 function initializeDates() {
    document.getElementById('currentyear').textContent = new Date().getFullYear();
    document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;
}

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    displayFruits();
    setupSearch();
    initializeDates();
});
