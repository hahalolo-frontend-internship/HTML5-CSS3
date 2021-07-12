## 8. CSS Specificity

- Nếu có 2 hay nhiều CSS rule cùng nhắm vào một phần tử thì khi đó trình duyệt sẽ chỉ tuân theo một nguyên tắc, xem trong list CSS rule đâu là quy tắc cao nhất để chọn ra và apply vào phần tử.
- Ở đây chúng ta sẽ có bảng xếp hạng cho CSS rule để trình duyệt tuân theo khi áp dụng CSS, được sắp xếp theo thứ tự ưu tiên từ trên xuống dưới:

  - `!important`:sẽ ghi đè tất cả các quy tắc tạo kiểu trước đó cho thuộc tính cụ thể trên phần tử đó.

    `h1{color: white!important;}`

  - `Inline style`: thiết lập các thuộc tính CSS trực tiếp bên trong một phần tử bằng thuộc tính `style`

    `<h1 style="color: #ffffff;">Đây là thẻ h1</h1>`

  - ID: thiết lập các thuộc tính CSS cho một phần tử được định danh duy nhất trong một trang.

    `#nav, #header`

  - Class, attribute, pseudo-class:

    `.menu, .header,... , attribute như a[target] và pseudo-class như :hover, :focus...`

  - Element, pseudo-element

    `h1, h2, div, p... và pseudo-element như là ::before, ::after, ::selection.`
