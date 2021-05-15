# Các thể cơ bản
- Thẻ `<h1>` đến `<h6>` dùng để hiển thị tiêu đề.
```html
<h1>Day la dau de 1</h1>
<h2>Day la dau de 2</h2>
<h3>Day la dau de 3</h3>
<h4>Day la dau de 4</h4>
<h5>Day la dau de 5</h5>
<h6>Day la dau de 6</h6>
```
- Thẻ `<p>` dùng để hiển thị một đoạn văn bản.
```html
<p>Day la doan van thu nhat.</p>
```
- Thẻ `<br/>` dùng để ngắt dòng.
```html
<p>Xin chao tat ca cac ban<br />
Cam on ban da hoc HTML tai VietJack.<br />
Chuc cac ban hoc tot!<br />
VietJack Team</p>
```
- Thẻ `<hr>` tạo một dòng ngang từ vị trí hiện tại trong tài liệu đến lề phải và do đó tạo ra một dòng ngắt.
```html
<p>Doan van thu nhat va nam o ben tren</p>
<hr />
<p>Doan van thu hai va nam o ben duoi</p>
```
- Thẻ `<div>` được sử dụng để định nghĩa một khu vực trong tài liệu.
```html
<div id="contentinfo">
    <p>Welcome to our website. We provide tutorials on various subjects.</p>
</div>
```
- Thẻ `<header>` xác định một header cho một tài liệu hoặc một khu vực.
```html
<header>
    <h1>Đây là header</h1>
</header>
```
- Thẻ `<footer>` xác định một footer cho một tài liệu hoặc một khu vực.
```html
<footer>
    <p>Đây là footer</p>
</footer>
```
- Thẻ `<section>` xác định một khu vực trong một tài liệu. `<section>` phải có thẻ tiêu đề, và nội dung bên trong section phải cùng 1 chủ đề
```html
<section>
    <h1>Ngon ngu lap trinh Java</h1>
    <h3>Tinh ke thua (Inheritance)</h3>
    <p>Tinh ke thua dinh nghia moi quan he giua hai Class: Class cha (superclass) va Class con (subclass).</p>
</section>
```
- Thẻ `<article >`chứa các nội dung độc lập.
```html
<article> 
   <h1>Tiêu đề bài viết</h1> 
   <p>Các nội dung bài viết</p>
</article>
```
- Thẻ `<nav>` xác định một khu vực mà chứa các link điều hướng.
```html
<nav>
    <a href="../sqlite/index.jsp">SQLite</a> |
    <a href="../mongodb/index.jsp">MongoDB</a> |
    <a href="../mysql/index.jsp">MySQL</a> |
    <a href="../sql/index.jsp">SQL</a> 
</nav>
```





# Img
- Dùng thẻ img để chèn hình ảnh vào Website.
- Các thuộc tính:
    + `src`: đường dẫn tới hình ảnh.
    + `alt`: xác định một văn bản thay thế khi ảnh bị lỗi.
    + `width`: xác định chiều rộng của ảnh.
    + `height`: xác định chiều cao của ảnh.
    ```html
    <img src="./images/logo3.png" alt="Hình ảnh trong HTML" width="150" height="100"/>
    ```
    + border: xác định độ dày của viền ảnh.
    ```html
    <img src="./images/logo3.png" alt="Hình ảnh trong HTML" border="3"/>
    ```
    + align: cảnh chỉnh vị trí của ảnh.
    ```html
    <img src="./images/logo3.png" alt="Hình ảnh trong HTML" border="3" align="right"/>
    ```

# Link
- Một trang web có thể chứa các đường link khác nhau để liên kết trực tiếp với các trang khác hay trong một phần của một trang. Những liên kết này được gọi là Hyperlinks (siêu liên kết).
Hyperlinks cho phép khách truy cập vào các trang web khác nhau bằng cách nhấn chuột vào từ, cụm từ, và hình ảnh. Vì vậy, bạn có thể tạo các đường Hyperlinks sử dụng văn bản hoặc hình ảnh có trên trang web của bạn. 
- Một liên kết được xác định bằng cách sử dụng thẻ a.
```html
<a href="đường dẫn url tới trang HTML" ... danh-sách-thuộc-tính>Link Text</a>
```
- Các thuộc tính của thẻ ảnh:
    + `href`: đường dẫn tới trang khác.
    + `target`: để xác định vị trí nơi đường link được mở.
        * `_blank`: Mở trang liên kết trong cửa sổ mới.
        * `_self`: Mở trang liên kết trong cùng một khung giống với khung chứa liên kết.
        * `_parent`: Mở trang liên kết trong khung nguồn chứa đường link.
        * `_top`: Mở trang liên kết trong cửa sổ toàn màn hình.
        ```html
        <a href="../html/text_link_trong_html.jsp" target="_blank">Vi du gia tri _blank</a> |
        <a href="../html/text_link_trong_html.jsp" target="_self">Vi du gia tri _self</a> |
        <a href="../html/text_link_trong_html.jsp" target="_parent">Vi du gia tri _parent</a> |
        <a href="../html/text_link_trong_html.jsp" target="_top">Vi du gia tri _top</a>
        ```
- Tạo Download Link trong HTML
    Bạn có thể tạo các link văn bản để các tài liệu PDF, DOC, hoặc ZIP được tải về máy khi người sử dụng nhấn vào link đó. Điều này vô cùng đơn giản, bạn chỉ cần cung cấp tên URL đầy đủ của file đó.
    ```html
    <a href="../html/test.pdf">Download PDF File</a>
    ```
- Tạo link cho image
    ```html
    <a href="https://vietjack.com" target="_self"> 
   <img src="./images/logo3.png" alt="Vietjack Homepage"/> 
    </a>
    ```
- Email Link trong HTML
    Thẻ a cung cấp cho bạn lựa chọn xác định một địa chỉ email để gửi thư. Trong khi sử dụng thẻ này như một thẻ email, bạn sẽ sử dụng mailto: địa chỉ email cùng với thuộc tính href. Dưới đây là cú pháp sử dụng mailto thay vì sử dụng http:
    ```html
    <a href= "mailto:abc@example.com">Send Email</a>
    ```
    Có thể thiết lập mặc định email subject và email body song song với email address. Dưới đây là ví dụ thiết lập mặc định cho subject và body.
    ```html
    <a href="mailto:abc@example.com?subject=Tiêu đề&body=Nội dung tin nhắn">Send</a>
    ```

# Tạo chữ chạy(Marquee) trong HTML
- Cú pháp
```html
<marquee tên-thuộc-tính="giá-trị-thuộc-tính".... các-thuộc-tính-khác>

một hoặc nhiều dòng text hoặc hình ảnh

</marquee>
```
- Các thuộc tính:
    + `width`: Xác định độ rộng của dòng chạy.
    + `height`: Xác định độ cao của dòng chạy.
    + `direction`: Xác định chiều chạy của dòng chữ. Giá trị có thể là up, down, left, hoặc right.
    + `behavior`: Xác định kiểu cuộn của dòng chạy. Giá trị có thể là scroll, slide và alternate.
    + `scrolldelay`: Xác định khoảng thời gian dừng lại khi xong một lần cuốn. Giá trị có thể là 10...
    + `scrollamount`: Xác định tốc độ của dòng chạy. Giá trị có thể là 10….
    + `loop`: Xác định khoảng thời gian của vòng lặp. Giá trị mặc định là INFINITE, nghĩa là các marquee lặp đi lặp lại vô hạn.
    + `bgcolor`: Xác định màu nền, sử dụng tên màu hoặc giá trị thập lục phân của màu.
    + `hspace`: Xác định khoảng cách chiều ngang của dòng chạy. Giá trị có thể là 10 hoặc 20% ...
    + `vspace`: Xác định khoảng cách dọc của dòng chạy. Giá trị có thể là 10 hoặc 20% ...

# Block - Inline
Tất cả các phần tử trong HTML có thể được chia thành hai loại: các phần tử cấp khối và các phần tử nội tuyến.

- Phần tử cấp khối thường bắt đầu và kết thúc với một dòng mới khi hiển thị trong trình duyệt. Ví dụ cho các phần tử này là `<p>, <h1>, <h2>, <h3>, <h4>, <h5>, <h6>, <ul>, <ol>, <dl>, <pre>, <hr />, <blockquote>, và <address>`. Tất cả chúng bắt đầu bởi một dòng mới, và bất cứ cái gì theo sau chúng, đều xuất hiện trên dòng mới này.

- Các phần tử nội tuyến xuất hiện trong một câu và không cần phải cách dòng. Ví dụ cho các phần tử này là `<b>, <i>, <u>, <em>, <strong>, <sup>, <sub>, <big>, <small>, <li>, <ins>, <del>, <code>, <cite>, <dfn>, <kbd>, và <var>.`

Có 2 thẻ quan trọng mà chúng ta sử dụng thường xuyên để tạo nhóm các thẻ HTML khác là `<div>` và `<span>`.
- Thẻ `<div>` trong HTML. Đây là một thẻ cấp khối rất quan trọng đóng vai trò lớn trong việc tạo nhóm các thẻ HTML khác và áp dụng CSS trong nhóm các phần tử. Ngay trong hiện tại thì thẻ `<div>` có thể được sử dụng để tạo cách bố trí (layout) cho web, tại đây chúng ta xác định các phần khác nhau (trái, phải, trên,…) của trang bằng cách sử dụng thẻ này. Thẻ này không cung cấp bất cứ sự thay đổi về thị giác trên khối nhưng nó có nhiều ý nghĩa hơn khi được sử dụng cùng với CSS.
    ```html
    <!DOCTYPE html>
    <html>
    <head>
        <title>Vi du the div trong HTML</title>
    </head>
    <body>

        <!-- Nhom so 1 -->
        <div style="color:red">
            <h4>Day la nhom dau tien</h4>
            <p>Danh sach cac loai rau</p>
            <ul>
                <li>Beetroot</li>
                <li>Ginger</li>
                <li>Potato</li>
                <li>Radish</li>
            </ul>
        </div>

        <!-- Nhom so 2 -->
        <div style="color:green">
            <h4>Day la nhom thu hai</h4>
            <p>Danh sach cac loai trai cay</p>
            <ul>
                <li>Apple</li>
                <li>Banana</li>
                <li>Mango</li>
                <li>Strawberry</li>
            </ul>
        </div>

    </body>
    </html>
    ```

- Thẻ `<span>` là một phần tử nội tuyến và có thể được sử dụng để tạo nhóm nội tuyến trong tài liệu HTML. Thẻ này cũng không cung cấp bất cứ sự thay đổi về thị giác trên khối, nhưng nó có nhiều ý nghĩa hơn khi sử dụng cùng với CSS.
    ```html
    <!DOCTYPE html>
    <html>
    <head>
        <title>Vi du the span trong HTML</title>
    </head>
    <body>

        <p>Day la <span style="color:red">mau do</span> va day la <span style="color:green">mau xanh</span></p>

    </body>
    </html>
    ```

# Các phần tử về cụm từ trong HTML
-  Thẻ `<em>` dùng để nhấn mạnh văn bảng trong HTML.
```html
<p>Vi dụ sau su dung the <em>em trong HTML</em>.</p>
```
- Thẻ `<mark>` dùng để đánh dấu văn bản trong HTML.
```html
<p>Cum tu sau duoc danh dau bang <mark>the mark trong HTML</mark> voi mau vang</p>
```
- Thẻ `<strong>` dùng để hiển thị những văn bản quan trọng. Phần văn bản đó sẽ được in đậm hơn các phần văn bản khác.
```html
<p>Day la <strong>the strong </strong> trong HTML.</p>
```
- Thẻ `<abbr>` dùng để rút gọn văn bản. Thuộc tính title được sử dụng trong thẻ để chỉ ra ý nghĩa đầy đủ của chữ/cụm từ viết tắt khi ta rê chuột qua thẻ này.
```html
<p>Toi thich hoc <abbr title="Ngon ngu lap trinh Java">Java</abbr>.</p>
```
- `<acronym>` dùng để hiển thị một tên lược danh.
```html
<p>Ngoai HTML, ban co the hoc <acronym>XHTML</acronym>.</p>
```
- `<bdo>` dùng để quyết định phương hướng của văn bản hiện tại.
```html
<p><bdo dir="rtl">Phan van ban se hien thi tu phai qua trai.</bdo></p>
```
- `<dfn>` dùng để chỉ rõ rằng bạn đang giới thiệu một mục đặc biệt. Cách sử dụng của nó tương tự với cách làm in nghiêng từ trong giữa của đoạn văn.
```html
<p>HTML la mot khai niem <dfn>dac biet</dfn> trong tam tri toi.</p>
```
- `<blockquote>` dùng để trích dẫn một đoạn văn từ nguồn khác.
```html
<blockquote>HTML là chữ viết tắt của <b>H</b>yper<b>t</b>ext <b>M</b>arkup <b>L</b>anguage, là ngôn ngữ được sử dụng rộng rãi nhất để viết các trang Web.</blockquote>
```
- `<q>` được sử dụng khi bạn muốn thêm trích dẫn một câu vào trong dấu nháy kép.
```html
<p>Ha Noi la thu do cua My, <q>Toi nghi la toi da sai</q>.</p>
```
- `<code>` bất kỳ code chương trình nào xuất hiện trên trang Web đều được đặt trong này.
```html
<p>Phan van ban nay duoc hien thi binh thuong. <code>Day la phan code.</code> Phan van ban nay duoc hien thi binh thuong.</p>
```
- `<pre>` thẻ này thường được sử dụng kết hợp với thẻ `<code>` để chỉ rõ rằng nội dung trong thẻ là một biến.
```html
<p><code>document.write("<var>user-name</var>")</code></p>
```
- `<samp>`chỉ kết quả đầu ra mẫu của một chương trình. Nó hỗ trợ kiểu sample trong máy tính, và được sử dụng chính khi tài liệu lập trình hoặc mã hóa các khái niệm.
```html
<p>Ket qua cua chuong trinh la <samp>Hello World!</samp></p>
```
- `<address>` dùng để hiển thị địa chỉ.
```html
<address>So 11, Pho Le Thai To, Thu Do Ha Noi</address>
```
- `<del>` được sử dụng để đánh dấu văn bản bị xóa.
```html
<p>Vi du minh hoa <del>the del</del> trong HTML.</p>
```
- `<i>`tạo phần văn bản in nghiêng.
```html
<p>Vi du minh hoa <i>the i</i> trong HTML.</p>
```
- `<s>` Xác định phần văn bản bị gạch ngang.
```html
<p>Vi du minh hoa <s>the s</s> trong HTML.</p>
```
- `<small>` Làm văn bản nhỏ hơn so với xung quanh.
```html
<p>Vi du minh hoa <small>the small</small> trong HTML.</p>
```
- `b` Xác định phần văn bản bị in đậm.
```html
<p>Vi du minh hoa <b>the b</b> trong HTML.</p>
```
- Một số thẻ khác xem ở link sau:
### https://vietjack.com/html/tong_hop_cac_the_html_co_ban.jsp




