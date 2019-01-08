

/// 对于数组
function breakFast() {
    return [1, 2, 3]
}


// 常用的取值和赋值
var temp = breakFast()
let num1 = temp[0], num2 = temp[1], num3 = temp[2]
console.log(num1, num2, num3)


/// 使用结构语法
let [a1, a2, a3] = breakFast()
console.log(a1, a2, a3)




/// 对于字典
function dict() {
    return {name: 'titan', age: 18, source: 90.89}
}


let {name: name, age: age, source: source} = dict()
console.log(name, age, source)



/// 模板字符串
let str1 = 'titan', str2 = 'jun'
let str = '我的域名是: ' + str1 + str2 + '.top'
console.log(str)

// 字符半满样式, 注意这里不是'', 而是``
let string0 = `https://${str1}${str2}.top`
let string1 = `https://
${str1}
${str2}.top`
console.log(string1)


/// 带标签的模板字符串: blog即为标签
let string3 = blog`https://${str1}+${str2}.top`

// 其中strings: 模板字符串中原有的部分, values: ${}里面的部分, 两者都是数组形式
function blog(strings, ...values) {
    console.log(strings)
    console.log(values)

    let result = ''
    for (var i = 0; i < values.length; i++) {
        result += strings[i]
        result += values[i]
    }

    result += strings[strings.length - 1]
    return result
}

console.log(string3)


/// 判断字符串是否包含其他字符串
let word = 'Hello world!'
//返回布尔值，表示是否找到了参数字符串
console.log(word.includes('ll'))
//返回布尔值，表示参数字符串是否在源字符串的头部
console.log(word.startsWith('l'))
//返回布尔值，表示参数字符串是否在源字符串的尾部
console.log(word.endsWith('!'))



















