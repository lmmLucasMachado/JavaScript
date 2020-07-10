class App{
    constructor(){
        this.repositories = [];

        this.formRepo = document.getElementById("repo-form");

        this.registerRepo();
    }

    registerRepo(){
        this.formRepo.onsubmit = event => this.addRepository(event);
        addRepository(event);
    }
    
    addRepository(){
        event.preventDefault();

        this.repositories.push({
            name: 'Rocketseat.com.br',
            description:'Tire a sua ideia do papel e de vida a uma startup',
            avatar_url:'https://avatars0.githubusercontent.com/u/28929274?s=400&v=4',
            html_url:'http://https://github.com/Rocketseat '
        })
    
        console.log(repositories);
    }
}

App();
