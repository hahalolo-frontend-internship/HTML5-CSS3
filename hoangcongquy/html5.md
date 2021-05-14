## 1. HTML5 có gì mới so với HTML4
   - HTML5 hỗ trợ cho nhiều ứng dụng hơn như SVG, canvas
   - Js chạy trong web browser: HTML5 hỗ trợ hoàn toàn cho JavaScript chạy trên web browser, còn HTML ở các phiên bản cũ hơn thì không thể thực hiện được.
   - Lưu dữ liệu tạm: HTML5 sử dụng web SQL databases, application cache còn HTML chỉ dùng cache của trình duyệt.
## 2. Một số thẻ được giới thiệu trong HTML5 như Article, Section, Header, Footer , Main, Nav, Audio, Video, ... và ý nghĩa của mỗi thẻ đó?
   - `<article>`: Định nghĩa một bài viết hoặc bình luận của người dùng, độc lập với content của website.
   - `<aside>`: Đánh dấu nội dung một trang hiện tại.
   - `<header><footer>`: Loại bỏ việc định nghĩa id cho tiêu đề và cuối trang.
   - `<nav>`: Định nghĩa phần menu điều hướng cho website.
   - `<section>`: Xác định các thành phần khác nhau trong website.
   - `<audio>, <video>`: Hỗ trợ người dùng xem clip và nghe nhạc trên website mà không cần bên thứ ba.
   - `<embed>`: Xác định một container các plugin tương tác với ứng dụng bên ngoài.
   - `<canvas>`: Cho phép bạn đồ họa mà không cần ứng dụng hỗ trợ.
## 3. Thuộc tính defer vs async trên thẻ Script là gì?
   - `defer Attribute`  
      ```js 
      <script src="demo_defer.js" defer></script>
      ```
      + Đoạn mã ở trên yêu cầu thông tin từ đoạn bên dưới. Thông thường, điều này là không thể, vì tập lệnh được thực thi trước khi đoạn văn bản tồn tại.
      + Tuy nhiên, thuộc tính defer chỉ định rằng tập lệnh sẽ được thực thi sau đó. Bằng cách này, tập lệnh có thể yêu cầu thông tin từ đoạn văn.
   - `async Attribute`
      ```js
      <script src="demo_async.js" async></script>
      ```
      + Tập lệnh được thực thi không đồng bộ với phần còn lại của trang (tập lệnh sẽ được thực thi trong khi trang tiếp tục phân tích cú pháp
      + Không có async mà có defer thì tập lệnh được thực thi khi trang hoàn tất quá trình phân tích cú pháp
      + Không có cả 2 thì tập lệnh được tìm nạp và thực thi ngay lập tức, trước khi trình duyệt tiếp tục phân tích cú pháp trang
## 4. Thuộc tính data-* có nghĩa gì?
   + Sử dụng thuộc tính `data- *` để nhúng dữ liệu tùy chỉnh
