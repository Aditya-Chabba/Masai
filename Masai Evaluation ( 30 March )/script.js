const recipeForm = document.getElementById("addRecipeForm");
const recipeContainer = document.getElementById("recipes");
const categoryFilter = document.getElementById("categoryFilter");
const darkModeToggle = document.getElementById("darkModeToggle");

document.addEventListener("DOMContentLoaded", () => {
    loadRecipes();
    if (localStorage.getItem("darkMode") === "enabled") {
        document.body.classList.add("dark-mode");
    }
});

darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("darkMode", "enabled");
    } else {
        localStorage.setItem("darkMode", "disabled");
    }
});

if (recipeForm) {
    recipeForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const name = document.getElementById("recipeName").value;
        const ingredients = document.getElementById("ingredients").value;
        const category = document.getElementById("category").value;
        const steps = document.getElementById("steps").value;
        
        const recipe = { name, ingredients, category, steps };
        let recipes = JSON.parse(localStorage.getItem("recipes")) || [];
        recipes.push(recipe);
        localStorage.setItem("recipes", JSON.stringify(recipes));
        alert("Recipe added successfully!");
        window.location.href = "index.html";
    });
}

function loadRecipes() {
    if (!recipeContainer) return;
    let recipes = JSON.parse(localStorage.getItem("recipes")) || [];
    recipeContainer.innerHTML = "";
    recipes.forEach((recipe, index) => {
        const div = document.createElement("div");
        div.classList.add("recipe-card");
        div.innerHTML = `
            <h2>${recipe.name}</h2>
            <p><strong>Ingredients:</strong> ${recipe.ingredients.replace(/\n/g, "<br>")}</p>
            <p><strong>Category:</strong> ${recipe.category}</p>
            <p>${recipe.steps.replace(/\n/g, "<br>")}</p>
            <button onclick="deleteRecipe(${index})">Delete</button>
        `;
        recipeContainer.appendChild(div);
    });
}

function deleteRecipe(index) {
    let recipes = JSON.parse(localStorage.getItem("recipes")) || [];
    recipes.splice(index, 1);
    localStorage.setItem("recipes", JSON.stringify(recipes));
    loadRecipes();
}

categoryFilter?.addEventListener("change", function () {
    const category = categoryFilter.value;
    let recipes = JSON.parse(localStorage.getItem("recipes")) || [];
    if (category !== "all") {
        recipes = recipes.filter(recipe => recipe.category === category);
    }
    recipeContainer.innerHTML = "";
    recipes.forEach((recipe, index) => {
        const div = document.createElement("div");
        div.classList.add("recipe-card");
        div.innerHTML = `
            <h2>${recipe.name}</h2>
            <p><strong>Ingredients:</strong> ${recipe.ingredients.replace(/\n/g, "<br>")}</p>
            <p><strong>Category:</strong> ${recipe.category}</p>
            <p>${recipe.steps.replace(/\n/g, "<br>")}</p>
            <button onclick="deleteRecipe(${index})">Delete</button>
        `;
        recipeContainer.appendChild(div);
    });
});