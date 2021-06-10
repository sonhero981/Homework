//3.3
let btn = document.querySelector("button");
// btn.onclick = function (){
//    
// }
//3.4
let inputValue;
let inputElement = document.querySelector("input")
let resultUpper = document.querySelector("#result-div")
inputElement.addEventListener("input", function(e){
    inputValue = e.target.value
})
btn.onclick = function(){
    console.log("Upper it!!! just cliked");
    console.log("User's name:",inputValue);
    console.log("User's name uppercase:",inputValue.toUpperCase());//3.5
    resultUpper.innerHTML = inputValue.toUpperCase();       //3.8
}