# Bảng

```html
<table>
    <caption>Phụ đề</caption>
    <thead>
        <tr>
            <th colspan="4">Tiêu đề bảng</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Cell 1</td>
            <td>Cell 2</td>
            <td>Cell 3</td>
            <td>Cell 4</td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <td colspan="4">Day la phan chan bang</td>
        </tr>
    </tfoot>
</table>
```
- Thẻ table để tạo bảng.
- `<caption>` phụ đề cho bảng.
- Thẻ `<tr>` để tạo hàng.
- Thẻ `<th>` để tạo  các ô tiêu đề.
- Thẻ `<td>` để tạo các ô.
- Thẻ `<thead>` tạo một tiêu đề bảng riêng biệt.
- Thẻ `<tbody>` chỉ nội dung chính của bảng.
- Thẻ `<tfoot>` tạo một phần chân bảng riêng biệt.
- Các thuộc tính:
    + `boder="1"`: sử dụng để đặt đường viền cho các ô.
    ```html
    <table border="1">
    ```
    + `cellspacing`: xác định độ rộng của Border.
    + `cellpadding`: thay cho khoảng cách giữa Border và nội dung bên trong một ô.
    ```html
    <table border="1" cellpadding="5" cellspacing="5">
        <tr>
            <th>Ten nhan vien</th>
            <th>Luong</th>
        </tr>
        <tr>
            <td>Minh Chinh</td>
            <td>5000</td>
        </tr>
        <tr>
            <td>Duy Manh</td>
            <td>7000</td>
        </tr>
    </table>
    ```
    + `colspan`: để gộp hai hay nhiều cột vào một cột.
    + `rowspan`: để nhập hai hay nhiều hàng vào một hàng.
    ```html
    <table border="1">
        <tr>
            <th>Column 1</th>
            <th>Column 2</th>
            <th>Column 3</th>
        </tr>
        <tr>
            <td rowspan="2">Row 1 Cell 1</td>
            <td>Row 1 Cell 2</td>
            <td>Row 1 Cell 3</td>
        </tr>
        <tr>
            <td>Row 2 Cell 2</td>
            <td>Row 2 Cell 3</td>
        </tr>
        <tr>
            <td colspan="3">Row 3 Cell 1</td>
        </tr>
    </table>
    ```
    + `bordercolor`: thiết lập màu viền cho bảng.
    + `bgcolor`: thiết lập màu nền cho bảng.
    ```html
    <table border="1" bordercolor="red  " background="yellow">
    ```
    + `width` và `height` để thiết lập độ rộng và chiều cao của bảng.
    ```html
    <table border="1" width="400" height="150">
    ```