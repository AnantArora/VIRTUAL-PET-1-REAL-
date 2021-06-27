//Create variables here
var food

function preload(){
	//load images here
  dogHappy=loadImage("images/dogImg.png")
  dogSad=loadImage("images/dogImg1.png")
  dogEating=loadImage("images/eating.png")
  bg = loadImage("images/PHOTO.jpg");
}

function setup() {
	createCanvas(800, 700);
  
  database= firebase.database()


  database.ref('food').on("value",readPosition)


  dog=createSprite(400,400,50,50)
  dog.addImage(dogHappy)
  dog.scale=1
}


function draw() {  
background(bg)
  drawSprites();
  //add styles here
  textSize(30)
 textFont("Broadway");
   fill("yellow");
   stroke("red");
   strokeWeight(5);
   text("FOOD REMAINING:  "+food,240,650)
   text("Press Up Arrow Key To Feed the DOG",100,50)

   if(food===0){
    dog.addImage(dogSad)
    dog.scale=1
   }

   if(keyWentDown(UP_ARROW) && food !==0){
      food--
      writeStock(food)
      dog.addImage(dogEating)
      dog.scale=0.8
   }

   
 
   
}

function readPosition(data){

  food=data.val()
}

function writeStock(data){
    database.ref('/').set({
      food:data
    })

}

