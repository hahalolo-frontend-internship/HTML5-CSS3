# Media
1. Video
    - Thẻ `<video>` được sử dụng để hiển thị video trên trang web.
    - Thẻ `<source>` chỉ định các tệp video thay thế mà trình duyệt có thể chọn. Trình duyệt sẽ sử dụng định dạng được nhận dạng đầu tiên. Trong `<source>` có thuộc tính type (kiểu của video) và src (đường dẫn của video).
    - Các thuộc tính bên trong `<video>`
        + `controls`: dùng để hiển thị thanh đều khiển video: phát video, dừng video, chỉnh âm lượng.
        + `width`: chỉnh chiều rộng của video.
        + `height`: chỉnh chiều cao của video.
        + `autoplay`: cho phép video bắt đầu phát tự động.
        + `muted` được thêm sau `autoplay`cho phép video bắt đầu phát tự động (nhưng bị tắt tiếng).
        ```html
        <video width="400" height="200" autoplay muted>
            <source src="./mov_bbb.mp4" type="video/mp4">
        </video>
        ```
2. Âm thanh
    - Thẻ `<audio>` được sử dụng để phát tệp âm thanh trên trang web.
    ```html
    <audio controls>
        <source src="horse.ogg" type="audio/ogg">
    </audio>
    ```
    - Các thuộc tính bên trong `<audio>`
        + `controls`: dùng để hiển thị thanh đều khiển đoạn âm thanh: phát, dừng, chỉnh âm lượng.
        + `autoplay`: cho phép đoạn âm thanh bắt đầu phát tự động.
3. Plug-ins
    - Plug-ins được thiết kế để sử dụng cho nhiều mục đích khác nhau:
        + Để chạy các ứng dụng Java
        + Để chạy các điều khiển ActiveX của Microsoft
        + Để hiển thị phim Flash
        + Để hiển thị bản đồ
        + Để quét vi rút
        + Để xác minh một id ngân hàng
    - Thẻ `<object>` được dùng để xác định một đối tượng được nhúng trong tài liệu HTML. Nó được thiết kế để nhúng các trình cắm thêm (như ứng dụng Java, trình đọc PDF và Trình phát Flash) vào các trang web, nhưng cũng có thể được sử dụng để đưa HTML vào HTML:
    ```html
    <object width="100%" height="500px" data="snippet.html"></object>
    ```
    hoặc hình ảnh
    ```html
    <object data="audi.jpeg"></object>
    ```
    - Thẻ `<embed>` này cũng xác định một đối tượng nhúng trong tài liệu HTML.
    ```html
    <embed width="100%" height="500px" src="snippet.html">
    <embed src="audi.jpeg">
    ```
4. Video Youtobe
    - Để phát video của bạn trên một trang web, hãy làm như sau:
        + Tải video lên YouTube
        + Ghi lại id video
        + Xác định một `<iframe>` phần tử trong trang web của bạn
        + Để srcthuộc tính trỏ đến URL video
        + Sử dụng các thuộc tính widthvà heightđể chỉ định thứ nguyên của trình phát
        + Thêm bất kỳ thông số nào khác vào URL (xem bên dưới)
        ```html
        <iframe width="420" height="315" src="https://www.youtube.com/embed/tgbNymZ7vqY">
        </iframe>
        ```
    - Thêm `mute=1` sau `autoplay=1` để cho phép video của bạn bắt đầu phát tự động (nhưng bị tắt tiếng).
    ```html
    <iframe width="420" height="315"
        src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1">
    </iframe>
    ```
    - Thêm `loop=1` để video của bạn lặp lại mãi mãi. `loop = 0` thì video lặp lại một lần.
    ```html
    <iframe width="420" height="315"
        src="https://www.youtube.com/embed/tgbNymZ7vqY?playlist=tgbNymZ7vqY&loop=1">
    </iframe>
    ```