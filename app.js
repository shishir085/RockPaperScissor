let userscore = 0
let compscore = 0

const choices = document.querySelectorAll(".choice")
let msg = document.querySelector("#message")
let  userscorepara=document.querySelector("#userscore")
let  compscorepara=document.querySelector("#compscore")


const showwinner=(userwin)=>{
if(userwin)
{
    userscore++;
    msg.innerText="You Win!"
    msg.style.backgroundColor="green"
    userscorepara.innerText=userscore;
}
else{
    compscore++;
    msg.innerText="You Lose!"
    msg.style.backgroundColor="red"
    compscorepara.innerText=compscore;


}
}

let drawgame=()=>{
    
    msg.innerText="Game Was Draw!"
    msg.style.backgroundColor="#4657B9"


}
const gencompchoice = () => {
    let options = ['rock', 'paper', 'scissors']
    let randomidx = Math.floor(Math.random() * 3)
    return options[randomidx];

}

const playgame = (userchoice) => {
    console.log( userchoice);
    const compchoice = gencompchoice();
    console.log( compchoice);

    if (userchoice===compchoice){
        drawgame();
    }
    else{
        let userwin=true;
        if(userchoice==="rock"){
            userwin=compchoice==="paper"?false:true;
        }
        else if(userchoice==="paper"){
            userwin=compchoice==="scissors"?false:true;
        }
        else{
            userwin=compchoice==="rock"?false:true;
        }
        showwinner(userwin);
    }



}


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let userchoice = choice.getAttribute("id")

        playgame(userchoice);
    })
})

