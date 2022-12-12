

document.querySelector(".btn").addEventListener("click",()=>{
// left
let randomNumber1=Math.floor(Math.random() * 6);
randomNumber1=randomNumber1+1;

let randomDiceImage= "dice"+randomNumber1+".png";
let randomDiceSorce= "images/"+randomDiceImage;

let image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomDiceSorce);

// // right
let randomNumber2=Math.floor(Math.random() * 6)+1;

let randomDiceSorce2= "images/dice"+randomNumber2+".png";

document.querySelectorAll("img")[1].setAttribute("src",randomDiceSorce2);

// wins display
if(randomNumber1>randomNumber2){
  document.querySelector(".display").innerHTML="🚩 player 1 Wins!";
}else if (randomNumber1<randomNumber2){
  document.querySelector(".display").innerHTML="player 2 Wins! 🚩";
}else{
    document.querySelector(".display").innerHTML="Draw";
}



});












































// left

// if(randomNumber1==1){
// document.querySelector(".img1").setAttribute("src","images/dice1.png");
// }else if(randomNumber1==2){
//   document.querySelector(".img1").setAttribute("src","images/dice2.png");
// }
// else if(randomNumber1==3){
//   document.querySelector(".img1").setAttribute("src","images/dice3.png");
// }
// else if(randomNumber1==4){
//   document.querySelector(".img1").setAttribute("src","images/dice4.png");
// }
// else if(randomNumber1==5){
//   document.querySelector(".img1").setAttribute("src","images/dice5.png");
// }
// else {
//   document.querySelector(".img1").setAttribute("src","images/dice6.png");
// }



// right
// if(randomNumber2==1){
// document.querySelector(".img2").setAttribute("src","images/dice1.png");
// }else if(randomNumber2==2){
//   document.querySelector(".img2").setAttribute("src","images/dice2.png");
// }
// else if(randomNumber2==3){
//   document.querySelector(".img2").setAttribute("src","images/dice3.png");
// }
// else if(randomNumber2==4){
//   document.querySelector(".img2").setAttribute("src","images/dice4.png");
// }
// else if(randomNumber2==5){
//   document.querySelector(".img2").setAttribute("src","images/dice5.png");
// }
// else {
//   document.querySelector(".img2").setAttribute("src","images/dice6.png");
// }
