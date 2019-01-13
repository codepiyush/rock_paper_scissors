var user_score=0;
var comp_score=0;
var user_score_span=document.getElementById("user_score");
var comp_score_span=document.getElementById("comp_score");
var result=document.querySelector(".result > p");
var rock=document.getElementById("rock");
var paper=document.getElementById("paper");
var scissors=document.getElementById("scissors");
var win_lose=document.querySelector(".win_lose > p");
var cont = document.querySelectorAll("button");
var light1=document.getElementById("resetLightbox");
var light2 =document.getElementsByClassName("lightcontent")[0];
var ulabel=document.getElementById("user_label");
var ngame=document.getElementsByClassName("ngmodal")[0];
function comprand(){
    var choices=['r', 'p','s'];
    var rand=Math.floor(Math.random()*3);
    return choices[rand];
}
function conv(a)
{
    if(a=='r') return "Rock";
    else if(a=='s') return "Scissors";
    else return "Paper";
}
function win(user, comp)
{
    user_score++;
    user_score_span.innerHTML=user_score;
    comp_score_span.innerHTML=comp_score;
    result.innerHTML=conv(user)+"<sub>user</sub>  vs  "+conv(comp)+"<sub>comp</sub>.";
    win_lose.innerHTML="YOU WIN!";
    win_lose.style.color="green";  
}
function lose(user, comp)
{
    comp_score++;
    user_score_span.innerHTML=user_score;
    comp_score_span.innerHTML=comp_score;
    result.innerHTML=conv(user)+"<sub>user</sub>  vs  "+conv(comp)+"<sub>comp</sub>. ";
    win_lose.innerHTML="YOU LOST!";
    win_lose.style.color="red"; 
}
function draw(user, comp)
{
    result.innerHTML=conv(user)+"<sub>user</sub>  vs  "+conv(comp)+"<sub>comp</sub>."; 
    win_lose.innerHTML="DRAW";
    win_lose.style.color="blue";  
}
function game(userChoice)
{
    var compChoice=comprand();
    switch(userChoice+compChoice){
        case "rs":;
        case "pr":;
        case "sp":;
           win(userChoice,compChoice);
            break;
        case "sr":;
        case "rp":;
        case "ps":;
            lose(userChoice,compChoice);
            break;
        case "ss":;
        case "rr":;
        case "pp":;
             draw(userChoice,compChoice );
             break;
    }
}
rock.addEventListener('click', function(){
    game("r");
});
paper.addEventListener('click', function(){
    game("p");
});
scissors.addEventListener('click', function(){
    game("s");
});
function delay(w)
{
    for(i=0;i<w;i++)
    {
        continue;
    }
}
cont[1].addEventListener('click',function(){
   light1.style.display="block";
   light1.classList.add("animatein");
});
cont[3].addEventListener('click',function(){
    light1.style.display="none";
})
cont[2].addEventListener('click',function(){
    user_score=0;
    comp_score=0;
    user_score_span.innerHTML=user_score;
    comp_score_span.innerHTML=comp_score;
    light1.style.display="none";
});
cont[4].addEventListener('click', function(){
    var k=document.getElementById("playerName").value;
    if(k.length!=0)
    {ulabel.innerHTML=k;
    user_score=0;
    comp_score=0;
    user_score_span.innerHTML=user_score;
    comp_score_span.innerHTML=comp_score;
    ngame.style.display="none";
    result.innerHTML="";
    win_lose.innerHTML="";
    }
    else{
        alert("You must enter Some Name");
    } 
});
cont[0].addEventListener('click',function(){
    ngame.style.display="block";
});