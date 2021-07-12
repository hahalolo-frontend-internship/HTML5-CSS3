# Matches & Closest

## Matches

- Các `elem.matches (css)` không tìm kiếm bất cứ điều gì, nó chỉ đơn thuần là kiểm tra nếu elem phù hợp với CSS-selector nhất định. Nó trả về true hoặc false.

- Phương thức này rất hữu ích khi chúng ta lặp lại các phần tử (như trong một mảng hoặc một cái gì đó) và cố gắng lọc ra những phần tử mà chúng ta quan tâm.

```html
<a href="http://example.com/file.zip">...</a>
<a href="http://ya.ru">...</a>

<script>
  // can be any collection instead of document.body.children
  for (let elem of document.body.children) {
    if (elem.matches('a[href$="zip"]')) {
      console.log("The archive reference: " + elem.href);
    }
  }
</script>
```

## Closest

- Phương thức này có vẻ `elem.closest(css)` là tổ tiên gần nhất phù hợp với CSS-selector. Bản thân elem nó cũng được bao gồm trong tìm kiếm.

- Nói cách khác, phương thức `closest` đi lên từ phần tử và kiểm tra từng phụ huynh. Nếu nó khớp với bộ chọn, thì quá trình tìm kiếm sẽ dừng lại và tổ tiên được trả về.

```html
<h1>Contents</h1>

<div class="contents">
  <ul class="book">
    <li class="chapter">Chapter 1</li>
    <li class="chapter">Chapter 1</li>
  </ul>
</div>

<script>
  let chapter = document.querySelector(".chapter"); // LI

  alert(chapter.closest(".book")); // UL
  alert(chapter.closest(".contents")); // DIV

  alert(chapter.closest("h1")); // null (because h1 is not an ancestor)
</script>
```
