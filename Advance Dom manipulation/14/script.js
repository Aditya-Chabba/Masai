const addTaskButton = document.getElementById('addTask');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

addTaskButton.onclick = function () {
  const taskText = taskInput.value.trim();
  if (taskText === "") return; // Prevent adding empty tasks

  const newTask = document.createElement('li');
  newTask.textContent = taskText; // Safer than innerHTML
  taskList.appendChild(newTask); // Use appendChild()

  taskInput.value = ""; // Clear input after adding a task
};

taskList.onclick = function (e) {
  if (e.target.tagName === 'LI') { // Corrected condition
    e.target.remove();
  }
};
