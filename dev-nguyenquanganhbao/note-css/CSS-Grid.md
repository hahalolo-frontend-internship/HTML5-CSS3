# Grid Layout

## Grid Container
1. grid-template-columns
- Thuộc tính `grid-template-columns` sẽ tương ứng với số cột, các giá trị sẽ tương ứng với chiều rộng 
của các cột lần lượt từ trái sang phải.
2. grid-template-rows
- Thuộc tính `grid-template-rows` sẽ tương ứng số hàng, các giá trị sẽ tương ứng với chiều cao của các hàng lần lượt từ trên xuống dưới.
```css
.wrapper {
    display: grid;
    grid-template-columns: 200px 200px 200px;
    grid-template-rows: 100px 100px;
}
```
Trong đoạn code trên, thuộc tính `grid-template-columns` 3 giá trị, như vậy, grid của chúng ta sẽ có 3 cột, mỗi cột đều có chiều rộng là 200px. Thuộc tính `grid-template-rows` có 2 giá trị, tương ứng với 2 hàng, mỗi hàng có chiều cao là 100px.
- Ngoài ra có thể dùng fr để hiển thị full trong một khối như `grid-template-columns: 1fr 1fr 2fr`, `grid-template-rows: 1fr 2fr`
- Nếu trong 1 grid cần lặp lại nhiều lần các grid tracks thì chúng ta có thể sử dụng thuộc tính `repeat()`.
```css
grid-template-columns: 30px repeat(2, 1fr) 30px;
```
Ví dụ trên có thể hiểu được là column đầu tiên thì có width là 30px là sau đó sẽ lặp lại 2 column có width bằng nhau và column cuối cùng sẽ có width là 30px.
- Hàm `minmax` giúp chúng ta thiết lập độ rộng của cột hoặc chiều cao của dòng theo giá trị tối thiểu và tối đa cho phần tử.
    + Max-content thì content sẽ rộng ra hết mức có thể với demo Codepen (các bạn có thể thay giá trị min-content thành max-content để thấy kết quả) dù mình đã set minmax(max-content, 300px)rồi nhưng khi dùng với max-content thì content vẫn sẽ dài ra làm cho độ rộng của phần tử dài ra vượt qua độ rộng tối đa 300px luôn.
5
    + Min-content thì ngược lại nó sẽ nhỏ lại hết mức có thể. Khi các bạn co trình duyệt lại tới mức phần tử không còn độ rộng tối đa là 300px nữa với min-content thì content bên trong sẽ tự động thu nhỏ lại hết mức (phụ thuộc vào từ dài nhất) và tất nhiên các chữ sẽ rớt xuống rồi.
3. grid-gap
- Khoảng cách giữa các cột trong grid được gọi là `column-gap`, còn khoảng cách giữa các hàng trong grid được gọi là `row-gap`. Để thay đổi khoảng cách giữa các cột và các hàng, chúng ta sẽ sử dụng `grid-column-gap` và `grid-row-gap`.
```css
.wrapper {
    display: grid;
    grid-column-gap: 50px;
    grid-row-gap: 25px;
}
```
- Để viết ngắn gọn hơn, dùng `grid-gap`. Giá trị thứ nhất sẽ tương ứng với `grid-column-gap`, còn giá trị thứ hai sẽ tương ứng với `grid-row-gap`.
```css
.wrapper {
    display: grid;
    grid-column-gap: 50px 25px;
}
```
4. justify-content
- Thuộc tính `justify-content` được sử dụng để sắp xếp toàn bộ grid item bên trong container theo chiều ngang. Tổng chiều rộng của `grid item` phải nhỏ hơn chiều rộng của `container` để thuộc `justify-contenttính` có hiệu lực.
- Các giá trị của `justify-content`:
+ `start`: sẽ căn chỉnh các grid item ở đầu container.
+ `end`: sẽ căn chỉnh các grid item ở cuối container.
+ `center`: sẽ căn chỉnh các grid item ở giữa container.
+ `space-between`: sẽ căn chỉnh các grid item khoảng cách bằng nhau giữa chúng, grid item đầu và grid item cuối sẽ sát với lề của container.
+ `space-around`: sẽ căn chỉnh các grid item khoảng cách bằng nhau giữa chúng, grid item đầu và grid item cuối sẽ cách lề của container và có khoảng cách bằng một nữa khoảng cách giữa các grid item.
+ `space-evenly`: sẽ căn chỉnh các grid item khoảng cách bằng nhau giữa chúng và lề của container.
5. align-content
- Thuộc tính `align-content` được sử dụng để sắp xếp toàn bộ grid item bên trong container theo chiều dọc. Tổng chiều cao của `grid item` phải nhỏ hơn chiều cao của `container` thì thuộc tính `align-content` mới có hiệu lực.
- Các giá trị của `align-content` giống như các giá trị của `justify-content` những nó căn chỉnh các `grid item` theo chiều dọc của `container`
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .container { 
            display: grid;
            grid-template-columns: 200px 200px 200px;
            grid-template-rows: 200px;
            grid-gap: 10px;
            border: 1px solid;
            justify-content: space-around;
            align-items: center;
        }

        .item {
            padding: 10px;
            text-align: center;
            color: #fff;
        }

        .item1 { background-color: #fd8471; }
        .item2 { background-color: #68e972; }
        .item3 { background-color: #64e0d5; }

        
    </style>
</head>
<body>
    <div class="container">
        <div class="item item1">1</div>
        <div class="item item2">2</div>
        <div class="item item3">3</div>
      </div>
</body>
</html>
```
## Grid Item
1. grid-column
2. grid-row
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .container {
            display: grid;
            grid-template-columns: 200px 200px 200px;
            grid-template-rows: 100px 100px 100px;
            grid-gap: 10px;
            border: 1px solid;
        }

        .item {
            padding: 10px;
            text-align: center;
            color: #fff;
        }

        .item1 {
            background-color: #fd8471;
            /* grid-column-start: 1;
            grid-column-end: 3; */
            grid-column: 1/4;

            /* từ line 5 chạy từ phải về trái chiếm 2 ô*/
            /* grid-column: span 2 / 5;  */
            /* từ line thứ 2 chạy từ trái qua phải chiếm 5 ô */
            /* grid-column: 2 / span 5;  */
        }

        .item2 {
            background-color: #68e972;
            grid-row: 2/ 4;
        }

        .item3 {
            background-color: #64e0d5;
        }

        .item4 {
            background-color: antiquewhite;
        }

        .item5 {
            background-color: blueviolet;
        }

        .item6 {
            background-color: crimson;
        }
    </style>
</head>

<body>
    <div class="container">
        <div class="item item1">1</div>
        <div class="item item2">2</div>
        <div class="item item3">3</div>
        <div class="item item4">4</div>
        <div class="item item5">5</div>
        <div class="item item6">6</div>
    </div>
</body>

</html>
```
3. grid-area

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .container {
            display: grid;

            max-width: 750px;
            margin: 0 auto;

            grid-gap: 20px;
            grid-template-areas:    "header header header"
                                    "main main sidebar"
                                    "footer footer footer";
        }

        .item {
        color: white;
        font-size: 20px;
        padding: 20px;
        }
        .item-1 {
        background: #b03532;
        grid-area: header;
        }
        .item-2 {
        background: #33a8a5;
        grid-area: main;
        display: grid;
        grid-template-rows: 100px;
        grid-gap: 20px;
        grid-template-areas: "mainLeft mainRight";
        }
        .item-21{
            background-color: blue;
            grid-area: mainLeft;
        }
        .item-22{
            background-color: red;
            grid-area: mainRight;
        }
        .item-3 {
        background: #30997a;
        grid-area: sidebar;
        }
        .item-4 {
        background: #6a478f;
        grid-area: footer;
        }

    </style>
</head>

<body>
    <div class="container">
        <div class="item item-1">header</div>
        <div class="item item-2">
            <div class="item-21">
                main left
            </div>
            <div class="item-22">
                main right
            </div>
        </div>
        <div class="item item-3">sidebar</div>
        <div class="item item-4">footer</div>
    </div>
</body>

</html>
```



