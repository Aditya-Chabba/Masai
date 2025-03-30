// script.js
document.addEventListener("DOMContentLoaded", loadNotes);

function saveNote() {
    const noteText = document.getElementById("noteArea").value.trim();
    if (noteText === "") {
        alert("Cannot save an empty note!");
        return;
    }
    localStorage.setItem("savedNotes", noteText);
    alert("Notes saved successfully!");
}

function loadNotes() {
    const savedNotes = localStorage.getItem("savedNotes");
    if (savedNotes) {
        document.getElementById("noteArea").value = savedNotes;
    }
}

function clearNotes() {
    localStorage.removeItem("savedNotes");
    document.getElementById("noteArea").value = "";
    alert("Notes cleared successfully!");
}
