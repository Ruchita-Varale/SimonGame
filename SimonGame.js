let gameSeq=[];
let userSeq=[];

let btns=["yellow","green","red","purple"];

let started=false;
let level=0;
let h3=document.querySelector("h3");

document.addEventListener("keypress",function () {
    if(started==false){
        console.log("Game Started!!");
        started=true;
        levelUp();
    }
});

function gameFlash(btn){
btn.classList.add("flash");
setTimeout(function(){
btn.classList.remove("flash");
},150);
}

function userFlash(btn){
btn.classList.add("userflash");
setTimeout(function(){
btn.classList.remove("userflash");
},150);
}


function levelUp() {
userSeq=[];
level++;
h3.innerText=`Level ${level}`;
let randomIndex=Math.floor(Math.random()*3);
let randomColor=btns[randomIndex];
let ranbtn=document.querySelector(`.${randomColor}`);
// console.log(randomIndex)
// console.log(randomColor);
// console.log(ranbtn);
gameSeq.push(randomColor);
console.log("Game sequence:-",gameSeq);
gameFlash(ranbtn);
}
function checkAns(idx){
    //console.log("level=",level);

    if(userSeq[idx]===gameSeq[idx]){
       if(userSeq.length==gameSeq.length){
        setTimeout(levelUp,1000);
       }
    }else{
          h3.innerHTML=`Game Over!, <b>Your Score is ${level}</b></br>press any key to restart.`;
          document.querySelector("body").style.backgroundColor="red";
          setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
          },150);
          reset();
    }
}

function btnpress(){
    let btn=this;
    userFlash(btn);
    userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
    console.log("User Sequence:-",userSeq);
}

let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnpress);
}
function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}