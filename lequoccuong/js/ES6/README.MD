### 1. Enhanced object literals
- Định nghĩa key: value cho object nhanh gọn
- Định nghĩa method cho object 
- Định nghĩa key cho object dưới dạng biến.

![A](https://scontent.fpnh22-3.fna.fbcdn.net/v/t1.15752-9/193288208_977189369703179_5827163427540334606_n.png?_nc_cat=102&ccb=1-3&_nc_sid=ae9488&_nc_ohc=2pSHJ3LUSTQAX-nOr2O&_nc_ht=scontent.fpnh22-3.fna&oh=fd8a713a07bbcd3a58404836d58df877&oe=60E0D36B)
![A](https://scontent.fpnh22-2.fna.fbcdn.net/v/t1.15752-9/195663311_264936491985762_7232467500050206779_n.png?_nc_cat=111&ccb=1-3&_nc_sid=ae9488&_nc_ohc=iEOzZYe6S2cAX82udN5&tn=aPJlnR-rezZbCgJA&_nc_ht=scontent.fpnh22-2.fna&oh=bc4a6da6fa3117fff5be24b18d1af685&oe=60DF0086)

### 2. Destructuring
- ES5 sẽ lấy giá trị mảng lưu vào biến như này

![a](https://scontent.fpnh22-3.fna.fbcdn.net/v/t1.15752-9/192738463_1241673422959203_3151153546684174601_n.png?_nc_cat=102&ccb=1-3&_nc_sid=ae9488&_nc_ohc=0eTgocDfFMoAX8JtdJ6&_nc_ht=scontent.fpnh22-3.fna&oh=b289df84cf3919203f5b8b791c829389&oe=60E136E7)

- ES6 thì như này

![a](https://scontent.fpnh22-1.fna.fbcdn.net/v/t1.15752-9/194769486_242324847656606_9014685443173997879_n.png?_nc_cat=110&ccb=1-3&_nc_sid=ae9488&_nc_ohc=iv8NrnCXYPsAX9-GEa0&tn=aPJlnR-rezZbCgJA&_nc_ht=scontent.fpnh22-1.fna&oh=83142768515d0f71a765f159ff1d9a60&oe=60DF764B)

![a](https://scontent.fpnh22-2.fna.fbcdn.net/v/t1.15752-9/193124239_1146811305827351_2412361850389631630_n.png?_nc_cat=103&ccb=1-3&_nc_sid=ae9488&_nc_ohc=DlYynvGw-lAAX_GoYwU&_nc_ht=scontent.fpnh22-2.fna&oh=c524e39300b2961f93561b91997ec795&oe=60DFA63C)


- Khi 1 object có 1 object con thì như thế nào

```js
let course  = {
        name: 'javascript',
        price: 1000,
        children: {
            name: 'PHP'
        }
    }
                            //đổi tên name con
    let {name: parentName, children: {name:childrenName} } = course
    // đổi tên name đầu tiên
    console.log(parentName);
    console.log(childrenName);
```

![a](https://scontent.fpnh22-1.fna.fbcdn.net/v/t1.15752-9/193188514_471085107322717_5868878208834921021_n.png?_nc_cat=110&ccb=1-3&_nc_sid=ae9488&_nc_ohc=uTO9xQbU4SQAX94hNkm&_nc_ht=scontent.fpnh22-1.fna&oh=c033c40b866a2f6c08ff4675b64ad155&oe=60DED999)

- Trường hợp lấy 1 key không có trong object thì gắn 1 giá trị mặc định như sau nếu k có gắn giá trị mặc định thì giá trị của nó  là `UNDEFINED`. Khi chúng ta thêm `key` đó vào và gán `value` thì sẽ lấy `key` và `value` đó thay cho giá trị mặc định

![a](https://scontent.fpnh22-1.fna.fbcdn.net/v/t1.15752-9/196948438_195296032469764_5868618787433508141_n.png?_nc_cat=101&ccb=1-3&_nc_sid=ae9488&_nc_ohc=ViiM-_qZz08AX-nNjWL&_nc_ht=scontent.fpnh22-1.fna&oh=47e98ec39a42236bbbc0e673377a131d&oe=60E0218D)

![a](https://scontent.fpnh22-2.fna.fbcdn.net/v/t1.15752-9/193470146_2394600607361050_5293870688617929872_n.png?_nc_cat=100&ccb=1-3&_nc_sid=ae9488&_nc_ohc=acCM-QAVnLAAX_Ch9TJ&tn=aPJlnR-rezZbCgJA&_nc_ht=scontent.fpnh22-2.fna&oh=9ad492ea544a7c6a561ebbbe37248801&oe=60E07366)

- Thay vì `ES5` viết như này, mỗi lần lấy `value` đều phải `obj.key`

![a](https://scontent.fpnh22-1.fna.fbcdn.net/v/t1.15752-9/195058264_819040722360058_1990295891809437425_n.png?_nc_cat=101&ccb=1-3&_nc_sid=ae9488&_nc_ohc=k8Eik7WhxtQAX-P5qfq&_nc_ht=scontent.fpnh22-1.fna&oh=32ae578e8c6bf565d2106da41a75e3dc&oe=60DEE046)

- Thì `ES6` với `Destructuring` và `...rest` sẽ làm được như này

![a](https://scontent.fpnh22-1.fna.fbcdn.net/v/t1.15752-9/197052114_512713260146299_3361281580510855086_n.png?_nc_cat=110&ccb=1-3&_nc_sid=ae9488&_nc_ohc=JRfIhenPC0sAX9W_sbS&_nc_oc=AQllazR5LOb2rgpPAxwenoDG8nb1sMiFQQ9xk2VR7nupjqk2AyitMEJcJTrE6B3zu_o&_nc_ht=scontent.fpnh22-1.fna&oh=f9f1d13005175e8809aa5089579a2ee6&oe=60DE5148)

- `Array` cũng tương tự

![a](https://scontent.fpnh22-3.fna.fbcdn.net/v/t1.15752-9/195384534_145147057666552_1529373056545217270_n.png?_nc_cat=105&ccb=1-3&_nc_sid=ae9488&_nc_ohc=CGKZf1PqGMcAX-uHszL&_nc_ht=scontent.fpnh22-3.fna&oh=b8cb07f426af6f8619745c6bcfb3599b&oe=60DEB748)

### 3. Rest parameters (toán tử rest)
- `...` khi kết hợp với `Destructuring` thì nó là `rest`

- Trường hợp dưới đây đại diện các phần tử còn lại trong mảng.

![a](https://scontent.fpnh22-3.fna.fbcdn.net/v/t1.15752-9/194615582_228089072147458_5203457072506095455_n.png?_nc_cat=105&ccb=1-3&_nc_sid=ae9488&_nc_ohc=KbAYpXfYmPcAX-tvFKn&tn=aPJlnR-rezZbCgJA&_nc_ht=scontent.fpnh22-3.fna&oh=f0e1f2ad3a8d1012dada1fd618de45f2&oe=60E0063E)

- Đối với Object thì tương tự array nhưng Phải gọi đúng `KEY` của object không được đổi tên khác.

![a](https://scontent.fpnh22-1.fna.fbcdn.net/v/t1.15752-9/194711221_2982690718675140_6638101901267020660_n.png?_nc_cat=108&ccb=1-3&_nc_sid=ae9488&_nc_ohc=wSH8TBOuwxwAX99x7Ez&_nc_ht=scontent.fpnh22-1.fna&oh=9a5ad357fdb20244e208f74f6959a5f1&oe=60DEFF26)

- Cách xóa 1 `key:value` trong 1 object.

![a](https://scontent.fpnh22-3.fna.fbcdn.net/v/t1.15752-9/192957899_1210594222716588_6325274535805164618_n.png?_nc_cat=105&ccb=1-3&_nc_sid=ae9488&_nc_ohc=iq1NU8O6kNoAX_unVbR&_nc_ht=scontent.fpnh22-3.fna&oh=f2307fc85d5605ba1669e64ae4ade7b6&oe=60DE8432)

- Khi định nghĩa tham số trong hàm thì `...` cũng là rest

```js
// Trường hợp này mình truyền bao nhiêu tham số tùy thích
function (...param){

}
```
- Khi dùng `...rest` trong `function` thì nó chính là `array`.

![a](https://scontent.fpnh22-1.fna.fbcdn.net/v/t1.6435-9/196106593_515877846230085_1899269812619737682_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=dbeb18&_nc_ohc=b_K234ytP6YAX-W4Rae&_nc_ht=scontent.fpnh22-1.fna&oh=abd0849279e090c116379323503de249&oe=60DE678F)


### 4. Spead 

- Dùng để nối 2 mảng

![a](https://scontent.fpnh22-2.fna.fbcdn.net/v/t1.15752-9/194444506_890031014880116_2662631415568446663_n.png?_nc_cat=104&ccb=1-3&_nc_sid=ae9488&_nc_ohc=a-zfVZ1I_2gAX_WKP4C&tn=aPJlnR-rezZbCgJA&_nc_ht=scontent.fpnh22-2.fna&oh=afa21d4fe078eb776a5e0941480aff44&oe=60E05EEF)

- Nối 2 Object

![a](https://scontent.fpnh22-2.fna.fbcdn.net/v/t1.15752-9/195748847_335574011373212_4331667299884308065_n.png?_nc_cat=111&ccb=1-3&_nc_sid=ae9488&_nc_ohc=xr6MP2n-lIcAX9NCiT1&_nc_ht=scontent.fpnh22-2.fna&oh=159afc9f078c61cb23df62c60de8c5ba&oe=60E02887)

- `...rest` và `spread` kết hợp

![a](https://scontent.fpnh22-3.fna.fbcdn.net/v/t1.15752-9/197175305_978735472897649_748415909681727931_n.png?_nc_cat=102&ccb=1-3&_nc_sid=ae9488&_nc_ohc=BTGT7aQpnWEAX95oMAf&_nc_ht=scontent.fpnh22-3.fna&oh=0e910f25fa5b98d210addf071e784c24&oe=60E059B8)

### 5. Tagged template literals

```js 
function highlight([first, ...strings], ...value) {
  return value.reduce((acc, cur)=> [acc , `<span>${cur}</span>`, strings.reduce.shift],
  [first]).join('');
}
let cuong='Cường';
let age = 18;
// Tagged template literals
let html = highlight`Lê Quốc ${cuong} age ${age} !`
console.log(html);
```

### 6. Modules