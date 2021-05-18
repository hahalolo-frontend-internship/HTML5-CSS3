# Phần tìm hiểu thêm

## 1. Internet hoạt động như thế nào?

### `Internet`:

- `Internet` là một mạng lưới cáp vật lý toàn cầu, gồm dây đồng, cáp TV và cáp quang. Kết nối không dây như Wi-Fi và 3G / 4G cũng dựa vào các loại cáp vật lý này để truy cập Internet.

- Mạng lưới này giúp kết nối trung tâm dữ liệu với thiết bị của người dùng.

### `Máy chủ`

- là nơi lưu trữ các trang web
- Hoạt động giống như ổ cứng máy tính thông thường.

### `Địa chỉ IP`

- Mỗi thiết bị được kết nối với `Internet` đều được xác định bởi một chuỗi số duy nhất tương ứng với mỗi thiết bị, gọi là `địa chỉ IP`
- Ví dụ: 192.168.3.4

### `DNS - Domain Name System`

- Hệ thống quản lý tên miền, giúp quản lý `tên miền` với một `địa chỉ IP` cụ thể.
- `Tên miền` là tên của một website hoạt động trên internet, đóng vai trò là một địa chỉ tĩnh, cố định.

### Cách hoạt động của `Internet`

- Nhập tên miền vào thanh tìm kiếm của trình duyệt.
- Trình duyệt sẽ mã hóa thành tín hiệu điện tử (dạng 1 và 0) rồi gửi yêu cầu tới nhà mạng.
- Nhà mạng sẽ truyền yêu cầu đến máy chủ DNS.
- Máy chủ sẽ tra cứu xem địa chỉ IP nào tương ứng với miền mà bạn đã nhập.
- Sau khi có địa chỉ IP, yêu cầu được gửi tới máy chủ có địa chỉ IP tương ứng.
- Máy chủ của địa chỉ IP tương ứng nhận được yêu cầu truy cập vào 1 trang web nào đó sẽ trả dữ liệu về thiết bị của bạn bằng luồng dữ liệu định dạng kỹ thuật số thông(dãy 1 và 0) qua cáp quang theo dạng xung ánh sáng.
- Cáp quang được nối với bộ định tuyến ở nhà của bạn để chuyển đổi tín hiệu ánh sáng sang tín hiệu điện và truyền về thiết bị của bạn. Hoặc là chuyển đổi thành tín hiệu vô tuyến để truyền sang thiết bị của bạn.
- Với kết nối bằng gói cước dữ liệu di động thì tín hiệu quang sẽ gửi đến tháp viễn thông gần nhà bạn để chuyển đổi thành sóng điện từ rồi truyền đến thiết bị của bạn.

<img src="./internet.png" width="500">
