# 3. Scope
- Scope nói tới khả năng được sử dụng của một biến, giá trị, method trong Javascript.
- `Scope` có thể định nghĩa là toàn cục `global` hoặc cục bộ `locally`.
- Từ ES6 trở lên, có thêm `Block Scope`, nó gắn liền với kiểu dữ liệu `let`, `const`.


## 3.1 Global Scope & Local Scope
```js
var x = 5;    // declare x globally
 
function method1() {
  console.log(x); // logs 5
}
 
function method2() {
  var x = 4;      // create x locally in the function
  console.log(x); // logs 4
}
method1();         
method2();         
console.log(x); // logs 5
```
## 3.2 Function Scope
- `JavaScript` có scope `function`: Mỗi `function` tạo ra một `scope` mới.
```js
// Scope A
var myFunction = function () {
  // Scope B
  var myOtherFunction = function () {
    // Scope C
  };
};
```
- Một biến được định nghĩa bởi `var` sẽ thuộc phạm vi của `function` nghĩa là nó sẽ chỉ tồn tại trong phạm vi hàm mà nó được định nghĩa.

- Ví dụ:
```js
function myFunc() {  
  var name = 'Cường'
  console.log(name); // 'Cường'
}
myFunc();
console.log(name); // name is not defined 
```
- Các loại block như khối lệnh `if`, hay vòng lặp `for`, `while` sẽ không được coi là `scope` của `var`.
```js
if(true) {  
  var name = 'Cường'
}
console.log(name); // 'Cường' 
```
## 3.3 Block Scope (Chỉ áp dụng với let, const. Không hoạt động với var)
- Trong ES6, `let` và `const` được giới thiệu như 2 cách thay thế để định nghĩa 1 biến - và cả 2 cách này đều thuộc về `block scope`.
- Đối với `block scope`, mọi block đều được coi là 1 `scope`.
- Tương tự như `var` 1 function vẫn là 1 `scope` hợp lệ.
```js
function myFunc() {  
  var name = 'Cường'
  console.log(name); // 'Cường'
}
myFunc();
console.log(name); // name is not defined 
```
- Nhưng đối với các loại block như khối lệnh `if`, hay vòng lặp `for`, `while` cũng sẽ được coi là các `scope` của `let` và `const`.
```js
if(true) {  
  let name = 'Luke'
}

console.log(name); // name is not defined  
```
## 3.4 Lexical Scope (Closure)
- Khi nhìn thấy 1 function con nằm trong 1 function cha, function con có thể truy cập tới scope của function cha, đó gọi là `Lexical Scope` hay `Closure` còn được gọi là `Static Scope`.
- Nhưng Lexical Scope không hoạt động theo chiều ngược lại tức là function cha không thể truy cập đến scope function con.
```js 
// Scope A
var myFunction = function () {
  // Scope B
  var name = 'Duy'; // định nghĩa trong Scope B
  var myOtherFunction = function () {
    console.log(name); // Duy
  };
  myOtherFunction();//Duy
};
myFunction(); //Duy
```
## 3.5 Scope Chain
- Xét ví dụ dưới đây:

![scope chain](https://niviki.com/wp-content/uploads/2017/06/Outer-Environment-.png)
- Kết quả của ví dụ là `undefined` vì:
  - Trong hàm b không có biến `text` nên nó sẽ tìm biến `text` ở `Outer Environment` (scope cha) ở đây là `Global`.
  - Vì khai báo biến và gán biến `text` ở dưới hàm b nên theo `hoisting` biến `text` sẽ được khai báo ở trên hàm b và biến `text` được gán ở dưới hàm b vì vậy kết quả sẽ là `undefined`.

## 3.6 Scope và `this`
- Mỗi `Scope` lại `bind` giá trị khác nhau cho `this` phụ thuộc vào vị trí nó được gọi tới.
- Mặc định thì `this` bind đến object toàn cục nhất `window`.
```js
var myFunction = function () {
  console.log(this); // this = global, [object Window]
};
```
```js
var myObject = {};
myObject.myMethod = function () {
  console.log(this); // this = Object { myObject }
};
```
```js
var nav = document.querySelector('.nav'); // <nav class="nav">
var toggleNav = function () {
  console.log(this); // <nav> element
  setTimeout(function () {
    console.log(this); // [object Window]
  }, 1000);
};
nav.addEventListener('click', toggleNav, false);
```
