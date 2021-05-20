# CSS Selector
- Công cụ chọn trong CSS dùng để tìm (và chọn) phần tử HTML dựa trên tên, id, class, thuộc tính… của phần tử.
1. Element Selector
- Chọn phần tử dựa vào tên phần tử.
```css
p {
  text-align: center;
  color: red;
}
/* tất cả phần tử <p> sẽ được căn giữa và có màu đỏ */
```
2. Id Selector
- Chọn `id` của phần tử HTML.
```css
#para1 {
  text-align: center;
  color: red;
}
/*phần tử có id="para1" sẽ có màu đỏ và được căn giữa */
```
3. Class Selector
- Chọn phần tử bằng thuộc tính `class`.
```css
.center {
  text-align: center;
  color: red;
}
/* tất cả phần tử có class="center" sẽ có màu đỏ và được căn giữa */
```
4. Descendant combinator Selector
- Chọn các phần tử con cháu.
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .container p {
            color: red;
        }
    </style>
</head>
<body>
    <div class="container">
        <div>
            <p>Thẻ p</p> <!-- color red-->
        </div>
        <p>Thẻ p</p> <!-- color red-->
    </div>
</body>
</html>
```
5. Child combinator
- Chọn phần tử con.
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .container > p {
            color: red;
        }
    </style>
</head>
<body>
    <div class="container">
        <div>
            <p>Thẻ p</p>
        </div>
        <p>Thẻ p</p> <!-- color red-->
    </div>
</body>
</html>
```
6. Adjacent sibling combinator
- Chọn các phần tử cùng cấp và liền kề.
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .container + p {
            color: red;
        }
    </style>
</head>
<body>
    <div class="container">
        <div>
            <p>Thẻ p</p>
        </div>
        <p>Thẻ p</p>
    </div>
    <p>Thẻ p</p> <!-- color red-->
    <p>Thẻ p</p>
</body>
</html>
```html
7. General sibling combinator
- Chọn các phần tử cùng cấp.
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .container ~ p {
            color: red;
        }
    </style>
</head>
<body>
    <div class="container">
        <div>
            <p>Thẻ p</p>
        </div>
        <p>Thẻ p</p>
    </div>
    <b>Thẻ b</b>
    <p>Thẻ p</p> <!-- color red-->
    <p>Thẻ p</p> <!-- color red-->
</body>
</html>
``` 

8. Group Selector
- Công cụ này dùng để nhóm các phân tử có cùng kiểu lại.
```css
h1, h2, p {
 text-align: center;
 color: red;
}
/* tất cả phần tử h1, h2, p sẽ có màu đỏ và được căn giữa */
```
9. Attribute selector
- Attribute selector là chọn các phần tử dựa vào thuộc tính của phần tử đó.
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
- `[attribute="value"]`: được sử dụng để chọn tất cả các phần tử có thuộc tính mà trong thuộc tính đó có duy nhất một giá trị bằng với giá trị được chỉ định.
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
- `[attribute~="value"]`: được sử dụng để chọn tất cả các phần tử có thuộc tính mà trong thuộc tính đó có giá trị bằng với giá trị được chỉ định.
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
- [attribute|="value"] được sử dụng để chọn tất cả các phần tử có thuộc tính mà giá trị bắt đầu bằng giá trị được chỉ định.
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
- [attribute^="value"] được sử dụng để chọn tất cả các phần tử có thuộc tính mà giá trị bắt đầu bằng giá trị value được chỉ định, kể cả những từ ở dạng liền kề với từ khác.
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
- [attribute$="value"] được sử dụng để chọn tất cả các phần tử có thuộc tính mà giá trị kết thúc bằng giá trị được chỉ định, kể cả những từ ở dạng liền kề với từ khác.
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
- [attribute*="value"] được sử dụng để chọn tất cả các phần tử có thuộc tính mà giá trị có chứa các ký tự bằng giá trị được chỉ định.
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
