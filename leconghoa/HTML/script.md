# THẺ `<script>`

## 1. `Async` và `Defer`:

Chúng là thuộc tính mới ở HTML5, giúp quá trình xử lý script tối ưu hơn trong từng hoàn cảnh cụ thể (đặt trong thẻ head mới hoạt động).

### \* Khi không có `async` và `defer` đặt ở `head`:

<img src="./without-defer-async-head.png" alt="viewport" width="800"/>

### \* Khi không có `async` và `defer` đặt cuối `body`:

<img src="./without-defer-async-body.png" alt="viewport" width="800"/>

### \* Khi có `async`:

<img src="./with-async.png" alt="viewport" width="800"/>

### \* Khi có `defer`:

<img src="./with-defer.png" alt="viewport" width="800"/>

## 2. `nomodule`

```html
<script type="module" src="app.js"></script>
<script nomodule src="classic-app-bundle.js"></script>
```

Trong trình duyệt hiện đại hỗ trợ tập lệnh mô-đun, script phần tử có thuộc tính `nomodule` sẽ bị bỏ qua và script phần tử có type `module` sẽ được tìm nạp và thực thi (dưới dạng tập lệnh mô-đun).

Ngược lại, các trình duyệt cũ hơn sẽ bỏ qua script phần tử có type `module`và tìm nạp và thực thi script phần tử khác, vì chúng không hỗ trợ các `nomodule` thuộc tính.
