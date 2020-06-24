var listElement = document.querySelector("#app ul");
var inputElement = document.querySelector("#app input");
var buttonElement = document.querySelector("#app button");

var todos = JSON.parse(localStorage.getItem('listTodos')) || [];

function renderTodos(){
    listElement.innerHTML = '';
    for(todo of todos){
        var todoElement = document.createElement("li");
        var todoText = document.createTextNode(todo);

        var linkElement = document.createElement("a");
        var linkText = document.createTextNode("Excluir");

        linkElement.appendChild(linkText);
        linkElement.setAttribute("href", "#");
        
        var pos = todos.indexOf(todo);
        linkElement.setAttribute("onclick","deleteTodos("+pos+")");

        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);
        listElement.appendChild(todoElement);
    }
}

renderTodos();

function addTodo(){
    var textTodo = inputElement.value;
    
    todos.push(textTodo);
    inputElement.value='';

    renderTodos();
    saveStorage();
}

buttonElement.onclick = addTodo;

function deleteTodos(pos){
    todos.splice(pos,1);

    renderTodos();
    saveStorage();
}

function saveStorage(){
    localStorage.setItem('listTodos', JSON.stringify(todos));
}