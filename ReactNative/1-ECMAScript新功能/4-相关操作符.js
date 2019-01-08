
/// ...展开操作符
let arr = [1, 2, 3, 4],
    arr1 = [6, 7, ...arr]


console.log(arr)
// 输出数组中的每一个元素
console.log(...arr)
console.log(arr1)


/// ...剩余操作符
//others: 是一个数组
function person1(name, age, ...others) {
    console.log(name, age, others)
}

person1('jun', 25, 90.09, 'mine')

