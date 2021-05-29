const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint
var engine,world
var playerImage
var gameState = "start";
var name
var playerImg;
var botImg,backgroundImg;



function preload(){
  
  playerImg = loadImage("main_player_gun.png");
  botImg = loadImage("bot.png");
  backgroundImg = loadImage("background.jpg");


}



function setup() {
  engine = Engine.create();
world = engine.world;
  createCanvas(800,600);
  if(gameState === "start"){
   bg = createSprite(400,300,800,600)
   bg.addImage(backgroundImg)
   bg.scale = 3.8
   input = createInput("ENTER NAME")
   input.position(250,150)
   button = createButton("Start")
   button.position(300,250)
   

  
  }
  button.mousePressed(()=>{
    gameState = "begin" 
    
    input.hide()
    button.hide()
    
  })
 if(gameState === "begin"){

 bg.destroy()
  block1 = createSprite(310,5,90,35);
  block2 = createSprite(135, 70,150,35);
  block3 = createSprite(135, 70,150,35);
  block4 = createSprite(340,79,80,50);
  block5 = createSprite (149,132,30,100);
  block6 = createSprite(34,94,50,40);
  block7 = createSprite(205,172,80,30);
  block8 = createSprite(70,163,50,35);
  block9 = createSprite (320,161,25,90);
  block10 = createSprite(350,170,90,20);
  block11 = createSprite(78,210,30,100);
  block12 = createSprite(200,248,150,35);
   block13 =createSprite(358,250,100,30);
   block14 = createSprite (361,348,50,100);
   block15 = createSprite(109,320,35,110);
   block16 = createSprite (186,324,110,20);
   block17 = createSprite(254,324,35,110);
   block18 = createSprite (10,245,15,110);
   block19 = createSprite(27,327,60,20);
   block20 = createSprite (48,393,60,20);

   player = createSprite(200,400,20,20);
   player.addImage(playerImg);
   player.scale = 0.2;
 }

}

function draw() {
  background(255,255,255);  
  Engine.update(engine);

  
  
  drawSprites();
  if(gameState === "start" ){
    textSize(25)
    fill ("black")
    text(" SHOOTING GAME",150,20)
  }

  if(keyDown("up")){
player.y = player.y - 1;
  }


}