## 13. FLOAT

- Có tác dụng đẩy phần tử sang bên trái hoặc bên phải.

### Nguyên lý hoạt động

- Khi một phần tử được thiết lập thuộc tính `float`:
  - Nó sẽ được bắt đầu ở hàng phía trên, nếu hàng phía trên còn đủ chỗ trống để chứa nó.
  - Nó sẽ bắt đầu ở hàng mới, nếu hàng phía trên không đủ chỗ trống để chứa nó.
  - Nếu một phần tử được thiết lập thuộc tính float nhưng phần tử đứng trước nó không được thiết lập thuộc tính float thì mặc định nó sẽ bắt đầu ở hàng mới.
  - Khi trên một hàng có nhiều phần tử được thiết lập thuộc tính float và mỗi phần tử có chiều cao khác nhau, nếu hàng không đủ chỗ chứa phần tử thì phần tử sẽ bắt đầu bên cạnh phần tử có chiều cao thấp nhất và còn đủ khoảng trống để chứa nó.
- Tắt sự ảnh hưởng của thuộc tính `float`

  - Nếu một phần tử được thiết lập thuộc tính float trong khi các phần tử sau nó không được thiết lập float, thì khi đó phần tử nằm phía sau sẽ bị tác động xấu bởi thuộc tính float.
  - Để khắc phục vấn để trên, chúng ta thêm thuộc tính clear vào phần tử phía sau theo cú pháp:

    `clear: none| left | right | both | inherit`

- Chống tràn phần tử
  - Nếu một phần tử được thiết lập thuộc tính float và có kích thước lớn hơn phần tử chứa nó thì khi đó phần tử sẽ bị tràn ra khỏi phần tử chứa nó.
  - Để khắc phục vấn đề này, ta thêm thuộc tính `overflow:auto` vào phần tử chứa nó.
