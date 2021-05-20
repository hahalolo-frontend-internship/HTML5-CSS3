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

# GIT FLOW

- Git Flow là tên gọi của 1 tool hỗ trợ branch model gọi là `A successful Git branching model` do Vincent Driessen đề xuất ra. Người ta thường gọi đó là model hay tool.
- Có 5 kiểu với mỗi vai trò khác nhau.
- Switch các kiểu với nhau để phát triển bằng việc set trước các branch, những rule khi merge , dù có bao nhiêu developer cùng thời điểm phát triển cũng có thể quản lý branch dễ dàng, và tránh được những vấn đề do merge tiếp theo.
  ![git-flow](https://github.com/hahalolo-frontend-internship/HTML5-CSS3/raw/dev-hoxuananh/hoxuananh/gitflow.png)

## Mục đích

- Các nhóm công việc triển khai song song nhưng không ảnh hưởng tới nhau.

- Các môi trường devlopment, staging và production tách biệt giúp quá trình kiểm thử (Quality Assurance = Đảm bảo chất lượng), trả lại feedback(phản hồi) và xử lý các issue được gọn gàng và thống nhất.

## Ý tưởng

- Duy trì các nhánh branch không đổi, tức không xóa trong suốt dòng đời sản phẩm.
- Branch master sẽ luôn là branch chính áp dụng cho prodution, trong khi các branch hotfix, features hay develop cung cấp các bản để phục vụ QA và hoàn thiện trước khi được đẩy lên master.
- Khác với cách thông thường tạo ra nhiều vấn đề xảy ra ngay trên production. Git Flow đẩy quá trình QA vào một phần bắt buộc cho cả developer và team QA yêu cầu sự hoàn thiện cao hơn về chất lượng đầu ra.

## Các nhánh trong git-flow

Git-flow gồm có 2 nhánh chính là Master, Develop và 3 nhánh phụ là Feature, Release, HotFix.

### 1. Nhánh Master

Là branch được tạo mới repository và tạo mặc định trong Git. Trong git-flow thì ta không commit trực tiếp vào master, mà đây chỉ là branch dùng để thực hiện merge.

### 2. Nhánh Develop

Là branch trung tâm cho việc phát triển. Do với mỗi thay đổi ta lại ngắt branch feature tương ứng cho nên có thể nói đây là branch được dùng nhiều nhất trong quá trình phát triển. Cần đặt tên branch sao cho người khác có thể thấy ngay nội dung thay đổi là gì. Mỗi branch được ngắt ra để làm này sau khi làm xong ta lại merge vào develop, merge xong sẽ xóa nó đi.

### 3. Nhánh Release

- Tách từ branch develop

- Merge vào develop và master

- Đặt tên : release-\*

- Dùng để release sản phẩm như đúng tên gọi của nó. Khi release sản phẩm thì có rất nhiều task liên quan khác cần thiết, những task liên quan đó sẽ được release trên branch release mà ta ngắt từ branch develop. Sau khi release xong sẽ merge vào branch master và branch develop ghi release tag vào merge commit của branch master sau đó xóa branch release đi.

### 4. Nhánh Hotfix

- Tách từ master

- Merge vào develop và master

- Đặt tên : hotfix-\*

- Khi release sản phẩm đôi khi phát hiện những bug rất nghiêm trọng. Những lúc như này ta sẽ ngắt ra branch hotfix trực tiếp từ branch master để tiến hành sửa, sau khi sửa xong sẽ merge vào master và develop và ghi release tag. Sau đó sẽ xóa branch hotfix đi.

- Ưu điểm của việc tách nhánh này ở chỗ các team members khác có thể tiếp tục công việc ở develop trong khi những người khác có thể tập trung vào fix bug của prodution.

### 5. Nhánh Feature

- Tách từ develop

- Merge vào develop

- Đặt tên: tự do ngoại trừ master, develop, release-_, hotfix-_

- Sử dụng để phát triển các feature mới phục vụ cho release sau này.

- Khi bắt đầu phát triển một chức năng, có thể chưa rõ thời điểm chức năng đó được tích hợp vào hệ thống và release. Feature branch sẽ tồn tại trong quá trình chức năng được phát triển, cuối cùng sẽ được merge lại vào develop hoặc bị bỏ đi nếu chức năng đó không còn cần thiết.

- Chỉ tồn tại ở repos của developers chứ không ở origin.
