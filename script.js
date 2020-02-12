let numrows = 4;
let numcols = 4;
let numcels = numrows * numcols;
let score = 0;
let diffscale = 50;

let DoTheThing = function(){

    startMenu();

    do{

        if(score >= 10){
            diffscale -= 5
        }


    }while (score > -5);





};

let createTable = function(){

  //FOR LOOP - Used when you KNOW how many times to loop something.
  // FOR(initialize control variable; state the boolean expression; update control variable)

    let redColor = Math.floor(Math.random()*256);
    let greenColor = Math.floor(Math.random()*256);
    let blueColor = Math.floor(Math.random()*256);

    let regColor = "rgb(" + redColor + ',' + greenColor + ',' + blueColor +")";
    let diffColor = "rgb(" + (redColor+diffscale) + ',' + (greenColor+diffscale) + ',' + (blueColor+diffscale) +")";

    let randRow = Math.floor(Math.random()*numrows) + 1;
    let randCols = Math.floor(Math.random()*numcols) +1;

let table = document.createElement("TABLE");

    for(let row = 1; row <= numrows; row++){
    /* row = 0; row < 4 is the same as above.*/
        let tableRow = document.createElement("TR");
        table.appendChild(tableRow);

        for(let col = 1; col <=numcols; col++){

            let cel1 = document.createElement("TD");
            cel1.onclick = function(){checkWin(this)};
            cel1.style.backgroundColor = regColor;



            if(row === randRow && col === randCols){
                cel1.style.backgroundColor = diffColor;
                cel1.id = "correctBox";
            }

            tableRow.appendChild(cel1);


        }

    }

    let content = document.getElementById("content");
    content.innerHTML = " ";
    content.appendChild(table);

    let scoreRow = document.createElement("TR");
    let scoreRow2 = document.createElement("TR");
    let scoreRow3 = document.createElement("TR");
    let scoreCol = document.createElement("TD");
    let scoreCol2 = document.createElement("TD");
    let scoreCol3 = document.createElement("TD");
    scoreCol3.id = "results";
    scoreCol.innerText = "Player's score";
    scoreCol2.innerText = score;
    scoreCol.classList.add("smallCell");
    scoreCol2.classList.add("smallCell");
    scoreCol3.classList.add("smallCell");

    scoreRow.append(scoreCol);
    scoreRow2.appendChild(scoreCol2);
    scoreRow3.appendChild(scoreCol3);


    let scoreboard = document.createElement("TABLE");
    scoreboard.appendChild(scoreRow);
    scoreboard.appendChild(scoreRow2);
    scoreboard.appendChild(scoreRow3);

    content.appendChild(scoreboard)
};

let checkWin = function(cell) {
    if (cell.id === "correctBox") {
        document.getElementById("results").innerText = "You found it!";
        score++;
        if (score >= 10) {
            score = 0;
            diffscale -= 5;
        }
        if(diffscale <= 0){
            winMenu();
        }else{
            createTable();
        }
    } else {
        document.getElementById("results").innerText = "Not it, lose a point";
        score--;
        if (score <= -5) {
            score = 0;
            diffscale = 100;
            startMenu();
        } else {
            createTable()
        }
    }
};

let startMenu = function(){

    let title = document.createElement("H1");
    title.innerText = "Colour Chooser Game";

    let directions = document.createElement("P");
    directions.innerText = "Find the colour that is different. Score a point if you do! Lose a point if you don't. A score of 10 progresses you to the next level. A score of -5 ends the game.";

    let begin = document.createElement("BUTTON");
    begin.innerText = "BEGIN";
    begin.onclick = createTable;

    let display = document.getElementById("content");
    display.innerHTML = " ";
    display.appendChild(title);
    display.appendChild(directions);
    display.appendChild(begin);
};

let winMenu = function() {

    let title = document.createElement("H1");
    title.innerText = "Colour Chooser Game";

    let directions = document.createElement("P");
    directions.innerText = "You won, congrats! Click the button to play again!";

    let begin = document.createElement("BUTTON");
    begin.innerText = "BEGIN";
    begin.onclick = createTable;

    let display = document.getElementById("content");
    display.innerHTML = " ";
    display.appendChild(title);
    display.appendChild(directions);
    display.appendChild(begin);


}