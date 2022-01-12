# 1. Introduction

- TypeScript có mối quan hệ từ mập mờ đến rõ rằng với JavaScript (bất thường)

- TypeScript cung cấp tất cả các tính năng của JavaScript và một lớp bổ sung bên trên: Hệ thống loại của TypeScript.

- TypeScript là một phần mở rộng mã nguồn mở của JavaScript giúp thay đổi JavaScript từ một ngôn ngữ kịch bản hướng đối tượng thành một ngôn ngữ lập trình hướng đối tượng.

- Nó thực hiện điều này bằng cách thêm các types vào JavaScript.

- Lợi ích chính của việc làm như vậy là nó giúp cho việc bắt lỗi trong quá trình phát triển trở nên dễ dàng hơn rất nhiều.

- Vấn đề với JavaScript là một lỗi thường xảy ra ở phía máy khách hơn là phía nhà phát triển. TypeScript giải quyết vấn đề này bằng cách cho phép bạn biên dịch mã trong IDE của mình trước khi thử nghiệm.

# 2. Types by inference

- TypeScript biết ngôn ngữ JavaScript và sẽ tạo ra các types cho bạn trong nhiều trường hợp.

- Ví dụ: trong việc tạo một biến và gán nó cho một giá trị cụ thể, TypeScript sẽ sử dụng giá trị làm kiểu của nó.

```ts
let helloWorld = "Hello World";
// chúng ta chưa gán types cho biến helloWorld
// biến helloWorld lúc này có type là string
let helloWorld: string = "Hello World";
```

- TypeScript có thể xây dựng một hệ thống kiểu chấp nhận mã JavaScript nhưng có các kiểu.

- Điều này cung cấp một hệ thống kiểu mà không cần thêm các ký tự bổ sung để làm cho các kiểu rõ ràng trong mã của bạn. Đó là cách TypeScript biết rằng helloWorld là một string trong ví dụ trên.

# 3. Defining Types

- Chúng ta có thể sử dụng nhiều mẫu thiết kế khác nhau trong JavaScript. Tuy nhiên, một số mẫu thiết kế khiến các kiểu khó được suy ra tự động.

- Để giải quyết những trường hợp này, TypeScript hỗ trợ một phần mở rộng của ngôn ngữ JavaScript, cung cấp những nơi để bạn cho TypeScript biết các types nên là gì.

- Ví dụ: để tạo một đối tượng có kiểu suy luận bao gồm `name: string` và `id: number`, bạn có thể viết:

```ts
const user = {
  name: "Hayes",
  id: 0,
};
```

- Chúng ta có thể mô tả rõ ràng hình dạng của object này bằng cách sử dụng `interface`:

```ts
interface User {
  name: string;
  id: number;
}
```

- Sau đó, chúng có thể khai báo rằng một đối tượng JavaScript tuân theo hình dạng của `interface` mới bằng cách sử dụng cú pháp như: `TypeName sau một khai báo biến`:

```ts
const user: User = {
  name: "Hayes",
  id: 0,
};
```

- Nếu ta cung cấp một object không phù hợp với `interface` mà ta đã cung cấp, TypeScript sẽ cảnh báo ta

```ts
interface User {
  name: string;
  id: number;
}

const user: User = {
  username: "Hayes",
  id: 0,
};
// Type '{ username: string; id: number; }' is not assignable to type 'User'.
// Object literal may only specify known properties, and 'username' does not exist in type 'User'.
```

- Vì JavaScript hỗ trợ các `class` và lập trình hướng đối tượng, nên `TypeScript` cũng vậy. Ta có thể sử dụng một khai báo `interface` với các lớp:

```ts
interface User {
  name: string;
  id: number;
}

class UserAccount {
  name: string;
  id: number;

  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}

const user: User = new UserAccount("Murphy", 1);
```

- Ta có thể sử dụng các `interface` để chú thích các tham số và trả về giá trị cho các hàm:

```ts
function getAdminUser(): User {
  //...
}

function deleteUser(user: User) {
  // ...
}
```

- Đã có một tập hợp nhỏ các kiểu nguyên thủy có sẵn trong `JavaScript: boolean, bigint, null, number, string, Symbol và undefined` mà bạn có thể sử dụng trong `interface`. TypeScript mở rộng danh sách này với một số thứ khác, chẳng hạn như `any` (cho phép bất types gì), `unknown` (Không biết trước types gì), `never` (không thể xảy ra kiểu này) và `void` (một hàm trả về undefined hoặc không có return value).

```ts
// unknown
const jsonParserUnknown = (jsonString: string): unknown =>
  JSON.parse(jsonString);
//   jsonParserUnknown trả về có thể nhiều types khác nhau không biết trước

// never
const neverReturns = () => {
  // If it throws on the first line
  throw new Error("Always throws, never returns");
};
// một hàm không return sẽ có kiểu never
```

# 4. Composing Types

- Với TypeScript, ta có thể tạo các types phức tạp bằng cách kết hợp các types đơn giản.

- Có 2 cách phổ biến: unions và generics

- Unions: ta có thể khai báo một types có thể là một trong nhiều types. Ví dụ: ta có thể mô tả kiểu boolean là true hoặc false:

```ts
type MyBool = true | false;
```

- Một trường hợp sử dụng phổ biến cho các loại liên hợp là mô tả tập hợp các ký tự chuỗi hoặc số mà một giá trị được phép trở thành:

```ts
type WindowStates = "open" | "closed" | "minimized";
type LockStates = "locked" | "unlocked";
type PositiveOddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;
```

## Unions

- Unions cũng cung cấp một cách để xử lý các types khác nhau. Ví dụ: ta có thể có một hàm nhận một `array gồm các string` hoặc một `string`:

```ts
function getLength(obj: string | string[]) {
  return obj.length;
}
```

- Để biết 1 biến thuộc types nào, ta sử dụng typeof

```ts
const obj: string = "Cường đẹp trai";
console.log(typeof obj); // string
```

## Generics

- Generics cung cấp các biến cho các types.

- Một ví dụ phổ biến là một mảng. Một mảng không có generic có thể chứa bất kỳ thứ gì. Một mảng có số liệu chung có thể mô tả các giá trị mà mảng đó chứa.

```ts
type StringArray = Array<string>;
type NumberArray = Array<number>;
type ObjectWithNameArray = Array<{ name: string }>;
```

- Ta có thể khai báo các loại của riêng mình sử dụng generic:

```ts
interface Backpack<Type> {
  name: Type;
}
const user: Backpack<string> = { name: "12" };
console.log(user);
```

# 4. Structural Type System

- Một trong những nguyên tắc cốt lõi của TypeScript là kiểm tra types tập trung vào hình dạng mà các giá trị có

- Điều này đôi khi được gọi là `"gõ vịt (duck typing)"` hoặc `"gõ cấu trúc(structural typing)"`.

- Trong một hệ thống kiểu kết cấu, nếu hai đối tượng có hình dạng giống nhau thì chúng được coi là cùng types

```ts
interface Point {
  x: number;
  y: number;
}

function logPoint(p: Point) {
  console.log(`${p.x}, ${p.y}`);
}

// Không khai báo types
const point = { x: 12, y: 26 };

// Ở đây tuy point không khai báo types là Point nhưng typescript so sánh hình dạng của point với hình dáng của Point và thấy chúng cùng types nên code không lỗi
logPoint(point); // 12, 26

// biến rect cũng tương tự khớp với Point nên code pass
const rect = { x: 33, y: 3, width: 30, height: 80 };
logPoint(rect); // logs "33, 3"

// biến color không khớp với Point nên sẽ bị lỗi
const color = { hex: "#187ABF" };
logPoint(color);

// Không có sự khác biệt giữa cách các lớp và đối tượng tuân theo các hình dạng
class VirtualPoint {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

const newVPoint = new VirtualPoint(13, 56);
logPoint(newVPoint); // logs "13, 56"
```

- Việc so khớp hình dạng chỉ yêu cầu một tập hợp con các trường của đối tượng phải khớp.

- Nếu đối tượng hoặc lớp có tất cả các thuộc tính được yêu cầu, TypeScript sẽ cho biết chúng khớp với nhau, bất kể chi tiết triển khai.
