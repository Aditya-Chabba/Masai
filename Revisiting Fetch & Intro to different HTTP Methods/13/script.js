const productList = document.getElementById("product-list");
const errorMessage = document.getElementById("error-message");

async function fetchProducts() {
    try {
        const response = await fetch("https://fakestoreapi.com/products");

        if (!response.ok) {
            throw new Error("Failed to fetch products");
        }

        const products = await response.json();
        displayProducts(products);
    } catch (error) {
        errorMessage.textContent = "Failed to fetch products. Please try again later.";
        errorMessage.style.display = "block";
        console.error("Error:", error);
    }
}

function displayProducts(products) {
    productList.innerHTML = ""; // Clear previous content
    products.forEach(product => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");

        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.title}">
            <h3>${product.title}</h3>
            <p>$${product.price.toFixed(2)}</p>
            <button onclick="viewDetails(${product.id})">View Details</button>
        `;

        productList.appendChild(productCard);
    });
}

function viewDetails(productId) {
    alert(`Product ID: ${productId}`); // Placeholder for future functionality
}

// Fetch products when the page loads
fetchProducts();
