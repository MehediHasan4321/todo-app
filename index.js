//Selector
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-btn");
const todoList = document.querySelector(".todo-list")

//Event listner
todoButton.addEventListener("click", todoAdd)
//Functions
function todoAdd(event) {
    event.preventDefault()
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //todo li
    const newTodo = document.createElement("li");
    newTodo.classList.add("todo-item")
    newTodo.innerText = todoInput.value;
    const completBtn = document.createElement("button");
    completBtn.classList.add("complet-btn");
    completBtn.innerHTML= '<i class="fa-solid fa-check"></i>';
    const trushBtn = document.createElement("button");
    trushBtn.innerHTML='<i class="fa-solid fa-trash"></i>';
    trushBtn.classList.add("trush-btn");
    newTodo.appendChild(completBtn);
    newTodo.appendChild(trushBtn);
    todoDiv.appendChild(newTodo);
    todoList.appendChild(todoDiv)
    todoInput.value = ""
}