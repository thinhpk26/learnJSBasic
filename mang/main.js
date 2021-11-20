// tao mang
var languages = [
    'Javascript',
    'PHP',
    'Ruby',
    'Dart',
]

// console.log(typeof languages);

// cach xac dinh array or object
// console.log(Array.isArray(languages))

// truy xuat mang
// console.log(languages[3]);

//  console.log(languages.toString())
//  console.log(languages.join(', '))

// xóa element cuối mảng và trả về chính nó
// console.log(languages.pop())

// thêm vào cuối mảng
// console.log(languages.push('C++', 'Java'))

// xóa phần tử đầu tiên và trả về
// console.log(languages.shift())

// thêm vào đầu mảng
// console.log(languages.unshift('Java'))

// splice - cắt nhưng ko trả về
// console.log(languages.splice(3, 0, 'Java'))

// var languages2 = [
//     'Java',
//     'Pyphon'
// ]

// // nối mảng
// console.log(languages2.concat(languages))

// slice - cắt rồi trả về
// console.log(languages.slice(3, 4))

/**
 * Array method
    forEach()
    every()
    some()
    find()
    filter()
    map()
    reduce()
 */

var myschedules = [
    {
        name: 'basketball',
        address: 'C4',
        teacher: 'Đào Duy Tân'
    },
    {
        name: 'Kỹ thuật lập trình',
        address: 'C1',
        teacher: 'Vũ Việt Thắng'
    },
    {
        name: 'Vật Lý',
        address: 'C1',
        teacher: 'Nguyễn Quang Thành'
    },
    {
        name: 'Kỹ năng giao tiếp',
        address: 'C1',
        teacher: 'Phí Công Mạnh'
    }
]
// forEach()

languages.forEach(function(myschedule, index) {
    console.log(myschedule)
}) 

// every()

var isSuccess1 = myschedules.every(function(myschedule, index) {
    return myschedule.address === 'C1';
})

console.log(isSuccess1)

// some()

var isSuccess2 = myschedules.some(function(myschedule, index) {
    return myschedule.address === 'C4';
})

console.log(isSuccess2);

// find()

var isSuccess3 = myschedules.find(function(myschedule, index) {
    return myschedule.address == 'C1';
})

console.log(isSuccess3)

// filter()

var isSuccess4 = myschedules.filter(function(myschedule, index) {
    return myschedule.address  == 'C1';
})

console.log(isSuccess4)

// map()

var handler = function(myschedule, index) {
    return {
        name: myschedule.name,
        address: `Nhà ${myschedule.address}`,
        teacher: `Thầy ${myschedule.teacher}`,
        Tin_chi: 2
    }
}

var newSchedule = myschedules.map(handler);

console.log(newSchedule)

// reduce()

var sumOftin_chi = newSchedule.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue.Tin_chi;
}, 0)

console.log(sumOftin_chi)

// VD về reduce()

var topics = [
    {
        topic: 'Front-end',
        course: [
            {
                id: 1,
                title: "HTML, CSS"
            },
            {
                id: 2,
                title: 'Javascript'
            }
        ]
    },
    {
        topic: 'Back-end',
        course: [
            {
                id: 1,
                title: "PHP"
            },
            {
                id: 2,
                title: 'NodeJS'
            }
        ]
    }
]

var newCourse = topics.reduce(function(course, topic, index) {
    if (index == 0) {
        return course.concat(topic.course[0])
    }
    else{
        return course.concat(topic.course[1])
    }
}, [])

console.log(newCourse)

// include() kiểm tra có tồn tại hay không giá trị - chỉ dùng trong string hoặc array 


console.log(topics[0].course[0].title.includes('HTML'))

