document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("newTask");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");
    const searchTask = document.getElementById("searchTask");

    // Load tasks from localStorage
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    // Function to render tasks
    function renderTasks(filter = "") {
        taskList.innerHTML = "";
        tasks.forEach(task => {
            if (task.text.toLowerCase().includes(filter.toLowerCase())) {
                const li = document.createElement("li");
                li.textContent = task.text;
                li.dataset.id = task.id;

                // Mark completed tasks
                if (task.completed) {
                    li.classList.add("completed");
                }

                // Click to toggle completed status
                li.addEventListener("click", () => toggleTaskCompletion(task.id));

                // Delete button
                const deleteBtn = document.createElement("button");
                deleteBtn.textContent = "X";
                deleteBtn.classList.add("delete-btn");
                deleteBtn.addEventListener("click", (e) => {
                    e.stopPropagation();
                    deleteTask(task.id);
                });

                li.appendChild(deleteBtn);
                taskList.appendChild(li);
            }
        });
    }

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === "") {
            alert("Task cannot be empty!");
            return;
        }

        const newTask = {
            id: Date.now(),
            text: taskText,
            completed: false
        };

        tasks.push(newTask);
        saveTasks();
        renderTasks();
        taskInput.value = "";
    }

    // Function to toggle completion status
    function toggleTaskCompletion(id) {
        tasks = tasks.map(task =>
            task.id === id ? { ...task, completed: !task.completed } : task
        );
        saveTasks();
        renderTasks();
    }

    // Function to delete a task
    function deleteTask(id) {
        tasks = tasks.filter(task => task.id !== id);
        saveTasks();
        renderTasks();
    }

    // Function to save tasks to localStorage
    function saveTasks() {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    // Event listeners
    addTaskBtn.addEventListener("click", addTask);
    searchTask.addEventListener("input", (e) => renderTasks(e.target.value));

    // Initial render
    renderTasks();
});
