# Promise

- Là 1 `object constructor` trả về 1 đối tượng
- Dùng để xử lý các thao tác bất đồng bộ (async).
- Trước khi có `promise` thì chúng ta thường sử dụng callback để xử lý và callback có 1 vấn đề là `callback hell` vì thế `ES6` ra `promise` để khắc phục vấn đề `callback hell`.
- Tạo 1 promise

```js
let promise = new Promise();
```

- Tham số truyền vào là `Executor` (function) trả về 2 tham số đều là `function`

  - `resolve`: có thể hiểu là thành công.
  - `reject`: có thể hiểu là thất bại.

- Tạo `Executor` luôn gọi `resolve` và `reject`, nếu không gọi thì sẽ bị `memory leak`(rò rỉ bộ nhớ).

```js
let promise = new Promise(function (resolve, reject) {
  // Xử lý logic
  // Thành công: gọi resolve()
  // Thất bại: gọi reject()
});
```

- `Promise` có 3 trạng thái:
  - `Pendding` (chờ): khi không gọi `resolve` hoặc `reject`
  - `Fulfilled` (hoàn thành): khi gọi `resolve`
  - `Rejected` (lỗi): khi gọi `reject`
- Gọi `promise`:
  - Khi `resolve` được gọi thì then được gọi.
  - Khi `reject` được gọi thì `catch` được gọi.
  - Khi `resolve` hoặc `reject` được gọi thì `finally` được gọi.

```js
let promise = new Promise(function (resolve, reject) {
  // Xử lý logic
  // Thành công: gọi resolve()
  // Thất bại: gọi reject()
});
// cả then catch finally đều nhận vào 1 callback
promise
  .then(function () {})
  .catch(function () {})
  .finally(function () {});
```

# Promise Chain (tính chất chuỗi của promise)

- `Promise` có tính chất chuỗi, khi `resolve` có thể gọi `.then()` nhiều lần.
- Cái `.then()` đầu tiên `return` cái gì thì cái thứ 2 sẽ nhận được giá trị đó.
- Nếu `.then()` đầu tiên không `return` mà cái tiếp theo lấy giá trị thì sẽ là `undefined`.
- Nếu cái đầu tiên không `return 1 promise` thì nó sẽ chạy tiếp cái tiếp theo, nhưng nếu `return 1 promise` thì sẽ phải xử lý xong thằng `promise` đó rồi mới chạy tiếp cái tiếp theo.
- Nếu gặp `reject` ở đâu thì sẽ dừng ngay ở đó và phải bắt lỗi

```js
function sleep(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(), ms);
  });
}
sleep(1000)
  .then(() => {
    console.log(2);
    return sleep(1000);
  })
  .then(() => {
    console.log(3);
    return new Promise((resolve, reject) => reject("Có lỗi"));
  })
  .then(() => {
    console.log(4);
  })
  .catch((err) => console.log(err));
  .finally(()=>console.log('done!'));
```

# Promise (resolve, reject, all)

## Promise.resolve

```js
let promise = Promise.resolve("Success");
promise.then((result) => console.log(result));
```

## Promise.reject

```js
let promise = Promise.reject("error");
promise.then((result) => console.log(result)).catch((err) => console.log(err));
```

## Promise.all

- Nếu các promise không bị phụ thuộc nhau thì nên để cho nó chạy song song nhau thay vì chạy theo thứ tự.
- Nếu sử dụng Promise.all mà 1 trong số các promise được gọi bị lỗi thì sẽ dừng lại và quăng lỗi ra.
- Promise.all nhận vào một mảng gồm các promise và trả về 1 mảng gồm value của các promise.

```js
let promise1 = new Promise((resolve, reject) => resolve([1, 2, 3]));
let promise2 = new Promise((resolve, reject) => reject("ERROR"));
Promise.all([promise1, promise2])
  // .then((result) => console.log(result))
  .then(([result1, result2]) => console.log(result1, result2))
  .catch((err) => console.log(err))
  .finally(() => console.log("done!"));
```
