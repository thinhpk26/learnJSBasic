// JSON là 1 định dạng dữ liệu

// biểu diễn trong js là string 

// kiểu number, null, boolen viết trong dấu nháy đơn; kiểu string viết thêm nháy kép 

// JSON bao gồm: null, number, boolen, string, array, object

// stringify: chuyển từ js -> JSON

var js = [
    'name',
    'class',
    'age'
];

console.log(JSON.stringify(js));

// parse: chuyển từ JSON -> js

var json2 = '"abc"'

var json = '{"name": "Thịnh Văn","age": 18}';

console.log(JSON.parse(json));