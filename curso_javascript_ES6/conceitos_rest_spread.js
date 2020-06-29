// REST
const user = {
    name: "Lucas",
    age: 23,
    address: {
        city: "Ceilandia",
        state: "DF"
    }
};

const {name, ...resto} = user;

console.log(name);
console.log(resto);

const array = [1,2,4,8];

const [a, b, ...c]= array;

console.log(a);
console.log(b);
console.log(c);

function soma(...params){
    return params.reduce((total,next) => total + next);
}

console.log(soma(2,3,37));

//SPREAD

const array1 = [1,2,3];
const array2 = [4,5,6];

const array3 = [...array1, ...array2];

console.log(array3);

const user1 = {
    name: "Lucas",
    curso: "engenharia de software",
    empresa: "TCU"
};

const user2 = {...user1, name:"Eduardo"};

console.log(user2);
