# HTML5-CSS3

# HTML
## 1. Thẻ meta dùng để làm gì?
- Phần <meta>tử này thường được sử dụng để chỉ định:
* Bộ ký tự
   ```html
   <meta charset="UTF-8">
   ```
* Từ khóa
   ```html
   <meta name="keywords" content="HTML, CSS, JavaScript">
   ```
* Mô tả trang
   ```html
   <meta name="description" content="Free Web tutorials">
   ```
* Tác giả của tài liệu 
   ```html
   <meta name="author" content="John Doe">
   ```
* cài đặt chế độ xem
   ```html
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   ```
* Làm mới tài liệu sau mỗi 30 giây
   ```html
   <meta http-equiv="refresh" content="30">
   ```
## 2. Iframe dùng để làm gì?
* `<iframe>`Thẻ HTML chỉ định một khung nội tuyến.
   * Khung nội tuyến được sử dụng để nhúng tài liệu khác vào tài liệu HTML hiện tại.
   ```html
   <iframe src="url" title="description">
   ```
## 3. Thẻ Block vs Inline khác nhau ở điểm nào?

   Thẻ Block :
   * Phần tử cấp khối có lề trên và lề dưới
   * Một phần tử cấp khối luôn bắt đầu trên một dòng mới.
   * Một phần tử cấp khối luôn chiếm toàn bộ chiều rộng có sẵn (trải dài sang trái và phải hết mức có thể).

   Thẻ Inline :
   * Phần tử cấp khối không có lề trên và lề dưới
   * Một phần tử nội tuyến không bắt đầu trên một dòng mới.
   * Một phần tử nội tuyến chỉ chiếm nhiều chiều rộng khi cần thiết.
   * Đây là một phần tử `<span>` bên trong một đoạn văn.

## 4. Sự khác nhau giữa Cookie, Session , Local Storage

Chung:  

   * Nơi sao lưu dữ liệu 
   * 1 file session sẽ bằng 1 file cookie

   Session: 

   * Hoạt động ngay khi client gửi request đến sever 
   * Được lưu trên 1 tệp máy chủ
   * Với mỗi session sẽ được cấp phát 1 định danh độc nhất vô nhị SessionID (thoát cho cái ID mới)
   * Hoạt động trong vòng 14p

   Cookie: 

   * Lưu dữ lượng dữ liệu nhỏ trên Browser nó hoạt động ở khoảng server với Browser
   * Có thể sửa đổi

   Local Storage
   * Là một phần tích hợp sẵn trong Browser giúp lưu trữ và truy vấn dữ liệu vô thời hạn trong trình duyệt của người dùng.(khác 2 thằng kia có thời gian)
   * Không gửi thông tin lên Server như Cookie
   * Dữ liệu chỉ mất khi bạn sử dụng chức năng Clear History của trình duyệt, hoặc localStorage API để xóa
   * Local Storage cho phép bạn lưu trữ tối đa đến 5MB (cookie maximum 4KB Data)
   * Tất cả data lưu trữ sẽ ko xóa đi khi user đóng tab browser lại.
## 5. SVG vs Canvas

Canvas

* Phần `<canvas>` tử HTML được sử dụng để vẽ đồ họa một cách nhanh chóng, thông qua JavaScript.

* Phần `<canvas>`tử chỉ là một vùng chứa cho đồ họa. Bạn phải sử dụng JavaScript để thực sự vẽ đồ họa.

* Canvas có một số phương pháp để vẽ đường dẫn, hộp, hình tròn, văn bản và thêm hình ảnh.

* Canvas là một vùng hình chữ nhật trên trang HTML. Theo mặc định, canvas không có đường viền và không có nội dung.
   ```html
   <canvas id="myCanvas" width="200" height="100"></canvas>
   ```
* HTML Canvas có thể :
   * vẽ văn bản
   * vẽ đồ họa
   * được tạo hoạt ảnh
      * Các đối tượng canvas có thể di chuyển. Mọi thứ đều có thể xảy ra: từ những quả bóng nảy đơn giản đến những hình ảnh động phức tạp.
   * tương tác
   * được sử dụng trong trò chơi

SVG (tìm hiểu sâu hơn sử dụng làm việc nhiều hơn)

* SVG định nghĩa đồ họa dựa trên vectơ ở định dạng XML.
* Sự khác biệt giữa SVG và Canvas
   * SVG là một ngôn ngữ để mô tả đồ họa 2D trong XML.
   * Canvas vẽ đồ họa 2D một cách nhanh chóng (với JavaScript).
   * SVG dựa trên XML, có nghĩa là mọi phần tử đều có sẵn trong SVG DOM (có thể đính kèm các trình xử lý sự kiện JavaScript cho một phần tử)
   * Trong SVG, mỗi hình dạng được vẽ được ghi nhớ như một đối tượng. Nếu các thuộc tính của đối tượng SVG bị thay đổi, trình duyệt có thể tự động hiển thị lại hình dạng.
   * Canvas được hiển thị từng pixel một. Trong canvas, một khi đồ họa được vẽ, nó sẽ bị trình duyệt quên. Nếu vị trí của nó phải được thay đổi, toàn bộ cảnh cần được vẽ lại, bao gồm bất kỳ đối tượng nào có thể đã bị che bởi đồ họa.
## 6. Thẻ form và các attribute
   * Thẻ Form
   ```html
   <form>
      <label for="fname">First name:</label><br>
      <input type="text" id="fname" name="fname"><br>
      <label for="lname">Last name:</label><br>
      <input type="text" id="lname" name="lname">
   </from>
   ```
      * Type:
         * type="text" (ô text)	
         * type="radio"	(nút chọn)
         * type="checkbox"(tích hoặc bỏ cái chọn)
         * type="submit" (gửi lên 1 biểu mẫu)
         * type="button" (nút có thể nhấp)
- Form Attribute
   * The Action Attribute `<target>`
      * _blank	(phản hồi hiển thị 1 tab mới(mở 1 tab mới))
      * _self	(phản hiển thị trong cửa sổ hiện tại)
      * _parent (phản hồi hiển thị khung chính (load ngay trang đó))
      * _top (Hiển thị trong phần thân cửa sổ)
      * framename (Phản hồi được hiển thị trong iframe được đặt tên)
   * The method: post và get khác nhau ở điểm nào? Ngoài 2 method đó ra thì còn method nào nữa không?
      * get Thêm dữ liệu biểu mẫu vào URL, trong các cặp tên / giá trị 
      * get độ dài của một URL bị giới hạn (2048 ký tự) post ko giới hạn
   * acction
      * Các action thuộc tính định nghĩa các hành động được thực hiện khi biểu mẫu được gửi.
      * Thông thường, dữ liệu biểu mẫu được gửi đến tệp trên máy chủ khi người dùng nhấp vào nút gửi.
      * ví dụ dữ liệu biểu mẫu được gửi đến một tệp có tên "action_page.php". Tệp này chứa tập lệnh phía máy chủ xử lý dữ liệu biểu mẫu:
      ```html
      <form action="/action_page.php">
      <label>....
      </form>
      ```
   - Những Form Element
      * Phần `<input>` tử có thể được hiển thị theo nhiều 
      cách, tùy thuộc vào type thuộc tính.(sử dụng nhiều)
         ```html
            <form action="/action_page.php">
         ```
         * `enctype` Chỉ sử dụng được bởi post để mã hóa (3 value)
             * `application/x-www-form-urlencoded` (
               * Mặc định tất cả các ký tự đều được mã hóa trước khi gửi (dấu cách được chuyển đổi thành ký hiệu "+" và các ký tự đặc biệt được chuyển đổi thành giá trị ASCII HEX)
            * `multipart/form-data`
            * `text/plain` (chi củng được ko khuyến khích)

            ```html
               <form action="/action_page_binary.asp" name="myForm" method="post" enctype="multipart/form-data" target="_blank" autocomplete="on" novalidate>
                  <label for="fname">First name:</label>
                  <input type="text" id="fname" name="fname"><br><br>
                  <label for="lname">Last name:</label>
                  <input type="text" id="lname" name="lname"><br><br>
                  <input type="submit" value="Submit">
               </form>
            ```
 
      * Phần `<label>` tử xác định nhãn cho một số phần tử biểu mẫu.
      * fieldset
      * Phần `<select>` tử xác định danh sách thả xuống:
         ```html
         <form action="/action_page.php">
            <label for="cars">Choose a car:</label>
            <select id="cars" name="cars" size="4" multiple>
               <option value="volvo">Volvo</option>
               <option value="saab">Saab</option>
               <option value="fiat">Fiat</option>
               <option value="audi">Audi</option>
            </select><br><br>
            <input type="submit">
         </form>
         ```
         *  `<option>` phần tử xác định một tùy chọn có thể được chọn.
      * Lưu ý thuộc tính for trong label quan trọng
         ```html
         <label for="cars">Choose a car:</label>
         ``` 
      - Thẻ label và attribute for với input type="checkbox", type="radio"
         * thể checkbox và radio ko thể css khi sử dụng thì nó liên kết qua input từ iput thong qua thằng for đến thằng label để chỉnh bằng css
      * `<textarea>` tạo ô nhập văn bản
         ```html
         <textarea name="message" rows="10" cols="30">
         </textarea>
         ```
         * 
      * `<button>` nút có thể nhấp
         ```html
         <button type="button" onclick="alert('Hello World!')">Click Me!</button>
         ```
      * `<fieldset>` nhóm dữ liệu liên quan đến biểu mẫu
         *  `<legend>` xác định chú thích cho `<fieldset>` phần tử.
         ```html
         <form action="/action_page.php">
            <fieldset>
               <legend>Personalia:</legend>
               <label for="fname">First name:</label><br>
               <input type="text" id="fname" name="fname" value="John"><br>
               <label for="lname">Last name:</label><br>
               <input type="text" id="lname" name="lname" value="Doe"><br><br>
               <input type="submit" value="Submit">
            </fieldset>
         </form>
         ```
      * `<datalist>` chỉ định danh sách các tùy chọn được xác định trước cho một `<input>` phần tử.
         ```html
         <form action="/action_page.php">
            <input list="browsers">
            <datalist id="browsers">
               <option value="Internet Explorer">
               <option value="Firefox">
               <option value="Chrome">
               <option value="Opera">
               <option value="Safari">
            </datalist> 
         </form>
         ```
      * `<output>` đại diện cho kết quả của một phép tính
         ```html
         <form action="/action_page.php"
            oninput="x.value=parseInt(a.value)+parseInt(b.value)">
            0
            <input type="range" id="a" name="a" value="50">
            100 +
            <input type="number" id="b" name="b" value="50">
            =
            <output name="x" for="a b"></output>
            <br><br>
            <input type="submit">
         </form>
         ```
      * `<optgroup>`
## 7. Tại sao nên đặt thẻ Link ở head và thẻ script ở body?
   * Nó phân định rõ ràng HTML và code;
   * Nó làm cho HTML và JavaScript dễ đọc và bảo trì;
   * Các file JavaScript được lưu đệm có thể đẩy nhanh tốc độ tải trang nếu nó được đặt ngoài
## 8. Tại sao nên khai báo thuộc tính alt trong thẻ img?
- Thuộc tính bắt buộc cung cấp văn bản thay thế cho hình ảnh nếu người dùng vì lý do nào đó không thể xem nó 
   ```html
   <img src="2" alt="Flowers in Chania" width="460" height="345">
   ```
- Thuộc tính alt dùng để biểu thị cho tấm ảnh nếu nó bị lỗi 
   * có alt để gg có thể đọc và tìm kiếm được ảnh ( tìm hiểu SEO để hiểu thêm)
## 9. Class vs id khác nhau những gì ?
- Class : 1 lớp hoạt động nó và các thẻ sau nó
- id : địa chỉ của 1 thẻ 
## 10. HTTP Methods
- Phương thức http có:
   * GET chuỗi truy vấn (tên /giá trị) gửi bằng url của 1 yêu cầu get
      ```
      /test/demo_form.php?name1=value1&   name2=value2
      ```
      * Yêu cầu GET có thể được lưu vào bộ nhớ đệm
      * Yêu cầu GET vẫn còn trong lịch sử trình duyệt
      * Yêu cầu GET có thể được đánh dấu
      * Yêu cầu GET không bao giờ được sử dụng khi xử lý dữ liệu nhạy cảm
      * Yêu cầu GET có giới hạn về độ dài
      * Yêu cầu GET chỉ được sử dụng để yêu cầu dữ liệu (không sửa đổi)
   * POST được sử dụng để gửi dữ liệu đến máy chủ để tạo / cập nhật tài nguyên.
      * Yêu cầu POST không bao giờ được lưu vào bộ nhớ đệm
      * Yêu cầu ĐĂNG không còn trong lịch sử trình duyệt
      * Yêu cầu POST không thể được đánh dấu
      * Yêu cầu POST không có giới hạn về độ dài dữ liệu
      ```
      POST /test/demo_form.php HTTP/1.1
      Host: w3schools.com
      name1=value1&name2=value2
      ```
   * PUT được sử dụng để gửi dữ liệu đến máy chủ để tạo / cập nhật tài nguyên.
      * Gọi cùng một yêu cầu PUT nhiều lần sẽ luôn tạo ra cùng một kết quả. Ngược lại, việc gọi nhiều lần một yêu cầu POST có tác dụng phụ là tạo nhiều lần cùng một tài nguyên.
   * HEAD gần giống với GET, nhưng không có phần thân phản hồi.
      * Yêu cầu HEAD rất hữu ích để kiểm tra xem yêu cầu GET sẽ trả về gì trước khi thực sự đưa ra yêu cầu GET - như trước khi tải xuống tệp lớn hoặc nội dung phản hồi.
   * DELETE xóa tài nguyên được chỉ định.
   * PATCH hơi tương tự với khái niệm "cập nhật" được tìm thấy trong CRUD 
      * Một PATCH yêu cầu được coi là một tập hợp các hướng dẫn về cách sửa đổi một tài nguyên. Đối lập điều này với PUT; đó là một đại diện đầy đủ của một tài nguyên.
   * OPTIONS mô tả các tùy chọn giao tiếp cho tài nguyên đích.
## 11. Semantic Elements in HTML
   * Phần tử ngữ nghĩa mô tả rõ ràng ý nghĩa của nó đối với cả trình duyệt và nhà phát triển.
   * Ví dụ về các yếu tố phi ngữ nghĩa : `<div>` và `<span>`- Không cho biết gì về nội dung của nó.
   * Ví dụ về ngữ nghĩa yếu tố: `<form>`, `<table>`, và `<article>`- định nghĩa rõ ràng nội dung của nó.
   * `<header>` đại diện cho một vùng chứa cho nội dung giới thiệu hoặc một tập hợp các liên kết điều hướng.

      * Một `<header>` phần tử thường chứa:

         * một hoặc nhiều phần tử tiêu đề (<h1> - <h6>)
         * logo hoặc biểu tượng
         * thông tin về quyền tác giả
   * `<nav>` xác định một tập hợp các liên kết điều hướng.
   * `<section>` xác định tài liệu nằm trong nó
   * `<article>` xác định tài liệu nằm trong mà nội dung độc lập khép kính
   * `<aside>`
      * xác định một số nội dung ngoài nội dung mà nó được đặt (như một thanh bên).
      * nội dung cần được gián tiếp liên quan đến nội dung xung quanh.
   * Các `<main>` thẻ ghi rõ nội dung chính của tài liệu.
      * ko lặp lại bất ký đâu nó là duy nhất
   * `<mark>` thẻ làm nổi bật (bôi đen ý chính)
      * thường mặc định dưới
      ```css
       mark {
         background-color: yellow;
         color: black;
      }
      ```
   * `<figure>` và `<figcaption>` 
      * `<figure>` thẻ quy định cụ thể nội dung khép kín, như minh họa, sơ đồ, hình ảnh, danh sách mã, vv
      * `<figcaption>` thẻ định nghĩa một chú thích cho một `<figure>` phần tử. 
      * Phần `<figcaption>` tử có thể được đặt làm con đầu tiên hoặc con cuối cùng của một `<figure>` phần tử.
   * `<footer>` xác định chân tài liệu
   * Demo:

      ```html
         <nav>
            <a href="/html/">HTML</a> |
            <a href="/css/">CSS</a> |
            <a href="/js/">JavaScript</a> |
            <a href="/jquery/">jQuery</a>
         </nav>
         <main>
            <h1>Most Popular Browsers</h1>
            <p>Chrome, Firefox, and Edge are the most used </p>
            <article>
               <header>
                  <h1>What Does WWF Do?</h1>
                  <p>WWF's mission:</p>
               </header>
                  <p>WWF's missi to stop the degradation of our</p>
                  <aside>
                  <h4>Epcot Center</h4>
                  <p>Epcot is a theme park at Walt </p>
               </aside>
            </article>
         </main>
         <footer>
            <p>Author: Hege Refsnes</p>
            <p><a href="mailto:congquy@gmail.com">congquy@gmail.com</a></p>
         </footer> 
      ```
## 12. HTML Media (Media, Audio, Video)
   - Media 
      - Đa phương tiện trên web là âm thanh, nhạc, video, phim và hình ảnh động.
      - Các định dạng video phổ biến (Fomat) dùng `type`
         + MPEG =	.mpg `or` .mpeg
         + AVI	= .avi
         + WMV	= .wmv
         + QuickTime =	.mov
         + RealVideo	= .rm `or` .ram
         + Flash = .swf `or` .flv
         + Ogg	= .ogg
         + WebM = .webm
         + MPEG-4 `or` MP4 = .mp4
   - Video hiển thị video cho web
      -  ```html
         <video width="320" height="240" controls autoplay muted>
            <source src="movie.mp4" type="video/mp4">
            <source src="movie.ogg" type="video/ogg">
            Your browser does not support the video tag.
         </video>
         ```
   - Audio phát âm thanh trên web
      - ```html
         <audio controls autoplay muted>
            <source src="horse.ogg" type="audio/ogg">
            <source src="horse.mp3" type="audio/mpeg">
            Your browser does not support the audio element.
         </audio>
        ```
## 13. DOM trong HTML là gì ?
   - Sự phân cấp và các thuộc tính của thẻ HTML này ta gọi là selector và trong DOM sẽ có nhiệm vụ xử lý các vấn đề như đổi thuộc tính của thẻ, đổi cấu trúc HTML của thẻ,..
   - 
## HTML5
## 1. HTML5 có gì mới so với HTML4?

## 2. Một số thẻ được giới thiệu trong HTML5 như Article, Section, Header, Footer , Main, Nav, Audio, Video, ... và ý nghĩa của mỗi thẻ đó?
## 3. Sự khác nhau giữa thẻ Section vs Div?
## 4. Thuộc tính defer vs async trên thẻ Script là gì?
## 5. Thuộc tính data-* có nghĩa gì?


