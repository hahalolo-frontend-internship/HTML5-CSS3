# Vị trí đặt CSS
Có 3 cách để thêm tập tin định dạng cho văn bản HTML.
- Tập tin định dạng ngoài
- Tập tin định dạng nội bộ
- Nội dòng(inline)

1. Tập tin định dạng ngoài
Mỗi trang sẽ có tham chiếu tới tập tin ngoài này trong phần tử `<link>` nằm trong phần `<head>` .
```html
<head>
    <link rel="stylesheet" type="text/css" href="mystyle.css">
</head>
```
2. Tập tin định dạng nội bộ
Được định nghĩa bằng phần tử `<style>` và nằm trong phần `<head>` của trang HTML.
```html
<!DOCTYPE html>
<html>
    <head>
        <style>
            h1 {
                color: red;
            }
        </style>
    </head>
    <body>
        <h1>Website Quản Trị Mạng - Heading 1</h1> 
    </body>
</html>
```
3. Nội dòng(inline)
Nên dùng kiểu định dạng này nếu áp dụng một kiểu định dạng riêng cho một phần tử riêng.
```html
<h1 style="color: blue; margin-left: 30px;">Tiêu đề</h1>
```
# Thứ tự phân tầng
Thứ tự áp dụng kiểu định dạng tuân theo cấp bậc từ cao xuống thấp như sau:
- Định dạng nội dòng (bên trong phần tử HTML)
- Các tập tin định dạng nội bộ và bên ngoài (trong phần head)
- Mặc định của trình duyệt