# Display
Thuộc tính display là thuộc tính CSS quan trọng để kiểm soát layout cho trang web. 
1. Block
- Phần tử Block luôn bắt đầu bằng dòng mới và chiếm 100% chiều rộng trang web.
- Các thẻ block
```html
<div>
<h1> - <h6>
<p>
<form>
<header>
<footer>
<section>
```
2. Inline 
- Phần tử Inline không bắt đầu trên dòng mới và chỉ chiếm độ rộng cần thiết. Inline không thể sử dụng được các thuộc tính width, height và margin-top, margin-bottom .
- Các thẻ inline
```html
<span>
<a>
```
3. Display: none;
- display: none; thường được dùng để ẩn một phần tử mà không xóa nó.
4. Display: inline-block;
- Inline-block là cách hiển thị kết hợp cả hai cách trên, chuyển phần tử về hiển thị trên cùng một hàng nhưng nó vẫn thừa hưởng các đặc tính của block.
5. Display: flex;
- Phần tử hoạt động giống như một phần tử khối và trình bày nội dung của nó theo mô hình `flexbox`.
6. Display: inline-flex;
- Phần tử hoạt động giống như một phần tử `inline` và đưa ra nội dung của nó theo mô hình `flexbox`.
7. Display: grid;
- Phần tử hoạt động giống như một phần tử khối và trình bày nội dung của nó theo mô hình `lưới`.
8. Display: inline-grid;
- Phần tử hoạt động giống như một phần tử `inline` và trình bày nội dung của nó theo mô hình `lưới`.
9. Display: table;
- Phần tử này hoạt động giống một phần tử `<table>`.
10. Display:list-item;
- Phần tử hoạt động giống như một phần tử danh sách, mục. Do đó nó có thể sử dụng được thuộc tính `list-style-type` và `list-style-position`.

```html
<!DOCTYPE html>
<html>
    <head>
        <style>
            article {
                background-color: red;
            }

            article span {
                background-color: black;
                color: white;
                margin: 1px;
            }

            article, span {
                padding: 10px;
                border-radius: 7px;
            }

            article, div {
                margin: 20px;
            }
        </style>
    </head>
    <body>
        <article class="container">
            <span>First</span>
            <span>Second</span>
            <span>Third</span>
        </article>
          
          
        <div>
            <label for="display">Choose a display value:</label>
            <select id="display">
                <option selected>block</option>
                <option>inline</option>
                <option>inline-block</option>
                <option>none</option>
                <option>flex</option>
                <option>inline-flex</option>
                <option>grid</option>
                <option>inline-grid</option>
                <option>table</option>
                <option>list-item</option>
            </select>
        </div>
        <script>
            const articles = document.querySelectorAll('.container');
            const select = document.querySelector('select');

            function updateDisplay() {
            articles.forEach((article) => {
                article.style.display = select.value;
            });
            }
            select.addEventListener('change', updateDisplay);

            updateDisplay();
          </script>
    </body>
</html>
```
[Link tham khảo](https://developer.mozilla.org/en-US/docs/Web/CSS/display)

