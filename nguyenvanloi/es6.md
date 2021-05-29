## `ES6`    
- ES6 là chữ viết tắt của ECMAScript 6, đây được coi là một tập hợp các kỹ thuật nâng cao của Javascript và là phiên bản mới nhất của chuẩn ECMAScript. 
- Ví dụ bạn cứ tưởng tưởng khi 1 team có nhiều thanh viên làm một dự án mà mỗi người code 1 loại ngôn ngữ, code 1 phong cách khác nhau thì dự án của bạn sẽ ra sao(mình không giám tưởng tượng nữa ). Thì ES6 cũng thế nó là một chuẩn mực để cho các framework từ đó mà phát triển lên hay để cho các lập trình viên code js một các tốt ưu và clear nhất.
### `TỪ KHÓA let`
- ES6 giới thiệu từ khóa let để khai báo các biến. Trước ES6, cách duy nhất để khai báo một biến trong JavaScript là từ khóa var.
    - Các biến được khai báo với từ khóa var có phạm vi trong hàm
    - Trong khi các biến được khai báo với từ khóa let là phạm vi khối { } (block scope).
- Ví du, trong ES5 thì:
    ```js
    // Cú pháp ES5
    for (var i = 0; i < 5; i++) {
        console.log(i); // 0,1,2,3,4
    }
    console.log(i); // 5
 
    ```
- Chúng ta có thể truy cập biến i mặc dù nó được khai báo bên trong vòng lặp for.
- Nhưng ở trong ES6:
    ```js
    // Cú pháp ES6
    for (let i = 0; i < 5; i++) {
        console.log(i); // 0,1,2,3,4
    }
    console.log(i); // undefined
    ```
