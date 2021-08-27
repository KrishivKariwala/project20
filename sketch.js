var cat, mouse, bg;
var catImg1, mouseImg1;
var catImg2, mouseImg2;
var catImg3, mouseImg3;

function preload() {
    //load the images here
    bg = loadImage("images/garden.png");
    catImg1 = loadImage("images/cat1.png");
    mouseImg1 = loadImage("images/mouse1.png");
    catImg2 = loadAnimation("images/cat2.png","images/cat3.png");
    mouseImg2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    catImg3 = loadImage("images/cat4.png");
    mouseImg3 = loadImage("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(870,600);
    cat.addImage(catImg1)
    cat.scale = 0.2;
    mouse = createSprite(200,600);
    mouse.addImage(mouseImg1);
    mouse.scale = 0.1;
}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.width/2 - mouse.width/2)){
        cat.velocityX = 0;
        cat.addAnimation("happyCat", catImg3);
        cat.x = 300;
        cat.scale = 0.2;
        cat.changeAnimation("happyCat")

        mouse.addAnimation("happyMouse", mouseImg3);
        mouse.scale = 0.1;
        mouse.changeAnimation("happyMouse"); 
    }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
    if(keyCode === LEFT_ARROW){
        mouse.addAnimation("mouseTeasing", mouseImg2)
        mouse.changeAnimation("mouseTeasing", mouseImg2)
        mouse.frameDelay = 25;

        cat.addAnimation("catMovingTowardsMouse", catImg2)
        cat.changeAnimation("catMovingTowardsMouse", catImg2)
        cat.velocityX = -5
    }

}
