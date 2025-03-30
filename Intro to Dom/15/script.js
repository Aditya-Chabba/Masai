function addTask() {
    let input = document.getElementById("taskInput");
    let taskText = input.value.trim();
    if (taskText === "") {
        alert("Task cannot be empty!");
        return;
    }
    
    let ul = document.getElementById("taskList");
    let li = document.createElement("li");
    
    let span = document.createElement("span");
    span.textContent = taskText;
    
    let completeButton = document.createElement("button");
    completeButton.textContent = "Complete";
    completeButton.onclick = function() {
        span.classList.toggle("completed");
    };
    
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function() {
        ul.removeChild(li);
    };
    
    li.appendChild(span);
    li.appendChild(completeButton);
    li.appendChild(deleteButton);
    ul.appendChild(li);
    
    input.value = "";
}