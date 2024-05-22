export function create_element(tag_name, attributes) {
  //lưu ý : chỉ có 1 file js xuất ra các file js khác còn lại sử dụng thôi chứ không thể nào mà file js khác đã sử dụng file js export ở đây rồi mà có thể export ngược lại cho file js này sử dụng ngược lại là không thể.
  let element = document.createElement(tag_name);
  // console.log(element); //ở đây in ra khác với trong vòng lặp
  //thẻ div: khi console ra
  if (attributes) {
    // for (let i = 0; i < attributes.length; i++) {
    // element[i] = attribute[key];
    // console.log(key.classname);
    for (let key in attributes) {
      // console.log(element);
      // console.log(element[key]); //vẫn giống key khi in ra là classname,innertext,innerhtml khi có giá trị còn lại thì không có giá trị nếu chưa gán
      // key = attributes[key]; //chõ này không hoạt động vì nó không phải thẻ div ,key chỉ là 1 biến chạy
      // console.log(key); //là className(là cách gọi khi tạo class trong DOM) khi in ra,innertext,innerhtml
      // console.log(typeof key);
      element[key] = attributes[key];
    }
  } //nó in ra h1,innertext ,...object là do khoản if attribute hoặc là reload lại page để mất

  return element;
}

export function show_noti(message, success) {
  const noti = document.getElementById("noti");

  if (success) {
    noti.classList.add("bg-success");
    noti.classList.remove("bg-danger");
  } else {
    noti.classList.add("bg-danger");
    noti.classList.remove("bg-success");
  }

  noti.innerText = message;
  noti.classList.add("show");
  setTimeout(() => {
    noti.classList.remove("show");
  }, 2000);
}
