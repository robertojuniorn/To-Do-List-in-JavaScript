
const btn = document.getElementById("btn");
const inputList = document.getElementById("dados");
const listaCompleta = document.querySelector('.list-tasks')


const taskList = []

// This funtion insert the task in taskList Array

function insertTasks (){
    taskList.push(inputList.value)

    inputList.value = ""
    showTask()
}

// This function show the task

function showTask (){
    let novaLi = ""

    taskList.forEach(task => {
        novaLi = novaLi + `
        <li class="task">
        <i class='bx bxs-check-circle'></i>
        <p>${task}</p>
        <i class='bx bxs-trash' ></i>
        </li>
        `
    })
    listaCompleta.innerHTML = novaLi
}

btn.addEventListener('click', insertTasks)