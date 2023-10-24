class User {
  constructor(name) {
    // 클래스의 생성자 -> 파라미터를 가지고 올 수 있음
    this.name = name; // this가 붙지 않으면 지역변수로써의 역할
  }

  sayHello() {
    console.log(`hello!, ${this.name}`);
  }
}

let user = new User("hong");
user.sayHello();
