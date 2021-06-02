//Bài5 Đăng nhập
// let username = '';
// let password = '';
// while (username !== 'mindx'|| password !=='codethechange'){
//     username = prompt('Nhap username: ');
//     password = prompt('Nhap password: ');
//     if (username !== 'mindx'){
//         alert('username sai ');
//     } else if (password!== 'codethechange'){
//         alert('Password sai');
//     } else{
//         alert('Dang nhap thanh cong');
//         break;//de dung vong lap
//     }
// }

//Phạm vi của biến: giá trị của biến chỉ có tác dụng trong 1 {}.
let n = 10;
if( n > 2 ){
    let n = 20;
    console.log(n);
}