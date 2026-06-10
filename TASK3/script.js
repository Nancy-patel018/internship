const pendingList = document.getElementById("pendingList");
const completedList = document.getElementById("completedList");

function addTask() {

    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if(taskText === ""){
        alert("Enter a task");
        return;
    }

    const li = document.createElement("li");

    const addedTime = new Date().toLocaleString();

    li.innerHTML = `
        <div class="task-text">${taskText}</div>
        <div class="time">Added: ${addedTime}</div>

        <div class="actions">
            <button class="complete" onclick="completeTask(this)">
                Complete
            </button>

            <button class="edit" onclick="editTask(this)">
                Edit
            </button>

            <button class="delete" onclick="deleteTask(this)">
                Delete
            </button>
        </div>
    `;

    pendingList.appendChild(li);

    taskInput.value = "";
}

function completeTask(button){

    const task = button.parentElement.parentElement;

    const completedTime = document.createElement("div");

    completedTime.classList.add("time");

    completedTime.textContent =
        "Completed: " + new Date().toLocaleString();

    task.appendChild(completedTime);

    button.remove();

    completedList.appendChild(task);
}

function editTask(button){

    const task =
        button.parentElement.parentElement.querySelector(".task-text");

    const newTask =
        prompt("Edit Task:", task.textContent);

    if(newTask !== null && newTask.trim() !== ""){
        task.textContent = newTask;
    }
}

function deleteTask(button){

    const task = button.parentElement.parentElement;

    task.remove();
}