var tom,tomImg1,tomImg2,tomImg3;
var jerry,jerryImg1,jerryImg2,jerryImg3;
var garden,gardenImg;

function preload() {
   
    tomImg1 = loadImage("images/cat1.png");
    tomImg2 = loadImage("images/cat2.png","cat3.png");
    tomImg3 = loadImage("images/cat4.png");
    
    jerryImg = loadImage("images/mouse1.png");
    jerryImg2 = loadImage("images/mouse2.png","mouse3.png");
    jerryImg3 = loadImage("images/mouse4.png");
   
    gardenImg = loadImage("images/garden.png");

}

function setup(){
    
    createCanvas(1000,800);

    garden = createSprite(350,200,900,600);
    garden.addImage(gardenImg);
    
    tom = createSprite(700,400,20,20);
    tom.addImage(tomImg1);

    jerry = createSprite(350,400,20,20);
    jerry.addImage(jerryImg1);

}

function draw() {

    background(255);
    
    if(tom.x - jerry.x < tom.width/2 + jerry.width/2 ){
          tom.velocityX = 0;
          tom.changeAnimation(tomImg3);
          jerry.changeAnimation(jerryImg3);
    }

    drawSprites();
}


function keyPressed(){

    if(keyCode === LEFT_ARROW){
        tom.changeAnimation(tomImg2);
        tom.velocityX = -4;
        jerry.changeAnimation(jerryImg2);
    }

    


}
