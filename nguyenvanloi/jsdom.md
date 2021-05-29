## `JS DOM`
- DOM là viết tắt của chữ Document Object Model, dịch tạm ra là mô hình các đối tượng trong tài liệu HTML. DOM được dùng để truy xuất và thao tác trên các tài liệu có cấu trúc dạng HTML hay XML bằng các ngôn ngữ lập trình thông dụng như Javascript, PHP…

    ![](https://topdev.vn/blog/wp-content/uploads/2021/01/dom-la-gi.gif)
- Các thể loại DOM trong Javascript:
    - DOM document: có nhiệm vụ lưu trữ toàn bộ các thành phần trong tài liệu của website
    - DOM element: có nhiệm vụ truy xuất tới thẻ HTML nào đó thông qua các thuộc tính như tên class, id, name của thẻ HTML
    - DOM HTML: có nhiệm vụ thay đổi giá trị nội dung và giá trị thuộc tính của các thẻ HTML
    - DOM CSS: có nhiệm vụ thay đổi các định dạng CSS của thẻ HTML
    - DOM Event: có nhiệm vụ gán các sự kiện như onclick(), onload() vào các thẻ HTML
    - DOM Listener: có nhiệm vụ lắng nghe các sự kiện tác động lên thẻ HTML đó
    - DOM Navigation dùng để quản lý, thao tác với các thẻ HTML, thể hiện mối quan hệ cha - con của các thẻ HTML
    - DOM Node, Nodelist: có nhiệm vụ thao tác với HTML thông qua đối tượng (Object)
### `DOM Element trong JS`
1. Tìm thẻ HTML theo ID:
- Để truy xuất tới một thẻ HTML theo ID ta sử dụng
    ```js
     var element = document.getElementById('idname');
    ```
    - [Ví dụ](https://freetuts.net/editor.html?id=284)
 2. Tìm thẻ HTML theo tên của thẻ HTML
- Tên thẻ HTML chính là tên các thẻ như `p`, `a`, `div`, ... Và ta sẽ truy xuất tới nó bằng cú pháp sau:   
    ```js
    var element = document.getElementsByTagName('tagname');
    ```
- Ví dụ:
    - Lấy thẻ input
    ```js
    var element = document.getElementsByTagName('input');
    ```
    - Lấy giá trị của thẻ input
    ```js
    document.write(element[0].value);
    ```
- Trong ví dụ trên có sự khác biệt đó là đoạn code element[0].value thì trong một trang web có thể có nhiều thẻ HTML giống nhau (ví dụ có hai thẻ div) nên hàm getElementsByTagName() sẽ trả về một mảng các object chứ không phải là một object nữa, chính vì vậy ta sẽ lấy input thứ nhất nên truyền số 0 vào.
3. Tìm thẻ HTML theo tên class
- Để tìm các thẻ HTML có class nào đó thì ta dùng cú pháp sau:
    ```js
    var element = document.getElementsByClassName('input');
    ```
- Tương tự như tìm theo tên thẻ HTML thì tìm theo tên class sẽ trả về một mảng các object nên phải sử dụng cú pháp truy xuất mảng để chọn đúng đối tượng muốn lấy.
    - [Ví dụ](https://freetuts.net/editor.html?id=286)
4. Tìm thẻ HTML theo cú pháp của Selector CSS
- Khi chọn các thẻ HTML theo class thường sẽ trả về hàng loạt các kết quả, như vậy đôi khi sẽ có những kết quả mà ta không mong đợi. Chính vì vậy javascript DOM có một phương thức kết hợp với CSS Selector để truy vấn có độ chính xác cao hơn.
- Và đây là cú pháp sử dụng:
    ```css
    var element = document.querySelectorAll("selector.css");
    ```
- Ví dụ: Làm thế nào có thể chọn đúng một thẻ input nằm trong thẻ div và có class="website"?
    ```html
    <html>
      <body>
        <input type="text" value="thẻ không cần lấy" class="website"/>
        <div>
            <input type="text" value="Thẻ Cần Lấy" class="website"/>
            <input type="text" value="thẻ không cần lấy"/>
        </div>
      </body>
    </html>
    ```
    - Ta có trong CSS để chọn thẻ input nằm trong thẻ div và có class="website" thì cú pháp là: 
        ```js 
        div input.website 
        ```
    - Suy ra:
        ```js
        var element = document.querySelectorAll("div input.website");
        ```
        [Demo](https://freetuts.net/editor.html?id=287)
### `DOM HTML trong JS`
1. Thay đổi và lấy nội dung bên trong thẻ HTML
- Để lấy nội dung bên trong một thẻ HTML thì chúng ta sử dụng cú pháp như sau:
    ```js
    var html = document.getElementById("content").innerHTML
    ```
- Và để thay đổi nội dung cho một thẻ HTML thì ta dùng cú pháp sau:
    ```js
    var html = document.getElementById("content").innerHTML = "<h1>Nội dung</h1>";
    ```
- Ví dụ: Trong ví dụ này ta sẽ viết chương trình thay đổi nội dung HTML của một thẻ DIV và lấy nội dung bên trong của một thẻ DIV
    [Demo](https://freetuts.net/editor.html?id=292)

2. Thay đổi và lấy giá trị thuộc tính thẻ HTML bằng Javascript
- Để thay đổi giá trị của một thuộc tính HTML bất kì thì ta sử dụng cú pháp sau:
    ```js
    document.getElementById("element").attributeName = "new value";
    ```
- Để lấy giá trị của một thuộc tính HTML ta sử dụng cú pháp sau:
    ```js
    var value = document.getElementById("element").attributeName;
    ```
- Giống với cách thay đổi và lấy nội dung bên trong thẻ HTML. Từ đây có thể suy ra rằng trong Javascript để thiết lập (set) và lấy (get) thì sử dụng chung một cú pháp, chỉ khác nhau ở chỗ gán bằng và không có gán bằng.

- Ví dụ: Xây dựng chương trình khi click vào một button thì chuyển nó thành textbox, và tiếp tục click vào textbox thì sẽ đổi thành button
    [Demo](https://freetuts.net/editor.html?id=293)

### `DOM CSS trong Javascript`
- Style bản chất nó cũng là một thuộc tính của các thẻ HTML nhưng bạn không thể sử dụng DOM HTML để thiết lập hay xóa bỏ CSS được mà phải thông qua một đối tượng biệt khác đó là `style`.
- Cú pháp thiết lập CSS bằng Javascript:
    ```js
    document.getElementById("object").style.cssName = 'something';
    ```
- Cú pháp lấy giá trị CSS bằng Javascript:
    ```js
    var value = document.getElementById("object").style.cssName;
    ```
- Trường hợp thuộc tính có dấu gạch ngang như: font-size, line-height, margin-bottom thì thuộc tính đó trong style sẽ có tên là fontSize, lineHeight, marginBottom ,nghĩa là sẽ bỏ đi dấu gạch ngang và viết hoa ký tự đầu tiên của chữ thứ hai.
- VD : 
    ```js
    document.getElementById("object").style.fontSize = 'something';
    ```
2. Ví dụ thay đổi CSS bằng Javascript
- Viết một chương trình gồm 4 buttons và 1 thẻ div, khi click vào từng button thì sẽ thiết lập màu sắc, background, chiều cao, font size của thẻ div.
-Ta phải sử dụng sự kiện trong javascript đó là onclick, mỗi khi click vào mỗi button sẽ giải quyết một vấn đề của bài toán.
    - Các bước thực hiện:
        -  Tạo 4 functions thực hiện 4 nhiệm vụ như đề bài yêu cầu
        - Gán mỗi function vào sự kiện onclick của mỗi button
        [Demo](https://freetuts.net/editor.html?id=294)
### `DOM Nodes trong Javascript`
1. DOM Node - document.createElement()
- Khi bạn sử dụng DOM Element để truy vấn tới một đối tượng HTML nào đó thì kết quả nó sẽ trả về một object và object đó ta gọi là DOM Nodes.
- Ví dụ ta tạo 1 node mới như sau :
    ```js   
    var p = document.createElement("p");
    ```
- Sau khi khởi tạo xong bạn hoàn toàn có thể sử dụng các phương thức, thuộc tính của DOM HTML, DOM CSS.
    ```js
    p.innerHTML = "Học DOM Nodes tại freetuts.net"
    ```
- Để thêm Node này vào trang web thì chúng ta sử dụng phương thức appendChild (sẽ học ở bên dưới). Giả sử tôi thêm vào thẻ body thì làm như sau:
    ```js
    document.getElementsByTagName('body')[0].appendChild(p);
    ```
    [Demo](https://freetuts.net/editor.html?id=314)
2. DOM Node - document.createTextNode()
- Text node là một node đặc biệt, nó không phải là một thẻ HTML thông thường mà chỉ là một chuỗi (string) nên thông thường chúng ta sử dụng nó để thay thế cách gán thông thường node.innerHTML.
    [Demo](https://freetuts.net/editor.html?id=319)
3. DOM Node - các phương thức khác
- Phương thức appendChild()
    - Dùng để thêm (bổ sung) vào vị trí cuối cùng của đối tượng một thẻ HTML nào đó. 
    [Demo](https://freetuts.net/editor.html?id=315)
- Phương thức insertBefore()
    - Được dùng để thêm một Node vào đằng trước một node con nào đó. Phương thức này có hai tham số truyền vào insertBefore(node_insert, node_child), trong đó:
        - node_insert là node bạn muốn thêm vào
        - node_child là node con mà bạn muốn thêm vào đằng trước nó.
    [Demo](https://freetuts.net/editor.html?id=316)
- Phương thức removeChild()
    - Được dùng để xóa một node con ra khỏi node hiện tại.
    [Demo](https://freetuts.net/editor.html?id=317)
- Phương thức replaceChild()
    - Dùng để replace (thay thế) một node con nào đó bằng một node khác mới hoàn toàn.
    [Demo](https://freetuts.net/editor.html?id=318)
### `Đối tượng this trong Javascript`
1. This trong Javascript là gì?
- Đối tượng this chính là đối tượng hiện tại đang được sử dụng hoặc đang truy cập tới. Ví dụ khi bạn viết một hành động cho sự kiện click thì nếu trong hành động đó có sử dụng this lúc này this chính là thẻ HTML mà ta click. 
    [Demo](https://freetuts.net/editor.html?id=303)
- Như vậy trong ví dụ này this chính là thẻ HTML mà chúng ta đang xử lý và đó chính là thẻ HTML có id="btn".
- Ví dụ: Truyền đối tượng this trong HTML
    ```html 
        <script language="javascript">
            function show_type(obj)
            {
                alert(obj.type);
            }
        </script>
        <input type="button" onclick="show_type(this)" value="Check" />
    ```
- Trong ví dụ này chúng ta truyền this ở dạng một tham số nên ở hàm xử lý show_type() tuy ta đặt tên tham số là obj nhưng bản chất nó chính là đối tượng this.
- Các Thuộc tính và Phương thức thường gặp

    - Thuộc tính: 

        - id: Định danh – là duy nhất cho mỗi phần tử nên thường được dùng để truy xuất DOM trực tiếp và nhanh chóng.
        - className: Tên lớp – Cũng dùng để truy xuất trực tiếp như id, nhưng 1 className có thể dùng cho nhiều phần tử.
        - tagName: Tên thẻ HTML.
        - innerHTML: Trả về mã HTML bên trong phần tử hiện tại. Đoạn mã HTML này là chuỗi kí tự chứa tất cả phần tử bên trong, bao gồm các nút phần tử và nút văn bản.
        - outerHTML: Trả về mã HTML của phần tử hiện tại. Nói cách khác, outerHTML = tagName + innerHTML.
        - textContent: Trả về 1 chuỗi kí tự chứa nội dung của tất cả nút văn bản bên trong phần tử hiện tại.
        - attributes: Tập các thuộc tính như id, name, class, href, title…
        - style: Tập các định dạng của phần tử hiện tại
        - value: Lấy giá trị của thành phần được chọn thành một biến.
    - Phương thức:

        - getElementById(id): Tham chiếu đến 1 nút duy nhất có thuộc tính id giống với id cần tìm.
        - getElementsByTagName(tagname): Tham chiếu đến tất cả các nút có thuộc tính tagName giống với tên thẻ cần tìm, hay hiểu đơn giản hơn là tìm tất cả các phần tử DOM mang thẻ HTML cùng loại. Nếu muốn truy xuất đến toàn bộ thẻ trong tài liệu HTML thì hãy sử dụng document.getElementsByTagName('*').
        - getElementsByName(name): Tham chiếu đến tất cả các nút có thuộc tính name cần tìm.
        - getAttribute(attributeName): Lấy giá trị của thuộc tính.
        - setAttribute(attributeName, value): Sửa giá trị của thuộc tính.
        - appendChild(node): Thêm 1 nút con vào nút hiện tại.
        - removeChild(node): Xóa 1 nút con khỏi nút hiện tại.
Mặt khác, các phần tử DOM đều là các nút trên cây cấu trúc DOM. Chúng sở hữu thêm các thuộc tính quan hệ để biểu diễn sự phụ thuộc giữa các nút với nhau. Nhờ các thuộc tính quan hệ này, chúng ta có thể truy xuất DOM gián tiếp dựa trên quan hệ và vị trí của các phần tử:

- Thuộc tính quan hệ:
    - parentNode: Nút cha
    - childNodes: Các nút con
    - firstChild: Nút con đầu tiên
    - lastChild: Nút con cuối cùng
    - nextSibling: Nút anh em liền kề sau
    - previousSibling: Nút anh em liền kề trước
## `JS BOM`
- BOM là chữ viết tắt của Browser Object Model, hay còn gọi là các đối tượng liên quan đến trình duyệt browser. Mỗi browser sẽ có những đối tượng khác nhau nên nó không có một chuẩn chung nào cả, tuy nhiên để có tính thống nhất giữa các trình duyệt thì người ta quy ước ra các loại BOM sau:
    - window
    - screen
    - location
    - history
    - navigator
    - popup
    - timing
    - cookies
- Trong các đối tượng DOM trên có phân cấp lẫn nhau và trong đó window là cấp cao nhất vì nó đại diện cho browser. Ví dụ khi bạn muốn truy cập tới document thì bạn sẽ viêt là window.document, tuy nhiên vẫn có cách ghi tắt là document, muốn truy cập tới cookie thì ta viết window.document.cookie (viết tắt document.cookie), ...
### `BOM - Window trong Javascript`
- Đối tượng Window có rất nhiều thuộc tính và phương thức riêng. Ví dụ đối tượng document là một thuộc tính của window (window.document), vì vậy nên ta có thể ví Window là một đối tượng toàn cục và ở đâu trong website cũng có thể sử dụng được.
1. Xác định kích thước của trình duyệt
- Để lấy kích thước chiều cao và chiều rộng của trình duyệt thì chúng ta sử dụng đối tượng window, tuy nhiên với mỗi trình duyệt thì có những cách lấy khác nhau.
- Đối với Internet Explorer, Chrome, Firefox, Opera, và Safari thì cú pháp như sau:
    - lấy chiều cao
    ```js
    var heightBrowser = window.innerHeight;
    ```
    - lấy chiều rộng
    ```js
    var widthBrowser = window.innerWidth;
    ```
- Đối với Internet Explorer các version 5,6,7,8 thì cú pháp như sau:
    - Lấy chiều cao
    ```js
    var height = document.body.clientHeight;
    ```
    - Lấy chiều rộng
    ```js
    var width = document.body.clientWidth;
    ```
- Và để tương thích trình duyệt dễ dàng hơn thì :
    [Demo](https://freetuts.net/editor.html?id=320)
2. Thao tác với một cửa sổ window
- Đối tượng window cung cấp một số phương thức giúp thao tác với trình duyệt dễ dàng hơn.
- Mở một cưa sổ với lệnh window.open()
    - Cú pháp: `window.open(url, name, options)`
    - Trong đó:
        - url : là đường dẫn website bạn muốn mở
        - name: là tên bạn đặt cho cửa sổ này
        - options: là một chuỗi các thông số được cách nhau bởi dấu phẩy, sau đây là các thông số thông dụng:
        - height=pixels : chiều cao của cửa sổ
        - width=pixels: chiều rộng của cửa sổ
        - top=pixels: vị trí hiển thị cửa sổ so với lề trên
        - left=pixels: vị trí hiển thị cửa sổ so với lề trái
        - menubar=yes|no|1|0: có hiển thị thanh menu hay không?
        - resizable=yes|no|1|0: có hiển thị biểu tượng resize cửa sổ hay không?
        - scrollbars=yes|no|1|0: có hiển thị thanh cuộn hay không?
        - status=yes|no|1|0: có hiển thị thanh trạng thái hay không?
        - titlebar=yes|no|1|0: có hiển thị titlebar hay không?
        - toolbar=yes|no|1|0: có hiển thị toolbar hay không?
        - fullscreen=yes|no|1|0: có hiển thị biểu tượng fullscreen hay không?
            [Demo](https://freetuts.net/editor.html?id=321)
- Đóng một cửa số với lệnh window.close()
    - Sau khi mở cửa sổ thì để đóng cửa sổ đó chúng ta sử dụng lệnh windowObj.close(), trong đó windowObj là cửa sổ mà ta sử dụng lệnh window.open() tạo ra.
        [Demo](https://freetuts.net/editor.html?id=322)
- Di chuyển cửa sổ với lệnh window.moveTo()
    - Sau khi mở một cửa sổ nếu muốn di chuyển nó thì ta dùng lệnh windowObj.moveTo(top, left), trong đó:
        - top: là số pixels so với lề trên
        - left: là số pixels so với lề trái 
```html
    <html>
        <body>
        <script language="javascript">
            
            var windowChild = null;
            
            function openWindow()
            {
                windowChild = window.open('https://freetuts.net', "windowChild", "width=500, height=500");
                return false;
            }
            
            function moveWindow()
            {
                windowChild.moveTo(500, 100);
                windowChild.focus();
                return false;
            }
        </script>
        <a href="#" onclick="return openWindow()">Open</a>
        <a href="#" onclick="return moveWindow()">Move</a>
        </body>
    </html>
```
- Resize cửa sổ với lệnh window.resizeTo()
    - Lúc mở cửa sổ bạn sẽ thiết lập height và with cho window, tuy nhiên nếu sau khi mở bạn muốn thay đổi thì sử dụng hàm windowObj.resizeTo(width, height), trong đó:
         - width: chiều rộng của cửa sổ
         - eight: chiều cao của cửa sổ
### `BOM - Location điều hướng và xử lý URL trong Javascript`
1. Location trong Javascript
- Location là một thuộc tính của đối tượng window nên khi sử dụng nó bạn phải thông qua đối tượng window và đối tượng window luôn tồn tại trong các trình duyệt hiện nay nên bạn hoàn toàn yên tâm khi sử dụng mà không cần phải khai báo.
    ```js
        window.location
    ```
2. Các phương thức của Location
- Có ba phương thức chính nằm trong đối tượng location đó là reload(), replace() và assign().

- window.location.reload(url) - tải lại trang web
    - Thông thường để tại lại trang web bạn sẽ nhấn phím F5 hoặc là clich chuột phải và chọn Refresh page, tuy nhiên nếu bạn refresh bằng Javascript thì vẫn được bằng cách sử dụng phương thức reload().
    [Demo](https://freetuts.net/editor.html?id=323)
- window.location.replace(urr) - ghi đè trang web
    - Phương thức này ít khi sử dụng mà thay vào đó họ sử dụng cú pháp window.location.href="url". Tuy nhiên hai cách này vẫn có sự khác biệt:
        - Đối với replace() thì trình duyệt sẽ KHÔNG đưa vào lịch sử.
        - Đối với location.href thì trình duyệt sẽ CÓ đưa vào lịch sử 
        [Demo](https://freetuts.net/editor.html?id=324)
- window.location.assign(url) - load một trang mới
    - Về công dụng vẫn không có gì khác với hai cách trên, tuy nhiên cách này nó có đặc điểm giống với location.href.
        [Demo](https://freetuts.net/editor.html?id=325)
3. Các thuộc tính của Location
- Ngoài các phương thức trên thì bạn có thể sử dụng Location để xử lý các thành phần liên quan đến URL như lấy phần hash, lấy phần search. 
- Và đây là danh sách các thuộc tính đầy đủ cho đối tượng location này:

    - hash: thiết lập hoặc lấy phần sau dấu # của URL
    - host: thiết lập hoặc lấy hostname và port number của URL
    - hostname: thiết lập hoặc lấy hostname
    - href: thiết lập hoặc lấy URL
    - origin: trả về protocal, hostname và port number của URL
    - pathname: thiết lập hoặc lấy path name của URL
    - port: thiết lập hoặc lấy port của URL
    - search: lấy phần query string của URL
    [Demo](https://freetuts.net/editor.html?id=326)
### `BOM - History trong Javascript`
1. History trong Javascript
- Khi bạn lướt web thì trình duyệt sẽ lưu lại lịch sử lướt web của bạn và dựa vào lịch sử đó chúng ta có thể xem lại những ngày trước đã xem gì, và vấn đề này trình duyệt đã hỗ trợ cho chúng ta rồi (back, forward, clear history). Nhưng nếu bạn có nhu cầu cần sử dụng Javascript để xử lý thì vẫn có một số phương thức và thuộc tính nằm trong đối tượng History có thể giúp giải quyết vấn đề này.
- Cũng như `location`, `history` cũng là một thành phần con của window nên chúng ta phải thông qua đối tượng window để thao tác với history.
    ```js
        window.history
    ```
- Đếm tổng số trang đã lưu trong history
    - Nếu bạn muốn đếm tổng số trang đã lưu trong lịch sử lướt web thì:
        ```js
        var totalPage = window.history.length;
        ```
        [Demo](https://freetuts.net/editor.html?id=327)
- Đi tới một trang nào đó trong history
    - Chúng ta có ba phương thức thường dùng để đến một trang trong history:
        - history.back() : trở lại trang trước
        - history.forward() : đi tới trang kế tiếp
        - history.go(number): đi tới một trang:
        - nếu number âm thì tính từ trang hiện tại trừ đi number
        - nếu number dương thì tính từ trang hiện tại cộng với number
    - Ví dụ: trở lại trang trước
        ```js
        window.history.back();
        ```

    - Đi tới trang kế tiếp sau khi sử dụng back()
        ```js
        window.history.forward()
        ```
    - Đi tới trang cách đây 5 lần lướt web
        ```js
        window.history.go(-5);
        ```
- `BOM - Cookie trong Javascript`
1. Cookie là gì?
- Cookie là dữ liệu được lưu trữ trong một file text và nằm trong máy tính nên việc lưu trữ Cookie sẽ là vĩnh viễn hoặc là một thời gian cụ thể do bạn thiết lập. Tuy nhiên mỗi domain sẽ có một dung lượng Cookie tối đa có thể lưu trữ được nên hãy lưu ý trường hợp dữ liệu quá lớn.
- Cookie được lưu trữ ở dạng name=value, ví dụ:
    ```js
        website=freetuts.net
    ```
2. Các thao tác với Cookie trong Javascript
- Javascript có thể đọc, thêm và xóa Cookie thông qua đối tượng BOM `document.cookie.
- Tạo Cookie:
    ```js
    document.cookie = 'website=freetuts.net';
    ```
- Trường hợp bạn muốn lưu trữ nhiều Cookie thì chỉ việc tạo nhiều lần.
- Để thiết lập thời gian sống cho Cookie thì ta sử dụng từ khóa expires cấu trúc của chuỗi này là thời gian ở dạng UTC.
    ```js
    document.cookie="website=freetuts.net; expires=Thu, 0 Dec 2015 12:00:00 UTC";
    ```
- Theo mặc định thì khi bạn ở trang nào thì Cookie sẽ lưu với đường dẫn trang đó. Tuy nhiên nếu bạn muốn thay đổi đường dẫn thì sử dụng từ khóa path.
    - Ví dụ: Path là trang chủ
    ```js
    document.cookie="website=freetuts.net; expires=Thu, 0 Dec 2015 12:00:00 UTC;path=\";
    ```
- Lấy giá trị Cookie
    - Để lấy danh sách các Cookie thì ta sử dụng cú pháp như sau:
    ```js
     var giatri = document.cookie;
    ```
- Thay đổi giá trị của cookie
    - Để thay đổi cookie thực ra chỉ là các bạn tạo mới một cookie có cùng name với cookie các bạn muốn thay đổi.
    - VD: Mình sẽ thay đổi cookie giá trị của cookie name thành toidicode.com.
    ```js
    document.cookie = 'name=toidicode.com; expires=Thu, 22 Dec 2017 19:55:20 UTC';

    ```
- Xóa Cookie
    - Trong Javascript không có hàm xóa Cookie mà bạn phải sử dụng từ khóa `expires` để thiết lập thời gian sống cho Cookie là khoảng thời gian đã qua. Ví dụ hôm nay là ngày `8/11/2015` thì bạn chỉ việc gán `expires` là `7/8/2015` là đã xóa được Cookie đó.
    ```js
    document.cookie = 'name=toidicode.com; expires=Thu, 7 Aug 2015 19:55:20 UTC';
    ```
### `BOM - Window Navigator trong Javascript`
Đối tượng Window Navigator trong Javascript được dùng để kiểm tra các thông tin về người dùng như trình duyệt đang sư dụng là gì? hệ điều hành đang sử dụng là gì? Trình duyệt có bật Cookie hay không? hay thậm chí có thể kiểm tra được tên và version của Browser.
1. Kiểm tra Cookie có được bật không?
- Để kiểm tra trình duyệt có bật Cookie hay không thì ta sử dụng thuộc tính `navigator.cookieEnabled`.
    [Demo](https://freetuts.net/editor.html?id=329)
2. Kiểm tra tên trình duyệt đang sử dụng
- Để kiểm tra tên trình duyệt thì ta dùng thuộc tính navigator.appName và thuộc tính navigator.appCodeName dùng để kiểm tra tên mã code của trình duyệt.
    [Demo](https://freetuts.net/editor.html?id=330)
3. Kiểm tra Engine của trình duyệt
- Để kiểm tra Engine của trình duyệt ta sử dụng thuộc tính `navigator.product`.
    [Demo](https://freetuts.net/editor.html?id=331)
4. Kiểm tra Vesion của trình duyệt
- Để kiểm tra Version của trình duyệt ta sử dụng thuộc tính `navigator.appVersion` hoặc `navigator.userAgent`.
    [Demo](https://freetuts.net/editor.html?id=332)
5. Kiểm tra hệ điều hành của Client
- Javascript cũng có thể xem hệ điều hành mà người dùng đang sử dụng bằng cách sử dụng thuộc tính navigator.platform.
    [Demo](https://freetuts.net/editor.html?id=333)
6. Kiểm tra ngôn ngữ của trình duyệt
- Mỗi trình duyệt có thể lựa chọn ngôn ngữ khác nhau và ta có thể kiểm tra bằng phương thức navigator.language.
    [Demo](https://freetuts.net/editor.html?id=334)
### `BOM - Screen trong Javascript`
Đây là đối tượng chứa thông tin về màn hình của trình duyệt người dùng.
1. Lấy width và height của màn hình
- Chúng ta sử dụng thuộc tính `screen.width` để lấy chiều rộng và screen.height để lấy chiều cao của màn hình, kết quả sẽ trả về định dạng Pixels.
    [Demo](https://freetuts.net/editor.html?id=335)
- Ngoài ra để lấy chiều rộng và chiều cao mà không tính các tools tính năng của trình duyệt thì bạn sử dụng `screen.availWidth` và `screen.availHeight`.
    [Demo](https://freetuts.net/editor.html?id=336)
2. lấy Color Depth của screen
    ```js
    document.write("Color Depth: " + screen.colorDepth);
    ```
3. Lấy số Pixel depth của screen
    ```js
    document.write("Pixel Depth: " + screen.pixelDepth);
    ```
### `Đối tượng (object) trong Javascript`
- Trong Javascript đối tượng là một khái niệm trừu tượng thể hiện cho một đối tượng cụ thể và nó có sẵn một số đối tượng như Date, Number. Ngoài các đối tượng này thì lập trình viên có thể tự tạo một đối tượng theo ý của mình dựa vào yêu cầu của ứng dụng. Ví dụ mình cần tạo ra một đối tượng chuyên xử lý vấn đề về bình luận cho trang tin tức thì mình sẽ tạo một đối tượng Comment.
- Khởi tạo đối tượng
    - Cách 1: Sử dụng từ khóa new Object()
        ```js
        var Comment = new Object();
        ```
    - Cách 2: Sử dụng từ khóa {}
        ```js
        var Comment = {};
        ```
- vd:
    ```js
    var myInfo = {
        name: 'Loi',
        age: '18',
        addres:'Hue'
    };
    ```
- Trong đó key là `name` và value là `Loi`
- Muốn thêm key 
    ```js
    myInfo.email = 'Van';
    ```
- Muốn lấy value ra của name
    ```js
    console.log(myInfo.name);
    ```
- Muốn xoá
    ```js
    delete.myInfo.address;
    ```
    ```js
    //Object trong JavaScript
    var key='So nha' // them thuoc tinh / property
    var myInfo = {
        name:'loi',
        age:'18',
        address:'HUE',
        [key]:'290',
        getname: function(){ // them phuong thuc / method
            return this.name;
        }
    }
    console.log(myInfo.getname());
    ```
- Có thể lưu trữ value là 1 function 
    ```js
    getname: function() { // goi la phuong thuc / Function
        return this.name; // this nó là biến myInfo
    } // con lai la thuoc tinh / property
    ```
    ```js
    //Object constructor ( xay dung doi tuong)
    function User(fistName, lastName, avatar){
            this.fistName = fistName;
            this.lastName = lastName;
            this.avatar = avatar;
            this.getname= function(){
                return `${fistName} ${lastName}`
            }
    }
    var author = new User('Loi', 'Nguyen', 'avatar1');
    var user = new User('Mr', 'Bin', 'avatar2');
    author.email = 'thi@edu.vn'
    user.email = 'loi@edu.vn'
    console.log(author.getname())
    console.log(user.getname())

    //Object prototype (Doi tuong nguyen mau) - Basic
    // Neu noi contructor la mot ban ve thi prototype la vat lieu
    function Admin(Like,Cmt,Share){
            this.Like = Like;
            this.Cmt = Cmt;
            this.Share = Share;
    }
    // them bang thuoc tinh (nam ngoai ham function)
    Admin.prototype.email = 'nguyenvan@huse.edu.vn'
    // them bang phuong thuc
    Admin.prototype.getName = function() { 
            return this.email; 
    }
    var admin1 = new Admin('L', 'O', 'I')
    var admin2 = new Admin('L', 'I', 'N')

    console.log(admin1.getName()) // this se thanh admin1 trỏ vào email ở trên được gán 'nguyenvan@huse.edu.vn'
    console.log(admin2)
    ```
### `Tìm hiểu JavaScript Hoisting`
Hoisting là vấn đề liên quan đến cách khai báo biến trong Javascript. Nó liên quan đến việc trong Javascript bạn có thể sử dụng một biến mà không cần phải định nghĩa trước, vì vậy để chương trình chạy chuẩn thì bạn phải khai báo biến trước khi sử dụng và đặt nó phía trên cùng phạm vi của biến (trong function, trong đoạn script, ...).
1. Hoisted trong Javascript
Trong Javascript bạn có thể định nghĩa một biến sau khi sử dụng nó, hay nói cách khác một biến có thể được sử dụng trước và định nghĩa sau.
    ```js
    // Gán nhưng chưa khai báo biến
    domain = 'https://freetuts.net';
    
    // In giá trị
    document.write("Domain là: " + domain);
    
    // Khai báo
    var domain;
    
    // In lại
    document.write("<br/> Domain là: " + domain);

    ```
    [Demo](https://freetuts.net/editor.html?id=410)
- Nếu trong lúc khởi tạo mà bạn gán giá trị cho biến thì kết quả sẽ khác
    [Demo](https://freetuts.net/editor.html?id=408)
- Nhưng nếu viết cách khai báo biến trước khi sử dụng thì ta vẫn có kết quả giống nhau.
    ```js
    // Khai báo
    var domain;
    
    // Gán nhưng chưa khai báo biến
    domain = 'https://freetuts.net';
    
    // In giá trị
    document.write("Domain là: " + domain);
    
    // In lại
    document.write("<br/> Domain là: " + domain);
    ```
    - Và đây chính là cách chuẩn nhất nên viết và ta gọi là hoisting, tức là khai báo biến nằm trên cùng của đoạn mã script.
    [Demo](https://freetuts.net/editor.html?id=407)
2. Không phải hoisted trong Javascript
- Trong Javascript hoists chỉ tồn tại khi bạn khai báo biến chứ không tồn tại khi gán giá trị ban đầu cho biến, nghĩa là bạn có thể gán thoải mái và nó không liên quan đến việc dễ debug hay không, miễn là cứ khai báo ở trên top.
    - Trong ví dụ này ta khai báo và gán giá trị khởi tạo luôn.
    ```js
    var domain = 'https://freetuts.net';
    var email = 'thehalfheart@gail.com';
    
    document.write("Domain là: " + domain);
    document.write("<br/> Email là: " + email);
    ```
    [Demo](https://freetuts.net/editor.html?id=409)
    - Trong ví dụ này ta sử dung rồi mới khai báo, lúc này chương trình chưa hiểu biến email là gì, vì vậy nó sẽ in ra là undefined.
    ```js
    var domain = 'https://freetuts.net';
 
    document.write("Domain là: " + domain);
    
    document.write("<br/> Email là: " + email);
    
    var email = 'thehalfheart@gail.com';
    ```
    [Demo](https://freetuts.net/editor.html?id=410)









    
















