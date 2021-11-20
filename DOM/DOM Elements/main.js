// document.write("Hello");

// var headingNodes = document.getElementsByClassName("heading")

// console.log(headingNodes);

// -------------------------------------------------------------------------------------------------------------------------

// var headingNode = document.getElementById("heading")

// console.log(headingNode)

// -------------------------------------------------------------------------------------------------------------------------

// lấy khi có 1 thẻ

// var headingNodess = document.querySelector(".heading-2") 

// console.log(headingNodess)

// có nhiều thẻ

// thẻ đầu tiên

// var headingNodess = document.querySelector(".box .heading-2:first-child")

// console.log(headingNodess)

// từ thẻ thứ 2

// var headingNodess = document.querySelector(".box .heading-2:nth-child(2) ")

// console.log(headingNodess)

// -------------------------------------------------------------------------------------------------------------------------

// querySelector 
var checkboxNodes = document.querySelectorAll("input[type='checkbox']");

console.log(checkboxNodes)
const checkbox1Element= document.querySelector("input[type='checkbox'][value='1']");
const checkboxCheckedAndNotDisabled= document.querySelector("input[type='checkbox'][checked]:not([disabled])");
const checkboxDisabledAndNotChecked= document.querySelector('input[disabled]:not([checked])');
const checkboxCheckedAndDisabled =document.querySelector('input[checked][disabled]');

// ------------------------------------------------------------------------------------------------------------------

// innerHTML to add Element into Element

// document.querySelector('#heading').innerHTML = `
//     <p class="heading">hihi</p>
//     thịnh`;

// outerHTML to add Element outo Element

// document.querySelectorAll('.heading')[1].outerHTML = `
// <a href="#">kaka</a>
// Văn`;

// ------------------------------------------------------------------------------------------------------------------

// cách tìm properties

var heading = document.querySelector('#heading');
console.log([heading]);

// ------------------------------------------------------------------------------------------------------------------
 
// DOM css

Object.assign(heading.style, {
    width: '300px',
    height: '200px',
    backgroundColor: 'violet',
})

console.log(heading.style.cssText)

// ------------------------------------------------------------------------------------------------------------------

// DOM classList

heading.classList.add('while', 'green');

heading.classList.remove('while');

setInterval(() => {
    heading.classList.toggle('blue');
}, 500);

// ------------------------------------------------------------------------------------------------------------------

// tùy trường hợp mà nên sử dụng DOM event hay event listener

// DOM events - làm những việc đơn giản và không cần dừng xóa event

// c1: viết lên trức tiếp Element

// c2: Assign event using the Elenment Node

var classHeading = document.querySelectorAll('.heading');

for (var i = 0; i < classHeading.length; i++) {
    classHeading[i].oncopy = function(e) {
        console.log(e.target)
    }
}

// ------------------------------------------------------------------------------------------------------------------

// DOM events to get value input / select Element

var valueInput; 

var inputTextElement = document.querySelector('input[type="text"]');

inputTextElement.oninput = function(e) {
    valueInput = e.target.value;
}

console.log('value:' + valueInput)

inputTextElement.onchange = function(e) {
    console.log(valueInput);
}

document.querySelector('body > input[type="checkbox"]').onchange = function(e) {
    console.log(e.target.checked);
}

document.querySelector('select').onchange = function(e) {
    console.log(e.target.value);
}

// DOM events sử dụng giá trị bàn phím

// keyup, keydown, keypress
inputTextElement.onkeyup = function(e) {
    // console.log(e.which)  // cách lấy giá trị bàn phím

    switch (e.which) {
        case 27:
            console.log('Bạn vừa nhấn phím Esc');
            break;
    }
}

document.onkeyup = function(e) {
    switch (e.which) {
        case 27:
            console.log('Bạn vừa nhấn phím Esc');
            break;
    }
}

// DOM events chặn sự kiện

// Chặn sự kiện mặc định

var find = document.querySelector('.find ul');

find.onmousedown = function(e) {
    e.preventDefault();
}

find.onclick = function(e) {
    console.log(e.target)
}

// chặn sự kiện nổi bọt

document.querySelector('.DIV').onclick = function(e) {
    console.log('DIV');
}

var clickMe = document.querySelector('div > button'); 

clickMe.onclick = function(e) {
    e.stopPropagation();
    console.log('CLICK ME!');
}

// ------------------------------------------------------------------------------------------------------------------

// Event listener - làm nhiều việc phức tạp và có thế xóa event (dễ dàng thêm hoạc bớt event)

var headingClass3 = document.querySelectorAll('.heading')[2]

function viec1() {
    console.log('viec1');
}

function viec2() {
    console.log('viec2');
}

function viec3() {
    alert('Sau 10s sẽ tự động đóng viec2!');
}

headingClass3.addEventListener('click', viec1);
headingClass3.addEventListener('click', viec2);
headingClass3.addEventListener('click', viec3);

setTimeout(function() {
    headingClass3.removeEventListener('click', viec2);
    headingClass3.removeEventListener('click', viec3);
}, 10000)


