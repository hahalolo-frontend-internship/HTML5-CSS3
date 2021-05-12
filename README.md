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
        

* ### Element 
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
        - Các element trong Table
        - caption: Là Tag chú thích của bảng luôn nằm đầu trong Tag Table
        - tr : Là tag xác định một hàng trong bảng
        - th : Tiêu đề của bảng
        - td : Là tag xác định dữ liệu của bảng
        - thead : được sử dụng để nhóm nội dung header trong một bảng
        - tbody : được dùng để nhóm nội dung body trong một bảng
        - tfooter: được dùng để nhóm nội dung footer trong một bảng
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
        -Thường được đặt ở phần đầu trong `<head>` của trang html để cung cấp thông tin về trang web cho công cụ tìm kiếm.
        -Bao gồm: nhan đề, từ khóa chính, tóm tắt nội dng, ngôn ngữ chính được sử dụng...
        - Những thẻ meta quan trọng
            - Thẻ meta description : thẻ này tóm tắt nội dung của trang web.
                ```html
                    <meta name="description" content="Nội dung chính của trang">
                ``` 
            - Thẻ meta content-type: 
                ```html
                   <meta charset="UTF-8">
                ``` 
                - Khai báo hệ thống ký tự trên trang web sử dụng, cho biết nội dung trang web dược mã hóa ký tự ra sao, để có thể hiển thị thông tin 1 cách tốt nhất.
            - Thẻ meta viewport:
                ```html
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                ``` 
                - Để cần tối ưu website cho phù hợp với nhiều thiết bị thì bạn cần phải dùng đến thẻ này. Thẻ này sẽ hướng dẫn trình duyệt cách điều khiển kích thước cũng như tỉ lệ phóng to thu nhỏ.
                - Ý nghĩa: 
                    - width=devivce-width là để diều chỉnh cho khớp độ rộng màn hình với số pixel của thiết bị
                    - initial-scale=1 thiết lập tỉ lệ zoom ban đầu là 1:1 giữa pixel CSS và pixel của thiết bị.
            - Thẻ meta open graph  : Giúp cho các mạng xã hội như FB, TW, ZL.. xác định được những thông tin chính xác về trang web, và hiển thị những thông tin đó khi có ai đó chia sẽ trang web lên mạng xã hội.
                - Các loại thẻ OG:
                    1. Ảnh đại diện (image): ứng với property="og:image", thuộc tính thể hiện ảnh đại diện cho trang web.
                    2. Nhan đề (title): ứng với property="og:title", nhan đề của trang web nó tương tự như thẻ title
                    3. Url của trang web (dưới title và ẩn trong image): ứng với property="og:url" hiển thị url của trang web.
                    4. Đoạn mô tả ngắn (description) tương ứng với property="og:description" mô tả ngắn trang web 
                    5. Type mô tả loại đối tượng thông tin mà bạn đang muốn chia sẻ như là book, game, movie ..
                    - [Link Đọc Thêm Các Loại Thẻ OG](https://ogp.me/#types)
                ```html
                    <meta property="og:title" content="The Rock">
                    <meta property="og:type" content="video.movie">
                    <meta property="og:url" content="http://127.0.0.1:5500/HTML5/index.html">
                    <meta property="og:image" content="https://encrypted-tbn0.gstatic.com/images">
                    <meta property="og:desciption" content="https://encrypted-tbn0.gstatic.com/images">
                ```
            - Thẻ meta robots : được sử dụng đặt trong trang webstie để điều khiển robots đọc nội dung từng tra. Nếu muốn một trang web của mình như một landing page chạy quảng cáo hoặc một trang nội dung mà bạn muốn chặn không cho bot GG quét tới thì chỉnh sửa thẻ meta robots như sau
                ```html
                <meta name="robots" content="index, follow"> 
                <meta name="robots" content="noindex, nofollow"> 
                <meta name="robots" content="noindex"> 
                <meta name="robots" content="nofollow"> 
                ```
            - Thẻ meta language: Khai báo về ngôn ngữ chính mà trang web sử dụng.
                ```html
                    <html lang="en">
                ```
            - Thẻ meta geo: Khai báo vị trí địa lý cụ thể của doanh nghiệp. Mục đích để cho công cụ tìm kiếm định hướng tốt hơn với người dùng trong khu vực mà bạn đang cung cấp sản phẩm dịch vụ.
                ```html
                <meta name="geo.region" content="HU" /> - Khu vực
                <meta name="geo.placename" content="Huế" /> - Tên địa điểm
                <meta name="geo.position" content="47.181759;19.506094" /> - Định vị
                <meta name="ICBM" content="47.181759, 19.506094" />

                ```

    8. SVG (Scalable Vector Graphics)
        - Là một định dạng hình ảnh sử dụng cấu trúc XML để hiển thị hình ảnh dưới dạng vector.
        - Khi co giản không làm giảm chất lượng hình ảnh.

        ```html
            <text x="5" y="30"></text> tạo một thẻ text
            <line x1="3" y1="19" x2="83" y2="19"></line>
            Tạo đường thẳng đơn
            <rect x="3" y="3" width="80" height="60"></rect>
            Tạo hình chữ nhật và hình vuông
            <circle cx="50" cy="50" r="40"></circle>
            Tạo hình tròn
            <polygon points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78" />
            Vẽ bất kì đa giác ngẫu nhiên 
            <g id="my-group">
                <rect x="0" y="100" width="100" height="100" fill="#59fa81" />
                <rect x="100" y="0" width="100" height="100" fill="#ad4a3d" />
            </g>
            Nhóm bất kỳ thẻ nào khác

             <path d="M 100 100 L 200 200 H 10 V 40 H 70"
            fill="#59fa81" stroke="#d85b49" stroke-width="3" />
            Là một chuỗi các đường thẳng và đường cong là công cụ mạnh nhất để vẽ bằng cách sử dụng SVG
            
            <defs> Dùng để định nghĩa phần tử khai báo 1 lần và tái sử dụng được nhiều lần. Tất cả những gì bên trong sẽ không được hiển thị lên màng hình trừ khi ta gọi nó ra
            <use> Giúp ta sử dụng các phần tử được định nghĩa ở các vị trí mình cần
            <textPath>
        ```
                fill: thuộc tính màu cho hình
                stroke: thuộc tính màu cho line
                x: góc trên bên trái nằm trên truc x
                y: góc trên bên trái nằm trên trục y
                rx,ry dùng để bo tròn các góc
                width: chiều rộng cái hình
                height: chiều cao của cái hình
                cx, cy: tọa độ trung tâm 
                r: bán kính 
                x1, y1 : là tọa độ bắt đầu
                x2, y2 : là tọa độ kết thúc
                point  : là tập tọa độ x,y 
                M (Move) : một tập tọa độ x,y
                L (Line) : tập tạo độ x,y để vẽ đường 
                H (Horizontal Line) là một đường nằm ngang, nó chỉ nhận tọa độ x
                V (Vertical) là một đường thẳng đứng , nó chỉ nhận tọa độ y
                Z (Close Path) tạo một đường quay trở lại điểm ban đầu
                A (Arch) hình cung
                Q là một đường cong Bezier bậc 2


    9. Thẻ figure 
        - Là một tag block thích hợp để xác định một nội dung cần tách biệt rõ ràng. Thường đi cùng với nó là figcaption
        ```html
        <figure>
            <figcaption></figcaption>
            <img src="#">
        </figure> 
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
    