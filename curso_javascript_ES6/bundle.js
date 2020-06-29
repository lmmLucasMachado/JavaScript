"use strict";

var array = [1, 3, 4, 5, 7, 8, 10];
var newArrayDobroItem = array.map(function (item) {
  return item * 2;
});
console.log(newArrayDobroItem);
var newArrayMaisPosicao = array.map(function (item, index) {
  return item + index;
});
console.log(newArrayMaisPosicao);
var sum = array.reduce(function (item, next) {
  return item + next;
});
console.log(sum);
var filter = array.filter(function (item) {
  return item % 2 === 0;
});
console.log(filter);
var find = array.find(function (item) {
  return item == 4;
});
console.log(find);
var user = {
  name: "Lucas",
  age: 23,
  address: {
    city: "Ceilandia",
    state: "DF"
  }
};

function showName(_ref) {
  var name = _ref.name,
      age = _ref.age;
  console.log(name, age);
}

showName(user);
var _user$address = user.address,
    city = _user$address.city,
    state = _user$address.state;
console.log(city);
console.log(state);
