import { create_element } from "./utils.js";

let products = {
  data: [
    {
      name: "MATRIX 1999 DECK",
      price: "780.000đ - 1.470.000đ",
      image: "images/matrix-1999-1.jpg",
    },

    {
      name: "RAEDA DECK",
      price: "780.000đ - 1.470.000đ",
      image: "images/Raeda-Deck.jpg",
    },

    {
      name: "MUSTY DECK",
      price: "780.000đ - 1.470.000đ",
      image: "images/Musty-Deck.jpg",
    },

    {
      name: "TRISTIQUE DECK",
      price: "780.000đ - 1.470.000đ",
      image: "images/Tristique-deck.jpg",
    },

    {
      name: "FIELD TRIP DECK",
      price: "780.000đ - 1.470.000đ",
      image: "images/Fied-Trip-deck.jpg",
    },

    {
      name: "TARO RAINBOW LOGO DECK",
      price: "780.000đ - 1.670.000đ",
      image: "images/web-5.jpg",
    },

    {
      name: "NEON RAINBOW LOGO DECK",
      price: "780.000đ - 1.670.000đ",
      image: "images/web-1.jpg",
    },

    {
      name: "ORANAGE RAINBOW LOGO DECK",
      price: "780.000đ - 1.670.000đ",
      image: "images/web-2.jpg",
    },

    {
      name: "BLUE RAINBOW LOGO DECK",
      price: "780.000đ - 1.670.000đ",
      image: "images/web-3.jpg",
    },

    {
      name: "WHITE RAINBOW LOGO DECK",
      price: "780.000đ - 1.670.000đ",
      image: "images/web-4.jpg",
    },

    {
      name: "CUTIS MODEL DECK",
      price: "780.000đ - 1.670.000đ",
      image: "images/cutis.jpg",
    },

    {
      name: "CAM VU MODEL DECK",
      price: "780.000đ - 1.670.000đ",
      image: "images/cam-vu.jpg",
    },

    {
      name: "SON NGUYEN MODEL DECK",
      price: "780.000đ - 1.670.000đ",
      image: "images/son-nguyen.jpg",
    },

    {
      name: "Test new product",
      price: "new price",
      image: "404",
    },

    {
      name: "Test new product",
      price: "new price",
      image: "404",
    },
  ],
};

function display_product(data) {
  // for (let product in data) {
  //sử dụng cho object nhưng không thể truy xuất đến giá trị cụ thể được vd như name,price:data[product.name] không chạy

  for (let product of data) {
    // console.log(product, data[product]); //task :Hãy thử tạo một object và sử dụng vòng lặp for-in để console.log ra data[product] giống vậy
    //không thể sử dụng loop for-in
    //GIẢI THÍCH:for-in vẫn tạo được các thẻ như bình thường nhưng không thể kết nối với các thông tin trong data như loop for- OF
    let div_card = create_element("div", {
      className: "card",
    });

    let div_image_container = create_element("div", {
      className: "image-container",
    });

    let image = create_element("img", {
      src: product.image,
    });

    let div_container = create_element("div", {
      className: "container",
    });

    let h5_name = create_element("h5", {
      className: "product-name",
      innerText: product.name,
    });

    let h6_price = create_element("h6", {
      innerHTML: "<b>Price: </b>" + product.price,
    });

    let btn = create_element("button", {
      innerText: "Thêm vào giỏ hàng",
    });

    div_image_container.appendChild(image);
    div_container.appendChild(h5_name);
    div_container.appendChild(h6_price);
    div_container.appendChild(btn);
    div_card.appendChild(div_image_container);
    div_card.appendChild(div_container);

    document.getElementById("products").appendChild(div_card);
  }
}

display_product(products.data);

const search_input = document.getElementById("search_input");

search_input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    let search_input_value = document.getElementById("search_input").value;
    let list_product = document.getElementsByClassName("card");
    let product_names = document.getElementsByClassName("product-name");

    for (let i = 0; i < list_product.length; i++) {
      if (
        product_names[i].innerText.includes(search_input_value.toUpperCase())
      ) {
        list_product[i].style = "display: block";
      } else {
        list_product[i].style = "display: none";
      }
    }
  }
});

// const fruits = ["apple", "banana", "cherry"];
// for (const fruit in fruits) {
//   console.log(fruit);
// }
// output
//0
// 1
// 2

// const person = {
//   name: "Alice",
//   age: 30,
//   sayHi() {
//     console.log("Hello!");
//   },
// };
// for (const prop in person) {
//   console.log(prop, person[prop]); // Access value using bracket notation
// }
// name Alice
// age 30
// sayHi function () { ... }

// const fruits = ["apple", "banana", "cherry"];
// fruits.forEach(nhan);
// fruits.map(nhan); //mặc định map/foreach sẽ là for of nếu function không có loop nào sẵn ,nếu muốn loop for in thì code vào fuction
//hoặc là function có 2 biến i và o thì nó sẽ xuất lần lượt theo vị trí là i : giá trị của biến và o :là thứ tự của biến
// function nhan(i, o) {
//   for (const i in fruits) {
// console.log(i + " " + o + " " + 1);
//   }
// }
// for (const i of fruits) {
//   //   console.log(i);
//   nhan(i);
// }
// for (const i in fruits) {
//   nhan(i);
// }
// output
// apple
// banana
// cherry

// explain:
// While a for...in loop is commonly used to iterate over the values of an array, in this case, it iterates over the numeric indexes of the fruits array.

// Here's why:

// for...in loops are designed to iterate over the enumerable properties of an object. In JavaScript, arrays are a special type of object.
// However, for...in doesn't guarantee the order in which it iterates over properties. It prioritizes enumerable properties, which includes numeric indexes for arrays.
// If you intended to iterate over the actual fruit values (apple, banana, cherry), you should use a for...of loop instead

// 1. for...in loop:

// This loop iterates over the enumerable properties of an object, including inherited properties. This means it goes through all the key-value pairs an object has, regardless of whether they were directly defined on the object or come from its prototype.

// 2. for...of loop:

// This loop iterates over the values of an iterable object, like arrays or strings. It specifically focuses on the elements within the iterable in the order they appear.

//Task: Tìm hiểu sự khác nhau của 2 đoạn code dưới của for-in 2 trường hợp khác nhau
// const person = [
//   { name: "Alice", age: 30 },
//   { name: "Alice", age: 30 },
//   { name: "Alice", age: 30 },
// ];
// for (let i = 0; i < person.length; i++) {
// console.log(person);
// console.log(i, "and", person[i].age);
// for (const key in person) {
// console.log(person[key]); //chạy đưuọc của for-in
// for (const key of person) {
// console.log(key, "and", key.name); //chạy được// của loop for-of và for-in//key của for-of sẽ là toàn bộ giá trị trong mảng
//không phải person.name//không chạy đưuọc for-of
// console.log(key, "and", person[key].name); //for-in chạy đưuọc//for-of không chạy được//key của for-in sẽ là thứ tự vị trí trong mảng
// }
//////////////////////////////
// const person = { name: "Alice", age: 30 };
// for (let i = 0; i < person.length; i++) { //vòng lặp for căn bản không chạy được trong case này
// console.log(person[i].age);
// console.log(i);
// console.log(person[i]);
// for (const key in person) {
// for (const key of person) {
// console.log(key, "and", person[key]);
// console.log(person);
// console.log(key.age); //không phải key.age mà là person.age trong for-in
// console.log(person.age); //không chạy được của for-of//câu này chạy dược trong for-in nhưng với giá trị age cố định
// }
//for-of không chạy đưuọc trong trường hợp này
//////////////////////////////
//for-of(và for-in là ghi tắt của vòng lặp for truyển thống) lặp qua aray và array lồng object
//for-in được lặp ra là để loop qua object thuần  (chỉ lặp được qua vị trí của obbject và xuất toàn bộ giá trị của object và truy cập từng giá trị thuộc object với giá trị cố định như name hoặc age)

//test thử function cho array??Done.
///////////////////////////////////////
// let re = document.createElement("div");
// console.log(re);
// re.innerText = "ello";
// const ba = { className: "Boo" };
// for (let i in ba) {
//   re[i] = ba[i];
// }
// re.className = "fai";
// console.log(re);
// document.getElementById("products").appendChild(re);
/////////////////////////////////////////
// let value = document.getElementById("myDIV").className;
// document.getElementById("demo").innerHTML = value;
//////////////////////////////////////////
//19/05/2024//Mindx khóa
//có dấu ngoặc thì arrow function và normal function cũng cần return mới có giá trị
//còn không cần ngoặc thì chỉ có arrow function
// const sayHi = (x) => 2 * x + 5;
// let u = sayHi(2);
// console.log(u);
///////////////////////
// const sayHi = (x, y, z) => {
//   name: "Mind",
// };//sai
// const sayHi = (x, y, z) => ({
//   name: "Mind",
// });//đúng
//có dấu ngoặc tròn khi xài arow function thì trong ngoặc tròn phải là giá trị thì khi đó function sẽ hiểu là object;

// console.log(sayHi);//khi console mà không truyền giá trị parameters tham số

//MOdule JS
//control+ bấm chuột trỏ đến module gốc là đúng

// const bp = (a) => Math.pow(a, 2);
// console.log(bp(5));

// const bp = (a) => {
//   let b;
//   return (b = Math.pow(a, 2));
// };

// console.log(bp(2));
