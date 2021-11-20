/**
 * Object
 
 */

var emailKey = 'email';

var myInfo = {
    'full-name': 'Nguyen Van Thinh',
    age: 18,
    address: 'Bac Ninh, VN',
    [emailKey]: 'thinhpk26@gmail.com',
    getName: function() {
        return this['full-name'];
    }
};

// thêm phần tử object
// myInfo['my email'] = 'thinhpk26@gmail.com';

// goi ra object
// console.log(myInfo);

// goi ra 1 phan tu trong object
// console.log(myInfo["full-name"])

// lay 1 phan tu trong object thong qua bien ben ngoai 
// var myKey = 'address';
// console.log(myInfo[myKey]);

// xoa phan tu trong 1 object
// delete myInfo.address;

// goi phan tu function
// console.log(myInfo.getName())

// function --> phương thức / method
// object --> thuộc tính / property






// // cach tao object construction

// function User(fistName, lastName, avatar) {
//     this.firstName = fistName;
//     this.lastName = lastName;
//     this.avatar = avatar;
//     this.getName = function(){
//         return `${this.lastName} ${this.firstName}`
//     }
// }

// thêm vào toàn bộ các user 
// User.prototype.className = 'Cntt1';
// User.prototype['getClassname'] = function() {
//     return this.className;
// }

// var author = new User('Son', 'Van', 'Avatar 1');
// var user = new User('Thinh', 'Van', 'Avatar 2');

// thêm vào từng cá nhân trong user
// author.title = 'Cac khoa day';
// user.comment = 'Khoa nay bao nhieu a';

// console.log(author.className);
// console.log(user.getClassname());

// // doi tuong Date

// var date = new Date();

// var year = date.getFullYear();
// var month = date.getMonth() + 1;
// var day = date.getDate();

// console.log(`${day}/${month}/${year}`);

// tim them tai: Javascript date object mozilla

// math object

console.log(Math.PI)

console.log(Math.round(4.56)) // làm tròn

console.log(Math.abs(-4)) // trị tuyệt đối

console.log(Math.ceil(4.0000001)) // làm tròn trên

console.log(Math.floor(4.99999)) // làm tròn dưới

console.log(Math.random() * 2) // ngẫu nhiên

console.log(Math.min(3, 6, 8, 45, 34)) // số bé nhất

console.log(Math.max(3, 6, 8, 45, 34)) // số lớn nhất

// random theo tỉ lệ

var random = Math.floor(Math.random() * 100)

if (random < 50) {
    console.log('Thành công') // tỉ lệ 50 %
}

