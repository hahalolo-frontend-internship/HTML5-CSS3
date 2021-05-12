# HTML5-CSS3

# Form Attributes

## 1. action

- Xác định hành động sẽ được thực hiện khi biểu mẫu được gửi.

```html
<form action="index.html"></form>
```

## 2. target

- Chỉ định nơi hiển thị phản hồi nhận được sau khi gửi biểu mẫu.
- Các giá trị của target:

  - \_blank: Khi submit hay nhấn vào link nó sẽ chuyển link đó sang tab mới của trình duyệt.
  - \_top: Tương tự \_blank nhưng nó mở link ngay tab hiện tại
  - \_self: Tương tự \_blank nhưng nó mở link ngay tab hiện tại ở khung chứa nó
  - \_parent: Tương tự như \_self nhưng nó mở link ở phần cha chứa nó
  - framename: Trang được liên kết sẽ mở ra trong khung được đặt tên

```html
<form action="index.html" target="_blank"></form>
```

## 3. method

- Chỉ định phương thức HTTP sẽ được sử dụng khi gửi dữ liệu biểu mẫu.
- các giá trị của method: get và post

  - get: các thông tin trong form sẽ mô tả bởi URL và nhìn vào thanh địa chỉ trình duyệt sẽ thấy thông tin. Nên những dữ liệu nhạy cảm sẽ không sử dụng nó, độ dài của URL bị giới hạn (2048 ký tự)
  - post: Sẽ không nhìn thấy dữ liệu biểu diễn qua URL như thế này mà dữ liệu sẽ được ẩn.

```html
<form action="index.html" method="get" target="_blank"></form>
```

## 4. autocomplete

- Khi bật tính năng tự động hoàn thành, trình duyệt sẽ tự động hoàn thành các giá trị dựa trên các giá trị mà người dùng đã nhập trước đó.

- Có 2 giá trị là on và off

```html
<form action="index.html" method="get" autocomplete></form>
```

## 5. novalidate

- Khi bật tính năng novalidate thì khi submit dữ liệu sẽ không được validate

```html
<form action="index.html" method="get" novalidate></form>
```

## 6. name

```html
<form action="index.html" method="get" name="form1"></form>
```

- Chỉ định tên của một biểu mẫu.
- Sử dụng để tham chiếu các phần tử trong JavaScript hoặc để tham chiếu dữ liệu biểu mẫu sau khi biểu mẫu được gửi.

## 7. enctype

- Chỉ dùng cho method post
- Chỉ định cách dữ liệu biểu mẫu được mã hóa khi gửi đến máy chủ.
- Có 3 giá trị:

  - text/plain: gửi dữ liệu nhưng không được mã hóa
  - multipart/form-data: giá trị này là cần thiết nếu tải tệp lên thông qua form
  - application/x-www-form-urlencoded: đây là giá trị mặc định, tất cả các ký tự đều được mã hóa (dấu space sẽ được mã hóa thành dấu +) và các ký tự đặc biệt được chuyển đổi thành giá trị ASCII HEX.

# Form element

## 1. input Attributes

### a. accept

- Thuộc tính `accept` chỉ có thể được sử dụng với `<input type = "file">`.
- Chỉ định những loại tệp mà người dùng có thể chọn từ hộp thoại nhập tệp.
- các value như: `audio/*` , `video/*` , `image/*`, `file_extension` (gif, .jpg, doc,...),

```html
<form action="#" id="form1">
  <input type="file" id="img" name="img" accept="image/*" />
</form>
```

### b. autocomplete

- Tương tự như của form

```html
<form action="#" id="form1">
  <input type="text" autocomplete />
</form>
```

### c. autofocus

- Chỉ định một element `<input>` sẽ tự động focus khi tải trang

```html
<form action="#" id="form1">
  <input type="text" autofocus />
</form>
```

### d. checked

- Chỉ định rằng một element `<input>` nên được chọn trước khi tải trang
- Nó có thể được sử dụng với `<input type = "checkbox">` và `<input type = "radio">` .

```html
<form action="/action_page.php">
  <input type="checkbox" checked />
  <input type="submit" value="Submit" />
</form>
```

### f. disabled

- Vô hiệu hóa thẻ `input` đó

```html
<form action="#" id="form1">
  <input type="text" disabled />
</form>
```

### g. form

- Chỉ định `form` mà phần tử `<input>` thuộc về thông qua `id` của `form` đó.

```html
<form action="#" id="form1"><input type="text" " /></form>
<input type="text" form="form1" />
```

### h. max - min

- Chỉ định giá trị lớn nhất và nhỏ nhất cho phần tử `<input>`
- Chỉ sử dụng với các type: number, range, date, datetime-local, month, time and week.

```html
<form action="/action_page.php">
  <label for="quantity">Quantity (between 1 and 5):</label>
  <input type="number" min="1" max="5" /><br />
  <input type="submit" />
</form>
```

### i. maxlength - minlength

- chỉ định số ký tự tối đa và tối thiểu được phép trong phần tử `<input>`.

```html
<form action="/action_page.php">
  <label for="username">Username:</label>
  <input type="text" minlength="1" maxlength="10" /><br />
  <input type="submit" value="Submit" />
</form>
```

### j. multiple

- Hoạt động với các loại đầu vào sau: email và tệp
- Chỉ định rằng người dùng được phép nhập nhiều hơn một giá trị vào phần tử `<input>`.

```html
<form action="/action_page.php">
  <label for="files">Select files:</label>
  <input type="file" id="files" name="files" multiple />
  <input type="submit" />
</form>
```

### k. pattern

- Chỉ định một biểu thức chính quy mà giá trị của phần tử `<input>` được kiểm tra khi gửi biểu mẫu.
- Chỉ hoạt động với: văn bản, ngày tháng, tìm kiếm, url, số điện thoại, email và mật khẩu.

```html
<form action="/action_page.php">
  <label for="country_code">Country code:</label>
  <input type="text" pattern="[A-Za-z]{3}" />
  <input type="submit" />
</form>
```

### l. readonly

- Chỉ để đọc không thể sửa đổi trường đầu vào chỉ đọc (tuy nhiên, người dùng có thể gắn thẻ, đánh dấu và sao chép văn bản từ trường đó)

```html
<form action="/action_page.php">
  <input type="text" value="abc" readonly />
  <input type="submit" />
</form>
```

### m. type

- Dùng để chỉ định loại phần tử `<input>` để hiển thị
- Các giá trị của type
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
<input type="url" />
```

### n. value

- Chỉ định giá trị của phần tử `<input>`

```html
<form action="/action_page.php">
  <input type="text" value="country" />
</form>
```

## 2. lable element

- Dùng làm nhãn cho các element của form
- Attribute `for`: phải bằng thuộc tính id của element `<input>` để liên kết chúng với nhau

```html
<form action="/action_page.php">
  <label for="country_code">Country code:</label>
  <input type="text" id="country_code" />
  <input type="submit" />
</form>
```

## 3. select element

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

## 4. option element

- Xác định một tùy chọn có thể được chọn
- Mặc định, mục đầu tiên trong danh sách thả xuống được chọn.
- Để xác định một tùy chọn đã chọn trước, thêm attribure `selected` vào `<option>`
- attribute `value` nội dung của `value` sẽ được gửi khi submit `form`, nếu `value` trống thì nội dung của `<option>nội dung</option>` sẽ thay thế

## 5. textarea element

- Xác định trường nhập nhiều dòng
- có 2 attribute là `rows` và `cols` để xác định chiều ngang chiều dọc
- có thể sử dụng css `width` và `height` để xác định chiều ngang chiều dọc

```html
<form action="#" multiple>
  <textarea cols="30" rows="10"></textarea>
</form>
```

## 6. fieldset element

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
