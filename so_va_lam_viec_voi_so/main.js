var age = 18;
var PI = 3.14;

// kiem tra data type
// console.log(typeof age);

// kiem tra so khong hop le
// var result = 20 / 'ABC';
// console.log(isNaN(result));

// bien doi sang string
// console.log(age.toString())

// lam tron so
// console.log(PI.toFixed(1))

// kiểm tra số nguyên 

// console.log(Number.isInteger(PI));

// kiểm tra dữ liệu xem có phải số ko

// console.log(Number.isNaN(age))

// Làm bài tập tại đây
function run(input) {
    if(typeof input == 'string' && input.includes('F8')) {
        return true;
    }
    if(Array.isArray(input) && input.includes('F8')) {
        return true;
    }
    return false;
}

console.log(run('Học lập trình tại f8'))