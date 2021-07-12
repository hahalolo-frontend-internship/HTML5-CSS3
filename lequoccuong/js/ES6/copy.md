# Deep & Shallow copy

- Object.assign(), và Spread Operator là shallow copy.
- Còn deep Copy sử dụng JSON.parse() và JSON.stringify().

### Shallow copy

- `Shallow copying` nhiệm vụ của nó chỉ copy những giá trị nông, nghĩa là nó chỉ sao chép các giá trị đối tượng bình thường nhưng các giá trị lồng nhau vẫn sử dụng `reference`(tham chiếu) đến một đối tượng ban đầu.
- ví dụ

```js
const obj = {
  a: 1,
  b: 2,
  c: { d: 3 },
};
const shallowClone = { ...obj };
obj.b = 22;
obj.c.d = 34; // thay đổi giá trị d của object gốc
console.log(obj); // kết quả cho chúng ta thấy {a:1,b:22,c:{d:34}}
console.log(shallowClone); // nhưng object mà chúng ta clone ra cũng bị thay đổi theo {a:1,b:2,c:{d:34}}
```

### Deep copy

- Đơn giản là cũng giống như `clone shallow` nhưng các giá trị `reference` trong object gốc không thay đổi trong object clone.

- Ví dụ

```js
const obj = { a: 1, b: 2, c: { d: 3 } };
const deepClone = JSON.parse(JSON.stringify(obj));
console.log(deepClone); // {a:1,b:2,c:3};
obj.c.d = 34;
console.log(obj); // {a:1,b:2,c:{d:34}}
console.log(deepClone); // {a:1,b:2,c:{d:3}}
```
