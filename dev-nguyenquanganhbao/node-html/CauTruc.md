# Cấu trúc cơ bản của HTML


```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style type="text/css">
    ...
    </style>
    <link type="text/css" rel="stylesheet" href="style.css">
</head>
<body>
    <div>
        ...
    </div>
    <script type="text/javascript" src="index.js" async></script>
</body>
</html>
```


- Thẻ `<!DOCTYPE>`:	Xác định cho trình duyệt biết phiên bản HTML mà bạn đang sử dụng
- Thẻ `<html>`: Xác định một tài liệu HTML
- Thẻ `<head>`: Xác định phần đầu của tài liệu HTML
    + Thẻ `<meta>` dùng để cung cấp thêm "thông tin về trang web" cho trình duyệt và các công cụ tìm kiếm.
        Các thuộc tính của thẻ meta
        * Thuộc tính `charset` dùng để xác định kiểu mã hóa ký tự của trang web.
        * Thuộc tính `name` dùng để xác định "tên của một loại thông tin" mà bạn muốn cung cấp thêm cho trang web.
        * Thuộc tính `content` dùng để xác định "nội dung của một loại thông tin" mà bạn muốn cung cấp thêm cho trang web.
        * Thuộc tính `keywords` dùng để xác định danh sách những từ khóa mà bạn muốn khi người dùng tìm kiếm thì sẽ hiển thị kết quả là trang web của bạn.
        * Thuộc tính `description` dùng để mô tả ngắn gọn nội dung chính của trang web.
        * Thuộc tính `http-equiv` thường được dùng để xác định kiểu nội dung và kiểu mã hóa ký tự của trang web, xác định việc tải lại trang.
    + Thẻ `<title>`: xác định tiêu đề của trang web.
    + Thẻ `<style>` được sử dụng để xác định Style Sheet của tài liệu HTML hiện tại.
    + Thẻ `<link>`: xác định mối quan hệ giữa một tài liệu HTML và các tài nguyên bên ngoài, được dùng phổ biến nhất là link tới tài liệu css.
        Các thuộc tính của thẻ link
        * Thuộc tính `href`: xác định đường dẫn tới các tài liệu liên quan.
        * Thuộc tính `rel`: xác định mối quan hệ giữa tài liệu hiện hành và các tài liệu liên quan.
        * Thuộc tính `type`: xác định kiểu của tài liệu liên quan.
        * Thuộc tính `media`: xác định những "media" gì được hiển thị trong tài liệu liên quan.
- Thẻ body: Xác định phần thân của tài liệu HTML
    + Thẻ `<script>`: được dùng để chứa cho các câu lệnh JavaScript.
        Các thuộc tính của thẻ script
        * Thuộc tính `src`: xác định đường dẫn của file JavaScript từ bên ngoài.
        * Thuộc tính `type`: xác định kiểu của file JavaScript.
        * Thuộc tính `async`: Đảm bảo việc mã lệnh JavaScript chỉ được thực thi sau khi trang web đã được tải xong hoàn toàn. Chỉ áp dụng cho trường hợp tập tin JavaScript ngoài.
        * Thuộc tính `defer`: Đảm bảo việc mã lệnh JavaScript chỉ được thực thi sau khi trang web đã được tải xong hoàn toàn. Chỉ áp dụng cho trường hợp tập tin JavaScript ngoài.



    
