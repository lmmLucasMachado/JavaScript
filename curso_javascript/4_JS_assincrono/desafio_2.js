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

function loadRepos(){
    var loadElement = document.createElement("li");
    var loadtext = document.createTextNode("Carregando ...");
    
    loadElement.appendChild(loadtext);
    listElement.appendChild(loadElement);

}

renderUsers();

function adduserGit(){
    var userGit = inputElement.value;
    
    inputElement.value = "";
        
    axios.get('https://api.github.com/users/'+userGit+'/repos')
    
    .then(function(response){
        loadRepos();
        setTimeout(
            function(){
                for (resp of response.data){
                    console.log(resp.name);
                    reposGit.push(resp.name);
                }
                renderUsers();
            },1000
        )
        console.log (reposGit);
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

