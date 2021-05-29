## JAVASCRIPT:

1.  Biến là gì?

    - có thể nôm na là các thùng chứa có tên. Ta có thể đặt dữ liệu vào trong vùng chứa này và thảm khảo dữ liệu chỉ bằng cách đặt tên vùng chứa.

2.  Biến JAVASCRIPT được lưu ở đâu?

    - Các biến Javascript được lưu trữ trong bộ nhớ browser process(tiến trình trình duyệt). Đơn giản hơn là biến được lưu trong phần Ram mà trình duyệt đang sử dụng.

3.  Khai báo biến.

    - const, let, var.

    1.  Var:

    - Từ khóa Var có thể khai báo đa dạng các kiểu biến ...
    - Var khai báo trong 1 func sẽ có scope local. Biến Var có tính chất `Hoisting`. Tức là khai báo ở đâu thì biến đều sẽ được đem lên đầu scope.
    - Các biến được khai báo với từ khóa Var. Có thể khai báo lại.
    - Không có block scope ví dụ ( if, for) Biến tạo ở trong scope đó thì bên ngoài cũng có (Nó k tuân thủ block scope)

    2.  Let và const:

    - Không có cơ chế hoisting.
    - Có blockscope (if, for...).
    - Let k được khai báo lại mà chỉ có thể cập nhật.
    - Const cũng k thể khai báo lại và khi tạo biến từ const k được để trỗng và phải gán liền. Const chỉ có thể cập nhật nhưng không thể thay đổi kiểu dữ liệu.

### 2. JAVASCRIPT SCOPE

    - Xác định phạm vi truy cập của 1 biến.

    *) JS SCOPE:
    	- có 2 loại phạm vi: Cục bộ ( local scope) và Toàn bộ ( global scope)
    *) JS có phạm vi hàm (function scope): Mỗi hàm đều tạo 1 phạm ưvi mới.
    	- Phạm vi khối xác định quyền truy cập của biến đó.
    	- Biến định nghĩa trong 1 hàm không truy cập được bên ngoài function đó.

    LOCAL JAVASCRIPT VARIABLES ( Biến cục bộ Javascript ):
    	- Biến khai báo trong "hàm" JS trở thành biến cục bộ trong hàm
    	- Biến cục bộ có "Phạm vi hàm": Chúng có thể được chỉ truy cập từ bên trong một hàm
    	- Các biến với những tên giống nhau có thể được dùng trong những hàm khác nhau.
    	- Biến cục bộ được tạo khi 1 hàm bắt đầu chạy và tự xóa đi khi 1 hàm chạy xong.


    GLOBAL JAVASCRIPT VARIABLES ( Biến toàn cục JS ):
    	- Biến được khai báo bên ngoài 1 hàm, trở thành biến toàn cục.
    	- 1 biến toàn cục có phạm vi toàn cục: Tất cả các tập lệnh và hàm trên 1 trang web có thể được truy cập nó

    AUTOMATICALLY GLOBAL:
    	- Nếu bạn gán 1 giá trị cho 1 biến mà biến đó chưa đc khai báo. Nó sẽ tự động trở thành 1 biến toàn cục.

    STRICT MODE:
    	- Tất cả trình duyệt hiện đại đều hỗ trợ chạy JS trong "strict mode"

    WARNING:
    	- Hạn chế tạo các biến toàn cục nếu mình nếu bạn không có dự định cho chuyện gì đó.
    	- Biến toàn cục có thể bị ghi đè trên biến của window

    THE LIFETIME CỦA JS VARIABLES:
    	- Thời gian tồn tại của 1 biến là bắt đầu từ khi khai báo.
    	- Biến cục bộ thì sau khi hàm kết thúc thì sẽ chết.
    	- Trong trình duyệt web, biến cục bộ được xóa khi bạn đóng trình duyệt
    Function Arguments:
    	- arguments(parameters) hoạt động như là 1 biến cục bộ bên trong 1 function

### 3. JAVASCRIPT HOISTING:

    - hoisting là hành vi mặc định của JS nó đưa các khai báo lên đầu.
    JAVASCRIPT KHAI BÁO ĐƯỢC HOISTED:
    - Trong Js, 1 biến có thể được khai báo sau khi nó đã được dùng
    - Nói cách khác, 1 biến có thể được dùng trước khi nó khai báo.
    - Hoisting là 1 hành vi mặc định của JS. Nó đưa tất cả khai báo lên trên phạm vi hiện tại
    -----------> Chỉ áp dụng cho từ khóa var
    - Var không có block scope

### 4. Có bao nhiêu loại vòng lặp:

    - Có
    1. Vòng lặp For: Check trước rồi làm
    2. Vòng lặp While: Check trước làm sau
    3. Vòng lặp While Do: Do { logic } while (conditions) Làm trước check sau
    4. For...in ( Thường được dùng cho thằng object) Tuy nhiên vẫn có thể dùng cho arr vì arr cũng là 1 dạng object đặc biệt với các key là index
    5. For ... of ( Thường được dùng để loop các array, String ...  )

### 5. Break And Continue:

    1.Break vả Continue:

    - `Break` là câu lệnh thoát của 1 vòng lặp.
    - `Continue` là câu lệnh để tiếp tục 1 vòng lặp

    Ví dụ: for (i = 0; i < 10; i++) {

if (i === 3) { break; }
text += "The number is " + i + "<br>";
}

    	var text = "";
    	var i;
    	for (i = 0; i < 10; i++) {

if (i === 3) { continue; }
text += "The number is " + i + "<br>";
}

    2. JavaScript Labels:

    - Để gắn nhãn các câu lệnh JS, ta đặt trước câu lệnh bằng tên nhãn và dấu 2 chấm:

    Vi dụ: var cars = ["BMW", "Volvo", "Saab", "Ford"];
    	var text = "";

    	list: {

text += cars[0] + "<br>";
text += cars[1] + "<br>";
break list;
text += cars[2] + "<br>";
text += cars[3] + "<br>";
}

### 6. Các kiểu dữ liệu Javascript:

    In JavaScript there are 5 different data types that can contain values:

    	string
    	number
    	boolean
    	object
    	function
    There are 6 types of objects:

    	Object
    	Date
    	Array
    	String
    	Number
    	Boolean
    And 2 data types that cannot contain values:

    	null
    	undefined

### 7. Null và Underfined?

    - Null có nghĩa là giá trị trống or không tồn tại. Null được khai báo, và có nghĩa là k có gì.
    - Underfined là khi 1 biến được khai báo, nhưng laị chưa được khởi tạo bất kỳ giá trị nào.

    Null là 1 giá trị được gán lại, nó có nghĩa là k có gì, là 1 objec
    underfined là biến được khai báo nhưng k được gán bất kỳ giá trị nào, là kiểu giá trị undefined.

### 7. Key Words "Try" là câu lệnh cho phép bạn kiểm tra 1 khối code có bị lỗi hay k?

    Key words "Catch" là câu lệnh cho phép bạn xử lý lỗi.
    Key words "Throw" là câu lệnh cho phép bạn tạo ra lỗi chỉnh sửa
    Key words "finally" là câu lệnh cho phép bạn thực thi code, và sau đó "Try" và "Catch" bất chấp kết quả

\*) Sẽ xảy ra Lỗi!!!
Khi 1 đoạn code JS được thực thi. Những lỗi khác nhau có thể xảy ra.
Lỗi có thể là lỗi code do người lập trình gây ra. Lỗi nhập sai, và những điều k thể lường trước

JAVASCRIPT try and catch: - Câu lệnh "try" cho phép ta đinh nghĩa ra 1 khối code để kiểm tra lỗi trong khi nó đang đc thực thi - Câu lệnh "catch" cho phép bạn định nghĩa 1 khối mã được thực thi, nếu 1 lỗi xảy ra trong khối mã "try"

JAVASCRIPT Throws Errors: - Khi 1 lỗi xảy ra, Thông thường thì JS sẽ dừng và tạo ra 1 message lỗi. - Thuật ngữ cho cái này là: JS sẽ throw 1 exception ( throw 1 lỗi)
\*\*\*\*) Thực ra JS sẽ tạo 1 Object lỗi với 2 thuộc tính là name và message.
JAVASCRIPT Throws Statement - Câu lệnh "Throw" Cho phép bạn tạo lỗi tùy chỉnh - Kỹ thuật này có thể Throw 1 exception( throw 1 lỗi) - Ngoại lệ này có thể là 1 kiểu string, number, boolean hoặc 1 object trong JS

JAVASCRIPT Finally Statement: - Cbo phép bạn thực thi code sau đó try catch, bất kể mọi kết quả
ĐỐI TƯỢNG ERROR: - Js đã xây dựng nên 1 đối tượng lỗi cái mà cung cấp thông tin lỗi khi 1 lỗi xảy ra. - Đối tượng lỗi cung cấp 2 thuộc tính hữu ích với key là: "name" và "message"

### 8. THIS KEYWORD:

    - Từ Khóa "this" trong JS đề cập(refers) đến đối tượng mà nó thuộc về
    - Nó có nhiều giá trị, phụ thuộc nơi mà nó sử dụng.
    - Trong 1 phương thức của đối tượng, "This" đề cập đến Đối tượng sở hữu (Owner object)
    - Khi đứng 1 mình, "This" đề cập đến 1 object toàn cầu thường môi trường web là "object Window"
    - Trong 1 function, trong 1 strict mode, "This" là undefined.
    - Trong 1 sự kiện, "This" đề cập đến thành phần elm cái mà nhận sự kiện.
    - Phương thức call(), và apply() có thể đề cập đến từ khóa "This" đến bất cứ object nào

### 9. Function regular & arrow function:

    - Đối với 1 function regular thì trong khối code nó có đề cập đến từ khóa `this`. Nếu mà function đó là 1 method của `OBJECT` nào đấy thì từ khóa `this` được đề cập ở đây sẽ là `OBJECT` đó. Còn nếu muốn chỉ định method đó cho những đối tượng khác thì ta phải dùng hàm `bind(param là object đó)()`. Nếu không thì trong trường hợp sử dụng không có `strict mode` thì `this` đề cập đến đối tượng `window` còn nếu có `strict mode` thì `this` đề cập đến là `underfine`

    Ví dụ1 : var mouse = { 	name: "Chuột Chù",
    			speak: function () { console.log(this.name) } }
    	 var say = mouse.speak;
    	---> gọi hàm: say() thì sẽ là undefined vì context lúc này là window mà window k có biến `name` nên sẽ là undefined

    Ví dụ2 : var dog = {	name: "pluto",
    			speak: function () {
    			var self = this;
    			var say = function () { console.log(self.name) }
    			say()
    		}
    	---> Lúc này ta đã coppy context dog qua biến self. Nên output sẽ là `pluto`
    	---> Hoặc nếu k khai `self` = this. Thì ta có thể gọi `say.bind(dog)`

    - Đối với Arrows function không có context. Biến `this` trong arrow function là biến mà đại diện cho cái context gần nhất chứa hàm arrow function đó
    Ví dụ: var dog = {	name: "pluto",
    			speak: function () {
    				var run = () => { console.log(this.name) }
    			}
    		}
    	---> Lúc này thì context gần nhất của arrow function run là hàm speak. `This` trong trường hợp này là dog

### 10. JAVASCRIPT CODING CONVENTION: ( Quy ước mã hóa JS)

    - quy ước là Kiểu hướng dẫn về phong cách lập trình. Chúng Đảm bảo các yếu tố:
    	+ Tên và khai báo đảm bảo các rules cho biến và hàm
    	+ Quy tắc dùng cho khoảng trắng, indentation( thụt lề), và comments
    - Quy ước mã hóa "An toàn chất lượng":
    	+ Cải thiện code dễ đọc
    	+ Làm cho code dễ dàng maintain hơn
    - Đặt tên theo quy ước camelCase.

### 11. JS PHƯƠNG PHÁP TỐT NHẤT

    - Loại bỏ hoặc hạn chế Biến toàn cục.
    	+ Bao gồm cả kiểu dữ liệu, đối tượng, và hàm.
    	+ biến toàn cục và hàm có thể bị ghi đè bởi một tập lệnh khác.
    	+ Thay vào đó là dùng biến cục bộ

    - Luôn luôn declare local variable.
    - Decla trên hết.
    - Init các variable
    - Không bao giờ khai báo Number, Str, or Bool dưới dạng đối tượng
    - numbs,strs,bools như là một giá trị sơ cấp. Không phải là những đối tượng obj
    - Khai báo các kiểu này như 1 object làm chậm tốc độ thực thi.
    - Không nên dùng phương thức new Object() để tạo ra 1 objject mới.
    - Tránh chuyển đổi loại tự động ví dụ var x= "string"; x = 5;
    	+ Khi Thực hiện một toán tử toán học, JS có thể chuyển number thành chuỗi
    	ví dụ: var x =5 + 7 -> x type number
    		var x = 5 + "7" -> x = 57 type là string
    		var x = "5" + 7 -> x = 57 type là string
    		var x = 5 - "7";     // x.valueOf() is -2,  typeof x is a number
    		var x = "5" - 7;     // x.valueOf() is -2,  typeof x is a number

    - Dùng So sánh ===;
    	+ so sánh == luôn luôn chuyển đổi (để nối những kiểu với nhau) trước khi so sánh
    	+ So sánh === ép kiểm so sánh giá trị và kiểu với nhau nữa
    - Dùng default param cho các đối số để nhỡ mà các function được gọi không truyền tham số vô.
    - Cuối cùng là dùng Switch với Default; kết thuốc chuỗi câu lệnh switch case với câu lệnh Default. mặc dù bạn nghĩ là k cần

### 12. JAVASCRIPT COMMON MISTAKES ( Những lỗi chung mà hay mắc phải của JS):

    - Sự cố dùng toán tử gán
    	+ Chương trình js có thể tạo ra những kết quả bất ngờ nếu người lập trình vô tình dùng toán tử =; thay vì đó là 1 phép so sánh == or === trong câu lệnh if()
    - so sánh k chặt chẽ
    	+ ví dụ 10 == "10";
    - Phép + và nối

- Những Bổ Sung Mới trong ES6:
  - New Number Properties: MIN_SAFE_INTEGER, MAX_SAFE_INTEGER, isInteger(); isSafeIntege(), isNaN(), isFinite()

### 13. FORM IN JAVASCRIP:

    ---> FORM TỰ ĐỘNG TRONG HTML:
    	- HTML form có thể hoạt động tự động bởi trình duyệt
    	- Nếu mỗi form field trống, có 1 thuốc tính "required" ngăn chặn form submit.
    	Note: Automatioc HTML k hoạt động trên IE 9 và những trình duyệt trước đó.

    ---> XÁC THỰC DỮ LIỆU:
    	- Dữ liệu xác thực là quá trình đảm bảo rằng người dùng nhập đúng, sạch và có ích
    	- Những công việc xác thực điển hình:
    		+) Người dùng đã hoàn thành tất cả các trường yêu cầu
    		+) Người dùng nhập ngày hợp lệ k?
    		+) Người dùng có nhập chữ trong field number hay k?
    Hầu hết, mục đích của việc xác thực là đảm bảo đầu vào của người dùng.
    Việc xác thực có thể được định nghĩa nhiều phương thức khác, triển khai = nhiều cách
    Server side validation( xác thực phía máy chủ) là cách mà web server thực hiện, sau khi các đầu vào được gửi đến server
    CL side vld hoạt động ở trình duyệt, trước khi được gửi đến máy chủ.

### 14. OBJECT:

    OBJECT LÀ CÁC BIẾN ( OBJECT ARE VARIABLES )
    - Biên trong js có thể chứa 1 value;
    - object cũng là biến. Những objects có thể chứa nhiều biến.
    - Giá trị được viết như  key: value( name and value are separated by a colon)
    - Đối tượng JS là một tập hợp các cặp Key và values

    OBJECT METHOD
    - Phương thức là những hành động có thể được thực hiện trên 1 object.
    - Thuộc tính của đối tượng có thể có giá trị nguyên thủy, có thyể là 1 đối tượng khác, và cũng có thể là 1 hàm.
    - Một phương thức của đối tượng là 1 thuộc tính chứa 1 function định nghĩa

    CREATING A JS OBJECT:
    - Với JS, bạn có thể định nghĩa và tạo ra một đối tượng của bạn làm chủ.
    - Có nhiều cách để tạo ra 1 đối tượng.
    - Định nghĩa và tạo 1 đối tượng đơn, bằng cách tạo 1 biến và gán nó với các cặp key value
    - Tạo ra 1 đối tượng đơn với từ khóa new
    - Định nghĩa ra 1 object contructor, và sau đó tạo các đối tượng thuộc kiểu object contructor đó. Có thể tạo nhanh nhiều đối tượng

    OBJECT PROPERTIES:
    - properties là những giá trị liên kết với JS object
    - 1 object js là tập hợp những thuộc tính không có thứ tự ( unordered )
    - Thuộc tính có thể bị change, thêm, xóa nhưng một vài có có thể chỉ được xem

    ACCESSING JS PROPERTIES:
    - Để truy cập:
    	ví dụ:
    		objectName.property	person.age
    		objectName["property"] 	person["age"]
    		objectName[expression]	x= "age" ; person[x]
    - Khối mã bên trong vòng lặp for..in sẽ được thực thi cho mỗi thuộc tính.

    OBJECT CONSTRUCTORS:
    - bằng cách viết hoa chữ cái đầu tiên, Nó được xem là một điều tốt khi khởi tao OBJECT CONSTRUCTOR
    - Có thể tạo ra nhiều đối tượng có properties giống nhau.

    TỪ KHÓA "THIS" TRONG OBJECT CONSTRUCTORS
    - Trong js, Thứ được gọi  "This" thì là đối tượng sở hữu
    - giá trị của "This", Khi dùng trong 1 đối tượng, là chính bản thân đối tượng đó.
    - Trong hàm constructor function "This" không có giá trị. Nó là 1 sự thay thế cho 1 đối tượng. Giá trị của "This" sẽ trở thành 1 đối tượng khi 1 đối tượng được tạo ra từ function constructor.
    - Khi tạo 1 đối tượng từ function constructor thì ta có thể thêm thuộc tính mới bằng cách nameObject.nameProperty = "value";
    - Tương tự ta có thể thêm 1 phương thức = cách nameObject.nameMethod = fucntion () {};

    THÊM MỘT THUỘC TÍNH VÀO TRONG CONSTRUCTOR:
    - Chúng ta không thể thêm 1 thuộc tính vào trong 1 đối tượng constructor giống cách mà chúng ta thêm 1 thuộc tính mới vào 1 đối tượng đã tồn tại.
    - Để thêm 1 property vào trong Constructor, Bạn phải thêm nó vào trong constructor function tức là
    Ví dụ:	function ObjectConstruc(pr1, pr2) { ....; this.newProp = "newValueOfProp" }
    - Bằng cách này thuộc tính đối tượng có giá trị mặc định.

    THÊM 1 PHƯƠNG THỨC VÀO 1 CONSTRUCTOR:
    - Constructor function của bạn có thể định nghĩa phương thức.
    - Nhưng chúng ta không thể thêm 1 phương thức vào 1 object constructor giống cách bạn thêm 1 phương thức đã tồn tại được tạo bởi function constructor.
    - Việc thêm phương thức trong 1 đối tượng nguyên mẫu phải được thực hiên bên trong obj construc

    JAVASCRIPT OBJECT PROTOTYPE:
    - Tất cả các đối tượng js kế thừa thuộc tính và phương thức từ 1 prototype
    - Chúng ta đã biết cơ bản về func constructor
    - Chúng ta biết là không thể thêm 1 thuộc tính mới trong trong 1 obj constructor ( thay vì đó thì theemt rực tiếp vào trong object constructor bằng this.newKey )

    PROTOTYPE Inheritance
    - Tất cả đối tượng kế thừa thuộc tính và phương thức từ 1 nguyên mẫu
    ex:	Date object kế thừa từ Date.prototype;
    	Array object kế thừa từ Array.prototype;
    	Person obj kế thừa từ Person.prototype

    THÊM 1 PROPERTIES và METHODS VÀO OBJ
    - Đôi khi bạn muốn thêm 1 thuộc tính( hoặc 1 methods) vào tất cả objec đã tồn tại cùng 1 kiểu.
    - Hoặc đôi khi bạn muốn thêm 1 thuộc tính ( hoặc methods) vào 1 obj constructor.

    DÙNG THUỘC TÍNH "PROTOTYPE"
    - thuộc tính Prototype cho phép bạn thêm 1 prop or 1 method mới vào trong object Construc

### 15. FUNCTION:

    - func js k thực hiện bất kỳ kiểm tra nào đối với giá trị tham số
    - func có thể có tham số or k

    FUNCTION có param
    - tham số hàm là tập hợp tên các danh sách trong hàm định nghĩa ví dụ như function myFunc(a,b...) {}
    - Đối số của HÀM là giá trị thực được truyền vào hàm
    - nếu 1 lời gọi hàm được đặt trước với từ khóa "new", thì lời gọi đó là lời gọi hàm tạo ( 1 lời gọi hàm tạo 1 đối tượng mới thì đối tượng mới này kế thừa thuộc tính và phương thức từ phương thức khởi tạo đó. )

    ----------->FUNCTION CALL():
    - with "call()" method, bạn có thể viết 1 method mà có thể được dùng trên nhiều đối tượng khác
    - Tham số đầu vào thứ 1 của call() là object cũng có thể là null.

    ALL FUNCTION ARE METHODS

    - Trong JS tất cả hàm là một phương thức đối tượng.
    - Nếu 1 hàm không phải là một phương thức của 1 đối tương JS. Nó là 1 hàm của đối tượng toàn cục ( đối tượng toàn cục ở đây có thể là "window" );


    THE JAVASCRIPT CALL() METHOD:
    - Phương thức call() là đại diện cho 1 phương thức JS hoặc phương thức được xác định trc
    - Nó có đc dùng để gọi 1 phương thức với đối tượng sở hữu như là 1 đối số (param)
    Note: Với Call(), 1 đối tượng có thể dùng 1 phương thức thuộc về 1 đối tượng khác

function fullName(param1, param2) {
return this.firstName + " " + this.lastName + param1 + param2 ;
}
var person1 = {
firstName:"John",
lastName: "Doe"
}
fullName.call(person1, "This Param1", "This Param2") => output "John Doe This Param1 This Param1 "
this example's được chứng minh.

    ----------->FUNCTION APPLY():

    Với phương thức apply(), Bạn có thể viết 1 phương thức được dùng cho đối tượng khác.


    PHƯƠNG THỨC apply() JAVASCRIPT
    apply() gần giống call();

    - Sự Khác Nhau giữa Call() và Apply()
    	+) phương thức call() nhận đối số bị ngăn cách bởi dấu phẩy ( riêng biệt )
    	+) phương thức apply() nhận đối số là 1 mảng
    Note: apply() method rất tiện if bạn muốn dùng 1 mảng thay vì từng tham số riêng biệt
    	+) Tức là tham số thứ 1 của apply là 1 object và thứ 2 là 1 kiểu array

    JAVASCRIPT CLOSURES

    - Biến trong js có thể thuộc về phạm vi toàn cục hoặc cục bộ
    - Biến toàn cục có thể được tạo cục bộ ( riêng tư ) với CLOSURES

    BIẾN TOÀN CỤC:

    - Một hàm có thể truy cập tất cả các biến định nghĩa bên trong hàm
    - Nhưng 1 hàm có thể truy cập biến định nghĩa bên ngoài hàm.
    - Trong 1 web page, biến toàn cục thuộc 1 đối tượng WINDOW

    VARIABLE LIFETIME ( Thời gian tồn tại của biến )

    - biến toàn cục tồn tại đến khi trang dừng Hoạt động, Giống khi bạn điều hướng đến 1 trang khác hoặc đóng cửa sổ.
    - Biến cục bộ có thời gian tồn tại ngắn. Chung được tạo khi hàm được call và xóa khi hàm chạy xong

    CÁC HÀM LỒNG NHAU TRONG JAVASCRIPT:

    - Tất cả các hàm đều có quyền truy cập phạm vị toàn cục
    - Trong thực tế, in js, tất cả các hàm đều có quyền truy cập vào phạm vi bên trên nó( có nghĩa là cái chi mà được khai báo ở trên thì phía dưới viết code đều có quyền dùng đến những cái ở trên )
    - JS hỗ trợ hàm lồng nhau. Hàm lồng nhau có quyền truy cập đến phạm vi trên cùng chúng.
    Ví dụ:
    	function add() {
    		var counter = 0;
    		function plus() { counter += 1 }
    		plus();
    		return counter; }
    	add();
    - Điều này có thể tăng biến counter 1 lần. Nếu những lần gọi hàm add() sau còn gọi thì code trong hàm add cũng được chạy lại từ đầu.

    CORE FUNCTION CLOSURES:

    - Tức là ta có thể khai báo 1 hàm trong 1 hàm khác và return về hàm đó hoặc có thể return 1 object mà mỗi key tương ứng với mỗi function cũng được. Tính chất này được gọi là closures.

    ví dụ: function wallet(usd) {
    	let total = usd;
    	return {
    	check: function () { return total},
    	payment: function (plus) { total += plus},
    	drawnMoney: function (mon) { if (mon > total) { total -= mon } }
    	}

} + ta tạo ra 1 BIẾN bất kỳ = wallet(tham số tùy ý); + Thì lúc này wallet được coi là CLOSURE + BIẾN này là 1 object chứa hàm or cũng là 1 hàm có khả năng truy xuất vào biến private thông qua phương thức được tạo ra từ hàm or object được return - Nói tóm lại là một CLOSURE là 1 hàm có quyền trùy cập vào phạm vi cha mặc dù sau khi hàm cha đã đóng lại hay là đã được chạy xong. - Cũng có thể nói ClOSURE là 1 hàm con có thể truy cập vào hàm cha

    CURRYING FUNCTION:

    - 1 hàm bình thường thì có thể có nhiều tham số. còn currying là 1 quá trình trả về nhiều hàm và mỗi hàm chỉ nhận 1 tham số Và cuối cùng là return thành 1 giá trị mới.
    Ví dụ:
    	function calc(x,y) { return x + y }  Ta gọi hàm calc(10, 20) // Hàm bình thường

    	function calc(x) {
    		return function calc2(y) {
    			return x + y
    		}
    	}	 Ta gọi hàm calc(10)(20)  Như ví dụ này là truyền 1 tham số cho mỗi hàm thôi



    CALLBACKS:
    - 1 callback là 1 function được truyền thông qua đối số của 1 function khác.
    - Công nghệ này cho phép 1 func call 1 function khác

    HIGHER ORDER FUNCTION:

    1- Nhận 1 tham số là 1 hàm khác -> callback function ( Lồng nhiều hàm vào 1 hàm ). Có thể nói cách khác là một hàm được truyền dưới dạng đối số khi có lời gọi hàm khác ( closure và curying và callback) đều được gọi là HOC


    Note:
    - pure function là 1 hàm thuần túy nghĩa là k có thay đổi trạng thái gì bên trong cả.
    - Có 3 tính chất:
    	- Không có side effect. Không làm thay đổi 1 giá trị bên ngoài.
    	- Không chứa tác vụ bất đồng bộ. Ví dụ setTimeOut hay Async Task.
    	- Code thực hiện trong `pure function` không dính dáng gì tới biến bên ngoài.
    	- Lợi ích của nó mang lại là độc lập. Không thay đổi cấu trúc của tham số truyền vào. dễ dàng Refactor, tổ chức code.

### 16. ASYNCHRONOUS JS

    - Hàm chạy song song với các với hàm khác thì được gọi là bất đồng bộ.
    - Ví dụ như hàm setTimeOut(), setInterval();

    WAITING FOR FILES OR CALL API
    - Nếu bạn tao 1 function để load mã nguồn từ 1 file bên ngoài. Bạn không thể dùng nội dung đó trước khi nó load đầy đủ
    - Điều này là thời điểm hoàn hảo để dùng 1 callback.
    JAVASCRIPT PROMISE:
    - Khi ta khởi tạo 1 biến Promise ta sẽ dùng từ khóa new Promise ( tham số đầu vào là 1 func
    và function đó có 2 tham số thường thì chúng được đặt tên là resolve và reject
    Nếu trong khối code đó resolve được gọi thì sẽ rơi vào trường hợp .Then và ngược lại thì sẽ là .Catch

)
PROMISE OBJECT PROPERTIES: ( Thuộc tính đối tượng PROMISE ) - Đối tượng PROMISE hỗ trợ 2 thuộc tính: STATE và RESULT - Trong khi 1 đối tượng PROMISE là "pending" đang chờ xử lý(đang hoạt động), Kết quả là undefined. - Khi 1 đối tượng PROMISE là "fullfilled" hoàn thành. STATE là fullfilled Kết quả là 1 giá trị - Khi 1 đối tượng PROMISE là "rejected", STATE là reject và kết quả là 1 đối tượng lỗi.

    JAVASCRIPT ASYNC:

    - async và await khiến cho PROMISE dễ viết hơn
    - async khiến 1 func return về 1 promise.
    - await làm 1 function chờ 1 promise trả về kết quả

    Asynfunction:
    - từ khóa async trước 1 func khiến cho 1 hàm return 1 promise
    AWAIT SYNTAX:
    - Từ khóa "await" trước 1 function khiến hàm chờ 1 promise
    - từ khóa "await" chỉ có thể được dùng bên trong async function

18- Destructuring And Rest Operator: - Cú pháp "Destructuring AssignMent" là cú pháp cho phép ta gán nhanh các biến bằng các thuộc tính của "Object" hoặc Array. Destructuring khiến code dễ đọc và clean hơn

    - Toán tử Spread là cú pháp 3 dấu chấm(...) giúp ta phân rã array và object thành các thuộc tính riêng biệt. Dùng để hợp nhất bảng, và hợp nhất obj

    Ex: const arr = [1,2,4,5];

    function run(a,b,c,d) { console.log(a,b,c,d }

    run(...arr)

    Ex: merge object
    	const user = { name: "NVA", age: 24, height: 170 }
    	const proPlus = { address: "VietNam" }
    	const mergeUser = { ...user, ...proPlus };
    Ex: merge arr:
    	const arr1 = [1,2,3,4];
    	const arr2 = [5,6];
    	const arr = [...arr1, ...arr2] Nó sẽ phân rã arr1 và arr2 và hợp nhất với []


    - Toán tử Rest cũng áp dụng dấu ba chấm cú pháp như spread, Nó được gọi là rest khi nó là tham số function dùng để xác định các phần tử "còn lại" và kết hợp với destructuring dùng để gom thuộc tính.
    ex: function myFunc(a,b, ...rest) { return rest }
    	myFunc(1,2,3,4,5,6) => Output sẽ là [3,4,5,6]
    ex: kết hợp với arr or object
    	const user = { name: "VoDanh", age: 30, height: 170 };
    	const { name, ...rest } = user
    	rest = { age: 30 , height: 170 }

ex: kết hợp với arr
const arr = [ 1, 2,3,4,5]
const [num1 , ...rest] = arr
num1 = 1
và rest = [ 2,3,4,5 ]

### 19. DOM:

    1. DOM?
    - Khi 1 trang web được load, thì trình duyệt sẽ tạo 1 tạo một mô hình tài liệu trên trang.
    - HTML DOM là 1 cấu trúc đối tượng dạng cây.
    - HTML DOM là một mô hình đối tượng tiêu chuẩn và giao diện lập trình cho người dùng:
    	- HTML elms là 1 đối tượng.
    	- Tất cả các thuộc tính của các thành phần HTML.
    	- Phương thức để truy cập đến 1 elm HTML.
    	- Sự kiện cho tất cả các thành phần HTML.

    2. Có bao nhiêu loại DOM?
    	1.DOM selector: name, id, class, attribute, tag:

    		ví dụ: document.getElementByID("id1") lấy ra duy nhất element HTML có id là `id1`
    		vi dụ: document.getElementsByTagName("p") lấy 1 HTML colection là dạng mảng danh sách các thẻ p.
    		ví dụ: doc.getElementsByClassName(".class1") lấy ra 1 HTML colection là dạng mảng danh sách các thẻ có class là `class1`.
    		ví dụ: document.querySelector("") giống selector trong css. Cho phép lấy ra 1 element HTML có selector giống như trong ("").
    		ví dụ: document.querySelectorAll("selector") giống selector trong Css. Cho phép lấy ra 1 nodelist là danh sách mảng tập hợp các node.


    	2. DOM HTML: thay đổi attribute, content, text
    		ví dụ: document.getElementById("id1").innerHTML thì ta sẽ lấy được content trong thẻ đó chứa.
    		ví dụ: document.getElementById("id1").innerText thì ta cũng có thể lấy được trong thẻ id1. Bản chất lấy content giống như ở trên. Giả sử trong 1 thẻ có id1 có chứa các thẻ khác thì nó sẽ loại bỏ các tag đó mà chỉ lấy text thuần túy
    		ví dụ về attribute:
    			docment.getElementById("id1").getAttribute("nameAttribute") lấy ra được cái attribute
    			xét attribute:
    			docment.getElementById("id1").setAttribute("nameAttribute", "newValue")

    	3. DOM event: Cung cấp các sự kiện để tác động vào vào đối tượng HTML
    		- Khi người dùng click chuột.
    		- Khi page được load.
    		- khi ảnh được load.
    		- khi di chuyển chuột lên 1 elms
    		- Khi một trường nhập thay đổi.
    		Để gán sự kiện cho các phần tử elms, ta có thể sử dụng các thuộc tính sự kiện. rồi định nghĩa ra function.


    	4. DOM style: Thay đổi thuộc tính style css của các thành phần trên HTML

    	5. DOM listener: Lắng nghe các sự kiện hành động tác động lên các thẻ HTML.

    3. Sự khác nhau giữa HTML collection và NodeList?
    	HTML Collection:
    	- Một HTML collection không phải 1 array.
    	- HTML colection giống 1 mảng, nhưng không phải.
    	- Các mục HTMLCollection có thể được truy cập bằng name, id hoặc số chỉ mục của chúng
    	- Ta có thể loop nhưng không thể dùng các phương thức valueOf(), map(); push()
    	Node list không phải là 1 array:
    	- Giống array,
    	- NodeList là 1 tập hợp các node của document.
    	- NodeList items can only be accessed by their index number.

############################################################ ### Method of String - string.length() ----> Độ dài chuỗi - string.indexOf("key") ----> Tìm kiếm từ `key` đầu tiên trong 1 chuỗi return ra 1 số >=0 thì là có mà return ra -1 là k có - string.lastIndexOf("key") ----> return chỉ mục từ `key` cuối cùng trong chuỗi ngược với indexOf - 2 cái indexOF trên cho phép có thể có đối số thứ 2 mặc định là 0 - string.search("key") ----> như indexOf() mà không có đối sô thứ 2

    	- slice(10,20)					----> Cắt chuỗi từ vị trị bắt đầu là 10 và kết thúc vị trí cuối cùng là 20. Cho phép số âm để tìm kiế từ bên phải. Nếu bỏ sót tham số thứ 2 nó sẽ cắt từ vị trí bắt đầu đến hết
    	- substring(start, end)				----> Giống slice nhưng k cho phép tham số là số âm
    	- substr(start, lengthWantoSlice) 		----> Cắt chuỗi từ vị trí bắt đầu và lấy độ dài bao nhiêu.
    	- Replace("wordsFind", "wordsWillBeReplace")	----> Phương thức chỉ định thay thế 1 từ được tìm thấy trong chuỗi bằng từ trong tham số thứ 2. Nhưng chỉ thay 1 ký tự đầu tiên được tìm thấy. bị phân biệt chữ thường và hoa
    	- Replace(/WORDSFIND/i, "wordsWillBeReplace")	----> sẽ k phân biệt chữ thường và hoa
    	- replace(/Microsoft/g,"wordsWillBeReplace")	----> sẽ thay thế tất cả
    	- tex1.concat(" ", text2)			----> nối ký tự. return chuỗi mới k thay đổi phần tử gốc
    	- string.trim()					----> loại bỏ ký tự trắng đầu đuôi
    	- string.padStart(3,0)				----> tạo ra biến mới. ví dụ string = 3 ; thì tạo ra 1 biến mới có output là 003
    	- string.padEnd(3,0)				----> ngược với padStart
    	- string.charAt(10)				----> return ký tự ứng với chỉ mục 10


    ### Method of Number
    	- Number.toString()				----> biến thành kiểu chuỗi
    	- number.toFixed(4)				----> trả về 1 chuỗi, với một số thập phân được chỉ định và có làm tròn ví dụ: x= 4,566433 thì output là x = 4,5664
    	- number.toPrecision(4)				---->trả về một chuỗi, với một số được viết với độ dài được chỉ định và có làm tròn: ví dụ x= 4,5756434 thì output = 4,576

    	- number.valueOf()				----> return 1 số dưới dạng 1 số không phải chuỗi
    	- Number(), parseInt, parseFloat		----> Chuyển 1 số dưới dạng chuỗi thành kiểu number
    	- parseInt(10,3)				----> Phân tích đối số trả về 1 số nguyên
    	- parseFloat(10,5)
    	- isNaN("10")					----> trả về true false

    ### Method of Array:
    	arr = [1,2,3,4,5]
    	- arr.toString()				----> convert về 1 chuỗi và ngăn cách bằng dấu phẩy
    	- arr.join("**")				----> conver về 1 chuỗi và ngăn cách bằng dấu `**`
    	- arr.pop()					----> cắt phần tử cuối của mảng và làm mutate mảng đó
    	- arr.push(item)				----> thêm 1 phần tử vào cuối và mutate mảng gốc
    	- arr.shift()					----> remove first item và mutate mảng root
    	- arr.unShift()					----> thêm 1 phần tử vào đầu và mutate mảng gốc
    	- arr.splice(2,0,"6")				----> Thêm 1 item 6 và trong mảng ở chỉ mục 2 nếu đối số thứ 2 bằng 0 và cắt đi n phần tử nếu đối thứ 2 là n. Mảng gốc bị mutate. return ra chỉ mảng bị xóa
    	- arr.concat([2,3])				----> Nối mảng. tạo biến mới vào hứng và k bị mutate
    	- arr.slice(1,3)				----> return ra mảng chứa 2 phần tử từ chỉ mục 1 và chỉ mục 2 của phần tử gốc và phần tử gốc k bị mutate

    ### Arr Sort
    	- arr.sort() 					---> Nếu mảng gồm các chuỗi thì sẽ xếp theo anphabe. mảng gốc bị mutate
    	- arr.reverse() 				----> đảo ngược mảng và root arr bị mutate

    	**Nếu mảng gồm các số**
    	- thì sort nhận 1 callback
    	- arr.sort( (a,b) => { return a-b })		----> sắp xếp từ bé đến lớn bị mutate
    	- arr.sort( (a,b) => { return b-a })		----> sắp xếp từ lớn về bé bị mutate
