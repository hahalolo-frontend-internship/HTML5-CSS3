## 7. Responsive & Media Queries

- Làm trang web thích ứng trên tất cả thiết bị.
- Trang web của bạn phải trông đẹp và dễ sử dụng, bất kể thiết bị nào.
- Các trang web không nên bỏ đi thông tin để phù hợp với các thiết bị nhỏ hơn, mà phải điều chỉnh nội dung của nó phù hợp với bất kỳ thiết bị nào.

Các trang web không nên bỏ đi thông tin để phù hợp với các thiết bị nhỏ hơn, mà phải điều chỉnh nội dung của nó để phù hợp với bất kỳ thiết bị nào:

### 7.1 Viewport

- Là vùng hiển thị của người dùng trên một trang web.
- Viewport sẽ thay đổi theo thiết bị và sẽ nhỏ hơn trên điện thoại so với màn hình máy tính.
- Kiểm soát viewport thông qua thẻ

  `<meta name="viewport" content="width=device-width, initial-scale=1.0">`

### 7.2 Grid-View

- Nhiều trang web dựa trên chế độ xem lưới, có nghĩa là trang được chia thành các cột.
- Chế độ xem lưới thường có 12 cột và có tổng chiều rộng là 100% và sẽ thu nhỏ và mở rộng khi thay đổi kích thước cửa sổ trình duyệt.
  ![grid-view](./imgHTML/Grid-View.png)

### 7.3 Media Queries

- CSS3 sử dụng `@media` để chỉ bao gồm một khối thuộc tính CSS trong một điều kiện nhất định là đúng.
- Truy vấn `@media` được viết với cấu trúc như sau

```css
@media only|not Media-type and (media-future and|or|not media-future) {
  tag {
    property: value;
  }
}
```

- `Media-type` có 4 giá trị: `screen`, `print`, `all`(mặc định), `speech` (Dành cho phiên bản hỗ trợ đọc thành tiếng).
- `media-future`: thường dùng là `max-width` và `min-width`

#### Breakpoint

- Là những điểm (chiều rộng màn hình của thiết bị) mà ở đó giao diện được chuyển đổi cho phù hợp với thiết bị hiện tại

![breakpoint](./imgHTML/breakpoint.gif)

#### Mobile First

- Nghĩa là thiết kế cho thiết bị di động trước khi thiết kế cho máy tính để bàn hoặc bất kỳ thiết bị nào khác (Điều này sẽ giúp trang hiển thị nhanh hơn trên các thiết bị nhỏ hơn).
