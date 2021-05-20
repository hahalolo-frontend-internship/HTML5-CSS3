# SVG
- SVG là viết tắt của từ (Scalable Vector Graphics), nó được vẽ bằng cách sử dụng ngôn ngữ đánh dấu kiểu như HTML. Nó đưa ra một số phương pháp để vẽ như các đường, hình tròn, ảnh, văn bản ...

1. Vẽ hình tròn SVG: Sử dụng thẻ `<circle>`.
    ```html
    <svg width="180" height="180">
        <circle cx="80" cy="80" r="50" fill="green" stroke="yellow"/>
    </svg>
    ```
    - Các thuộc tính trong `<circle>` là:
        + `cx` vị trí tâm, tính từ mép trái của svg.
        + `cy` vị trí tâm, tính từ mép trên của svg.
        + `r` bán kính hình tròn.
        + `fill` xác định màu nền.
        + `stroke` xác định màu đường biên.
        + `stroke-width` xác định chiều rộng của đường biên.

2. Vẽ hình ellipse SVG
    ```html
    <svg width="180" height="180">
        <circle cx="80" cy="80" rx="100" ry="50" fill="green" stroke="yellow"/>
    </svg>
    ```
3. Vẽ hình tứ giác: Sử dụng thẻ `<rect>`
    ```html
    <svg width="340" height="120">
        <rect width="300" height="100"  x="20" y="20" fill="green" />
    </svg>
    ```
4. Vẽ đường thẳng: sử dụng thẻ `<line>`
    ```html
     <svg width="220" height="60">
        <line x1="30" y1="10" x2="200" y2="50"
            style="stroke: green; stroke-linecap:round; stroke-width:20;"  />
    </svg>
    ```
5. Vẽ đường gấp khúc: sử dụng thẻ `<polyline>`
    ```html
    <svg width="130" height="160">
        <polyline
            points="0,40 40,40 40,80 80,80 80,120 120,120 120,160"
            fill="yellow" stroke="green" stroke-width="6" />
    </svg>
    ```
6. Vẽ đa giác: sử dụng thẻ `<polygon>`
    ```html
    <svg width="320" height="220">
        <polygon points="100 100, 200 200, 300 10"
                style="fill: green; stroke:#F9F38C;" stroke-width="5" />
    </svg>
    ```
7. Vẽ ảnh động: sử dụng thẻ `<animate>`
    ```html
    <svg width="500" height="30">
        <rect width="20" height="20" fill="orange">
            <animate attributeName="x" from="0" to="300"
                     dur="10s" fill="freeze" repeatCount="3"/>
        </rect>
    </svg>
    ```
    - Các thuộc tính trong thẻ `<animate>`
        + `attributeName` : chỉ ra thuộc tính sẽ bị tác động để tạo ảnh động.
        + `from` : giá trị thuộc tính nhận được ban đầu.
        + `to` : giá trị thuộc tính nhận được ở điểm cuối của hoạt động.
        + `dur` : thời gian ảnh động diễn ra.
        + `fill` : cách thiết lập khởi tạo tạo khi bắt đầu động remove khởi tạo giá trị, freeze giữ giá trị ban đầu.
        + `repeatCount` : chỉ ra số lần lặp lại (indefinite lặp lại vô tận).
8. Chèn chữ vào SVG: sử dụng thẻ `<text>`
    ```html
    <svg width="500" height="30">
        <text x="10" y="10">Hello World!</text>
    </svg>
    ```
    - Các thuộc tính của thẻ `<text>`
        + font-family
        + font-style
        + font-weight
        + font-variant
        + font-stretch,
        + font-size
        + font-size-adjust
        + kerning
        + letter-spacing
        + word-spacing
        + text-decoration.
    - Dùng thẻ `<tspan>` để định dạng thêm chữ trong text
    ```html
    <svg width="500" height="100" style="background: #ffc107">
        <text x="50" y="30" font-weight="bold">Hello World!
            <tspan font-weight="bold" fill="red">This is bold and red</tspan>
        </text>
    </svg>
    ```
9. Path là một chuỗi các đường thẳng và đường cong.
    - M(Move): x y tọa độ điểm bắt đầu
    - L(Line): x y tọa độ điểm để vẽ đường
    - H(Horizontal Line): là 1 đường thẳng nằm ngang chỉ nhận x
    - V (Vertical Line) là một đường thẳng đứng chỉ nhận toạ độ y
    - Z (Close Path), tạo một đường quay trở lại điểm ban đầu
    - Q : Đường cong với x1 y1 x2 y2
    ```html
       <svg width="500" height="500" style="background: #ffc107">
        <path d="M 20 20 L 200 20 V 200 H 20 Z" fill="#59fa81" stroke="#d85b49" stroke-width="3" />
    </svg>
    ```