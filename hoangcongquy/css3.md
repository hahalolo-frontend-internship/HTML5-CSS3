# CSS3
## Background
   - `background-color` (màu nền)
      - a valid color name - like "red"
         ```css
         body {
            background-color: red;
            opacity: 0.3; /* độ mờ */
         }
         ```
      - a HEX value - like "#ff0000"
         ```css
         div {
            background-color: #ff0000;
         }
         ```
      - an RGB value - like "rgb(255,0,0)"
         ```css
         div {
            background: rgba(0, 128, 0, 0.3) /* nền màu xanh với 30% opacity */
            }
         ```
         + rgba(red, green, blue, alpha)
            + alpha độ mờ từ 0 - 1 (nó như là opacity tỉ lệ 0%-100%)
   - `background-image`
      ```css
         body {
         background-image: url("paper.gif");
         }
      ```
   - `background-repeat` (lặp lại)
      ```css
         body {
            background-image: url("gradient_bg.png");
            background-repeat: repeat-x; /* trục ngang */
            background-repeat: repeat-y;  /*trục dọc*/
            background-repeat: no-repeat; /*không lặp*/
         }
      ```
   - `background-attachment` (hình nền đứng hoặc chạy so với phần còn lại của trang)
      ```css
         body {
         background-image: url("img_tree.png");
         background-repeat: no-repeat;
         background-position: right top;
         background-attachment: fixed; /* kéo thanh trang thì ảnh nó cố định bên góc ko mất ảnh*/
      }
      ```
   - `background-position` (tài sản được sử dụng để xác định vị trí của các hình nền)
      ```css
         body {
            background-image: url("img_tree.png");
            background-repeat: no-repeat;
            background-position: right top; /*góc trên cùng bên phải: */
         }
      ```
   - `background (shorthand property)` (thuộc tính tốc ký "gộp code 1 dòng có tất cả thuôc tính")
      ```css
         body {
            background: #ffffff url("img_tree.png") no-repeat right top;
            /* màu - địa chỉ- ko lặp - nằm trên góc phải */
         }
      ```
   - `CSS background-clip` (tài sản cách xa nền)
      ```css
         div {
            border: 10px dotted black;
            padding: 15px;
            background: lightblue;
            background-clip: border-box|padding-box|content-box|initial|inherit;
            /*nằm mép trong background - nằm mép ngoài background - nằm sát cái bộ khung nội dung - đặt giá trị này thành giá trị mặc định*/
         }
      ```
   - `background-origin ` (xử lí vị trí xử lí hình nền)
      ```css
         <style>
            #example1 {
            border: 10px dashed black;
            padding: 25px;
            background: url(paper.gif);
            background-repeat: no-repeat;
            background-origin: padding-box|border-box|content-box|initial|inherit;
            /*Hình nền đều bắt đầu góc trái trên cùng 
            -pad:nằm góc trong đường viền
            -bor: nằm góc ngoài của đường viền
            -cont: nằm góc trái của nội dung */
         }
         </style>
         <body>
            <div id="example1">
            <h2>Hello World</h2>
            <p>Pharagrap</p>
            </div>
         <body>
      ```
   - `CSS background-size` (kích thước nền)
      ```css
         div {
         background-image:url('w3css.gif');
         background-repeat:no-repeat;
         background-size:auto|length=px|percentage=%|cover|contain|initial|inherit|;
         }
      ```
      + `auto`: kích thước mặc định của nó
      + `length` và `percentage`: chiều rộng và cao của nó nếu đặt 1 thì còn lại tự động
      + `cover`: Thay đổi kích thước hình nền để bao phủ toàn bộ vùng chứa (bể ảnh).
      + `contain`: Thay đổi kích thước hình nền để đảm bảo hình ảnh hiển thị đầy đủ(không bể)
## Overflow 
   - Demo (Phần tràn)
      ```css
      div {
         width: 200px;
         height: 50px;
         background-color: #eee;
         overflow: visible|hidden|scroll |auto|;
      }
      ```
      + visible- Mặc định. Phần tràn không được cắt bớt. Nội dung hiển thị bên ngoài hộp của phần tử
      + hidden - Phần tràn bị cắt bớt và phần còn lại của nội dung sẽ không hiển thị
      + scroll - Phần tràn được cắt bớt và một thanh cuộn được thêm vào để xem phần còn lại của nội dung
      + auto- Tương tự như scroll, nhưng nó chỉ thêm thanh cuộn khi cần thiết
      + `overflow-x` và `overflow-y`
         ```css
         div {
            background-color: #eee;
            width: 200px;
            height: 50px;
            border: 1px dotted black;
            overflow-x: hidden;/*làm việc trái/phải*/
            overflow-y: scroll;/*làm việc trên/dưới*/
         }
         ```
## Display
- Flex 
      ```css
      #main div {
      -ms-flex: 1; /* IE 10 dùng để hổ tr */ 
      flex: 1; /*flex-grow
               flex-shrink
               flex-basis */
      }
      ```
   + `flex-grow`
      ```html
      <head>
         <style>
      #main {
         width: 350px;
         height: 100px;
         border: 1px solid #c3c3c3;
         display: flex;
      }
      #main div:nth-of-type(1) {flex-grow: 5;}
      #main div:nth-of-type(2) {flex-grow: 1;}
      </style>
      </head>
      <body>
         <div id="main">
            <div style="background-color:red;
            "></div>
            <div style="background-color:blue;"></div>
         </div>
      </body>
      ```
   * Khối chia theo: Phần tử lớn = Số lần * 1 phần của phần tử nhỏ nhất (Một số chỉ định mục sẽ tăng bao nhiêu so với phần còn lại của các mục linh hoạt)
   + `flex-shrink`
      ```html
      <style> 
      #main {
         width: 100%;
         height: 100px;
         border: 1px solid #c3c3c3;
         display: flex;
      }
      #main div {
         flex-grow: 1;/* độ tăng lên khi kéo */
         flex-shrink: 1;/* độ giảm khi kéo thả*/
         flex-basis: 100px; /*giá trị min 100px*/
      }
      #main div:nth-of-type(2) /*vị trí backgroud mình cần xử lí*/ {
         flex-shrink:2;/*tỉ lệ với flex trên div*/
      }
      </style>
      </head>
      <body>
      <div id="main">
         <div style="background-color:coral;"></div>
         <div style="background-color:lightblue;"></div>
         <div style="background-color:khaki;"></div>
      </div>
      </body>
      ```
   + `flex-basis`
      + Để cố định độ px của background 
      + Hoạt động khi không có sự co dản `flex-grow: 0 -flex-shrink 0;`
      ```html
      <style>
      #main {
      width: 300px;
      height: 100px;
         border: 1px solid #c3c3c3;
         display: flex;
      }
      #main div {
         flex-grow: 0;
         flex-shrink: 0;
         flex-basis: 50px;
      }
      #main div:nth-of-type(2) {
         flex-basis: 110px;
      }
      </style>
      </head>
      <body>
      <div id="main">
         <div style="background-color:coral;">50px</div>
         <div style="background-color:lightblue;">100px</div>
      </div>
      ```
   + `flex-direction`
      ```css
      div {
         display: flex;
        flex-direction: row|row-reverse|column|column-reverse|initial|inherit;
      }
      ```
      + row: hàng ngang gắn góc trái trên
      + row-reverse: hàng ngang gắn góc phải trên
      + column: hàng dọc góc trái trên
      + column-reverse: hàng dọc góc trái dưới
      + initial: kế thừa thuộc tính mẹ 
   + `flex-flow`
      ```css
         div {
         display: flex;
         flex-flow: /*flex-direction flex-wrap|initial|inherit;*/
         }
      ```
      + row nowrap: trên 1 dòng trái sang phải ko xuống dòng
      + row-reverse nowrap: ngược lại
      + column nowrap: trên 1 cột bên trái trên xuống
      + column-reverse nowrap: ngược lại
      + row wrap: trên dòng 1 3 5 ....trái sang phải
      + row-reverse wrap: ngược lại
      + column wrap: trên cột 1 3 5....trên xuống
      + column-reverse wrap: ngược lại
      + row wrap-reverse: trên dòng 1 3 5... dưới lên
      + row-reverse wrap-reverse: ngược lại
      + column wrap-reverse: trên xuống 1 3 5.. từ trái qua phải 
      + column-reverse wrap-reverse: ngược lại
      +initial: giá trị ban đầu thằng mẹ
   + `fllex-wrap`
      ```css
      div{
         display: flex;   
         flex-wrap: nowrap|wrap|wrap-reverse|initial|inherit;
      }
      ```
      + nowrap : Các hoạt động linh hoạt sẽ không được bọc
      + wrap : Các hoạt động linh hoạt sẽ được bọc lại nếu cần
      + wrap-reverse: Các hoạt động linh hoạt sẽ được bọc lại, nếu cần, ngược lại thứ tự.
   * _Note: Internet Explorer 10 and earlier versions do not support the property._
- Grid
## Animations
- CSS cho phép tạo hoạt ảnh cho các phần tử HTML mà không cần sử dụng JavaScript hoặc Flash!
- Thuộc tính:
   - `@keyframes` (hoạt ảnh sẽ dần thay đổi từ kiểu hiện tại -> kiểu mới trong time quy định)
      ```css 
      <style> 
      div {
         width: 100px;
         height: 100px;
         background-color: red;
         position: relative;
         animation-name: example;
         animation-duration: 4s;
         animation-iteration-count: 3;
      }
      @keyframes example {
      0%   {background-color:red; left:0px; top:0px;}
      25%  {background-color:yellow; left:200px; top:0px;}
      50%  {background-color:blue; left:200px; top:200px;}
      75%  {background-color:green; left:0px; top:200px;}
      100% {background-color:red; left:0px; top:0px;}
      }
      </style>
      <body>
      <div></div>
      </body>
      ```
      ![animation](anhcss/keyframes.png)
   + `animation-name` ( gọi đến tên animation cần xử lí)
      ```css
      animation-name: keyframename|none|initial|inherit;
      ```
      + keyframename: Chỉ định tên của khung hình chính mà bạn muốn liên kết với bộ chọn
      + none: Chỉ định rằng sẽ không có hoạt ảnh
   + `animation-duration` ( Xác định thời gian hoạt động tổng mặc định 0s)
      ```css
         animation-duration: time|initial|inherit;
      ```
   + `animation-delay` (Thời gian trì hoản thực hiện hoạt động)
   + `animation-iteration-count` (Quy định số lần chạy n)
      + infinite (vô hạn)
   + `animation-direction` ( Quy định hoạt ảnh đi theo kiểu nào)
      + normal- mặc định như thường
      + reverse - đi hướng ngược lại
      + alternate - sau khi chạy đủ 1 vòng lệnh frames thì nó chạy ngược lại
      + alternate-reverse - xuất phát tại điểm cuối rồi chạy ngược lại vòng đầu
   + `animation-timing-function` (quy định đường cong tốc độ ảnh)
      ```css
         <style> 
         div {
            width: 100px;
            height: 50px;
            background-color: red;
            font-weight: bold;
            position: relative;
            animation: mymove 5s infinite;
         }
         #div1 {animation-timing-function: linear;}
         #div2 {animation-timing-function: ease;}
         #div3 {animation-timing-function: ease-in;}
         #div4 {animation-timing-function: ease-out;}
         #div5 {animation-timing-function: ease-in-out;}
         @keyframes mymove {
            from {left: 0px;}
            to {left: 300px;}
         }
         </style>
         <body>
            <div id="div1">linear</div>
            <div id="div2">ease</div>
            <div id="div3">ease-in</div>
            <div id="div4">ease-out</div>
            <div id="div5">ease-in-out</div>
         </body>
      ```
      + ease - chậm nhanh chậm
      + linear - cùng 1 tốc độ từ đầu -> cuối
      + ease-in - khởi động chậm
      + ease-out - kết thúc chậm
      + ease-in-out - khởi động và kết thúc chậm
      + cubic-bezier(n,n,n,n) - cho phép chon giá trị ( 0 < n < 1 )
   + `animation-fill-mode`
      + none - Giá trị mặc định
      + forwards - Phần tử sẽ giữ lại các giá trị kiểu được đặt bởi khung hình chính cuối cùng 
      + backwards - Phần tử sẽ nhận các giá trị kiểu được đặt bởi khung hình chính đầu tiên và giữ lại giá trị này trong khoảng thời gian trễ hoạt ảnh
      + both - Hoạt ảnh sẽ tuân theo các quy tắc cho cả tiến và lùi, mở rộng các thuộc tính hoạt ảnh theo cả hai hướng /*??*/
   + `animation` (Code 1 dòng chung )
      ```css
         div {
         animation: example 5s linear 2s infinite alternate;
      /*animation- |name|duration|timing-function|delay|iteration-count|direction */
         }  
      ```
   + `animation-play-state`
      ```css
      div {
         animation-play-state:paused|running|initial|inherit;
         /* chỉ định dựng bất kì lúc nào / chỉ định chạy lại khi dừng bất kì */
      }
      ```
## Position
   -  static: Các phần tử HTML được định vị tĩnh theo mặc định.
   - relative: Được định vị so với vị trí bình thường của nó.
       ![relative](anhcss/relative.png)
   - fixed: được định vị so với chế độ xem nằm mặc định trên chế độ xem bất kì vị trí nào
       ![fixed](anhcss/fixed.png)
   - absolute 
      
      + Được định vị tương đối với tổ tiên được định vị gần nhất
      + Nếu một phần tử được định vị tuyệt đối không có tổ tiên được định vị, nó sẽ sử dụng phần thân tài liệu và _di chuyển cùng với việc cuộn trang_.
   ![absolute](anhcss/absolute.png)
   - sticky: được định vị dựa trên vị trí cuộn của người dùng.
      ![sticky](anhcss/sticky.png)
   - z-index: xác định thứ tự chồng của một nguyên tố (trong đó yếu tố nên được đặt ở phía trước, hoặc phía sau, những người khác (-1 = sau).
## Media Queries
   - Cú pháp truy vấn
      ```css
      @media not|only mediatype and (mediafeature and|or|not mediafeature) {
      CSS-Code;
      }
      ```
   + only: chỉ sử dụng cái mình gọi (nếu dùng only thì dùng hết /*thuộc tinh mặc định*/)
   + not: áp dụng cho tất cả
   + mediatype: chế độ chọn
      - Có thể có các bảng định kiểu khác nhau cho các phương tiện khác nhau:
      ```css
         <link rel="stylesheet" media="mediatype and|not|only (expressions)" href="print.css">
      ```
      - Phương tiện
         + all: tất cả 
         + print: dùng cho máy in
         + screen: dùng cho màn hình máy tính, máy tính bảng, điện thoại thông minh, v.v.
         + speech: dùng cho trình đọc màn hình cỡ lớn
   + mediafeature
      + min-width
      + max-width
   - Ex:
      ```css
      <style>
      .wrapper {overflow: auto;}
      #main {margin-left: 4px;}
      #leftsidebar {
         float: none;
         width: auto;
         }
      #menulist {
         margin: 0;
         padding: 0;
      }
      .menuitem {
         background: #CDF0F6;
         border: 1px solid #d4d4d4;
         border-radius: 4px;
         list-style-type: none;
         margin: 4px;
         padding: 2px;
      }
      @media screen and (min-width: 480px) {
      #leftsidebar {width: 200px; float: left;}
      #main {margin-left: 216px;}
      }
      </style>
      ```
      ![@media](anhcss/@media.png)
## Responsive
   - Responsive Web Design (RWD)
      + Thiết kế web đáp ứng giúp trang web của bạn trông đẹp trên tất cả các thiết bị.
      + Thiết kế web đáp ứng chỉ sử dụng HTML và CSS.
      + Thiết kế web đáp ứng không phải là một chương trình hay một JavaScript.
   - Viewport
      - Thêm <meta>phần tử khung nhìn sau trong tất cả các trang web của mình:
      ```html
         <meta name="viewport" content="width=device-width, initial-scale=1.0">
      ```
         + Thẻ <meta> viewport thiết lập cho trang web hiển thị tương ứng với kích thước của từng thiết bị khác nhau.
         + `width=device-width` đặt chiều rộng của trang tuân theo chiều rộng màn hình của thiết bị (sẽ thay đổi tùy theo thiết bị).
         + `initial-scale=1.0` đặt mức thu phóng ban đầu khi trang được tải lần đầu tiên bởi trình duyệt.
      - Quy tắc
         + KHÔNG sử dụng các phần tử có chiều rộng cố định lớn 
         + KHÔNG để nội dung dựa vào chiều rộng khung nhìn cụ thể để hiển thị tốt 
         + Sử dụng các truy vấn phương tiện CSS để áp dụng các kiểu khác nhau cho các màn hình lớn và nhỏ 
      - Thiết kế web theo chế độ lưới giúp ít cho việc xem (Responsive Web Design - `Grid`-View)
      *Lưu ý: Luôn thiết kế cho thiết bị di động đầu tiên
   - Media Query
      - Ex:
         ```css
          /* Extra small devices (phones, 600px and down) */
         @media only screen and (max-width: 600px) {...}
         /* Extra large devices (large laptops and desktops, 1200px and up) */
         @media only screen and (min-width: 1200px) {...}
         ```
      - Orientation: Portrait / Landscape (Định hướng)
         ```css
         <head>
         <meta name="viewport" content="width=device-width, initial-scale=1.0">
         <style>
         body {
            background-color: lightgreen;
         }
         @media only screen and (orientation: landscape) { /* */
         body {
            background-color: lightblue;
            }
         }
         </style>
         </head>
         <body>
            <p>Resize the browser window. When the width of this document is larger than the height, the background color is "lightblue", otherwise it is "lightgreen".</p>
         /body>
         ```
         + portrait: Chế độ xem theo hướng dọc, tức là chiều cao lớn hơn hoặc bằng chiều rộng.
         + landscape: Chế độ xem theo hướng ngang, tức là chiều rộng lớn hơn chiều cao.
         
      - Hide Elements (Ẩn các phần tử trên các phương tiện khác nhau)
         ```css
         /* If the screen size is 600px wide or less, hide the element */
         @media only screen and (max-width: 600px) {
         div.example {
         display: none;
            }
         }
         ```
         ![hide](anhcss/hide.png)
      - Thay đổi font-size trong khoảng
         ```css
         /* If the screen size is 601px or more, set the font-size of <div> to 80px */
         @media only screen and (min-width: 601px) {
         div.example {
            font-size: 80px;
            }
         }
         /* If the screen size is 600px or less, set the font-size of <div> to 30px */
         @media only screen and (max-width: 600px) {
         div.example {
            font-size: 30px;
            }
         }
         ```
   - RWN - Images (or Videos)
      - Using The width Property ( sử dụng chiều rộng)
         ```css
         img {
            width: 100%;
            height: auto;
         }
         ```
      + Ảnh giản theo khung hình
      - Using max-width (chiều rộng tối đa)
         ```css
         img {
            max-width: 100%;
            height: auto;
         }
         /* Giảm thoải mái nhưng tăng thì đến độ rộng mặc định của ảnh */
         ```
   - RWD - Frameworks
      + Sử dụng CSS Framework miễn phí cung cấp Thiết kế đáp ứng
      ```html
      /* Sử dụng bộ w3.css*/
      <!DOCTYPE html>
      <html>
      <title>W3.CSS</title>
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
      <body>
      <div class="w3-container w3-green">
            <h1>W3Schools Demo</h1> 
            <p>Resize this responsive page!</p> 
      </div>
      <div class="w3-row-padding">
         <div class="w3-third">
            <h2>London</h2>
            <p>London is the capital city of England.</p>
            <p>It is the most populous city in the United Kingdom,
            with a metropolitan area of over 13 million inhabitants.</p>
         </div>
      </div>
      </body>
      </html>
      ```
      + Sử dung Bootstrap
   - RWN - Templates (Mẫu có sẵn) : Band Template, Architect Template, Food Blog Template...
## Float
   - Float (Thuộc tính CSS chỉ định cách một phần tử sẽ nổi.)
      ```css
         <!DOCTYPE html>
      <html>
      <head>
      <style>
         img {
            float: right; 
         }
      </style>
      </head>
      <body>
         <p><img src="pineapple.jpg" alt="Pineapple" style="width:170px;height:170px;margin-left:15px;">
         Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
      </body>
      </html>
      ```
      ![float](anhcss/floatright.png)
      + left - Phần tử nổi ở bên trái vùng chứa của nó
      + right - Phần tử nổi ở bên phải vùng chứa của nó
      + none- Phần tử không trôi nổi (sẽ được hiển thị ngay tại nơi nó xuất hiện trong văn bản). Đây là mặc định
      + inherit - Phần tử kế thừa giá trị float của phần tử cha của nó
   - Clear (Thuộc tính CSS chỉ định những phần tử nào có thể trôi nổi bên cạnh phần tử đã xóa và ở phía nào)
      + Quy định cụ thể sở hữu những yếu tố nào có thể nổi bên cạnh các yếu tố xóa và về phía nào.
      ```css
      <head>
      <style>
      .div1 {
         float: left;
         width: 100px;
         height: 50px;
         margin: 10px;
         border: 3px solid #73AD21;
      }
      .div2 {
         border: 1px solid red;
      }
      .div3 {
         float: left;
         width: 100px;
         height: 50px;
         margin: 10px;
         border: 3px solid #73AD21;
      }
      .div4 {
         border: 1px solid red;
         clear: left; /* Cách phổ biến nhất để sử dụng clear là sau khi đã sử dụng thuộc float.*/
      }
      </style>
      </head>
      <body>
         <h2>Without clear</h2>
         <div class="div1">div1</div>
         <div class="div2">div2 - Lưu ý rằng div2 đứng sau div1 trong mã HTML. Tuy nhiên, vì div1 trôi về bên trái nên văn bản trong div2 sẽ chảy xung quanh div1.
         </div>
         <br><br>
         <h2>With clear</h2>
         <div class="div3">div3</div>
         <div class="div4">div4 - Ở đây, clear: left; di chuyển div4 xuống bên dưới div3 nổi. Giá trị "left" xóa các phần tử được chuyển sang bên trái. Bạn cũng có thể xóa "right" and "both"</div>
      </body>
      ```
      ![clearleft](anhcss/clear.png)
      + none - Cho phép các phần tử nổi trên cả hai mặt. Đây là mặc định
      + left - Không cho phép phần tử nổi ở phía bên trái
      + phải- Không cho phép các phần tử nổi ở phía bên phải
      + both - Không cho phép phần tử nổi ở bên trái hoặc bên phải
      + inherit - Phần tử kế thừa giá trị rõ ràng của phần tử gốc của nó
   - Clearfix Hack
      ```css
      <head>
      <style>
      div {
         border: 3px solid #4CAF50;
         padding: 5px;
      }
      .clearfix {
         overflow: auto; /*chống tràn*/
      }
      .img2 {
         float: right;
      }
      </style>
      </head>
      <body>
      <div class="clearfix">
         <img class="img2" src="pineapple.jpg" alt="Pineapple" width="170" height="170">
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum...
      </div>
      </body>       
      ```
      ![clearfix](anhcss/clearfix.png)
   - Lưới hộp và hộp (có chiều rộng bằng nhau)
      ```css
      .box {
         float: left;
         width: 33.33%;
         padding: 50px;
      }
      ```
      ![width==](anhcss/boxwidth.png)
   - Height Boxes (Đặt chiều cao cố định)
      ```css
      .box {
         float: left;
         width: 50%;
         padding: 50px;
         height: 300px; /*đặt nó mặc đinh*/
      }
      ```
      ![height==](anhcss/boxheight.png)
      + Đặt cố định không đảm bảo khi nội dung thêm nhiều
      + khắc phục
      ```css
      .flex-container {
         display: flex;
         flex-wrap: nowrap; /* Sử dụng  Flexbox */
         background-color: DodgerBlue;
      }
      ```
      ![flex-box==](anhcss/flex_box.png)
   - `box-sizing` Xác định cách tính chiều rộng và chiều cao của một phần tử
      ```css 
         box-sizing: content-box|border-box;
      ```
      + content-box: Thuộc tính chiều rộng && cao chỉ bao gồm nội dung. Đường viền và phần đệm _không được bao gồm_
      + border-box: Thuộc tính chiều rộng && cao bao gồm nội dung, _phần đệm và đường viền_
      + Khác biệt
      ![box-sizing==](anhcss/sizing.png)
   * Note: Chức năng điều hướng. Sử dụng float với danh sách các siêu liên kết để tạo menu ngang
   ![NavigationFloat](anhcss/NavigationFloat.png)
## PX-EM conventer   
   - PX to EM Converter
   + Đặt kích thước phông chữ mặc định (thường là 16px)
   + Chuyển đổi giá trị pixel thành em, dựa trên kích thước mặc định or chuyển đổi giá trị em thành pixel, dựa trên kích thước mặc định
   ```css
      px	em	percent
      5px	0.3125em	31.25%
      .     .        .
      15px	0.9375em	93.75%
      16px	1.0000em	100.00%
      17px	1.0625em	106.25%
      .     .        .
      25px	1.5625em	156.25%
   ```
   + Sự khác biệt giữa PX, EM và Phần trăm là gì?
      + Pixel là phép đo tĩnh, trong khi phần trăm và EM là phép đo tương đối. 
      + Phần trăm phụ thuộc vào kích thước phông chữ mẹ của nó. 
      + EM là liên quan đến kích thước phông chữ hiện tại của phần tử 
         +EX: (2em có nghĩa là 2 lần kích thước của phông chữ hiện tại). Kích thước phông chữ của body là 16 pixel, thì 150% sẽ là 24 pixel (1,5 * 16) 
         ```css
            <head>
            <style>
            h1 {
               font-size: 1em;
               color: red;
            }
            p {
               font-size: 16px;
               line-height: 50px;
               color: red;
            }
            </style>
            </head>
            <body>
            <h1>This is heading 1</h1>
            <h2>This is heading 2</h2>
            <p>This is a paragraph.</p>
         </body>
         ```
         ![PX_EM](anhcss/px_em.png)
## Transions