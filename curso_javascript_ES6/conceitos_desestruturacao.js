const user = {
    name: "Lucas",
    age: 23,
    address: {
        city: "Ceilandia",
        state: "DF"
    }
};

function showName({name, age}){
    console.log(name, age);
}

showName(user);

const {address: {city,state}} = user;

console.log(city);
console.log(state);