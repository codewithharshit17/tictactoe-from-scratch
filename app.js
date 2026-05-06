let boxes = document.querySelectorAll('.box');
let resetBtn = document.querySelector('#reset-button');
let message = document.querySelector('.message');
let msg = document.querySelector('#msg');
let turnO = true; //playerX , playerO

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

boxes.forEach((box) => {
    box.addEventListener('click', () => {
        console.log("box clicked");
        if (turnO) {
            box.innerText = 'O';
            turnO = false;
        } else {
            box.innerText = 'X';
            turnO = true;
        }
    box.disabled = true;

    checkWin();

    });

});

const showWinner = (winner) => {
    msg.innerText = "Congratulations " + winner + "! You WON the game!";
    message.classList.remove('hide');
}

const checkWin = () => {
    for(let pattern of winPatterns) {
        
        let val1 = boxes[pattern[0]].innerText;
        let val2 = boxes[pattern[1]].innerText;
        let val3 = boxes[pattern[2]].innerText 
        
        if(val1 !== '' && val1 === val2 && val2 === val3) {
            console.log("Congratulations " + val1 + " wins!");
            disabledbtn();
            showWinner(val1);
            break;
        }

    }
};

const disabledbtn = () => {
    boxes.forEach((box) => {
        box.disabled = true;
    });
}
const resetGame = () => {
    console.log("resetting game");
    turnO = true;
    boxes.forEach((box) => {
        box.innerText = '';
        box.disabled = false;
    });
    message.classList.add('hide');
}
resetBtn.addEventListener('click', resetGame);

