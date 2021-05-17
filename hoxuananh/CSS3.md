# CSS3
- Viết tắt của Cascading Style Sheets

- Là ngôn ngữ tạo phong cách và định kiểu cho những yếu tố được viết dưới dạng ngôn ngữ đánh dấu như HTML
# RULE CSS3
![Cú pháp CSS 3](./Rule.png)
# 1. LOAD CSS3 
![Quá trình phân tích](./pas.png) 

1. Đầu tiên Browser tải tệp HTML -> Parse HTML -> xây dựng nên DOM.
2. Trong quá trình Parse HTML tìm thấy ở phần head có stylesheet và nó cũng bắt đầu tải chúng.
3. Quá trình Parse CSS có hai giai đoạn : 
    1. Giải quyết các conflict giữa các định nghĩa CSS(tức là nếu 1 element được config/ kế thừa nhiều giá trị CSS khác nhau thì nên chọn cái nào để hiển thị)
    2. Tính toán các giá trị final value
* ## 1. Resolve conflicting CSS declarations (Cascade)
Các declarations có thể đến từ nhiều nguồn khác nhau: 
- Author : Các CSS mà dev viết.
- User : CSS mà người dùng thay đổi (như người dùng thay đổi font-size của trình duyệt -> declaration cho font size)
- Browser : CSS mà trình duyệt định nghĩa sẵn (như thẻ a thì được in chữ màu xanh, có gạch chân)

Khi mỗi source đều có CSS khác nhau cho 1 elemnt, browser sẽ chọn CSS theo quy tắc(rule)

> *Important > Specificity > Source Order*

### a. Important
- Định nghĩa CSS mà có `!important` sẽ được ưu tiên nhất. Tuy nhiên việc làm dụng `!important` sẽ gây khó khăn cho việc bảo trì.
- Khi các rule có cùng mức độ quan trọng (importance), browser sẽ đi so sánh mức độ chi tiết (specificities).
### b. Specificity
- Inline styles
- IDs.
- Classes, pseudo-classes, attributes
- Elements, pseudo-elements
* Khi có nhiều rule cùng áp dụng cho 1 slide, browser sẽ tính toán 4 giá trị trên và đem ra so sánh, sau đó chọn rule nào có giá trị cao nhất để đem ra hiển thị.
* Inline luôn có độ ưu tiên cao hơn style được viết trong file.


### c. Source order
- Khi các css declaration có cùng specificity, declarations cuối cùng trong code sẽ được chọn.

- Nếu phải dùng css của bên thứ 3, bạn cần lưu ý để đặt author stylesheet cuối cùng.
* ## 2. Process final CSS value
### a. Process

- Quá trình process css gồm 6 bước, được thể hiện bằng hình bên dưới

![process](https://i.imgur.com/X4WNipJ.png)
- Declared value: Lấy tất cả các value đã được định nghĩa (author declarations)
- Cascaded value: Lấy giá trị cascaded.
- Specified value: Nếu không có giá trị cascaded, sẽ lấy giá trị default.
- Computed value: Convert các relative values thành absolute (ví dụ: color: red thì sẽ chuyển thành mã màu gì)
- Used value: Tính toán, dựa trên layout để đưa ra giá trị thích hợp. (ví dụ: 66% thì quy ra px là bao nhiêu) -> phần này có thể cần used value của các phần tử parent.
- Actual value: Làm tròn (phụ thuộc vào browser và device)

### - Convert như thế nào ? 
![convert](https://i.imgur.com/owaoak9.png)
- Default font-size của trình duyệt thường là 16px.
- Các giá trị % hoặc relative(tương đối) đều sẽ được convert ra pixels.
- Nếu dùng font-size: xx% -> giá trị sẽ được tính dựa vào parent font-size.
- Nếu dùng width(padding, margin, ...): x% -> giá trị sẽ được tính dựa vào parent length.
- em dùng cho font-size sẽ được tính bằng parent font-size.
- em dùng để tính length (padding, ..) sẽ cần dựa trên current font-size.
- rem luôn dựa vào document’s root font-size (nếu k có sẽ dùng default font-size của trình duyệt.
- vh and vw được tính trên % của viewport height và width.
### b. Inheritance
- Kế thừa cho phép pass values từ phần tử cha cho phần tử con :v
- 1 số properties được kế thừa: font-family, font-size, color,… (padding, margin sẽ không được kế thừa).
- Computed value là giá trị sẽ được dùng để kế thừa, không phải declared value.
- Chỉ lấy giá trị kế thừa nếu không có value nào được định nghĩa cho phần tử đó.
- Để force việc kế thừa cho 1 gía trị, ta có thể dùng từ `inherit`. Để reset giá trị initial của 1 propety, ta dùng keywork `initial`.

# RENDER TREE
![TREE](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/images/render-tree-construction.png)

# WEBSITE RENDERING : THE VISUAL FORMATTING MODEL
- Thuật toán tính toán các hộp và xác định bố cục
trong số các hộp chủ đề, cho mỗi phần tử trong cây kết xuất, để xác định
bố cục cuối cùng của trang.
### Cách bố trí các hộp này phụ thuộc vào các yếu tố sau

- Kích thước của hộp [box model]
- Loại hộp [inline, inline-block, block]
- Sơ đồ định vị [float, positioning]
- Xếp chồng [z-index]

## 1. BOX MODEL
            
![Box](./box.png)

- Content : Nội dung trong hộp nơi hiển thị văn bản, hình ảnh.
- Padding : Phần khoảng trắng xung quanh nội dung, trong suốt.
- Border  : Đường viền xung quanh nội dung và padding.
- Margin  : Phần lề bên ngoài đường viền, trong suốt.

### Độ rộng thực tế sẽ là 
**total width** = right border + right padding + specified width + left padding + left border

**total height** = top border + top padding + specified height + bottom padding + bottom border

### Property Box-sizing: boder-box;
**total width** = specified width 

**total height** = specified height
![Box](./box-sizing.png)

## 2. BOX TYPES


### BLock-level boxes
- Bắt đầu trên dòng mới
- Chiếm 100% chiều rộng

    >`display: block`

    >`display: flex`

    >`display: table`
### Inline-block boxes
- Chiếm không gian nội dung
- Không ngắt dòng

    >`display: inline-block`

### Inline boxes
- Chỉ chiếm không gian nội dung
- Không ngắt dòng
- Không thay đổi được chiều cao và rộng
- Thay đổi được padding và margin(left, right)

    >`display: inline`

## 3. POSITIONING

- Normal flow :
    - Sơ đồ định vị mặc định 
    - Không trôi nổi
    - Không được định vị tuyệt tối
    - Các yếu tố được bố trí theo thứ tự nguồn của họ 
    - Mặc định là : 
    >`position: relative`
- Float: 
    > `float : left`

    > `float right`
    - Các phần tử bị xóa khỏi normal flow
    - Các phần tử văn bảng và nội tuyến sẽ quấn quanh phần tử nổi.
    - Vùng chứa sẽ không điều chỉnh chiều cao của phần tử
- Absolute positioning
    > `position : absolute`

    > `top,left,bottom,right`

    
    - Các phần tử bị xóa khỏi normal flow
    - Không ảnh hưởng đến nội dung, các yếu tố xung quanh .
    - Sử dụng top, left, bottom, right để điều chỉnh phần tử.

## 4. STACKING
- Xếp chồng các phần tử 

![stacking](./stacking.png)



# 2. PROPERTY

## COLOR
- Màu sắc được chỉ định bằng cách sử dụng tên màu xác định trước hoặc giá trị RGB, HEX, HSL, RGBA, HSLA.
   >rgb(red, green, blue)

    >#rrggbb

    >hsl(hue, saturation, lightness)

    >rgba(red, green, blue, alpha)

    >hsla(hue, saturation, lightness, alpha)

* Trong đó 
    - Mỗi tham số (red, green và blue) xác định cường độ của màu trong khoảng từ 0 đến 255.
    - hue: Xác định độ trên vòng tròn màu (từ 0 đến 360) - 0 (hoặc 360) là màu đỏ, 120 là xanh lục, 240 là xanh lam
    - saturation : Xác định độ bão hòa; 0% là màu xám và 100% là màu đầy đủ (độ bão hòa đầy đủ)
    - lignthness : Xác định độ đậm nhạt; 0% là màu đen, 50% là bình thường và 100% là màu trắng
    - alpha : Xác định độ mờ là một số trong khoảng từ 0,0 (hoàn toàn trong suốt) đến 1,0 (hoàn toàn không trong suốt)
## BACKGROUND

>background-color: color|transparent|initial|inherit;

- color : chỉ định màu nền
- transparent: trong suốt
- initial Đặt thuộc tính này thành giá trị mặc định
- inherit Kế thừa thuộc tính này từ phần tử mẹ của nó

>background-image: url|none|initial|inherit;

- url: URL của hình ảnh. Để chỉ định nhiều hình ảnh, hãy phân tách các URL bằng dấu phẩy
- None : Không có hình nền sẽ được hiển thị. Đây là mặc định
- linear-gradient(): Đặt một gradient tuyến tính làm hình nền. Xác định ít nhất hai màu
- repeating-linear-gradient() :Lặp lại một gradient tuyến tính
- repeating-radial-gradient() :Lặp lại một gradient xuyên tâm
- initial Đặt thuộc tính này thành giá trị mặc định
- inherit Kế thừa thuộc tính này từ phần tử mẹ của nó
>background-repeat: repeat|repeat-x|repeat-y|no-repeat|initial|inherit;
- repeat: Hình nền được lặp lại theo cả chiều dọc và chiều ngang. Hình ảnh cuối cùng sẽ được cắt bớt nếu nó không vừa vặn. Đây là mặc định
- repeat-x: Hình nền chỉ được lặp lại theo chiều ngang
- repeat-y: Hình nền chỉ được lặp lại theo chiều dọc
- no-repeat: Hình nền không được lặp lại. Hình ảnh sẽ chỉ được hiển thị một lần
- space: Hình nền được lặp lại nhiều nhất có thể mà không cần cắt bớt. Hình ảnh đầu tiên và hình ảnh cuối cùng được ghim vào hai bên của phần tử và khoảng trắng được phân bổ đồng đều giữa các hình ảnh
- round: Hình nền được lặp lại và thu nhỏ hoặc kéo dài để lấp đầy khoảng trống (không có khoảng trống)
- initial:
- inherit:
>background-attachment: scroll|fixed|local|initial|inherit;
- scroll : Hình nền sẽ cuộn theo trang. Đây là mặc định.
- fixed  : Hình nền sẽ không cuộn theo trang
- local  : Hình nền sẽ cuộn với nội dung của phần tử
- initial:
- inherit:
>background-position: value;
- left top
- left center
- left bottom
- right top
- right center
- right bottom
- center top
- center center
- center bottom
- x% y%
- xpos ypos
- initial:
- inherit:
>background: bg-color bg-image position/bg-size bg-repeat bg-origin bg-clip bg-attachment initial|inherit;

>background-size: auto|length|cover|contain|initial|inherit;
- auto: Giá trị mặc định. Hình nền được hiển thị ở kích thước ban đầu
- lenght: Đặt chiều rộng và chiều cao của hình nền. Giá trị đầu tiên đặt chiều rộng, giá trị thứ hai đặt chiều cao. Nếu chỉ có một giá trị được cung cấp, giá trị thứ hai được đặt thành "tự động"
- parcentage: Đặt chiều rộng và chiều cao của hình nền theo phần trăm của phần tử mẹ. Giá trị đầu tiên đặt chiều rộng, giá trị thứ hai đặt chiều cao. Nếu chỉ có một giá trị được cung cấp, giá trị thứ hai được đặt thành "tự động"
- cover: Thay đổi kích thước hình nền để bao phủ toàn bộ vùng chứa, ngay cả khi nó phải kéo dài hình ảnh hoặc cắt bớt một chút ở một trong các cạnh
- contain: Thay đổi kích thước hình nền để đảm bảo hình ảnh hiển thị đầy đủ
> background-blend-mode: normal|multiply|screen|overlay|darken|lighten|color-dodge|saturation|color|luminosity;

- normal :  Đặt chế độ hòa trộn bình thường
- multiply : Chế độ hòa trộn nhân
- screen : chế độ hòa trộn bình thường
- overlay: chế độ hòa trộn lớp phủ
- dark : chế độ hòa trộn làm tối
- lighten : chế độ hòa trộn làm sáng
- color-dodge: chế độ hòa trộn màu dodge
- saturation: chế độ hòa trộn bảo hòa
- color : chế độ hòa trộn màu sắc
- luminosity: chế độ hòa trộn độ sáng

## FLOAT

- Có tác dụng đẩy phần tử sang bên trái hoặc bên phải
- Cú pháp
> float: left | right | none | inherit;
- left: đẩy phần tử sang bên trái
- right: đẩy phần tử sang bên phải
### Nguyên lý hoạt động
- Khi một phần tử được thiết lập thuộc tính float:
    - Nó sẽ được bắt đầu ở hàng phái trên, nếu hàng phía trên còn đủ chỗ trống để chứa nó
    - Nó sẽ bằng đầu ở hàng mới, nếu hàng phía trên không đủ chỗ trống để chứa nó
    - Nếu một phần tử được thiết lập float mà trong khi phần tử đứng trước nó không được thiết lập float thì mặc định nó được bắt đầu ở hàng mới.
    - Khi trên một hàng có nhiều phần tử được thiết lập thuộc tính float và mỗi phần tử có chiều cao khác nhau, nếu hàng không đủ chỗ chứa phần tử thì phần tử sẽ bắt đầu bên cạnh phần tử có chiều cao thấp nhất và còn đủ khoảng trống để chứa nó

- Tắt sự ảnh hưởng của thuộc tính float
    - Nếu một phần tử được thiết lập thuộc tính float, trong khi phần tử nằm phía sau nó không được thiết lập thuộc tính float, thì khi đó phần tử nằm phía sau sẽ bị tác động xấu bởi thuộc tính float.
    - Để khắc phục vấn đề này, ta thêm thuộc tính clear vào phần tử phía sau theo cú pháp:
    > clear: none | left | right | both | inherit;
    - none: cho phép phần tử chịu sự ảnh hưởng của thuộc tính float
    - left: không bị ảnh hưởng bởi thuộc tính float left
    - right: không bị ảnh hưởng bởi thuộc tính float right
    - both: không bị ảnh hưởng bởi thuộc tính float
    - inherit: kế thừa giá trị thuộc tính clear của phần tử chứa nó
- Chống tràn phần tử 
    - Nếu một phần tử được thiết lập thuộc tính float và có kích thước lớn hơn phần tử chứa nó thì khi đó phần tử sẽ bị tràn ra khỏi phần tử chứa nó.

    - Để khắc phục vấn đề này, ta thêm thuộc tính overflow:auto vào phần tử chứa nó.

## MAX-WIDTH
- Dùng để thiết lập chiều rộng tối đa cho phần nội dung phần tử.
* Lưu ý: 
     - Đối với phần tử sử dụng thuộc tính width, nếu chiều rộng phần nội dung của cha nó nhỏ hơn chiều rộng của nó thì nó sẽ bị tràn ra ngoài. 
     - Còn đối với phần tử sử dụng thuộc tính max-width, nếu chiều rộng phần nội dung của cha nó nhỏ hơn chiều rộng của nó thì nó sẽ tự động thu hẹp lại để có thể nằm gọn bên trong phần nội dung của cha nó. 
     - Khuyến khích nên sử dụng max-width.
- Các giá trị:
     - `none`: Không thiết lập chiều rộng tối đa
     ```css
      .test{
            background-color:yellow;
            max-width:none;
        }
     ```
     - `length`: Thiết lập chiều rộng tối đa cho phần nội dung dựa theo một giá trị cụ thể (em,rem,px,..)
     ```css
      .test{
            background-color:yellow;
            max-width:none;
        }
     ```
     - parcent : Thiết lập chiều rộng tối đa cho nội dung của phần tử dựa theo tỷ lệ phần trăm chiều rộng phần nội dung của phần tử chứa nó.
        ```css
        .test_03{
            background-color:yellow;
            max-width:25%;
        }
     - initial: Sử dụng giá trị mặc định của nó.
        ```css
        .test{
            background-color:yellow;
            max-width:initial;
        }
        ```
     - inherit: Kế thừa giá trị thuộc tính max-width từ phần tử cha
        ```css
       .father{
            max-width:50%;
        }
        .child{
            background-color:yellow;
            max-width:inherit;
        }
        ```

# 3. PSEUDO ELEMENT
1. Syntax 

    `selector::pseudo-element {
    property: value;
    }`
2. Pseudo

  ## `:first-line`
   - Áp dụng cho element con đầu tiên trong element cha.  
   - Các properties được áp dụng :
        - font properties
        - color properties
        - background properties
        - word-spacing
        - letter-spacing
        - text-decoration
        - vertical-align `[sắp xếp nội dung theo chiều dọc]`
        - text-transform
        - line-height
        - clear

   ## `:first-letter`
   - Áp dụng cho chữ cái đầu tiên trong element
   - Các properties được áp dụng :
        - Bao gồm các properties của first-line
        - margin properties
        - padding properties
        - border properties
        - float

## `::before`    
- Dùng để chèn một số nội dung vào trước nội dung của một element
- Proptier content: thường dùng là none, text, url.

## `::after`
- Dùng để chèn một số nội dung vào sau nội dung của một element

## `::mark`
- Sử dụng cho các điểm đánh dấu của các mục danh sách

## `::selection`
- Áp dụng kiểu cho các phần tử được người dùng đánh dấu (nhấp chuột hoặc kéo chuột qua văn bản)

# 4. PSEUDO CLASS

- Cú pháp:

```css
selector:pseudo-class {
  property: value;
}
```

- Được sử dụng để xác định trạng thái đặc biệt của một element.
- Một số pseudo-classes thường dùng:

  - `Anchor Pseudo-class`: các liên kết có thể được hiển thị theo nhiều cách khác nhau.

    - `:link`: Trạng thái hiện tại của thẻ (chỉ dùng cho thẻ `a`).
    - `:visited`: Trạng thái khi đã click vào thẻ (chỉ dùng cho thẻ `a`).
    - `:hover`: Trạng thái khi di chuyển chuột vào thẻ (dùng cho nhiều thẻ).
    - `:active`: Trạng thái khi click chuột vào thẻ (dùng cho nhiều thẻ).

  - Các `Pseudo-class` khác:

    - `:First-child `: element được chỉ định là element con đầu tiên của element khác.
    - `:Last-child `: Tương tự first-child nhưng là element con cuối cùng
    - `:first-of-type` Với mọi element là element con đầu tiên, của một kiểu cụ thể, của element cha của nó.
    - `:last-of-type` Với mọi element là element con cuối cùng, của một kiểu cụ thể, của element cha của nó.
    - `:nth-child(n)`: Với mọi element là element con thứ n , bất kể kiểu, của element cha của nó. (n có thể là một số, một từ khóa hoặc một công thức.).
    - `:nth-last-child(n)`: Tương tự như child nhưng tính từ element cuối cùng lên.
    - `:nth-last-of-type(n)`:Với mọi element là element con thứ n , của một kiểu cụ thể, của cha mẹ của nó, tính từ element cuối cùng.
    - `:nth-of-type(n)`:Với mọi element là element con thứ n , của một kiểu cụ thể, của element cha của nó.
    - `:only-of-type`: chọn element là con duy nhất của loại nó là con của element cha.
    - `only-child`: trong element cha chỉ có duy nhất 1 element nếu có > 1 thì không được chọn.
    - `:checked `: Với mọi element `<input>` đã chọn (chỉ dành cho các type radio và checkbox) và element `<option>`.
    - `:disabled`: Với mọi element bị disable (chủ yếu được sử dụng trên các element biểu mẫu).
    - `:enabled`: Với mọi element enable (chủ yếu được sử dụng trên các element biểu mẫu).
    - `:empty `: Với mọi element không có element con (bao gồm cả các nút văn bản).
    - `:focus`: dùng để chọn element được focus vào.
    - `:in-range`: chọn tất cả các element có giá trị nằm trong một phạm vi xác định.(trong vùng min - max).
    - `:out-of-range`: chọn tất cả các element có giá trị nằm trong một phạm vi xác định.(ngoài vùng min - max).
    - `:invalid`: chọn các form elements có giá trị không xác thực theo cài đặt của element. (chỉ hoạt động cho các form elements có giới hạn, chẳng hạn như element đầu vào có thuộc tính tối thiểu và tối đa, trường email không có email hợp pháp hoặc trường số không có giá trị số, v.v.).
    - `:valid`: chọn các form elements có giá trị xác thực theo cài đặt của element. (chỉ hoạt động cho các form elements có giới hạn, chẳng hạn như element đầu vào có thuộc tính tối thiểu và tối đa, trường email không có email hợp pháp hoặc trường số không có giá trị số, v.v.).
    - `:lang()`: chọn được sử dụng để chọn các element có attribute lang với giá trị được chỉ định. Giá trị của `lang="value"` thường là mã ngôn ngữ gồm 2 chữ cái.
    - `:not(selector)`: Mọi element KHÔNG phải là element / bộ chọn được chỉ định.
    - :`optional`: Những input không có attribute `required` thì sẽ được chọn (chỉ dùng cho thẻ `input`, `select`, `textarea`)
    - `:read-only`: Những form elements có attribute `readonly` sẽ được chọn
    - `:read-write`: Những form elements `có thể đọc` và `có thể ghi` sẽ được chọn (những element có attribute `readonly` và `disable` sẽ không được chọn).
    - `:required`: Những form elements có attribute `required` sẽ được chọn (chỉ áp dụng cho các thẻ `input`, và `textarea`.)
    - `:root`: Chọn phần tử `root`.
    - `:target`: chọn những element có `id` trùng với `href` trong thẻ `a`




# 5. ATTRIBUTE SELECTOR

- Vùng chọn `[attribute="value"]` được sử dụng để chọn tất cả các phần tử có thuộc tính `[attribute]` và giá trị value được chỉ định.
```css
   li a[rel='contact'] {font-weight: bold;color: cadetblue;} 
```
- Bộ chọn `[attribute~="value"]` được sử dụng để chọn tất cả các phần tử có thuộc tính `[attribute]` chứa giá trị value được chỉ định.

```css
  li .friend[rel~='friend'] {font-weight: bold; font-size: 40px;} 
```
- Bộ chọn `[attribute|="value"]` được sử dụng để chọn tất cả các phần tử có thuộc tính `[attribute]` bắt đầu bằng giá trị value được chỉ định. Không áp dụng cho những giá trị viết liền nhau.
```css
   li a[class|='friend']{
      font-size: 30px;
      color: cornflowerblue;
  } 
```
- Bộ chọn `[attribute^="value"]` được sử dụng để chọn tất cả các phần tử có thuộc tính `[attribute]` bắt đầu bằng giá trị value được chỉ định. Có thể áp dụng cho những giá trị viết liền nhau.
```css
  li a[class^='friend']{
      font-size: 30px;
      color: cornflowerblue;
  } 
```

- Bộ chọn `[attribute$="value"]` được sử dụng để chọn tất cả các phần tử có thuộc tính `[attribute]` kết thúc bằng giá trị value được chỉ định.
```css
  li a[class$='1']{
      font-size: 30px;
      color: cornflowerblue;
  } 
```
- Bộ chọn `[attribute*="value"]` được sử dụng để chọn tất cả các phần tử có thuộc tính `[attribute]` chứa bằng giá trị value được chỉ định.
```css
  li a[class*='e']{
      font-size: 30px;
      color: cornflowerblue;
  } 
```
 
# 6. BIẾN
- Cú pháp: 
> --varidable_name: value;
- Thường được khai báo bên trong pseudo:root (global)
    ```css
    :root{
    --ten-bien: gia tri;
    --background-main-color: #ffa400;
    }
    ```
- Cách dùng:
    - Chỉ cần viết như sau thì có thể gọi biến ra để dùng
    > var(variable_name)
    ```css
    .box {
    background-color: var(--background-main-color);
    }
    ```
- Khai báo local
    ```css
    :root {
    --red: red;
    }
    .other-box {
    --red:pink;    
    /* dùng biến --red ở bên trong để ghi đè ở :root*/
    background-color: var(--red);
    }
    ```

  

  





       
        
    
     





