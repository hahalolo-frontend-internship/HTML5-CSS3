# Các phần tử trong `form`

## 1. `<input>`:

Dùng để thu thập thông tin từ người dùng.

Các thuộc tính:

- `accept`: Chỉ định những loại tệp mà người dùng có thể chọn từ hộp thoại nhập tệp, đi kèm với `<input type = "file">`.

  - Các giá trị như: `audio/*` , `video/*` , `image/*`, `file_extension (gif, .jpg, doc,...)`.

    ```html
    <form action="#" id="form1">
      <input type="file" id="img" name="img" accept="image/*" />
    </form>
    ```

- `autocomplete`

  - Tương tự như thuộc tính của `form`

  ```html
  <form action="#" id="form1">
    <input type="text" autocomplete />
  </form>
  ```

- `autofocus`

  - Chỉ định một element `<input>` sẽ tự động focus khi tải trang

  ```html
  <form action="#" id="form1">
    <input type="text" autofocus />
  </form>
  ```

- `checked`

  - Chỉ định rằng một element `<input>` nên được chọn trước khi tải trang
  - Nó có thể được sử dụng với `<input type = "checkbox">` và `<input type = "radio">` .

  ```html
  <form action="/action_page.php">
    <input type="checkbox" checked />
    <input type="submit" value="Submit" />
  </form>
  ```

- `disabled`

  - Vô hiệu hóa thẻ `input` đó

  ```html
  <form action="#" id="form1">
    <input type="text" disabled />
  </form>
  ```

- `form`

  - Chỉ định `form` mà phần tử `<input>` thuộc về thông qua `id` của `form` đó.

  ```html
  <form action="#" id="form1"><input type="text" " /></form>
  <input type="text" form="form1" />
  ```

- `max - min`

  - Chỉ định giá trị lớn nhất và nhỏ nhất cho phần tử `<input>`
  - Chỉ sử dụng với các type: `number, range, date, datetime-local, month, time and week`.

  ```html
  <form action="/action_page.php">
    <label for="quantity">Quantity (between 1 and 5):</label>
    <input type="number" min="1" max="5" /><br />
    <input type="submit" />
  </form>
  ```

- `maxlength - minlength`

  - chỉ định số ký tự tối đa và tối thiểu được phép trong phần tử `<input>`.

  ```html
  <form action="/action_page.php">
    <label for="username">Username:</label>
    <input type="text" minlength="1" maxlength="10" /><br />
    <input type="submit" value="Submit" />
  </form>
  ```

- `multiple`

  - Hoạt động với các loại đầu vào sau: email và tệp
  - Chỉ định rằng người dùng được phép nhập nhiều hơn một giá trị vào phần tử `<input>`.

  ```html
  <form action="/action_page.php">
    <label for="files">Select files:</label>
    <input type="file" id="files" name="files" multiple />
    <input type="submit" />
  </form>
  ```

- `pattern`

  - Chỉ định một biểu thức chính quy mà giá trị của phần tử `<input>` được kiểm tra khi gửi biểu mẫu.
  - Chỉ hoạt động với: văn bản, ngày tháng, tìm kiếm, url, số điện thoại, email và mật khẩu.

  ```html
  <form action="/action_page.php">
    <label for="country_code">Country code:</label>
    <input type="text" pattern="[A-Za-z]{3}" />
    <input type="submit" />
  </form>
  ```

- `readonly`

  - Chỉ để đọc không thể sửa đổi trường đầu vào chỉ đọc (tuy nhiên, người dùng có thể gắn thẻ, đánh dấu và sao chép văn bản từ trường đó)

  ```html
  <form action="/action_page.php">
    <input type="text" value="abc" readonly />
    <input type="submit" />
  </form>
  ```

- `type`

  Dùng để chỉ định loại phần tử `<input>` để hiển thị

  Các giá trị của type:

  - button
  - checkbox
  - color
  - date
  - datetime-local
  - email
  - file
  - hidden
  - image
  - month
  - number
  - password
  - radio
  - range
  - reset
  - search
  - submit
  - tel
  - text
  - time
  - url
  - week

  ```html
  <input type="type_text" />
  ```

- `value`

  - Chỉ định giá trị của phần tử `<input>`

  ```html
  <form action="/action_page.php">
    <input type="text" value="country" />
  </form>
  ```

## 2. `<lable>`

- Dùng làm nhãn cho các element của form
- Thuộc tính `for`: phải bằng thuộc tính id của `<input>` để liên kết chúng với nhau

```html
<form action="/action_page.php">
  <label for="country_code">Country code:</label>
  <input type="text" id="country_code" />
  <input type="submit" />
</form>
```

## 3. `<select>`

- Danh sách thả xuống
- Chứa các `<option>` element
- Attribute `size` chỉ định số lượng giá trị hiển thị
- Attribute `multiple` cho phép chọn nhiều `option`

```html
<label for="cars">Choose a car:</label>
<select id="cars" name="cars" size="3" multiple>
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="fiat">Fiat</option>
  <option value="audi">Audi</option>
</select>
```

## 4. `<option>`

- Xác định một tùy chọn có thể được chọn
- Mặc định, mục đầu tiên trong danh sách thả xuống được chọn.
  - `selected`: dùng để xác định một tùy chọn đã chọn trước, thêm attribure
  - `value`: là giá trị nội dung của thẻ, được gửi khi submit `form`, nếu `value` trống thì nội dung của `<option>nội dung</option>` sẽ thay thế

## 5. `<textarea>`

- Xác định trường nhập nhiều dòng
- có 2 attribute là `rows` và `cols` để xác định chiều ngang chiều dọc
- có thể sử dụng css `width` và `height` để xác định chiều ngang chiều dọc

```html
<form action="#">
  <textarea cols="30" rows="10"></textarea>
</form>
```

## 5. `<fieldset>`

- Được sử dụng để nhóm các element trong một `form`.
- Thẻ `legend` dùng làm caption của fieldset
- Attribute `form` dùng để xác định `form` của các field trong `fieldset` thuộc về
- Attribute `disabled` dùng để vô hiệu hóa các element trong fieldset

```html
<fieldset>
  <legend>Personalia:</legend>
  <label for="fname">First name:</label>
  <input type="text" id="fname" name="fname" />
</fieldset>
```
