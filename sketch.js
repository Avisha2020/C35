var hypnoticBall, database;
var position;
var gameState=0;
var playerCount=0;
var game;
var player, form;


function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);
   game=new Game();
   game.getState();
   game.start(); 
  
 
}

function draw(){
  background("white");
  
   
    
  
}


