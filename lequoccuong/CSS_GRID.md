## 3. Grid

### 3.1 Giới thiệu

- Cung cấp một hệ thống bố cục dựa trên lưới, với các hàng và cột, giúp thiết kế các web dễ dàng hơn mà không cần sử dụng float và position.
- Bố cục lưới bao gồm một element container, với 1 hoặc nhiều element item.
- Tất cả các item trực tiếp của `grid container` sẽ tự động trở thành các `grid items`.
- `grid columns`: Các đường thẳng đứng của các `grid items` được gọi là `cột`.
  ![Column](./imgHTML/grid_columns.png)
- `grid rows`: Các đường ngang của các `grid items` được gọi là `hàng`.
  ![Row](./imgHTML/grid_rows.png)
- `Grid Gaps`: Khoảng cách giữ mỗi `cột` / `hàng` gọi là `gaps`.
- Chúng ta sẽ dùng thuộc tính `grid-gap = value` để set khoảng cách.
  ![Gaps](./imgHTML/grid_gaps.png)

- `Grid Lines`

  - Các line giữa các cột được gọi là `column lines`.
  - Các line giữa các hàng được gọi là `row lines`.

  - Cách tính lines như sau: `row lines = số hàng+ 1`, và `column lines = số cột+ 1`
    ![Lines](./imgHTML/grid_lines.png)

### 3.2 grid-template-columns

- Dùng để xác định số lượng `cột` trong `grid layout` và nó có thể xác định `width` của mỗi `cột`.
- Ở đây có thể chia bao nhiêu cột tùy ý, thường dựa vào thiết kế là 12 cột bằng nhau.
- Chúng ta muốn thêm bao nhiêu cột thì chỉ cần thêm như thế này: `grid-template-columns: cột1 cột2 cột3.... cộtN`.
- Đơn vị ở đây có thể dùng là: `px`, `%`, `em`, `rem`, `auto` và `fr`.
- Ví dụ: dưới đây sẽ chia 5 cột và có `width` bằng nhau là 20%.

```css
.container {
  grid-template-columns: 50% 50%;
}
```

![grid_teamplate_column](./imgHTML/vidu_grid_teamplate_column.PNG)

### 3.3 grid-template-rows

- Dùng để xác định số lượng `hàng` trong `grid layout` và nó có thể xác định `height` của mỗi `hàng`.
- Chúng ta muốn thêm bao nhiêu hàng thì chỉ cần thêm như thế này: `grid-template-rows: hàng1 hàng2 hàng3.... hàngN`.
- Ví dụ: dưới đây sẽ chia 2 hàng và có `height` bằng nhau là 50%.

```css
.container {
  grid-template-rows: 25% 25% 25% 25%;
}
```

![grid_teamplate_column](./imgHTML/grid_teamplate_row.PNG)

### 3.4 fraction-unit (`fr`)

- Đây là giá trị được dùng trong `CSS GRID`.
- Giá trị này sẽ chiếm khoảng trống lớn nhất có thể.
- ví dụ:
  `css grid-template-columns: 15% 1fr 25% 15%;`
  ![fr](./imgHTML/grid_fr.PNG)

### 3.5 grid-auto-flow

- Giả sử trường hợp khi có 1 hoặc nhiều element bị dư do không đủ cột hay không đủ hàng thì nó sẽ rớt xuống hàng mới, thì mình muốn set cho các element bị rớt đó có `height` nhất định chúng ta sẽ dùng `grid-auto-flow` kết hợp với `grid-auto-rows` để set cho các element đó.

```css
.container {
  grid-template-rows: 100px 150px;
  grid-auto-flow: row;
  grid-auto-rows: 50px;
}
```

![fr](./imgHTML/auto-flow-row.PNG)

- Về column thì tương tự như row

```css
.container {
  width: 600px;
  display: grid;
  grid-template-columns: 100px 200px;
  grid-auto-flow: column;
  grid-auto-columns: 250px;
}
```

![fr](./imgHTML/auto-flow-column.PNG)

### 3.6 repeat()

- Hàm này giúp chúng ta tạo cột/hàng có cùng giá trị 1 cách nhanh chóng.

- Giả sử chúng ta muốn tạo 6 cột và muốn rằng cột đầu và cột cuối cùng có giá trị là 10% còn 4 cột giữa mỗi cột là 20% chúng ta sẽ làm như sau:

```css
grid-template-columns: 10% repeat(4, 20%) 10%;
```

![fr](./imgHTML/repeat.PNG)

### 3.7 grid-column

- Thuộc tính này viết tắt của 2 thuộc tính `grid-column-start` và `grid-column-end`giúp chúng ta thiết lập vị trí và kích thước của element theo cột.
- Cú pháp của nó như sau

```css
grid-column: grid-column-start / grid-column-end.;
```

-Trong đó giá trị của `grid-column-start` và `grid-column-end` là các `column lines` hoặc `row lines`

```css
#grid {
  display: grid;
  height: 200px;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: 200px;
}
#item2 {
  background-color: green;
  grid-column: 2 / 4;
}
#item3 {
  background-color: red;
  grid-column: span 2 / 7;
}
```

![fr](./imgHTML/column.PNG)

### 3.8 grid-row

- Cũng như `grid-column` nhưng thuộc tính này giúp chúng ta thiết lập vị trí và kích thước của phần tử theo hàng.

### 3.9 grid-area

- Có thể được sử dụng làm thuộc tính viết tắt cho các thuộc tính `grid-row-start`, `grid-column-start`, `grid-row-end` và `grid-column-end`.
  cũng có thể được sử dụng để gán tên cho các `grid item`.
- Cú pháp như sau:

```css
grid-area: grid-row-start / grid-column-start / grid-row-end / grid-column-end;
```

![grid_area](./imgHTML/grid-area.PNG)

- Cú pháp gán tên cho `grid item`:

```css
grid-area: myItem1;
```

### 3.10 grid-template-areas

- Giúp chúng ta tạo bố cục layout một cách nhanh chóng, dễ dàng mà lại đơn giản bằng tên của grid-area.
- Ví dụ:

```css
#container {
  display: grid;
  width: 100%;
  height: 250px;
  grid-template-areas:
    "head head"
    "nav  main"
    "nav  foot";
  grid-template-rows: 50px 1fr 30px;
  grid-template-columns: 150px 1fr;
}
```

![grid_template_areas](./imgHTML/template-areas.PNG)

### 3.11 minmax

- Hàm này giúp chúng ta thiết lập độ rộng của cột hoặc chiều cao
  của dòng theo giá trị tối thiểu và tối đa cho element.
- Cú pháp: `grid-template-columns: minmax(300px, 500px)` sẽ tạo ra 1 cột
  có độ rộng tối thiểu là 300px và độ rộng tối đa là 500px.
- Ví dụ

```css
#container {
  display: grid;
  grid-template-columns:
    minmax(min-content, 300px)
    minmax(max-content, 300px) 1fr;
}
```

![minmax](./imgHTML/min-max.PNG)
![minmax](./imgHTML/minmax1.PNG)

### 3.12 grid-auto-flow: dense

- `grid-auto-flow` còn một giá trị khác nữa đó là dense.
- Giá trị này sẽ làm cho các element tự động lấp đầy vào các chỗ trống trong grid một cách hợp lý sao cho không bị dư khoảng trống.

- Giá trị này sẽ làm cho các element sắp xếp không còn theo thứ tự nữa.

[demo](https://codepen.io/enxaneta/pen/QpjvBx)

### 3.13 Một số thuộc tính của Grid Container

#### a. justify-content

- Dùng để căn chỉnh toàn bộ `grid item` bên trong `container` theo chiều ngang.
- Tổng chiều rộng của `grid` phải nhỏ hơn `width` của `container` để thuộc tính `justify-content` có hiệu lực.
- Ví dụ dưới đây dùng `justify-content: space-around;`
  ![justify-content](./imgHTML/justify-content.PNG)

#### b. align-content

- Dùng để căn chỉnh toàn bộ `grid item` bên trong `container` theo chiều dọc.
  ![align-content](./imgHTML/align-content.PNG)

#### c. Các giá trị của align-content và justify-content thường dùng

- `start`
- `end`
- `center`
- `space-between`
- `space-around`
- `space-evenly`
