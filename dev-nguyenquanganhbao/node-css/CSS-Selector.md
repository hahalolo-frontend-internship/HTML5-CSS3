# CSS Selector
- Công cụ chọn trong CSS dùng để tìm (và chọn) phần tử HTML dựa trên tên, id, class, thuộc tính… của phần tử.
1. Element Selector
- Đây là công cụ chọn phần tử dựa vào tên phần tử.
```css
p {
  text-align: center;
  color: red;
}
/* tất cả phần tử <p> sẽ được căn giữa và có màu đỏ */
```
2. Id Selector
- Công cụ này dùng thuộc tính `id` của phần tử HTML để chọn. `id` của một phần tử trong trang phải là độc nhất nên `id Selector` dùng để chọn một phần tử duy nhất.
```css
#para1 {
  text-align: center;
  color: red;
}
/*phần tử có id="para1" sẽ có màu đỏ và được căn giữa */
```
3. Class Selector
- Công cụ này chọn phần tử bằng thuộc tính `class`.
```css
.center {
  text-align: center;
  color: red;
}
/* tất cả phần tử có class="center" sẽ có màu đỏ và được căn giữa */
```
4. Group Selector
- Công cụ này dùng để nhóm các phân tử có cùng kiểu lại.
```css
h1, h2, p {
 text-align: center;
 color: red;
}
/* tất cả phần tử h1, h2, p sẽ có màu đỏ và được căn giữa */
```
5. Attribute selector
- Attribute selector là cách chọn các phần tử bạn muốn định kiểu (style) trong tài liệu HTML dựa vào thuộc tính của một hay nhiều thẻ HTML nào đó. Attribute selector có thể chọn được các đối tượng mà không cần phải khai báo thêm các Class hoặc ID vào trong thẻ HTML và vẫn có thể hướng được đến các thành phần đó, giúp code gọn gàng hơn và mạch lạc hơn.
```html
<!DOCTYPE html>
<html>
    <head>
        <style>
            a[target] {
                color: yellow;
            }
        </style>
    </head>
    <body>
        <a href="https://www.w3schools.com">w3schools.com</a><br>
        <a href="http://www.disney.com" target="_blank">disney.com</a><br> <!-- color yellow -->
        <a href="http://www.wikipedia.org" target="_top">wikipedia.org</a> <!-- color yellow -->
    </body>
</html>
```
- `[attribute="value"]`: được sử dụng để chọn tất cả các phần tử có thuộc tính [attribute] và giá trị value được chỉ định.
```html
<!DOCTYPE html>
<html>
    <head>
        <style>
            [title=flower] {
                border: 5px solid yellow;
            }
        </style>
    </head>
    <body>
        <img src="klematis.jpg" title="klematis flower" width="150" height="113"> 
        <img src="img_flwr.gif" title="flower" width="224" height="162"> <!-- Có border -->
        <img src="img_tree.gif" title="tree" width="200" height="358">
    </body>
</html>
```
- `[attribute~="value"]`: được sử dụng để chọn tất cả các phần tử có thuộc tính [attribute] chứa giá trị value được chỉ định.
```html
<!DOCTYPE html>
<html>
    <head>
        <style>
            [title~=flower] {
                border: 5px solid yellow;
            }
        </style>
    </head>
    <body>
        <img src="klematis.jpg" title="klematis flower" width="150" height="113"> <!-- Có border -->
        <img src="img_flwr.gif" title="flower" width="224" height="162"> <!-- Có border -->
        <img src="img_tree.gif" title="tree" width="200" height="358">
    </body>
</html>
```
- [attribute|="value"] được sử dụng để chọn tất cả các phần tử có thuộc tính [attribute] bắt đầu bằng giá trị value được chỉ định.
```html
<!DOCTYPE html>
    <html>
        <head>
            <style>
                [class|=top] {
                    color: yellow;
                }
            </style>
    </head>
    <body>
        <h1 class="top-header">Welcome</h1> <!-- color yellow -->
        <p class="top-text">Hello world!</p> <!-- color yellow -->
        <p class="topcontent">Are you learning CSS?</p>
    </body>
</html>
```
- [attribute^="value"] được sử dụng để chọn tất cả các phần tử có thuộc tính [attribute] bắt đầu bằng giá trị value được chỉ định, khác với [attribute|="value"] phía trên ở chỗ nó không có ngoại lệ và chọn tất cả các phần tử bắt đầu bằng value, kể cả những từ ở dạng liền kề với từ khác.
```html
<!DOCTYPE html>
    <html>
        <head>
            <style>
                [class^=top] {
                    color: yellow;
                }
            </style>
    </head>
    <body>
        <h1 class="top-header">Welcome</h1> <!-- color yellow -->
        <p class="top-text">Hello world!</p> <!-- color yellow -->
        <p class="topcontent">Are you learning CSS?</p> <!-- color yellow -->
        <p class="content-top">Are you learning CSS?</p>
    </body>
</html>
```
- [attribute$="value"] được sử dụng để chọn tất cả các phần tử có thuộc tính [attribute] kết thúc bằng giá trị value được chỉ định.
```html
<!DOCTYPE html>
<html>
    <head>
        <style> 
            [class$="test"] {
                color: yellow;
            }
        </style>
    </head>
    <body>
        <div class="first_test">The first div element.</div> <!-- color yellow -->
        <div class="test-second">The second div element.</div>
        <div class="my-test">The third div element.</div> <!-- color yellow -->
        <p class="mytest">This is some text in a paragraph.</p> <!-- color yellow -->
    </body>
</html>
```
- [attribute*="value"] được sử dụng để chọn tất cả các phần tử có thuộc tính [attribute] chứa bằng giá trị value được chỉ định.
```html
<!DOCTYPE html>
    <html>
        <head>
            <style> 
                [class*="te"] {
                    color: yellow;
                }
            </style>
        </head>
    <body>
        <div class="first_test">The first div element.</div> <!-- color yellow -->
        <div class="second">The second div element.</div>
        <div class="my-test">The third div element.</div> <!-- color yellow -->
        <p class="myte">This is some text in a paragraph.</p> <!-- color yellow -->
    </body>
</html>
```
