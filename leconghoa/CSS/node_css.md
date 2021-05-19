# CSS3

> CSS là chữ viết tắt của Cascading Style Sheets, nó là một ngôn ngữ được sử dụng để tìm và định dạng lại các phần tử được tạo ra bởi các ngôn ngữ đánh dấu (HTML).

> CSS3 là phiên bản thứ 3 và cũng là mới nhất của CSS. CSS3 được thừa hưởng và có bổ sung thêm nhiều tính năng mới tiện lợi hơn so với CSS.

## 1. Quá trình tải CSS

---

<img src="./render.png" width ="600">

## 2. Cách nhúng CSS:

---

Có 3 cách nhúng CSS vào website:

- `Inline CSS` – Nhúng trực tiếp vào tài liệu HTML thông qua cặp thẻ `<style> </style>`.
- `Internal CSS` – dùng thẻ `<style>` bên trong thẻ `<head>` của `HTML` để tạo ra nơi viết mã CSS.
- `External CSS` – Tạo một tập tin .css riêng và nhúng vào tài liệu HTML thông qua cặp thẻ `<link>`.

<img src="./nhungcss.jpg" width ="600">

## 3. Cấu trúc và bố cục của 1 bộ CSS:

---

<img src="./rulecss.png" width ="600">

<img src="./boxmodel.png" width ="600">

Bố cục CSS thường chủ yếu dựa vào hình hộp và mỗi hộp đều chiếm những khoảng trống trên trang với các thuộc tính như:

- `Padding`: Gồm không gian xung quanh nội dung (ví dụ: xung quanh đoạn văn bản).
- `Border`: Là đường liền nằm ngay bên ngoài phần đệm.
- `Margin`: Là khoảng cách xung quanh bên ngoài của phần tử.

## 4. Giải quyết khai báo CSS xung đột (xếp tầng):

---

<img src="./layout.png" width ="600">

Các `declarations` có thể đến từ nhiều nguồn khác nhau nên browser sẽ chọn bộ CSS theo quy tắc:

> `Important > Specificity > Source Order`

Cụ thể:

### 4.1. `Important`:

- Định nghĩa CSS mà có `!important` sẽ được ưu tiên nhất. Tuy nhiên việc làm dụng `!important` sẽ gây khó khăn cho việc bảo trì.
- Khi các rule có cùng mức độ quan trọng (importance), browser sẽ đi so sánh mức độ chi tiết (specificities).

### 4.2. `Specificity`:

- Khi có nhiều quy tắc cùng áp dụng cho 1 element, browser sẽ tính toán 4 giá trị sau và đem ra so sánh, sau đó chọn rule nào có giá trị cao nhất để đem ra hiển thị. Thứ tự:
  1. Inline styles
  2. IDs.
  3. Classes, pseudo-classes, attributes
  4. Elements, pseudo-elements

### 4.3. `Source order`

- Khi các css declaration có cùng specificity, declarations cuối cùng trong code sẽ được chọn.

- Nếu muốn dùng css của bên thứ 3, bạn nên đặt author stylesheet phía dưới cùng.

## 5. Bộ chọn SELECTOR

### 5.1. Bộ chọn cơ bản:

- Chọn các phần tử dựa trên `tag name`, `id`, `class`

### 5.2. Descendant CSS Selector:

- Đây là các CSS Selector để chọn hậu duệ của bất kỳ phần tử nào.
- `Any descendant selector: A B.` Chọn bất kỳ phần tử B nào là hậu duệ của A. Hậu duệ có thể được lồng rất sâu. Kết hợp với `*` để chọn tất cả các phần tử hậu duệ
- `Child Selector: A > B`. CSS Selector này chỉ chọn hậu duệ trực tiếp.

```html
<div class="container">
  <div class="paragraph-container">
    <p id="hola-id" class="hola-class">Hola World</p>
    <p class="hello-class">Hello World</p>
    <p class="hello-class again-class">Hello Again World</p>
  </div>
</div>
<style>
  .container .hello-class {
    color: red;
  }
  .paragraph-container * {
    color: blue;
  }
</style>
```

<div class="container">
  <div class="paragraph-container">
    <p id="hola-id" class="hola-class">Hola World</p>
    <p class="hello-class">Hello World</p>
    <p class="hello-class again-class">Hello Again World</p>
  </div>
</div>
<style>
  .container .hello-class {
    color: red;
  }
  .paragraph-container * {
    color: blue;
  }
</style>
