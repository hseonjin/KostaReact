let user = { id: 1, name: "hong", age: 30 };
let user2 = user; // 얕은 복사
let user3 = { ...user }; // 원래 없는 값을 넣으면 추가, 있는 값을 넣으면 변경
user.name = "song";

let user4 = { ...user, age: 40 };

console.log(user);
console.log(user2);
console.log(user3);
// 셋 모두 동일 값

console.log(user4);
