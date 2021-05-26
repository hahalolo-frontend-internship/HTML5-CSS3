# JAVASCRIPT

- Truthy - to bool is true
    - Bất cứ giá trị nào trong Javascript khi chuyển đổi sang kiểu dữ liệu boolean mà có giá trị true thì ta gọi giá trị đó là Truthy.
- Falsy - to bool is false
    - Bất cứ giá trị nào trong Javascript khi chuyển đổi sang kiểu dữ liệu boolean mà có giá trị false thì ta gọi giá trị đó là Falsy.
    - Trong Javascript có 6 giá trị sau được coi là Falsy:
        - false
        - 0 (số không)
        - '' or "" (chuỗi rỗng)
        - null
        - undefined
        - NaN

## Làm Việc Với Chuỗi 
```js
    var myString="Tim hieu JS BASIC ES6"
```
1. Length
```js
console.log(myString.length);
```
2. Find index
    - indexOf('Chuoi can tim', vi tri bat dau) :  bat dau  
    - lastIndexOf('chuoi can tim) : tu sau den dau
    - search : nhu index nhung khong co tham so thu 2, search bieu thuc chinh quy
3. Cut string
- Cắt chuỗi
    - slice(vi tri bat dau, vi tri ket thuc);
4. Replace
- Ghi đè
    - replace(chuoi can thay the, chuoi thay the)
    - Biểu thức chính quy /JS/g nó sẽ thay thế tất cả JS thành chuỗi mình thay thế
5. Convert to upper case 
- Chuyển đổi chuỗi thành chữ hoa
    - toUpperCase()
6. Convert to lower cas
- Chuyển đổi chuỗi thành chữ thường
    - toLowerCase()
7. Trim
- Bỏ khoảng trắng thừa 2 đầu chuỗi;
    - trim()
8. Split
- Cắt chuỗi thành array
    - split(điểm chung);
9. Get a character by index
- Lấy kí tự theo index cho trước
    - charAt(vị trí);
    - [vị trí];

## Làm Việc Với Số
1. Chuyển số thành string
    - toString()
2. Rút gọn giá trị thập phân 
    - toFixed()
3. Kiểm tra phải là number k 
- Number.isInteger(number)

## Làm việc với mảng
1. Tạo mảng
    - Cách tạo
    ```js
    let languages=[
        'javaScript',
        'PHP',
        'Ruby',
    ]
    ```
    - Kiểm tra data type.
    ```js
    Array.isArray(array) => true là array
    ```
    - Cách sử dụng
2. Truy xuất mảng
    - Độ dài mảng.
    - Lấy phần tử theo index.
    ```js
        array.length
        array[index]
    ```
3. Làm việc với mảng
    - array.toString : chuyển mảng thành chuỗi
    - array.join("") : chuyển mảng thành chuỗi
    - array.pop()    : xóa phần tử cuối mảng và trả về phần tử đã xóa
    - array.push("") : trả về độ dài mảng mới sau khi thêm và thêm phần tử vào cuối mảng [thêm nhiều phần tử]
    - array.shift()  : xóa phần tử đầu mảng và trả về phần tử đã xóa
    - array.unshift(""): trả về độ dài mới của mảng và thêm phần tử vào đầu mảng [thêm nhiều phần tử]
    - array.splice(chỉ mục bắt đầu, số lượng phần tử muốn xóa, phần tử muốn chèn) :xóa, cắt, chèn phần tử mới vào mảng
    - array.concat(array muốn nối): nối 2 array lại với nhau
    - array.slice(vị trí bắt đầu, vị trí kết thúc) : cắt một vài phần tử của mảng trả về phần tử bị cắt

### Array...
    - forEach(function(arr,index)) : duyệt qua từng phần tử của mảng
    - every(function(arr,index)) : kiểm tra tất các phần tử của mảng phù hợp với 1 dk nào đó. Không duyệt qua hết từng phần tử, nếu điều kiện đúng hoặc sai thì nó sẽ dừng lại. Phải dùng Return (kiểu như &&)
    - some(function(){}) : tương tự every nhưng kiểu nó như là ||
    - find(function(){}) : tìm 1 đối tượng
    - filter(function(){}) : tìm kiếm trả về nhiều đối tượng
## Function
    - Declaration function
    ```js
    function showMess(){}
    ```
        - Có thể được gọi trước khi định nghĩa (hosting)

    - Expression function
    ```js
    var showMess=function(){}
    ```
        - Không thể gọi trước khi định nghĩa (không có hosting)

    - Arrow function

## Object
    ```js
    var myInfo={
        name: "Danny Ho",
        age:22,
        [emailKey]:"hoxuananh9.3@gmail.com",
        getName: function(){
            return this.name;
            //this ở đây = myInfo.name
        }
    }
    ```
    - Thêm property có 2 cách 
        - object.key=value;
        - object[key]=value;

    - Function -> phương thức / method
    - Others -> Thuộc tính / propery gồm key: value

## Object constructor
- Hàm tạo mô tả thiết kế đối tượng.
```js
function User(firstName, lastName, avatar){
    this.firstName=firstName;
    this.lastName=lastName;
    this.avatar=avatar;
    this.getName= function(){
        return `${this.firstName} + ${this.lastName}`
    }
}

var author = new User("Sơn","Đặng","Avatar");
var user  = new User("Bảo","Nguyễn","Avatar");

author.getName();
user.getName();

```

## For

1. for - Lặp với điều kiện đúng
2. for/in - Lặp qua key(index) của đối tượng
3. for/of - Lặp qua value của đối tượng
4. while - Lặp khi điều kiện đúng
5. do/while - Lặp ít nhất 1 lần, sau đó lặp khi điều kiện đúng

## Break && Continue

- Break dừng
- Continue 

## Nested Loop (vòng lặp lồng nhau)
