// let and const
console.group('let and const')
// - var / let, const: scope and hosting
// scope
{
    var string = 'init by var'
    let string2 = 'init by let'
    const string3 = 'init by const'
    // const string3 = 'init by const' - không chạy được 
    {
        const string3 = 'init by const in loop'
        console.log([string2, string3])
    }
}
// console.log([string2, string3]) - không chạy

// hosting
var a = 1;
// khi trình duyệt đọc sẽ đọc là: var a -> a = 1

let b = 1;
// khi trình duyệt đọc sẽ đọc theo thứ tự từ trên xuống   
// --------------------------------------------------------

// - const / var, let: assignment
// const sẽ không thể gán giá trị lần thứ 2 

// ngoại lệ
const list = {
    name: 'thịnh'
}
list.name = 'hải'
console.log(list)

// -----------------------------------------------------------------------------------------------------------------------------

// template string - giữ nguyên kết cấu của dữ liệu khi nhập

// -----------------------------------------------------------------------------------------------------------------------------

// arrow function - dùng cho Expression function mang ý nghĩ return
{
const oneArgument = course => console.log(course) // có 1 đối số
const sum1 = (a, b) => a + b; // có 2 đối số
const sum2 = (a, b) => ({a: a, b : b}) // khí có obj

// khi dùng được khi this ở bên trong function => không thể tạo construct function
}
console.groupEnd()
// -----------------------------------------------------------------------------------------------------------------------------

// class
console.group('Class')
{
class Course {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    getName() {
        return this.name;
    }
    getPrice() {
        return this.price;
    }
}

const jsCourse = new Course('Javascript', 1000)
const PHPCourse = new Course('PHP', 2000)

console.log([
    jsCourse,
    PHPCourse
])
}
console.groupEnd()
// -----------------------------------------------------------------------------------------------------------------------------

// default parameter values
console.group('Default parameter values')
{function log(para, value = 'log') {
    console[value](para);
}

log('Mesage...')
}

console.groupEnd()
// -----------------------------------------------------------------------------------------------------------------------------

// Enhanced object literals
console.group('Enhanced object literals')
// định nghĩa key: value cho object
{
    var nameE = 'nameE'
    var priceE = 'priceE'
    var numberLessons = 'numberLessons';

    var courseE = {
        nameE,
        priceE,
        getName() {
            return nameE
        }, // định nghĩa function trong obj
        [numberLessons]: 30 // định nghĩa key
    };
}

console.log(courseE)

console.groupEnd()
// -----------------------------------------------------------------------------------------------------------------------------

// Destructuring and rest parameters có thể dùng để xóa obj (trick)
console.group('Destructuring and rest parameters')
// array
var array = [
    'js',
    'PHP',
    'Python'
]

{
    let [array1, array2, array3] = array;

    console.log(array1, array2, array3);
} // destructuring

{
    let [array1, ...rest] = array;
    console.log(rest);
} // rest

// object
var object = {
    name: 'js',
    price: 1000,
    image: 'image-address',
    newName : {
        name: 'PHP'
    }
}

{
    let {name: nameParent, price, image, newName:{name: nameChilren}, numberLessons = '30'} = object;
    console.log(nameChilren)
    console.log(numberLessons)
} // destructuring

{
    let {name, image, ...rest} = object;
    console.log(rest)
} // rest

// rest is a parameter function
{
function log({name, price, ...rest}) {
    console.log(name)
    console.log(rest)
}

log({
    name: 'js',
    price: 'Price',
    description: 'Description content'
})
}
console.groupEnd()

// -----------------------------------------------------------------------------------------------------------------------------

// Spread
console.group('Spread')

{
    let array = ['JS', 'PHP', 'Python', 'Ruby']
    function logger(a, ...params) {
        for(var i = 0; i < params.length; i++) {
            console.log(params[i])
        }
    }
    logger(...array)
}

console.groupEnd()

// -----------------------------------------------------------------------------------------------------------------------------

// Tags template literals
console.group('Tags template literals')

{
    function hightlicht([first, ...strings], ...values) {
        return values.reduce(
            (acc, curr) => [...acc, `<span>${curr}</span>`, strings.shift()]
        , [first]).join()
    }

    let course = 'Javascript';
    let address = 'F8'
    console.log(hightlicht`Học lập trình ${course} tại ${address}!`)
}

console.groupEnd()

// -----------------------------------------------------------------------------------------------------------------------------

// Modules
console.group('Modules')

import logger from './logger/index.js';
{
    logger('Message...')
}

import {
    type_log,
    type_warn,
    type_error
} from './constains.js'

import * as constants from './constains.js'
{
    logger('Message...', constants.type_error)
    console.log(constants)
}

console.groupEnd()

// -----------------------------------------------------------------------------------------------------------------------------

// Optionals chaining
console.group('Optionals chaining')

{
    const adventurer = {
        name: 'Alice',
        cat1: {
            name: 'Dinah 1',
            // cat2: {
            //     name: 'Dinah 2',
            //     cat3: {
            //         name: 'Dinah 3'
            //     }
            // }
        }
    };
    // Theo cách thông thường khi không chắc chắn có cat2 hoặc không có cat 3
    
    if(adventurer.cat1 && adventurer.cat1.cat2 && adventurer.cat1.cat2.cat3) {
        console.log(adventurer.cat1.cat2.cat3.name)
    }

    // Optionals chaining -> giảm thiểu số lượng code
    if(adventurer.cat1?.cat2?.cat3) {
        console.log(adventurer.cat1.cat2.cat3.name)
    }
}
