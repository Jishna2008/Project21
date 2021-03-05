var canvas;
var music;
var surface1,surface2,surface3,surface4
var box
var edges
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
surface1=createSprite(100,580,180,20);
surface1.shapeColor="pink";

surface2=createSprite(300,580,180,20);
surface2.shapeColor="blue";

surface3=createSprite(500,580,180,20);
surface3.shapeColor="orange";

surface4=createSprite(700,580,180,20);
surface4.shapeColor="green";
    //create box sprite and give velocity

box=createSprite(Math.round(random(10,750)),300,20,20)
box.shapeColor="white";
box.velocityX=5;
box.velocityY=5;



}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges =createEdgeSprites();
    box.bounceOff(edges)


    //add condition to check if box touching surface and make it box
    if(surface1.isTouching(box)&&box.bounceOff(surface1))
    {
        box.shapeColor="pink"
        
    }

    if(surface2.isTouching(box)&&box.bounceOff(surface2))
    {
        box.shapeColor="blue"
       music.play();
    }
    if(surface3.isTouching(box)&&box.bounceOff(surface3))
    {
        box.shapeColor="orange"
 
    }
    if(surface4.isTouching(box)&&box.bounceOff(surface4))
    {
        box.shapeColor="green"
        music.stop();
        box.velocityX = 0;
        box.velocityY=0;
    }
drawSprites();
}
