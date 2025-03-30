document.addEventListener("DOMContentLoaded", function () {
    const notesArea = document.getElementById("notes");
    const saveBtn = document.getElementById("saveBtn");
    const loadBtn = document.getElementById("loadBtn");
    const clearBtn = document.getElementById("clearBtn");

    // Load notes on page load
    if (localStorage.getItem("userNotes")) {
        notesArea.value = localStorage.getItem("userNotes");
    }

    // Save notes to localStorage
    saveBtn.addEventListener("click", function () {
        const notes = notesArea.value.trim();
        if (notes) {
            localStorage.setItem("userNotes", notes);
            alert("Notes saved successfully!");
        } else {
            alert("Cannot save empty notes.");
        }
    });

    // Load notes from localStorage
    loadBtn.addEventListener("click", function () {
        if (localStorage.getItem("userNotes")) {
            notesArea.value = localStorage.getItem("userNotes");
        } else {
            alert("No notes found.");
        }
    });

    // Clear notes from localStorage
    clearBtn.addEventListener("click", function () {
        localStorage.removeItem("userNotes");
        notesArea.value = "";
        alert("Notes cleared successfully!");
    });
});
