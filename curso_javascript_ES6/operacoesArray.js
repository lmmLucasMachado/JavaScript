const array = [1,3,4,5,7,8,10];

//Arrow function
/*
const newArrayDobroItem = array.map(function(item){
    return item *2
})
é similar a função abaixo
*/
const newArrayDobroItem = array.map(item => item * 2 )

console.log(newArrayDobroItem)

const newArrayMaisPosicao = array.map(function(item,index){
    return item + index;
})

console.log(newArrayMaisPosicao);

const sum = array.reduce(function(item,next){
    return item + next;
})

console.log(sum);

const filter = array.filter(function(item){
    return item % 2 === 0;
})
console.log(filter);

const find = array.find(function(item){
    return item == 4;
})

console.log(find);

