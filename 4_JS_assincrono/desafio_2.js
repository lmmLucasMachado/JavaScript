var bodyElement= document.querySelector("body");

var inputElement = document.createElement("input");
var buttonElement = document.createElement("button");
var listElement = document.createElement("ul");

inputElement.setAttribute('type', 'text');
inputElement.setAttribute('name', 'user');

var textButton = document.createTextNode("pesquisar");

buttonElement.appendChild(textButton);

bodyElement.appendChild(inputElement);
bodyElement.appendChild(buttonElement);
bodyElement.appendChild(listElement);

var reposGit = JSON.parse(localStorage.getItem('listTodos')) || [];

function renderUsers(){
    listElement.innerHTML = '';
    for(userGit of reposGit){
        var userGitElement = document.createElement("li");
        var userGitText = document.createTextNode(userGit);
        
        userGitElement.appendChild(userGitText);
        listElement.appendChild(userGitElement);
    }
}

renderUsers();

function adduserGit(){
    var userGit = inputElement.value;
    
    inputElement.value = "";
        
    axios.get('https://api.github.com/users/'+userGit+'/repos')
    
    .then(function(response){
        console.log(response);
    })
    .catch(function(error){
        alert("nome de usuário não encotrado")
    })
    
    renderUsers();
    saveStorage();
}

buttonElement.onclick = adduserGit;

function saveStorage(){
    localStorage.setItem('listreposGit', JSON.stringify(reposGit));
}