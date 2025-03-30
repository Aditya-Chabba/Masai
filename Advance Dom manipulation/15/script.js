const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

const totalCount = document.getElementById("totalCount");
const completedCount = document.getElementById("completedCount");
const incompleteCount = document.getElementById("incompleteCount");

const showAll = document.getElementById("showAll");
const showCompleted = document.getElementById("showCompleted");
const showIncomplete = document.getElementById("showIncomplete");
const sortTasks = document.getElementById("sortTasks");

let tasks = [];

// Function to update task list
function updateUI(filter = "all") {
  taskList.innerHTML = "";

  let filteredTasks = tasks;
  if (filter === "completed") {
    filteredTasks = tasks.filter(task => task.completed);
  } else if (filter === "incomplete") {
    filteredTasks = tasks.filter(task => !task.completed);
  }

  filteredTasks.forEach(task => {
    const li = document.createElement("li");
    li.dataset.id = task.id;
    li.className = task.completed ? "completed" : "";

    li.innerHTML = `
      <input type="checkbox" class="toggle" ${task.completed ? "checked" : ""}>
      <span>${task.text}</span>
      <button class="delete-btn">X</button>
    `;

    taskList.appendChild(li);
  });

  totalCount.textContent = tasks.length;
  completedCount.textContent = tasks.filter(task => task.completed).length;
  incompleteCount.textContent = tasks.filter(task => !task.completed).length;
}

// Add Task
addTaskButton.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  tasks.push({ id: Date.now(), text: taskText, completed: false });
  taskInput.value = "";
  updateUI();
});

// Event Delegation (Delete & Toggle)
taskList.addEventListener("click", (e) => {
  const parentLi = e.target.closest("li");
  if (!parentLi) return;

  const taskId = parseInt(parentLi.dataset.id);

  if (e.target.classList.contains("delete-btn")) {
    tasks = tasks.filter(task => task.id !== taskId);
  } else if (e.target.classList.contains("toggle")) {
    tasks = tasks.map(task =>
      task.id === taskId ? { ...task, completed: e.target.checked } : task
    );
  }

  updateUI();
});

// Filtering
showAll.addEventListener("click", () => updateUI("all"));
showCompleted.addEventListener("click", () => updateUI("completed"));
showIncomplete.addEventListener("click", () => updateUI("incomplete"));

// Sorting Tasks
sortTasks.addEventListener("click", () => {
  tasks.sort((a, b) => a.text.localeCompare(b.text));
  updateUI();
});
