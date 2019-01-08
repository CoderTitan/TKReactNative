

// 1. 解构函数
function breakfast(dessert, drink, {name, age} = {}) {
    console.log(dessert)
    console.log(drink)
    console.log(name, age)
}


breakfast('面包', '水果', {name: 'jun', age: 25})
breakfast('面包', '水果')


/// 函数的名字
function person(argument) {}
console.log(person.name)

let p = function person1 (argument) {}
console.log(p.name)

// 匿名函数
let per = function (argument) {}
console.log(per.name)




/// 箭头函数






















