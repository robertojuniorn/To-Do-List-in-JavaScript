
const btn = document.getElementById("btn");
const inputList = document.getElementById("dados");
const listaCompleta = document.querySelector('.list-tasks')

const taskList = []

function insertTasks (){
    taskList.push(inputList.value)

    inputList.value = ""
    showTask()
}

function showTask (){
    let novaLi = ""

    taskList.forEach(task => {
        novaLi = novaLi + `
        <li class="task">
        <p>${task}</p>
        </li>
        `
    })
    listaCompleta.innerHTML = novaLi
}

btn.addEventListener('click', insertTasks)