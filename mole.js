let trackcurrMole; //tracking current mole pos
let currplantTile;
let score = 0;
let gameover=false;

window.onload = function() {
    setGame();
}

function setGame() { //set up grid for game board in html
    for (let i=0; i<9; i++) { //0-8, 9 ele
        //<div id = "0-8"></div> crete div tag
        let tile = document.createElement("div");
        tile.id = i.toString();
        tile.addEventListener("click", selectTile);
        document.getElementById("board").appendChild(tile);
    }

    setInterval(setMole, 1000); //2000 ms = 2s
    setInterval(setPlant, 2000);
}
function getRandomTile() {
    let rannum = Math.floor(Math.random()*9); //random number and round it from 1 to 9
    return rannum.toString();
}

function setMole() {
    if (gameover) {
        return;
    }

    if(trackcurrMole) // if trackcurrMole !=0, null, undefined or false
    {
        trackcurrMole.innerHTML="";
    }


    let mole = document.createElement("img");
    mole.src = "img/monty-mole.png";

    let num = getRandomTile(); //place mole in random tile
    if(currplantTile && currplantTile.id == num) {
        return;
    }
    trackcurrMole = document.getElementById(num);
    trackcurrMole.appendChild(mole);
}

function setPlant() {
        if(gameover) {
            return;
        }

        if (currplantTile) {
            currplantTile.innerHTML="";
        }

    let plant = document.createElement("img");
    plant.src = "img/piranha-plant.png";

    let num = getRandomTile();
   
    if(trackcurrMole && trackcurrMole.id == num) {
        return;
    }
    currplantTile = document.getElementById(num);
    currplantTile.appendChild(plant);
}

function selectTile() {
    if(gameover) {
        return;
    }

    if(this==trackcurrMole) {
        score +=10;
        document.getElementById("score").innerText = score.toString();
    }

    else if(this==currplantTile) {
        document.getElementById("score").innerText = "GAMEOVER: " + score.toString();
        gameOver = true;
    }
}