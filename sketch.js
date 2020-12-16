const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2;
var ground1;
var log1,log2;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    box1 = new Box(200,300,50,50);
    box2 = new Box(180,100,50,50);
    ground1 = new Ground(200,380,400,20);
    log1 = new Log(200,350,200,20);
    log2 = new Log(85,350,20,200);
    log3 = new Log(305,350,20,200);
}

function draw(){
    background(0);
    Engine.update(engine);

    box1.display();
    box2.display();
    ground1.display();
    log1.display();
    log2.display();
    log3.display();
}