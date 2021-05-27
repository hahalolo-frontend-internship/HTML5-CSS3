# STRING METHODS

## 1. Length

- Tính độ dài của chuỗi.

```javascript
let myString = "Hello world";
console.log(myString.length);//11
```

## 2. Find index - indexOf - search

### indexOf

- Nhận vào 2 tham số:
  - Tham số 1: là chuỗi cần tìm.
  - Tham số 2: là vị trí bắt đầu tìm.
- Tìm vị trí trí index của 1 ký tự trong 1 chuỗi.
- Trả về vị trí đầu tiên trong chuỗi có được.
- Nếu không thấy sẽ trả về là `-1`

```javascript
let myString = "Hello world";
console.log(myString.indexOf("o "));//4
```

### search

- Tương tự như indexOf nhưng chỉ nhận 1 tham số là chuỗi cần tìm kiếm
- Trả về vị trí nếu tìm thấy.
- Trả về `-1` nếu không tìm thấy.
- Tìm kiếm theo biểu thức chính quy.

```javascript
let myString = "Hello world";
console.log(myString.search("o "));//4
```

## 3. Cut string - slice(start,end)

- Truyền vào 2 tham số
  - Tham số 1: vị trí bắt đầu để cắt.
  - Tham số 2: vị trí kết thúc cắt.
  - Nếu truyền vào 1 tham số thì sẽ cắt từ vị trí đó đến hết chuỗi.
- Trả về chuỗi đã cắt

```javascript
let myString = "Hello world";
console.log(myString.slice(3, 8));// lo wo
```

## 4. Replace

- Truyền vào 2 tham số
  - Tham số 1: chuỗi muốn replace
  - Tham số 2: giá trị mới
- Nếu trường hợp có nhiều chuỗi giống nhau thì chỉ replace chuỗi đầu tiên.
- Muốn replace tất cả các chuỗi giống nhau đó dùng biểu thức chính quy /chuoi/g.

```javascript
let myString = "Hello world world";
console.log(myString.replace(/world/g, "all"));//Hello all all
```

## 5. Convert to upper case - Convert to lower case

```javascript
let myString = "Hello world";
console.log(myString.toUpperCase());
```

```javascript
let myString = "Hello world";
console.log(myString.toLowerCase());
```

## 6. Xóa bỏ khoảng trắng thừa ở 2 đầu - trim()

```javascript
let myString = "      Hello world     ";
console.log(myString.trim());//Hello world
```

## 7. cắt 1 chuỗi thành 1 array - split

- Truyền vào 1 tham số là điểm chung giữa các phần tử trong array.
- Nếu truyền vào là `''` thì nó sẽ cắt từng chữ cái 1 thành phần tử trong array

```javascript
let myString = "cuong, anh, bao, hoa";
console.log(myString.split(", ")); //[ 'cuong', 'anh', 'bao', 'hoa' ]
```

## 8. Lấy 1 ký tự trong chuỗi bằng index

- charAt truyền vào 1 tham số là vị trí index của ký tự muốn lấy trong chuỗi.
- Nếu vị trí truyền vào không tồn tại thì sẽ trả về `chuỗi rỗng`

```javascript
let myString = "Hello world";
console.log(myString.charAt(1)); //e
```

- Cách khác
- Nếu vị trí truyền vào không tồn tại thì sẽ trả về `undefined`

```javascript
let myString = "Hello world";
console.log(myString[13]);//undefined
```
