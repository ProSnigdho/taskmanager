// Select DOM elements
const taskInput = document.getElementById('task');
const addTaskButton = document.getElementById('addTask');
const taskList = document.getElementById('taskList');

// Function to add a new task
addTaskButton.addEventListener('click', function() {
  const taskText = taskInput.value.trim();
  if (taskText !== '') {
    const newTask = createTaskElement(taskText);
    taskList.appendChild(newTask);
    taskInput.value = ''; // Clear the input field
  }
});

// Function to create a new task element
function createTaskElement(taskText) {
  const li = document.createElement('li');
  
  // Create the task content
  const taskContent = document.createElement('span');
  taskContent.textContent = taskText;
  li.appendChild(taskContent);
  
  // Create the complete button
  const completeButton = document.createElement('button');
  completeButton.textContent = 'Complete';
  completeButton.addEventListener('click', function() {
    li.classList.toggle('completed');
  });
  li.appendChild(completeButton);
  
  // Create the delete button
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.addEventListener('click', function() {
    li.remove();
  });
  li.appendChild(deleteButton);
  
  return li;
}
