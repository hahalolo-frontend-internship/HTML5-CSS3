# Template Literals

- `Template Literals` hay còn gọi là `Template Strings` là một cú pháp để khai báo `String` trong `Javascript`.
- Nó cho phép chúng ta sử dụng `multi-line string`, sử dụng biến, biểu thức, hàm bên trong `string` mà không phải thông qua phép cộng `string`.
- Được viết bằng cách bao quanh chuỗi có dấu trọng âm ` `
- Biểu thức nội suy `${}`

```js
const text = "Le Quoc Cuong\n" + "Hue\n" + "Viet Nam";
const text2 = `Le Quoc Cuong  
    Hue
    Viet Nam`;

// biểu thức nội suy

let number = 1;
const text3 = "Đây là số : " + number; //old
const text4 = `Đây là số : ${number}`;
```
