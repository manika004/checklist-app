let tasks = [];

// load tasks when page opens
window.onload = function () {
    let savedTasks = localStorage.getItem("tasks");

    if (savedTasks) {
        tasks = JSON.parse(savedTasks);
        tasks.forEach(task => displayTask(task));
    }
};

function addTask() {

    let input = document.getElementById("taskInput");
    let task = input.value;

    if (task === "") {
        alert("Enter a task");
        return;
    }

    tasks.push(task);

    localStorage.setItem("tasks", JSON.stringify(tasks));

    displayTask(task);

    input.value = "";
}

function displayTask(task) {

    let li = document.createElement("li");
    li.textContent = task;

    // cross out task
    li.onclick = function () {
        li.style.textDecoration = "line-through";
    };

    document.getElementById("taskList").appendChild(li);
}

function clearTasks(){

    document.getElementById("taskList").innerHTML = "";

    tasks = [];

    localStorage.removeItem("tasks");
}