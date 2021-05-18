# CSS BASIC

## 1. Giới thiệu ngắn gọn:

- CSS là ngôn ngữ Chúng ta dùng để style cho 1 trang web
- Được dùng để xác định kiểu cho các trang web, bao gồm thiết kế, bố cục hiển thị trên các thiết bị và kích thước màn hình khác nhau.

## 2. Cách thêm CSS:

- Có 3 cách:
  - thêm từ 1 files .css bên ngoài
    - Bằng cách `<link rel="stylesheet" href="namefile.css">` trong cặp thẻ `<head></head>`
  - Css style từ bên trong file .html thông qua cặp thẻ `<style></style>` trong cặp thẻ `<head></head>`
  - inline style. Css thông qua thuộc tính **chung** **style** của ELMS

## 3. Sử dụng:

### 3.1 SELECTOR CƠ BẢN:

1. Id

   <img src="./imgs/1.png" >

Ta có thể style cho elm có id là `para1`

2. class

   <img src="./imgs/2.png" >

Tà có thể style cho elms có class là `center`

3. `*` SELECTOR:

   ```html
   * { key: value }
   ```

   Tất cả các thẻ đều được style

4. SECLECTOR theo name "TAG":

   ví dụ:

   ```html
   h1 { text-align: center; color: red;} h2 {text-align: center; color: red;}
   etc...
   ```

### 3.2 Một số SELECTOR nâng cao:

**Cú Pháp**

- `.class1.class2` : chọn tất cả những elms có `class="class1"` và `class="class2"`

- `.class1 .class2` : Chọn tất cả những elms có `class="class2"` là con của những elms `class="class1"`.

- `element.class1` : Chọn tất cả những elements có `class="class1"`.
- `element, element` : Ví dụ `div, p` Chọn tất cả những thẻ `div` và `p`.
- `element > element` : Ví dụ `div > p` Chọn tất cả thẻ `p` là con trực tiếp của thẻ `div`.
- `element + element` : Ví dụ `div + p ` Chọn 1 phần tử đầu tiên là thẻ `p` liền kề sau thẻ `div`.
- `element ~ element` : Ví dụ `p ~ ul ` Chọn mọi phần tử `ul` sau thẻ `p` cùng cấp.
- `[attribute]` : Ví dụ `[target] or [type] ...` Chọn mọi phần tử có attribute như là `target` or `[type]`
- `[attribute="value"]`: ví dụ `[type="text"]` Chọn mọi elms có attribute là `type="text"`
- `[attribute~="value"]` : Ví dụ `[title ~= "abcd"]` Chọn mọi elms có attri `title` chứa từ `abcd`
- `[attribute |= "en"]` : Ví dụ `[title |= "abc"]` Chọn mọi elms có attri `title` chứa value bắt đầu bằng từ `abc` và theo sau là dấu `-`.
- `[attribute^=value]` : Ví dụ `a[href^= "https"]` Chọn mọi thẻ `a` có attri `href` chứa value bắt đầu `https` gần giống `|=`
- `[attribute$=value]` : Ví dụ `a[href$=".pdf"]` Chọn mọi thẻ `a` có attr `href` chứa value cuối là `".pdf"`
- `[attribute *= value ]` : Ví dụ `a[href *= "w3school"]` chọn mọi thẻ a có attr `href` chứa value `"w3school"`.

`Ngoài những Selector này ra còn có nhiều selector khác mà ta có thể tham khảo thêm:` https://www.w3schools.com/cssref/css_selectors.asp

### 3.3 CSS UNITS:

1. Đơn vị `Tuyệt Đối`:
   - Gồm có px, cm , mm ... px là đơn vị được dùng nhiều nhất
2. Đơn vị `Tương Đối`:
   - Những đơn vị được dùng phổ biến nhất là: %, rem, em, vw, vh
     - unit `%`: phụ thuộc vô thằng chứa: ví dụ thằng `<div>` parent có width = 500px `<div>` child có width = 50% thì `<div>` child có width là 250px
     - unit `rem`: phụ thuộc vô thằng html định nghĩa ra
     - unit `em` : phụ thuộc vô unit gần nhất chứa nó (inherit)
     - unit `vw` : view witdh độ rộng màn hình
     - unit `vh` : view height độ cao màn hình

ex: https://www.w3schools.com/cssref/tryit.asp?filename=trycss_units

### 3.4 CSS Text:

`Css có nhiều thuộc tính định dạng văn bản.`

#### 3.4.1 Text Alignment:

- `text-align` : Có 3 giá trị `center` , `left` or `right` or `justify` ( thuộc tính này đặc biệt là nó sẽ điều chỉnh chiều rộng mỗi dòng đều bằng nhau.)
- `direction` : rtl or ltr là hướng chữ xuất phát từ trái hoặc phải.
- `vertical-align` : `top`, `middle` or `bottom` ví dụ: https://www.w3schools.com/css/tryit.asp?filename=trycss_vertical-align

- `text-decoration` : `none`, `overline`, `line-through`, or `underline` ví dụ: https://www.w3schools.com/css/tryit.asp?filename=trycss_text-decoration

- `text-transform` : `uppercase`, `lowercase` or `capitalize` Ví dụ: https://www.w3schools.com/css/tryit.asp?filename=trycss_text-transform

- `text-indent`: Dùng để thụt lề dòng đầu tiên trong 1 đoạn văn bản. Ví dụ: https://www.w3schools.com/css/tryit.asp?filename=trycss_text-indent

- `letter-spacing`: Chỉ định khoảng cách giữa các `chữ cái`.

- `Line Height` : khoảng cách giữa các dòng. ví dụ: https://www.w3schools.com/css/tryit.asp?filename=trycss_line-height

- `word-spacing`: Khoảng cách giữa các `từ`

- `white-space`: default `normal`, `pre` có thể custom `nowrap` ví dụ: https://www.w3schools.com/cssref/playit.asp?filename=playcss_white-space&preval=pre-wrap

- `text-overflow`: thường dùng kết hợp với thuộc tính `overflow`: hidden và `white-space`: nowrap để thấy hiệu quả.

  - `clip` văn bản bị cắt ngang.

  - `ellipsis` nếu nội dung dài hơn khung chứa thì sẽ render ra (...) để đại diện thay cho những phần văn bản bị cắt

- `text-shadow` : thuộc tính dùng để `thêm bóng` cho 1 đoạn text. Ví dụ: https://www.w3schools.com/css/tryit.asp?filename=trycss3_text-shadow3

### 3.6 CSS Box Model:

- **Box model** được dùng khi thiết kế bố cục 1 trang web.
- Bao bọc xung quanh mọi phần tử HTML. Bảo gồm: margin, borders, padding, và content.

<img src="./imgs/3.png" style="width: 500px">

1. `Content` : Nội dung của box có thể là chữ or hình ảnh
2. `Padding` : Phần đệm, không có màu ( Nếu mà set background-color thì padding cũng có màu )
3. `Border` : Đường viền xung quanh padding.
4. `Margin` : Lề bên ngoài border, khoảng cách giữa 2 box cùng 1 mặt phẳng.

#### 3.6.1 Margin:

`Được dùng để tạo khoảng cách xung quanh của một thành phần,`

- `margin-top`
- `margin-right`
- `margin-bottom`
- `margin-left`

Những thuộc tính được liệt kê phía trên chỉ định lề của 4 phía: top, right, bot, left.

**Shorthand Property**:

- margin: 10px 20px 30px 40px;

  - margin-top: 10px
  - margin-right: 20px
  - margin-bottom: 30px
  - margin-left: 40px

- margin: 25px 50px 75px;
  - margin-top: 25px
  - margin-right và left: 50px
  - margin-bottom: 75px
- margin: 25px 50px
  - margin-top và bottom: 25px
  - margin-right và left: 50px
- margin: 25px
  - top left right bottom đều là 25px

**Margin collapse**:

Ví dụ:

```html
<div>
  <h1 style=" margin-bottom: 50px">Heading 1</h1>
  <h2 style=" margin-top: 20px">Heading 2</h2>
</div>
```

Dễ nhầm lẫn là khoảng cách giữa `h1` và `h2` là 70px nhưng thực ra là 50px. ( Thẻ `thẻ heading` có tính chất mặc định `display: block`)
Nếu ta set css 1 trong 2 thẻ heading `display: inline-block` thì khoảng cách giữa `h1` và `h2` là 70px

#### 3.6.2 Padding:

Gần giống `margin`

#### 3.6.3 Border:

**Thuộc Tính border cho phép style width, màu và nét đường viền của 1 thành phần**

- `border-style`: Chỉ định kiểu đường viền như 1 số value thường dùng như dotted, dashed, solid, double, v.v...
- `border-width`: Chỉ định độ dày của đường viền. giá trị của nó có thể là 1 giá trị áp dụng cho 4 hướng or 2 giá trị áp dụng cho 2 hướng và 3 giá trị áp dụng cho 3 hướng giống padding và margin
- `border-color`: Chỉ định màu của border và giá trị của nó thể là HEX value or rgb or rgba
- Ta có thể style riêng lẻ cho từng phía.
  - `border-top-style`
  - `border-right-style`
  - `border-bottom-style`
  - `border-left-style`

**Short Hand**

`border-width: 10px`, `border-style: solid` và `border-color: red` được viết ngắn gọn: `border: 10px solid red`

ví dụ: <img src="./imgs/10.png">

**Border-radius**

`Được sử dụng để bo góc các đường viền`

#### 3.6.4 OutLine

`Là một đường được vẽ bên ngoài đường viền của phần tử. `

- Nó có cú pháp short hand giống border. Nó không có chỉ định hướng riêng lẻ
- Nó có một thuộc tính khác `outline-offset` là khoảng trống giữa outline và border

#### 3.6.5 CSS Width/Height:

1. set width và height để xác định chiều rộng và chiều cao của 1 elm

### 3.7 CSS Fonts:

1. font family:
   - Css dùng thuộc tính `font-family` chỉ định phông chữ văn bản.
   - Ta nên dụng nhiều font dự phòng để nhỡ máy người khác không có font đo thì còn có font dự phòng.
2. Font web an toàn:

- font web là font được cài đặt phổ biến trên tất cả các trình duyệt và thiết bị.
- Một số web font an toàn cho HTML và CSS: - Arial (sans-serif) - Verdana (sans-serif) - Helvetica (sans-serif) - v.v...

`Trước khi code ra web, ta nên kiểm tra thử coi font xuất hiện như thế trên mọi trình duyệt và thiết bị và ta dùng thêm font dự phòng. `

3. font-style:
   - `font-style`: italic or là oblique (oblique ít được hỗ trợ) tác dụng in nghiêng chữ
   - `font-weight`: bold (Bối đậm chữ)
4. font-size:
   - `font-size: 30px` : set kích thước font chữ
5. shothand:
   - font-style
   - font-weight
   - font-size/line-height
   - font-family

Có thể được viết tắt là:
`font: italic bold 12px/24px Georgia, sans serif;`
tức là:

- `font-style`: italic;
- `font-weight`: bold;
- `font-size`: 12px/`line-height`: 24px
- `font-family` là Georgia và font dự phòng là sans serif.

### 3.6 CSS Icons:

- Để thêm icon vào trong trang HTML, là thư viện icons như `Font Awesome`

### 3.8 Link:

- `Link` có thể được style những kiểu khác nhau phụ thuộc vào `trạng thái` của nó
  - `a:link` : là trạng thái bình thường khi link chưa được truy cập.
  - `a:visited` : là trạng thái khi link đã được truy cập.
  - `a:hover` : là trạng thái khi người dùng đưa chuột vào link.
  - `a:active` : là trạng thái link người dùng click nhưng chưa thả chuột ra.
- `cursor` : một số thuộc tính `cursor` https://www.w3schools.com/css/tryit.asp?filename=trycss_cursor

### 3.9 CSS Lists:

- **Unordered List** : Được đánh dấu bằng dấu bằng dấu đầu dòng.

<img src="./imgs/5.png">

- **Ordered Lists** : Danh sách các item được đánh dấu với số hoặc chữ cái.

<img src="./imgs/6.png">

`CSS list properties: `

- cho phép list item đặt một hình ảnh làm điểm đánh dấu đầu dòng.

`ex:` <img src="./imgs/4.png" >

- `Position The List Item Markers`:

  - `Outside`: <img src="./imgs/7.png">

  - `Inside`: <img src="./imgs/8.png">

### 3.10 CSS Table:

#### 3.10.1 Table Border:

**border-collapse** là thuộc tính để set table có một border duy nhất

ví dụ: <img src="./imgs/9.png">

### 3.11 CSS background:

- `Css background` là thuộc tính được dùng để thêm hiệu ứng backgrounds cho elms

  - `background-color` value của nó là **color name**, **HEX** và **RGB**
  - `background-image` là thuộc tính chỉ định 1 hình ảnh được dùng làm nền cho 1 thành phần.
    `ex:` <img src="./imgs/14.png">

  - `background-repeat` -`repeat-x`

    - `repeat-y`
    - `no-repeat`;

  - `background-position`: value của nó là `top`, `right`, `bottom`, `left` và `center`.
  - `background-attachment`: hình nền được `fixed` hay `scroll` với phần còn lại của trang
    - `fixed`
    - `croll`;
  - `background-size`:

    - `giá trị tuyệt đối` (giá trị lần lượt là width và height)
    - `cover`
    - `contain`

  - `background-origin`:
  - `content-box` toàn bộ hình ảnh đều nằm trong content.

    <img src="./imgs/15.png">

  - `border-box`

    <img src="./imgs/16.png">

  - `padding-box`

    <img src="./imgs/17.png">

### 3.12 CSS Position:

- `Position` là thuộc tính chỉ định vị trí cho 1 element
- Có 5 giá trị để định vị cho thuộc tính `position`: - `static` - `relative` - `fixed` - `absolute` - `sticky`.
  Khi xét thuộc tính `position` với 1 trong 4 giá trị `relative` or `fixed` or `absolute` or `sticky`. Ta có thể dùng các thuộc tính như `top` khoảng cách so với top , `bottom` cách bot, `right` cách phải hoặc `left` cách trái để chỉ định vị trí cho elm đó.

1.  `position: static` :

    - Đây là giá trị mặc định của 1 elm.
    - Static position này không thể dùng `top`, `bottom`, `right` or `left` để xét vị trị cho elm đó.
    - Đây là giá trị hiển thị vị trí bình thường của elm đó hay được định vị theo dòng bình thường của trang

2.  `position: relative` :

    - Khi dùng thuộc tính này sẽ khiến elm đó bị điều chỉnh khỏi vị trí bình thường. Nhưng những elm cùng cấp ở phía sau sẽ không được điều chỉnh để phù hợp với khoảng trống mà do elm có `position: relative` để lại.

`ex:`

<img src="./imgs/18.png">

3. `position: absolute` :

   - 1 Element có thuộc tính `position: absolute`. Được chỉ định vị trí tương đối với vị trí của phần tử cha.
   - Nếu 1 elm được sử dụng với `position: absolute` mà không có elm cha để làm gốc định vị. Thì nó sẽ phụ thuộc vào element `body`.

   **Lưu ý:** elm cha để làm gốc định vị là có thể là `relative`, `fixed`, `sticky`

   ví dụ: làm ví dụ trực tiếp trong này.

   https://www.w3schools.com/css/tryit.asp?filename=trycss_position_absolute

4. `position: sticky` :

   - 1 element với thuộc tính `position: sticky` được định vị dựa trên vị trí hành vi cuộn của. `Cuộn trái`, `Cuộn phải` or `Cuộn xuống`. Khi cuộn ngã nào thì elm có thuộc tính `position: sticky` nó sẽ được `fixed` ngược về phía hướng cuộn lại.

   `ex:` Tự code

   https://www.w3schools.com/css/tryit.asp?filename=trycss_position_sticky

### 3.13 CSS Overflow:

- Là thuộc tính chỉ định có `ẩn nội dung` hay thêm `scroll bar` Khi nội dung của 1 element quá **lớn** để vừa với khu vực được chỉ định.
- `Overflow` Có 4 giá trị:

  - `visible`: default value, nếu nội dung vượt quá kích thước của 1 khối thì nó lấn ra bên ngoài

    <img src="./imgs/19.png">

  - `hidden `: Phần content bị tràn ra được ẩn đi

     <img src="./imgs/20.png">

  - `scroll`: Nếu content lớn hơn chiều rộng hoặc chiều dài của khối thì sẽ xuất hiện thanh `scroll bar`

     <img src="./imgs/21.png">

### 3.14 CSS Pseudo:

1.  **Pseudo - Element:**

**Một số lớp giả thông dụng**:

- `::first-letter` Chỉ định chữ cái đầu tiên.
  `ex:`

  <img src="./imgs/22.png">

- `::first-line` Chỉ định dòng đầu tiên

  `ex:`

  <img src="./imgs/23.png">

- `::marker` chọn các element được đánh dấu của các mục trong 1 danh sách.

  `ex:`

  <img src="./imgs/25.png">

- `::selection` là phần được người dùng bôi lên text

  `ex:`

   <img src="./imgs/26.png">

- `:nth-child(n)` chọn phần tử thứ `n` của element nào đó . Tham số trong `:nth-child(param)` param có thể là `số` or even (phần tử con chẵn) or odd ( phần tử lẻ)

  `ex:`
  <img src="./imgs/27.png">

- `:nth-last-child(n)` phần tử con thứ hai của phần tử thứ `n` cha của nó, tính từ phần tử cuối cùng:

  `ex:`

  <img src="./imgs/28.png">

2. **Pseudo ::before và ::after:**

- `::before` và `::after` được dùng để chèn nội dung trước và sau nội dung của một thành phần.

- Ngoài ra cũng có thể chèn hình ảnh cho nó.
- Để sử dụng `::before` và `::after` thì thuộc tính bắt buộc là phải có `content`

  `ex:`

  <img src= "./imgs/24.png">

**Ngoài ra có thể tìm hiểu thêm:** https://www.w3schools.com/css/css_pseudo_elements.asp

### 3.15 CSS Display cơ bản:

`Display` là thuộc tính quan trọng trong việc control layout

- Một số giá trị của `display`:

  - `block`
  - `inline`
  - `none`
  - `inline-block`

- Mỗi elms HTML có giá trị `display` mặc định. Hầu hết mọi elms có default value là `block` or `inline`
- Mỗi phần tử có thuộc tính `display: block` luôn bắt đầu 1 dòng mới và chiếm hết độ dài của 1 dòng. 1 số thẻ có thuộc tính block như: div, h1...h6, form, header, section, v.v...
- Mỗi phần tử có thuộc tính `display: inline` 1 thành phần inline không bắt đầu 1 dòng mới và chỉ chiếm độ dài bằng nội dung nó chứa. Nó không phải thành phần khối nên không thể xét `margin` và `padding` cho: `top` và `bottom`
- Mỗi phần tử có thuộc tính `display: inline-block` 1 thành phần inline block không bắt đầu 1 dòng mới và chỉ có độ dài bằng với nội dung nó chứa

`ex:`

<img src="./imgs/11.png">

`ex:`

<img src="./imgs/12.png">

`ex:`

<img src="./imgs/13.png">

### 3.16 CSS Advanced:

- CSS Gradient cho phép ta hiển thị dài màu chuyển tiếp 1 cách smooth.

  #### 3.16.1 Linear Gradients:

  - Để tạo dải Linear Gradients tuyến tính, ta phải xác định 2 điểm màu cụ thể. Đặt hướng với hiệu ứng gradient

  ex:

  <img src="./imgs/29.png">

  Ví dụ: này mặc định hướng là từ `top` đến `bottom`

  - Để xét hướng chuyển màu có 2 cách.

    - cách 1:

      ex:

      <img src="./imgs/30.png">

    - cách 2:

      ex:

      <img src="./imgs/31.png">

  Ta cũng có thể thêm nhiều màu vào hàm `linear-gradient(red, yellow, green, newParam...)`

  #### 3.16.2 Radial Gradients:

  - Radial gradient được xác định bởi tâm.

  - Tạo radial gradient tương tự linear gradients.

  - Mặc định dải màu trong radial gradient là `ellipse`. Ta có thể xét thành `circle`

  #### 3.16.3 Box Shadow:

  - Tương tự như text-shadow

  ví dụ:

  <img src="./imgs/32.png">

#### 3.16.4 Box-sizing:

- Thuộc tính `box-sizing` cho phép ta xét phần tử khối bao gồm phần `padding` và `border` trong tổng chiều rộng và chiều cao của phần tử.

Ví dụ:

  <img src="./imgs/33.png" style="border: 1px solid black">
