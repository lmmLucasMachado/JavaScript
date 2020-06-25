var idade = parseInt(prompt('Digite sua idade: '));

function checaIdade(idade) {
    // Retornar uma promise
    return new Promise(function(resolve,reject){
        if (idade > 18 ) {
            resolve();
        }else {
            reject();
        }
    })
}

checaIdade(idade)
.then(
    setTimeout(
        function() {  
            console.log("Maior que 18");
        },2000 
    )
)
.catch(
    setTimeout(
        function() {
            console.log("Menor que 18");
        },2000
    )
);