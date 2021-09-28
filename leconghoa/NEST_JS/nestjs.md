# NEST JS

## Tổng quát:

`NestJS` là một khuôn khổ để xây dựng các ứng dụng phía máy chủ `Node.js` hiệu quả, có thể mở rộng . Nó sử dụng JavaScript tiến bộ, được xây dựng và hỗ trợ đầy đủ TypeScript (vẫn cho phép viết mã bằng JavaScript thuần túy) và kết hợp các yếu tố của OOP (Lập trình hướng đối tượng), FP (Lập trình chức năng) và FRP (Lập trình phản ứng chức năng).

Nhờ `Node.js`, `JavaScript` đã trở thành “ngôn ngữ phổ biến” của web cho cả ứng dụng front và backend. Điều này đã làm nảy sinh các dự án tuyệt vời như `Angular, React và Vue`, tuy nhiên không có thư viện nào trong số chúng giải quyết hiệu quả vấn đề chính của - Kiến trúc. `NestJS` cung cấp kiến ​​trúc ứng dụng sẵn có cho phép các nhà phát triển và nhóm tạo ra các ứng dụng có thể kiểm tra cao, có thể mở rộng, kết hợp lỏng lẻo và dễ bảo trì.

### Tạo dự án mới:

```cmd
$ npm i -g @nestjs/cli
$ nest new project-name
```

Thư mục dự án sẽ được tạo, các root module và một vài tệp tin soạn sẵn khác sẽ được cài đặt, và một thư mục `src` sẽ được tạo và điển vào một số tệp lõi (core).

![img](./cau_truc.png)

![img](./mota_cautruc.png)

`Main.ts` bao gồm một hàm không đồng bộ, sẽ khởi động ứng dụng.

```TypeScript
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
```

<ins>Lưu ý</ins>: một dự án được lồng ghép với Nest CLI sẽ tạo ra cấu trúc dự án ban đầu khuyến khích các nhà phát triển tuân theo quy ước giữ từng mô-đun trong thư mục chuyên dụng của riêng nó.

Nest có thể hoạt động với bất kỳ Framework Node HTTP nào sau khi tạo bộ chuyển đổi. Có hai nền tảng HTTP được hỗ trợ ngay lập tức: `express` và `fastify`.

![img](./express_fastify.png)

Cho dù nền tảng nào được sử dụng, nó sẽ để lộ giao diện ứng dụng của riêng nó. Chúng được xem tương ứng là NestExpressApplicationvà NestFastifyApplication.

Chạy ứng dụng ta dùng lệnh:

```bash
$ npm run start
```

Truy cập `http://localhost:3000/` thì sẽ nhận được kết quả trả về.

## Controller:

Controllers có trách nhiệm xử lý các request gửi đến và trả lại response cho client.

Mục đích của controller là nhận các request cụ thể cho ứng dụng. Cơ chế định tuyến (route) kiểm soát controller nào nhận được request nào. Mỗi controller có nhiều hơn một định tuyến (route) và các định tuyến khác nhau thực hiện các hành động khác nhau.

Một controller cơ bản gồm các class và các decorator. Decorator liên kết với các class với metadata bắt buộc và cho phép Nest tạo ra bản đồ định tuyến (route map) (liên kết các request với controller tương ứng).

Tạo nhanh một controller CRUD với validation bằng lệnh CLI:

```bash
$ nest g resource [name]
```

![img](./controller.png)

[Những nội dung chính](./controller.md)

### Providers:

Providers là một khái niệm cơ bản trong Nest. Nhiều Class Nest cơ bản có thể được coi như một provider như service, repository, factory, helpers, v.v. Ý tưởng chính của một provider là nó có thể inject dependencies; điều này có nghĩa là các đối tượng có thể tạo ra nhiều mối quan hệ khác nhau với nhau và chức năng “nối dây” các instances của đối tượng phần lớn có thể được ủy quyền cho hệ thống runtime Nest.

![img](./provider.png)

Trong chương trước, chúng ta đã xây dựng một CatsController đơn giản. Các Controllers nên handle các HTTP request và ủy quyền các tác vụ phức tạp hơn cho các providers. Các Providers là các class JavaScript thuần túy được khai báo là providers trong một module.
