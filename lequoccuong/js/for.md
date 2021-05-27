# FOR

## 1. `For in`

- Lặp qua từng key(index) trong 1 object, mảng, hay string.

```js
let myInfo = {
  name: "cuong",
  age: 18,
};
for (let key in myInfo) {
  // lấy giá trị của key bằng cách myInfo[key]
  console.log(`${key}: ${myInfo[key]}`);
}
```

## 2. `For of`

- Lặp qua từng value trong 1 mảng, string, không lặp được object.
- Muốn lặp được object thì phải dùng `Object.keys(object`) hoặc `Object.values(object)`.

```js
let myInfo = {
  name: "cuong",
  age: 17,
};
for (const value of Object.keys(myInfo)) {
  console.log(`${value}: ${myInfo[value]}`);
}
for (const value of Object.values(myInfo)) {
  console.log(value);
}
```

## 3. `ForEach`

- Duyệt qua từng phần tử của mảng
- forEach nhận vào tham số là 1 function.
- Trong function nhận vào 2 tham số là value và index

```js
let myInfo = ["a", "b", "c"];
myInfo.forEach((element, index) => {
  console.log(index, element);
});
```

- Ví dụ lặp object

```js
let myInfo = [{ name: "cuong" }, { name: "xanh" }];
myInfo.forEach((element, index) => {
  console.log(element.name, index);
});
```

## 4. `Every()`

- Lặp qua tất cả các phần tử và kiểm tra điều kiện.
- Nếu 1 phần tử không thỏa mãn điều kiện thì sẽ trả về false, nếu tất cả các phần tử đều thỏa mãn thì sẽ trả về true.

```js
let myNumber = [{ number: 1 }, { number: 2 }, { number: 3 }, { number: 0 }];
let result = myNumber.every(function (a, index) {
  console.log(index);
  return a.number > 0;
});
console.log(result);
```

## 5. `some()`

- Lặp qua tất cả các phần tử và kiểm tra điều kiện.
- Nếu 1 phần tử thỏa mãn điều kiện thì sẽ trả về true, nếu tất cả các phần tử đều không thỏa mãn thì sẽ trả về false.

```js
let myNumber = [{ number: 1 }, { number: 2 }, { number: 3 }, { number: 0 }];
let result = myNumber.some(function (a, index) {
  console.log(index);
  return a.number > 0;
});
console.log(result);
```

## 6. Tìm kiếm - `find()`

- Trả về 1 đối tượng.
- Tìm phần tử trong mảng và trả về phần tử đó khi tìm thấy.
- Trả về `undefined` nếu không tìm thấy.
- Nó chỉ trả về phần tử tìm thấy đầu tiên, nếu trong mảng có nhiều phần tử cần tìm thì chỉ trả về phần tử đầu tiên.

```js
let myNumber = [{ number: 1 }, { number: 2 }, { number: 0 }, { number: 0 }];
let result = myNumber.find(function (a, index) {
  console.log(index);
  return a.number == 1;
});
console.log(result);
```

## 7. `filter()`

- Tương tự `find()` nhưng nó trả về tất cả phần tử tìm thấy.
- Nếu không tìm thấy sẽ trả về mảng rỗng.

```js
let myNumber = [{ number: 1 }, { number: 2 }, { number: 0 }, { number: 0 }];
let result = myNumber.filter(function (a, index) {
  return a.number == 30;
});
console.log(result);
```

## 8. Tìm kiếm - `indexOf()`

- Nhận vào 2 tham số:
  - Tham số 1: là chuỗi cần tìm.
  - Tham số 2: là vị trí bắt đầu tìm.
- Tìm vị trí trí index của 1 ký tự trong 1 chuỗi.
- Trả về vị trí đầu tiên trong chuỗi có được.
- Nếu không thấy sẽ trả về là `-1`
- Tìm vị trí của mảng và chuỗi

```javascript
let myString = "Hello world";
console.log(myString.indexOf("o "));
```

## 9. Tìm kiếm - `include()`

- Nhận vào 2 tham số:
  - Tham số 1: là chuỗi/mảng cần tìm.
  - Tham số 2: là vị trí bắt đầu tìm.
- Tương tự indexOf.
- Giá trị trả về là boolean.

```js
let myString = [1, 23, 4, 6, 7, 7];
console.log(myString.includes(7));
```

## 10. `map()`

- Thay đổi giá trị của các phần tử của mảng.
- Trả về 1 mảng có số phần tử bằng với phần tử của mảng ban đầu.
- function trong `map()` return về cái gì thì mảng mới sẽ là cái đó.

```js
let myInfo = [
  { name: "hoa", age: 18 },
  { name: "xanh", age: 22 },
  { name: "bao", age: 22 },
];
let newInfo = myInfo.map((a) => {
  return {
    name: a.name,
    age: a.age + 1,
  };
});
console.log(newInfo);
```

![kết quả](https://scontent.xx.fbcdn.net/v/t1.15752-9/190696109_825278998372372_4056451281812292306_n.png?_nc_cat=109&ccb=1-3&_nc_sid=58c789&_nc_ohc=Zr3KFu7UxQ0AX-roVQE&_nc_oc=AQl5oeJFFOmCL5kz64JSzbn5BS2c9mO5sq__leS_TkZ2kqYsLJK1P7wXieU2sMOLCH-5zBxg1LFJb_QlezwZ0qja&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=584920f19425b5f7cc4f1c7b0898f336&oe=60D35D9E)

## 11. `reduce()`

- Trả về một giá trị duy nhất.
- Gồm 2 tham số truyền vào:
  - callback: hàm này nhận vào 4 tham số:
    - accumulator: biến tích lũy được trả về sau mỗi lần gọi hàm callback.
    - currentValue: phần tử của mảng đang được xử lý.
    - index: chỉ mục của phần tử đang được xử lý.
    - origin array: mảng hiện tại gọi hàm reduce.
  - initial value:
    - là giá trị cho tham số thứ nhất (accumulator) của hàm callback trong lần gọi hàm đầu tiên.
    - Nếu giá trị này không được cung cấp thì giá trị phần tử đầu tiên của mảng sẽ được sử dụng và lúc này currentValue sẽ là giá trị thứ 2 của mảng.

```js
function sumNumber(input) {
  return input.reduce((acc, cur) => (cur ? acc + cur : acc + 0), 0);
}
console.log(sumNumber([1, 2, 3, 4])); // 10
```
