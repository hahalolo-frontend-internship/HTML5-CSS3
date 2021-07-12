const obj = {a:1,b:2,c:{d:3}};
const deepClone = JSON.parse(JSON.stringify(obj));
console.log(deepClone); // {a:1,b:2,c:{d:3}};



const arr = [1,2,[3,4],5]

const shallowClone = [...arr];
arr[1] = 22;
arr[2][1] = 34; // thay đổi giá trị thứ 2 của array gốc
console.log(arr); // kết quả cho chúng ta thấy [ 1, 22, 34, 5 ]
console.log(shallowClone); // nhưng array mà chúng ta clone ra không bị thay đổi theo [ 1, 2, [ 3, 4 ], 5 ]






let color1 = "red";
let color2 = color1;

console.log(color1); // "red"
console.log(color2); // "red"

color2 = "blue";

console.log(color1); // "blue"
console.log(color2); // "red"