
//seleccionando elementos

const input = document.querySelector("input")

const form = document.querySelector("form")

const toDos = document.querySelector(".todo-container")


form.addEventListener("submit", addTodo)
function addTodo(e) {
    e.preventDefault();
    const {value} = e.target.task;
    if(!value) return;
    const task = document.createElement('div');
    task.classList.add('task')
    task.addEventListener('click', changeTaskState)
    task.textContent = value;
    toDos.prepend(task);
    e.target.reset();

}

function changeTaskState(e){
    e.target.classList.toggle('done')
}