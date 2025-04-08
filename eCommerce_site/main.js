

// Sample products data
const products1 = [
    {
        id: 1,
        name: "Wireless Bluetooth Headphones",
        description: "Premium noise-cancelling headphones with 30-hour battery life and superior sound quality. Features comfortable ear cushions and foldable design for easy storage.",
        price: 129.99,
        category: "electronics",
        image: generateProductImage("headphones", "#5D5CDE"),
        rating: 1
    },
    {
        id: 2,
        name: "Smartphone Pro Max",
        description: "Flagship smartphone with 6.7-inch OLED display, 12GB RAM, 256GB storage, and quad-camera system. Water-resistant and supports fast charging.",
        price: 999.99,
        category: "electronics",
        image: generateProductImage("smartphone", "#333"),
        rating: 4.8
    },
    {
        id: 3,
        name: "Cotton T-Shirt",
        description: "Classic fit cotton t-shirt made from 100% organic cotton. Breathable, comfortable, and available in multiple colors. Machine washable.",
        price: 19.99,
        category: "clothing",
        image: generateProductImage("tshirt", "#3498db"),
        rating: 4.2
    },
    {
        id: 4,
        name: "Designer Jeans",
        description: "Slim-fit designer jeans with stretch denim for comfort. Features classic 5-pocket styling and is made from premium cotton blend.",
        price: 89.99,
        category: "clothing",
        image: generateProductImage("jeans", "#2c3e50"),
        rating: 4.3
    },
    {
        id: 5,
        name: "Smart Coffee Maker",
        description: "Programmable coffee maker with smartphone control. Schedule brewing times, adjust strength, and receive notifications when coffee is ready.",
        price: 149.99,
        category: "home",
        image: generateProductImage("coffeemaker", "#8B4513"),
        rating: 4.7
    },
    {
        id: 6,
        name: "Non-Stick Cookware Set",
        description: "10-piece non-stick cookware set with durable coating and heat-resistant handles. Dishwasher safe and compatible with all stovetops including induction.",
        price: 199.99,
        category: "home",
        image: generateProductImage("cookware", "#C0C0C0"),
        rating: 4.6
    },
    {
        id: 7,
        name: "Vitamin C Serum",
        description: "Brightening serum with 20% Vitamin C and Hyaluronic Acid. Reduces fine lines, dark spots, and improves skin texture. Suitable for all skin types.",
        price: 34.99,
        category: "beauty",
        image: generateProductImage("serum", "#FF69B4"),
        rating: 4.4
    },
    {
        id: 8,
        name: "Hydrating Face Mask Set",
        description: "Pack of 10 sheet masks with various formulations for hydration, brightening, and anti-aging. Made with natural ingredients and free from harmful chemicals.",
        price: 24.99,
        category: "beauty",
        image: generateProductImage("mask", "#E6E6FA"),
        rating: 4.1
    },
    {
        id: 9,
        name: "Bestselling Novel",
        description: "Award-winning fiction novel by a renowned author. This page-turner combines mystery, romance, and adventure in a compelling narrative.",
        price: 14.99,
        category: "books",
        image: generateProductImage("book", "#D2691E"),
        rating: 4.9
    },
    {
        id: 10,
        name: "Cookbook Collection",
        description: "Collection of three cookbooks covering different cuisines. Includes detailed recipes, cooking techniques, and beautiful food photography.",
        price: 39.99,
        category: "books",
        image: generateProductImage("books", "#006400"),
        rating: 4.7
    },
    {
        id: 11,
        name: "Fitness Tracker",
        description: "Water-resistant fitness tracker with heart rate monitoring, sleep tracking, and 7-day battery life. Syncs with smartphone app for detailed fitness insights.",
        price: 79.99,
        category: "electronics",
        image: generateProductImage("tracker", "#FF4500"),
        rating: 4.3
    },
    {
        id: 12,
        name: "Leather Wallet",
        description: "Genuine leather wallet with RFID blocking technology. Features multiple card slots, ID window, and coin pocket. Slim design fits comfortably in pocket.",
        price: 49.99,
        category: "clothing",
        image: generateProductImage("wallet", "#8B4513"),
        rating: 4.5
    }
];

//Fetch products from API (simulated) using ajax

$(document).ready(function () {
    $.ajax({
        url: 'https://bestwale.pythonanywhere.com/ecommerce/products', // Replace with your API endpoint
        method: 'GET',
        dataType: 'json',
        success: function (data) {
            // Assuming the API returns an array of products
            displayProducts(data);
            console.log(data);
            Test(data);

        },
        error: function (error) {
            console.error('Error fetching products:', error);
            // Fallback to local data if API fails
            displayProducts();
        }
    });
});


function Test(params) {
    console.log(params);
    params.forEach(element => {
        console.log(element.category__name);
    });


}




// Generate SVG product image placeholder
function generateProductImage(text, bgColor) {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 300 300">
    <rect width="300" height="300" fill="${bgColor}" />
    <text x="150" y="150" font-family="Arial" font-size="24" fill="white" text-anchor="middle" dominant-baseline="middle">${text}</text>
</svg>`;

    return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

// Cart functionality
let cart = [];
let currentCategory = "all";
let currentSearch = "";
let currentSort = "default";

// DOM Elements
const productsContainer = document.getElementById("productsContainer");
const productHeading = document.getElementById("productHeading");
const searchInput = document.getElementById("searchInput");
const sortSelect = document.getElementById("sortSelect");
const categoryButtons = document.querySelectorAll(".category-btn");
const cartButton = document.getElementById("cartButton");
const cartBadge = document.getElementById("cartBadge");
const cartDrawer = document.getElementById("cartDrawer");
const cartItems = document.getElementById("cartItems");
const emptyCart = document.getElementById("emptyCart");
const overlay = document.getElementById("overlay");
const closeCartButton = document.getElementById("closeCartButton");
const startShoppingBtn = document.getElementById("startShoppingBtn");
const cartSubtotal = document.getElementById("cartSubtotal");
const checkoutButton = document.getElementById("checkoutButton");
const checkoutModal = document.getElementById("checkoutModal");
const closeCheckoutButton = document.getElementById("closeCheckoutButton");
const checkoutForm = document.getElementById("checkoutForm");
const checkoutSubtotal = document.getElementById("checkoutSubtotal");
const checkoutTotal = document.getElementById("checkoutTotal");
const confirmationModal = document.getElementById("confirmationModal");
const orderSummary = document.getElementById("orderSummary");
const continueShoppingBtn = document.getElementById("continueShoppingBtn");
const emptyState = document.getElementById("emptyState");
const productModal = document.getElementById("productModal");
const modalContent = document.getElementById("modalContent");
const modalOverlay = document.getElementById("modalOverlay");
const themeToggle = document.getElementById("themeToggle");
const moonIcon = document.getElementById("moonIcon");
const sunIcon = document.getElementById("sunIcon");

// Initialize theme
function initTheme() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.classList.add('dark');
        moonIcon.classList.add('hidden');
        sunIcon.classList.remove('hidden');
    }

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
        if (event.matches) {
            document.documentElement.classList.add('dark');
            moonIcon.classList.add('hidden');
            sunIcon.classList.remove('hidden');
        } else {
            document.documentElement.classList.remove('dark');
            moonIcon.classList.remove('hidden');
            sunIcon.classList.add('hidden');
        }
    });
}

// Toggle theme
themeToggle.addEventListener('click', () => {
    if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        moonIcon.classList.remove('hidden');
        sunIcon.classList.add('hidden');
    } else {
        document.documentElement.classList.add('dark');
        moonIcon.classList.add('hidden');
        sunIcon.classList.remove('hidden');
    }
});

// Display Products
function displayProducts(products) {
    // Filter products based on category and search
    let filteredProducts = products;

    if (currentCategory !== "all") {
        filteredProducts = filteredProducts.filter(product => product.category === currentCategory);
    }

    if (currentSearch) {
        const searchLower = currentSearch.toLowerCase();
        filteredProducts = filteredProducts.filter(product =>
            product.name.toLowerCase().includes(searchLower) ||
            product.description.toLowerCase().includes(searchLower)
        );
    }

    // Sort products
    if (currentSort === "price-low") {
        filteredProducts.sort((a, b) => a.price - b.price);
    } else if (currentSort === "price-high") {
        filteredProducts.sort((a, b) => b.price - a.price);
    } else if (currentSort === "name-asc") {
        filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
    } else if (currentSort === "name-desc") {
        filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
    }

    // Check if there are any products
    if (filteredProducts.length === 0) {
        productsContainer.classList.add('hidden');
        emptyState.classList.remove('hidden');
    } else {
        productsContainer.classList.remove('hidden');
        emptyState.classList.add('hidden');

        // Generate HTML for products
        productsContainer.innerHTML = "";

        filteredProducts.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden animate-fade-in';
            productCard.innerHTML = `
            <div class="product-image-container bg-gray-200 dark:bg-gray-700">
                <img src="${product.image}" alt="${product.name}" class="w-full h-full object-contain p-4">
            </div>
            <div class="p-4">
                <h3 class="font-medium text-lg mb-1 truncate-2 h-14">${product.name}</h3>
                <div class="flex items-center mb-2">
                    ${generateStarRating(product.rating)}
                    <span class="text-sm text-gray-500 dark:text-gray-400 ml-1">(${product.rating})</span>
                </div>
                <p class="font-bold text-lg text-primary dark:text-primary-light">$${product.price}</p>
                <button class="add-to-cart-btn mt-3 w-full py-2 bg-primary hover:bg-primary-dark text-white rounded-lg transition" data-id="${product.id}">
                    Add to Cart
                </button>
            </div>
        `;

            // Add click event to show product details
            productCard.querySelector('.product-image-container').addEventListener('click', () => {
                showProductDetails(product);
            });

            productCard.querySelector('h3').addEventListener('click', () => {
                showProductDetails(product);
            });

            // Add click event for add to cart button
            productCard.querySelector('.add-to-cart-btn').addEventListener('click', () => {
                addToCart(product);
            });

            productsContainer.appendChild(productCard);
        });
    }
}

// Generate star rating
function generateStarRating(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    let starsHtml = '';

    // Full stars
    for (let i = 0; i < fullStars; i++) {
        starsHtml += '<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-yellow-400" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>';
    }

    // Half star
    if (hasHalfStar) {
        starsHtml += '<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-yellow-400" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" fill="url(#half-star)" /><defs><linearGradient id="half-star" x1="0" y1="0" x2="100%" y2="0"><stop offset="50%" stop-color="currentColor"></stop><stop offset="50%" stop-color="#CBD5E0"></stop></linearGradient></defs></svg>';
    }

    // Empty stars
    for (let i = 0; i < emptyStars; i++) {
        starsHtml += '<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-300 dark:text-gray-600" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>';
    }

    return starsHtml;
}

// Show product details
function showProductDetails(product) {
    modalContent.innerHTML = `
    <div class="flex justify-between items-start">
        <h2 class="text-xl font-bold">${product.name}</h2>
        <button id="closeProductModal" class="p-1 text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </button>
    </div>
    
    <div class="mt-4">
        <img src="${product.image}" alt="${product.name}" class="w-full h-48 object-contain bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
    </div>
    
    <div class="mt-4">
        <div class="flex items-center mb-2">
            ${generateStarRating(product.rating)}
            <span class="text-sm text-gray-500 dark:text-gray-400 ml-1">(${product.rating})</span>
        </div>
        <p class="font-bold text-xl text-primary dark:text-primary-light">$${product.price}</p>
        <p class="text-gray-700 dark:text-gray-300 my-3">${product.description}</p>
        
        <div class="mt-6 flex items-center">
            <div class="mr-4">
                <label for="quantity" class="block text-sm font-medium mb-1">Quantity</label>
                <div class="flex items-center">
                    <button id="decreaseQuantity" class="p-2 bg-gray-200 dark:bg-gray-700 rounded-l-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />
                        </svg>
                    </button>
                    <input type="number" id="quantity" min="1" value="1" class="w-12 text-center py-2 border-y border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:outline-none text-base">
                    <button id="increaseQuantity" class="p-2 bg-gray-200 dark:bg-gray-700 rounded-r-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                        </svg>
                    </button>
                </div>
            </div>
            
            <button id="addToCartModal" class="flex-grow py-2 bg-primary hover:bg-primary-dark text-white rounded-lg transition">
                Add to Cart
            </button>
        </div>
    </div>
`;

    // Show modal
    productModal.classList.remove('hidden');

    // Event listeners
    document.getElementById('closeProductModal').addEventListener('click', () => {
        productModal.classList.add('hidden');
    });

    modalOverlay.addEventListener('click', () => {
        productModal.classList.add('hidden');
    });

    // Quantity controls
    const quantityInput = document.getElementById('quantity');
    document.getElementById('decreaseQuantity').addEventListener('click', () => {
        if (parseInt(quantityInput.value) > 1) {
            quantityInput.value = parseInt(quantityInput.value) - 1;
        }
    });

    document.getElementById('increaseQuantity').addEventListener('click', () => {
        quantityInput.value = parseInt(quantityInput.value) + 1;
    });

    // Add to cart
    document.getElementById('addToCartModal').addEventListener('click', () => {
        const quantity = parseInt(quantityInput.value);
        for (let i = 0; i < quantity; i++) {
            addToCart(product);
        }
        productModal.classList.add('hidden');
    });
}

// Add to Cart
function addToCart(product) {
    // Create a new cart item with a unique cart ID
    const cartItem = {
        ...product,
        cartId: `${product.id}-${Date.now()}`
    };

    cart.push(cartItem);
    updateCartBadge();
    updateCartUI();

    // Show feedback
    const feedback = document.createElement('div');
    feedback.className = 'fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg animate-fade-in z-50';
    feedback.textContent = `${product.name} added to cart`;
    document.body.appendChild(feedback);

    // Remove feedback after 2 seconds
    setTimeout(() => {
        feedback.classList.remove('animate-fade-in');
        feedback.classList.add('animate-fade-out');
        setTimeout(() => {
            document.body.removeChild(feedback);
        }, 300);
    }, 2000);
}

// Remove from Cart
function removeFromCart(cartId) {
    const index = cart.findIndex(item => item.cartId === cartId);
    if (index !== -1) {
        cart.splice(index, 1);
        updateCartBadge();
        updateCartUI();
    }
}

// Update Cart Badge
function updateCartBadge() {
    cartBadge.textContent = cart.length;
}

// Update Cart UI
function updateCartUI() {
    if (cart.length === 0) {
        cartItems.classList.add('hidden');
        emptyCart.classList.remove('hidden');
        cartSubtotal.textContent = "$0.00";
    } else {
        cartItems.classList.remove('hidden');
        emptyCart.classList.add('hidden');

        // Calculate subtotal
        const subtotal = cart.reduce((sum, item) => sum + item.price, 0);
        cartSubtotal.textContent = `$${subtotal}`;

        // Update cart items
        cartItems.innerHTML = '';

        // Group items by product id to show quantity
        const groupedItems = cart.reduce((acc, item) => {
            if (!acc[item.id]) {
                acc[item.id] = {
                    ...item,
                    quantity: 1
                };
            } else {
                acc[item.id].quantity += 1;
            }
            return acc;
        }, {});

        Object.values(groupedItems).forEach(item => {
            const cartItemEl = document.createElement('div');
            cartItemEl.className = 'flex items-start pb-4 border-b dark:border-gray-700 animate-fade-in';
            cartItemEl.innerHTML = `
            <div class="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded overflow-hidden mr-3 flex-shrink-0">
                <img src="${item.image}" alt="${item.name}" class="w-full h-full object-contain p-2">
            </div>
            <div class="flex-grow">
                <h4 class="font-medium text-sm">${item.name}</h4>
                <div class="flex justify-between items-center mt-1">
                    <span class="text-sm text-gray-600 dark:text-gray-400">
                        $${item.price} × ${item.quantity}
                    </span>
                    <span class="font-medium">$${(item.price * item.quantity).toFixed(2)}</span>
                </div>
                <div class="mt-2 flex space-x-2">
                    <button class="remove-item-btn text-sm text-red-500 hover:text-red-700 dark:hover:text-red-400" data-id="${item.id}">
                        Remove
                    </button>
                </div>
            </div>
        `;

            cartItems.appendChild(cartItemEl);

            // Add event listener to remove button
            cartItemEl.querySelector('.remove-item-btn').addEventListener('click', () => {
                // Remove all instances of this product
                cart = cart.filter(cartItem => cartItem.id !== item.id);
                updateCartBadge();
                updateCartUI();
            });
        });
    }
}

// Toggle Cart
function toggleCart() {
    cartDrawer.classList.toggle('closed');
    cartDrawer.classList.toggle('open');
    overlay.classList.toggle('hidden');
    overlay.classList.toggle('visible');
}

// Checkout
function checkout() {
    // Hide cart
    toggleCart();

    // Calculate totals
    const subtotal = cart.reduce((sum, item) => sum + item.price, 0);
    const shipping = 5.99;
    const total = subtotal + shipping;

    // Update checkout totals
    checkoutSubtotal.textContent = `$${subtotal.toFixed(2)}`;
    checkoutTotal.textContent = `$${total.toFixed(2)}`;

    // Show checkout modal
    checkoutModal.classList.remove('hidden');
}

// Complete Order
function completeOrder(e) {
    e.preventDefault();

    // Hide checkout modal
    checkoutModal.classList.add('hidden');

    // Calculate order totals
    const subtotal = cart.reduce((sum, item) => sum + item.price, 0);
    const shipping = 5.99;
    const total = subtotal + shipping;

    // Group items for summary
    const groupedItems = cart.reduce((acc, item) => {
        if (!acc[item.id]) {
            acc[item.id] = {
                ...item,
                quantity: 1
            };
        } else {
            acc[item.id].quantity += 1;
        }
        return acc;
    }, {});

    // Prepare order summary
    let summaryHTML = `
    <div class="text-sm">
        <p class="font-medium mb-2">Order #${Math.floor(10000 + Math.random() * 90000)}</p>
        <div class="space-y-1 mb-3">
`;

    Object.values(groupedItems).forEach(item => {
        summaryHTML += `
        <div class="flex justify-between">
            <span>${item.quantity} × ${item.name}</span>
            <span>$${(item.price * item.quantity).toFixed(2)}</span>
        </div>
    `;
    });

    summaryHTML += `
        </div>
        <div class="border-t dark:border-gray-600 pt-2 space-y-1">
            <div class="flex justify-between">
                <span>Subtotal:</span>
                <span>$${subtotal.toFixed(2)}</span>
            </div>
            <div class="flex justify-between">
                <span>Shipping:</span>
                <span>$${shipping.toFixed(2)}</span>
            </div>
            <div class="flex justify-between font-bold">
                <span>Total:</span>
                <span>$${total.toFixed(2)}</span>
            </div>
        </div>
    </div>
`;

    // Update order summary and show confirmation
    orderSummary.innerHTML = summaryHTML;
    confirmationModal.classList.remove('hidden');

    // Clear cart
    cart = [];
    updateCartBadge();
    updateCartUI();
}

// Initialize the app
function init() {
    // Set up event listeners

    // Category buttons
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            categoryButtons.forEach(btn => {
                btn.classList.remove('bg-primary', 'text-white');
                btn.classList.add('bg-gray-200', 'dark:bg-gray-700', 'text-gray-800', 'dark:text-gray-200');
            });

            button.classList.remove('bg-gray-200', 'dark:bg-gray-700', 'text-gray-800', 'dark:text-gray-200');
            button.classList.add('bg-primary', 'text-white');

            currentCategory = button.dataset.category;
            productHeading.textContent = currentCategory === "all" ? "All Products" : `${currentCategory.charAt(0).toUpperCase() + currentCategory.slice(1)}`;
            displayProducts();
        });
    });

    // Search input
    searchInput.addEventListener('input', () => {
        currentSearch = searchInput.value.trim();
        displayProducts();
    });

    // Sort select
    sortSelect.addEventListener('change', () => {
        currentSort = sortSelect.value;
        displayProducts();
    });

    // Cart buttons
    cartButton.addEventListener('click', toggleCart);
    closeCartButton.addEventListener('click', toggleCart);
    overlay.addEventListener('click', toggleCart);
    startShoppingBtn.addEventListener('click', toggleCart);

    // Checkout
    checkoutButton.addEventListener('click', checkout);
    closeCheckoutButton.addEventListener('click', () => {
        checkoutModal.classList.add('hidden');
    });

    document.getElementById('checkoutOverlay').addEventListener('click', () => {
        checkoutModal.classList.add('hidden');
    });

    checkoutForm.addEventListener('submit', completeOrder);

    // Confirmation
    continueShoppingBtn.addEventListener('click', () => {
        confirmationModal.classList.add('hidden');
    });

    // Initialize theme
    initTheme();

    // Display products initially
    displayProducts();
}

// Start the app
document.addEventListener('DOMContentLoaded', init);
