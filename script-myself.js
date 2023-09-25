'use strict';
// variables declaration

const newbtn=document.querySelector('.new-game');
const rollbtn=document.querySelector('.roll');
const holdbtn=document.querySelector('.hold');

const player_1=document.querySelector(".player-1");
const player_2=document.querySelector(".player-2");
const total_score_1=document.querySelector(".total-score-1");
const total_score_2=document.querySelector(".total-score-2");
const current_score_1=document.querySelector(".current-score-1");
const current_score_2=document.querySelector(".current-score-2");


const dice=document.querySelector('#dice');
let playing,activePlayer,scores,current_score;

// function
function init(){
    scores=[0,0];
    activePlayer=1;
    current_score=0;
    playing=true;

    player_1.classList.add('active');
    player_2.classList.remove('active');
    player_1.classList.remove('winner');
    player_2.classList.remove('winner');
    current_score_1.innerText=0;
    current_score_2.innerText=0;
    total_score_1.innerText=0;
    total_score_2.innerText=0;
    
    dice.classList.add('hide');
}

function switchPlayer(){
    current_score=0;
    player_1.classList.toggle('active');
    player_2.classList.toggle('active');

    activePlayer= activePlayer===1 ? 2 : 1;
    current_score_1.innerText=0;
    current_score_2.innerText=0;
}

function winner(){
    dice.classList.add('hide');
    document.querySelector(`.player-${activePlayer}`).classList.add('winner');
    document.querySelector(`.player-1`).classList.remove('active');
    document.querySelector(`.player-2`).classList.remove('active');
}


// events
init();

newbtn.addEventListener("click",function (){
    init();
});

rollbtn.addEventListener("click",function(){
if (playing){
    const dice_number=Math.trunc(Math.random()*6)+1;
    dice.classList.remove('hide');
    dice.src=`./dice-${dice_number}.png`;

    if(dice_number > 1){
        current_score+=dice_number;
        document.querySelector(`.current-score-${activePlayer}`).innerText=current_score;
    }
    else{
        switchPlayer();
    }
}
});

holdbtn.addEventListener("click",function(){

    if(playing){
        scores[activePlayer-1]+=current_score;
        document.querySelector(`.total-score-${activePlayer}`).innerText=scores[activePlayer+-1];

        if(scores[activePlayer-1]>=100){
            winner();
            playing=false;
        }
        else{
            switchPlayer();
        }

    }
});

