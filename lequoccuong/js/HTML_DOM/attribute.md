# Node Attribute

- Được lấy ra từ `node element`
- Các thuộc tính của các element như: `id`, `class`, `title`,.. là các `node attribute`

## Thêm attribute vào node element

- Chỉ thêm được với `quertSelector`.

- Bước 1: Selector element muốn thêm `attribute`.

```js
let headingElement = document.querySelector("h1");
```

- Bước 2: thiết lập `attribute` có 2 cách:
  - Cách 1: Cách này chỉ thiết lập những attribute mà thẻ đó thực tế sẽ có, những attribute thực tế không có trong thẻ sẽ không được thêm vào.

```js
headingElement.title = "Đây là thẻ h1";
```

    - Cách 2: Cách này sẽ thiết lập bất kỳ attribute nào dù thẻ đó thực tế không có attribute đó.

```js
headingElement.setAttribute("title", "Đây là thẻ h1");
```

## Lấy giá trị của attribute của node element

- Có 2 cách lấy giá trị của attribute

    - cách 1: chỉ lấy được những attribute mà thẻ đó thực tế sẽ có

    ```js
    let headingElement = document.querySelector("h1");
    console.log(headingElement.title);
    ```

    - Cách 2: Lấy được tất cả attribute.

    ```js
    let headingElement = document.querySelector("h1");
    console.log(headingElement.getAttribute("title"));
    ```

