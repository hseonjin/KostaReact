class Clock {
  constructor({ template }) {
    // 객체를 받아서 사용할 때 {}
    this.template = template;
  }

  render() {
    // 날짜 불러오기
    // let date = new Date();
    // let year = date.getFullYear();
    // if (year < 10) year = "0" + year;
    // let month = date.getMonth() + 1; // month는 0부터 시작됨
    // if (month < 10) month = "0" + month;
    // let day = date.getDay();
    // if (day < 10) day = "0" + day;
    // let output = this.template
    //   .replace("y", year)
    //   .replace("m", month)
    //   .replace("d", day);
    // console.log(output);

    // 시간 불러오기
    let date = new Date();
    let hour = date.getHours();
    if (hour < 10) hour = "0" + hour;
    let minute = date.getMinutes();
    if (minute < 10) minute = "0" + minute;
    let second = date.getSeconds();
    if (second < 10) second = "0" + second;
    let output = this.template
      .replace("h", hour)
      .replace("m", minute)
      .replace("s", second);
    console.log(output);
  }
  start() {
    this.render();
    this.timer = setInterval(() => this.render(), 1000); // 해당초마다 첫 매개변수에 있는 함수를 호출시켜줌
  }

  stop() {
    clearInterval(this.timer);
  }
}

// let clock = new Clock({ template: "y-m-d" });
// clock.render();

let clock = new Clock({ template: "h-m-s" });
clock.start(); // 실행하고
setTimeout(() => clock.stop(), 10000); // 10초 후에 stop 메소드를 실행하도록 설정

// 시간 -> 메소드가 3개 (render, stop, start)
