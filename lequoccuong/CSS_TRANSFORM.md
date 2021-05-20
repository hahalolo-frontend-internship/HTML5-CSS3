## 10. Transform

`Syntax`

```css
transform: value;
```

- Một số value (method) của transform: `translate(), rotate(), scaleX(), scaleY(), scale(), skewX(), skewY(), skew()`

### Transform 2D

- Các phần tử có thể bị bóp méo hoặc bị biến đổi trên cả mặt phẳng hai chiều hoặc mặt phẳng ba chiều.

#### Rotate()

- `rotate` cung cấp khả năng xoay một `element` từ 0 đến 360 độ.
- Sử dụng giá trị dương sẽ xoay `element` theo chiều kim đồng hồ và sử dụng giá trị âm sẽ xoay `element` ngược chiều kim đồng hồ.
- Điểm xoay mặc định là tâm của `element`, 50% theo cả chiều ngang và chiều dọc.
- Các `element` có thể xoay chỉ chiều x hoặc chỉ chiều y.

[demo](https://codepen.io/cuong021099/pen/QWpGNPg)

#### Scale()

- Các `element` có thể thay đổi kích thước xuất hiện theo tỉ lệ.
- Tỉ lệ mặc định là 1.
- Bất kỳ giá trị nào từ 0,01 đến 0,99 đều làm cho một `element` có vẻ nhỏ hơn trong khi bất kỳ giá trị nào lớn hơn hoặc bằng 1,01 làm cho một `element` có vẻ lớn hơn.
- Các `element` có thể thay đổi kích thước chỉ chiều x hoặc chỉ chiều y.

[demo](https://codepen.io/cuong021099/pen/QWpGELM)

#### Translate()

- Dùng `Translate` để thay đổi vị trí của một `element` trên trục x và y.
- Dùng translateX để thay đổi vị trí của `element` theo trục X, translateY để thay đổi vị trí của `element` theo trục Y.

[demo](https://codepen.io/cuong021099/pen/oNZYLLN)

#### Skew()

- Được sử dụng để làm nghiêng các phần tử trên trục x, trục y hoặc cả hai.
- Tính toán khoảng cách của giá trị `skew` được đo bằng đơn vị độ. Các phép đo độ dài, chẳng hạn như pixel hoặc tỷ lệ phần trăm, không áp dụng ở đây.

[demo](https://codepen.io/cuong021099/pen/YzZpWrq)

#### Kết hợp

- Nhiều phép biến đổi có thể sử dụng cùng 1 lúc.

[demo](https://codepen.io/cuong021099/pen/KKWNMxG)

#### Transform Origin

- Điểm biến đổi mặc định là tâm của `element`, 50% theo cả chiều ngang và chiều dọc.
- Với `transform origin` chúng ta có thể thay đổi điểm biến đổi đó.

[demo](https://codepen.io/cuong021099/pen/MWpbJbB)

#### Perspective (Phối cảnh)

- Thay đổi góc nhìn.

[demo](https://codepen.io/cuong021099/pen/abJBmNN)

#### Perspective Origin

- Thay đổi gốc của góc nhìn

[demo](https://codepen.io/cuong021099/pen/WNpoRzz)

### Transform 3D

- Tương tự transform 2D nhưng có thêm trục Z.

#### Rotate()

[demo](https://codepen.io/cuong021099/pen/NWpbdOM)

#### Scale()

[demo](https://codepen.io/cuong021099/pen/mdWOWbB)

#### Skew()

- Không thể biến đổi trên trục Z.

#### Translate()

[demo](https://codepen.io/cuong021099/pen/NWpbpxE)

#### Transform Style

- Đôi khi, các phép biến đổi ba chiều sẽ được áp dụng trên một phần tử được lồng trong một phần tử mẹ cũng đang được chuyển đổi.
- Trong trường hợp này, các phần tử được lồng nhau, được biến đổi sẽ không xuất hiện trong không gian ba chiều của riêng chúng.
- Để cho phép các phần tử lồng nhau biến đổi trong mặt phẳng ba chiều của riêng chúng, hãy sử dụng thuộc tính kiểu biến đổi với giá trị `preserve-3d`.
- Cú pháp như sau:

  `transform-style: preserve-3d`

[demo](https://codepen.io/shayhowe/pen/jBhbk)

#### Backface Visibility

- Khi làm việc với các phép biến đổi ba chiều, các phần tử đôi khi sẽ được biến đổi theo cách khiến chúng quay mặt ra khỏi màn hình.
- `backface-visibility`: cho phép chúng ta ẩn/ hiện nội dung khi bị quay mặt ra khỏi màn hình đó

[demo](https://codepen.io/cuong021099/pen/PopbpjB)
