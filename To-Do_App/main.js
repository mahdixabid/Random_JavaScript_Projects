let input = document.getElementById("input")
let add = document.getElementById("add")
let taskDiv = document.getElementById("tasks")

var ArrayData = []
if(window.localStorage.getItem('tasks')) {
    var ArrayData = JSON.parse(localStorage.getItem('tasks'));
}

showData()


add.addEventListener('click', function () {
    if (input.value != "") {
        NewTask(input.value);
        input.value = ""
    }
    else {
        alert("input is empty")
    }
})

function NewTask(taskText) {
    const task = {
        id: Date.now(),
        title: taskText,
        completed: false
    };
    //Push Task 
    ArrayData.push(task);
    AddTasks(ArrayData);

    //Local Storage Save
    saveData(ArrayData)
}

function AddTasks(e) {
    taskDiv.innerHTML = "";
    e.forEach(function (task) {
        let Element = document.createElement("div")
        Element.className = 'task';
        Element.setAttribute("data-id", task.id)
        Element.textContent = task.title
        taskDiv.appendChild(Element)
        let span = document.createElement("span");
        span.className = 'del'
        span.appendChild(document.createTextNode("❌"))
        Element.appendChild(span)
    })
}
function saveData(ArrayData) {
    window.localStorage.setItem("tasks", JSON.stringify(ArrayData))
}
 function showData() {
     let savedData = window.localStorage.getItem('tasks');
     if (savedData) {
         let tasks = JSON.parse(savedData);
         AddTasks(tasks);
     }
 }