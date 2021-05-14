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

### CSS Box Model:

 - **Box model** được dùng khi thiết kế bố cục 1 trang web.
 - Bao bọc xung quanh mọi phần tử HTML. Bảo gồm: margin, borders, padding, và content.

<img src="./imgs/3.png" style="width: 500px">

`Content` : Nội dung của box có thể là chữ or hình ảnh
`Padding` : Phần đệm, không có màu ( Nếu mà set background-color thì padding cũng có màu )
`Border` : Đường viền xung quanh padding.
`Margin` : Lề bên ngoài border, khoảng cách giữa 2 box cùng 1 mặt phẳng.

