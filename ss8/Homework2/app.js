//2.1
let btn = document.querySelector("#button1");
btn.addEventListener("click", function (e){
    console.log(e.target)
});
let btn2 = document.querySelector("#button2");
btn2.addEventListener("click", function (e){
    console.log(e.target)
})
//khi sự kiện diễn ra e.target trả về chính element mà nó lắng nghe sự kiện đó.

//2.2
let input = document.querySelector("input");
input.addEventListener("keydown", function(e){
    console.log(e.key)
})
//Khi sự kiện diễn ra e.key trả về key mà chúng ta vừa nhấn xuống.
