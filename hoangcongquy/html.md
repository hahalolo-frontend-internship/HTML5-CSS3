# HTMl
## 1. Thẻ meta
- `<meta>` thường được sử dụng để chỉ định:
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
* Cài đặt chế độ xem
   ```html
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   ```
* Làm mới tài liệu sau mỗi 30 giây
   ```html
   <meta http-equiv="refresh" content="30">
   ```
## 2. Iframe
* `<iframe>`Thẻ HTML chỉ định một khung nội tuyến.
   * Khung nội tuyến được sử dụng để nhúng tài liệu khác vào tài liệu HTML hiện tại.
   ```html
   <iframe src="url" title="description">
   ```
## 3. Thẻ Block vs Inline 
* Giống: Là các thẻ có kiểu display
   Thẻ Block :
   * Phần tử cấp khối có lề trên và lề dưới
   * Một phần tử cấp khối luôn bắt đầu trên một dòng mới.
   * Một phần tử cấp khối luôn chiếm toàn bộ chiều rộng có sẵn (trải dài sang trái và phải hết mức có thể).
   * Block luôn được xuống dòng và chiếm toàn bộ width nếu width không được set ví dụ như thẻ div, p, section, ul, nav..
   Thẻ Inline :
   * Phần tử cấp khối không có lề trên và lề dưới
   * Một phần tử nội tuyến không bắt đầu trên một dòng mới.
   * Một phần tử nội tuyến chỉ chiếm nhiều chiều rộng khi cần thiết.
   * Các item có kiểu `display` này không thể set được _width_ và _height_. Có thể điều chỉnh được _padding_ và _margin left_ and _right_ còn _bottom_ và _top_ thì không ví dụ như các thẻ `span, i, a, b, img, input, lable`...
## 4. Cookie, Session , Local Storage

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

* `<canvas>` HTML được sử dụng để vẽ đồ họa một cách nhanh chóng, thông qua JavaScript.

* `<canvas>`chỉ là một vùng chứa cho đồ họa. Bạn phải sử dụng JavaScript để thực sự vẽ đồ họa.

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
   * Vẽ Vòng tròn SVG `<circle>`
   ```html
      <svg width="100" height="100">
         <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" />
      </svg>
   ```
    * cx vị trí tâm, tính từ mép trái của SVG
    * cy vị trí tâm, tính từ mép trên
    * r bán kính
    * fill xác định màu tô
    * stroke-width: độ dày vòng và stroke màu stroke thêm đường biên 
   * Vẽ eclipse `<ellipse>`
   ```html
      <svg height="100" width="200">
      <ellipse cx="100" cy="50" rx="100" ry="50" style="fill:green" />
      </svg>
   ```
   * Vẽ hình vuông `<rect>`
   ```html
      <svg width="340" height="120">
      <rect width="300" height="100"  x="20" y="20" fill="green" />
      </svg>
   ```
   * Vẽ đoạn thẳng SVG `<line>`
   ```html
      <svg width="220" height="60">
      <line x1="30" y1="10" x2="200" y2="50" style="stroke: green; stroke-linecap:round; stroke-width:20;"  />
      </svg>
   ```
   * Vẽ các đường gấp khúc `<polyline>` (x,y = 0,40)
   ```html
      <svg width="130" height="160">
      <polyline
         points="0,40 40,40 40,80 80,80 80,120 120,120 120,160" fill="#F9F38C" stroke="green" stroke-width="6" />
      </svg>
   ```
   * Vẽ đa giác `<polygon>` ( 3 tọa độ x,y)
   ```html
      <svg width="500" height="500">
      <polygon points="50 50, 200 200, 300 10"
             style="fill: green; stroke:#F9F38C;" stroke-width="5" />
      </svg>
   ```
   * Sử dụng đường dẫn path - svg để vẽ đường phức tạp
      ```html
      <svg width="100" height="100">
      <path d="M 0 0 C 100 0, 0 100, 100 100"
          style="stroke:black; fill:green" />
      </svg>  
      ```
      * M : di chuyển điểm vẽ đến tọa độ x, y (M x y)
      * L : vẽ từ điểm hiện tại đến điểm x, y (L x y)
      * H : vẽ đường ngang từ điểm hiện tại đến điểm có tọa độ x (H x)
      * V : vẽ đường thẳng đứng đến điểm có tọa độ y (V y)
      *  C : vẽ đường cong cubic-bezier từ điểm hiện tại x0, y0 đến điểm x, y. điểm đầu đường cong tiếp tuyến với đường thẳng x0,y0 x1, y1 điểm thứ 2 của đường cong tiếp tuyến với tường x,y, x2, y2 C x1 y1, x2 y2, x, y
      * S : vẽ đường cong trơn từ điểm hiện tại x0, y0 đến điểm x, y trong đó điểm đầu tiếp tuyến với đường x0,y0, x2, y2 S x2 y2, x y
      * Q : vẽ đường cong cubic-bezier từ điểm hiện tại x0, y0 đến điểm x, y. điểm đầu đường cong tiếp tuyến với đường thẳng x0,y0, x1, y1 điểm thứ 2 của đường cong tiếp tuyến với tường x,y, x1, y1 C x1 y1, x y
      * T : vẽ đường cong cubic-bezier, từ điểm hiện tại đến điểm x,y (T x y)
      * A : vẽ cung tròn
      * Z : đóng đường vẽ
   * Ảnh động SVG `<animate>`
      ```html
      <svg width="500" height="30">
         <rect width="20" height="20" fill="orange">
        <animate attributeName="x" from="0" to="300"
                 dur="10s" fill="freeze" repeatCount="indefinite"/>
         </rect>
         <circle cx="0" cy="15" r="5" fill="green" stroke="yellow">
        <animate attributeName="cx" from="0" to="300"
                 dur="5s" fill="freeze" repeatCount="indefinite"/>
         </circle>
      </svg>
      ```
      * attributeName : chỉ ra thuộc tính sẽ bị tác động để tạo ảnh động.
      * from : giá trị thuộc tính nhận được ban đầu
      * to : giá trị thuộc tính nhận được ở điểm cuối của hoạt động
      * dur : thời gian ảnh động diễn ra
      * fill : cách thiết lập khởi tạo tạo khi bắt đầu động remove khởi tạo giá trị, freeze giữ giá trị ban đầu.
      * repeatCount : chỉ ra số lần lặp lại (indefinite lặp lại vô tận)
   * Chèn chữ SVG
      ```html
      <svg width="500" height="30">
         <text x="10" y="10">Hello World!</text>
      </svg>
      ```
   * Để định dạng thêm chữ trong text
      ```html
         <svg width="500" height="100" style="background: #ffc107">
            <text x="50" y="30" font-weight="bold">Hello World!
               <tspan font-weight="bold" fill="red">This is bold and red</tspan>
            </text>
         </svg>
      ```
## 6. Thẻ form và các attribute
   * Thẻ Form
   ```html
   <form>
      <label for="fname">First name:</label><br>
      <input type="text" id="fname" name="fname"><br>
      <label for="lname">Last name:</label><br>
      <input type="text" id="lname" name="lname">
   </form>
   ```
   * Type:
      * type="text" (ô text)	
      * type="radio"	(nút chọn)
      * type="checkbox"(tích hoặc bỏ cái chọn)
      * type="submit" (gửi lên 1 biểu mẫu)
      * type="button" (nút có thể nhấp)
   
- Form Attribute
   * `acction` (Thuộc tính định nghĩa các hành động được thực hiện khi submit form.)
      ```html
      <form action="/action_page.php">
         <label for="name">Name:</label><br>
         <input type="text" id="name" name="name" value="John Doe"><br><br>
         <input type="submit" value="Submit">
      </form>
      ```
   * `target`quy định nơi để hiển thị kết quả sau khi _submit form_.Mặc định `target="_self"`.
      * _blank	(phản hồi hiển thị 1 tab mới)
      * _self	(phản hiển thị trong cửa sổ hiện tại)
      * _parent (phản hồi hiển thị khung chính (load ngay trang đó))
      * _top (Hiển thị trong phần thân cửa sổ)
      * framename (Phản hồi được hiển thị trong iframe được đặt tên)
   * The method: post và get khác nhau ở điểm nào? Ngoài 2 method đó ra thì còn method nào nữa không?
      * get Thêm dữ liệu biểu mẫu vào URL, trong các cặp tên / giá trị 
      * get độ dài của một URL bị giới hạn (2048 ký tự) post ko giới hạn
      * post dưới dạng HTTP
      ```html
      <form action="/action_page.php" method="get">
         <label for="name">Name:</label>
         <input type="text" id="name" name="name" value="John Doe">
         <input type="submit" value="Submit">
      </form>
      ```
      * Ngoài ra có patch(để sửa 1 phần record), put(để sửa toàn bộ record), delete(xóa dữ liệu)
   - Những Form Element
      * `<input>`có thể được hiển thị theo nhiều 
      cách, tùy thuộc vào type thuộc tính.(sử dụng nhiều)
         ```html
            <form action="/action_page.php">
         ```
         * `enctype` Chỉ sử dụng được bởi post để mã hóa (3 value)
             * `application/x-www-form-urlencoded`
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
 
      * `<label>` xác định nhãn cho một số phần tử biểu mẫu.
      * `<fieldset>`
         + Được sử dụng để nhóm các element trong một form.
         + Thẻ legend dùng làm caption của fieldset
         + Attribute form dùng để xác định form của các field trong fieldset thuộc về
         + Attribute disabled dùng để vô hiệu hóa các element trong fieldset
         ```html
            <fieldset>
               <legend>Personalia:</legend>
               <label for="fname">First name:</label>
               <input type="text" id="fname" name="fname" />
            </fieldset>
         ```
      * `<select>` xác định danh sách thả xuống:
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
      - Thẻ label và attribute `for` với `input type="checkbox", type="radio"`
         * thể checkbox và radio ko thể css khi sử dụng thì nó liên kết qua input từ input thông qua thằng for đến thằng label để chỉnh bằng css
      * `<textarea>` tạo ô nhập văn bản
         ```html
         <textarea name="message" rows="10" cols="30">
         </textarea>
         ```
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
## 7. Nên đặt thẻ Link ở head và thẻ script ở body
   * HTML hoạt động từ trên xuống dưới để link ở head để nó load các thư viện trước, HTMl đọc thằng DOM ID rồi truyền cho js (có thể sử dụng thuộc tính async và defer sử lý)
   * Nó phân định rõ ràng HTML và code.
   * Nó làm cho HTML và JavaScript dễ đọc và bảo trì;
   * Các file JavaScript được lưu đệm có thể đẩy nhanh tốc độ tải trang nếu nó được đặt ngoài
## 8. Khai báo thuộc tính alt trong thẻ img
- Thuộc tính bắt buộc cung cấp văn bản thay thế cho hình ảnh nếu người dùng vì lý do nào đó không thể xem nó 
   ```html
   <img src="2" alt="Flowers in Chania" width="460" height="345">
   ```
- Thuộc tính alt dùng để biểu thị cho tấm ảnh nếu nó bị lỗi 
   * có alt để gg có thể đọc và tìm kiếm được ảnh ( tìm hiểu SEO để hiểu thêm)
## 9. Sự khác biệt Class vs id 
- Class : 
   * Sử dụng được trên nhiều element HTML
   * Phân biệt chữ hoa chữ thường
   * Những cách đặt tên Class phổ biến:
      * BEM: Block Element Modifier
      * Block: Là thành phần của trang web hay ứng dụng đó.
      * Element: Là một thành phần bên trong block, phụ thuộc vào parent block của nó.
      * Modifier: Được dùng để thay đổi cách hiển thị block hoặc phần tử
      * Cú pháp: `.block{} .block__element{} .block--modifier{}`
- id : 
   * Được sử dụng để chỉ định một id duy nhất cho một phần tử HTML
   * ID là duy nhất.
   * Phân biệt chữ hoa chữ thường.
   * JS có thể truy cập một phần tử có id cụ thể bằng _method_ `getElementById()`
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
      * Yêu cầu POST không còn trong lịch sử trình duyệt
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
   * Ví dụ về các yếu tố phi ngữ nghĩa : `<div>` và `<span>` - Không cho biết gì về nội dung của nó.
   * Ví dụ về ngữ nghĩa yếu tố: `<form>`, `<table>` và `<article>` - định nghĩa rõ ràng nội dung của nó.
   * `<header>` đại diện cho một vùng chứa cho nội dung giới thiệu hoặc một tập hợp các liên kết điều hướng.
      * Một `<header>` phần tử thường chứa:
         * một hoặc nhiều phần tử tiêu đề (`<h1>` - `<h6>`)
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
   * `<figcaption>` và `<figure>` 
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
            <p><a href="mailto:congquy2509@gmail.com">congquy2509@gmail.com</a></p>
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
## 13. DOM trong HTML
   - HTML DOM là một mô hình đối tượng tiêu chuẩn và giao diện lập trình cho HTML
   - Sự phân cấp và các thuộc tính của thẻ HTML này ta gọi là selector và trong DOM sẽ có nhiệm vụ xử lý các vấn đề như đổi thuộc tính của thẻ, đổi cấu trúc HTML của thẻ,..
   - DOM document: có nhiệm vụ lưu trữ toàn bộ các thành phần trong tài liệu của website4
   - DOM element: có nhiệm vụ truy xuất tới thẻ HTML nào đó thông qua các thuộc tính như tên class, id, name của thẻ HTML
      - Finding HTML Elements (tìm kiếm phần tử): 
         + `document.getElementById(id)`
            ```javascript
               <p id="intro">Hello World!</p>
               <p id="demo"></p>
               <script>
                  var myElement = document.getElementById("intro");
                  document.getElementById("demo").innerHTML = 
                  "The text from the intro paragraph is " + myElement.innerHTML;
               </script>
            ```
         + `document.getElementsByTagName(name)`
            ```javascript
               <p>Hello World!</p>
               <p id="demo"></p>
               <script>
                  var x = document.getElementsByTagName("p");
                  document.getElementById("demo").innerHTML = 
                  'The text in first paragraph (index 0) is: ' + x[0].innerHTML;
                  </script>
            ```
         + `document.getElementsByClassName(name)`
            ```javascript
               <p>Hello World!</p>
               <p class="intro">The DOM is very useful.</p>
               <p id="demo"></p>
               <script>
                  var x = document.getElementsByClassName("intro");
                  document.getElementById("demo").innerHTML = 
                  'The first paragraph (index 0) with class="intro": ' + x[0].innerHTML;
               </script>
            ```
         + Tìm các phần tử HTML bằng Bộ chọn CSS `querySelectorAll()`
            ```javascript
               <p class="intro">The DOM is very useful.</p>
               <p class="intro">This example demonstrates the <b>querySelectorAll</b> method.</p>
               <p id="demo"></p>
               <script>
                  var x = document.querySelectorAll("p.intro");
                  document.getElementById("demo").innerHTML = 
                  'The first paragraph (index 0) with class="intro": ' + x[0].innerHTML;
               </script>
            ```
         + Finding HTML Elements by HTML Object Collections (Tìm các phần tử HTML bằng Bộ sưu tập đối tượng HTML)
            ```html
               <form id="frm1" action="/action_page.php">
                  First name: <input type="text" name="fname" value="Donald"><br>
                  Last name: <input type="text" name="lname" value="Duck"><br><br>
                  <input type="submit" value="Submit">
               </form> 
               <p>Click "Try it" to display the value of each element in the form.</p>
               <button onclick="myFunction()">Try it</button>
               <p id="demo"></p>
               <script>
               function myFunction() {
                  var x = document.forms["frm1"];
                  var text = "";
                  var i;
                  for (i = 0; i < x.length ;i++) {
                  text += x.elements[i].value + "<br>";
                  }
               document.getElementById("demo").innerHTML = text;
               }
               </script>
            ```
      - Changing HTML Elements (thay đổi phần tử )
         + `element.setAttribute(attribute, value)`
      - Adding and Deleting Elements(thêm và xóa các phần tử)
         + `document.createElement(element)`	Create an HTML element
         + `document.removeChild(element)`	Remove an HTML element
         + `document.appendChild(element)`	Add an HTML element
         + `document.replaceChild(new, old)`	Replace an HTML element
         + `document.write(text)`	Write into the HTML output stream
      - Adding Events Handlers (Thêm trình xử lí sự kiện)
         + `document.getElementById(id).onclick = function(){code}`
   - DOM HTML: có nhiệm vụ thay đổi giá trị nội dung và giá trị thuộc tính của các thẻ HTML
      + Thay đổi luồng đầu ra
      ```js
         <script>
         document.write(Date());
         </script>
      ```
      + Thay đổi nội dung (thẻ p)
      ```js
         <p id="p1">Hello World!</p>

         <script>
         document.getElementById("p1").innerHTML = "New text!";
         </script>
         <p>The paragraph above was changed by a script.</p>
      ```
      + Thay đổi giá trị (`smiley.gif`) bị chuyển thành (`landscape.jpg"`)
      ```js
         <img id="image" src="smiley.gif" width="160" height="120">

         <script>
            document.getElementById("image").src = "landscape.jpg";
         </script>

         <p>The original image was smiley.gif, but the script changed it to landscape.jpg</p>
      ```
   - DOM CSS: có nhiệm vụ thay đổi các định dạng CSS của thẻ HTML
      + Thay đổi kiểu
      ```js
         <p id="p1">Hello World!</p>
         <p id="p2">Hello World!</p>

         <script>
         document.getElementById("p2").style.color = "blue";
         document.getElementById("p2").style.fontFamily = "Arial";
         document.getElementById("p2").style.fontSize = "larger";
         </script>
      ```
      + Thay đổi trình sự kiện (click vào thì h1 đổi màu)
      ```js
         <h1 id="id1">My Heading 1</h1>

         <button type="button" 
         onclick="document.getElementById('id1').style.color = 'red'">
         Click Me!</button>
      ```
   - DOM Event: có nhiệm vụ gán các sự kiện như `onclick()`, `onload()` vào các thẻ HTML
      + Phản ứng sự kiện
      ```js
         <h1 onclick="this.innerHTML = 'Ooops!'">Click on this text!</h1>
      ```
      + Event Attributes
      ```js
         <p>Click the button to display the date.</p>
         <button onclick="displayDate()">The time is?</button>
         <script>
         function displayDate() {
          document.getElementById("demo").innerHTML = Date();
            }
         </script>
         <p id="demo"></p>
      ```
      + Assign Events
      ```js
         <p>Click "Try it" to execute the displayDate() function.</p>
         <button id="myBtn">Try it</button>
         <p id="demo"></p>
         <script>
         document.getElementById("myBtn").onclick = displayDate;
         function displayDate() {
         document.getElementById("demo").innerHTML = Date();
         }
         </script>
      ```
      + The onload and onunload Events
      ```js
         <body onload="checkCookies()">
         <p id="demo"></p>
         <script>
         function checkCookies() {
         var text = "";
            if (navigator.cookieEnabled == true) {
               text = "Cookies are enabled.";
               } else {
                  text = "Cookies are not enabled.";
               }
         document.getElementById("demo").innerHTML = text;
         }
         </script>
      ```
      + Sự kiện trao đổi (Khi bạn rời khỏi trường nhập, một hàm được kích hoạt để chuyển văn bản đầu vào thành chữ hoa.s)
      ```js
         <head>
         <script>
         function myFunction() {
         var x = document.getElementById("fname");
         x.value = x.value.toUpperCase();
         }
         </script>
         </head>
         <body>
         Enter your name: <input type="text" id="fname" onchange="myFunction()">
         <p>When you leave the input field, a function is triggered which transforms the input text to upper case.</p>
      ```
      + `onmouseover` (xuất hiện) and `onmouseout` (rê chuột hiện sau) 
      ```js
         <div onmouseover="mOver(this)" onmouseout="mOut(this)" 
         style="background-color:#D94A38;width:120px;height:20px;padding:40px;">
         Mouse Over Me</div>

         <script>
         function mOver(obj) {
             obj.innerHTML = "Thank You"
         }
         function mOut(obj) {
            obj.innerHTML = "Mouse Over Me"
         }
      ```
   - DOM Listener: có nhiệm vụ lắng nghe các sự kiện tác động lên thẻ HTML đó
      + `addEventListener()` method
         + Phương pháp gắn một event handler cho một yếu tố mà không ghi đè lên xử lý sự kiện hiện có.
         + Thêm nhiều sự kiên vào dễ dàng
         + Thêm trình xử lý sự kiện vào bất kỳ đối tượng DOM nào không chỉ các phần tử HTML (tức là đối tượng cửa sổ)
         + Khi sử dụng `addEventListener()`, JavaScript được tách biệt khỏi đánh dấu HTML
         + Loại bỏ sự kiện `removeEventListener()`
         + Syntax (cú pháp)
            + `element.addEventListener(event, function, useCapture);`
   - DOM Navigation dùng để quản lý, thao tác với các thẻ HTML, thể hiện mối - quan hệ cha - con của các thẻ HTML

   - DOM Node, Nodelist: có nhiệm vụ thao tác với HTML thông qua đối tượng (Object)
   - Tạo kiểu cho phần tử 
      + Phần tử _container_ phải được tạo với `style = " position: relative"`.
      + Phần tử _animation_ phải được tạo với `style = " position: absolute"`.