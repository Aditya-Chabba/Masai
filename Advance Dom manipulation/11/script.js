function addParagraph() {
    let container = document.getElementById("paragraphContainer");
    let p = document.createElement("p");
    p.textContent = "This is a new paragraph.";
    container.appendChild(p);
}

function removeLastParagraph() {
    let container = document.getElementById("paragraphContainer");
    if (container.lastChild) {
        container.removeChild(container.lastChild);
    }
}
