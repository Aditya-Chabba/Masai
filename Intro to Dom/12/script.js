document.getElementById("add-item-btn").addEventListener("click", function () {
    let ul = document.querySelector("#item-list");
    let newItem = document.createElement("li");

    let itemCount = ul.children.length + 1;
    newItem.textContent = `New Item ${itemCount}`;

    if (itemCount % 2 !== 0) {
        newItem.classList.add("bold-blue");
    } else {
        newItem.classList.add("italic-red");
    }

    ul.appendChild(newItem);
});
