
//document.body.onload = yooo1();

function yooo1(){
    alert("here is bot");
}

var gameBot;

function GameBot(name1){
    this.name1 = name1 || "Player #1";
    this.name2 = "Bot";
    this.turn = true; //game turn. true - cross, false - zero.
    this.state = [true, true, true, true, true, true, true, true, true]; //if cell was used set its value to false. This parameter is used to define                                                                              which cells were used.
    //this.randArray = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    this.cross = [false, false, false, false, false, false, false, false, false]; //used to define winning composition for crosses.
    this.zero = [false, false, false, false, false, false, false, false, false]; //used to define winning composition for zeros.
    this.crossCount = 0; //counts crosses to deside when win-composition should be checked (when >=3).
    this.zeroCount = 0; //counts zeros to deside when win-composition should be checked (when >=3).
    this.block = false; //block gamefield when winner is defined. 
    this.canvasID = ["can1", "can2", "can3", "can4", "can5", "can6", "can7", "can8", "can9"]; //array of ids.
    this.red = false; //used to set red color to redraw win-composition.
    this.p1_score = 0; 
    this.p2_score = 0;

    alert("Created!");
}

GameBot.prototype.drawFigure = function(canID){
    if(gameBot.turn == true){
        var c = document.getElementById(canID);
        var ctx = c.getContext("2d");
        ctx.moveTo(10, 10);
        ctx.lineTo(180, 180);
        ctx.stroke();
        ctx.moveTo(180, 10);
        ctx.lineTo(10, 180);
        ctx.lineWidth = 8;
        if(gameBot.red == true)
            ctx.strokeStyle = '#ff0000';
        ctx.stroke();
    }
    else{
        var c = document.getElementById(canID);
        var ctx = c.getContext("2d");
        ctx.beginPath();
        ctx.arc(95,95,90,0,2*Math.PI);
        ctx.lineWidth = 7;
        if(gameBot.red == true)
            ctx.strokeStyle = '#ff0000';
        ctx.stroke();
    }
};

GameBot.prototype.changeStates = function(i){
    if(gameBot.turn == true){
        gameBot.cross[i] = true;
        gameBot.crossCount++;
    }
    else{
        gameBot.zero[i] = true;
        gameBot.zeroCount++;
    }
    gameBot.state[i] = false;
    
    if(gameBot.crossCount >= 3 || gameBot.zeroCount >= 3){
        var x = gameBot.checkWinner();
        var j = 0;
        for(var k = 0; k < gameBot.state.length; ++k){
            if(gameBot.state[k] == true)
                break;
            else{
                j++;                //check if we have all cells used but no winner.
                if(j == 9 && x == false){
                    alert("Dead Heat!");
                }
            }
        }//for
    }

    gameBot.changeTurn();
    gameBot.botTurn();
    
};

GameBot.prototype.changeTurn = function(){
    if(gameBot.block == false){
        if(gameBot.turn == true)
            gameBot.turn = false;
        else
            gameBot.turn = true;
    }
};

function switchPlayers(){
    //reset();
    var swap = gameBot.name1;
    gameBot.name1 = gameBot.name2;
    gameBot.name2 = swap;
    
    swap = gameBot.p1_score;
    gameBot.p1_score = gameBot.p2_score;
    gameBot.p2_score = swap;
    
    document.getElementById("player1Name").innerHTML = gameBot.name1.substr(0, 14);
    document.getElementById("player2Name").innerHTML = gameBot.name2.substr(0, 14);
    
    document.getElementById("p1score").innerHTML = gameBot.p1_score;
    document.getElementById("p2score").innerHTML = gameBot.p2_score;
    /*if(gameBot.name1 == "Bot"){
        gameBot.turn = false;
        gameBot.botTurn();
    }*/
    reset();
}

GameBot.prototype.botTurn = function(){
    if(gameBot.turn == false && gameBot.block == false){
        var tmp = [];
        var k = 0;
        for(var i = 0; i < gameBot.state.length; i++ ){ //i from 0 to 8
            if(gameBot.state[i] == true){
                tmp[k] = i;
                k++;
            }
        }
        /*
        for(var sss = 0; sss < tmp.length; sss++){
            document.write(tmp[sss]);
        }
        */
        var randcell = Math.floor((Math.random() * tmp.length) + 0);


        gameBot.drawFigure(gameBot.canvasID[tmp[randcell]]);
        gameBot.changeStates(tmp[randcell]);
      
    }
};

GameBot.prototype.setScore = function(){
    gameBot.block = true;
    if(gameBot.name1 == "Bot"){
        if(gameBot.turn == false){
            gameBot.p1_score++;
            document.getElementById("p1score").innerHTML = gameBot.p1_score;
        }
        else{
            gameBot.p2_score++;
            document.getElementById("p2score").innerHTML = gameBot.p2_score;
        }    
    }
    else{
        if(gameBot.turn == true){
            gameBot.p1_score++;
            document.getElementById("p1score").innerHTML = gameBot.p1_score;
        }
        else{
            gameBot.p2_score++;
            document.getElementById("p2score").innerHTML = gameBot.p2_score;
        }
    }
};

GameBot.prototype.checkWinner = function(){
    var sender = [];
    if(gameBot.turn == true){
        if(gameBot.cross[0] == true && gameBot.cross[4] == true && gameBot.cross[8] == true){
            sender = [gameBot.canvasID[0], gameBot.canvasID[4], gameBot.canvasID[8]];
            gameBot.red = true;
            alert("asd");
            for(var i = 0; i < 3; i++)
                gameBot.drawFigure(sender[i]);
            gameBot.setScore();
            return true;
        }
        else if(gameBot.cross[2] == true && gameBot.cross[4] == true && gameBot.cross[6] == true){
            sender = [gameBot.canvasID[2], gameBot.canvasID[4], gameBot.canvasID[6]];
            gameBot.red = true;
            for(var i = 0; i < 3; i++)
                gameBot.drawFigure(sender[i]);
            gameBot.setScore();
            return true;
        }
        else if(gameBot.cross[0] == true && gameBot.cross[1] == true && gameBot.cross[2] == true){
            sender = [gameBot.canvasID[0], gameBot.canvasID[1], gameBot.canvasID[2]];
            gameBot.red = true;
            for(var i = 0; i < 3; i++)
                gameBot.drawFigure(sender[i]);
            gameBot.setScore();
            return true;
        }
        else if(gameBot.cross[3] == true && gameBot.cross[4] == true && gameBot.cross[5] == true){
            sender = [gameBot.canvasID[3], gameBot.canvasID[4], gameBot.canvasID[5]];
            gameBot.red = true;
            for(var i = 0; i < 3; i++)
                gameBot.drawFigure(sender[i]);
            gameBot.setScore();
            return true;
        }
        else if(gameBot.cross[6] == true && gameBot.cross[7] == true && gameBot.cross[8] == true){
            sender = [gameBot.canvasID[6], gameBot.canvasID[7], gameBot.canvasID[8]];
            gameBot.red = true;
            for(var i = 0; i < 3; i++)
                gameBot.drawFigure(sender[i]);
            gameBot.setScore();
            return true;
        }
        else if(gameBot.cross[0] == true && gameBot.cross[3] == true && gameBot.cross[6] == true){
            sender = [gameBot.canvasID[0], gameBot.canvasID[3], gameBot.canvasID[6]];
            gameBot.red = true;
            for(var i = 0; i < 3; i++)
                gameBot.drawFigure(sender[i]);
            gameBot.setScore();
            return true;
        }
        else if(gameBot.cross[1] == true && gameBot.cross[4] == true && gameBot.cross[7] == true){
            sender = [gameBot.canvasID[1], gameBot.canvasID[4], gameBot.canvasID[7]];
            gameBot.red = true;
            for(var i = 0; i < 3; i++)
                gameBot.drawFigure(sender[i]);
            gameBot.setScore();
            return true;
        }
        else if(gameBot.cross[2] == true && gameBot.cross[5] == true && gameBot.cross[8] == true){
            sender = [gameBot.canvasID[2], gameBot.canvasID[5], gameBot.canvasID[8]];
            gameBot.red = true;
            for(var i = 0; i < 3; i++)
                gameBot.drawFigure(sender[i]);
            gameBot.setScore();
            return true;
        }
    }
    else{
        if(gameBot.zero[0] == true && gameBot.zero[4] == true && gameBot.zero[8] == true){
            sender = [gameBot.canvasID[0], gameBot.canvasID[4], gameBot.canvasID[8]];
            gameBot.red = true;
            alert("asd2");
            for(var i = 0; i < 3; i++)
                gameBot.drawFigure(sender[i]);
            gameBot.setScore();
            return true;
        }
        else if(gameBot.zero[2] == true && gameBot.zero[4] == true && gameBot.zero[6] == true){
            sender = [gameBot.canvasID[2], gameBot.canvasID[4], gameBot.canvasID[6]];
            gameBot.red = true;
            for(var i = 0; i < 3; i++)
                gameBot.drawFigure(sender[i]);
            gameBot.setScore();
            return true;
        }
        else if(gameBot.zero[0] == true && gameBot.zero[1] == true && gameBot.zero[2] == true){
            sender = [gameBot.canvasID[0], gameBot.canvasID[1], gameBot.canvasID[2]];
            gameBot.red = true;
            for(var i = 0; i < 3; i++)
                gameBot.drawFigure(sender[i]);
            gameBot.setScore();
            return true;
        }
        else if(gameBot.zero[3] == true && gameBot.zero[4] == true && gameBot.zero[5] == true){
            sender = [gameBot.canvasID[3], gameBot.canvasID[4], gameBot.canvasID[5]];
            gameBot.red = true;
            for(var i = 0; i < 3; i++)
                gameBot.drawFigure(sender[i]);
            gameBot.setScore();
            return true;
        }
        else if(gameBot.zero[6] == true && gameBot.zero[7] == true && gameBot.zero[8] == true){
            sender = [gameBot.canvasID[6], gameBot.canvasID[7], gameBot.canvasID[8]];
            gameBot.red = true;
            for(var i = 0; i < 3; i++)
                gameBot.drawFigure(sender[i]);
            gameBot.setScore();
            return true;
        }
        else if(gameBot.zero[0] == true && gameBot.zero[3] == true && gameBot.zero[6] == true){
            sender = [gameBot.canvasID[0], gameBot.canvasID[3], gameBot.canvasID[6]];
            gameBot.red = true;
            for(var i = 0; i < 3; i++)
                gameBot.drawFigure(sender[i]);
            gameBot.setScore();
            return true;
        }
        else if(gameBot.zero[1] == true && gameBot.zero[4] == true && gameBot.zero[7] == true){
            sender = [gameBot.canvasID[1], gameBot.canvasID[4], gameBot.canvasID[7]];
            gameBot.red = true;
            for(var i = 0; i < 3; i++)
                gameBot.drawFigure(sender[i]);
            gameBot.setScore();
            return true;
        }
        else if(gameBot.zero[2] == true && gameBot.zero[5] == true && gameBot.zero[8] == true){
            sender = [gameBot.canvasID[2], gameBot.canvasID[5], gameBot.canvasID[8]];
            gameBot.red = true;
            for(var i = 0; i < 3; i++)
                gameBot.drawFigure(sender[i]);
            gameBot.setScore();
            return true;
        }
    }
    
    return false;
    
};

function resetScore(){
    reset();
    gameBot.p1_score = 0;
    gameBot.p2_score = 0;
    document.getElementById("p1score").innerHTML = gameBot.p1_score;
    document.getElementById("p2score").innerHTML = gameBot.p2_score;
}

function reset(){
    gameBot.turn = true;
    gameBot.state = [true, true, true, true, true, true, true, true, true];
    gameBot.cross = [false, false, false, false, false, false, false, false, false];
    gameBot.zero = [false, false, false, false, false, false, false, false, false];
    gameBot.crossCount = 0;
    gameBot.zeroCount = 0;
    gameBot.red = false;
    gameBot.block = false;
    gameBot.clearArea();
    if(gameBot.name1 == "Bot"){
        gameBot.turn = false;  
        gameBot.botTurn();
    }
}

GameBot.prototype.clearArea = function(){
    for(var i = 0; i < gameBot.canvasID.length; i++){
        var cl = document.getElementById(gameBot.canvasID[i]);
        cl.width = cl.width; //the other methods don't clear it properly.
    }
};

function getNamesBot(){
    var name1 = prompt("Hello, write your name!");
    gameBot = new GameBot(name1);   
    //setting names
    document.getElementById("player1Name").innerHTML = gameBot.name1.substr(0, 14);
    document.getElementById("player2Name").innerHTML = gameBot.name2;
    document.getElementById("p1score").innerHTML = gameBot.p1_score;
    document.getElementById("p2score").innerHTML = gameBot.p2_score;
}



function checkOrder(cell) {

    if(gameBot.turn == true && gameBot.block == false){
        switch (cell){
        case "one":
                if(gameBot.state[0] == true){
                    gameBot.drawFigure(gameBot.canvasID[0]);    
                    gameBot.changeStates(0);
                }
                break;
        case "two":
                if(gameBot.state[1] == true){
                    gameBot.drawFigure(gameBot.canvasID[1]);
                    gameBot.changeStates(1);
                }
                break;
        case "three":
                if(gameBot.state[2] == true){
                    gameBot.drawFigure(gameBot.canvasID[2]);
                    gameBot.changeStates(2);
                }
                break;
        case "four":
                if(gameBot.state[3] == true){
                    gameBot.drawFigure(gameBot.canvasID[3]);
                    gameBot.changeStates(3);  
                }
                break;
        case "five":
                if(gameBot.state[4] == true){
                    gameBot.drawFigure(gameBot.canvasID[4]);
                    gameBot.changeStates(4);
                }
                break;
        case "six":
                if(gameBot.state[5] == true){
                    gameBot.drawFigure(gameBot.canvasID[5]);
                    gameBot.changeStates(5);
                }
                break;
        case "seven":
                if(gameBot.state[6] == true){
                    gameBot.drawFigure(gameBot.canvasID[6]);
                    gameBot.changeStates(6);
                }
                break;
        case "eight":
                if(gameBot.state[7] == true){
                    gameBot.drawFigure(gameBot.canvasID[7]);
                    gameBot.changeStates(7);
                }
                break;
        case "nine":
                if(gameBot.state[8] == true){
                    gameBot.drawFigure(gameBot.canvasID[8]);
                    gameBot.changeStates(8);
                }
            break;

        } //switch
    } //if
}
