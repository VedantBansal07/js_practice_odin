//console.log("Hello WORLd")
let humanScore =0
let computerScore=0
function getComputerChoice(){
    let compchoice=Math.floor(Math.random() *3) ;
    if(compchoice==0) return "rock"
    else if(compchoice==1) return "paper"
    return "scissors"
}
function getHumanChoice(){
    let humanchoice=prompt("Enter you choice");
    return humanchoice
}
// console.log(getComputerChoice())
function playRound(){
    let humanChoice=getHumanChoice()
    let computerChoice=getComputerChoice()
    let temp=-1
    humanChoice=humanChoice.toLowerCase()
    if(computerChoice=="rock" ){
        if(humanChoice=="paper"){
            humanScore++
            temp=0
        }
        else if(humanChoice=="scissors"){
            computerScore++
            temp=1
        }
        else temp=2
    }
    else if(computerChoice=="paper"){
       if(humanChoice=="scissors"){
            humanScore++
            temp=0
        }
        else if(humanChoice=="rock"){
            computerScore++
            temp=1
        }
        else temp=2
    }
    else{
        if(humanChoice=="rock"){
            humanScore++
            temp=0
        }
        else if(humanChoice=="paper"){
            computerScore++
            temp=1
        }
        else temp=2
    }

    if(temp==0){
        console.log(`You win!${humanChoice} beats ${computerChoice}`)
    }
    else if(temp==1){
        console.log(`You lose!${computerChoice} beats ${humanChoice}`)
    }
    else{
        console.log(`No result`)
    }

}
function playGame(){
    for(let i=0;i<5;i++){
        playRound()
    }
    console.log(`Final Score - You :${humanScore} , Computer  : ${computerScore}`)
}
playGame()

