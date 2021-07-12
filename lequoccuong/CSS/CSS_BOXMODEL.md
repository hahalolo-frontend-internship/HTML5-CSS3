## 5. Box model

- CSS box model là một hộp bao quanh mọi phần tử HTML.
- Nó bao gồm: `margins`, `borders`, `padding`, và `Content `.
  ![boxmodel](./imgHTML/boxmodel.PNG)

### 5.1 Content

- Nội dung của box có thể là chữ hoặc hình ảnh.

### 5.2 Margin

Được dùng để tạo khoảng cách xung quanh của một thành phần. Có 4 thuộc tính:

- `margin-top`: chỉ định
- `margin-bottom`: chỉ định
- `margin-left`: chỉ định
- `margin-right`: chỉ định

ShortHand

- `margin: top right bottom left`
- `margin: top right-left bottom`
- `margin: top-bottom right-left`
- `margin: top-bottom-right-left`

Margin collapse

```html
<div>
  <p style=" margin-bottom: 50px">param 1</p>
  <p style=" margin-top: 50px">param 2</p>
</div>
```

![margin](./imgHTML/margin.PNG)
![margin](./imgHTML/margin1.PNG)

- Dễ hiểu nhầm là khoảng cách giữa 2 thẻ `p` là `100px` nhưng thực ra là `50px`. Để `margin` được `100px` thì ta set 1 trong 2 thẻ `p` là `display:inline-block;`

### 5.3 Padding

- Tương tự `margin` nhưng nó tạo khoảng cách giữa `content` và `border` trong 1 phần tử.

### 5.4 Border

Đường viền của 1 phần tử

- `border-style`: Xác định hình dạng của đường viền.
- `border-color`: Xác định màu sắc của đường viền.
- `border-width`: Xác định bề dày của đường viền.

Vị trí của `border`: `top`, `right`, `bottom`, `left`.

- Ví dụ: chúng ta có thể chỉ set `style/color/width` cho border ở phía `top/right/bottom/left `

  - `border-top-style: solid `
  - `border-top-color: blue `
  - `border-bottom-color: 2px `

ShortHand

- `border: width style color`
- Ví dụ: `border: 10px solid red`
  ![border](./imgHTML/border.PNG)

Border-radius

- Dùng để bo tròn các đường viền

Outline

- Là một đường được vẽ bên ngoài `border` của phần tử.
- Nó có cú pháp shorthand giống như border.
- Nó có thuộc tính `outline-offset` là khoảng trống giữa `outline` và `border`.

- `outline: 10px solid green; outline-offset: 5px;`
  ![outline](./imgHTML/outline.PNG)
