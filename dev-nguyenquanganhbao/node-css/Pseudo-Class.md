# Pseudo-Class 
Pseudo-Class trong CSS được sử dụng để thêm các hiệu ứng đặc biệt tới một số Selector mà không cần sử dụng đến JavaScript hoặc bất cứ ngôn ngữ Script nào.
- Cú pháp pseudo-class:

`selector`:`pseudo-class` {
    property: value;
}

1. Pseudo-Class cho đường link
Pseudo-Class được sử dụng nhiều nhất với các đường liên kết (thẻ `<a>`) để tạo ra hiệu ứng thay đổi trạng thái chữ mỗi khi người dùng di chuột qua nó.
Các trạng thái tương đương với 4 Pseudo-Class của đường link:
- a:link {color:blue;}: Hiển thị hiệu ứng khác biệt để người đọc biết đây là đường liên kết.
- a:visited {color:green;}: Đường link đã từng được click vào.
- a:hover {color:red;}: Di chuột qua đường link.
- a:active {color:navy;}: Đường link đang được nhấp chuột vào. 
```html
<!DOCTYPE html>
<html>
    <head>
        <style>
            a:link {
                color: blue;
            }

            a:visited {
                color: green;
            }

            a:hover {
                color: pink;
            }

            a:active {
                color: red;
            }
        </style>
    </head>
    <body>
        <a href="#" target="_blank">Trang chủ website Quản trị mạng</a>
    </body>
</html>
```
2. Pseudo-class và CSS Class
Các Pseudo-class có thể được kết hợp với các lớp trong CSS.
```html
<!DOCTYPE html>
<html>
    <head>
        <style>
            .myClass{
                background-color: teal;
                width: 200px;
                height: 100px;
            }
            .myClass:hover {
                background-color:tomato;
            }
        </style>
    </head>
    <body>
        <div class="myClass"></div>
    </body>
</html>
```
3. Dùng Pseudo-Class tạo tooltip
Một tooltip :hover di chuyển chuột vào phần tử <div> để hiển thị phần tử <p>
```html
<!DOCTYPE html>
<html>
    <head>
        <style>
            .myClass{
                background-color: teal;
                width: 200px;
                height: 100px;
            }
            .myClass p {
                margin: 0;
                color: #ffffff;
                display: none;
            }
            .myClass:hover p{
                display: block;
            }
        </style>
    </head>
    <body>
        <div class="myClass">
            <p>Đây là thẻ p</p>
        </div>
    </body>
</html>
```
4. Tree-structural pseudo-classes
- `:root` xác định phần tử gốc.
```html
<!DOCTYPE html>
<html>
    <head>
        <style> 
            :root {
                background: red;
            }
        </style>
    </head>
    <body>
        <h1>This is a heading</h1>
    </body>
</html>
```
- `:empty` xác định phần tử không có phần tử con nào.
```html
<!DOCTYPE html>
<html>
    <head>
        <style> 
            div:empty {
                background: red;
            }
        </style>
    </head>
    <body>
        <div></div> <!-- background: red; -->
        <div>Phần tử con</div>
        <div>
            <p>Phần tử con</p>
        </div>
    </body>
</html>
```
- `:first-of-type` xác định kiểu của phần tử con mà nó là kiểu của phần tử đầu tiên trong phần tử cha.
- `:last-of-type` xác định kiểu của phần tử con mà nó là kiểu của phần tử cuối cùng trong phần tử cha.
```html
<!DOCTYPE html>
<html>
    <head>
        <style> 
            div p:first-of-type{
                color: red;
            }
            div p:last-of-type{
                color: blue;
            }
        </style>
    </head>
    <body>
        <div>
            <i>Thẻ i</i>
            <p>Thẻ p 1</p> <!--color: red-->
            <i>Thẻ i</i>
            <p>Thẻ p 2</p> <!--color: blue-->
            <i>Thẻ i</i>
        </div>
    </body>
</html>
```
- `:nth-of-type(n)` xác định kiểu của phần tử con mà nó là kiểu của phần tử con thứ `n` trong phần tử cha. Tính từ trên xuống.
- `:nth-last-of-type(n)` xác định kiểu của phần tử con mà nó là kiểu của phần tử con thứ `n` trong phần tử cha. Tính từ dưới lên.
    + `odd`: Đại diện cho các phần tử có vị trí số lẻ: 1, 3, 5, ...
    + `even`: Đại diện cho các phần tử có vị trí số chẵn: 2, 4, 6, ...
```html
<!DOCTYPE html>
<html>
    <head>
        <style> 
            div p:nth-of-type(1){
                color: red;
            }
        </style>
    </head>
    <body>
        <div>
            <i>Thẻ i</i>
            <p>Thẻ p 1</p> <!--color: red-->
            <i>Thẻ i</i>
            <p>Thẻ p 2</p>
            <i>Thẻ i</i>
        </div>
    </body>
</html>
```
- `:only-of-type`: xác định kiểu của phần tử con là duy nhất trong phần tử cha.
```html
<!DOCTYPE html>
<html>
    <head>
        <style> 
            div p:only-of-type{
                color: red;
            }
        </style>
    </head>
    <body>
        <div>
            <i>Thẻ i</i>
            <p>Thẻ p 1</p> <!--color: red-->
            <i>Thẻ i</i>
        </div>
        <div>
            <p>Thẻ p 2</p>
            <p>Thẻ p 3</p>
        </div>
    </body>
</html>
```

- `:first-child` xác định một phần tử con đầu tiên.
- `:last-child` xác định một phần tử con cuối cùng.
```html
<!DOCTYPE html>
<html>
    <head>
        <style>
            p:first-child{
                color: red;
            }
            p:last-child {
                color: blue;
            } 
        </style>
    </head>
    <body>
        <div>
            <p>Thẻ p 1</p> <!-- color red -->
            <p>Thẻ p 2</p>
            <p>Thẻ p 3</p> <!-- color blue -->
          </div>
    </body>
</html>
```
- `:nth-child(n)`: xác định phần tử con thứ `n`. Tính từ trên xuống.
    + `odd`: Đại diện cho các phần tử có vị trí số lẻ: 1, 3, 5, ...
    + `even`: Đại diện cho các phần tử có vị trí số chẵn: 2, 4, 6, ...
```html
<!DOCTYPE html>
<html>
    <head>
        <style>
            p:nth-child(3){
                color: red;
            }
        </style>
    </head>
    <body>
        <div>
            <p>Thẻ p 1</p>
            <p>Thẻ p 2</p>
            <p>Thẻ p 3</p> <!-- color red -->
            <p>Thẻ p 4</p>
          </div>
    </body>
</html>
```
```html
<!DOCTYPE html>
<html>
    <head>
        <style>
            p:nth-child(odd){
                color: red;
            }
            p:nth-child(even){
                color: blue;
            }
        </style>
    </head>
    <body>
        <div>
            <p>Thẻ p 1</p> <!-- color red -->
            <p>Thẻ p 2</p> <!-- color blue -->
            <p>Thẻ p 3</p> <!-- color red -->
            <p>Thẻ p 4</p> <!-- color blue -->
          </div>
    </body>
</html>
```
- `:nth-last-child(n)`: xác định phần tử con thứ `n`. Tính từ dưới lên.
```html
<!DOCTYPE html>
<html>
    <head>
        <style> 
            p:nth-last-child(1) {
                color: red;
            } 
        </style>
    </head>
    <body>
        <p>The first paragraph.</p>
        <p>The second paragraph.</p>
        <p>The third paragraph.</p>
        <p>The fourth paragraph.</p> <!-- color red -->
    </body>
</html>
```
- `:only-child`: xác định phần tử con duy nhất.
```html
<!DOCTYPE html>
<html>
    <head>
        <style> 
            div p:only-child {
                background: red;
            }
        </style>
    </head>
    <body>
        <div>
            <p>This is a paragraph.</p> <!-- color red -->
        </div>
        
        <div>
            <p>This is a paragraph.</p>
            <p>This is a paragraph.</p>
        </div>
    </body>
</html>
```
5. Pseudo-class :lang trong CSS
Sử dụng Pseudo-class :lang trong CSS để định nghĩa một quy tắc đặc biệt cho một ngôn ngữ nào đó trong một phần tử cụ thể.
```html
<!DOCTYPE html>
<html>
    <head>
        <style>
            q:lang(no) {
                quotes: "~" "~";
            }
        </style>
    </head>
    <body>
        <p>Some text <q lang="no">A quote in a paragraph</q> Some text.</p>
        <p>In this example, :lang defines the quotation marks for q elements with lang="no":</p>
    </body>
</html>
```
6. Các Pseudo-class khác
[Link tham khảo thêm](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes)