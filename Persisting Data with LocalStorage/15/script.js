let currentUser = null;

// Function to log in user
function loginUser() {
    const username = document.getElementById("username").value.trim();
    if (!username) {
        alert("Please enter a username.");
        return;
    }

    currentUser = username;
    document.getElementById("login-section").style.display = "none";
    document.getElementById("cart-section").style.display = "block";

    loadCart();
}

// Function to log out user
function logout() {
    currentUser = null;
    document.getElementById("login-section").style.display = "block";
    document.getElementById("cart-section").style.display = "none";
}

// Load user's cart from localStorage
function loadCart() {
    if (!currentUser) return;

    const storedCarts = JSON.parse(localStorage.getItem("carts")) || {};
    const userCart = storedCarts[currentUser] || [];

    updateCartDisplay(userCart);
}

// Function to add an item to the cart
function addItem() {
    if (!currentUser) return;

    const itemName = document.getElementById("item-name").value.trim();
    const itemPrice = parseFloat(document.getElementById("item-price").value);
    const itemQuantity = parseInt(document.getElementById("item-quantity").value);

    if (!itemName || isNaN(itemPrice) || itemPrice <= 0 || isNaN(itemQuantity) || itemQuantity <= 0) {
        alert("Please enter valid item details.");
        return;
    }

    let storedCarts = JSON.parse(localStorage.getItem("carts")) || {};
    let userCart = storedCarts[currentUser] || [];

    let existingItem = userCart.find(item => item.itemName === itemName);
    if (existingItem) {
        existingItem.quantity += itemQuantity;
    } else {
        userCart.push({ itemName, price: itemPrice, quantity: itemQuantity });
    }

    storedCarts[currentUser] = userCart;
    localStorage.setItem("carts", JSON.stringify(storedCarts));

    updateCartDisplay(userCart);
}

// Function to update cart display
function updateCartDisplay(cart) {
    const cartBody = document.getElementById("cart-body");
    cartBody.innerHTML = "";

    let totalCost = 0;

    cart.forEach((item, index) => {
        let itemTotal = item.price * item.quantity;
        totalCost += itemTotal;

        let row = `
            <tr>
                <td>${item.itemName}</td>
                <td>$${item.price.toFixed(2)}</td>
                <td>
                    <input type="number" min="1" value="${item.quantity}" onchange="updateQuantity(${index}, this.value)">
                </td>
                <td>$${itemTotal.toFixed(2)}</td>
                <td>
                    <button onclick="removeItem(${index})">Remove</button>
                </td>
            </tr>
        `;
        cartBody.innerHTML += row;
    });

    document.getElementById("total-cost").innerText = totalCost.toFixed(2);
}

// Function to update item quantity
function updateQuantity(index, newQuantity) {
    if (!currentUser) return;

    let storedCarts = JSON.parse(localStorage.getItem("carts")) || {};
    let userCart = storedCarts[currentUser] || [];

    newQuantity = parseInt(newQuantity);
    if (isNaN(newQuantity) || newQuantity <= 0) {
        alert("Invalid quantity!");
        return;
    }

    userCart[index].quantity = newQuantity;
    storedCarts[currentUser] = userCart;
    localStorage.setItem("carts", JSON.stringify(storedCarts));

    updateCartDisplay(userCart);
}

// Function to remove an item from cart
function removeItem(index) {
    if (!currentUser) return;

    let storedCarts = JSON.parse(localStorage.getItem("carts")) || {};
    let userCart = storedCarts[currentUser] || [];

    userCart.splice(index, 1);

    storedCarts[currentUser] = userCart;
    localStorage.setItem("carts", JSON.stringify(storedCarts));

    updateCartDisplay(userCart);
}
