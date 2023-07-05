let keys = document.querySelectorAll(".show-display");
let display = document.querySelector(".display-box");


function showDisplay(event){
    const x = event.target.innerText;
    if(display.innerText == 0){
        return display.innerText = x;
    }else{
        return display.innerText += x;
    }
}

function clearAll(event){
    display.innerText = 0;
}

function clearLast(event){
    const temp = display.innerText;
    if(temp.length == 1){
        display.innerText = 0;
    }else{
    display.innerText = temp.substring(0 , temp.length - 1 );
    }
}

function equal(event){
    const temp = display.innerText;
    display.innerText = eval(temp);
}


 
keys.forEach(item => {
    item.addEventListener("click" , showDisplay)
});
document.querySelector(".clear-all").addEventListener("click" , clearAll);
document.querySelector(".clear-last").addEventListener("click" , clearLast);
document.querySelector(".equal").addEventListener("click" , equal);