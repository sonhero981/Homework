// //1.1
// let allItems = ["Jean", "T-shirt", "Socks"];
// while(true){
// let crud =  prompt('Hi there, welcome to shop admin panel, what do you want(c,r,u,d)?')
// if(crud == "c" || crud == "r" || crud == "u" || crud == "d") {
//   switch(crud){
//       case "r" :
//           console.log("The current items are");
//           for(i=0; i < allItems.length; i++){
//             let item = allItems[i];  
//             console.log(item);
//           }
//           break;
//       case "c" :
//           let newItem = prompt("Enter the name of the new item");
//           allItems.push(newItem);
//           alert("Done!");
//           console.log(allItems);
//           break;
//       case "d" :
//           let deleteItem = Number(prompt("Enter the position you want delete"));
//           allItems.splice(deleteItem,1);
//           alert("Done!")
//           break;
//        case "u" :
//            let numberUpdate = Number(prompt("Enter the position you want to update"));
//            let nameUpdate = prompt("Enter the new name");
//            allItems[numberUpdate] = nameUpdate;
//            break;
//   }
// } else if (!crud){
//     break;
// } else {
//     alert('This command is not supported ');
    
// };
// };
//2.1
// let arr = [3, 4, 6, -9, 10, -88, 2];
// let sum = 0;
// for (let i = 0; i<arr.length; i++) {
//     sum += arr[i];
// }
// console.log(sum);
//2.2
// let j = 0;
// for (let i = 0; i<arr.length; i++) {
//     if(arr[i] >= 0){
//         j ++;
//     }
// }
// console.log(j);
// 2.3
let arr = [3, 4, 6, -9, 10, -88, 2];
//c1
// let j = 0;
// let yourNumber = Number(prompt('Enter your number'));
// for (let i = 0; i < arr.length; i++) {
//     if (yourNumber == arr[i]) {
//         alert(`${yourNumber} is FOUND in my array at index ${i}`);
//         j++;
//         console.log(j);
//     };
// };
// if (j == 0){
//     alert(`${yourNumber} is NOT found in my array`);
// };
//c2 Interpolation search
// let score = arr.sort(function(a, b){return a - b});
// console.log(score);
// let value = Number(prompt("Nhập vào giá trị cần tìm"));
// let low = 0;
// let hig = score.length - 1; 
// let delta = -1;
// let mid = -1;
// while (score[low] =< score[hig] && value <= score[hig] && value >= score[low]) {
//     delta = (value - score[low]) / (score[hig] - score[low]);
//     mid = low + Math.floor(delta * (hig - low));
//     if (value == score[mid]) {
//         alert(`Vị trí của số cần tìm trong mảng là: ${mid}`);
//         break;
//     }
//     if( value < score[mid]){
//         hig = mid -1;
//     } else {
//         low = mid +1;
//     }
// } 
//C3 Birnary search
let score = arr.sort(function(a, b){return a - b});
console.log(score);
let value =Number(prompt("Nhập vào số cần tìm "));
let hig = score.length -1 ;
let low = 0;
let mid = -1;
while(score[hig] >= score[low] && value <= score[hig] && value >= score[low]) {
    mid = Math.floor((hig + low) / 2);
    if (value == score[mid]){
    alert(`Vị trí của số cần tìm trong mảng là ${mid}`);
    break;
    } if (value < score[mid]){
        hig = mid - 1;
    } else {
        low = mid + 1;
    }
};
// 3.1
//  let s = "1 2 3 4 5 6";
//  var a = s.split(" ");
//  console.log(a);
//4.1
// let numbers = prompt("Hãy nhập vào 1 dãy số ngăn cách nhau bằng dấu ","");
// let arrnumbers = numbers.split(",");
// console.log(arrnumbers);
// let smallest = arrnumbers[0];
// for (let i = 0; i < arrnumbers.length; i++) {
//    if (smallest > arrnumbers[i]){
//        smallest = arrnumbers[i];
//    }; 
// };
// alert(`Số nhỏ nhất trong dãy bạn nhập là ${smallest}`);
//5.1
// let names = prompt("Hãy nhập vào 1 dãy tên ngăn cách nhau bằng dấu","");
// let arrNames = names.split(",");
// console.log(arrNames);
// let upperName =[];
// for(let i = 0; i < arrNames.length; i++){
//     upperName[i] = arrNames[i].toUpperCase();
// }
// alert(upperName);
// 6.1
// let numbers = prompt("Hãy nhập 1 dãy số ngăn cách nhau bằng dấu ","");
// let arrNumbers = numbers.split(",");
// let odd = [];
// for(let i = 0; i < arrNumbers.length; i++) {
//     if (arrNumbers[i] % 2 !== 0) {
//          odd.push(arrNumbers[i]);
//     };
// };
// alert(odd);
