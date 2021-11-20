// thêm attrtribute hợp lệ với từng thẻ

var headingElement = document.getElementsByTagName('h1')[0];

headingElement.title = 'heading';

console.log(headingElement);

//  thêm attribute không cần hợp lệ với thẻ

headingElement.setAttribute('href', 'heading')

// lấy giá trị của attribute

console.log(headingElement.getAttribute('href'))

// không chạy khi chọc vào attribute không hợp lệ

console.log(headingElement.href) // <- VD


var f8LinkElement = document.querySelector('a[href="https://f8.edu.vn/"]');

console.log(f8LinkElement)

var f8ShortLink = f8LinkElement.getAttribute('href');

document.getElementsByTagName('a')[1].setAttribute('href', `${f8ShortLink}`);

document.getElementsByTagName('div')[0].setAttribute('dta-url', `${f8ShortLink}`)