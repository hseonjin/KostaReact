let fruits = ["banana"];
let arr = fruits; // 배열 복시
fruits.push("orange"); // orange 추가
console.log(fruits); // [ 'banana', 'orange' ]
console.log(arr); // [ 'banana', 'orange' ]
console.log(arr == fruits); // 하나의 객체를 참조하고 있어 true값 출력

let carr = [...fruits]; // ... 전개연산자 : 가져온 데이터를 변경인지하도록 하기 위함 (배열의 깊은 복사)
console.log(fruits);
console.log(carr);
console.log(carr == fruits); // false

fruits.push("strawberry");
console.log(fruits); // [ 'banana', 'orange', 'strawberry' ]
console.log(carr); // [ 'banana', 'orange' ]
console.log(carr == fruits);
