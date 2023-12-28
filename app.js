let userscore = 0
let compscore = 0

const choices = document.querySelectorAll(".choice")


let drawgame=()=>{
    console.log('game was draw');
}
const gencompchoice = () => {
    let options = ['rock', 'paper', 'scissors']
    let randomidx = Math.floor(Math.random() * 3)
    return options[randomidx];

}

const playgame = (userchoice) => {
    console.log("user choice =", userchoice);
    const compchoice = gencompchoice();
    console.log("comp choice =", compchoice);

    if (userchoice===compchoice){
        drawgame();
    }

}


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let userchoice = choice.getAttribute("id")

        playgame(userchoice);
    })
})

