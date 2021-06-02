//init mảng
let menu = ['Thịt', ' Cá', ' Trứng', ' Rau', ' Cơm'];
console.log(menu);
let i = 3;
console.log(i);
//khai báo mảng rỗng
let emptyMenu;
emptyMenu = [];
console.log(emptyMenu);
//độ dài của mảng
let lengOfMenu = menu.length;
console.log(lengOfMenu);

// //Bài tập:khởi tạo 1 số tên mà bản thân yêu thích
// let menuFilms = ["Ironman", "Avenger", "Blackpanther", "Elcamino"];
// let newFilm = prompt('Nhập tên phim bạn thích');
// menuFilms.push(newFilm);// Thêm 1 giá trị vào cuối mảng
// console.log(menuFilms);
// let dish = menu[a];
// let a = prompt('Nhập món ăn bạn muốn 0 1 2 3 4');
// console.log(Dish);
// for(let i = 0; i < menu.length; i++){
//     let dish = menu[i];
//     console.log(dish);
// }
// let numberDish = Number(prompt('Nhập stt món ăn bạn muốn thay 0 1 2 3 4'));
// let newDish = prompt('Nhập tên món ăn bạn muốn thêm');
// menu[numberDish] = newDish;
// alert(menu);
//CRUD
let numberDish = Number(prompt('Nhập stt món ăn bạn muốn xóa 0 1 2 3 4'));
let numberDelete = Number(prompt('Nhập số món ăn bạn muốn xóa'));
menu.splice(numberDish,numberDelete);// Xóa phần tử .splice(stt pt cần xóa, số pt cần xóa)
console.log(menu); 

