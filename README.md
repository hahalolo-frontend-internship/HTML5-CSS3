# HTML5-CSS3

## HTML5
---
* ### HTML là gì?
    HTLM là ngôn ngữ đánh dấu siêu văn bản
* ### HTML DOM là gì?
    1. DOM 
    
            Viết tắt của Document Object Model
            Gồm 3 thành phần: 
            - Element
            - Attribute
            - Text
    
    2. Mô hình DOM HTML

         ![Mô Hình DOM HTML](https://www.w3schools.com/js/pic_htmltree.gif)


* ### Xử lý Text
    * Heading
        1. Heading 1-6
        ```html
        <h1>Heading 1</h1>   
        <h2>Heading 2</h2>   
        <h3>Heading 3</h3>   
        <h4>Heading 4</h4>   
        <h5>Heading 5</h5>   
        <h6>Heading 6</h6>   
        ```
        2. Paragraphs
        ```html 
        <p>Paragraph</p>
        <pre></pre>                  -hiển thị mặt định text
        <hr>                         -gạch ngang
        <br>                         -xuống dòng
        <strong></strong> <b></b>    -in đậm
        <i></i>                      -in nghiêng
        ```
        3. Link

        ```html
        <a href="link" target="#"></a>   
        - Tag a có 2 Attibute thường dùng là:  
        + href cho biết điểm đến của liên kết
        + target có 4 loại: 
            _self  : Mở tài liệu trong cùng 1 cửa sổ khi click vào
            _blank : Mở tài liệu trong một cửa sổ mới.
            _parent: Mở tài liệu trong khung cha chứa nó
            _top   : Mở tài liệu trong khung chính
        ```
        

* ### Element Thường Sử Dụng
    1. Img
        ```html
            <img src="#" alt="#"></img>
            -Thẻ Img có 2 Attribute thường dùng là:
                + src: Đường dẫn ảnh
                + alt: Chỉ định một văn bản thay thế khi hình ảnh bị lỗi
    2. Picture
        ```html
            <picture>
                <source media="(min-width: 650px)" srcset="img_food.jpg">
                <source media="(min-width: 465px)" srcset="img_car.jpg">
                <img src="img_girl.jpg">
            </picture>

            -media: xác định khung hình hiển thị ảnh
            -srcset: đường dẫn ảnh
    3. Table
        ```html
        <table>
            <caption></caption>
            <tr>
                <th></th>
            </tr>
            <tr>
                <td></td>
            </tr>
        </table>
        - caption: Là Tag chú thích của bảng luôn nằm đầu trong Tag Table
        - tr : Là tag xác định một hàng trong bảng
        - th : Tiêu đề của bảng
        - td : Là tag xác định dữ liệu của bảng
    4. List
        ```html
        <ul>
            <li><li>
        </ul>
        -Một list luôn nằm trong 1 Tag ul hoặc ol
            + ul: mặc định các mục trong danh sách sẽ được đánh dấu bằng một vòng tròn màu đen nhỏ
            + ol: mặc định các mục trong danh sách sẽ được đánh dấu bằng số thứ tự bắt đầu từ 1. 
        -Mỗi mục bắt đầu với 1 Tag li
    5. Block và Inline
        - Block: là các thẻ có kiểu display: block luôn được xuống dòng và chiếm toàn bộ width nếu width không được set ví dụ như thẻ div, p, section, ul, nav..
        - Inline: là các thẻ có kiểu display: inline sẽ nằm trên cùng một dòng nếu các item vượt quá độ dài của dòng thì item sẽ xuống dòng mới. Các item có kiểu display này không thể set được width và height. Có thể điều chỉnh được padding và margin left and right còn bottom và top thì không ví dụ như các thẻ span, i, a, b, img, input, lable..
        - [Tham Khảo Thêm](https://www.w3schools.com/html/html_blocks.asp)
    6. Layout Element
        ```html 
        <header>    - Xác định phần đầu của một trang web
        <nav>       - Xác định tập hợp các liên kết
        <section>   - Xác đinh một phần trong tài liệu
        <article>   - Xác định nội dung độc lập
        <aside>     - Xác định nội dung bên cạnh nội dung
        <footer>    - Xác định chân trang cho một tài liệu hoặc một phần
        <details>   - Xác định các chi tiết bổ sung mà người dùng có thể mở và đóng theo yêu cầu
        <summary>   - Xác định đề tài cho details phần tử
        <div>       - được sử dụng để tạo ra một khu vực kiểu block nào đó trên một website, hay bạn có thể hiểu là gom nhóm tập hợp các phần tử trên website vào một khu vực.
    7. Thẻ meta
        - Được sử dụng để cung cấp metadata về tài liệu HTML.
        - Được sử dụng để định nghĩa các thông tin cơ bản như mô tả trang web, từ khóa, tác giả.
        ```html
            <meta name="#" content="" charset="" http-equiv="">
                - Name: Cung cấp tên HTML cho một thông tin có trong thuộc tính content
                - Content: Xác định nội dung cho thông tin dữ liệu
                - Charset: Mã hóa ký tự- Xác định bộ mã ký tự cho văn bản HTML
                - http-quiv : Cung cấp tiêu đề HTML cho một thông tin có trong thuộc tính content
        ```
    
* ### Attribute 
    1. Class 
        - Sử dụng được trên nhiều element HTML 
        - Phân biệt chữ hoa chữ thường
        - Những cách đặt tên Class phổ biến:
            + BEM: Block Element Modifier 
                + Block: Là thành phần của trang web hay ứng dụng đó.
                + Element: Là một thành phần bên trong block, phụ thuộc vào parent block của nó.
                + Modifier: Được dùng để thay đổi cách hiển thị block hoặc phần tử 
                + Cú pháp: 
                .block{} .block__element{} .block--modifier{}
        - [Link Tham Khảo](https://topdev.vn/blog/bem-la-gi/#_tai-sao-lai-phai-su-dung-bem-1)    
    2. ID
        - Được sử dụng để chỉ định một id duy nhất cho một phần tử HTML
        - ID là duy nhất.
        - Phân biệt chữ hoa chữ thường.
        - JS có thể truy cập một phần tử có id cụ thể bằng method getElementById()     
    3. Title
        - Xác định thông tin thêm về một phần tử
        - Khi rê chuột lên phần tử có thuộc tính title thì nó sẽ hiển thị dưới dạng văn bản
        - Nó có thể sử dụng ở bất kỳ trên phần tử HTML.  
    4. Viewport
         ```html
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            - initial-scale=1.0 : Độ phóng to ban đầu
            - device-width      : Chiều rộng bằng chiều rộng của thiết bị.
        ```
        - Giải quyết vấn đề nội dung không hiển thị như ý muốn cụ thể là nội dung bị phóng to hoặc thu nhỏ với tỷ lệ khác đi.
        - [Tham khảo thêm](https://hocwebchuan.com/tutorial/responsive/responsive_viewport.php)
