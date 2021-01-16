var canvas;
var player, playerImage;
var computer, computerImage;
var playerMeter, computerMeter;
var computerLife = 100, playerLife = 100;
var player1, player2, player3, player4, player5, player6, player7, player8, player9, player10, player11, player12, player13, player14, player15, player16, player17, player18, player19, player20, player21, player22, player23, player24, player25, player26, player27, player28;
var form;
var playerName
var background;
var gameState = 0;
function preload() {
  playerImage = loadImage("images/player.png");
  computerImage = loadImage("images/computer.png");
  backgroundImage = loadImage("images/background.png")
  player1 = loadImage("player and computer/1.1.png")
  player4 = loadImage("player and computer/1.4.png")
}

function setup() {
  canvas = createCanvas(displayWidth - 20, displayHeight - 100);

  edges = createEdgeSprites()


  form = new Form();
  form.display();

  background = createSprite(displayWidth / 2, displayHeight / 3);
  background.scale = 2.5
  background.addImage("background", backgroundImage)
  player = createSprite(displayWidth / 5, displayHeight / 2);
  player.addImage("player", player1)

  player.addImage("player4", player4)
  player.scale = 3
  computer = createSprite(displayWidth / 1.5, displayHeight / 2)
  computer.addImage("computer", computerImage)


  playerMeter = createSprite(150, 150, 200, 20)
  playerMeter.shapeColor = "blue"
  computerMeter = createSprite(displayWidth - 200, 150, 200, 20)
  computerMeter.shapeColor = "green"
  computer.debug = true;
  computer.setCollider("circle", 0, 0, 100);
 player.debug = true;

}


function draw() {

  player.collide(edges)

  if (gameState === 1) {
    if (keyDown(RIGHT_ARROW)) {
      player.x = player.x + 10;
    }
    if (keyDown(LEFT_ARROW)) {
      player.x = player.x - 10;
    }

    if (keyDown(UP_ARROW)) {
      computer.x = computer.x + 10;
    }
    if (keyDown(DOWN_ARROW)) {
      computer.x = computer.x - 10;
    }
    if(keyDown("x")){
      player.changeAnimation("player4",player4)
    

    if (player.isTouching(computer)&&computerLife>0) {
      computerLife = computerLife - 25
      player.x = displayWidth / 5
      
    }
    
  if (cpmputer.isTouching(player)&&playerLife>0) {
      playerLife = playerLife - 25
      computer.x = displayWidth / 5
      
    }
    player.changeAnimation("player",player1)
  }
  if (computer.isTouching(player)&&playerLife>0) {
    playerLife = playerLife - 25
    computer.x = displayWidth / 1.5
    
  }
  


    drawSprites();
    fill("green")

    text(playerName, 75, 135)
    text("computername", displayWidth - 250, 135)

    fill("white")
    text("remaining life " + playerLife + "%", 75, 155)
    text("remaining life " + computerLife + "%", displayWidth - 250, 155)
  }




}
