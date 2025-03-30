document.getElementById("main-heading").textContent = "Welcome to the DOM World!";

let paragraphs = document.getElementsByTagName("p");
for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = "blue";
}

document.querySelector(".container").style.backgroundColor = "yellow";
