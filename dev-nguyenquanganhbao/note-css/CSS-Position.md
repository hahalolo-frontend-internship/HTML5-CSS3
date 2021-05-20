# CSS Position
Thuộc tính position xác định phương pháp đặt vị trí cho một phần tử. Các gía trị static, relative, fixed, absolute, sticky.

1. Position: static;
- Là giá trị mặc định của position. Đây là các giá trị mà dù có khai báo chúng hay không thì các phần tử sẽ tự được sắp xếp vị trí một cách như bình thường trên trang web.
2. Position: relative;
- Giúp định vị trí tuyệt đối cho các thành phần so với vị trí ban đầu. Sử dụng thuộc tính này thì sẽ phải sử dụng kèm theo với các thuộc tính căn chỉnh tọa độ(left, right, top, bottom). Chỉ có thể sử dụng nhiều nhất 2 giá trị lền kề nhau như (botton, left), (left, top), (top, right), (right, botton).
`relative` sẽ không làm thay đổi tới việc hiển thị ban đầu.
![img](../img/position-relative.png)
3. Position: absolute;
- Giúp xác định tọa độ của thành phần theo một thẻ cha `relative` gần nhất, nếu không có thẻ cha thì nó sẽ xác định theo `viewport` của trang web. Sử dụng thuộc tính này thì sẽ phải sử dụng kèm theo với các thuộc tính căn chỉnh tọa độ(left, right, top, bottom). Chỉ có thể sử dụng nhiều nhất 2 giá trị lền kề nhau như (botton, left), (left, top), (top, right), (right, botton). `absolute` sẽ làm thay đổi tới việc hiển thị ban đầu.
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .container{
            width: 100%;
            height: 500px;
            border: 1px solid;
            position: relative;
        }
        .box{
            height: 50px;
            width: 50px;
        }
        .box1{
            background: red;
        }
        .box2{
            background: yellow;
            position: absolute;
            left: 100px;
        }
        .box3{
            background: green;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="box box1">

        </div>
        <div class="box box2">

        </div>
        <div class="box box3">

        </div>
    </div>
</body>
</html>
```
4. Position fixed;
- Giúp xác định tọa độ của thành phần theo viewport, nghĩa là luôn nằm ở một nơi ngay cả khi cuộn trang.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        body{
            height: 5000px;
        }
        .container{
            margin-top: 100px;
            width: 100%;
            height: 1000px;
            border: 1px solid;
        }
        .fixed{
            height: 50px;
            width: 300px;
            background-color: red;
            position: fixed;
            top: 0;
            left: 50px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="fixed">

        </div>
    </div>
</body>
</html>
```
5. Position: sticky;
- Giống với `position: fixed;` nhưng `position: sticky` chỉ hoạt động trong thành phần cha chứa nó (Tức là: chỉ bám dính trên thành phần cha chứa nó, nếu thành phần cha bị scroll ra ngoài window thì thành phần con có sử dụng sticky cũng sẽ bị kéo theo).
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        body{
            height: 5000px;
        }
        .container{
            margin-top: 100px;
            width: 100%;
            height: 1000px;
            border: 1px solid;
        }
        .sticky{
            height: 50px;
            width: 300px;
            background-color: red;
            position: sticky;
            top: 0;
            left: 50px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="sticky">

        </div>
    </div>
</body>
</html>
```









