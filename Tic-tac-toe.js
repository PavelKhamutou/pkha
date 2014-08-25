var game;

function Game(name1, name2){
    this.name1 = name1 || "Player #1";
    this.name2 = name2 || "Player #2";
    this.turn = true;
    this.state = [true, true, true, true, true, true, true, true, true];
    this.cross = [false, false, false, false, false, false, false, false, false];
    this.zero = [false, false, false, false, false, false, false, false, false];
    this.crossCount = 0;
    this.zeroCount = 0;
    this.block = false;
    this.canvasID = ["can1", "can2", "can3", "can4", "can5", "can6", "can7", "can8", "can9"];
    this.red = false;
    this.p1_score = 0;
    this.p2_score = 0;

}



function getNames(){
    var name1 = prompt("Hello, write name of the 1st player!");
    var name2 = prompt("Hello, write name of the 2nd player!");
    game = new Game(name1, name2);
    
    //setting names
    document.getElementById("player1Name").innerHTML = game.name1.substr(0, 14);
    document.getElementById("player2Name").innerHTML = game.name2.substr(0, 14);
    document.getElementById("p1score").innerHTML = game.p1_score;
    document.getElementById("p2score").innerHTML = game.p2_score;
}

Game.prototype.setScore = function(dc){
    game.block = true;
    if(dc == true){
        game.p1_score++;
        document.getElementById("p1score").innerHTML = game.p1_score;
    }
    else{
        game.p2_score++;
        document.getElementById("p2score").innerHTML = game.p2_score;
    }
};

Game.prototype.changeStates = function(i){
    if(game.turn == true){
        game.cross[i] = true;
        game.crossCount++;
    }
    else{
        game.zero[i] = true;
        game.zeroCount++;
    }
    game.state[i] = false;
    
    if(game.crossCount >= 3 || game.zeroCount >= 3){
        game.checkWinner();
        var j = 0;
        for(var k = 0; k < game.state.length; ++k){
            if(game.state[k] == true)
                break;
            else{
                j++;                
                if(j == 9){
                    alert("Dead Heat!");
                    reset();
                }
            }
        }//for
    }
    
    
};

Game.prototype.checkWinner = function(){
    var sender = [];
    if(game.turn == true){
        if(game.cross[0] == true && game.cross[4] == true && game.cross[8] == true){
            sender = [game.canvasID[0], game.canvasID[4], game.canvasID[8]];
            game.red = true;
            for(var i = 0; i < 3; i++)
                drawFigure(sender[i]);
            game.setScore(true);
        }
        else if(game.cross[2] == true && game.cross[4] == true && game.cross[6] == true){
            sender = [game.canvasID[2], game.canvasID[4], game.canvasID[6]];
            game.red = true;
            for(var i = 0; i < 3; i++)
                drawFigure(sender[i]);
            game.setScore(true);
        }
        else if(game.cross[0] == true && game.cross[1] == true && game.cross[2] == true){
            sender = [game.canvasID[0], game.canvasID[1], game.canvasID[2]];
            game.red = true;
            for(var i = 0; i < 3; i++)
                drawFigure(sender[i]);
            game.setScore(true);
        }
        else if(game.cross[3] == true && game.cross[4] == true && game.cross[5] == true){
            sender = [game.canvasID[3], game.canvasID[4], game.canvasID[5]];
            game.red = true;
            for(var i = 0; i < 3; i++)
                drawFigure(sender[i]);
            game.setScore(true);
        }
        else if(game.cross[6] == true && game.cross[7] == true && game.cross[8] == true){
            sender = [game.canvasID[6], game.canvasID[7], game.canvasID[8]];
            game.red = true;
            for(var i = 0; i < 3; i++)
                drawFigure(sender[i]);
            game.setScore(true);
        }
        else if(game.cross[0] == true && game.cross[3] == true && game.cross[6] == true){
            sender = [game.canvasID[0], game.canvasID[3], game.canvasID[6]];
            game.red = true;
            for(var i = 0; i < 3; i++)
                drawFigure(sender[i]);
            game.setScore(true);
        }
        else if(game.cross[1] == true && game.cross[4] == true && game.cross[7] == true){
            sender = [game.canvasID[1], game.canvasID[4], game.canvasID[7]];
            game.red = true;
            for(var i = 0; i < 3; i++)
                drawFigure(sender[i]);
            game.setScore(true);
        }
        else if(game.cross[2] == true && game.cross[5] == true && game.cross[8] == true){
            sender = [game.canvasID[2], game.canvasID[5], game.canvasID[8]];
            game.red = true;
            for(var i = 0; i < 3; i++)
                drawFigure(sender[i]);
            game.setScore(true);
        }
    }
    else{
        if(game.zero[0] == true && game.zero[4] == true && game.zero[8] == true){
            sender = [game.canvasID[0], game.canvasID[4], game.canvasID[8]];
            game.red = true;
            for(var i = 0; i < 3; i++)
                drawFigure(sender[i]);
            game.setScore(false);
        }
        else if(game.zero[2] == true && game.zero[4] == true && game.zero[6] == true){
            sender = [game.canvasID[2], game.canvasID[4], game.canvasID[6]];
            game.red = true;
            for(var i = 0; i < 3; i++)
                drawFigure(sender[i]);
            game.setScore(false);
        }
        else if(game.zero[0] == true && game.zero[1] == true && game.zero[2] == true){
            sender = [game.canvasID[0], game.canvasID[1], game.canvasID[2]];
            game.red = true;
            for(var i = 0; i < 3; i++)
                drawFigure(sender[i]);
            game.setScore(false);
        }
        else if(game.zero[3] == true && game.zero[4] == true && game.zero[5] == true){
            sender = [game.canvasID[3], game.canvasID[4], game.canvasID[5]];
            game.red = true;
            for(var i = 0; i < 3; i++)
                drawFigure(sender[i]);
            game.setScore(false);
        }
        else if(game.zero[6] == true && game.zero[7] == true && game.zero[8] == true){
            sender = [game.canvasID[6], game.canvasID[7], game.canvasID[8]];
            game.red = true;
            for(var i = 0; i < 3; i++)
                drawFigure(sender[i]);
            game.setScore(false);
        }
        else if(game.zero[0] == true && game.zero[3] == true && game.zero[6] == true){
            sender = [game.canvasID[0], game.canvasID[3], game.canvasID[6]];
            game.red = true;
            for(var i = 0; i < 3; i++)
                drawFigure(sender[i]);
            game.setScore(false);
        }
        else if(game.zero[1] == true && game.zero[4] == true && game.zero[7] == true){
            sender = [game.canvasID[1], game.canvasID[4], game.canvasID[7]];
            game.red = true;
            for(var i = 0; i < 3; i++)
                drawFigure(sender[i]);
            game.setScore(false);
        }
        else if(game.zero[2] == true && game.zero[5] == true && game.zero[8] == true){
            sender = [game.canvasID[2], game.canvasID[5], game.canvasID[8]];
            game.red = true;
            for(var i = 0; i < 3; i++)
                drawFigure(sender[i]);
            game.setScore(false);
        }
    }
    
};

function drawFigure(canID){
    if(game.turn == true){
        var c = document.getElementById(canID);
        var ctx = c.getContext("2d");
        ctx.moveTo(10, 10);
        ctx.lineTo(180, 180);
        ctx.stroke();
        ctx.moveTo(180, 10);
        ctx.lineTo(10, 180);
        ctx.lineWidth = 8;
        if(game.red == true)
            ctx.strokeStyle = '#ff0000';
        ctx.stroke();
    }
    else{
        var c = document.getElementById(canID);
        var ctx = c.getContext("2d");
        ctx.beginPath();
        ctx.arc(95,95,90,0,2*Math.PI);
        ctx.lineWidth = 7;
        if(game.red == true)
            ctx.strokeStyle = '#ff0000';
        ctx.stroke();
    }
}

function reset(){
    game.turn = true;
    game.state = [true, true, true, true, true, true, true, true, true];
    game.cross = [false, false, false, false, false, false, false, false, false];
    game.zero = [false, false, false, false, false, false, false, false, false];
    game.crossCount = 0;
    game.zeroCount = 0;
    game.red = false;
    game.block = false;
    game.clearArea();
}


function switchPlayers(){
    reset();
    var swap = game.name1;
    game.name1 = game.name2;
    game.name2 = swap;
    
    swap = game.p1_score;
    game.p1_score = game.p2_score;
    game.p2_score = swap;
    
    document.getElementById("player1Name").innerHTML = game.name1.substr(0, 14);
    document.getElementById("player2Name").innerHTML = game.name2.substr(0, 14);
    
    document.getElementById("p1score").innerHTML = game.p1_score;
    document.getElementById("p2score").innerHTML = game.p2_score;
}


Game.prototype.clearArea = function(){
    for(var i = 0; i < game.canvasID.length; i++){
        var cl = document.getElementById(game.canvasID[i]);
        cl.width = cl.width; //the other methods don't clear it properly.
    }
};

function changeTurn(s){
    game.turn = s;
}

function checkOrder(cell) {
    //alert("hello"); 
    if (game.block == false){
        if(game.turn == true){
            switch (cell){
            case "one":
                    if(game.state[0] == true){
                        drawFigure(game.canvasID[0]);
                        game.changeStates(0);
                        changeTurn(false);
                    }
                    break;
            case "two":
                    if(game.state[1] == true){
                        drawFigure(game.canvasID[1]);
                        game.changeStates(1);
                        changeTurn(false);
                    }
                    break;
            case "three":
                    if(game.state[2] == true){
                        drawFigure(game.canvasID[2]);
                        game.changeStates(2);
                        changeTurn(false);
                    }
                    break;
            case "four":
                    if(game.state[3] == true){
                        drawFigure(game.canvasID[3]);
                        game.changeStates(3);  
                        changeTurn(false);
                    }
                    break;
            case "five":
                    if(game.state[4] == true){
                        drawFigure(game.canvasID[4]);
                        game.changeStates(4);
                        changeTurn(false);
                    }
                    break;
            case "six":
                    if(game.state[5] == true){
                        drawFigure(game.canvasID[5]);
                        game.changeStates(5);
                        changeTurn(false);
                    }
                    break;
            case "seven":
                    if(game.state[6] == true){
                        drawFigure(game.canvasID[6]);
                        game.changeStates(6);
                        changeTurn(false);
                    }
                    break;
            case "eight":
                    if(game.state[7] == true){
                        drawFigure(game.canvasID[7]);
                        game.changeStates(7);
                        changeTurn(false);
                    }
                    break;
            case "nine":
                    if(game.state[8] == true){
                        drawFigure(game.canvasID[8]);
                        game.changeStates(8);
                        changeTurn(false);
                    }
                    break;

            } //switch
            //game.turn = false;
        } //if
        else{   //game.turn == false
            switch (cell){
            case "one":
                    if(game.state[0] == true){
                        drawFigure(game.canvasID[0]);
                        game.changeStates(0);
                        changeTurn(true);
                    }
                    break;
            case "two":
                    if(game.state[1] == true){
                        drawFigure(game.canvasID[1]);
                        game.changeStates(1);
                        changeTurn(true);
                    }
                    break;
            case "three":
                    if(game.state[2] == true){
                        drawFigure(game.canvasID[2]);
                        game.changeStates(2);
                        changeTurn(true);
                    }
                    break;
            case "four":
                    if(game.state[3] == true){
                        drawFigure(game.canvasID[3]);
                        game.changeStates(3);    
                        changeTurn(true);
                    }
                    break;
            case "five":
                    if(game.state[4] == true){
                        drawFigure(game.canvasID[4]);
                        game.changeStates(4);
                        changeTurn(true);
                    }
                    break;
            case "six":
                    if(game.state[5] == true){
                        drawFigure(game.canvasID[5]);
                        game.changeStates(5);
                        changeTurn(true);
                    }
                    break;
            case "seven":
                    if(game.state[6] == true){
                        drawFigure(game.canvasID[6]);
                        game.changeStates(6);
                        changeTurn(true);
                    }
                    break;
            case "eight":
                    if(game.state[7] == true){
                        drawFigure(game.canvasID[7]);
                        game.changeStates(7);
                        changeTurn(true);
                    }
                    break;
            case "nine":
                    if(game.state[8] == true){
                        drawFigure(game.canvasID[8]);
                        game.changeStates(8);
                        changeTurn(true);
                    }
                    break;

            } //switch
            //game.turn = true;
        } //else
    } //block
}