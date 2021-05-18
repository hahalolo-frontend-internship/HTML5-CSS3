# THẺ `<LINK />`

## Các thuộc tính:

### 1. `href`

```html
<link rel="stylesheet" href="style.css" />
```

### 2. `hreflang`

Có chức năng khai báo ngôn ngữ website thể hiện, hỗ trợ các công cụ tìm kiếm `Search Engine` trích xuất dữ liệu theo chuẩn ngôn ngữ mà website đang viết. Phục vụ người dùng với ngôn ngữ mà họ muốn tìm.

```html
<link
  rel="alternate"
  hreflang="vi-vn"
  href="http://vi-vn.example.com/page.html"
/>
<link
  rel="alternate"
  hreflang="en-us"
  href="http://en-us.example.com/page.html"
/>
<link rel="alternate" hreflang="x-default" href="http://www.example.com/" />
```

### 3. `media`

Thuộc tính media chỉ định phương tiện / thiết bị mà tài liệu liên quan được tối ưu hóa.

Thuộc tính này chủ yếu được sử dụng với các biểu định kiểu CSS để chỉ định các kiểu hiển thị khác nhau cho các loại phương tiện khác nhau.

- Các thiết bị:
  - `print`: Được sử dụng cho chế độ xem trước khi in / các trang in
  - `screen`: Được sử dụng cho màn hình máy tính, máy tính bảng, điện thoại thông minh,...
  - `speech`: Được sử dụng cho trình đọc màn hình
  - `all`: Được sử dụng cho tất cả các thiết bị trên. (chế độ mặc định)
- Các giá trị:

  - `aspect-ratio`:

    - Chỉ định tỷ lệ chiều rộng / chiều cao của vùng hiển thị ở màn hình đích. Tiền tố "min-" và "max-" có thể được sử dụng.

    ```html
    <link
      rel="stylesheet"
      type="text/css"
      href="css/index.css"
      media="screen and (max-co-ratio: 16/9)"
    />
    ```

  - `color`:

    - Chỉ định các bit trên mỗi màu của màn hình đích. Tiền tố "min-" và "max-" có thể được sử dụng.

    ```html
    <link
      rel="stylesheet"
      type="text/css"
      href="css/index.css"
      media="screen and (min-color: 3)"
    />
    ```

  - `color-index`:
    - Chỉ định số lượng màu mà màn hình đích có thể xử lý. Tiền tố "min-" và "max-" có thể được sử dụng.
    ```html
    <link
      rel="stylesheet"
      type="text/css"
      href="css/index.css"
      media="screen and (min-color-index: 256)"
    />
    ```
  - `height`:
    - Chỉ định chiều cao của vùng hiển thị ở màn hình đích. Tiền tố "min-" và "max-" có thể được sử dụng.
    ```html
    <link
      rel="stylesheet"
      type="text/css"
      href="css/index.css"
      media="screen and (max-height: 700px)"
    />
    ```
  - `monochrome`:
    - Chỉ định các bit trên mỗi pixel trong bộ đệm khung đơn sắc. Tiền tố "min-" và "max-" có thể được sử dụng.
    ```html
    <link
      rel="stylesheet"
      type="text/css"
      href="css/index.css"
      media="screen and (min-monochrome:2)"
    />
    ```
  - `orientation`:
    - Chỉ định hướng của màn hình / giấy mục tiêu. Giá trị có thể có: "portrait" hoặc "landscape".
    ```html
    <link
      rel="stylesheet"
      type="text/css"
      href="css/index.css"
      media="all and (orientation: landscape)"
    />
    ```
  - `resolution`:
    - Chỉ định mật độ pixel (dpi hoặc dpcm) của màn hình / giấy mục tiêu. Tiền tố "min-" và "max-" có thể được sử dụng.
    ```html
    <link
      rel="stylesheet"
      type="text/css"
      href="css/index.css"
      media="print and (min-Resolution: 300dpi)"
    />
    ```
  - `width`:
    - Chỉ định chiều rộng của vùng hiển thị được nhắm mục tiêu. Tiền tố "min-" và "max-" có thể được sử dụng.
    ```html
    <link
      rel="stylesheet"
      type="text/css"
      href="css/index.css"
      media="screen and (min-width: 500px)"
    />
    ```

### 4. `rel`

Thuộc tính `rel` chỉ định mối quan hệ giữa tài liệu hiện tại với tài liệu được liên kết. Chỉ được sử dụng nếu có thuộc tính `href`.

- Các giá trị:
  - `alternate`: Cung cấp liên kết đến bản trình bày thay thế của tài liệu (tức là trang in, bản dịch hoặc bản sao)
  - `author`: Cung cấp liên kết đến tác giả của tài liệu
  - `bookmark`: URL cố định được sử dụng để đánh dấu trang
  - `external`: Chỉ ra rằng tài liệu được tham chiếu không phải là một phần của cùng một trang web với tài liệu hiện tại
  - `help`: Cung cấp liên kết đến tài liệu trợ giúp
  - `license`: Cung cấp liên kết đến thông tin cấp phép cho tài liệu
  - `next`: Cung cấp liên kết đến tài liệu tiếp theo trong chuỗi
  - `nofollow`: Các liên kết đến một tài liệu chưa được chứng thực, chẳng hạn như một liên kết trả phí. ("nofollow" được sử dụng bởi Google, để chỉ định rằng trình thu thập thông tin tìm kiếm của Google không được đi theo liên kết đó)
  - `noopener`: Yêu cầu bất kỳ ngữ cảnh duyệt nào được tạo bằng cách đi theo siêu liên kết không được có ngữ cảnh duyệt mở
  - `noreferrer`: Làm cho người giới thiệu không xác định. Không có tiêu đề giới thiệu khi người dùng nhấp vào siêu liên kết
  - `prev`: Tài liệu trước đó trong một lựa chọn
  - `search`: Liên kết đến một công cụ tìm kiếm cho tài liệu
  - `tag`: Một thẻ (từ khóa) cho tài liệu hiện tại
  - `stylesheet`: Trang định dạng nội dung.

### 5. `type`

Thuộc tính `type` chỉ định loại phương tiện của tài liệu / tài nguyên được liên kết, theo chuẩn MIME.

MIME viết tắt của "Multipurpose Internet Mail Extensions" là một chuẩn Internet về định dạng cho thư điện tử.

Giá trị phổ biến nhất của kiểu là "text / css". Nếu bạn bỏ qua thuộc tính type, trình duyệt sẽ nhìn vào thuộc tính rel để đoán đúng loại. Vì vậy, nếu `rel = "stylesheet"`, trình duyệt sẽ giả định kiểu là `"text/css"`.

- Một số giá trị:
  - `text/css`
  - `text/html`
  - `image/gif`
  - `video/mpeg`
  - ...
