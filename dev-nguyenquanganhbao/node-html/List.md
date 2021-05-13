# Danh sách trong HTML

- HTML cung cấp cho người lập trình web 3 cách để xác định danh sách các thông tin. Tất cả các danh sách phải chứa một hoặc nhiều phần tử list. Danh sách có thể gồm:

    - `<ul>` - Một danh sách không có thứ tự. Nó được sắp xếp bằng cách sử dụng các bullet thường.
    - `<ol>` - Một danh sách đã qua sắp xếp. Nó sử dụng một lược đồ số để liệt kê danh sách.
    - `<dl>` - Danh sách định nghĩa trong HTML. Sắp xếp danh sách theo cách tương tự như chúng được sắp xếp trong từ điển.

- Các phần tử con
    + Thẻ `<li>` là một mục.
    + Thẻ `<dt>` là một mục.
    + Thẻ `<dd>` là định nghĩa của mục.

- Thẻ `<ul>`:
    + Thuộc tính `type` của thẻ `<ul>`. 
        * `type="disc"`: dạng hình tròn. Thuộc tính mặc định.
        * `type="square"`: dạng hình vuông.
        * `type="circle"`: dạng đường tròn.
        ```html
        <ul type="disc">
        <ul type="square">  
        <ul type="circle">
        ```
- Thẻ `<ol>`:
    + Thuộc tính `type` của thẻ `<ol>`.
        * `<type="1">`: dạng số. Thuộc tính mặc định.
        * `<type="I">`: dạng số La mã hoa.
        * `<type="i">`: dạng số La mã thường.
        * `<type="A">`: dạng chữ hoa.
        * `<type="a">`: dạng chữ thường.
        ```html
        <ol type="1"> 
        <ol type="I"> 
        <ol type="i"> 
        <ol type="a">
        <ol type="A">
        ```
    + Thuộc tính `start` của thẻ ol để xác định điểm bắt đầu của dãy số, chữ.
    ```html
    <ol type="1" start="4">    - Dãy số bắt đầu từ 4.
    <ol type="I" start="4">    - Dãy số bắt đầu từ IV.
    <ol type="i" start="4">    - Dãy số bắt đầu từ iv.
    <ol type="A" start="4">    - Dãy chữ cái bắt đầu từ D.
    <ol type="a" start="4">    - Dãy chữ cái bắt đầu từ d.
    ```
- Thẻ `<dl>`:   
    ```html
    dl>
    <dt><b>HTML</b></dt>
    <dd>La viet tat cua Hyper Text Markup Language</dd>
    <dt><b>HTTP</b></dt>
    <dd>La viet tat cua Hyper Text Transfer Protocol</dd>
    </dl>
    ```

    