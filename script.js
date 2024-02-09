let btn = document.getElementById("btn");
let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
let h1 = document.querySelector("h1");


const refreshDice = ()=>{
    let random1 = Math.floor(Math.random() * 6) + 1;
    let random2 = Math.floor(Math.random() * 6) + 1;
    let imgSource1 = `Image/dice ${random1}.png`
    let imgSource2 = `Image/dice ${random2}.png`
    img1.src = imgSource1;
    img2.src = imgSource2;
    img1.alt = `Dice ${random1}` 
    img2.alt = `Dice ${random2}`
    let winner = random1 > random2 ? "Player 1 Win!!!" : (random1 < random2 ? "Player 2 Win!!!" : "Draw!!!");
    h1.textContent = winner;

}


btn.addEventListener("click", refreshDice)