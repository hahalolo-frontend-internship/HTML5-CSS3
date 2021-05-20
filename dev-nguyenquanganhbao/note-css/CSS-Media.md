# Responsive
![Responsive](../img/responsive.gif)

# Media

1. @media CSS là gì?
@media CSS là một tính năng mới của CSS3, tính năng này cho phép ta tùy chỉnh CSS cho nhiều thiết bị khác nhau từ máy tính cho đến điện thoại smart phone và các thiết bị in ấn. 


Cú pháp:
```css
@media not|only mediatype and (media feature) {
    CSS-Code;
}
```
Trong đó: 
- `mediatype` gồm các thuộc tính hay sử dụng sau:
    + `all`: Dùng cho mọi thiết bị.
    + `print`: Dùng cho máy in.
    + `screen`: Dùng cho máy tính và các thiết bị smart phone.
- `media feature` thì gồm các thuộc tính sau:
    + `aspect-ratio`: Tỉ lệ giữa chiều rộng và chiều cao của viewport.
    + `min-aspect-ratio`: Tỉ lệ tối thiểu giữa chiều rộng và chiều cao của viewport.
    + `max-aspect-ratio`: Tỉ lệ tôi đa giữa chiều rộng và chiều cao của viewport.
    + `color`: Số bits cho mỗi màu sắc của device.
    + `color-index`: Số lượng màu sắc mà device có thể hiển thị.
    + `device-aspect-ratio`: Tỉ lệ giữa chiều rộng và chiều cao của device.
    + `max-device-aspect-ratio`: Tỉ lệ tối đa giữa chiều rộng và chiều cao của device.
    + `min-device-aspect-ratio`: Tỉ lệ tối thiểu giữa chiều rộng và chiều cao của device.
    + `device-height`: Chiều cao của device .
    + `device-width`: Chiều rộng của device.
    + `height`: Chiều cao của viewport.
    + `width`: Chiều rộng của viewport.
    + `max-width`: Chiều rộng tối đa của viewport.
    + `min-width`: Chiều rộng tối thiểu của viewport.
    + `max-height`: Chiều cao tối đa của viewport.
    + `min-height`: Chiều cao tối thiểu của viewport.
    + `min-device-width`: Chiều rộng tối thiểu của device.
    + `max-device-width`: Chiều rộng tối đa của device.
    + `min-device-height`: Chiều cao tối thiểu của device.
    + `max-device-height`: Chiều cao tối đa của device.
    + `orientation`: Định hướng của khung nhìn (xoay hoặc không xoay thiết bị).
    + `resolution`: Độ phân giải của thiết bị đầu ra (sử dụng dpi hoặc dpcm).

- `Device`: Là thiết bị sử dụng website như Laptop, Desktop, Iphone, ..
- `Viewport`: Là kích thước hiển thị của giao diện.
2. Sử dụng @media với các thiết bị di động và máy tính
- PC first trong Rseponsive.
PC first là khái niệm để chỉ tuần tự responsive giao diện từ màn hình to xuống màn hình nhỏ. Để làm việc với mô hình này chúng ta sử dụng `max-width` trong media query.
```css
/*Ipad ngang(1024 x 768)*/
@media only screen and (max-width: 1024px){
  
}
/*Ipad dọc(768 x 1024)*/
@media only screen and (max-width: 768px){
    
}
/*Tablet nhỏ(480 x 640)*/
@media only screen and (max-width: 480px){
    
}
/*Smart phone nhỏ*/
@media only screen and (max-width: 320px){
    
}
```
- Mobile First trong Responsive.
Tuần tự tiến trình responsive của chúng ta xuất phát từ màn hình nhỏ và xây dựng dần lên thiết bị có kích thước to. Để làm việc với mô hình này chúng ta sử dụng tham số `min-width` trong media query.
```css
/*Smart phone nhỏ*/
@media only screen and (min-width: 320px){
    
}
/*Tablet nhỏ(480 x 640)*/
@media only screen and (min-width: 480px){
    
}
/*Ipad dọc(768 x 1024)*/
@media only screen and (min-width: 768px){
    
}
/*Ipad ngang(1024 x 768)*/
@media only screen and (min-width: 1024px){
  
}
```
