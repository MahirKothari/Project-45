var player, playerImg;
var backgroundImg, bg;
var bg2;
var b1, b2, b3, b4, b5, b6, b7;
var b1Img, b2Img, b3Img, b4Img,b5Img, b6Img, b7Img;
var keyImg;
var gameState="welcome";


function preload() {
  backgroundImg = loadImage("background.png");
  bg2 = loadImage("background2.png")
  playerImg = loadAnimation("1.png", "2.png ", "3.png" , "4.png" , "5.png", "6.png");
  b1Img = loadImage("bear.png");
  b2Img = loadImage("bear2.png");
  b3Img = loadImage("bear3.png");
  b4Img = loadImage("bear4.png");
  b5Img = loadImage("bear5.png");
  b6Img = loadImage("bear6.png");
  b7Img = loadImage("bear7.png");
  keyImg = loadImage("key.png")

}
function setup() {
  createCanvas(1000,500);
  bg = createSprite (500,250,20,30);
  bg.addAnimation('bg1', backgroundImg);
  bg.addAnimation('bg2', bg2);
  bg.scale = 0.5;
  player = createSprite(500, 430, 50, 20);
  player.addAnimation('player', playerImg);
  b1 = createSprite(450,197,30,20);
  b1.addImage(b1Img);
  b1.scale = 0.10;
  b2 = createSprite(142,472,30,20);
  b2.addImage(b2Img);
  b2.scale = 0.10;
  b3 = createSprite(550,285,30,20);
  b3.addImage(b3Img);
  b3.scale = 0.15;
  b4 = createSprite(842,470,30,20);
  b4.addAnimation('bear4',b4Img);
  b4.addAnimation('key', keyImg)
  b4.scale = 0.15;
  b5 = createSprite(412,333,30,20);
  b5.addImage(b5Img);
  b5.scale = 0.20;
  b6 = createSprite(677,410,30,20);
  b6.addImage(b6Img);
  b6.scale = 0.1;
  b7 = createSprite(500,250,30,20);
  b7.addImage(b7Img);
  b7.scale = 0.05;
}

function draw() {
  background(0, 0, 0);  

if (mousePressedOver(bg)) {
  bg.changeAnimation('bg2', bg2);
  bg.scale = 3;
  gameState = "level1"
}
if (mousePressedOver(b4)) {
  b4.changeAnimation('key',keyImg)
}
  drawSprites();
  //fill(0);
  //text(mouseX+":"+mouseY, 900,100);
}