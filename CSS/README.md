# CSS BASIC

## Giới thiệu ngắn gọn:

- CSS là ngôn ngữ Chúng ta dùng để style cho 1 trang web
- Được dùng để xác định kiểu cho các trang web, bao gồm thiết kế, bố cục hiển thị trên các thiết bị và kích thước màn hình khác nhau.

## Cách thêm CSS:

- Có 3 cách:
  - thêm từ 1 files .css bên ngoài
    - Bằng cách `<link rel="stylesheet" href="namefile.css">` trong cặp thẻ `<head></head>`
  - Css style từ bên trong file .html thông qua cặp thẻ `<style></style>` trong cặp thẻ `<head></head>`
  - inline style. Css thông qua thuộc tính **chung** **style** của ELMS

## Sử dụng:

### SELECTOR CƠ BẢN:

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

### Một số SELECTOR nâng cao:

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

### CSS UNITS:

1. Đơn vị `Tuyệt Đối`:
   - Gồm có px, cm , mm ... px là đơn vị được dùng nhiều nhất
2. Đơn vị `Tương Đối`:
   - Những đơn vị được dùng phổ biến nhất là: %, rem, em, vw, vh
     - unit `%`: phụ thuộc vô thằng chứa: ví dụ thằng `<div>` parent có width = 500px `<div>` child có width = 50% thì `<div>` child có width là 250px
     - unit `rem`: phụ thuộc vô thằng html định nghĩa ra
     - unit `em` : phụ thuộc vô unit gần nhất chứa nó (inherit)
     - unit `vw` : view witdh độ rộng màn hình
     - unit `vh` : view height độ cao màn hình

### CSS Box Model:

- **Box model** được dùng khi thiết kế bố cục 1 trang web.
- Bao bọc xung quanh mọi phần tử HTML. Bảo gồm: margin, borders, padding, và content.

<img src="./imgs/3.png" style="width: 500px">

1. `Content` : Nội dung của box có thể là chữ or hình ảnh
2. `Padding` : Phần đệm, không có màu ( Nếu mà set background-color thì padding cũng có màu )
3. `Border` : Đường viền xung quanh padding.
4. `Margin` : Lề bên ngoài border, khoảng cách giữa 2 box cùng 1 mặt phẳng.

#### Margin:

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

#### Padding:

Gần giống `margin`

#### Border:

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

`border-width: 2px`, `border-style: solid` và `border-color: red` được viết ngắn gọn: `border: 2px solid red`

**Border-radius**

`Được sử dụng để bo góc các đường viền`

#### OutLine

`Là một đường được vẽ bên ngoài đường viền của phần tử. `

- Nó có cú pháp short hand giống border. Nó không có chỉ định hướng riêng lẻ
- Nó có một thuộc tính khác `outline-offset` là khoảng trống giữa outline và border

#### CSS Width/Height:

1. set width và height để xác định chiều rộng và chiều cao của 1 elm
2. set max-width:
   - Khi một elm có max-width = 1 giá trị nhất định. Và khi ta co cửa sổ trình duyệt nhỏ hơn giá trị max-width của elm đó thì eml đó chiếm 100% chiều rộng của độ dài dòng ( Chiều dài tối đa của 1 elm)

#### CSS Fonts:

1. font family:
   - Css dùng thuộc tính `font-family` chỉ định phông chữ văn bản.
   - Ta nên dụng nhiều font dự phòng để nhỡ máy người khác không có font đo thì còn có font dự phòng.
2. Font web an toàn: - font web là font được cài đặt phổ biến trên tất cả các trình duyệt và thiết bị. - Một số web font an toàn cho HTML và CSS: - Arial (sans-serif) - Verdana (sans-serif) - Helvetica (sans-serif) - v.v...
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

Có thể được viết tắt là: `font: italic bold 12px/24px Georgia, serif;` tức là `font-style`: italic; `font-weight`: bold; font-size: 12px ; `line-height`: 24px và `font-family` là Georgia, serif
