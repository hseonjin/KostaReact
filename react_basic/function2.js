// function형 컴포넌트에 메소드를 넣는건 멤버를 넣는것과 같아
function Person(name, age) {
  this.name = name;
  this.age = age;

  this.info = function () {
    // 익명의 function을 만들어 변수에 담아 사용하는 방법
    // 화살표 함수를 사용하는 경우 this.info = () => {}
    return `이름: ${this.name}, 나이: ${this.age}`;
  };
}

let person = new Person("hong", 20);
console.log(person.info());
