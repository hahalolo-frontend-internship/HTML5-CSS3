## HTML5
---
## HTML là gì?
HTLM là ngôn ngữ đánh dấu siêu văn bản
## HTML DOM là gì?
---
1. DOM 

    Viết tắt của Document Object Model
    Gồm 3 thành phần: 
    - Element
    - Attribute
    - Text

2. Mô hình DOM HTML

![Mô Hình DOM HTML](https://www.w3schools.com/js/pic_htmltree.gif)

## Thẻ Link
---
- Xác định mối quan hệ giữa một tài liệu HTML và các tài nguyên bên ngoài.
- Được viết bên trong thẻ `<head>`
- Một số attribute thường dùng:
  - `rel` Xác định mối quan hệ giữa tài liệu hiện tại và tài liệu liên quan(stylesheet, alternate,...).
  - `type` Xác định kiểu MIME của tài liệu liên quan.
  (MIME viết tắt của "Multipurpose Internet Mail Extensions" là một chuẩn Internet về định dạng cho thư điện tử)
  - `href` Đường dẫn tới các tại liệu liên quan.
  - `media` Xác định những thiết bị nào được hiển thị trong tài liệu liên quan(screen, print, all).

```html
<head>
  <link rel="stylesheet" type="text/css" href="filecss.css"  media="screen"/>
</head>
```
## Thẻ meta
---
- Thường được đặt ở phần đầu trong `<head>` của trang html để cung cấp thông tin về trang web cho công cụ tìm kiếm.
- Bao gồm: nhan đề, từ khóa chính, tóm tắt nội dng, ngôn ngữ chính được sử dụng...
### Những thẻ meta quan trọng
1. Thẻ meta description : thẻ này tóm tắt nội dung của trang web.
    ```html
        <meta name="description" content="Nội dung chính của trang">
    ``` 
2. Thẻ meta content-type: 
    ```html
        <meta charset="UTF-8">
    ``` 
    - Khai báo hệ thống ký tự trên trang web sử dụng, cho biết nội dung trang web dược mã hóa ký tự ra sao, để có thể hiển thị thông tin 1 cách tốt nhất.
3. Thẻ meta viewport:
    ```html
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    ``` 
    - Để cần tối ưu website cho phù hợp với nhiều thiết bị thì bạn cần phải dùng đến thẻ này. Thẻ này sẽ hướng dẫn trình duyệt cách điều khiển kích thước cũng như tỉ lệ phóng to thu nhỏ.
    - Ý nghĩa: 
        - width=devivce-width là để diều chỉnh cho khớp độ rộng màn hình với số pixel của thiết bị
        - initial-scale=1 thiết lập tỉ lệ zoom ban đầu là 1:1 giữa pixel CSS và pixel của thiết bị.
4. Thẻ meta open graph  : Giúp cho các mạng xã hội như FB, TW, ZL.. xác định được những thông tin chính xác về trang web, và hiển thị những thông tin đó khi có ai đó chia sẽ trang web lên mạng xã hội.
    - Các loại thẻ OG:
        1. Ảnh đại diện (image): ứng với property="og:image", thuộc tính thể hiện ảnh đại diện cho trang web.
        2. Nhan đề (title): ứng với property="og:title", nhan đề của trang web nó tương tự như thẻ title
        3. Url của trang web (trên title và ẩn trong image): ứng với property="og:url" hiển thị url của trang web.
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
5. Thẻ meta language: Khai báo về ngôn ngữ chính mà trang web sử dụng.
    ```html
        <html lang="en">
    ```
6. Thẻ meta geo: Khai báo vị trí địa lý cụ thể của doanh nghiệp. Mục đích để cho công cụ tìm kiếm định hướng tốt hơn với người dùng trong khu vực mà bạn đang cung cấp sản phẩm dịch vụ.
    ```html
    <meta name="geo.region" content="HU" /> - Khu vực
    <meta name="geo.placename" content="Huế" /> - Tên địa điểm
    <meta name="geo.position" content="47.181759;19.506094" /> - Định vị
    <meta name="ICBM" content="47.181759, 19.506094" />

    ```

## Xử lý Text
---
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
    - Text link
    ```html
    <a href="link" target="#" name="#"></a>   
    ```
    - Img Link
    ```html
    <a href="/html" target="_self">
        <img src="/images/logo/html-tutorial.png" alt="HTML" /> 
    </a> 
    ```
    - Email Link
    ```html
    <a href= "mailto:your_email@example.com">Send Email</a> 
    ```
    - Thuộc tính:
        + href cho biết điểm đến của liên kết
        + target có 4 loại: 
            
            _self  : Mở tài liệu trong cùng 1 cửa sổ khi click vào
            
            _blank : Mở tài liệu trong một cửa sổ mới.

            _parent: Mở tài liệu trong khung cha chứa nó
            
            _top   : Mở tài liệu trong khung chính
        + name: dùng để liên kết tới khu vực trong trang mà bạn muốn tới.

        

## Element 
---
1. Img
    ```html
        <img src="#" alt="#"></img>
    ```
    - Thẻ Img có 2 Attribute thường dùng là:
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
    ```
    - Các element trong Table
    - caption: Là Tag chú thích của bảng luôn nằm đầu trong Tag Table
    - tr : Là tag xác định một hàng trong bảng
    - th : Tiêu đề của bảng
    - td : Là tag xác định dữ liệu của bảng
    - thead : được sử dụng để nhóm nội dung header trong một bảng
    - tbody : được dùng để nhóm nội dung body trong một bảng
    - tfooter: được dùng để nhóm nội dung footer trong một bảng
    - Thuộc tính : 
            - cols 
            - rows
4. List
    ```html
    <ul>
        <li><li>
    </ul>
    ```
    - Một list luôn nằm trong 1 Tag ul hoặc ol
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
    <div>       - Nhóm các phần tử liên quan lại thành một khối (block) 
    <span>      - Nhóm các văn bản, hình ảnh,... thành nhóm nhỏ (inline)
    ```
8. SVG (Scalable Vector Graphics)
    - Là một định dạng hình ảnh sử dụng cấu trúc XML để hiển thị hình ảnh dưới dạng vector.
    - Khi co giản không làm giảm chất lượng hình ảnh.

    - Các thuộc tính của SVG
        - width: chiều rộng cái hình
        - height: chiều cao của cái hình
        - viewBox: xác định vị trí và kích thước của một cửa sổ xem SVG
    ```html
        <svg
                width="200"
                height="200"
                viewBox="0 0 150 150"
                style="border: 1px solid black"
                >
                <circle cx="100" cy="100" r="100" fill="#529fca" />
        </svg>
    ```    
    - Những thẻ thường dùng nằm trong svg
    - `<text>` với x y là vị trí vẽ đi kèm với thẻ `<tspan>` dùng để định dạng thêm chữ trong `<text>`
    ```html
        <svg>
            <text x="0" y="120">
                <tspan font-weight="bold" fill="red">A nice rectangle</tspan>
            </text>
        </svg>
    ```
    - line (đường thẳng) với x1 y1 là tọa độ điểm bắt đầu, x2 y2 là tọa độ điểm kết thúc, stroke là màu đường vẽ

    ```html
        <svg>
            <line x1="0" y1="0" x2="100" y2="100" stroke="#529fca" />
        </svg>
    ```
    - rect(hình chữ nhật) với x y là tọa độ bắt đầu, width và heigh là chiều dài và chiều rộng hình chủ nhật, fill là màu nèn
    ```html
        <svg>
             <rect x="0" y="0" width="100" height="100" fill="#529fca" />
        </svg>
    ``` 
    - circle(hình tròn) với cx cy là tọa độ tâm, r là bán kính, fill là màu nền, storke là màu đường vẽ, stroke-width là độ rộng đường vẽ
    ```html
        <svg>
        <circle
            cx="50"
            cy="50"
            r="50"
            stroke="green"
            stroke-width="4"
            fill="#529fca"
        />
    </svg> 
    ```
     - Nhóm bất kỳ thẻ nào khác
    <g id="my-group">
        <rect x="0" y="100" width="100" height="100" fill="#59fa81" />
        <rect x="100" y="0" width="100" height="100" fill="#ad4a3d" />
    </g>
    - path là một chuỗi các đường thẳng và đường cong. Là công cụ mạnh nhất để vẽ bằng cách sử dụng svg, và nó rất phức tạp. Dùng attribute d chứa các lệnh điều hướng như:
        - M(Move): x y tọa độ điểm bắt đầu
        - L(Line): x y tọa độ điểm để vẽ đường
        - H(Horizontal Line): là 1 đường thẳng nằm ngang chỉ nhận x
        - V (Vertical Line) là một đường thẳng đứng chỉ nhận toạ độ y
        - Z (Close Path), tạo một đường quay trở lại điểm ban đầu
        - Q : Đường cong với x1 y1 x2 y2
    ```html
        <svg height="300" width="300">
            <path
                d="M 100 100 L 200 200 H 10 V 40 H 70 Z"
                fill="#59fa81"
                stroke="#d85b49"
                stroke-width="3"
            />
        </svg>
    ```
    - `<defs>`Dùng để định nghĩa phần tử khai báo 1 lần và tái sử dụng được nhiều lần. Tất cả những gì bên trong sẽ không được hiển thị lên màng hình trừ khi ta gọi nó ra
    - `<use>` Giúp ta sử dụng các phần tử được định nghĩa ở các vị trí mình cần
    - `<text>` chứa `<textPath>` để sử dụng các phần tử được định nghĩa ở các vị trí mình cần
    ```html
    <svg height="500" width="500" style="border: 1px solid black">
        <defs>
            <path id="MyPath" d="M 20 20 Q 200 300 500 500" />
        </defs>
        <use x="100" y="100" xlink:href="#MyPath" fill="none" stroke="red" />
        <use xlink:href="#MyPath" fill="none" stroke="#59fa81" />
        <text font-family="Courier New" font-size="42.5">
            <textPath xlink:href="#MyPath">Wow such a nice SVG tut</textPath>
        </text>
    </svg>
    ```
    - polyline: Dùng để vẽ đường gấp khúc
    - polygon: bao gồm những đoạn thẳng. Điểm cuối sẽ kết nối với điểm đầu. Với attribute points để xác định các tọa độ điểm vẽ bao gồm các cặp x y để vẽ các đa giác.
    ```html
    <svg width="130" height="160">
        <polygon
            points="50,50 100,100 50,100"
            stroke-width="5"
            fill="black"
            stroke="blue"
        />
        <polyline
            points="0,40 40,40 40,80 80,80 80,120 120,120 120,160"
            fill="#F9F38C"
            stroke="green"
            stroke-width="6"
        />
    </svg>
    ```
        

9. Thẻ figure 
    - Là một tag block thích hợp để xác định một nội dung cần tách biệt rõ ràng. Thường đi cùng với nó là figcaption 
    ```html
    <figure>
        <figcaption></figcaption>
        <img src="#">
    </figure> 
    ```
10. Thẻ Marquee
    - Di chuyển chữ hoặc ảnh theo chiều ngang dọc một cách tự động.
    ```html 
        <marquee>Đây là một ví dụ về html marquee </marquee>
    ```
    - Thuộc tính  
        - behavior: chỉ định di chuyển bằng 1 trong 3 giá trị sau: scroll, side và alternate
        - direction : chỉ định hướng di chuyển của nội dung. Các giá trị left, right, down, up
        - width: chiều rộng 
        - height: chiều cao
        - hspace: chiều cao không giang tính bằng px mà marquee di chuyển trong nó.
        - vspace: chiều rộng không giang tính bằng px mà marquee di chuyển trong nó.
        - scrolldelay: độ trễ khi cuộn theo s
        - scrollamount: số lần cuộn theo số
        - loop: vòng lặp cho nội dung của marquee theo số.
        - bgcolor: màu nền của marquee


13. ifame
    - Được sử dụng để hiện thị một trang web trong một trang web khác
    ```html
    <a href="https://www.youtube.com/" target="framename_a">abc</a>
        <iframe
        src="./form/parent1.html"
        width="680"
        height="480"
        allowfullscreen
        ></iframe>
    ```
    - Thuộc tính:
        - src: tên file hoặc địa chỉ url sẽ được hiển thị trong iframe
        - name: tên iframe
        - noresize:  ngăn người sử dụng kéo lại kích thước.
        - marginwitdth: xác định độ rộng của khoảng cách trái và phải
        - marginheight: xác định khoảng cách trên và dưới 
        - srolling : hiển thị thanh cuộn trên iframe
14. source
    - Dùng để hiển định tài nguyên, cho trình nghe nhạc hoặc xem phim trong trang web thường dùng trong thẻ `<audio></audio>` hoặc `<video></video>` và `<picture>`.
    - Thuộc tính
        - Media: Hiển thị tại kích thước màn hình nào đó có các giá trị như width, height
        - srcset: sử dụng các ảnh khác nhau dùng cho thẻ picture
        - src: sử dụng để xác định URL của tập tin phương tiện dùng cho thẻ audio và video

    
## Attribute (thuộc tính chung thường dùng)
---
1. class 
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
2. id
    - Được sử dụng để chỉ định một id duy nhất cho một phần tử HTML
    - ID là duy nhất.
    - Phân biệt chữ hoa chữ thường.
    - JS có thể truy cập một phần tử có id cụ thể bằng method getElementById()     
3. title
    - Xác định thông tin thêm về một phần tử
    - Khi rê chuột lên phần tử có thuộc tính title thì nó sẽ hiển thị dưới dạng văn bản
    - Nó có thể sử dụng ở bất kỳ trên phần tử HTML.  
4. hidden
    - Ẩn phần tử
5. style
    - Nhúng style trực tiếp vào element

## MEDIA
---
1. Video
    Hiển thị video
    ```html
        <video width="320" height="240" controls>
            <source src="https://youtu.be/Mq8uItzRBKk" type="video/mp4">
            <source src="movie.ogg" type="video/ogg">
            Your browser does not support the video tag.
        </video>
    ```
2. Âm thanh

    ```html
        <audio controls>
            <source src="horse.ogg" type="audio/ogg">
            <source src="horse.mp3" type="audio/mpeg">
            Your browser does not support the audio element.
        </audio>
    ```

## FORM ELEMENT
---
- Input Element
    - Dùng để cho người dùng nhập dữ liệu
    - Thuộc tính:
        - accept `[file_extension,audio,video/*,image/*,media_type]`: chỉ định kiểu của file mà server chấp nhận (chỉ khi type="file")
        ```html
        <form action="#" id="form1">
                <input type="file" id="img" name="img" accept="image/*" />
        </form>
        ```
        - alt  `[text]` : chỉ định một văn bản thay thế cho hình ảnh
        - autocomplete `[on,off]`: chỉ định một phần tử input có cần phải bật tính năng tự động hoàn tất
        ```html
        <form action="#" id="form1">
            <input type="text" autocomplete />
        </form>
        ```
        - autofocus  `[autofocus]`: chỉ định răng một phần tử input được focus tự động khi trang tải trang web
        ```html
        <form action="#" id="form1">
            <input type="text" autofocus />
        </form>
        ```
        - checked `[checked]`: chỉ định rằng một phần tử có được chọn trước khi tải trang web (đối với type="checkbox" or type="radio")
        ```html
        <form action="/action_page.php">
            <input type="checkbox" checked />
            <input type="submit" value="Submit" />
        </form>
        ```
        - disabled `[disabled]`: chỉ định phần tử input bị vô hiệu hóa
        ```html
        <form action="#" id="form1">
            <input type="text" disabled />
        </form>
        ```
        - form `[form_id]`: chỉ định một hoặc nhiều form mà có phần tử input thuộc về nó
        ```html
        <form action="#" id="form1"><input type="text" " /></form>
        <input type="text" form="form1" />
        ```
        - max - min
            - Chỉ định giá trị lớn nhất và nhỏ nhất cho phần tử `<input>`
            - Chỉ sử dụng với các type: number, range, date, datetime-local, month, time and week.
        ```html
        <form action="/action_page.php">
            <label for="quantity">Quantity (between 1 and 5):</label>
            <input type="number" min="1" max="5" /><br />
            <input type="submit" />
        </form>
        ```

        - maxlength - minlength
            - chỉ định số ký tự tối đa và tối thiểu được phép trong phần tử `<input>`.
        ```html
        <form action="/action_page.php">
            <label for="username">Username:</label>
            <input type="text" minlength="1" maxlength="10" /><br />
            <input type="submit" value="Submit" />
        </form>
        ```
        - formaciton `[URL]`: chỉ định URL của file sẽ xử lý các thông tin của form được gửi (đối với type="submit" và type="image")

        - formenctype`[	application/x-www-form-urlencoded,multipart/form-data,text/plain]`: Chỉ định cách dữ liệu của form phải được mã hoá khi gửi nó lên máy chủ (đối với type="submit" và type="image")

        - formmethod `[get,post]`: định nghĩa phương thức HTTP chovieejc gửi dữ liệu của form tới action URL (đối với type="submit" và type="image")
        
        - list `[datalist_id]`: tham chiếu đến một phần tử datalist chứa các tùy chọn được định nghĩa trước.
        ```html
        <form action="">
            <label for="browser">List: </label>
            <input list="browsers" name="browser" id="browser">
            <datalist id="browsers">
                <option value="Edge">
                <option value="Firefox">
                <option value="Chrome">
                <option value="Opera">
                <option value="Safari">
            </datalist>
        </form>
        ```
        
        - multiple `[multiple]` : chọn file
        ```html
        <form action="#">
            <label for="files">Select files:</label>
            <input type="file" id="files" name="files" multiple><br><br>
        </form>
        ```
        - name `[text]`: chỉ định tên của một phần tử input

        - pattern `[regexp]`: chỉ định một biểu thức chính quy được sử dụng để kiểm tra giá  trị phần tử.
       
        - placeholder `[text]`: Chỉ định một gợi ý gắn mà mô tả giá trị mong đợi của một phần tử input.
        
        - readonly `[readonly] `: Chỉ đinh rằng một trường input là chỉ đọc
        ```html
        <form action="#">
            <input type="text" value="abc" readonly />
            <input type="submit" />
        </form>
        ```
        - required `[required]` : Chỉ định rằng một trường input phải được nhập trước khi gửi form
        ```html
        <form action="#">
            <input type="text" value="abc" required />
            <input type="submit" />
        </form>
        ```
        - src `[URL]`: Chỉ định URL để sử dụng như 1 nút gửi (chỉ đối với type="image")
        ```html
        <form action="#">
            <label for="homepage">Add your homepage:</label>
            <input type="url" id="homepage" name="homepage"><br><br>
            <input type="submit">
        </form>
        ```
        - step `[number]`: Chỉ định các khoảng cách số hợp lệ cho một trường nhập
        ```html
        <form action="#">
            <label for="points">Points:</label>
            <input type="number" id="points" name="points" step="3">
            <input type="submit">
        </form>
        ```
        - type `[button
                checkbox,
                color,
                date,
                datetime-local,
                email,
                file,
                hidden,
                image,
                month,
                number,
                password,
                radio,
                range,
                reset,
                search,
                submit,
                tel,
                text,
                time,
                url,
                week]`
        - value `[text]`: chỉ định giá trị của một phần tử input
        ```html
        <form action="#">
             <input type="text" value="country" />
        </form>
        ```
## FORM
---
- Các element
    - input
    - textarea : ô văn bản nhập nhiều dòng 
    - label : nhãn
    - fieldset : nhóm các phần tử liên quan
    - legend : mô trả cho thẻ fildset
    - select : định nghĩa 1 list drop-down
    - optgroup : định nghĩa một nhóm các tùy chọn liên quan thành một danh sách drop-down
    - option : định nghĩa một option trong một danh sách drop-down
    - button : định nghĩa một nút có thể click
- Các thuộc tính
    - accept-charset: chỉ định bảng mã được sử dụng trong form 
    - action: chỉ định một địa chỉ url sẽ gữi dữ liệu trên form tới
    ```html
    <form action="index.html"></form>
    ```
    - autocomplete: chỉ định cho trình duyệt tự động từ người sử dụng đã nhập trước đó.
        - Có 2 giá trị on và off
    ```html 
    <form action="index.html" method="get" autocomplete></form>
    ```
    - enctype : 
        - chỉ định mã hóa dữ liệu gữi đi
        - chỉ dùng cho POST
        - Có 3 giá trị: 
            - text/plain: gửi dữ liệu nhưng không được mã hóa
            - multipart/form-data: giá trị này là cần thiết nếu tải tệp lên thông qua form
            - application/x-www-form-urlencoded: đây là giá trị mặc định, tất cả các ký tự đều được mã hóa (dấu space sẽ được mã hóa thành dấu +) và các ký tự đặc biệt được chuyển đổi thành giá trị ASCII HEX.
    - method : chỉ định phương thức HTTP được sử dụng khi gữi form 
        - Giá trị của method : GET, POST
            - get: các thông tin trong form sẽ mô tả bởi URL và nhìn vào thanh địa chỉ trình duyệt sẽ thấy thông tin. Nên những dữ liệu nhạy cảm sẽ không sử dụng nó, độ dài của URL bị giới hạn (2048 ký tự)
            - post: Sẽ không nhìn thấy dữ liệu biểu diễn qua URL như thế này mà dữ liệu sẽ được ẩn.
    ```html
    <form action="index.html" method="get" target="_blank"></form>
    ```
    - name : chỉ định một tên được sử dụng để nhận diện các thành phần trên form
    ```html
    <form action="index.html" method="get" name="form1"></form>
    ```
    - novalidate: chỉ định trình duyệt sẽ không hợp lệ cho form
    - target: chỉ định đích của một địa chỉ trong thuộc tính action.
