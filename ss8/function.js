function UpperCase(str){
    console.log(str[0].toUpperCase() + str.slice(1))
};
UpperCase("abc");

function printSum(a,b){
return a+b
}
console.log(1+undefined)

let arr =[3, 2, 4, 5, 6, 7];
let filterArr = arr.filter(function(Number) {
    return Number % 2 == 1;
})
console.log(filterArr)
