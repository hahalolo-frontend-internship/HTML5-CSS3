## 11. Animation

- Cho phép tạo ra hiệu ứng chuyển động mà không cần sử dụng đến JS hay Flash.
- Animation là hiệu ứng chuyển động.
- Để tạo ra một chuyển động Animation cần phải có các keyframe.
- Mỗi Keyframe được chạy ở 1 thời điểm xác định và trong keyframe đó nó quy định việc phần tử sẽ di chuyển ra sao.
- Ngoài ra Animation còn quy định một số thuộc tính quy định các chi tiết khá quan trọng :
  - `animation-name`: Khai báo tên Keyframe được sử dụng.
  - `animation-duration`: Tương tự như transition.
  - `animation-timing-function`:Tương tự như transition.
  - `animation-delay`: Tương tự như transition.
  - `animation-iteration-count`: Sử dụng để thiết lập số lần thực hiện một animation. Giá trị thường là 1 số nhất định hoặc là `infinite` lặp lại vô hạn.
  - `aniamtion-direction`: Xác định chiều chạy của animation. Các giá trị:
    - `normal`: animation di chuyển bình thường tiến về phía trước (mặc định)
    - `reverse`: animation di chuyển theo hướng ngược lại, lui về sau.
    - `alternate`: animation di chuyển tiến về trước, sau đó lui theo hướng ngược lại
    - `alternate-reverse`: animation di chuyển ngược lại trước, rồi đổi chiều tiến về trước.
  - `animation-play-state`:
    - `paused` : Xác định chuyển động dừng lại
    - `running` : Xác định chuyển động chạy

`Rule Keyframe`

- Quy định phần tử sẽ chuyển động ra sao tại mỗi thời điểm nhất định
- Syntax:
  - Name: tên của animation bạn muốn tạo
  - Code: Các đoạn code quy định tiến trình chuyển động. Có 2 dạng:
    - Sử dụng phần trăm từ 0% đến 100%.
    - from...to: thiết lập giá trị từ khởi đầu (from - tương đương với 0%) đến kết thúc (to - tương đương với 100%).

```css
@keyframes Name {
  /*code*/
}
```

[demo](https://codepen.io/Sadioho/pen/XWMNjXb)
