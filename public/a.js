import EnemyController from "./EnemyController.js";
import Player from "./Player.js";
import BulletController from "./BulletController.js";
 
 
  console.log("s")
  const canvas = document.getElementById("game");
  const ctx = canvas.getContext("2d");
  let var1=window.innerHeight
  let var2=window.innerWidth

   window.onresize=()=>{ 
  
 
   canvas.width =  window.innerWidth;
   canvas.height = window.innerHeight;
   }
   canvas.width =  window.innerWidth;
   canvas.height = window.innerHeight;
   const background0 = new Image();
  
   background0.src = "images/background.png";

  const background = new Image();
  
  background.src = "images/space.jpg";
 
  const playerBulletController = new BulletController(canvas, 10, "red", true);
  const enemyBulletController = new BulletController(canvas, 4, "white", false);
  const enemyController = new EnemyController(
    canvas,
    enemyBulletController,
    playerBulletController
  );
  const player = new Player(canvas, 3, playerBulletController);
  
  let isGameOver = false;
  let didWin = false;
  console.log(canvas)
  function game() {  

    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

    checkGameOver();
    displayGameOver();
    if (!isGameOver) {
    
      enemyController.draw(ctx);
      player.draw(ctx);
      playerBulletController.draw(ctx);
      enemyBulletController.draw(ctx);
    }
  }
  
  function displayGameOver() {
    if (isGameOver) {
      let text = didWin ? "You Win" : "Game Over";
      let textOffset = didWin ? 3.5 : 5;
  
      ctx.fillStyle = "white";
      ctx.font = "70px Arial";
      ctx.fillText(text, canvas.width / textOffset, canvas.height / 2);
    }
  }
  
  function checkGameOver() {
    if (isGameOver) {
      return;
    }
  
    if (enemyBulletController.collideWith(player)) {
      isGameOver = true;
    }
  
    if (enemyController.collideWith(player)) {
      isGameOver = true;
    }
  
    if (enemyController.enemyRows.length === 0) {
      didWin = true;
      isGameOver = true;
    }
  } 

background0.onload=()=>{
  ctx.drawImage(background0, 0, 0, canvas.width, canvas.height);

}
 

 background.onload=function(){

  setTimeout(() => {

      setInterval(game, 1000 / 60);

  },5000);

 }
  
 
   


 
 
