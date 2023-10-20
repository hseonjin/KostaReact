let arr = ["사과", "오렌지", "바나나"];

arr.forEach(function (item, index, array) {
  console.log(`${item}, ${index}, ${array}`);
});

// 결과
// 사과, 0, 사과,오렌지,바나나
// 오렌지, 1, 사과,오렌지,바나나
// 바나나, 2, 사과,오렌지,바나나

let users = [
  { id: 1, name: "Jone", age: 15 },
  { id: 2, name: "Pete", age: 20 },
  { id: 3, name: "Mary", age: 23 },
  { id: 4, name: "Mary", age: 40 },
];
// find: 조건을 만족하는 데이터를 찾는다
let user = users.find(function (item) {
  // console.log(item.id, item.name);
  // return item.id == 1;
  return item.name == "Mary"; // 만약 동일한 이름이 있다? -> 하나만 찾아온다
});

// filter : 조건을 만족하는 데이터들을 (여러개일 때) 찾는다
let user2 = users.filter(function (item) {
  return item.name == "Mary";
});

// 20세 이상인 사람 걸러내기
// 화살표 함수 사용하는 방법
// let up20 = users.filter(item) => {}
let up20 = users.filter(function (item) {
  return item.age >= 20 && item.age < 30;
});

// 나이 한 살씩 더 먹어
let usersp = users.map((item) => {
  item.age++;
  return item;
});

// 배열의 원본이 바뀜 (정렬)
users.sort((item1, item2) => {
  // return item2.age - item1.age; // 나이비교
  return item1.name.localeCompare(item2.name); // 이름 비교
});

// console.log(user); // { id: 3, name: 'Mary' } Object type
// console.log(user2); // [ { id: 3, name: 'Mary' }, { id: 4, name: 'Mary' } ] Array type
// console.log(up20);
// console.log(usersp);
console.log(users);

// 여기서 백틱으로 했을 때랑 그냥 출력할 때의 차이?
