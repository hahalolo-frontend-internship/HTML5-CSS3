# CSS

- Viết tắt của từ Cascading Style Sheets, được dùng để trang trí, định dạng bố cục cho trang web, không có ý nghĩa trong việc thể hiện nội dung.

# Syntax 
![Cú Pháp](https://vietjack.com/css/images/cu_phap_css.gif)


# Pseudo-element
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
# PSEUDO CLASS

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


# MAX-WIDTH
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

# ATTRIBUTE SELECTOR

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

# DISPLAY FLEX

  

  





       
        
    
     





