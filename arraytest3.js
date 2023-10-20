let arr = ["사과", "오렌지", "바나나"];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

for (let f of arr) {
  console.log(f);
}

// for~in 루프 : 원래 객체를 위한 것
for (let idx in arr) {
  console.log(arr[idx]);
}

// 테스트
let info = { name: "hong", age: 30, nickname: "honghong" };
for (let key in info) {
  // info에 올 아이가 객체를 위한 용도로 사용됨
  console.log(key, info[key]);
}
