var bodyElement= document.querySelector("body");

var inputElement = document.createElement("input");
var buttonElement = document.createElement("button");

inputElement.setAttribute('type', 'text');
inputElement.setAttribute('name', 'user');

var textButton = document.createTextNode("pesquisar");

buttonElement.appendChild(textButton);

bodyElement.appendChild(inputElement);
bodyElement.appendChild(buttonElement);

buttonElement.onclick = function pesquisaGit(){
    var userGit = inputElement.value;

    axios.get('https://api.github.com/users/'+userGit)
    
        .then(function(response){
            console.log();
        })
        .catch(function(error){
            console.warn(error);
        })
    inputElement.value = "";
}

