let boxes=document.querySelectorAll(".box");
//for winner show on screen
let wincontainer=document.querySelector(".wincontainer");
let message=document.querySelector(".message");
//for new game button
let newgame=document.querySelector(".newgame");
//for resetn game button
let resetgame=document.querySelector(".reset");
//fpr chaning turns or players
let turn=document.querySelector(".turn");
let turn0=true;

const winPatterns=[
 [0,1,2],
 [0,3,6],
 [0,4,8],
 [1,4,7],
 [2,5,8],
 [2,4,6],
 [3,4,5],
 [6,7,8]
];

function playerTurn() {

    if (turn0==true){
        turn.innerText="O's TURN"
    }
    else{
        turn.innerText="X's TURN"
    }
};

//acess each member of array boxes
var count=0;
boxes.forEach((box)=>{
    //har member par ek event lister
    box.addEventListener("click",()=>{
        //jab click hoga to log this
        count+=1;
        console.log("clicksd");

        //and jab clock hoga to turn chane karna

        if (turn0==true) {
            box.innerText="O";
            turn0=false;
            
        } else {
            box.innerText="X";
            turn0=true;
        };
        box.disabled=true;
        checkWin();
        draw();
        playerTurn();
    });
});

//to show the winner on screen
function showwin(winner) {
    //change inner text of winner 
    message.innerText=`${winner} is the Winner`;
    //remove hide wala class from wincontainer 
    wincontainer.classList.remove("hide");
    
   };

function checkWin() { 
    let pattern;
    for (pattern of winPatterns){
        //har winning patters me jao 
        //aur unka boxes khojo 
        //assign it to a posioin
        let p1 =boxes[pattern[0]].innerText;
        let p2 =boxes[pattern[1]].innerText;
        let p3 =boxes[pattern[2]].innerText;
    //chek for kahin emplty na ho as of empty hua then false winner declare ho jayegga
    if(p1!="" && p2!="" && p3!=""){
        if(p1=== p2 && p2 === p3){
            console.log("winner is",p1);
            showwin(p1);
            allbuttondisable();
        }
      
      
    }
};

 };

//function for draw
function draw() {
    if (count===9){
        message.innerText=`DRAW`;
        //remove hide wala class from wincontainer 
        wincontainer.classList.remove("hide");
    }
   
}

 //disable all buttons after win is declared 
 function allbuttondisable() {
    for (let box of boxes){
        box.disabled=true;
    };
 };

  //enable all buttons after win is declared 
  function allbuttonenable() {
    for (let box of boxes){
        box.disabled=false;
        turn0=true;
        box.innerText="";
        wincontainer.classList.add("hide");
        turn.innerText="O's TURN";
    };
 };

 newgame.addEventListener("click",allbuttonenable);
 resetgame.addEventListener("click",allbuttonenable);