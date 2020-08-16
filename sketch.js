var database;
var playerCount;
var gamestate = 0;
var form,game,player ;



function setup(){
  database = firebase.database();
  
  createCanvas(400,400);
form = new Form();

 
}

function draw(){
 form.display();
}