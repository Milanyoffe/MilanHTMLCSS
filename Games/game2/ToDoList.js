
document.getElementById('addTaskBtn').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        addTask(taskText);
        taskInput.value = "";
    }
});

function addTask(taskText) {
    const taskList = document.getElementById('taskList');

    const li = document.createElement('li');
    li.textContent = taskText;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'מחק';
    deleteBtn.addEventListener('click', function() {
        taskList.removeChild(li);
    });

    li.addEventListener('click', function() {
        li.classList.toggle('completed');
    });

    li.appendChild(deleteBtn);
    taskList.appendChild(li);
}