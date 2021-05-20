# GIT

## 1. Giới Thiệu

- Git là một hệ thống kiểm soát phiên bản phân tán mã nguồn mở và miễn phí được thiết kế để xử lý mọi thứ từ các dự án nhỏ đến rất lớn với tốc độ và hiệu quả.
- Nhờ tiếp cận theo hướng phân tán, Git mang đến những lợi ích vô cùng to lớn như hỗ trợ rất tốt cho teamwork, phân chia task, tổng hợp code trở nên dễ dàng hơn nhiều.
- Một số công dụng của git:
  - Lưu trữ mọi thay đổi của source code.
  - Hỗ trợ nhiều người làm việc cùng lúc.
  - Xem ai thay đổi code.
  - Revert các thay đổi, đưa code về version cũ hơn, không lo mất code.

## 2. Các thuật ngữ trong git

![mô hình git](https://digitalpress.fra1.cdn.digitaloceanspaces.com/4tg23ij/2019/12/git_commands.png)

### 2.1 Working directory

- Là thư mục mà chúng ta đang làm việc, bao gồm toàn bộ file và thư mục con trong nó.

### 2.2 Staging area

- Thuật ngữ Staging aria là thuật ngữ giải thích cho tập hợp toàn bộ các file đã được chỉnh sửa và nằm trong Working directory.
- Chỉ các file nằm trong khu vực Staging area mới được phép commit.

### 2.3 Local repository

- Là repository ở trên máy tính của chính bản thân mình, dành cho một người dùng sử dụng.

### 2.4 Remote repository

- Là repository dùng để chia sẻ giữa nhiều người và bố trí trên server chuyên dụng.

## 3. Sử dụng git - các lệnh cơ bản

### 3.1 git config

- Có thể được cấu hình cho cá nhân với các giá trị của emails, thuật toán cho diff, username và file format,…

  ` git config --global user.email sam@google.com`

### 3.2 git clone

- Câu lệnh Git này dùng để copy 1 project từ Local Respository đến một thư mục khác, hoặc từ server về máy tính của chúng ta.

### 3.3 git init

- Dùng để tạo git repository

### 3.4 git add

- Dùng để thêm file vào staging area

  `git add temp.txt`

### 3.5 git commit

- Sau lệnh add, cần sử dụng câu lệnh Commit để ghi lại việc thay đổi và đẩy thông tin thay đổi lên Local Respository.

  `git commit -m" your comment"`

### 3.6 git push

- Sau câu lệnh Commit, thông tin mới chỉ được cập nhật lên Local Repository. Nếu muốn cập nhật lên server thì phải sử dụng câu lệnh `push`.

`git push origin <name_branch>`

### 3.7 git fetch

- Câu lệnh Git này dùng để lấy source code từ server về Local Repository.
  `git fetch <name_branch>`

### 3.8 git pull

- Lệnh trên sẽ gộp những thay đổi mới kéo về từ máy chủ với nhánh hiện tại trên máy local với câu lệnh.

  `git pull origin master`

### 3.9 git diff

- Hiện thị các thay đổi bạn đã thực hiện mà chưa add, commit.

  `git diff`

### 3.10 git branch

- `git branch`: hiển thị các nhánh đang có.
- `git branch <name_branch>` : tạo nhánh mới với tên nhánh.
- `git branch -d <name_branch>`: xóa nhánh.
- `git checkout <name_branch>`: chuyển nhánh.
- `git checkout -b <name_branch>`: tạo nhánh mới và checkout qua nhánh đó.

### 3.11 git merge

- Merge là hành động khi bạn muốn nhập mã nguồn từ một nhánh khác vào nhánh hiện tại.

  ` git merge <name_branch>`
