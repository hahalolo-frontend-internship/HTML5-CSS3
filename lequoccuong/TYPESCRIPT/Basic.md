# Overview

- Mỗi và mọi giá trị trong JavaScript đều có một tập hợp các hành vi mà bạn có thể quan sát khi chạy các hoạt động khác nhau. Điều đó nghe có vẻ trừu tượng, nhưng là một ví dụ nhanh, hãy xem xét một số hoạt động chúng ta có thể chạy trên một thông báo có tên biến.

```ts
// Accessing the property 'toLowerCase'
// on 'message' and then calling it
message.toLowerCase();
// Calling 'message'
message();
```

- Nếu chúng ta chia nhỏ điều này, dòng mã chạy được đầu tiên sẽ truy cập thuộc tính `toLowerCase` và sau đó gọi nó.

- Dòng thứ hai cố gắng gọi `message` trực tiếp.

- Nhưng giả sử chúng ta không biết giá trị của `message` - và điều đó khá phổ biến - thì chúng ta không thể chắc chắn rằng chúng ta sẽ nhận được kết quả gì khi cố gắng chạy bất kỳ mã nào trong số này.

  - Is `message` callable? (`message` có thể gọi được không)
  - Does it have a property called toLowerCase on it? (Nó có một thuộc tính gọi là `toLowerCase` trên đó không?)
  - If it does, is toLowerCase even callable? (Nếu có, liệu `toLowerCase` có thể gọi được không?)
  - If both of these values are callable, what do they return? (Nếu cả hai giá trị này đều có thể gọi được, chúng sẽ trả về giá trị gì?)

- Câu trả lời cho những câu hỏi này thường là những thứ chúng ta ghi nhớ trong đầu khi viết JavaScript và chúng ta phải hy vọng rằng chúng ta đã hiểu đúng tất cả các chi tiết.

- Giả sử `message` được xác định theo cách sau.

```ts
const message = "Hello World!";
```

- Như bạn có thể đoán, nếu chúng tôi cố gắng chạy `message.toLowerCase()`, ta sẽ nhận được một chuỗi được viết thường.

- Còn dòng mã thứ hai thì sao? nó sẽ báo lỗi: `TypeError: message is not a function`.

- Sẽ thật tuyệt nếu ta có thể tránh được những sai lầm như thế này.

- Đối với một số giá trị, chẳng hạn như `string` và `number` nguyên thủy, ta có thể xác định `type` của chúng trong `runtime` bằng cách sử dụng toán tử `typeof`. Nhưng đối với những thứ khác như `function`, không có cơ chế `runtime` tương ứng để xác định `type` của chúng. Ví dụ, hãy xem xét `function` này:

```ts
function fn(x) {
  return x.flip();
}
```

- Chúng ta có thể quan sát bằng cách đọc mã rằng hàm này sẽ chỉ hoạt động nếu được cung cấp một `object` có thuộc tính `flip` có thể gọi.

- Nhưng JavaScript không hiển thị thông tin này theo cách mà chúng tôi có thể kiểm tra khi mã đang chạy.

- Cách duy nhất trong JavaScript thuần túy để biết `fn` làm gì với một giá trị cụ thể là gọi nó và xem điều gì sẽ xảy ra.

- Loại hành vi này khiến bạn khó dự đoán mã sẽ làm gì trước khi chạy, điều đó có nghĩa là khó biết mã của bạn sẽ làm gì trong khi viết.

- Nhìn theo cách này, một kiểu là khái niệm mô tả giá trị nào có thể được truyền cho fn và giá trị nào sẽ bị hỏng.

- Giải pháp thay thế là sử dụng một hệ thống kiểu tĩnh `(static type)` để đưa ra dự đoán về những gì mã được mong đợi trước khi nó chạy.

# Static type-checking

- Hầu hết mọi người không muốn gặp bất kỳ loại lỗi nào khi chạy mã của họ.

- Nếu chúng ta chỉ thêm một chút code, lưu tệp của mình, chạy lại mã và ngay lập tức thấy lỗi, chúng ta có thể nhanh chóng giải quyết vấn đề; nhưng không phải lúc nào cũng vậy.

- Chúng ta có thể đã không kiểm tra tính năng đủ kỹ lưỡng, vì vậy chúng ta có thể không bao giờ thực sự gặp phải một lỗi tiềm ẩn sẽ xảy ra! Hoặc nếu chúng ta đủ may mắn để chứng kiến lỗi, chúng ta có thể đã thực hiện tái cấu trúc lớn và thêm nhiều mã khác nhau mà chúng ta buộc phải tìm hiểu kỹ.

```ts
const message = "hello!";

message();
// This expression is not callable.
// Type 'String' has no call signatures.
```

- Chạy mã cuối cùng đó với TypeScript sẽ cung cấp cho chúng ta thông báo lỗi trước khi chúng ta chạy mã ngay từ đầu.

# Non-exception Failures

- JavaScript cung cấp cho chúng ta các hành vi khác nhau và trả về giá trị `undefined`

```ts
const user = {
  name: "Daniel",
  age: 26,
};
user.location; // returns undefined
```

- Cuối cùng,static type system phải thực hiện lệnh gọi mã nào sẽ được gắn cờ là lỗi trong hệ thống của nó, ngay cả khi JavaScript “hợp lệ” sẽ không gây ra lỗi ngay lập tức. Trong TypeScript, đoạn mã sau tạo ra lỗi về vị trí không được xác định:

```ts
const user = {
  name: "Daniel",
  age: 26,
};

user.location;
// Hiển thị lỗi trước khi chạy mã
// Property 'location' does not exist on type '{ name: string; age: number; }'.
```

- Bắt lỗi chính tả nhanh chóng với typescript

```ts
const announcement = "Hello World!";

// How quickly can you spot the typos?
announcement.toLocaleLowercase();
announcement.toLocalLowerCase();

// We probably meant to write this...
announcement.toLocaleLowerCase();
```

# Types for Tooling

- TypeScript có thể bắt lỗi khi chúng ta mắc lỗi trong mã của mình. Điều đó thật tuyệt, nhưng TypeScript cũng có thể ngăn chúng tôi mắc phải những sai lầm đó ngay từ đầu.

- Type-checker có thông tin để kiểm tra những thứ như liệu chúng ta có đang truy cập vào các thuộc tính phù hợp trên các biến và các thuộc tính khác hay không. Khi có thông tin đó, nó cũng có thể bắt đầu đề xuất những thuộc tính nào bạn có thể muốn sử dụng.

- Điều đó có nghĩa là TypeScript cũng có thể được tận dụng để chỉnh sửa mã và trình kiểm tra kiểu lõi có thể cung cấp thông báo lỗi và hoàn thành mã khi bạn nhập vào trình chỉnh sửa. Đó là một phần của những gì mọi người thường đề cập đến khi họ nói về công cụ trong TypeScript.

- Nói chung: gợi ý code để tránh những sai sót vô ý hoặc giúp code nhanh hơn

# tsc, TypeScript compiler

- Trình biên dịch tsc

- Chúng ta cần phải cài đặt `npm install -g typescript` để chạy được code typescript

- Sau ghi cài xong chúng ta chỉ cần chạy lệnh `tsc fileName.ts` là xong

- Lúc này tsc sẽ biên dịch file ts thành file js

```ts
function greet(person, date) {
  console.log(`Hello ${person}, today is ${date}!`);
}

greet("Brendan");
```

# Emitting with Errors

- Với ví dụ trên nếu chúng ta chạy lệnh `tsc fileName.ts` thì vẫn được biên dịch ra file js

- Tuy nhiên, khi gọi hàm `greet` chúng ta thiếu tham số thứ 2 và được typescript báo lỗi nhưng vẫn được biên dịch ra file js

- Nếu chúng ta không muốn biên dịch từ ts -> js khi file ts có lỗi thì chúng ta sẽ chạy lệnh `tsc --noEmitOnError hello.ts`, lúc này file ts sẽ không được biên dịch cho đến khi hết lỗi.

# Explicit Types

- Chúng ta cần khai báo type rõ ràng cho tất cả các biến, hàm,... để tăng tính rõ ràng hơn, và ts sẽ hỗ trợ tốt hơn khi viết code.

- Ví dụ:

```ts
function greet(person: string, date: Date) {
  console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}
greet("Maddison", Date()); // Argument of type 'string' is not assignable to parameter of type 'Date'.
```

- Ở ví dụ trên chúng ta khai báo tham số date có type là Date, mà khi chúng ta gọi hàm thì `Date()` sẽ trả về 1 chuỗi vì thế sẽ xuất hiện lỗi `Argument of type 'string' is not assignable to parameter of type 'Date'.`

```ts
function greet(person: string, date: Date) {
  console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}
greet("Maddison", new Date());
```
