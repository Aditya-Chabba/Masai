document.addEventListener("DOMContentLoaded", function () {
    const item2 = document.getElementById("item2");

    item2.addEventListener("click", function () {
        const parent = item2.parentNode;
        const previousSibling = item2.previousElementSibling;
        const nextSibling = item2.nextElementSibling;

        // Show parent node's text content in an alert
        alert(parent.textContent.trim());

        // Log previous and next siblings' text content
        if (previousSibling) console.log("Previous Sibling:", previousSibling.textContent);
        if (nextSibling) console.log("Next Sibling:", nextSibling.textContent);
    });
});
