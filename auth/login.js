import { show_noti } from "../utils.js";
//trong máy tính chỉ có ./ hoặc ../ => ./ là cùng folder => còn ../ ra khỏi folder =>Ta có thể sử dụng như sau: ../../../
//thông báo không sử dụng alert và location chuyển trang
const login_form = document.getElementById("login_form");
login_form.addEventListener("submit", function login(e) {
  e.preventDefault();
  let email_value = document.getElementById("email").value;
  let password_value = document.getElementById("password").value;

  let users = JSON.parse(localStorage.getItem("users"));
  //do localStorage lưu trữ ở dạng string mà ở dạng string thì không thể upload dữu liệu dạng object vào đưuọc nên sử dụng JSON.parse để chuyển dữ liệu từ localStorage thành dạng
  //còn sau khi lưu trữ dữ liệu dạng object bằng push xong rồi thì chuyển dữ liệu dạng object về dạng chuỗi để lưu trữ vào localStorage
  for (let user of users) {
    if (email_value == user.email && password_value == user.password) {
      const toast = document.getElementById("toast");
      const toast_bs = bootstrap.Toast.getOrCreateInstance(toast);
      toast_bs.show(); //sử dụng boottrap để làm thông báo
      show_noti("Đăng nhập thành công", true);

      // location = "../index.html"; //nếu để thì sẽ chưa kịp xem thông báo thì nó sẽ chuyển trang
      return;
    }
  }

  show_noti("Đăng nhập thất bại", false);
});
