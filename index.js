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
    const para = document.createElement("p");
    para.innerText= todoInput.value;
    para.classList.add("todo-text")
    todoDiv.appendChild(para)
    //todo li
    const newTodo = document.createElement("li");
    newTodo.classList.add("todo-item")

    const completBtn = document.createElement("button");
    completBtn.innerHTML= '<i class="fa-solid fa-check"></i>';
    completBtn.classList.add("complet-btn");

    const trushBtn = document.createElement("button");
    trushBtn.innerHTML='<i class="fa-solid fa-trash"></i>';
    trushBtn.classList.add("trush-btn");
    
    newTodo.appendChild(completBtn);
    newTodo.appendChild(trushBtn);
    todoDiv.appendChild(newTodo);
    todoList.appendChild(todoDiv)
    todoInput.value = ""
}