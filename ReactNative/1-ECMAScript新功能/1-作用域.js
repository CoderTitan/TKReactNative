
/** 1.
 * var只能声明一个变量，这个变量可以保存任何数据类型的值, 全局变量
 * ES6中还新增了let关键字来声明变量，作用与var相似，但其所声明的变量只在声明所在块内有效, 局部变量
 * 恒量: const
 * * */

// 1. var
if (true) {
    var a = "titanjaun"
}

console.log(a)



// let
/**
if (true) {
    let a = "titanjaun"
}

 // 这里打印会报错
 console.log(a)
 * */



// const
const arr = []
arr.push('1')
arr.push('2')
console.log(arr)
// 不可重新分配
// arr = [1]
console.log(arr)

















