# Pseudo-Element trong CSS
Pseudo-Element trong CSS được sử dụng để thêm các định dạng đặc biệt tới một Selector mà không cần sử dụng đến JavaScript hoặc bất cứ ngôn ngữ Script nào.
- Cú pháp

`selector`::`pseudo-element` {
    property: value;
}

1. Pseudo-element ::first-line trong CSS
- `::first-line` sử dụng để thêm một số hiệu ứng đặc biệt cho dòng đầu tiên của một đoạn.
- Các thuộc tính css sau áp dụng cho `::first-line`:
    + font 
    + color 
    + background 
    + word-spacing
    + letter-spacing
    + text-decoration
    + vertical-align
    + text-transform
    + line-height
    + clear
```html
<!DOCTYPE html>
<html>
<head>
<style>
    p::first-line {
        color: red;
    }
</style>
</head>
<body>

    <p>Quantrimang.com là mạng xã hội <br> <!-- color: red -->
    về khoa học công nghệ, mở rộng nội dung để đáp ứng 
    nhu cầu của các thành viên về nhiều lĩnh vực công nghệ hơn như điện 
    thoại, thiết bị thông minh, điện tử, bảo mật máy tính..</p>

</body>
</html>
```
2. Pseudo-element ::first-letter trong CSS
- `::first-letter`: sử dụng để thêm một định dạng đặc biệt vào chữ cái đầu tiên của một đoạn.
- Các thuộc tính css sau áp dụng cho ::first-letter pseudo-element:
    + font 
    + color 
    + background 
    + margin 
    + padding 
    + border 
    + text-decoration
    + vertical-aligns
    + text-transform
    + line-height
    + float
    + clear
```html
<!DOCTYPE html>
<html>
    <head>
    <style>
        p::first-letter {
            color: red;
        }
    </style>
    </head>
    <body>
        <p>Quantrimang.com là mạng xã hội</p>
    </body>
</html>
```
3. Pseudo-element ::before trong CSS
- `::before` sử dụng để thêm text, hình ảnh hay bất kỳ nội dung gì vào phía trước nội dung của phần tử được chọn.
```html
<!DOCTYPE html>
<html>
    <head>
        <style>
            h1::after {
                content: "Before";
                color: red;
                margin-right: 20px;
            }
        </style>
    </head>
    <body>
        <h1>Website Quản trị mạng</h1>
    </body>
</html>
```
4. Pseudo-element ::after trong CSS
- `::after` được sử dụng để thêm text, hình ảnh hay bất kỳ nội dung gì vào phía sau nội dung của phần tử được chọn.
```html
<!DOCTYPE html>
<html>
    <head>
        <style>
            h1::after {
                content: "Before";
                color: red;
                margin-left: 20px;
            }
        </style>
    </head>
    <body>
        <h1>Website Quản trị mạng</h1>
    </body>
</html>
```
5. Pseudo-element ::selection trong CSS
- `::selection` được dùng để định dạng cho một vùng văn bản được người dùng chọn(bôi đen). Chỉ có một số thuộc tính css khả dụng với ::selection là color, background, curso, và outline.
```html
<!DOCTYPE html>
<html>
    <head>
        <style>
            ::selection {
                color: white; 
                background: purple;
            }
        </style>
    </head>
    <body>
        <h1>Website Quản trị mạng</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga vel natus, voluptatem 
        quisquam autem dolorum nesciunt exercitationem sapiente at quia ipsa consequuntur 
        necessitatibus delectus nihil eum, maiores veritatis voluptatum repudiandae.</p>
    </body>
</html>
```
6. Các Pseudo-element khác
[Link tham khảo thêm](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements)