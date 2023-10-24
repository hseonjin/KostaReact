// 생성자 함수 (function 역할을 하면서 생성자의 역할도 하는 것)
// 생성자 함수는 대문자로 시작하며, 반드시 new 연산자를 붙여 실행한다.
function User(name) {
  this.name = name;
  this.isAdmin = false;
  // return this; // this가 암묵적으로 반환됨
}

let user = new User("hong");
console.log(user);
console.log(user.isAdmin);
