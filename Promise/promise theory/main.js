// sync - đồng bộ
// async - bất đồng bộ
// promise sinh ra để khắc phục async - bất đồng bộ (hay còn gọi là callback hell)

// cách tạo promise
// 1. tạo new Promise
// 2. tạo Excutor trong constructer

var promise = new Promise(function(resolve, reject) {
    // logic
    // thành công: resolve()
    // thất bại: reject()
    resolve('thành công!');
})

// trạng thái của promise
// 1. Pendding - chờ
// 2. Fulfilled - thành công
// 3. Rejected - thất bại

promise
    .then(function(status) {
        console.log(status)
    })

    .catch(function() {
        console.log('thất bại!')
    })

    .finally(function() {
        console.log('hoàn thành!')
    })


// vd về promise
function sleep(ms) {
    return new Promise(function(resolve, reject) {
        setTimeout(resolve, ms);
    })
}

sleep(1000)
    .then(function() {
        console.log(1);
        return sleep(1000);
    })
    .then(function() {
        console.log(2);
        return sleep(1000);
    })
    .then(function() {
        console.log(3);
        return new Promise(function(resolve, reject) {
            reject('error');
        });
    })
    // khi catch viết tại đây thì dòng then sẽ vẫn đc chạy theo promise sleep.
    // .catch(function(err) {
    //     console.log(err);
    // })  
    .then(function() {
        console.log(4);
        return sleep(1000);
    })
    .catch(function(err) {
        console.log(err);
    })

// các phương thức của promise

// phương thức resolve
Promise.resolve('success!')
    .then(function(resolveStatus) {
        console.log(resolveStatus);
    })

// phương thức reject
Promise.reject('fail!')
    .catch(function(rejectStatus) {
        console.log(rejectStatus)
    })

// phương thức all

var promise3 = Promise.resolve('Thịnh')
var promise4 = Promise.resolve('Văn')
Promise.all([promise3, promise4])
    .then(function(result) {
        var result1 = result[0];
        var result2 = result[1];
        console.log(`${result1} ${result2}`)
    })