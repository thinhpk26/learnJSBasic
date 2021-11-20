var users = [
    {
        id: 1,
        name: 'Văn Thịnh'
    },
    {
        id: 2,
        name: 'Văn Sơn'
    },
    {
        id:4,
        name:'Văn Sơn'
    }
]

var comments = [
    {
        id: 1,
        id_user: 1,
        content: 'Bạn Sơn học khóa HTML trên trang f8 chưa ?' 
    },
    {
        id: 2,
        id_user: 2,
        content: 'Mình đang học này :)'
    },
    {
        id: 3,
        id_user: 1,
        content: 'Mình đang học đến phần làm shoppee đó'
    },
    {
        id: 4,
        id_user: 4,
        content: 'Hihi'
    }
]

// 1. Lấy comments
// 2. Lấy user_id của comment
// 3. lấy ra user tương ứng với user_id

// FAKE API

// function getComments() {
//     return new Promise(function(resolve) {
//         setTimeout(function() {
//             resolve(comments);
//         }, 1000);  
//     });
// };

// function getUsersByIDs(userIDs) {
//     return new Promise(function(resolve) {
//         var result = users.filter(function(user) {
//             return userIDs.includes(user.id);
//         });
//         setTimeout(function() {
//             resolve(result);
//         }, 1000);
//     });
// };

// getComments()
//     .then(function(comments) {
//         var userIDs = comments.reduce(function(accamulator, currentValue) {
//             return accamulator.concat(currentValue.id_user)
//         }, [])
//         return getUsersByIDs(userIDs)
//             .then(function(users) {
//                 return {
//                     users: users,
//                     comments: comments
//                 };
//             })
//     })
//     .then(function(data) {
//         var commentBlock = document.querySelector('.block');
//         var html = '';
//         data.comments.forEach(function(comment) {
//             var users = data.users.find(function(user) {
//                 return user.id === comment.id_user; 
//             })
//             html += `<li>${users.name}: ${comment.content}</li>`;
//         })
//         commentBlock.innerHTML = html;
//     })

// var getComments = function() {
//     return new Promise(function(resolve) {
//         setTimeout(function() {
//             resolve(comments);
//         }, 1000);
//     });
// };

// var getUsersByIDs = function(userIDs) {
//     return new Promise(function(resolve) {
//         var result = users.filter(function(user) {
//             return userIDs.includes(user.id)
//         })
//         setTimeout(function() {
//             resolve(result);
//         }, 1000)
//     })
// }

// getComments()
//     .then(function(comments) {
//         var user_id = comments.map(function(comment) {
//             return comment.id_user;
//         })
//         return getUsersByIDs(user_id)
//             .then(function(users) {
//                 return {
//                     users: users,
//                     comments: comments
//                 }
//             })
//     })
//     .then(function(data) {
//         var commentBlock = document.querySelector('ul');
//         var html = '';
//         data.comments.forEach(function(comment) {
//             var user_id = data.users.find(function(user) {
//                 return user.id === comment.id_user;
//             })
//             html += `<li>${user_id.name}: ${comment.content}</li>`
//         })
//         commentBlock.innerHTML = html;
//     })


var getComments = function() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve(comments)
        }, 1000)
    })
}

var getUsersByIDs = function(users_id) {
    var result = users.filter(function(user) {
        return users_id.includes(user.id);
    })
    return new Promise(function(resolve) {
        resolve(result)
    }, 1000)
}

getComments() 
    .then(function(comments) {
        var user_id = comments.map(function(comment) {
            return comment.id_user;
        })
        return getUsersByIDs(user_id)
            .then(function(users) {
                return {
                    users: users,
                    comments: comments
                }
            })
    })
    .then(function(data) {
        var html = '';
        data.comments.forEach(function(comment) {
            var user_id = data.users.find(function(user) {
                return user.id === comment.id_user;
            })
            html += `<li>${user_id.name}: ${comment.content}`
        })
        var commentBlock = document.querySelector('.block')
        commentBlock.innerHTML = html;
    })

