# `Let` & `Const` & `var`
- Dùng để định nghĩa biến.
- `Function Scope` các biến sẽ có tác dụng trong phạm vi của một function mà nó được khai báo bên trong. 
- Nếu khai báo không nằm trong một hàm nào thì sẽ trở thành `global variable` 
- `Block` là đoạn code bên trong cặp dấu ngoặc nhọn
## `var`
- `var` thuộc `function scope`
- Tất cả các biến được khai báo với `var` đều là biến `global` có thể sử dụng ở bất cứ đâu. Điều này đồng nghĩa ta khai báo trong một `block scope` thì biến đó vẫn có thể truy cập ở bên ngoài.
```js
    function testVar(){
        var name="Cuong"
        console.log(name)// Cuong
    }
    console.log(name);// err

    var score=100;
    if(score>50){
        var msg="WIN";
        console.log(msg);
    }
    console.log(score); // 100
    console.log(msg); // WIN
```
## `let`
- Tất cả các biến được khai báo với let đều là block scope, ta chỉ có thể truy cập vào biến khi ở cùng 1 block hoặc là các block con.
```js
    let score=100;
    if(score>50){
        let msg="WIN";
        console.log(msg); // WIN
    }
    console.log(score); //100
    console.log(msg); // ERR
```
## Khác nhau giữa `var` và `let`
- Các biến được khai báo với từ khóa `var` có phạm vi trong hàm (`function scope`) và hành vi `hoisting` trong JavaScript xảy ra (nâng phần khai báo lên trên cùng trong phạm vi của nó).

- Trong khi các biến được khai báo với từ khóa `let` là phạm vi khối ` { } (block scope)`. Bạn bắt buộc phải khai báo rõ ràng trước khi sử dụng chúng.

## `const`
- Nó như `let` nhưng giá trị của biến sẽ không thể thay đổi. Ta không thể gán một giá trị mới cho biến được khai báo bằng `const`
- Tuy nhiên, nếu biến được khai báo bằng `const` là một `object or array` thì ta vẫn có thể thay đổi các thuộc tính trong object or giá trị của array đó. Do đây không phải là gán một giá trị mới cho biến, mà chỉ là thay đổi bên trong biến.
```js
    const name="Danny";
    name="Anh"; //ERR

    const fullName={
        firstName: "Ho",
        lastName : "Anh",
    }
    console.log(fullName.firstName) // Ho

    fullName.firstName="Nguyen"
    console.log(fullName.firstName) // Nguyen
```
## Cách sử dụng
- Tùy vào mục đích sử dụng của mọi người nhưng thường thì:
    - Không nên sử dụng var vì khó xác định scope cụ thể của biến.
    - Sử dụng let khi biến đó cần phải thay đổi giá trị.
    - Sử dụng const khi biến đó không cần thay đổi giá trị.