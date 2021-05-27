# ES6
- ES6 - ECMAScript 6 [European Computer Manufacturer's Association Script]
- ES6 do hiệp hội các nhà sản xuất máy tính Châu Âu đề xuất làm tiêu chuẩn ngôn ngữ JS
## 1. Let, Const
    - Dùng để định nghĩa biến;
    - Function Scope các biến sẽ có tác dụng trong phạm vi của một `function` ma fnos được khai báo bên trong. Nếu khai báo không nằm trong một hàm nào thì sẽ trở thành `global variable` 
    - Block là đoạn code bên trong cặp dấu ngoặc nhọn
### `var`
    - `var` thuộc `function scope`
    - Tất cả các biến được khai báo với `var` đều là biến `global` có thể sử dụng ở bất cứ đâu. Điều này đồng nghĩa ta khai báo trong một `block scope` thì biến đó vẫn có thể truy cập ở bên ngoài.
```js
    function testVar(){
        var name="Anh"
        console.log(name)// Anh
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
### `let`
    - Tất cả các biến được khai báo với `let` đều là `block scope`, ta chỉ có thể truy cập vào biến khi ở cùng 1 `block` hoặc là các `block` con.
```js 
    let score=100;
    if(score>50){
        let msg="WIN";
        console.log(msg); // WIN
    }
    console.log(score); //100
    console.log(msg); // ERR
```

### `const`
    - Nó như `let` nhưng giá trị của biến sẽ không thể thay đổi. Ta không thể gán một giá trị mới cho biến được khai báo bằng `const`
    - Tuy nhiên, nếu biến được khai báo bằng `const` là một `object` thì ta vẫn có thể thay đổi các thuộc tính trong `object` đó. Do đây không phải là gán một giá trị mới cho biến, mà chỉ là thay đổi bên trong biến.
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

### Cách sử dụng 
- Tùy vào mục đích sử dụng của mọi người nhưng thường thì:
    - Không nên sử dụng `var` vì khó xác định scope cụ thể của biến.
    - Sử dụng `let` khi biến đó cần phải thay đổi giá trị.
    - Sử dụng `const` khi biến đó không cần thay đổi giá trị.
    
## 2. Template Literals, Multi-line String
- Được viết bằng cách bao quanh chuỗi có dấu trọng âm `
- Biểu thức nội suy `${}`
```js
    const text='Homer J. Simpson\n' + '742 Evergreen Terrace\n' + 'Springfield'
    const text2=`Homer J. Simpson  
    742 Evergreen
    Terrace Springfield`
    console.log(text);
    console.log(text2);

    // biểu thức nội suy 

    let number=1;
    const text3= 'Đây là số : ' + number; //old
    const text4=`Đây là số : ${number}`
    console.log(text3);
    console.log(text4);
``` 
## 3. Arrow function
- `Arrow functions` là một cú pháp mới dùng để viết các hàm trong JavaScript. Nó giúp tiết kiệm thời gian phát triển và đơn giản hóa phạm vi function (function scope)
- Cú pháp 
![syntax](https://images.viblo.asia/bb246562-8f0d-4be7-8edc-fc19def0cc89.png)
```js
    // ES5
    var multiTestEs5 = function(a, b) {
        return a * b;
    };
    
    // ES6
    const multiTestEs6 = (a, b) => { return a * b };
```
- Với một tham số 
```js
    //ES5
    var sumES5 = function Total(a) {
    return a+a;
    };
    console.log(sumES5(5)); //10

    //ES6
    const sumES6=a=>a+a; 
    console.log(sumES6(5)); //10
```

- Không có tham số 

```js
    // ES5
    var docLogEs5 = function docLog() {
        console.log('document');
    };

    // ES6
    const docLogEs6 = () => { console.log('document'); };
    docLogEs6();
```

- Trả về một object
```js
    //ES5 
    var setNameIdsEs5 = function setNameIds(id, name) { 
        return { 
            id: id, 
            name: name 
        }; 
    }; 
    
    // ES6 
    var setNameIdsEs6 = (id, name) => ({ id: id, name: name }); 
    
    (setNameIdsEs6 (4, "Kyle"));   // Object {id: 4, name: "Kyle"} 
```
- Nên sử dụng khi thao tác với mảng, thông thường là khi dùng map or reduce để làm cho code ngắn gọn hơn
- Không được viết phương thức trong đối tượng bằng arrowfunction vì nó sẽ trả về undefined
## 5. Classes
- Về cơ bản thì class sẽ tạo ra một template để chúng ta có thể sử dụng những object sau này. Hàm lớp về cơ bản tạo ra một khuôn mẫu mà chúng ta có thể sử dụng để tạo các đối tượng sau này
```js
 class User{
    constructor(name,firstName,age,address){
        this.name=name;
        this.firstName=firstName;
        this.age=age;
        this.address=address;
    }
    fullName(name,firstName){
        return this.fullName=`${name} ${firstName}`;
    }
}

const user1= new User('Anh',22,'Hue')
console.log(user1); //User { name: 'Anh', firstName: 22, age: 'Hue', address: undefined } 
console.log(user2.fullName('Anh','Ho'))// Anh Ho

```
## 6. Default parameter values
- ES6 cho bạn set giá trị mặc định cho parameters khi khai báo hàm ES6
- Nếu mình không truyền tham số khi gọi hàm thì nó sẽ get giá trị mặt định trong hàm đó
```js
    const getFinalPrice = (price, tax = 0.7) => price + price * tax;
    getFinalPrice(500); // 850
```
## 7. Destructuring
- Là chức năng mới trong ES6 của JS giúp lấy data có thể lồng nhau từ Array or Object
![des](https://2.bp.blogspot.com/-6CbJccfAv4A/V0fdpvOadvI/AAAAAAAAWEM/Z7TwERT_aAgcV-HfBQZfq-yXOCOBqomtQCK4B/s1600/es6-destructuring.png)
## 8. Rest parameters 
## 9. Spread
## 10. Enhanced object literals
## 11. Tagged literal
## 12. Modules
