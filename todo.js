// selector
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
 const filterOption = document.querySelector('.filter-todo')
//add event listner
document.addEventListener("DOMContentLoaded",getTodos)
todoButton.addEventListener('click',Todo);
todoList.addEventListener('click',deleteCheck)
filterOption.addEventListener('click',filterTodo)
//function 
function Todo(event){

    event.preventDefault();
    //todo div
    
    const todoDiv = document.createElement('div')
    todoDiv.classList.add('todo')
    //create li 
    const newTodo = document.createElement('li')
    newTodo.innerText = todoInput.value
    newTodo.classList.add('todo-item')
    todoDiv.appendChild(newTodo)
    saveLocalTodo(todoInput.value)
    todoInput.value= '' ;
    //create check mark 
    const compeletedButton = document.createElement('button')
    compeletedButton.innerHTML ='<i>compeleted</i>';
    compeletedButton.classList.add('compelete-btn')
    todoDiv.appendChild(compeletedButton)
    // delete button 
    const deleteButton = document.createElement('button')
    deleteButton.innerHTML ='<i> deleted</i>'
    deleteButton.classList.add('delete-btn')
    todoDiv.appendChild(deleteButton)
    todoList.appendChild(todoDiv)
    
}

function deleteCheck(e){
    let item = e.target
    console.log(item)
    if(item.classList[0] == 'delete-btn'){
       const memory=  item.parentElement; 
       removeLocalTodos(memory)
        memory.remove(); 
    }
    let item1= e.target

    if(item1.classList[0] == 'compelete-btn'){
        const memory1=  item1.parentElement;
        memory1.classList.toggle('compelete')
        
     }

}

function filterTodo(e){
    const todos= todoList.childNodes;
    todos.forEach(function(todo){
        switch(e.target.value){
            case "all":
                todo.style.display = 'flex';
                break;
               case "compeleted":
                if(todo.classList.contains('compelete')){
                    todo.style.display = 'flex';
                }else{
                    todo.style.display = 'none';
                }
                break;
                case'Incompeleted':
                if(!todo.classList.contains('compelete')){
                    todo.style.display = 'flex';
                }else{
                    todo.style.display = 'none';
                }


        }
    })
}

function saveLocalTodo(todo){
    let todos;
    if(localStorage.getItem("todos")=== null){
        todos = []
    }else{
        todos= JSON.parse(localStorage.getItem("todos"))
    }
    todos.push(todo);
 localStorage.setItem("todos",JSON.stringify(todos))   
}


function getTodos(){
    let todos;
    if(localStorage.getItem("todos")=== null){
        todos = []
    }else{
        todos= JSON.parse(localStorage.getItem("todos"))
    }
    todos.forEach(function(todo){
        const todoDiv = document.createElement('div')
        todoDiv.classList.add('todo')
        //create li 
        const newTodo = document.createElement('li')
        newTodo.innerText = todo
        newTodo.classList.add('todo-item')
        todoDiv.appendChild(newTodo)
        
        todoInput.value= '' ;
        //create check mark 
        const compeletedButton = document.createElement('button')
        compeletedButton.innerHTML ='<i>compeleted</i>';
        compeletedButton.classList.add('compelete-btn')
        todoDiv.appendChild(compeletedButton)
        // delete button 
        const deleteButton = document.createElement('button')
        deleteButton.innerHTML ='<i> deleted</i>'
        deleteButton.classList.add('delete-btn')
        todoDiv.appendChild(deleteButton)
        todoList.appendChild(todoDiv) 
    })
    

}

function removeLocalTodos(todo){
//check local storage todo is already there or not 
let todos;
    if(localStorage.getItem("todos")=== null){
        todos = []
    }else{
        todos= JSON.parse(localStorage.getItem("todos"))
    }
    const todoInbdex= todo.children[0].innerText;
    console.log(todo.children[0].innerText)
    todos.splice(todoInbdex.parentElement,1)
    localStorage.removeItem(todoInbdex)
    localStorage.setItem("todos",JSON.stringify(todos)) 
     

}








