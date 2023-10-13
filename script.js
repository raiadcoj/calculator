console.log("Linked!");

let op = "null";
let num1 = "";
let num2 = "";
let pressed = 0;
const numbutton = document.querySelectorAll(".numbutton");
const screen = document.querySelector('#screen');

const equal = document.querySelector("#equal")
equal.addEventListener("click", () =>{
    if (op == "plus") {
        screen.textContent = add();
    }
    else if (op == "minus") {
        screen.textContent = subtract();
    }
    else if (op == "times") {
        screen.textContent = multiply();
    }
    else if (op == "div") {
        screen.textContent = divide();
    }
    num1 = "";
    num2 = "";
    op = "null"
})


const plus = document.querySelector('#plus')
plus.addEventListener("click", ()=>{
    op = "plus"
})
minus.addEventListener("click", ()=>{
    op = "minus"
})
times.addEventListener("click", ()=>{
    op = "times"
})
div.addEventListener("click", ()=>{
    op = "div"
})


for(let i=9;i>=0;i--){
   numbutton[i].addEventListener("click", () => {
    if (op == "null") {
        num1 += numbutton[i].textContent
        screen.textContent = num1
    }

    else{
        num2 += numbutton[i].textContent
        screen.textContent = num2       
    }
   });
}



function add(){
    return parseInt(num1) + parseInt(num2)
}

function subtract(){
    return parseInt(num1) - parseInt(num2)
}

function multiply(){
    return parseInt(num1) * parseInt(num2)
}

function divide(){
    return parseInt(num1) / parseInt(num2)
}

