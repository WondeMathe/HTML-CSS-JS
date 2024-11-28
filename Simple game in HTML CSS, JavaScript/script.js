'use strict';

let secretNumber = Math.trunc(Math.random()*20+1);
let scoreRemaining = 20;
let highScore = 0;

const displayMessage = message =>{
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    
    //When there is no input
    if(!guess){
        displayMessage("⛔ No Number");
    
        // When player wins
    }  else if(guess === secretNumber){
        displayMessage('🏆 Correct Number');
        document.querySelector('.number').textContent = guess;

        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if(highScore<scoreRemaining){
            highScore = scoreRemaining;
            document.querySelector('.highscore').textContent = highScore;
        }

        // When guess is different
    } else if(guess !==secretNumber){
        if(scoreRemaining > 1){
            scoreRemaining--;
            document.querySelector('.score').textContent = scoreRemaining;
            displayMessage(guess > secretNumber ? '📈 Too high' : '📉 Too low');
        } else{
            displayMessage("🎇 You lost the game");
            document.querySelector('.score').textContent = 0;
        }
    } 
})

document.querySelector('.again').addEventListener('click', function(){
    scoreRemaining = 20;
    secretNumber = Math.trunc(Math.random()*20+1);
    displayMessage("Start guessing...");
    document.querySelector('.score').textContent = scoreRemaining;
    document.querySelector('.number').textContent = "?";
    document.querySelector('.guess').value = '';
    
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
        
})

