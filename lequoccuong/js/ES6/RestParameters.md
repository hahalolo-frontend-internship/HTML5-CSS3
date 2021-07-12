# `Rest parameters`
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
- Khi dùng `...rest` trong `function` thì nó sẽ là `array`.

![a](https://scontent.fsgn2-5.fna.fbcdn.net/v/t1.15752-9/198733139_602622134034118_8708087399780346432_n.png?_nc_cat=103&ccb=1-3&_nc_sid=ae9488&_nc_ohc=KRPmG4gbWVMAX-rQ71T&_nc_ht=scontent.fsgn2-5.fna&oh=bff4aa283a0aa9b87c29456462683560&oe=60C81E51)
