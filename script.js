// 'use strict';

// const dice=document.getElementById("dice");
// const current_score_1=document.querySelector(".current-score-1");
// const current_score_2=document.querySelector(".current-score-2");
// const player_1=document.querySelector(".left-container");
// const player_2=document.querySelector(".right-container");


// let current_score=0;
// dice.classList.add("hide");

// const total_score_1=document.querySelector(".total-score-1");
// const total_score_2=document.querySelector(".total-score-2");

// const roll=document.querySelector(".roll-dice");
// const new_game=document.querySelector(".new-game");
// const hold=document.querySelector(".hold");

// roll.addEventListener("click",function (){
//     let dice_number=Math.trunc(Math.random()*6)+1;
//     dice.classList.remove('hide');
//     console.log(dice_number);


//     if(dice_number!==1){
//        dice.src=`dice-${dice_number}.png`;
//         console.log(dice.classList);
//         current_score=dice_number;

//         player_1.classList.contains('active') ? current_score_1.innerText=current_score +dice_number: 
//         current_score_2.innerText=current_score+dice_number;
//         (player_1.classList.contains('active')) ? total_score_1.innerText=Number(total_score_1.innerText)+current_score : total_score_2.innerText=Number(total_score_2.innerText)+current_score;
//     }
//     else{
//         dice.src=`dice-1.png`;
//         current_score=0;
//         current_score_1.innerText=current_score;
//         current_score_2.innerText=current_score;

//         player_1.classList.toggle("active");
//         player_2.classList.toggle("active");
//     }
// });

// hold.addEventListener("click",function(){
//     (player_1.classList.contains('active')) ? total_score_1.innerText=Number(total_score_1.innerText)+current_score : total_score_2.innerText=Number(total_score_2.innerText)+current_score;
//     current_score=0;
//     current_score_1.innerText=current_score ;
//     current_score_2.innerText=current_score;
//     player_1.classList.toggle("active");
//     player_2.classList.toggle("active");
// });

// new_game.addEventListener("click",function(){
//     current_score=0;
//     current_score_1.innerText=0;
//     current_score_2.innerText=0;
//     total_score_1.innerText=0;
//     total_score_2.innerText=0;
//     dice.src='';
//     player_1.classList.add('active');
// })

const player_1=document.querySelector('.player-1');
const player_2=document.querySelector('.player-2');
const current_score_1=document.querySelector('.current-score-1');
const current_score_2=document.querySelector('.current-score-2');
const total_score_1=document.querySelector('.total-score-1');
const total_score_2=document.querySelector('.total-score-2');

const dice=document.querySelector('#dice');
const newbtn=document.querySelector('.new-game');
const rollbtn=document.querySelector('.roll-dice');
const holdbtn=document.querySelector('.hold');

let current_score,scores,activePlayer,playing;

// init
function init(){
    // player name
    p1name.innerText=prompt("Enter PLayer 1: ");
    p2name.innerText=prompt("Enter PLayer 2: ");
    current_score=0;
    scores=[0,0];
    activePlayer=1;
    playing=true;

    dice.classList.add('hide');
    player_1.classList.remove('winner');
    player_2.classList.remove('winner');
    player_1.classList.add('active');
    player_2.classList.remove('winner');
    

    current_score_1.innerText=0;
    current_score_2.innerText=0;
    total_score_1.innerText=0;
    total_score_2.innerText=0;
}

init();

function switchPlayer(){
    
    
    // current player score to 0
    document.querySelector(`.current-score-${activePlayer}`).innerText=0;
    current_score=0;
    // setting the active player
    activePlayer = activePlayer===1 ? 2 :1;
    player_1.classList.toggle('active');
    player_2.classList.toggle('active');
}

// on rolling
rollbtn.addEventListener("click",function(){
    if(playing){
        // generate dice roll
        const dice_number = Math.trunc(Math.random() * 6) + 1;
        // display dice roll
        dice.classList.remove('hide');
        dice.src=`./dice-${dice_number}.png`;

        // condition if dice is not 1
        if(dice_number !== 1){
            // add dice to current score
            current_score+=dice_number;
            // display_new current score
            document.querySelector(`.current-score-${activePlayer}`).innerText=current_score;
        }

        // condition if dice is 1
        else{
            switchPlayer();
        }
    }
});

// hold

holdbtn.addEventListener("click",function(){
    if(playing){
        // storing the score of current player
        scores[activePlayer-1]+=current_score;
        // displaying the total score
        document.querySelector(`.total-score-${activePlayer}`).innerText=scores[activePlayer-1];

        if(scores[activePlayer-1]>=100){
            // winner animation
            document.querySelector(`.player-${activePlayer}`).classList.remove('active');
            dice.classList.add('hide');
            document.querySelector(`.player-${activePlayer}`).classList.add('winner');
            playing=false;
        }
        else{
            switchPlayer();
        }
        
    }
});

newbtn.addEventListener("click",init);

