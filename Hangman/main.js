const secretWords = ["tree" , "teacher" , "book" , "army" , "shoot"];
let randomWord = secretWords[Math.floor(Math.random() * secretWords.length)];
const underScore = 0;
let clicked = [];
let mistakes = 0;
let result = "";


function guessUnderscore(){  
    let sliptedWord = randomWord.split("");
    let mappedWord = sliptedWord.map(letter =>  "-");
    mappedWord = mappedWord.join("");
    document.querySelector(".clue").innerHTML = `<p> ${mappedWord} </p>`;
}

function buttonHandler(event){
    letterHandler(event.target.id);
}

function keyHandler(event){
    letterHandler(event.key);
}
document.querySelector(".letters").addEventListener("click" , buttonHandler);
window.addEventListener("keydown" , keyHandler);
console.log(randomWord)


function setUnderScore(){
    let sliptedWord = randomWord.split("");
    let mappedWord = sliptedWord.map(letter => 
    (clicked.indexOf(letter) >= 0 ? letter : "-"));
    mappedWord = mappedWord.join("");
    result = mappedWord;
    document.querySelector(".clue").innerHTML = `<p> ${mappedWord} </p>`
}

function changePicture(){
    mistakes ++;
    document.querySelector(".image").querySelector("img").src = `./assets/hangman${mistakes}.png`
}

function youLost(){
    if(mistakes === 6){
        document.querySelector(".gameOver").style.display = "block";
        document.querySelector(".clue").innerHTML = `<p> The Secret word was: ${randomWord} </p>`
    }
}

function youwin(){
    if (randomWord == result){
        document.querySelector(".image").querySelector("img").src = "./assets/winner.png"
    }
}


function letterHandler(letter){
    letter = letter.toLowerCase();
    clicked.indexOf(letter) === -1 ? clicked.push(letter) : null;
    document.getElementById(letter.toUpperCase()).className = "used"
    if(randomWord.indexOf(letter) >= 0){
        setUnderScore();
        youwin();
    }else{
        changePicture();
        youLost();
    }
}

guessUnderscore();



