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

```html
<div class="container">
  <div class="paragraph-container">
    <p id="hola-id" class="hola-class">Hola World</p>
    <p class="hello-class">Hello World</p>
    <p class="hello-class again-class">Hello Again World</p>
  </div>
</div>
```

### 5.1. Bộ chọn cơ bản:

- Chọn các phần tử dựa trên `tag name`, `id`, `class`

### 5.2. Descendant CSS Selector:

- Đây là các CSS Selector để chọn hậu duệ của bất kỳ phần tử nào.
- `Any descendant selector: A B.` Chọn bất kỳ phần tử B nào là hậu duệ của A. Hậu duệ có thể được lồng rất sâu. Kết hợp với `*` để chọn tất cả các phần tử hậu duệ
- `Child Selector: A > B`. CSS Selector này chỉ chọn hậu duệ trực tiếp.

```css
.container .hello-class {
  color: red;
}
/* anh 1 */
.paragraph-container * {
  color: blue;
}
/* anh 2 */
.paragraph-container > .hello-class {
  color: hotpink;
}
```

<img src="./descendant.png" width="auto" align="left">&nbsp;<img src="./childselector.png" width="auto">

### 5.3. Multiple CSS Selector:

- Multiple CSS Selector cho phép chúng ta chọn nhiều phần tử không liên quan với nhau.

```css
.outside-class,
.again-class,
.hola-class {
  color: purple;
}
```

<img src="./multiple.png" width="auto">

### 5.4. Combination CSS Selector:

- Combination CSS Selector cho phép bạn chọn thành phần rất cụ thể bằng nhiều tham chiếu.
- `Combination CSS Selector: AB`. Cho phép chọn phần tử chứa cả A và B. Chúng sát nhau.

```css
p#hola-id {
  color: blue;
}
.hello-class.active {
  color: red;
}
```

<img src="./combination.png" width="auto">

### 5.5. Sibling CSS Selector:

- Sibling CSS Selector nhắm chọn các phần tử anh chị em.
- `Bộ chọn Anh / Chị / Em liền kề (Nghiêm ngặt): A + B`. Nhắm mục tiêu một phần tử anh chị em được đặt ngay sau phần tử đó. Nếu cách 2 phần tử sẽ không hoạt động.
- `Bộ chọn Anh / Chị / Em liền kề (Không nghiêm ngặt): A ~ B`. Giống như bộ chọn bên trên nhưng không giới hạn 1 phần tử đầu tiên.

```css
#hola-id + .again-class {
  color: blue;
}
#hola-id ~ .hello-class {
  color: red;
}
```

<img src="./sibling.png" width="auto">

### 5.6. Pesudo CSS Selector:

a. `Pesudo Element`:

- Syntax: `selector::pseudo-element { property: value; }`
- `:first-line`: Áp dụng cho element con đầu tiên trong element cha
- `:first-letter`: Áp dụng cho chữ cái đầu tiên trong element
- `::before`: Dùng để chèn một số nội dung vào trước nội dung của một element
- `::after`: Dùng để chèn một số nội dung vào sau nội dung của một element
- `::mark`: Sử dụng cho các điểm đánh dấu của các mục danh sách
- `::selection`: Áp dụng kiểu cho các phần tử được người dùng đánh dấu (nhấp chuột hoặc kéo chuột qua văn bản)

b. `Pseudo Classes`:

- Syntax: `selector:pseudo-class { property: value; }`
- `Anchor Pseudo-class`: các liên kết có thể được hiển thị theo nhiều cách khác nhau.

  - `:link`: Trạng thái hiện tại của thẻ (chỉ dùng cho thẻ `a`).
  - `:visited`: Trạng thái khi đã click vào thẻ (chỉ dùng cho thẻ `a`).
  - `:hover`: Trạng thái khi di chuyển chuột vào thẻ (dùng cho nhiều thẻ).
  - `:active`: Trạng thái khi click chuột vào thẻ (dùng cho nhiều thẻ).

- Các `Pseudo-class` khác:

  - `:First-child `: element được chỉ định là element con đầu tiên của element khác.
  - `:Last-child `: Tương tự first-child nhưng là element con cuối cùng
  - `:first-of-type` Với mọi element là element con đầu tiên, của một kiểu cụ thể, của element cha của nó.
  - `:last-of-type` Với mọi element là element con cuối cùng, của một kiểu cụ thể, của element cha của nó.
  - `:nth-child(n)`: Với mọi element là element con thứ n , bất kể kiểu, của element cha của nó. (n có thể là một số, một từ khóa hoặc một công thức.).
  - `:nth-last-child(n)`: Tương tự như child nhưng tính từ element cuối cùng lên.
  - `:nth-last-of-type(n)`:Với mọi element là element con thứ n , của một kiểu cụ thể, của cha mẹ của nó, tính từ element cuối cùng.
  - `:nth-of-type(n)`:Với mọi element là element con thứ n , của một kiểu cụ thể, của element cha của nó.
  - `:only-of-type`: chọn element là con duy nhất của loại nó là con của element cha.
  - `only-child`: trong element cha chỉ có duy nhất 1 element nếu có > 1 thì không được chọn.
  - `:checked `: Với mọi element `<input>` đã chọn (chỉ dành cho các type radio và checkbox) và element `<option>`.
  - `:disabled`: Với mọi element bị disable (chủ yếu được sử dụng trên các element biểu mẫu).
  - `:enabled`: Với mọi element enable (chủ yếu được sử dụng trên các element biểu mẫu).
  - `:empty `: Với mọi element không có element con (bao gồm cả các nút văn bản).
  - `:focus`: dùng để chọn element được focus vào.
  - `:in-range`: chọn tất cả các element có giá trị nằm trong một phạm vi xác định.(trong vùng min - max).
  - `:out-of-range`: chọn tất cả các element có giá trị nằm trong một phạm vi xác định.(ngoài vùng min - max).
  - `:invalid`: chọn các form elements có giá trị không xác thực theo cài đặt của element. (chỉ hoạt động cho các form elements có giới hạn, chẳng hạn như element đầu vào có thuộc tính tối thiểu và tối đa, trường email không có email hợp pháp hoặc trường số không có giá trị số, v.v.).
  - `:valid`: chọn các form elements có giá trị xác thực theo cài đặt của element. (chỉ hoạt động cho các form elements có giới hạn, chẳng hạn như element đầu vào có thuộc tính tối thiểu và tối đa, trường email không có email hợp pháp hoặc trường số không có giá trị số, v.v.).
  - `:lang()`: chọn được sử dụng để chọn các element có attribute lang với giá trị được chỉ định. Giá trị của `lang="value"` thường là mã ngôn ngữ gồm 2 chữ cái.
  - `:not(selector)`: Mọi element KHÔNG phải là element / bộ chọn được chỉ định.
  - :`optional`: Những input không có attribute `required` thì sẽ được chọn (chỉ dùng cho thẻ `input`, `select`, `textarea`)
  - `:read-only`: Những form elements có attribute `readonly` sẽ được chọn
  - `:read-write`: Những form elements `có thể đọc` và `có thể ghi` sẽ được chọn (những element có attribute `readonly` và `disable` sẽ không được chọn).
  - `:required`: Những form elements có attribute `required` sẽ được chọn (chỉ áp dụng cho các thẻ `input`, và `textarea`.)
  - `:root`: Chọn phần tử `root`.
  - `:target`: chọn những element có `id` trùng với `href` trong thẻ `a`

### 5.7. Attribute CSS Selector:

```html
<div for="chocolate">Chocolate</div>
<div for="peanut">Peanut</div>
<div for="butter">Butter</div>
<div>Jelly</div>
```

- Bộ chọn thuộc tính CSS (Attribute CSS Selector) sử dụng để chọn thuộc tính HTML (HTML Attributes).
- `Bộ chọn thuộc tính cơ bản: A[B]`. Chọn tất cả các phần tử A có thuộc tính B.

```css
div[for] {
  color: red;
}
```

- `Bộ chọn thuộc tính cụ thể: A[B="C"]`. Chọn các phần tử A có thuộc tính B với giá trị là C.

```css
div[for="chocolate"] {
  color: blue;
}
```

- `Bộ chọn thuộc tính cụ thể (Bắt đầu với ...): A[B^="C"]`. Chọn tất cả các phần tử A có thuộc tính B với giá trị bắt đầu là C. Ký tự ^ là ký tự thể hiện chuỗi bắt đầu (trong Biểu thức chính quy (Regex)).

```css
div[for^="cho"] {
  color: magenta;
}
```

- `Bộ chọn thuộc tính cụ thể (Kết thúc với ...): A[B$="C"]`. Chọn tất cả các phần tử A có thuộc tính B với giá trị kết thúc là C. Ký tự $ là ký tự thể hiện chuỗi kết thúc trong (Biểu thức chính quy (Regex)).

```css
div[for$="er"] {
  color: yellow;
}
```

- `Bộ chọn thuộc tính cụ thể (Chứ ký tự ...): A[B*="C"]`. Chọn tất cả phần tử A với thuộc tính B chứa giá trị C.

```css
div[for*="ut"] {
  color: cyan;
}
```
