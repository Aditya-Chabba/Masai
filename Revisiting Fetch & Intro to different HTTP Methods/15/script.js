const productGrid = document.getElementById("productGrid");
const searchInput = document.getElementById("search");
const categorySelect = document.getElementById("category");
const sortSelect = document.getElementById("sort");
const productCount = document.getElementById("productCount");
const errorMessage = document.getElementById("error-message");

let allProducts = [];

// Fetch products and categories on page load
document.addEventListener("DOMContentLoaded", async () => {
    await fetchCategories();
    await fetchProducts();
});

// Fetch all categories dynamically
async function fetchCategories() {
    try {
        const response = await fetch("https://fakestoreapi.com/products/categories");
        if (!response.ok) throw new Error("Failed to fetch categories.");
        const categories = await response.json();
        
        categories.forEach(category => {
            const option = document.createElement("option");
            option.value = category;
            option.textContent = category.charAt(0).toUpperCase() + category.slice(1);
            categorySelect.appendChild(option);
        });
    } catch (error) {
        errorMessage.textContent = error.message;
    }
}

// Fetch all products dynamically
async function fetchProducts() {
    try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) throw new Error("Failed to fetch products.");
        allProducts = await response.json();
        displayProducts(allProducts);
    } catch (error) {
        errorMessage.textContent = error.message;
    }
}

// Filter and sort products based on user input
function filterProducts() {
    let filteredProducts = [...allProducts];
    const searchQuery = searchInput.value.toLowerCase();
    const selectedCategory = categorySelect.value;
    const sortOption = sortSelect.value;

    // Filter by search query
    if (searchQuery) {
        filteredProducts = filteredProducts.filter(product =>
            product.title.toLowerCase().includes(searchQuery)
        );
    }

    // Filter by category
    if (selectedCategory) {
        filteredProducts = filteredProducts.filter(product =>
            product.category === selectedCategory
        );
    }

    // Sort by price
    if (sortOption === "asc") {
        filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sortOption === "desc") {
        filteredProducts.sort((a, b) => b.price - a.price);
    }

    displayProducts(filteredProducts);
}

// Display products in the grid
function displayProducts(products) {
    productGrid.innerHTML = "";
    productCount.textContent = `Total Products: ${products.length}`;
    
    if (products.length === 0) {
        productGrid.innerHTML = "<p>No products found.</p>";
        return;
    }

    products.forEach(product => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.title}">
            <h4>${product.title}</h4>
            <p>$${product.price.toFixed(2)}</p>
            <button onclick="viewDetails(${product.id})">View Details</button>
        `;
        productGrid.appendChild(productCard);
    });
}

// Placeholder function for 'View Details' button
function viewDetails(productId) {
    alert(`Product ID: ${productId}`);
}
