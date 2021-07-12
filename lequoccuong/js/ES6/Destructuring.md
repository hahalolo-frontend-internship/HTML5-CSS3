# Destructuring

- `Destructuring` giúp cho việc sao chép, trích xuất lại các `variable` 1 cách rất rõ ràng, dễ hiểu hơn rất nhiều so với những cách thông thường khác và chắc chắn là `line of code` cũng giảm đi đáng kể.

## Array destructuring

- ES5 sẽ lấy giá trị mảng lưu vào biến như này

![a](https://scontent.fpnh22-3.fna.fbcdn.net/v/t1.15752-9/192738463_1241673422959203_3151153546684174601_n.png?_nc_cat=102&ccb=1-3&_nc_sid=ae9488&_nc_ohc=0eTgocDfFMoAX8JtdJ6&_nc_ht=scontent.fpnh22-3.fna&oh=b289df84cf3919203f5b8b791c829389&oe=60E136E7)

- ES6 thì như này

![a](https://scontent.fpnh22-1.fna.fbcdn.net/v/t1.15752-9/194769486_242324847656606_9014685443173997879_n.png?_nc_cat=110&ccb=1-3&_nc_sid=ae9488&_nc_ohc=iv8NrnCXYPsAX9-GEa0&tn=aPJlnR-rezZbCgJA&_nc_ht=scontent.fpnh22-1.fna&oh=83142768515d0f71a765f159ff1d9a60&oe=60DF764B)

![a](https://scontent.fpnh22-2.fna.fbcdn.net/v/t1.15752-9/193124239_1146811305827351_2412361850389631630_n.png?_nc_cat=103&ccb=1-3&_nc_sid=ae9488&_nc_ohc=DlYynvGw-lAAX_GoYwU&_nc_ht=scontent.fpnh22-2.fna&oh=c524e39300b2961f93561b91997ec795&oe=60DFA63C)

## Object destructuring

- Cách lấy giá trị từ object

```js
// ES5
var obj = {
  a: 1,
  b: 2,
  c: 3,
};
var a = obj.a;
var b = obj.b;
var c = obj.c;
console.log(a, b, c); //1 2 3

// ES6
const obj = {
  a: 1,
  b: 2,
  c: 3,
  d: {
    e: 5,
  },
};
const { a, b, c } = obj;
console.log(a, b, c); // 1 2 3
```

- Khi 1 object có 1 object con thì như thế nào

```js
let course = {
  name: "javascript",
  price: 1000,
  children: {
    name: "PHP",
  },
};
//đổi tên name
let {
  name: parentName,
  children: { name: childrenName },
} = course;
console.log(parentName); //javascript
console.log(childrenName); //PHP
```

![a](https://scontent.fpnh22-1.fna.fbcdn.net/v/t1.15752-9/193188514_471085107322717_5868878208834921021_n.png?_nc_cat=110&ccb=1-3&_nc_sid=ae9488&_nc_ohc=uTO9xQbU4SQAX94hNkm&_nc_ht=scontent.fpnh22-1.fna&oh=c033c40b866a2f6c08ff4675b64ad155&oe=60DED999)

- Trường hợp lấy 1 key không có trong object thì gắn 1 giá trị mặc định như sau nếu k có gắn giá trị mặc định thì giá trị của nó là `UNDEFINED`. Khi chúng ta thêm `key` đó vào và gán `value` thì sẽ lấy `key` và `value` đó thay cho giá trị mặc định

![a](https://scontent.fpnh22-1.fna.fbcdn.net/v/t1.15752-9/196948438_195296032469764_5868618787433508141_n.png?_nc_cat=101&ccb=1-3&_nc_sid=ae9488&_nc_ohc=ViiM-_qZz08AX-nNjWL&_nc_ht=scontent.fpnh22-1.fna&oh=47e98ec39a42236bbbc0e673377a131d&oe=60E0218D)

![a](https://scontent.fpnh22-2.fna.fbcdn.net/v/t1.15752-9/193470146_2394600607361050_5293870688617929872_n.png?_nc_cat=100&ccb=1-3&_nc_sid=ae9488&_nc_ohc=acCM-QAVnLAAX_Ch9TJ&tn=aPJlnR-rezZbCgJA&_nc_ht=scontent.fpnh22-2.fna&oh=9ad492ea544a7c6a561ebbbe37248801&oe=60E07366)

- Thay vì `ES5` viết như này, mỗi lần lấy `value` đều phải `obj.key`

![a](https://scontent.fpnh22-1.fna.fbcdn.net/v/t1.15752-9/195058264_819040722360058_1990295891809437425_n.png?_nc_cat=101&ccb=1-3&_nc_sid=ae9488&_nc_ohc=k8Eik7WhxtQAX-P5qfq&_nc_ht=scontent.fpnh22-1.fna&oh=32ae578e8c6bf565d2106da41a75e3dc&oe=60DEE046)

- Thì `ES6` với `Destructuring` và `...rest` sẽ làm được như này

![a](https://scontent.fpnh22-1.fna.fbcdn.net/v/t1.15752-9/197052114_512713260146299_3361281580510855086_n.png?_nc_cat=110&ccb=1-3&_nc_sid=ae9488&_nc_ohc=JRfIhenPC0sAX9W_sbS&_nc_oc=AQllazR5LOb2rgpPAxwenoDG8nb1sMiFQQ9xk2VR7nupjqk2AyitMEJcJTrE6B3zu_o&_nc_ht=scontent.fpnh22-1.fna&oh=f9f1d13005175e8809aa5089579a2ee6&oe=60DE5148)

- `Array` cũng tương tự

![a](https://scontent.fpnh22-3.fna.fbcdn.net/v/t1.15752-9/195384534_145147057666552_1529373056545217270_n.png?_nc_cat=105&ccb=1-3&_nc_sid=ae9488&_nc_ohc=CGKZf1PqGMcAX-uHszL&_nc_ht=scontent.fpnh22-3.fna&oh=b8cb07f426af6f8619745c6bcfb3599b&oe=60DEB748)

- Dùng trao đổi or hoán đổi biến `(Interchanging Or Swapping Variables)`

```js
   const a, b;
    [a, b] = ["Male", "Female"];
    [a, b] = [b, a];

    console.log(a); //Output: Female
    console.log(b); //Output: Male
```
