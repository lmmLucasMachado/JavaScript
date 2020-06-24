var myPromisse = function(){
    return new Promise(function (resolve,reject){
        var xhr = new XMLHttpRequest();
        
        xhr.open('Get', 'https://api.github.com/users/lmmlucasMachado');
        xhr.send(null);
        
        xhr.onreadystatechange = function(){
            if (xhr.readyState == 4 ){
                if (xhr.status == 200){
                    resolve(JSON.parse(xhr.responseText));
                }else{
                    reject('Erro na requisição.');
                }  
            }
        }

    });
};

myPromisse()
    .then(function(response){
        console.log(response);
    })
    .catch(function(error){
        console.warn(error);
});