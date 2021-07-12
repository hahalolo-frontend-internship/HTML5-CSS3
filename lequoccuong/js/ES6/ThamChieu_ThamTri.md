# Tham Chiếu & Tham Trị

## Tham Trị

- Kiểu tham trị được giới thiệu như phần đơn giản của data được lưu trữ. Trong JS có 5 kiểu tham trị chính:
  - `Boolean`: true và false.
  - `Number`: Bất kỳ số nguyên hoặc số thập phân.
  - `String`: Một ký tự hoặc một chuỗi các ký tự được bọc bởi dấu nháy đơn hoặc dấu nháy kép (JS không phân biệt kiểu ký tự).
  - `Null`: Một kiểu tham trị chỉ có một giá trị Null.
  - `Undefined`: Một kiểu tham trị chỉ có một giá trị undefined (undefined là một giá trị được gán đến một biến mà không được khởi tạo)`.

```js
//strings
var name = "Nicholas";
var selection = "a";

// numbers
var count = 25;
var cost = 1.51;

// Boolean
var found = true;

// null
var object = null;

// undefined
var flag = undefined;
var ref; // asigned undefined automatically
```

- Khi set 1 biến bằng một biến khác, mỗi biến sẽ có ản sao data riêng của chúng.

```js
var color1 = "red";
var color2 = color1;

console.log(color1); // "red"
console.log(color2); // "red"

color1 = "blue";

console.log(color1); // "blue"
console.log(color2); // "red"
```

## Tham Chiếu
