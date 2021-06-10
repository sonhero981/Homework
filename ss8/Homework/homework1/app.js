function message(position){
const container = document.getElementById("list");
for(let i = 0; i < 3; i++){
    container.insertAdjacentHTML(`${position}`, `<li>${i}</li>`)
};
console.log(`${position}:`,document.querySelector("#result"))
};
message("beforeBegin"); 
// 1d
// message("afterBegin");
//2a
// message("beforeend");
//3c
// message("afterend");
//4b

