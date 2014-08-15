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
    document.getElementById("player1").innerHTML = textAdd;
    textAdd = "Name: " + game.name2;
    document.getElementById("player2").innerHTML = textAdd;
}




function checkOrder() {
    alert('hello');
    //var c = document.getElementById("canOne");
    var c = document.getElementsByTagName("canvas");
    var ctx = c.getContext("2d");
    ctx.moveTo(10, 10);
    ctx.lineTo(180, 180);
    ctx.stroke();
    ctx.moveTo(180, 10);
    ctx.lineTo(10, 180);
    ctx.stroke();
    
    
}