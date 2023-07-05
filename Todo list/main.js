let todoInput = document.querySelector("input");
let submit = document.querySelector(".submit").addEventListener("click" , todoList);
let ul = document.querySelector(".todo");
ul.addEventListener("click" , completedTodo);





function todoList(event){
    event.preventDefault();

    const listDiv = document.createElement("div");
    listDiv.classList.add("listDiv");

    const li = document.createElement("li");
    li.classList.add("todo-li");
    li.innerText = todoInput.value;
    listDiv.appendChild(li);
    SetLocal(todoInput.value);
    todoInput.value = "";


    const trash = document.createElement("button");
    trash.classList.add("trashbutton");
    trash.innerHTML = '<i class="fa fa-trash"></i>'
    listDiv.appendChild(trash);

    const check = document.createElement("button");
    check.classList.add("checkbutton");
    check.innerHTML = '<i class="fa fa-check"></i>';
    listDiv.appendChild(check);

    ul.appendChild(listDiv);


}

function SetLocal(data){
    let todos;
    if(localStorage.getItem("todos") === null){
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(data);
    localStorage.setItem("todos" , JSON.stringify(todos));
}

function getLocal(){
    let todos;
    if(localStorage.getItem("todos") === null){
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem("todos"));
    };
    todos.forEach(function(todo){
        const listDiv = document.createElement("div");
        listDiv.classList.add("listDiv");

        const li = document.createElement("li");
        li.classList.add("todo-li");
        li.innerText = todo;
        listDiv.appendChild(li);

        const trash = document.createElement("button");
        trash.classList.add("trashbutton");
        trash.innerHTML = '<i class="fa fa-trash"></i>'
        listDiv.appendChild(trash);

        const check = document.createElement("button");
        check.classList.add("checkbutton");
        check.innerHTML = '<i class="fa fa-check"></i>';
        listDiv.appendChild(check);

        ul.appendChild(listDiv);  
    })
}

function removeLocal(todo){
    let todos;
    if (localStorage.getItem("todos") === null){
        todos = [];
    }else{
      todos = JSON.parse(localStorage.getItem("todos"));
    };
    const todoindex = todo.children[0].innerText; 
    todos.splice(todos.indexOf(todoindex), 1);
    localStorage.setItem("todos",JSON.stringify(todo));
}

function completedTodo(event){
    const item = event.target;
    if(item.classList[0] === "checkbutton"){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
    if(item.classList[1] == "fa-trash"){
        const todo = item.parentElement.parentElement;
        removeLocal(todo);
        todo.remove();
    }
}
getLocal();