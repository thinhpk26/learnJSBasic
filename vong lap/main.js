// toan tu 3 ngoi
var course = {
    name: 'Javascript',
    coin: 13
}
var result = course.coin > 0 ? `${course.coin} Coin` : 'Mien Phi';

console.log(result)

// lay phan tu trong mang
console.log('')

var myArray = [
    'javascript',
    'PHP',
    'Java',
    'Dart',
    'Ruby',
    'Python'
]

var myArraylenth = myArray.length;

for (var i = 0; i < myArraylenth; i++) {
    console.log(myArray[i]);
}

// for/in loop
console.log('for/in loop')

var myInfo = {
    name: 'Van Thinh',
    address: 'Bac Ninh',
    age: 18
}

console.log(myInfo.name)

for (var key in myInfo) {
    console.log(myInfo[key])
}
var ten = myInfo.name;
for (var key in ten) {
    console.log(ten[key])
}

// for/of loop

console.log('for/of loop')

var languages = [
    'javascript',
    'java',
    'ruby'
]

for (var value of languages) {
    console.log(value);
}

// lấy giá trị trong object bằng for/of
// chuyển object về array vì for/of chỉ chạy array 

var keys = Object.keys(myInfo)

for(var key of keys) {
    console.log(myInfo[key]);
}


var values = Object.values(myInfo)

for (var value of values) {
    console.log(value);
}

// vòng lặp lồng nhau - Nested loop

var myArray1 = [
    [1,2],
    [3,4],
    [5,6]
]

var length1 = myArray1.length;

for (var i = 0; i < length1; i++) {
    for (var j = 0; j < myArray1[i].length; j++) {
        console.log(myArray1[i][j])
    }
}
