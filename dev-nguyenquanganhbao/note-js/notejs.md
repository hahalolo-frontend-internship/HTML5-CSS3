# JavaScript Basic

1. Biến
   - Giống như nhiều ngôn ngữ lập trình khác, JavaScript có các biến. Biến có thể được xem là một nơi chứa được đặt tên. Có thể đặt dữ liệu vào trong nơi chứa này và sau đó tham chiếu đến dữ liệu này một cách đơn giản là đặt tên cho nơi chứa.
   - Biến được khai báo với từ khóa `var` như sau:
    ```html
    <script type="text/javascript">
        var name;
    </script>
    ```
    - JavaScript là ngôn ngữ `untyped`. Nghĩa là một biến JavaScript có thể giữ một giá trị của bất kỳ kiểu dữ liệu nào.
    - Đặt tên biến:
        + Không nên sử dụng bất kỳ từ khóa dành riêng (if, else, true, false,...)
        + Tên biến không bắt đầu với các số. Mà phải bắt đầu với một chữ cái hoặc ký tự dấu gạch dưới. 
        ```
        Ví dụ: 123test là tên biến không hợp lệ, _123test là hợp lệ.
        ```
    - Phạm vi biến:
        + `Biến Global`: một biến Global có phạm vi chung, nghĩa là nó có thể được định nghĩa bất cứ đâu trong code JavaScript.
        + `Biến Local`: một biến Local sẽ chỉ nhìn thấy trong một hàm, nơi nó được định nghĩa. Các tham số hàm luôn luôn là nội bộ cho hàm đó.
    ```html
    <script>
        var tong = 0;
        function myFunction(a, b){
            tong = a + b;
            var hieu = a - b;
            return tong;
        } 
        console.log(tong);
        console.log(hieu); //lỗi
    </script>
    ```
2. Toán tử
    - Toán tử số học:
        + `+` (Phép cộng)
        + `-` (Phép trừ)
        + `*` (Phép nhân)
        + `/` (Phép chia lấy nguyên)
        + `%` (Phép chi lấy dư)
        + `++` (Tăng lên 1)
        + `--` (Giảm lui 1)
    - Toán tử so sánh:
        + `==`: Kiểm tra nếu giá trị của hai toán hạng nếu bằng nhau trả về true.
        + `!=`: Kiểm tra nếu giá trị của hai toán hạng nếu không bằng trả về true.
        + `>`: Kiểm tra nếu giá trị của toán hạng trái lớn hơn toán hạng phải trả về true.
        + `<`: Kiểm tra nếu giá trị của toán hạng trái nhỏ hơn toán hạng phải trả về true. 
        + `>=`: Kiểm tra nếu giá trị của toán hạng trái lớn hơn hoặc bằng toán hạng phải trả về true.
        + `<=`: Kiểm tra nếu giá trị của toán hạng trái nhỏ hơn hoặc bằng toán hạng phải trả về true. 
    - Toán tử logic:
        + `&&`: Nếu cả hai toán hạng là đúng, thì điều kiện trở thành true.
        + `||`: Nếu một trong hai toán hạng là đúng, thì điều kiện trở thành true.
        + `!`: Đảo ngược trạng thái của toán hạng.
    - Toán tử gán:
        + `=`: a = 2
        + `+=`: a+=b => (a=a+b)
        + `-=`: a-=b => (a=a-b)
        + `*=`: a*=b => (a=a*b)
        + `/=`: a/=b => (a=a/b)
    - Toán tử hỗn hợp:
        + `(Điều kiện) ? true : false`
3. Câu lệnh rẽ nhánh
    - `if else`: Có thể dựa vào kết quả trả về để xử lý cả hai trường hợp đúng hoặc sai của điều kiện.
    ![imgif](https://niithanoi.edu.vn/pic/Product/images/tutorials/so-do-hoat-dong-cua-cau-lenh-if-else-trong-js.jpg)
    ```js
    if (9 < 10) {
        console.log("Chín nhỏ hơn mười!");
    }else{
        console.log("Chín lớn hơn mười!");
    }
    ```
    - `switch case`: Câu lệnh switch case cũng thuộc loại câu lệnh rẽ nhánh như câu lệnh if else nhưng nó sẽ thực hiện các hành động dựa trên một loạt các điều kiện khác nhau.
    ![imgswitch](https://niithanoi.edu.vn/pic/Product/images/tutorials/so-do-hoat-dong-cua-cau-lenh-switch-case-trong-js.jpg)
    ```js
    let x = parseInt(prompt("Vui lòng chọn số 1: Đồng ý | số 2: Không đồng ý"));

        switch (x) {
        case 1:
            console.log("Bạn đã đồng ý");
            break;
        case 2:
            console.log("Bạn chọn không đồng ý");
            break;
        default:
            console.log("Bạn chưa chọn gì cả");
            break;
        }
    ```
    - Trong câu lệnh `switch case`, nếu bạn bỏ qua từ khóa `break`, chương trình sẽ tiếp tục thực thi câu lệnh tiếp theo, cho dù case đó không thoả điều kiện.
5. Vòng lặp
    - While
        + Cú pháp:
        ```js
        while (condition){
        // do something
        }
        ```
        + Trong đó condition là điều kiện dừng vòng lặp, nếu condition đúng thì vòng lặp sẽ được thực thi cho tới khi condition có giá trị sai. Chính vì vậy nếu condition luôn luôn đúng thì vòng lặp sẽ dẫn tới lặp vô hạn.
        ```js
        var i = 1;
            while (i <= 10){
                console.log(i);
                i++;
            }
        ```
    - Do while
        + Cú pháp:
        ```js
        do {
            // some thing
        }
        while (condition);
        ```
        + Trong đó condition là điều kiện để dừng vòng lặp.
        ```js
        var i = 1;
        do {
            console.log(i);
            i++;
        }
        while (i <= 10);
        ```
    - For
        + Cú pháp:
        ```js
        for (let i = 0; i < 10; i++){
            // some thing
        }
        ```
        + Trong đó 
            + `(i = 0)` là điểm bắt đầu lặp.
            + `(i < 100)` là điều kiện dừng vòng lặp.
            + `(i++)` là tăng bước nhảy.
        ```js
        for (let i = 0; i <= 10; i++) {
            console.log(i);
        }
        ```
6. Function
    - Hàm là một tập hợp gồm nhiều câu lệnh, các câu lệnh này được sắp xếp theo một thứ tự xác định để xây dựng thành một chức năng cụ thể. Mỗi hàm sẽ có một cái tên và hàm chỉ thực thi khi nó được gọi.
    ```js
    function tinhTong(a, b){
        console.log( a+b);
    }
    tinhTong(2, 4);
    ```
7. String


    - Các phương thức
        + Phương thức `length` xác định độ dài của chuỗi.
        ```js
            var str = "Hello";
            console.log(str.length); //5
        ```
        + Phương thức `indexOf()` tìm kiếm từ trong chuỗi, xác định vị trí của từ cần tìm nếu tìm thấy trả về vị trí nếu không có trả về giá trị -1.
        ```js
            var str = "Hello"
            console.log(str.indexOf("e")); //1
            console.log(str.indexOf("b")); //-1
        ```
        + Phương thức `replace()` thay thế chuỗi. String.replace("từ_cần_thay_thế", "từ_thay_thế");
        ```js
            var str = "Hello Bảo"
            console.log(str.replace("Hello", "Hi"));  // Hi Bảo
        ```
        + Phương thức `slice()` trích xuất một phần chuỗi và trả về phần đã trích xuất trong một chuỗi mới. Phương thức có 2 tham số: chỉ số bắt đầu (vị trí), và chỉ số kết thúc (vị trí).
        ```js
            var str = "Apple, Banana, Kiwi";
            console.log(str.slice(7,13)); //Banana
        ```
        + Phương thức `substring()` tương tự `slice()`.
        ```js
            var str = "Apple, Banana, Kiwi";
            console.log(str.substring(7, 13)); //Banana
        ```
        + Phương thức `toUpperCase()` chuyển thành chữ viết HOA.
        ```js
            var str = "Banana";
            console.log(str.toUpperCase()); //BANANA
        ```
        + Phương thức `toLowerCase()` chuyển thành chữ thường.
        ```js
            var str = "BANANA";
            console.log(str.toLowerCase()); //banana
        ```
        + Phương thức `concat()` nối hai hoặc nhiều chuỗi.
        ```js
            var text1 = "Việt";
            var text2 = "Nam";
            console.log(text1.concat(" ",text2)); //Việt Nam
        ```
        + Phương thức `trim()` xóa bỏ khoảng trắng thừa ở 2 đầu.
        ```js
            var str = "      Hello     ";
            console.log(str.trim());//Hello
        ```
        

8. Array
    - Mảng dùng để lưu nhiều giá trị trong một biến đơn. Độ dài tối đa được cho phép với một mảng là 4.294.967.295. Mảng sử dụng chỉ số để truy cập vào các phần tử của nó.
    ```js
    var cars = ["Saab", "Volvo", "BMW"];
    ```
    - Các phương thức của mảng:
        + Phương thức `push` được sử dụng để thêm phần tử vào cuối mảng và trả về tổng số phần tử của mảng sau khi thêm phần tử mới.
        ```js
            var arr = ["a", "b", "c"];
            console.log(arr.push("d"));// 4 (tổng số phần tử của mảng "arr")
            console.log(arr); // ["a", "b", "c", "d"]
        ```
        + Phương thức `pop` được dùng để xoá đi phần tử cuối cùng của mảng. Phương thức `pop` trả về giá trị của phần tử cuối cùng bị xoá khỏi mảng và đồng thời làm thay đổi mảng ban đầu.
        ```js
            var arr = ["a", "b", "c", "d"];
            console.log(arr.pop()); // d (trả về phần tự bị xoá)
            console.log(arr); // ["a", "b", "c"]
        ```
        + Phương thức `shift` xoá phần tử đầu tiên trong mảng. Phương thức `shiftt` trả về giá trị của phần tử đầu tiên bị xoá khỏi mảng và đồng thời làm thay đổi mảng ban đầu.
        ```js
            var arr = ["a", "b", "c"];
            console.log(arr.shift()); // a (trả về phần tự bị xoá)
            console.log(arr); // ["b", "c"]
        ```
        + Phương thức `unshift` thêm 1 phần tử vào vị trí đầu tiên của mảng và trả về tổng số phần tử của mảng sau khi thêm phần tử mới.
        ```js
            var arr = ["a", "b", "c"];
            console.log(arr.unshift("d")); // 4 (tổng số phần tử của mảng "arr")
            console.log(arr); // ["d", "a", "b", "c"]
        ```
        + Phương thức `concat` nối 2 mảng với nhau. Phương thức này không làm thay đổi mảng ban đầu.
        ```js
            var arrOne = ["a", "b"];
            var arrTwo = ["c", "d"];
            console.log(arrOne.concat(arrTwo)); // ["a", "b", "c", "d"]
        ```
        + Phương thức `join` nối các phần tử trong mảng để tạo thành một chuỗi. Phương thức này không làm thay đổi mảng ban đầu.
        ```js
            var arr = ["a", "b", "c", "d"];
            console.log(arr.join("")); // abcd
        ```
        + Phương thức `slice` cắt từ mảng đầu ra 1 mảng con của nó. Phương thức `slice` chấp nhận 2 đối số truyền vào là vị trí của phần tử trong mảng ban đầu được lấy ra đầu tiên và vị trí của phần tử mảng ban đầu được lấy ra cuối để tạo ra mảng con. Phương thức này không làm thay đổi mảng ban đầu.
        ```js
            var arr = ["a", "b", "c"];
            console.log(arr.slice(1,2)); // ["b"]
            console.log(arr); // ["a", "b", "c"] 
        ```
        + Phương thức `splice` được dùng để thêm hoặc xoá phần tử ra khỏi mảng. Phương thức `splice` yêu cầu ít nhất phải có 2 đối số truyền vào. Đối số đầu tiên dùng để đánh dấu vị vị trí của phần tử trong mảng ban đầu và, sử dụng đối số thứ 2 để xác định xem sẽ xoá bao nhiêu phần tử bắt đầu từ phần tử vừa được đánh dấu. Nếu đối số thứ 2 là 0 thì sẽ không có phần tử nào bị xoá.
        ```js
            var arr = ["a", "b", "c"];
            console.log(arr.splice(1, 2)); // ["b", "c"] (trả về mảng bị xoá gồm 2 phần tử "b" và "c")
            console.log(arr); // ["a"] (thay đổi mảng đầu tiên)

            var fruitArr = ["a", "b", "c"];
            console.log(fruitArr.splice(1, 0, "d")); // [] (không phần tử nào bị xoá)
            console.log(fruitArr); // ["a", "d", "b", "c"]  (thêm phần tử "d" vào mảng)
        ```
        + Phương thức `reverse` được dùng để đảo ngược vị trí các phần tử trong mảng. 
        ```js
            var arr = ["a", "b", "c", "d"];
            console.log(arr.reverse()); // ["d", "c", "b", "a"] 
        ```
        + Phương thức `sort` dùng để sắp xếp các phần tử trong mảng.
        ```js
            var arr = ["d", "b", "c", "a"];
            console.log(arr.sort()); // ["a", "b", "c", "d"] (trả về mảng đã được sắp xếp)
        ```

        + Phương thức `forEach()` dùng để duyệt qua các phần tử của mảng.
        ```js
            var arr = [1, 2, 3, 4, 5];
            arr.forEach(function (item) {
                console.log(item);
            });
        ```
        + Phương thức `every()` dùng để duyệt qua các phần tử của mảng và kiểm trả tất cả các phần tử đó có thoả mãn một điều kiện gì đó hay không. Nếu tất cả phẩn tử thoả mãn điều kiện thì trả về true.
        ```js
            var arr = [1, 2, 3, 4, 5];
            var check = arr.every(function (item) {
                return item < 6;
            });
            console.log(check);
        ```
        + Phương thức `some()` dùng để duyệt qua các phần tử của mảng và kiểm tra các phần tử có thoả mãn một điều kiện gì đó hay không. Nếu có một phần tử thoả mãn điều kiện thì dừng lại và trả về true.
            ```js
            var arr = [1, 2, 3, 4, 5];
            var check = arr.some(function (item) {
                console.log(item);
                return item > 3;
            });
            console.log(check);
            ```
        + Phương thức `find()` dùng để duyệt qua các phần tử của mảng và tìm kiếm các phần tử thoả mãn điều kiền gì đó. Nếu tìm kiếm thấy một phần tử thoả mãn điều kiện thì dừng lại và trả về phàn tử đó.
            ```js
            var arr = [1, 2, 3, 4, 3];
            var check = arr.find(function (item) {
                console.log(item);
                return item === 3;
            });
            console.log('--------');
            console.log(check);
            ```
        + Phương thức `filter()` dùng để duyệt qua các phần tử của mảng và tìm kiếm các phần tử thoả mãn điều kiền gì đó. Nếu tìm kiếm thấy các phần tử thoả mãn điều kiện thì trả về các phàn tử đó.
            ```js
            var arr = [1, 2, 3, 4, 3];
            var check = arr.filter(function (item) {
                console.log(item);
                return item === 3;
            });
            console.log('--------');
            console.log(check);
            ```
        + 

8. Object
    - Trong Javascript đối tượng là một loại biến đặc biệt, nó có thể lưu trữ nhiều giá trị đồng thời. Mỗi giá trị của đối tượng được viết theo dạng cặp `tên: giá trị`. Giá trị được lưu trong tên không chỉ đơn thuần là chuỗi, số, .... mà nó còn có thể là một hàm. 
        + Những cái tên lưu trữ các giá trị đơn thuần như chuỗi, số, .... thì được gọi là `thuộc tính`.
        + Những cái tên lưu trữ giá trị là một hàm thì được gọi là `phương thức`.
    
    ```js
        var person = {
            name: 'bảo',
            age: '22',
            year: function(){
                return 2021 - person.age;
            }
        }
        console.log(person.name +' sinh năm '+ person.year());
    ```
    - Object constructor là một cấu trúc khởi tạo các thuộc tính của mỗi đối tượng.
    ```js
        function Person(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.getName = function () {
                return `${this.firstName} ${this.lastName}`;
            };
        }
        var user = new Person('Nguyễn', 'Bảo');
        user.address = 'Huế';
        console.log(user);
    ```
    - Object Prototype dùng để thêm thêm thuộc tính hay phương thức cho Object Constructor.
    ```js
    function Person(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.getFullName = function () {
                return `${this.firstName} ${this.lastName}`;
            };
        }
        var user = new Person("Nguyễn", "Bảo");
        Person.prototype.address = 'Huế';
        console.log(user);

    ```
# JavaScript Event
1. Sự kiện trong javascript là gì?
    - Sự kiện là một hành động nào đó tác động lên đối tượng HTML mà ta có thể bắt được sự kiện này và thực hiện những hành động nào đó. Mỗi sự kiện chúng ta có thể có nhiều hành động.
2. Các sự kiện trong javascript
    - `onclick`: Xảy ra khi click vào thẻ HTML.
    - `ondblclick`: Xảy ra khi double click vào thẻ HTML.
    - `onchange`: Xảy ra khi giá trị (value) của thẻ HTML đổi. Thường dùng trong các đối thẻ form input.
    - `onsubmit`: Xảy ra khi thông tin từ form được gửi đi.
    - `onload`: Xẩy ra khi đối tượng đã được tải xong.
    - `onkeydown`: Xảy ra khi gõ một phím bất kì vào ô input.
    - `onkeyup`: Xảy ra khi bạn gõ phím nhưng lúc bạn nhã phím ra sẽ được kích hoạt
    

    [link tham khảo](https://webvn.com/su-kien-onafterprint/)

3. Hàm addEventListener() trong Javascript
    - Hàm addEventListener() có tác dụng thêm sự kiện cho đối tượng HTML, sử dụng với cú pháp.
    ```js
        element.addEventListener('eventName', function(e){
            // do something
        });
    ```
    - Trong đó:
        + `element` là các đối tượng HTML.
        + `eventName` là tên của sự kiện bỏ đi chữ on, ví dụ click, change, ...
        + `function` là hàm sẽ được chạy khi sự kiện eventName được kích hoạt. 
4. Hàm removeEventListener() trong Javascript
    - Trái lại với hàm `addEventListener()` thì hàm `removeEventListener()` lại có tác dụng là xóa bỏ đi các sự kiện, sử dụng với cú pháp:
    ```js
        element.removeEventListener('eventName', functionName(e){
            // do something
        });
    ```
    - Để có thể xóa sự kiện, hàm xử lý sự kiện được truyền vào phương thức `addEventListener()` phải được định nghĩa ở bên ngoài phương thức `addEventListener()`.

    ```js
        <input type="text" id="txt-val"/>
        <div id="result"></div>
        <script language="javascript">
            var input = document.getElementById("txt-val");
            
            function myFunction(){
                document.getElementById('result').innerHTML = input.value;
            }
            
            // Thêm sự kiện cho đối tượng
            input.addEventListener('keyup', myFunction);
            
            // Xoá sự kiện cho đối tượng
            input.removeEventListener('keyup', myFunction);
        </script>
    ```
    