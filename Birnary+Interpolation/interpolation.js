let arr = [1, 2, 4, 6 ,9 , 22, 28 , 30, 50, 100, 1000, 100000];
let yourNumber = Number(prompt("Nhập vào số cần tìm trong chuỗi"));
let length = arr.length;
let hig = length - 1;
let low = 0;
let mid = -1;
let delta = -1;
while (low < hig && yourNumber <= arr[hig] && yourNumber >= arr[low]) {
    delta = (yourNumber - arr[low]) / (arr[hig] - arr[low]);
    mid = low + Math.floor((hig - low)*delta);
    if (yourNumber == arr[mid]) {
        alert(`${yourNumber} ở vị trí số ${mid} trong mảng`);
        break;
    }
    if (arr[mid] < yourNumber){
        low = mid + 1;  
    } else {
        hig = mid - 1; 
    }
    };    



