const game=()=>{
    let pScore=0;
    let cScore=0;
    const startGame=()=>{
    const playBtn=document.querySelector(".intro button");
    const introScreen=document.querySelector(".intro");
    const match =document.querySelector(".match");
    const score=document.querySelector(".score");
    playBtn.addEventListener("click",()=>{
        introScreen.classList.add("fadeOut");
        match.classList.add('fadeIn');
        score.classList.add('fadeIn');
    });
};
const playMatch=()=>{
    const options=document.querySelectorAll(".options button");
    const playerHand=document.querySelector(".player-hand");
    const computerHand=document.querySelector(".computer-hand");
    const hands=document.querySelectorAll('.hands img');
    hands.forEach(hand =>{
        hand.addEventListener('animationend',function(){
            this.style.animation="";

        });
    });
    const computerOptions=['rock','paper','scissors'];
    options.forEach(option=>{
        option.addEventListener("click",function(){
            const computerNumber=Math.floor(Math.random()*3);
            const computerChoice=computerOptions[computerNumber];
           
        setTimeout(()=>{
            compareHands(this.textContent,computerChoice);
            
        playerHand.src=this.textContent+".png";
        computerHand.src=computerChoice+".png";
        },2000);
playerHand.style.animation="shakePlayer 2s ease";
computerHand.style.animation="shakeComputer 2s ease";
    });
    
});
};
const updateScore=()=>{
    const playerScore=document.querySelector('.player-score p');
    const computerScore=document.querySelector('.computer-score p');
    playerScore.textContent=pScore;
    computerScore.textContent=cScore
}
const compareHands=(playerChoice,computerChoice)=>{
    const winner=document.querySelector('.winner');
    const wins=document.querySelector('.wins');
    if(playerChoice===computerChoice){
        winner.textContent="DRAW";
        return; 
    }
    if(playerChoice==='rock'){
        if(computerChoice==='scissors'){
            winner.textContent='YOU SCORED';
            wins.textContent='Score level';
            pScore++;
            updateScore();
            if(pScore==7)
            wins.textContent="YOU WON THE GAME";
            if(cScore==7)
            wins.textContent="COMPUTER WON THE GAME";
            if(pScore>cScore && pScore!=7)
            wins.textContent="Player leads";
            if(cScore>pScore && cScore!=7)
            wins.textContent="Computer leads";
            return;  
        }
        else{
            winner.textContent="COMPUTER SCORED";
            wins.textContent='Score level';
            cScore++
            updateScore();
            if(pScore==7)
            wins.textContent="YOU WON THE GAME";
            if(cScore==7)
            wins.textContent="COMPUTER WON THE GAME";
            if(pScore>cScore && pScore!=7)
            wins.textContent="Player leads";
            if(cScore>pScore && cScore!=7)
            wins.textContent="Computer leads";
            return;
        }
    }
    if(playerChoice==='paper'){
        if(computerChoice==='scissors'){
            winner.textContent="COMPUTER SCORED";
            wins.textContent='Score level';
            cScore++;
            updateScore();
            if(pScore==7)
            wins.textContent="YOU WON THE GAME";
            if(cScore==7)
            wins.textContent="COMPUTER WON THE GAME";
            if(pScore>cScore && pScore!=7)
            wins.textContent="Player leads";
            if(cScore>pScore && cScore!=7)
            wins.textContent="Computer leads"; 
            return; 
        }
        else{
            winner.textContent="YOU SCORED";
            wins.textContent='Score level';
            pScore++;
            updateScore();
            if(pScore==7)
            wins.textContent="YOU WON THE GAME";
            if(cScore==7)
            wins.textContent="COMPUTER WON THE GAME";
            if(pScore>cScore && pScore!=7)
            wins.textContent="Player leads";
            if(cScore>pScore && cScore!=7)
            wins.textContent="Computer leads";
            return;
    }
}
if(playerChoice==='scissors'){
    if(computerChoice==='rock'){
        winner.textContent="COMPUTER SCORED";
        wins.textContent='Score level';
        cScore++;
        updateScore();
        
        if(pScore==7)
        wins.textContent="YOU WON THE GAME";
        if(cScore==7)
        wins.textContent="COMPUTER WON THE GAME";
        if(pScore>cScore && pScore!=7)
            wins.textContent="Player leads";
            if(cScore>pScore && cScore!=7)
            wins.textContent="Computer leads";
        return; 
    }else{
        winner.textContent='YOU SCORED';
        wins.textContent='Score level ';
        pScore++;
        updateScore();
        if(pScore==7)
        wins.textContent="YOU WON THE GAME";
        if(cScore==7)
        wins.textContent="COMPUTER WON THE GAME";
        if(pScore>cScore && pScore!=7)
            wins.textContent="Player leads";
            if(cScore>pScore&& cScore!=7)
            wins.textContent="Computer leads";       
        return;
    }
}
}
startGame();
playMatch();
};
game();