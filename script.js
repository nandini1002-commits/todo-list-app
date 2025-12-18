function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    if (taskInput.value.trim() === "") {
        alert("Please enter a task");
        return;
    }

    const li = document.createElement("li");
    li.textContent = taskInput.value;

    li.onclick = function () {
        taskList.removeChild(li);
    };

    taskList.appendChild(li);
    taskInput.value = "";
}
