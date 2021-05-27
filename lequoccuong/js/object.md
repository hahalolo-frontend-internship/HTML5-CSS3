# Object

- Khai báo:

```js
    let myObject = {
        key: value,
        key1: value1,...
        }
```

- Thêm 1 cặp `key:value` sau khi object đã được tạo:

```js
let addressKey = "address";
let myInfo = {
  name: "Cuong",
  [addressKey]: "hue",
};
myInfo.age = 18;
myInfo["my-Email"] = "a@gmail.com";
```

- Lấy value trong object

```js
let myInfo = {
  name: "Cuong",
};
console.log(myInfo.name);
console.log(myInfo["name"]);
```

- Xóa 1 key và value

```js
let myInfo = {
  name: "Cuong",
  age: 18,
};
delete myInfo.age;
console.log(myInfo);
```

- Value là 1 function

```js
let myInfo = {
  name: "Cuong",
  age: 18,
  getAge: function () {
    return this.age;
  },
};
console.log(myInfo.getAge());
```

# Object Constructor

```js
function User(firstName, lastName, avatar) {
  // mô tả những thuộc tính, phương thức sẽ có trong object khi khởi tạo object constructor
  this.firstName = firstName;
  this.lastName = lastName;
  this.avatar = avatar;
  this.getName = function () {
    return `${this.firstName} ${this.lastName}`;
  };
}
let author = new User("Cuong", "Le", "img");
let user = new User("Anh", "Ho", "img");
author.age = 18;
user.address = "Hue";
console.log(author);
console.log(user);
```

# Object Prototype

- Khi khai báo 1 Object Constructor mà chúng ta muốn thêm thuộc tính hay phương thức cho Object Constructor đó thì chúng ta thêm như sau:

```js
function User(firstName, lastName) {
  // mô tả những thuộc tính, phương thức sẽ có trong object khi khởi tạo object constructor
  this.firstName = firstName;
  this.lastName = lastName;
}
User.prototype.age = 18;
let author = new User("cuong", "le");
console.log(author.age);
```

