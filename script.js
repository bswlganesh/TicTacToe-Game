var boxes=document.querySelectorAll(".box");


//fpr chaning turns
let turn0=true;

const winPatterns=[
 [0,1,2],
 [0,3,6],
 [0,4,8],
 [1,4,7],
 [2,5,8],
 [2,4,6],
 [3,4,5],
 [6,7,8],
];

//acess each member of array boxes

boxes.forEach((box)=>{
    //har member par ek event lister
    box.addEventListener("click",()=>{
        //jab click hoga to log this
        console.log("clicksd");

        //and jab clock hoga to turn chane karna

        if (turn0==true) {
            box.innerText="O";
            turn0=false;
        } else {
            box.innerText="X";
            turn0=true;
        }
    })
})
