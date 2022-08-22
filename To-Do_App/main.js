console.clear()
let input = document.getElementById("input")
let add = document.getElementById("add")
let taskDiv = document.getElementById("tasks")
let delAll = document.getElementById('deleteAll')
var ArrayData = []
if (window.localStorage.getItem('tasks')) {
    var ArrayData = JSON.parse(localStorage.getItem('tasks'));
    delAll.style.display="block"
}
delAll.addEventListener('click', function(){
    var check;
    if (confirm("Are you sure you want to delete all data ?")) {
      window.localStorage.clear();
      location.reload();
    }
})
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
// Update & Delete
taskDiv.addEventListener('click', function (e) {
    // Delete element from localstorage
    deleteData(e.target.parentElement.getAttribute("data-id"));
    // Delete element from the page 
    if (e.target.classList.contains("del")) {
        e.target.parentElement.remove()
    }
    // Done tasks
    if (e.target.classList.contains("task")) {
        toggleStatus(e.target.getAttribute("data-id"));
        e.target.classList.toggle('done')
    }
    //Update Element
    // if(e.target.classList.contains("task")) {
    //     var update = add
    //     update.value = "Update"
    //     input.value = e.target.innerText
    //     update.addEventListener('click', function(){
    //          UpdateData(input.value)
    //     })
    // }
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
    location.reload()
}
function AddTasks(e) {
    taskDiv.innerHTML = "";
    e.forEach(function (task) {
        let Element = document.createElement("div")
        Element.className = 'task';
        if (task.completed) {
            Element.className = "task done"
        }
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
function deleteData(elementID) {
    // checking ids of elements
    // for (let i = 0; i < ArrayData.length; i++) {
    //     if (el === storageData) {
    //         console.log(storageData)
    //     }
    // }
    ArrayData = ArrayData.filter((task) => task.id != elementID);
    saveData(ArrayData)
    location.reload()
}
function toggleStatus(elementID) {
    for (let i = 0; i < ArrayData.length; i++) {
        if(ArrayData[i].id == elementID) {
            ArrayData[i].completed == false ? (ArrayData[i].completed = true) : (ArrayData[i].completed = false)
        }
    }
    saveData(ArrayData)
}