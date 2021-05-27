# 2. Hoisting

## 2.1 Javascript Hoisting

- `Hoisting` là vấn đề liên quan đến cách khai báo biến trong `Javascript`.
- Nó liên quan đến việc trong `Javascript` bạn có thể sử dụng một biến mà không cần phải định nghĩa trước.
- nó sẽ chuyển phần khai báo lên phía trên top Trong `Javascript`, một biến (variable) có thể được khai báo sau khi được sử dụng.

- Ví dụ:

```javascript
console.log(a);
var a = "Hello Hoisting";
//Output = ???
```

![Kết quả](https://viblo.asia/uploads/69e3e07d-6c30-4941-becf-fd4dce89fd46.png)

- Trình biên dịch của js sẽ phân tách phần `var a = 'Hello Hoisting'` thành 2 phần là:
  - Khai báo: `var a`
  - Gán giá trị: `a = 'Hello Hoising'`
- Theo `Hoisting` thì js sẽ chuyển phần khai báo lên trên top, vì vậy sẽ chỉ có phần khai báo chuyển lên trên top còn phần gán giá trị sẽ giữ nguyên vị trí nên output sẽ là `undefined`.

## 2.2 Hoisting of function

- Trình biên dịch của js sẽ chuyển phần khai báo lên trên top giống như cách làm với biến.

```js
say_something("Hello world");
function say_something(a) {
  console.log(a);
}
// Kết quả tương tự ở phần biến
```

```js
do_something();
function do_something() {
  console.log(a);
  var a = "fly";
}
```

- Cũng giống như phần biến, bên trong hàm `do_something` cũng được biên dịch `hoisting`.
- Nhưng phần khai báo biến a chỉ được chuyển lên trên top của hàm `do_something` chứ không phải của chương trình.
- ouput là `undefined`.

## 2.3 Hoisting function vs Hoisting variable
- Trình biên dịch js sẽ chuyển phần khai báo hàm được đưa lên trước phần khai báo của biến
```js
var show_me;
show_me();
function show_me() {
  console.log("Money");
}
show_me = function () {
  console.log("Diamond");
};
```
- Output: `Money`

## Chú ý
- Tất cả các định nghĩa biến với keyword `var` có giá trị ban đầu là `undefined`, bỏi vì `hoisting` đã đưa các khai báo biến vào bộ nhớ và khởi tạo chúng với giá trị `undefined`.
- Ngược lại, nếu định nghĩa biến với keyword `let` hoặc `const` khi được `hoist` không khởi tạo với giá trị undef`ined mà chúng sẽ có trạng thái `Temporal Dead Zone`