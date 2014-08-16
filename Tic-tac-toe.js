var game;

function Game(name1, name2){
    this.name1 = name1;
    this.name2 = name2;
    this.turn = true;
    this.state = [true, true, true, true, true, true, true, true, true];
    this.cross = [false, false, false, false, false, false, false, false, false];
    this.zero = [false, false, false, false, false, false, false, false, false];
    this.crossCount = 0;
    this.zeroCount = 0;
    this.block = false;
    this.canvasID = ["can1", "can2", "can3", "can4", "can5", "can6", "can7", "can8", "can9"];

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
    }
    
};

Game.prototype.checkWinner = function(){
    var sender = [];
    if(game.turn == true){
        if(game.cross[0] == true && game.cross[4] == true && game.cross[8] == true){
            sender = [game.canvasID[0], game.canvasID[4], game.canvasID[8]];
            drawRed(sender);
            game.block = true;
        }
        else if(game.cross[2] == true && game.cross[4] == true && game.cross[6] == true){
            sender = [game.canvasID[2], game.canvasID[4], game.canvasID[6]];
            drawRed(sender);
            game.block = true;
        }
        else if(game.cross[0] == true && game.cross[1] == true && game.cross[2] == true){
            sender = [game.canvasID[0], game.canvasID[1], game.canvasID[2]];
            drawRed(sender);
            game.block = true;
        }
        else if(game.cross[3] == true && game.cross[4] == true && game.cross[5] == true){
            sender = [game.canvasID[3], game.canvasID[4], game.canvasID[5]];
            drawRed(sender);
            game.block = true;
        }
        else if(game.cross[6] == true && game.cross[7] == true && game.cross[8] == true){
            sender = [game.canvasID[6], game.canvasID[7], game.canvasID[8]];
            drawRed(sender);
            game.block = true;
        }
        else if(game.cross[0] == true && game.cross[3] == true && game.cross[6] == true){
            sender = [game.canvasID[0], game.canvasID[3], game.canvasID[6]];
            drawRed(sender);
            game.block = true;
        }
        else if(game.cross[1] == true && game.cross[4] == true && game.cross[7] == true){
            sender = [game.canvasID[1], game.canvasID[4], game.canvasID[7]];
            drawRed(sender);
            game.block = true;
        }
        else if(game.cross[2] == true && game.cross[5] == true && game.cross[8] == true){
            sender = [game.canvasID[2], game.canvasID[5], game.canvasID[8]];
            drawRed(sender);
            game.block = true;
        }
    }
    else{
        if(game.zero[0] == true && game.zero[4] == true && game.zero[8] == true){
            sender = [game.canvasID[0], game.canvasID[4], game.canvasID[8]];
            drawRed(sender);
            game.block = true;
        }
        else if(game.zero[2] == true && game.zero[4] == true && game.zero[6] == true){
            sender = [game.canvasID[2], game.canvasID[4], game.canvasID[6]];
            drawRed(sender);
            game.block = true;
        }
        else if(game.zero[0] == true && game.zero[1] == true && game.zero[2] == true){
            sender = [game.canvasID[0], game.canvasID[1], game.canvasID[2]];
            drawRed(sender);
            game.block = true;
        }
        else if(game.zero[3] == true && game.zero[4] == true && game.zero[5] == true){
            sender = [game.canvasID[3], game.canvasID[4], game.canvasID[5]];
            drawRed(sender);
            game.block = true;
        }
        else if(game.zero[6] == true && game.zero[7] == true && game.zero[8] == true){
            sender = [game.canvasID[6], game.canvasID[7], game.canvasID[8]];
            drawRed(sender);
            game.block = true;
        }
        else if(game.zero[0] == true && game.zero[3] == true && game.zero[6] == true){
            sender = [game.canvasID[0], game.canvasID[3], game.canvasID[6]];
            drawRed(sender);
            game.block = true;
        }
        else if(game.zero[1] == true && game.zero[4] == true && game.zero[7] == true){
            sender = [game.canvasID[1], game.canvasID[4], game.canvasID[7]];
            drawRed(sender);
            game.block = true;
        }
        else if(game.zero[2] == true && game.zero[5] == true && game.zero[8] == true){
            sender = [game.canvasID[2], game.canvasID[5], game.canvasID[8]];
            drawRed(sender);
            game.block = true;
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
        ctx.stroke();
    }
    else{
        var c = document.getElementById(canID);
        var ctx = c.getContext("2d");
        ctx.beginPath();
        ctx.arc(95,95,90,0,2*Math.PI);
        ctx.lineWidth = 7;
        ctx.stroke();
    }
}

function drawRed(canIDs){
    
    var c0 = document.getElementById(canIDs[0]);
    var c1 = document.getElementById(canIDs[1]); 
    var c2 = document.getElementById(canIDs[2]);
    //
    if(game.turn == true){
        var ctx = c0.getContext("2d");
        ctx.moveTo(10, 10);
        ctx.lineTo(180, 180);
        ctx.stroke();
        ctx.moveTo(180, 10);
        ctx.lineTo(10, 180);
        ctx.lineWidth = 8;
        ctx.strokeStyle = '#ff0000';
        ctx.stroke();
        //
        ctx = c1.getContext("2d");
        ctx.moveTo(10, 10);
        ctx.lineTo(180, 180);
        ctx.stroke();
        ctx.moveTo(180, 10);
        ctx.lineTo(10, 180);
        ctx.lineWidth = 8;
        ctx.strokeStyle = '#ff0000';
        ctx.stroke();
        //
        ctx = c2.getContext("2d");
        ctx.moveTo(10, 10);
        ctx.lineTo(180, 180);
        ctx.stroke();
        ctx.moveTo(180, 10);
        ctx.lineTo(10, 180);
        ctx.lineWidth = 8;
        ctx.strokeStyle = '#ff0000';
        ctx.stroke();
    }
    else{
        var ctx = c0.getContext("2d");
        ctx.beginPath();
        ctx.arc(95,95,90,0,2*Math.PI);
        ctx.lineWidth = 7;
        ctx.strokeStyle = '#ff0000';
        ctx.stroke();
        //
        ctx = c1.getContext("2d");
        ctx.beginPath();
        ctx.arc(95,95,90,0,2*Math.PI);
        ctx.lineWidth = 7;
        ctx.strokeStyle = '#ff0000';
        ctx.stroke();
        //
        ctx = c2.getContext("2d");
        ctx.beginPath();
        ctx.arc(95,95,90,0,2*Math.PI);
        ctx.lineWidth = 7;
        ctx.strokeStyle = '#ff0000';
        ctx.stroke();
    
    }
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
                    }
                    break;
            case "two":
                    if(game.state[1] == true){
                        drawFigure(game.canvasID[1]);
                        game.changeStates(1);
                    }
                    break;
            case "three":
                    if(game.state[2] == true){
                        drawFigure(game.canvasID[2]);
                        game.changeStates(2);
                    }
                    break;
            case "four":
                    if(game.state[3] == true){
                        drawFigure(game.canvasID[3]);
                        game.changeStates(3);                    
                    }
                    break;
            case "five":
                    if(game.state[4] == true){
                        drawFigure(game.canvasID[4]);
                        game.changeStates(4);
                    }
                    break;
            case "six":
                    if(game.state[5] == true){
                        drawFigure(game.canvasID[5]);
                        game.changeStates(5);
                    }
                    break;
            case "seven":
                    if(game.state[6] == true){
                        drawFigure(game.canvasID[6]);
                        game.changeStates(6);
                    }
                    break;
            case "eight":
                    if(game.state[7] == true){
                        drawFigure(game.canvasID[7]);
                        game.changeStates(7);
                    }
                    break;
            case "nine":
                    if(game.state[8] == true){
                        drawFigure(game.canvasID[8]);
                        game.changeStates(8);
                    }
                    break;

            } //switch
            game.turn = false;
        } //if
        else{   //game.turn == false
            switch (cell){
            case "one":
                    if(game.state[0] == true){
                        drawFigure(game.canvasID[0]);
                        game.changeStates(0);
                    }
                    break;
            case "two":
                    if(game.state[1] == true){
                        drawFigure(game.canvasID[1]);
                        game.changeStates(1);
                    }
                    break;
            case "three":
                    if(game.state[2] == true){
                        drawFigure(game.canvasID[2]);
                        game.changeStates(2);
                    }
                    break;
            case "four":
                    if(game.state[3] == true){
                        drawFigure(game.canvasID[3]);
                        game.changeStates(3);                    
                    }
                    break;
            case "five":
                    if(game.state[4] == true){
                        drawFigure(game.canvasID[4]);
                        game.changeStates(4);
                    }
                    break;
            case "six":
                    if(game.state[5] == true){
                        drawFigure(game.canvasID[5]);
                        game.changeStates(5);
                    }
                    break;
            case "seven":
                    if(game.state[6] == true){
                        drawFigure(game.canvasID[6]);
                        game.changeStates(6);
                    }
                    break;
            case "eight":
                    if(game.state[7] == true){
                        drawFigure(game.canvasID[7]);
                        game.changeStates(7);
                    }
                    break;
            case "nine":
                    if(game.state[8] == true){
                        drawFigure(game.canvasID[8]);
                        game.changeStates(8);
                    }
                    break;

            } //switch
            game.turn = true;
        } //else
    } //block
}