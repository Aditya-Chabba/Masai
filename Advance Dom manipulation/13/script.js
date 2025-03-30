document.addEventListener("DOMContentLoaded", function () {
    const outerDiv = document.getElementById("outer");
    const middleDiv = document.getElementById("middle");
    const innerDiv = document.getElementById("inner");
    const innerButton = document.getElementById("innerBtn");

    // Event listeners for bubbling phase (default)
    outerDiv.addEventListener("click", () => alert("Outer Div clicked"), false);
    middleDiv.addEventListener("click", () => alert("Middle Div clicked"), false);
    innerDiv.addEventListener("click", () => alert("Inner Div clicked"), false);
    innerButton.addEventListener("click", (event) => {
        alert("Inner Button clicked - Stopping propagation");
        event.stopPropagation(); // Stops event propagation
    }, false);

    // Event listeners for capturing phase
    outerDiv.addEventListener("click", () => console.log("Outer Div (Capture)"), true);
    middleDiv.addEventListener("click", () => console.log("Middle Div (Capture)"), true);
    innerDiv.addEventListener("click", () => console.log("Inner Div (Capture)"), true);
    innerButton.addEventListener("click", () => console.log("Inner Button (Capture)"), true);
});
