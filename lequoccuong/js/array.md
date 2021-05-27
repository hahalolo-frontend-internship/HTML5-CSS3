# ARRAY

## 1. Kiểm tra kiểu dữ liệu array `array.isArray()`
## 2. Kiểm tra độ dài array `array.length`
## 3. Chuyển array thành string bằng `toString`: `array.toString()`
- Mảng được gọi sẽ không bị thay đổi.
```js
let arr = [1,2,3,4,5]
let a = arr.toString();
console.log(a); // 1,2,3,4,5
console.log(arr);// [1,2,3,4,5]
```
## 4. Chuyển array thành string bằng `join`:
- Mảng được gọi sẽ không bị thay đổi.
- `array.join()`: kết quả sẽ tương tự `toString`.
- `array.join('')`: những phần tử của mảng sẽ cách nhau bằng ký tự được truyền vào trong `''`.
## 5. Xóa phần tử cuối mảng và trả về phần tử đã xóa `pop()`
- Mảng được gọi sẽ bị thay đổi.
```js
let array = [1, 2, 3];
console.log(array.pop()); // 3
console.log(array.pop()); // 2
console.log(array.pop()); // 1
console.log(array.pop()); // undefined
console.log(array); // []
```

- Nếu đã xóa hết phần tử trong mảng mà xóa tiếp thì `pop` trả về `undefined`.

## 6. Thêm 1 hoặc nhiều phần tử vào cuối mảng và trả về độ dài mới của mảng được `push()`.
- Mảng được gọi sẽ bị thay đổi.
```js
let array = [1, 2, 3];
console.log(array.push(4, 4)); // 5
console.log(array.push(5)); // 6
console.log(array); // [1,2,3,4,4,5]
```

## 7. Xóa phần tử đầu mảng và trả về phần tử đã xóa `shift()`(ngược lại với `pop()`)
- Mảng được gọi sẽ bị thay đổi.
```js
let array = [1, 2, 3];
console.log(array.shift()); // 1
console.log(array.shift()); // 2
console.log(array); // [3]
```

## 8. Thêm 1 hoặc nhiều phần tử vào đầu mảng và trả về độ dài mới của mảng được `unshift()`.
- Mảng được gọi sẽ bị thay đổi.
```js
let array = [1, 2, 3];
console.log(array.unshift(4, 4)); // 5
console.log(array.unshift(5)); // 6
console.log(array); // [5,4,4,1,2,3]
```

## 9. Xóa, chèn phần tử vào mảng `splice(start,delete,insert)`
- Nhận vào 3 tham số:
  - Tham số 1 là vị trí bắt đầu.
  - Tham số 2 là số lượng phần tử muốn xóa từ vị trí bắt đầu.
  - Tham số 3 là phần tử muốn chèn vào mảng.
- Nếu truyền vào 1 tham số thì sẽ xóa từ vị trí truyền vào đến hết mảng.
- Trả về những phần tử bị xóa.
- Mảng được gọi sẽ bị thay đổi.
```js
let array = [1, 2, 3];
console.log(array.splice(1, 2, 5)); // [2,3]
console.log(array); // [1,5]
```

## 10. Nối nhiều mảng với nhau `array1.concat(array2)`

```js
let array = [1, 2, 3];
let array1 = [4, 5, 6];
let array2 = [7, 8, 9];
console.log(array.concat(array1.concat(array2))); // [1,2,3,4,5,6,7,8,9]
```

## 11. Cắt mảng `slice(start,end)`
- Mảng được gọi sẽ không bị thay đổi.
- Tham số start: vị trí bắt đầu muốn cắt.
- Tham số end: vị trí kết thúc muốn cắt.

```js
let array = [1, 2, 3, 4];
console.log(array.slice(1, 3)); //[2,3]
console.log(array); //[1,2,3,4]
```
## 12.  Sắp xếp - `sort()`
- Nhận vào tham số là 1 callback:  Nhận vào 2 tham số a,b
    - Nếu  a - b => sắp xếp tăng dần.
    - Nếu  b - a => sắp xếp giảm dần
    - Nếu a = b => không thay đổi
- Trả về kết quả được sắp xếp.

```js
let users = [
    {name: 'cuong', age: 18},
    {name: 'bao', age: 20},
    {name: 'anh', age: 19}
]

console.log(users.sort((a,b) => b.age - a.age ));
```
## 13. [Một số phương thức, vòng lặp](for.md)