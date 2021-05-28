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