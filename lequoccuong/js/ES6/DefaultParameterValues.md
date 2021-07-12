# Default Parameter Values

- ES6 cho bạn set giá trị mặc định cho `parameters` khi khai báo hàm ES6.
- Nếu mình không truyền tham số khi gọi hàm thì nó sẽ get giá trị mặc định trong hàm đó

```js
function f(x, y = 7, z = 42) {
  return x + y + z; // 1 + 7 + 42
}
console.log(f(1));
```



