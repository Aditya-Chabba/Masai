document.getElementById("change-bg-btn").addEventListener("click", function () {
    let colorInput = document.getElementById("color-input").value.trim();
    let displayBox = document.getElementById("display-box");

    let testDiv = document.createElement("div");
    testDiv.style.backgroundColor = colorInput;

    if (testDiv.style.backgroundColor === colorInput || /^#([0-9A-F]{3}){1,2}$/i.test(colorInput)) {
        displayBox.style.backgroundColor = colorInput;
    } else {
        alert("Invalid color name!");
    }
});

document.getElementById("update-text-btn").addEventListener("click", function () {
    let textInput = document.getElementById("text-input").value.trim();
    let displayBox = document.getElementById("display-box");

    if (textInput) {
        displayBox.textContent = textInput;
    } else {
        alert("Please enter some text!");
    }
});
