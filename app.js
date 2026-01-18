let boxes = document.querySelectorAll(".box");
let resetBtn = document.getElementById("reset");
let newgameBtn = document.getElementById("new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.getElementById("msg");

let turn0 = true;
const winpatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],  
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];     

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn0) {
            box.innerText = "X";
            // box.style.color = "red";
            turn0 = false;
        } else {
            box.innerText = "O";
            // box.style.color = "blue";
            turn0 = true;
        }
        box.disabled = true;

        checkWin();
    });
});

 const showWinner = (winner) => {
    msg.innerText = `Player ${winner} Wins!`;
    msgContainer.classList.remove("hide");
    disabledBoxes();
    };

    const disabledBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = true;
    });
}; 
const enabledBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = false;
        box.innerText = "";

    });
}; 
function checkWin() {
    for (let pattern of winpatterns) {
        let a = boxes[pattern[0]].innerText;
        let b = boxes[pattern[1]].innerText;
        let c = boxes[pattern[2]].innerText;
        if (a !== "" && a === b && b === c) {
            showWinner(a);
            disabledBoxes();
            // resetGame();
            // return;
           }
    }           
}
const resetGame = () => { 
    turn0 = true;
    enabledBoxes();
    msgContainer.classList.add("hide");
};
newgameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
   

