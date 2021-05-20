# CSS Float
- Thuộc tính Float sử dụng để chuyển một phần tử sang góc trái hoặc phải của không gian bao quanh nó, rất cần thiết trong việc định dạng bố cục trang.
- Thuộc tính Float có thể có một trong các giá trị sau:

+ `left`: Cố định phần tử về bên trái.
+ `right`: Cố định phần tử về bên phải.
+ `none`: Nằm tại chính vị trí của nó (trạng thái bình thường).
+ `inherit` (kế thừa): Phần tử kế thừa giá trị từ float cha.
# Thuộc tính Clear
- Clear gần như là ngược lại với float. Thuộc tính Clear ngăn chặn thành phần A chiếm vùng không gian của thành phần B (với thành phần B là thành phần sử dụng float). Đôi khi không muốn float ở một số tình huống nào đó ta sẽ dùng clear để khắc chế.
- Thuộc tính float có thể có một trong các giá trị sau:

+ `left`: Tràn về phía bên trái.
+ `right`: Tràn về phía bên phải.
+ `none`: Cho phép tràn lên cả hai phía (mặc định).
+ `both`: Không cho phép tràn về bên nào
+ `inherit` (kế thừa): Phần tử kế thừa giá trị từ float cha.
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        p{
            background-color: aqua;
            max-width: 500px;
           
        }
        img{
            float: left;
            height: 100px;
            width: 100px;
        }
    </style>
</head>
<body>
    <p><img src="https://picsum.photos/100/100"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid quod ratione facere aperiam labore quos, </p>
    <p style="clear: left">nam modi nemo incidunt doloremque asperiores quibusdam nihil, necessitatibus magni nostrum porro explicabo, consequatur assumenda.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid quod ratione facere aperiam labore quos.</p>
</body>
</html>
```
