// 1. Front-End: xây dựng giao diện người dùng
// 2. Back-End: Xây dựng logic xử lí + cơ sở dữ liệu

// API -> Application Programming Interface

// Back-End -> API -> Fetch -> JSON/XML -> JSON.parse -> JAvascript types -> Render ra giao diện người dùng bằng HTML

// Fetch

var postApi = 'https://jsonplaceholder.typicode.com/posts'

fetch(postApi)
    .then(function(response) {
        return response.json();
        // JSON.parse();
    })
    .then(function(posts) {
        var postsBlock = document.querySelector('.posts-block');
        var htmls = posts.map(function(post, index) {
            return `<ul>
            <h3>Number: ${index + 1}</h3>
            <li>Body: ${post.body}</li>
            <li>ID: ${post.id}</li>
            <li>Title: ${post.title}</li>
            <li>UserID: ${post.userId}</li>
            </ul>`
        })
        var html = htmls.join('');
        postsBlock.innerHTML = html;
    })
    .catch(function() {
        alert('Có lỗi!')
    })

// Fake API / Mock API
// Các giao thức giao thức:
// 1. Create -> tạo dữ liệu mới
// 2. GET -> lấy dữ liệu
// 3. PUT / PATCH -> sửa dữ liệu
// 4. DELETE -> xóa dữ liệu
// ====> Sử dụng công cụ postman để làm hành động này


fetch('http://localhost:3000/course')
    .then(function(response) {
        return response.json()
    })
    .then(function(result) {
        console.log(result)
    })

// 