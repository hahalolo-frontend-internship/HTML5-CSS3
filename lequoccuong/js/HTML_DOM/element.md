# Node Element

## 1. Lấy node Element

- Có thể get element qua: ID , Class, tag name, css selector, HTML collection

### 1.1 document.getElementById()

- Chỉ lấy được 1 ID.
- Nếu cố tình đặt nhiều thẻ có ID trùng nhau thì chỉ lấy được ID đầu tiên.
- nếu không tìm thấy trả về null.

```js
let headingNodes = document.getElementById("heading");
console.log(headingNodes);
```

### 1.2 document.getElementsByClassName()

- Lấy nhiều phần tử có cùng Classname được gọi.
- Trả về HTMLCollection (giống như mảng dùng vòng for để lặp).
- Nếu không tìm thấy trả về mảng `HTMLCollection` rỗng.

```js
let headingNodes = document.getElementsByClassName("heading");
console.log(headingNodes);
```

![img](https://scontent-xsp1-3.xx.fbcdn.net/v/t1.15752-9/190711776_342720333874849_7142840238688663298_n.png?_nc_cat=111&ccb=1-3&_nc_sid=ae9488&_nc_ohc=fzTtV1NPJisAX8ZaON_&_nc_ht=scontent-xsp1-3.xx&oh=caa83fd75e3fe930f97386bd5d5226e6&oe=60D75C84)

### 1.3 document.getElementsByTagName()

- Lấy các phần tử có cùng tag name được gọi.
- Trả về `HTMLCollection`.
- Nếu không tìm thấy trả về mảng `HTMLCollection` rỗng.

```js
let headingNodes = document.getElementsByTagName("h1");
console.log(headingNodes);
```

### 1.4 CSS Selector

- Sử dụng css selector để lấy các phần tử.
- querySelector: lấy 1 phần tử đầu tiên được select
- Nếu không tìm thấy trả về null.

```js
document.querySelector(".heading");
```

- querySelectorAll:
  - Lấy tất cả phần tử được select.
  - Trả về 1 `NodeList`
  - Nếu không tìm thấy trả về mảng `NodeList` rỗng.

```js
document.querySelectorAll(".heading");
```

### 1.5 HTMLcollection vs NodeList

- Có cấu trúc giống mảng nhưng không phải mảng.
- Có thể truy cập qua index tương tự array, có thuộc tính length để lấy độ dài.
- Chúng không có các method của array như pop(), push(), shift(),...
- HTMLcollection chỉ chứa các element node, trong khi NodeList chứa mọi loại node.
- HTMLcollection có thể truy cập bằng tên, id hoặc index, trong khi NodeList chỉ truy cập được qua index.

### 1.6 HTML Collection

- Như đã nói trên HTML Collection chỉ chứa các element node.
- Có thể truy cập bằng tên, id hoặc index.
- Một số đối tượng HTML Collection
  ![HTMLCollection](https://scontent.fdad2-1.fna.fbcdn.net/v/t1.15752-9/190426532_1385729165125866_2056169579185520920_n.png?_nc_cat=103&ccb=1-3&_nc_sid=ae9488&_nc_ohc=t-k88Sjeuv8AX-N_oeB&_nc_ht=scontent.fdad2-1.fna&oh=ce731946e7c094a6752ce0bff315726d&oe=60D53BD6)

---

- Đối tượng `forms`
- Select tất cả đối tượng là `form`
- Cú pháp: `document.forms`

```html
<form action="" id="form1"></form>
<form action="" id="form2"></form>
<script>
  // select tất cả đối tượng là form
  //   có 2 loại key là index và id
  console.log(document.forms);
  // select đối tượng form có id là form 1
  console.log(document.forms.form1);
  // select đối tượng form có id là form 2
  console.log(document.forms["form2"]);
</script>
```

![forms](https://scontent-xsp1-2.xx.fbcdn.net/v/t1.15752-9/190472292_1386666321716423_5436384120548137874_n.png?_nc_cat=106&ccb=1-3&_nc_sid=ae9488&_nc_ohc=A-U6N8TEqcwAX_Fy_x6&_nc_ht=scontent-xsp1-2.xx&oh=b5af4a0a0d674411b555fb6d49847c2b&oe=60D48CA8)

---

- Đối tượng `anchors`
- Chỉ select được những đối tượng `a` có `attribute` là `name`
- Cú pháp: `document.anchors`

```html
<a href="" name="link">Link</a>
<a href="" name="link1">Link1</a>
<a href="">Link2</a>
<script>
  console.log(document.anchors);
  console.log(document.anchors.link);
  console.log(document.anchors["link1"]);
</script>
```

![anchors](https://scontent-xsp1-3.xx.fbcdn.net/v/t1.15752-9/191313728_155017446602134_5703203170239277842_n.png?_nc_cat=107&ccb=1-3&_nc_sid=ae9488&_nc_ohc=CTYL-x3InQkAX8o_-o0&_nc_ht=scontent-xsp1-3.xx&oh=a7fdf196c2fba84c49896dfd4fa68385&oe=60D423AB)

## 2. Thêm element vào 1 element có sẵn

### 2.1 innerHTML

```html
<div class="box"></div>
<script>
  let boxElement = document.querySelector(".box");
  boxElement.innerHTML = '<h1 id="heading">Thêm thẻ h1 </h1>';
  console.log(boxElement.innerHTML);
  let h1Element = boxElement.querySelector("#heading");
  console.log(h1Element);
  console.log(h1Element.id);
  console.log(h1Element.textContent);
</script>
```

![Kết quả](https://scontent-xsp1-1.xx.fbcdn.net/v/t1.15752-9/190908855_108049864720925_6353985511488359459_n.png?_nc_cat=108&ccb=1-3&_nc_sid=ae9488&_nc_ohc=ziISDMmOnrQAX9JRqBi&tn=aPJlnR-rezZbCgJA&_nc_ht=scontent-xsp1-1.xx&oh=7596f07824071683a9c6d60c41946b17&oe=60D737BA)

### 2.2 outerHTML

```html
<div class="box"></div>
<script>
  let boxElement = document.querySelector(".box");
  boxElement.outerHTML = '<h1 id="heading">Thêm thẻ h1 </h1>';
  console.log(boxElement.outerHTML); // hiển thị nội dung cũ
  let h1Element = boxElement.querySelector("#heading"); // vì thế không select element mới thông qua boxElement được.
  console.log(h1Element);
</script>
```

- Ghi đè lên selector được select đến.

![ghi đè](https://scontent-xsp1-2.xx.fbcdn.net/v/t1.15752-9/190418837_1440776546286173_3631304573636833530_n.png?_nc_cat=102&ccb=1-3&_nc_sid=ae9488&_nc_ohc=dSwlSz95gGAAX9uON-W&_nc_ht=scontent-xsp1-2.xx&oh=bf8408a977c6d23bf8f891a611aa6184&oe=60D47ACE)

![kết quả](https://scontent-xsp1-1.xx.fbcdn.net/v/t1.15752-9/189567120_848482235745894_4706930590456240132_n.png?_nc_cat=110&ccb=1-3&_nc_sid=ae9488&_nc_ohc=cO0L-EpKXMUAX8e63r4&_nc_ht=scontent-xsp1-1.xx&oh=7f2213eef22658585e87168d118c77ab&oe=60D60C4C)

## 3. DOM Style

- Cách sử dụng

```html
<div class="box">Đây là box</div>
<script>
  let boxElement = document.querySelector('.box');
  // Cách 1 
  boxElement.style.backgroundColor = 'red';
  // Cách 2
  Object.assign(boxElement.style,{
    backgroundColor: 'green',
    color: 'blue'
  });
</script>
```
- Tên thuộc tính CSS được viết theo camelCase
- Khi set css bằng cách này thì css được sinh ra thành inline css.

## 4. ClassList
- Quản lý số lượng class trong 1 đối tượng được select.
- Có 4 phương thức thường dùng:
  - add(): thêm 1 class vào một element.
  - remove(): xóa 1 class trong một element.
  - contains(): kiếm tra 1 class có trong element không, trả về boolean.
  - toggle(): Kiểm tra 1 class có trong element không nếu có thì sẽ xóa class đó khỏi element, nếu không có sẽ thêm class đó vào element.

[Demo classList](classList.html)

## 5. EVENT

- Một trang web với các thao tác như click chuột, hay di chuột,... Đây được xem là các sự kiện và JavaScript có thể bắt các sự kiện này thông qua HTML DOM.
- Các sự kiện này được cụ thể bằng các thuộc tính HMTL như: `onclick` (click chuột), `onmouseover` (di chuột qua),...
- Và bằng cách lắng nghe các sự kiện và người dùng tương tác, ta gửi trả phản hồi lại tương ứng đó gọi là xử lý sự kiện.

![Example](https://s1.o7planning.com/en/12271/images/34328284.gif)

- Cú pháp:

```js
element.eventName = function () {
  //code
};
```

- Trong đó
  - element là các đối tượng HTML (được gọi bằng các phương thức getElement...).
  - eventName là tên các sự kiện như onclick,onmouseover,...

[Example](https://codepen.io/cuong021099/pen/RwpLZpO)

- Danh sách một số sự kiện
  ![Danh sách](https://scontent.fpnh22-2.fna.fbcdn.net/v/t1.15752-9/189781646_744037136293257_4781535067765412841_n.png?_nc_cat=111&ccb=1-3&_nc_sid=ae9488&_nc_ohc=Ae-VNg1DNGEAX9MpITp&_nc_ht=scontent.fpnh22-2.fna&oh=78bcd2d51955dd11bed58e3dc925847e&oe=60D7F5E4)

- Một ví dụ khác

  [Example](https://codepen.io/cuong021099/pen/dyvVzda)

## 6. EVENT với phương thức addEvenListener()

- Phương thức này cũng cho phép ta gán sự kiện cho một phần tử HTML DOM.
- Điểm khác các phương thức trên là có thể gán một hoặc nhiều events vào một phần tử HTML mà không xóa đi các sự kiện khác.
- Còn sử dụng `addEvenListener()` có thể xóa sự kiện bằng phương thức `removeEvenListenner()`.
- Cú pháp:

```js
element.addEventListener(event, function, useCapture);
```

- Trong đó:

  - `element`: Là các đối tượng HTML (được gọi bằng các phương thức getElement...).
  - `event`: Là tên sự kiện.
  - `function`: Là hàm ta muốn thực thi khi sự kiện kích hoạt.
  - `useCapture`: Là một giá trị `boolean value` cho hai lựa chọn: `event bubbling` hoặc `event capturing` sự kiện nào xử lý trước(mặc định là false).
  `https://niithanoi.edu.vn/xu-ly-su-kien-cua-dom-trong-javascript.html#:~:text=h%E1%BB%8Dc%20v%E1%BB%81%20n%C3%B3.-,1.,di%20chu%E1%BB%99t%20qua)%2C%20%E2%80%A6.`


---

- Xóa một sự kiện với `removeEventListener()`
- Cú pháp:

```js
element.removeEventListener(event, function);
```

- Trong đó:
  - `element`: Là các đối tượng HTML (được gọi bằng các phương thức getElement...).
  - event: Là sự kiện cần xóa
  - function: Là hàm thực thi cùng với sự kiện.

---
- Xóa sự kiện nổi bọt
```js
e.stopPropagation();
```
[Example](https://codepen.io/cuong021099/pen/zYZEJBd?editors=1111)

- Xóa sự kiện mặc định
```js
e.preventDefault();
```
[Example](https://codepen.io/cuong021099/pen/poeWOPN?editors=1010)