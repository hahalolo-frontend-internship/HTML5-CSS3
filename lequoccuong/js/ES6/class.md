# `Class`

- Trong ES6 đã hỗ trợ chúng ta khai báo một đối tượng theo chuẩn OOP, bằng cách sử dụng từ khóa `class`.

- Về cơ bản thì `class` sẽ tạo ra một template để chúng ta có thể sử dụng những object sau này.
- `Class` về cơ bản tạo ra một khuôn mẫu mà chúng ta có thể sử dụng để tạo các đối tượng sau này.

```js
class User {
  constructor(name, age, email) {
    this.name = name;
    this.age = age;
    this.email = email;
  }
  getName() {
    return this.name;
  }
}

const user1 = new User("messi", 31, "messi@gmail.com");
const user2 = new User("ronaldo", 32, "ronaldo@gmail.com");
const user3 = new User("nani", 31, "nani@gmail.com");
console.log(user3.getName());
```

## Inheritance (kết thừa)

```js
class User {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
}

class Person extends User {
  constructor(name, age) {
    super(name);
    this.age = age;
  }
  getAge() {
    return this.name;
  }
}
const person = new Person("Cuong", 18);
console.log(person.getName());
console.log(person);
```
