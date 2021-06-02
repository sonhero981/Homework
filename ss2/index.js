//1.1
for(let i1=0; i1<=6;i1++){
    console.log(i1);
};
//1.2
let n2 = Number(prompt("Hãy nhập n2"));
for(let i2=0; i2<n2; i2++){
    console.log(i2);
};
//1.3
let n3 = Number(prompt('Hãy nhập n3'));
for(let i3=3; i3<n3; i3++){
    console.log(i3);
};
//1.4
let n4 = Number(prompt('Hãy nhập n4'));
let c4 = Number(prompt('Hãy nhập c4 nhỏ hơn n4'));
for(let i4=c4; i4<n4; i4++){
    console.log(i4);
};
//1.5
let n5 =Number(prompt('Hãy nhập n5'));
let c5 = Number(prompt('Hãy nhập c5 nhỏ hơn n5'));
let s5 = Number(prompt('Hãy nhập bước nhảy s5'));
for(let i5=c5; i5<n5; i5+=s5){
    console.log(i5);
};
//2.1
let fact = 1;
let n6 =Number(prompt('Hãy nhập n6'));
for(let i6=1; i6<=n6; i6++){
    fact*=i6
};
alert(`Giai thừa của ${n6} là ${fact}`);
//3.1
let old = Number(prompt('How old are you?'));
if(old<14){
    alert('You are not enough to view this content!');
}else{
    alert('enjoy!');
};
//4.1
let x = Number(prompt('x='));
if(x%2==0){
    alert(`${x} is an even number`);
}else{
    alert(`${x} is an odd number`);
};
//5.1
let username = prompt('Nhập username của bạn!');
if(username == 'mindx'){
    let password = prompt('Nhập password của bạn!');
    if(password=='codethechange'){
        alert('Bạn đã đăng nhập thành công!');
    }else{
        alert('Bạn đã nhập sai password!');
    }
}else{
    alert('User name không đúng!');
};

 




