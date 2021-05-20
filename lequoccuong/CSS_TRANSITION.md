## 9. Transition

- Cách để dễ xác định trasition cho các trạng thái khác nhau là sử dụng :hover, :focus, :active và target, pseudo-class.

- Để tạo ra hiệu ứng chuyển đổi Transition, ta phải xác định ít nhất :

  - Thuộc tính CSS muốn thêm hiệu ứng vào
  - Thời gian chuyển đổi diễn ra
  - Nếu duration không được chỉ định thì giá trị mặc định bằng 0.

- Transition có 4 giá trị:

  - `transition-property`: Xác định chính xác những thuộc tính nào sẽ được thay đổi cùng với các thuộc tính chuyển tiếp khác. Một số thuộc tính phổ biến:
    ![transition-property](https://github.com/hahalolo-frontend-internship/HTML5-CSS3/raw/dev-hoxuananh/hoxuananh/transition_property.png)
  - `transition-duration`: Thời gian diễn ra quá trình chuyển đổi bằng cách sử dụng thời gian s hoặc mili giây(ms).
  - `transition-timing-function`: Dùng để xác định tốc độ thay đổi khi chuyển đổi. Các giá trị có sẵn: ease, linear, ease-in, ease-out, ease-in-out.

    ![transition-timing-function](https://habrastorage.org/getpro/habr/post_images/43e/ce0/5b9/43ece05b9c1ed26b950fd9bb98903398.gif)

  - `transition-delay`: Sử dụng để xác định khoản thời gian trì hoẵn giữa thời gian một thuojc tính thay đổi và lúc chuyển tiếp thực sự bắt đầu.

  - `transition`: Viết tắt bao gồm các thuộc tính trên transition : `property name | duration | easing function | delay`

  [demo](https://codepen.io/Sadioho/pen/WNpoxbE)
