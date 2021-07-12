# Module

## Export và Import

### Named Export

- Sử dụng `export` riêng lẻ ở cuối `file module`. Cách sử dụng này được gọi là `"named export"` do ta định nghĩa tên của object đang được `export` trong khi đang `export`.

- Ví dụ

```js
// foobar.js
function foo() {
  return "foo";
}
function bar() {
  return "bar";
}
export { foo, bar };

// main.js

import { foo, bar } from "foobar";
foo();
bar();

import * as lib from "foobar";
lib.foo();
lib.bar();
```

### Export objects/function khi tạo ra chúng

```js
// foobar.js
export function foo() {
  return "foo";
}
export function bar() {
  return "bar";
}

// main.js

import { foo, bar } from "foobar";
foo();
bar();

import * as lib from "foobar";
lib.foo();
lib.bar();
```

### Default export

- Một file có thể không có hoặc chỉ có 1 `"default export"`.
- Đối với `"named export"`, ta có thể sử dụng nhiều export trong một file.

```js
// foobar.js

export default function foo() {
  return "default foo";
}

export function bar() {
  return "bar";
}

// main.js

// cách này cho phép ta chỉ import foo
import mylib from 'foobar';

// cách này cho phép ta import cả foo và bar
import mylib, {bar} from 'foobar';
```
