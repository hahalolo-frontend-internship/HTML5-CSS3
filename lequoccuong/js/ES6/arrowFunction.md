# `Arrow Function`

- `Arrow functions` là một cú pháp mới dùng để viết các hàm trong `JavaScript`. Nó giúp tiết kiệm thời gian phát triển và đơn giản hóa phạm vi `function (function scope)`



# Cách dùng `arrow function`

## Trong trường hợp 1 tham số

```js
//ES5
var multiplyByTwo = function (x) {
  return x * 2;
};

//ES6
var multiplyByTwo = (x) => x * 2;

console.log(multiplyByTwo(2));
```

## Trong trường hợp nhiều tham số

```js
// ES5
var multiply = function (x, y) {
  return x * y;
};

// ES6
var multiply = (x, y) => x * y;
```

## Cú pháp với Cú pháp với Object literal

```js
//ES5
var setNameIdsEs5 = function setNameIds(id, name) {
  return {
    id: id,
    name: name,
  };
};
console.log(setNameIdsEs5(4, "cuong")); // Object {id: 4, name: "cuong"}
// ES6
var setNameIdsEs6 = (id, name) => ({ id, name });

console.log(setNameIdsEs6(4, "cuong")); // Object {id: 4, name: "cuong"}
```
## `This`
- Arrow function không có `bind`.
- Nên sử dụng khi thao tác với mảng, thông thường là khi dùng map or reduce để làm cho code ngắn gọn hơn.
- Không được viết `method` trong `object` bằng `arrow function` vì nó sẽ trả về `undefined`.

[Example](https://codepen.io/cuong021099/pen/YzZJyEa?editors=0012)