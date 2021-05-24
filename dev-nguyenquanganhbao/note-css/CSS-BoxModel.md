# Box Model

Các phần tử trong HTML có thể được coi là những chiếc hộp. Trong CSS, thuật ngữ “mô hình hộp” được dùng để nói về việc thiết kế, dàn layout.
Về cơ bản mô hình hộp CSS là một chiếc hộp bao xung quanh phần tử HTML, gồm lề, đường viền, padding và nội dung bên trong.

![boxmoder](https://st.quantrimang.com/photos/image/2018/06/19/css-padding-minh-hoa.jpg)

```html
<!DOCTYPE html>
<html>
    <head>
        <style>
            div {
                width: 200px;
                height: 200px;
                padding: 20px;
                margin: 0;
                border: 10px solid;
                background-color: red;
            }
        </style>
    </head>
    <body>
        <div>

        </div>
    </body>
</html>
```
-   Chiều rộng và chiều cao của phần tử
    + Chiều rộng bằng margin trái + viền trái + padding trái + content + padding phải + viền phải + margin phải.
    + Chiều cao bằng margin trên + viền trên + padding trên + content + padding dưới + viền dưới margin dưới.

- Để phần tử hiển thị đúng như width height như đã set ban đầu thì sử dụng thêm `box-sizing: border-box;`.