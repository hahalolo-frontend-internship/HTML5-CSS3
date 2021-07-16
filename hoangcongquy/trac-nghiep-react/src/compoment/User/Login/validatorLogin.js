export default function validatorInfo(values) {
   let errors = {};
 
   if (!values.name.trim()) {
     errors.name = "* Bạn chưa nhập tên ";
   }
   //pass
   if (!values.password) {
     errors.password = "* Bạn chưa nhập mật khẩu";
   }
   else if (values.password.length < 6) {
     errors.password = "* Mật khẩu cần lớn hơn 6 kí tự";
   } 
   else {
     errors.password = "* Mật khẩu hoặc tài khoản không đúng";
   }
   //pass
   if (!values.phone) {
     errors.phone = "* Bạn chưa nhập số điện thoại";
   } else if (typeof values.phone !== Number && values.phone.length < 9) {
     errors.phone = "* Số điện thoại bạn không hợp lệ";
   }
 
   //email
   if (!values.email) {
     errors.email = "* Bạn chưa nhập email";
   } else if (!/^[A-Z09._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
     errors.email = "Email của bạn hợp lệ";
   }
   return errors;
 }
 