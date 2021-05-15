# HTML-FORM

1. Form Attributes
    - `action=""`: thuộc tính định nghĩa các hành động được thực hiện khi submit form.
    ```html
    <form action="/action_page.php">
        <label for="name">Name:</label><br>
        <input type="text" id="name" name="name" value="John Doe"><br><br>
        <input type="submit" value="Submit">
    </form>
    ```       
    - `target=""`: quy định nơi để hiển thị kết quả sau khi submit form.Mặc định target="_self".
        + `target="_self"`: có nghĩa là phản hồi sẽ mở trong cửa sổ hiện tại.
        + `target="_blank"`: có nghĩa là phản hồi sẽ mở trong cửa sổ khác.
        + `target="_parent"`: có nghĩa là phản hồi được hiển thị trong khung chính.
        + `target="_top"`: có nghĩa là phản hồi được hiển thị trong toàn bộ phần thân của cửa sổ.
         ```html
        <form action="/action_page.php" target="_blank">
            <label for="name">Name:</label><br>
            <input type="text" id="name" name="name" value="John Doe"><br><br>
            <input type="submit" value="Submit">
        </form> 
        ```
    - `method=""`: thuộc tính quy định phương thức HTTP được sử dụng khi submit form.
        + `method="get"`: dưới dạng biến URL. KHÔNG BAO GIỜ sử dụng GET để gửi dữ liệu nhạy cảm.
        + `method="post"`: dưới dạng HTTP.
        ```html 
        <form action="/action_page.php" method="get">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" value="John Doe">
            <input type="submit" value="Submit">
        </form>
        ``` 
    - `autocomplete=""`: dùng để hiển thị (on) hay không hiển thị (off) các giá trị đã được gửi đi trước đó.
    ```html
    <form action="/action_page.php" autocomplete="on">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" value="John Doe">
        <input type="submit" value="Submit">
    </form>
    ```
    - `novalidate` : được dùng để xác định rằng dữ liệu trong form không cần phải được xác nhận tính hợp lệ trước khi gửi.
    ```html
    <form action="/action_page.php" novalidate>
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required>
        <input type="submit" value="Submit">
    </form>
    ```
2.  Form Elements
    - `<input>`: xác định trường nhập 1 dòng văn bản.
    ```html
    <input type="text" id="name" name="name" value="John Doe">
    ```
    - `<label>`: xác định nhãn cho một số phần tử input.
    ```html
    <label for="name">Name:</label>
    ```
    - `<select>` - `<option>`: xác định danh sách thả xuống để chọn.
    ```html
    <select name="cars">
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="fiat">Fiat</option>
        <option value="audi">Audi</option>
    </select>
    ```
    - `<textarea>`: xác định trường nhập văn bản.
    ```html
    <textarea name="message" style="width:200px; height:600px;">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
    </textarea>
    ```
    - `<button>`: xác định một nút.
    ```html
    <button type="button">Click Me!</button>
    ```
3. Input Attributes
    - `value`: Thuộc tính đầu vào chỉ định giá trị ban đầu.
    ```html
    <input type="text" id="name" name="name" value="John">
    ```
    - `readonly`: Thuộc tính đầu vào chỉ định rằng trường đầu vào là chỉ đọc.
    ```html
    <input type="text" id="name" name="name" readonly>
    ```
    - `disabled`: Thuộc tính đầu vào chỉ định rằng một trường đầu vào nên bị vô hiệu hóa.
    ```html
    <input type="text" id="name" name="name" disabled>
    ```
    - `size`: Thuộc tính đầu vào chỉ định chiều rộng hiển thị, của trường đầu vào.
    ```html
    <input type="text" id="name" name="name" size="50">
    ```
    - `maxlength`: Thuộc tính đầu vào chỉ định số ký tự tối đa được phép trong một trường đầu vào.
    ```html
    <input type="text" id="pin" name="pin" maxlength="4" size="4">
    ```
    - `min` và `max`: Các thuộc tính chỉ định các giá trị tối thiểu và tối đa cho một trường đầu vào.
    ```html
    <input type="number" id="age" name="age" min= "0" max= "100">
    ```
    - `multiple`: Thuộc tính đầu vào chỉ định rằng người dùng được phép nhập nhiều hơn một giá trị vào một trường đầu vào.
    ```html
    <input type="file" id="files" name="files" multiple>
    ```
    - `pattern`: Thuộc tính đầu vào chỉ định một biểu thức chính quy mà giá trị của trường đầu vào được kiểm tra, khi biểu mẫu được gửi.
    ```html
    <input type="text" id="country_code" name="country_code" pattern="[A-Za-z]{3}" title="Three letter country code">
    ```
    - `placeholder`: Thuộc tính đầu vào chỉ định một gợi ý ngắn mô tả giá trị mong đợi của trường đầu vào.
    ```html
    <input type="text" id="name" name="name" pattern="[A-Za-z]{3}" placeholder="Enter name">
    ```
    - `required`: Thuộc tính đầu vào chỉ định rằng một trường đầu vào phải được điền trước khi gửi và kiểm tra dữ liệu có hợp lệ không.
    ```html
    <input type="text" id="name" name="name" required>
    ```
    - `autocomplete=""`: dùng để hiển thị (on) hay không hiển thị (off) các giá trị đã được gửi đi trước đó.
    ```html
    <input type="text" id="name" name="name"  autocomplete="off">
    ```
4. Input Types
    - `type="text"`: xác định trường nhập văn bản trên 1 dòng.
    ```html
    <input type="text" name="name">
    ```
    - `type="number"`: xác định trường nhập số.
    ```html
    <input type="number"  name="age">
    ```
    - `type="date"`: xác định trường nhập ngày tháng năm.
    ```html
    <input type="date" name="date">
    ```
    - `type="email"`: xác định trường nhập email.
    ```html
    <input type="email" name="email">
    ```
    - `type="file"`: xác định trường nhập file.
    ```html
    <input type="file" name="fileUpload">
    ```
    - `type="password"`: xác định trường nhập mật khẩu.
    ```html
    <input type="password" name="password">
    ```
    - `type="submit"`: xác định một nút để gửi dữ liệu biểu mẫu.
    ```html
    <input type="submit">
    ```
    - `type="radio"`: xác định một nút chọn radio.
    ```html
    <input type="radio" name="male">
    ```
    - `type="checkbox"`: xác định một nút chọn check box.
    ```html
    <input type="checkbox" name="male">
    ```
    - `type="range"`: xác định một thanh tiến độ.
    ```html
    <input type="range" name="vol" min="0" max="100">
    ```
5. Input form* Attributes
    - `formaction`: thuộc tính định nghĩa các hành động của input được thực hiện khi submit form. Thuộc tính này ghi đè thuộc tính action của form
    ```html
    <form action="/action_page.php">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name">
        <input type="submit" value="Submit">
        <input type="submit" formaction="/action_page2.php" value="Submit as Admin">
    </form>
    ```
    - `formmethod`: thuộc tính quy định phương thức HTTP được sử dụng khi submit form. Thuộc tính này ghi đè thuộc tính method của form.
    ```html
    <form action="/action_page.php" method="get">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name">
        <input type="submit" value="Submit using GET">
        <input type="submit" formmethod="post" value="Submit using POST">
    </form>
    ```
    - `formtarget`: quy định nơi để hiển thị kết quả sau khi submit form. Thuộc tính này ghi đè thuộc target của form.
    ```html
    <form action="/action_page.php">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name">
        <input type="submit" value="Submit">
        <input type="submit" formtarget="_blank" value="Submit to a new window/tab">
    </form>
    ```
    - `formnovalidate`: thuộc tính chỉ định rằng input không được kiểm tra tính hợp lý khi được gửi. Thuộc tính này ghi đè thuộc tính novalidate của form.
    ```html
    <form action="/action_page.php">
        <label for="email">Enter your email:</label>
        <input type="email" id="email" name="email"><br><br>
        <input type="submit" value="Submit">
        <input type="submit" formnovalidate="formnovalidate"
        value="Submit without validation">
    </form>
    ```