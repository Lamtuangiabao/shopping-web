import { show_noti } from "../utils.js";
//cách sử dụng localstorage để lưu trữ thông tin đăng ký và đăng nhập
const register_form = document.getElementById("register_form");
register_form.addEventListener("submit", (e) => {
  e.preventDefault();
  let email = document.getElementById("email").value;
  let phone_number = document.getElementById("phone_number").value;
  let password = document.getElementById("password").value;
  let retype_password = document.getElementById("retype_password").value;

  if (
    email.length == 0 ||
    phone_number.length == 0 ||
    password.length == 0 ||
    retype_password.length == 0
  ) {
    show_noti("Không được để trống ô input", false);
  } else if (password != retype_password) {
    show_noti("Password nhập lại chưa đúng", false);
  } else {
    if (localStorage.users) {
      //câu này có nghĩa nếu đã có sẵn bảng localStorage lưu trữ sẵn dữ liệu rồi thì chỉ cần push dữ liệu vào
      let users = JSON.parse(localStorage.users);
      //do localStorage lưu trữ ở dạng string mà ở dạng string thì không thể upload dữu liệu dạng object vào đưuọc nên sử dụng JSON.parse để chuyển dữ liệu từ localStorage thành dạng
      //còn sau khi lưu trữ dữ liệu dạng object bằng push xong rồi thì chuyển dữ liệu dạng object về dạng chuỗi để lưu trữ vào localStorage
      users.push({
        email: email,
        phone_number: phone_number,
        password: password,
      });
      localStorage.setItem("users", JSON.stringify(users));
    } else {
      //còn nếu chưa có sẵn localStorage thì tạo 1 mảng user rỗng rồi đẩy dữ liệu vào bằng lệnh push sau đó chuyển thành dạng string lưu vào localStorage
      let users = [];
      users.push({
        email: email,
        phone_number: phone_number,
        password: password,
      });
      localStorage.setItem("users", JSON.stringify(users));
    }
    show_noti("Đăng ký thành công", true);
    location = "login.html";
  }
});

users = [
  {
    email: "Thang",
    phone_number: 981023989123,
    password: "123",
  },
];
