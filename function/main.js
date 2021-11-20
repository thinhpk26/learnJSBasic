// cach tao ham
// function showDialog() {
//     alert('Hi xin chao cac ban!');
// }
// showDialog();

// truyen tham so
// function writeLog(message) {
//     console.log(message);
// }

// writeLog('HEllO');

// Doi tuong arguments
// function writeLog() {
//     console.log(arguments);
// }

// writeLog('Log 1', 'Log 2', 'log 3');

// vong for trong ham
// function writeLog() {
//     var myString = '';
//     for(var bebe of arguments) {
//         myString += `${bebe} - `
//     }
//     console.log(myString)
// }

// writeLog('Log 1', 'Log 2', 'log 3');

// return trong ham
// function cong(a, b) {
//     return a+b;
// }

// var result = cong(2, 8);

// console.log(result)

/**
 * Declaration function
 function ShowMessage() {
    console.log('Declaration function');
 }
 * Expression function
 var ShowMessage2 = function() {
    console.log('Expression function');
 }
 */

//  callback

// function myFunction(param) {
//    param('123')
// }

// function myCallback(value) {
//    console.log('Value: ', value);
// }

// myFunction(myCallback)

// tạo hàm forEach()

var languages = [
   'Javascript',
   'PHP',
   'Ruby',
   'Dart',
]

languages.length = 1000;

Array.prototype.forEach2 = function(callBack) {
   for (var i in this) {
      if (this.hasOwnProperty(i)) {
         callBack(this[i]);
      }
   }
}

languages.forEach2(function(language) {
   console.log(language)
})

// tạo hàm find()

var mySchedules = [
   {
       name: 'basketball',
       address: 'C4',
       teacher: 'Đào Duy Tân',
       tin_chi: 2
   },
   {
       name: 'Kỹ thuật lập trình',
       address: 'C1',
       teacher: 'Vũ Việt Thắng',
       tin_chi: 2
   },
   {
       name: 'Vật Lý',
       address: 'C1',
       tin_chi: 2,
       teacher: 'Nguyễn Quang Thành'
   },
   {
       name: 'Kỹ năng giao tiếp',
       address: 'C1',
       tin_chi: 2,
       teacher: 'Phí Công Mạnh'
   }
]

Array.prototype.find2 = function(callback) {
   for (var index in this) {
      if (callback(this[index]) && this.hasOwnProperty(index)) {
         return this[index]
      }
   }
   
}

var find2 = mySchedules.find2(function(initial, index) {
   return initial.address == 'C1';
})
console.log(find2);

// tạo hàm every()

Array.prototype.every2 = function(callback) {
   for (var index in this) {
      if(this.hasOwnProperty(index)) {
         var result = callback(this[index]);
         if(!result) {
            return false;
         }
      }
   }
   return true;
}

var every2 = mySchedules.every2(function(initial, index) {
   return initial.address == 'C1';
})

console.log(every2);

// tạo hàm reduce()

Array.prototype.reduce2 = function(callBack, firstInititial) {
   for(var index in this) {
      if (this.hasOwnProperty(index)) {
         var result = callBack(firstInititial, this[index])
         firstInititial += this[index].tin_chi;
      }
   }
   return result;
}

var reduce2 = mySchedules.reduce2(function(accumulator, initial) {
   return accumulator + initial.tin_chi;
}, 0)

console.log(reduce2)

// tạo hàm some()

Array.prototype.some2 = function(callback) {
   for (var i in this) {
      if (this.hasOwnProperty(i)) {
         if(callback(this[i])) {
            return true;
         }
      }
      }
      
   return false;
}

var some2 = mySchedules.some2(function(initial) {
   return initial.address == 'C1';
})

console.log(some2)

// tạo hàm filter

Array.prototype.find2 = function(callback) {
   var result = [];
   for (var index in this) {
      if (callback(this[index]) && this.hasOwnProperty(index)) {
         result.push(this[index])
      }
   }
   return result;
}

var find2 = mySchedules.find2(function(initial, index) {
   return initial.address == 'C1';
})
console.log(find2);  