document.addEventListener("DOMContentLoaded", function () {
    const themeSelector = document.getElementById("themeSelector");
    const body = document.body;

    // Function to apply the selected theme
    function applyTheme(theme) {
        body.className = ""; // Reset classes
        body.classList.add(`${theme}-theme`);
        sessionStorage.setItem("selectedTheme", theme);
    }

    // Load the stored theme from sessionStorage
    const savedTheme = sessionStorage.getItem("selectedTheme") || "light";
    themeSelector.value = savedTheme;
    applyTheme(savedTheme);

    // Event listener for theme change
    themeSelector.addEventListener("change", function () {
        applyTheme(this.value);
    });
});
