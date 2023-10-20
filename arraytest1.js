let arr = [10, 20, 30, 40];
console.log(arr.length);
// delete arr[1]; // 결과 [ 10, <1 empty item>, 30, 40 ]
arr.splice(1, 1); // 결과 [ 10, 30, 40 ] *splice(인덱스, 개수) 배열의 특정 요소 삭제
console.log(arr);
console.log(arr.length);

arr.splice(1, 2, 100, 200); // 결과 [ 10, 100, 200 ] * 1번째부터 2개 삭제 후 100, 200 삽입
console.log(arr);

// 10, 100, 300, 400, 200으로 만들기
arr.splice(2, 0, 300, 400);
console.log(arr);

// slice(시작인덱스, 끝인덱스) : 배열의 부분 요소 가져오기 (마지막 인덱스틑 포함되지 않음)
let narr = [10, 20, 30, 40, 50, 60, 70, 80];
let subarr = narr.slice(2, 5);
console.log(narr);
console.log(subarr);

// concat
let arr2 = [1, 2];
let totarr = arr2.concat(3, 4);
console.log(arr2); // [ 1, 2 ]
console.log(totarr); // [ 1, 2, 3, 4 ]

let totarr2 = arr2.concat([3, 4]);
console.log(totarr2); // [ 1, 2, 3, 4 ]

let arr3 = [10, 20];
let totarr3 = arr2.concat(arr3);
console.log(totarr3); // [ 1, 2, 10, 20 ]

let totarr4 = arr2.concat(3, 4, [5, 6], arr3);
console.log(totarr4); // [ 1, 2, 3, 4, 5, 6, 10, 20 ]
