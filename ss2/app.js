/*for (let i=0; i<=100; i++) {
console.log(i);
};

for (let i=100; i>=0; i--) {
console.log(i);
};

let love = prompt('Bạn có yêu tớ không?');
while (love!='yes') {
love = prompt('Bạn có yêu tớ không?');
};
*/
let weight= prompt('Nhập cân nặng của bạn?');
let height=prompt('Nhập chiều cao của bạn?');
let BMI=weight/(height*height);
if(BMI<18.5){
    alert('Bạn gầy!');
}else if(BMI>18.5 && BMI<24.9){
    alert('Bạn hơi béo!'); 
}else if(BMI>25 && BMI<29.9){
    alert('Bạn béo phì cấp độ 1');
}else if(BMI>30 && BMI<34.9){
    alert('Bạn béo phì cấp độ 2');
}else{
    alert('Bạn béo phì cấp độ 3');
};
    

    
    