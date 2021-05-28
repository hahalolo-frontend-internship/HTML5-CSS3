# DOM IN JS

# HTML DOM

![DOM](https://www.w3schools.com/js/pic_htmltree.gif)

## 1. HTML DOM

- Là quy chuẩn mô tả mô hình của các thành phần trong tài liệu HTML được đưa ra bởi W3C.
- Gồm 3 thành phần:
  - Element
  - Attribute
  - Text

## 2. DOM API

Là bộ API nằm trong Web API có mặt trên những môi trường hỗ trợ duyệt web - như trên trình duyệt. DOM API cung cấp các đối tượng và phương thức hỗ trợ truy xuất, chỉnh sửa các đối tượng / thành phần trong DOM.

## 3. Document Object

- Muốn truy xuất vào các element, attribute, text thì phải thông qua document

![Node](https://scontent-xsp1-1.xx.fbcdn.net/v/t1.15752-9/191787888_143168817859661_2409022883826680417_n.png?_nc_cat=105&ccb=1-3&_nc_sid=ae9488&_nc_ohc=xOCdYyg2j6AAX8Lu6aA&_nc_ht=scontent-xsp1-1.xx&oh=9bf72d22bda94bcb98115e453f238ab0&oe=60D4BEEB)


# GET ELEMENT METHODS

### 1. ID
- Trả về một `element` có `id` xác định, nếu không tìm thấy trả về `null`.
```js
    var myVariable = document.getElementById('my_squad');
```
### 2. CLASS, TAG
-Tìm theo tên `class` hoặc `tag name`. Khác với tìm theo ID chỉ trả về một `element`, hai method này trả về một mảng (thực ra chỉ hơi giống chứ không phải mảng 'HTML COLECTION'). Do đó, có thể truy cập từng element cụ thể tương tự như truy cập các phần tử của mảng.
```js
    let boxes = document.getElementsByClassName("box");
    let links = document.getElementsByTagName("a");
```

### 3. CSS SELECTOR
- Trả về `element` đầu tiên tìm được, là một `Node object` khớp với chuỗi `selector`. Nếu không tìm được `method` trả về `null`.
```js
let first_box = document.querySelector("div.box");

let boxes = document.querySelectorAll("div.box");
```
- Trả về một `NodeList` các `element` tìm thấy. Cấu trúc `NodeList` dùng tương tự mảng. Hai `method` trên ném ra lỗi `SYNTAX_ERR` nếu chuỗi `selector` sai.
### 4. HTML COLLECTION
- name trong thẻ `a`, trả về một mảng HTMLCollection
```js
let text=document.anchors;
```
- id trong form trả về một `element` có `id` xác định, nếu không tìm thấy trả về `null`.

```js
let text = document.form.nameid;
let form=document.forms['nameid'];
```
# Node Attribute

- Được lấy ra từ `node element`
- Các thuộc tính của các element như: `id`, `class`, `title`,.. là các `node attribute`

## Thêm attribute vào node element

- Chỉ thêm được với `quertSelector`.

- Bước 1: Selector element muốn thêm `attribute`.

```js
let headingElement = document.querySelector("h1");
```

- Bước 2: thiết lập `attribute` có 2 cách:
  - Cách 1: Cách này chỉ thiết lập những attribute mà thẻ đó thực tế sẽ có, những attribute thực tế không có trong thẻ sẽ không được thêm vào.

```js
headingElement.title = "Đây là thẻ h1";
```

    - Cách 2: Cách này sẽ thiết lập bất kỳ attribute nào dù thẻ đó thực tế không có attribute đó.

```js
headingElement.setAttribute("title", "Đây là thẻ h1");
```

## Lấy giá trị của attribute của node element

- Có 2 cách lấy giá trị của attribute

    - cách 1: chỉ lấy được những attribute mà thẻ đó thực tế sẽ có

    ```js
    let headingElement = document.querySelector("h1");
    console.log(headingElement.title);
    ```

    - Cách 2: Lấy được tất cả attribute.

    ```js
    let headingElement = document.querySelector("h1");
    console.log(headingElement.getAttribute("title"));
    ```



# Node Text

- Được lấy ra từ `node element`.
- Là nội dung của `node element`.
- Dùng `innerText`, `textContent` để lấy hoặc thay đổi nội dung `node text`.

## Cách lấy node text

```js
    <h1 class="heading">Đây là thẻ h1</h1>
    <script>
      let headingElement = document.querySelector(".heading");
      console.log(headingElement.innerText); // Đây là thẻ h1
      console.log(headingElement.textContent);// Đây là thẻ h1
    </script>
```

## Cách thay đổi node text

```js
    <h1 class="heading">Đây là thẻ h1</h1>
    <script>
      let headingElement = document.querySelector(".heading");
      console.log(headingElement.textContent = 'Nội dung thay đổi'); // Nội dung thay đổi
    </script>
```

## Sự khác biệt giữa `innerText` và `textContent`

### 1. Khi lấy node text
- innerText chỉ lấy nội dung mà trình duyệt hiển thị bỏ qua các thẻ.
- textContent sẽ lấy những gì chúng ta viết và bỏ qua các thẻ.
```html
<div>
  Đây là thẻ div
  <h1>Đây là thẻ h1</h1>
  <span>Đây là thẻ span</span>
  <style>
    .box {
      color: red;
    }
  </style>
</div>
<script>
  let divElement = document.querySelector("div");
  console.log(divElement.innerText);
  console.log(divElement.textContent);
</script>
```
![kết quả](https://scontent-xsp1-3.xx.fbcdn.net/v/t1.15752-9/190180041_316272710129072_2195593478683622793_n.png?_nc_cat=107&ccb=1-3&_nc_sid=ae9488&_nc_ohc=8VWjxYQwOI0AX_eoWzv&_nc_ht=scontent-xsp1-3.xx&oh=e849b9c2e27a9870683c2a113e0d4104&oe=60D6C0DF)

### 2. Khi thay đổi node text

- Đối với `innerText`: Nếu chúng ta gõ enter xuống dòng thì sẽ được chuyển đổi thành thẻ `<br>` vì thế khi hiển thị cũng sẽ được xuống dòng.
```html
<div>
  Đây là thẻ div
  <h1>Đây là thẻ h1</h1>
  <span>Đây là thẻ span</span>
  <style>
    .box {
      color: red;
    }
  </style>
</div>
<script>
  let divElement = document.querySelector("div");
  console.log(divElement.innerText = `
      
   nội dung thay đổi tại đây

      `);
</script>
```
![kết quả](https://scontent.fdad2-1.fna.fbcdn.net/v/t1.15752-9/192098687_825183751745637_3313670949930825002_n.png?_nc_cat=100&ccb=1-3&_nc_sid=ae9488&_nc_ohc=0MeUnr9BhH4AX95HA39&tn=aPJlnR-rezZbCgJA&_nc_ht=scontent.fdad2-1.fna&oh=bbbc2b7e0e079feae617acf861db6c78&oe=60D7C47E)

- Đối với `textContent`: Khi chúng ta gõ enter xuống dòng thì không được chuyển đổi thành thẻ `<br>` vì thế khi hiển thị sẽ không xuống dòng.

![Kết quả](https://scontent-xsp1-1.xx.fbcdn.net/v/t1.15752-9/190108203_4113576148677584_8803995630447234079_n.png?_nc_cat=103&ccb=1-3&_nc_sid=ae9488&_nc_ohc=w0C3oa5JLWgAX8gUiIj&_nc_ht=scontent-xsp1-1.xx&oh=ba235ee9d811caff04287f1d05eb36c3&oe=60D5E5BE)