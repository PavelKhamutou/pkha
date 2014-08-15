var game;

function Game(name1, name2){
    this.name1 = name1;
    this.name2 = name2;
    this.turn = true;
}

function getNames(){
    var name1 = prompt("Hello, write name of the 1st player!");
    var name2 = prompt("Hello, write name of the 2nd player!");
    game = new Game(name1, name2);
    
    //setting names
    var textAdd = "Name: " + game.name1;
    document.getElementById("player1Name").innerHTML = textAdd;
    textAdd = "Name: " + game.name2;
    document.getElementById("player2Name").innerHTML = textAdd;
}

function drawFigure(canID){
    if(game.turn == true){
        alert(canID);
        var c = document.getElementById(canID);
        var ctx = c.getContext("2d");
        ctx.moveTo(10, 10);
        ctx.lineTo(180, 180);
        ctx.stroke();
        ctx.moveTo(180, 10);
        ctx.lineTo(10, 180);
        ctx.stroke();
    }
    else{
        var c = document.getElementById(canID);
        var ctx = c.getContext("2d");
        ctx.beginPath();
        ctx.arc(95,95,90,0,2*Math.PI);
        ctx.stroke();
    }
}



function checkOrder(cell) {
    if(game.turn == true){
        alert(cell);
        switch (cell){
        case "one":
                drawFigure("can1");
                break;
        case "two":
                drawFigure("can2");
                break;
        case "three":
                drawFigure("can3");
                break;
        case "four":
                drawFigure("can4");
                break;
        case "five":
                drawFigure("can5");
                break;
        case "six":
                drawFigure("can6");
                break;
        case "seven":
                drawFigure("can7");
                break;
        case "eight":
                drawFigure("can8");
                break;
        case "nine":
                drawFigure("can9");
                break;
        
        }
        game.turn = false;
    }
    else{
        alert("yono")
        switch (cell){
        case "one":
                drawFigure("can1");
                break;
        case "two":
                drawFigure("can2");
                break;
        case "three":
                drawFigure("can3");
                break;
        case "four":
                drawFigure("can4");
                break;
        case "five":
                drawFigure("can5");
                break;
        case "six":
                drawFigure("can6");
                break;
        case "seven":
                drawFigure("can7");
                break;
        case "eight":
                drawFigure("can8");
                break;
        case "nine":
                drawFigure("can9");
                break;
        
        }
        game.turn = true;
    }
}