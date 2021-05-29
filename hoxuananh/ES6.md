# ES6
- ES6 - ECMAScript 6 [European Computer Manufacturer's Association Script]
- ES6 do hiệp hội các nhà sản xuất máy tính Châu Âu đề xuất làm tiêu chuẩn ngôn ngữ JS
## 1. Let, Const
- Dùng để định nghĩa biến;
- Function Scope các biến sẽ có tác dụng trong phạm vi của một `function` mà nó được khai báo bên trong. Nếu khai báo không nằm trong một hàm nào thì sẽ trở thành `global variable` 
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
### Khác nhau giữa var và let
- Các biến được khai báo với từ khóa var có phạm vi trong hàm (function scope) và hành vi hoisting trong JavaScript xảy ra (nâng phần khai báo lên trên cùng trong phạm vi của nó).

- Trong khi các biến được khai báo với từ khóa let là phạm vi khối { } (block scope). Bạn bắt buộc phải khai báo rõ ràng trước khi sử dụng chúng.
### `const`

- Nó như `let` nhưng giá trị của biến sẽ không thể thay đổi. Ta không thể gán một giá trị mới cho biến được khai báo bằng `const`
- Tuy nhiên, nếu biến được khai báo bằng `const` là một `object` or `array`thì ta vẫn có thể thay đổi các thuộc tính trong `object` or giá trị của `array` đó. Do đây không phải là gán một giá trị mới cho biến, mà chỉ là thay đổi bên trong biến.

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
## 4. Classes
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
## 5. Default parameter values
- ES6 cho bạn set giá trị mặc định cho parameters khi khai báo hàm ES6
- Nếu mình không truyền tham số khi gọi hàm thì nó sẽ get giá trị mặt định trong hàm đó
```js
    const getFinalPrice = (price, tax = 0.7) => price + price * tax;
    getFinalPrice(500); // 850
```
## 6. Destructuring
- `Destructuring` là 1 kỹ thuật được giới thuật trong ES6, giúp cho việc sao chép, trích xuất lại các `variable` 1 cách rất rõ ràng, dễ hiểu hơn rất nhiều so với những cách thông thường khác và chắc chắn là `line of code` cũng giảm đi đáng kể.
![des](https://2.bp.blogspot.com/-6CbJccfAv4A/V0fdpvOadvI/AAAAAAAAWEM/Z7TwERT_aAgcV-HfBQZfq-yXOCOBqomtQCK4B/s1600/es6-destructuring.png)

- Array destructuring
```js
//ES5
    var arrES5=[1,2,3]
    var a=arr[0];
    var b=arr[1];
    var c=arr[2];
    console.log(a,b,c) // 1 2 3
    // còn được gọi là structured asignment 

    // ES6
    const arrES6=[1,2,3];
    const [a,b,c]=arrES6;
    console.log(a,b,c) // 1 2 3
    // gọi là destructuring asignment

// Một số trường hợp không khả thi 

    // Empty object
    let obj = {};
    let [x] = obj; // TypeError

    // Undefined values
    let und = undefined;
    let [x] = und; // TypeError

    // Null values
    let response = null;
    let[x] = response; // TypeError

```

- Object destructuring
```js
    // ES5
    var obj={
        a : 1,
        b : 2, 
        c : 3
    }
    var a=obj.a;
    var b=obj.b;
    var c=obj.c;
    console.log(a,b,c); //1 2 3 

    // ES6
    const obj={
        a : 1,
        b : 2, 
        c : 3,
        d : {
            e: 5
        }
    }

    const {a,b,c}=obj;
    console.log(a,b,c); // 1 2 3

    //đặt lại tên cho thuộc tính obj
    const{ a: name} = obj
    console.log(name); // 1

    // thuộc tính chứa obj
    const {a,d:{e}}=obj
    console.log(e) // 5

```
- Dùng trao đổi or hoán đổi biến (Interchanging Or Swapping Variables)

```js

    const a, b;
    [a, b] = ["Male", "Female"];
    [a, b] = [b, a];

    console.log(a); //Output: Female
    console.log(b); //Output: Male

```
- EX : dùng để get dữ liệu một cách tường minh và nhanh hơn 
```js
    const books = [
    { name: "Trà hoa nữ", author: "Alexandre Dumas con", type: "novel" },
    { name: "Đắc nhân tâm", author: "Dale Carnegie", type: "novel" },
    {
        name: "Tôi thấy hoa vàng trên cỏ xanh",
        author: "Nguyễn Nhật Ánh",
        type: "short story"
    }
    ];
    const [book1, , book3] = books;
    console.log(book3); // expected: { name:  'Tôi thấy hoa vàng trên cỏ xanh', author:  'Nguyễn Nhật Ánh', type:  'short story'}
    const [...copyBooks] = books;
    console.log(copyBooks); // expected: = books array
```
## 7. Rest parameters 

- 1 operator `...` mới được thêm vào trong ES6 có thể dùng trong destructuring . Nếu `...` operator xuất hiện phía bên trái khi dùng destructuring thì nó gọi là REST PARAMETER.
- Phần còn lại 1 `rest parameter` được dùng để map những element trong arr mà chúng không được map với gì cả.
- `rest parameter ` luôn đứng ở cuối .
- Được dùng để làm tham số trong function và của destructuring
- Gom những phần tử thành array
```js
    const planets = ["Mercury", "Earth", "Venus", "Mars", "Pluto", "Saturn"];

    const [first, second, ...rest] = ["Mercury", "Earth", ...planets, "Saturn"];

    console.log(first); //Output: Mercury
    console.log(second); //Output: Earth
    console.log(rest); //Output: ["Mercury", "Earth", "Venus", "Mars", "Pluto", "Saturn", "Saturn"]


    //  destructuring ket hop voi rest
    //arr
        function logger([a,b,...rest]){
        console.log(a); //1
        console.log(b);//2
        console.log(rest);// [3,4,5,6,7]
        }

        console.log(logger([1,2,3,4,5,6,7]));
    //obj
        function loggers({name,age,...rest}){
        console.log(name); //Danny
        console.log(age); // 22
        console.log(rest); //{address: 'hue'}
        }

        console.log(loggers(
        {
            name:'Danny',
            age : 22,
            address: ""
        }
        ));


```
### 8 Spread
- Syntax `...`
- Dùng để hợp nhất arr, obj
- Cho phép chuyển đổi một chuỗi thành nhiều argument trong trường hợp gọi với hàm hoặc nhiều phần tử đối với arr
- Tách ra từ một array thành nhiều phần tử
```js
    // arr
    const ar1=[1,2,3,4];
    const ar2=[2,3,4,5];
    const arr3=[...ar1,...ar2];
    console.log(arr3);// [1,2,3,4,2,3,4,5]
    
    //obj
    const obj1={
    name: 'Dany',
    age: 22
    }
    const obj2={
    address:'Hue',
    job: 'Web Developer'
    }

    const obj3={...obj1,...obj2}
    console.log(obj3); //{ name: 'Dany', age: 22, address: 'Hue', job: 'Web Developer' }

    //function
    const arrSp=['PHP','JS','PYTHON','MYSQL']
    function spread(a,b,c){
    console.log(a,b,c); // PHP, JS , PYTHON

    }
    spread(...arrSp); 
    // kết hợp rest va spread
    function reSp(...rest){
    for(let i=0;i< rest.length;i++){
        console.log(rest[i]); // PHP, JS , PYTHON, MYSQL
    }
    }
    reSp(...arrSp)


```

## 8. Enhanced object literals
1. Định nghĩa key: value cho object
2. Định nghĩa method cho object

```js
    let lag="JavaScript";
    let price = 1000;

    let course1={
    lag,
    price,
    //method
    // getLag: function(){
    //     return lag;
    // }
    getLag(){
        return lag;
    }
    
    }

    console.log(course1.getLag()); // JavaScript
    console.log(course1); // { lag: 'JavaScript', price: 1000 }
```
3. Định nghĩa key cho object dưới dạng biến
```js
    let filedName="name";
    var filedPrice="price";

    const course={
    [filedName]:'PHP',
    [filedPrice]: 1000
    }
    console.log(course); // { name: 'PHP', price: 1000 }
```
## 9. For of
- Vòng lặp for of mới được thiết kế cho phép chúng ta lặp qua mảng hoặc lặp qua đối tượng có thể lặp khác rất dễ dàng.
```js
// Lặp qua mảng
    let letters = ["a", "b", "c", "d", "e", "f"];

    for (let letter of letters) {
        console.log(letter);
    }
    //kq
    // a
    // b
    // c
    // d
    // e
    // f

    // Lặp qua chuỗi
    let greet = "Hế lô";

    for (character of greet) {
        console.log(character);
    }
    // kq
    // H
    // ế

    // l
    // ô
    
 
```
- Vòng lặp for of không hoạt động với các đối tượng thông thường vì chúng không thể lặp lại.

## 10 Module

### Export
- `Named Export` được sử dụng để xuất nhiều thứ từ một module bằng cách thêm keyword export vào khai báo của chúng. Sau đó import những thứ chúng ta cần bằng cách bap quanh chúng cặp dấu ngoặc `{}`
```js
    export function addTwoNumbers(x,y){
    return x + y
    }
    export let students = ['wisdom','bill','fred','grim']
```
- `Default Export` chỉ cho phép xuất một mặc định cho mỗi file. Default Export có thể cho một function, class hoặc một object.
```js
    function contact(name,age){
        return `${name} + ${age}`;
    }

    export default contact;
```
- Đổi tên
    - Nếu `Export Named` bằng cách sử dụng từ khóa `as` 
    - Nếu `Export Default` thì đổi thằng tên khi `import`
 
### Import
- Để `Import` một `module` vào một `script` thì bạn có thể sử dụng `import`
- `import` cho `export named` : `import {export name1, export name2} form './fileScript.js' `
- `import` cho `export default` : `import NameExportDefault form './fileScript.js' `
- Sử dụng `*` để `import` tất cả `export named`

