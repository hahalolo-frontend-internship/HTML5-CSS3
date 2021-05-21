# Git

1. Git là gì? 

Git là một Hệ thống quản lý phiên bản phân tán (Distributed Version Control System – DVCS), là một trong những hệ thống quản lý phiên bản phân tán phổ biến nhất hiện nay. DVCS nghĩa là hệ thống giúp mỗi máy tính có thể lưu trữ nhiều phiên bản khác nhau của một mã nguồn được nhân bản (clone) từ một kho chứa mã nguồn (repository), mỗi thay đổi vào mã nguồn trên máy tính sẽ có thể ủy thác (commit) rồi đưa lên máy chủ nơi đặt kho chứa chính. Và một máy tính khác (nếu họ có quyền truy cập) cũng có thể clone lại mã nguồn từ kho chứa hoặc pull lại một tập hợp các thay đổi mới nhất trên máy tính kia.


2. Các thuật ngữ
- Working directory: là thư mục mà chúng ta đang làm việc, bao gồm toàn bộ file và thư mục con trong nó.
- Staging area: là thuật ngữ giải thích cho tập hợp toàn bộ các file đã được chỉnh sửa và nằm trong Working directory. Chỉ các file nằm trong khu vực Staging area mới được phép commit.
- Local repository: là repository ở trên máy tính của chính bản thân mình, dành cho một người dùng sử dụng.
- Remote repository: là repository dùng để chia sẻ giữa nhiều người và bố trí trên server chuyên dụng.

3. Các git lệnh cơ bản
- **Thiết lập chứng thực cá nhân**
```
$ git config --global user.name "User Name"
$ git config --global user.email "username@gmail.com"
```
Lưu ý: –global được sử dụng để áp dụng cho tất cả các projects. Nếu bạn ko sử dụng –global thì settings sẽ chỉ dùng cho riêng project đó.
- **Tạo một kho chứa Git**
```
$ git init <name>
```
Nếu như bạn muốn theo dõi một dự án cũ trong Git, bạn cần ở trong thư mục của dự án đó. Lệnh này sẽ tạo một thư mục mới có tên .git, thư mục này chứa tất cả các tập tin cần thiết cho kho chứa.
- **Sao chép một kho chứa đã tồn tại**
```
$ git clone <url>
```
- **Xem trại trạng thái**
```
$ git status
```
- **Cập nhật thay đổi**
Sau khi bạn thay đổi source code: thêm mới, sửa, xoá files,… Bạn cần phải cập nhật lên Staging Area. 
```
$ git add <tên_file> hoặc . (cập nhật tất cả)
```
Sau lệnh add, bạn cần sử dụng câu lệnh Commit để đây thông tin thay đổi lên Local Respository:
```
$ git commit -m "Message"
```
- **Cập nhật lên server**
Sau câu lệnh Commit, thông tin mới chỉ được cập nhật lên Local Repository. Nếu muốn cập nhật lên server thì bạn phải sử dụng câu lệnh push:
```
$ git push origin <name_branch>
```
Ngoài ra, nếu chưa tồn tại remote trên server thì bạn cần phải add mới một remote trước rồi mới push:
```
$ git remote add origin <remote_url>
$ git push origin <name_branch>
```
- **Pull từ remote repository**
```
$ git pull origin master
```
Lệnh trên sẽ kéo những thay đổi mới từ máy chủ về với nhánh hiện tại trên máy local.
- **Nhánh trong git**
Khi sử dụng Git, bạn có thể tạo ra nhiều nhánh (branch) khác nhau. Câu lệnh Git này dùng để kiểm tra các branch hiện tại:
```
$ git branch
```
Để tạo mới một branch:
```
 $ git branch <name_branch>
 ```
- **Chuyển nhánh**
Trước khi muốn thay đổi source code, điều đầu tiên mà bạn cần phải làm là checkout một nhánh. Để checkout một nhánh, bạn dùng câu lệnh Git sau:
```
$ git checkout <name_branch>
```
- **Gộp nhánh**
Sau một thời gian cập nhật các file và push lên git trên branch mới, bây giờ mình cần ghép (merge) code lại vào nhánh gốc (master). Trước tiên, cần phải checkout đến branch master, sau đó thì dùng lệnh merge để ghép branch mới vào branch master.
```
$ git checkout master
$ git merge <name_branch_merge>
```
4. Git Flow
- Git Flow là tên gọi của 1 toll hỗ trợ branch model gọi là A successful Git branching model do Vincent Driessen đề xuất ra. Người ta thường gọi đó là model hay tool.

- Lợi ích:
    + Các công việc triển khai song song nhưng không ảnh hưởng tới nhau
    + Các môi tường devlopment, staging và production tách biệt giúp quá trình kiểm thử đảm bảo chất lượng, trả lại feedback và xử lý các issue được gọn gàng và thống nhất.

![gitflow](https://images.viblo.asia/84f47fd1-a009-4beb-8957-26395fe1023d.png)

- Các nhánh trong git-flow
    + Nhánh Master:
        Là branch được tạo mới repository và tạo mặt định trong Git. Trong git-flow thì ta không commit trực tiếp vào master, mà đây chỉ là branch dùng để thực hiện merge.

    + Nhánh Develop:
        Là branch trung tâm cho việc phát triển. Do với mỗi thay đổi ta lại ngắt branch feature tương ứng cho nên có thể nói đây là branch được dùng nhiều nhất trong quá trình phát triển. Cần đặt tên branch sao cho người khác có thể thấy ngay nội dung thay đổi là gì. Mỗi branch được ngắt ra để làm này sau khi làm xong ta lại merge vào develop, merge xong sẽ xóa nó đi.

    + Nhánh Feature:
        Tách từ develop
        Merge vào develop
        Đặt tên: tự do ngoại trừ master, develop, release-*, hotfix-*
        Sử dụng để phát triển các feature mới phục vụ cho release sau này.
        Khi bắt đầu phát triển một chức năng, có thể chưa rõ thời điểm chức năng đó được tích hợp vào hệ thống và release. Feature branch sẽ tồn tại trong quá trình chức năng được phát triển, cuối cùng sẽ được merge lại vào develop hoặc bị bỏ đi nếu chức năng đó không còn cần thiết
        Chỉ tồn tại ở repos của developers chứ không ở origin

    + Nhánh Release:
        Tách từ branch develop
        Merge vào develop và master
        Đặt tên : release-*
        Dùng để release sản phẩm như đúng tên gọi của nó. Khi release sản phẩm thì có rất nhiều task liên quan khác cần thiết, những task liên quan đó sẽ được release trên branch release mà ta ngắt từ branch develop. Sau khi release xong sẽ merge vào branch master và branch develom ghi release tag vào merge commit của branch master sau đó xóa branch release đi.

    + Nhánh Hotfix:
        Tách từ master
        Merge vào develop và master
        Đặt tên : hotfix-*
        Khi release sản phẩm đôi khi phát hiện những bug rất nghiêm trọng. Những lúc như này ta sẽ ngắt ra branch hotfix trực tiếp từ branch master để tiến hành sửa, sau khi sửa xong sẽ merge vào master và develop và ghi release tag. Sau đó sẽ xáo branch hotfix đi.
        Ưu điểm của việc tách nhành này ở chỗ các team members khác có thể tiếp tục công việc ở develop trong khi những người khách có thể tập trung vào fix bug của prodution.




