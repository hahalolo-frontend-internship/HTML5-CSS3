# CSS
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
   - `background (shorthand property)` (thuộc tính tốc ký "gộp code 1 dòng")
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
      -ms-flex: 1; /* IE 10 */ 
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

