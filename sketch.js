var database ,dog,dog1,dog2
var position
//var form
var feed,add
var foodobject
var Feedtime
var Lastfeed
var gameState=0;
//Create variables here

function preload()

{
  dogimg1 = loadImage("images/Dog.png");
  dogimg2 = loadImage("images/Happy.png");
washroom=loadImage("images/WashRoom.png");
eating=loadImage("images/Living Room.png");
player=loadImage("images/Garden.png");
sleepDog=loadImage("images/BedRoom.png");
covid=loadImage("images/runningLeft.png");
noooo=loadImage("images/running.png");
lazyDog=loadImage("images/Lazy.png")
vaccine=loadImage("images/dogVaccination.png")

	//load images here
}

function setup() {
	createCanvas(1000, 500);
  database = firebase.database();
  console.log(database);
 
  foodobject=new Food()
  dog = createSprite(550,250,10,10);
  dog.addImage(dogimg1)
  dog.scale=0.2
 
  var dogo = database.ref('Food');
  dogo.on("value", readPosition, showError);
  feed = createButton("FEED DRAGO")
  
  feed.position(500,15)
  feed.mousePressed(FeedDog)
  add = createButton("ADD FOOD")
  add.position(400,15)
  add.mousePressed(AddFood)

} 

function draw(){
 background("yellow");


 foodobject.display()

 drawSprites();
  
 fill("red");
 textSize(20);
 text ("hi my name is drago !!!take care of me",50,80)
drawSprites();

if(gameState===1){
dog.addImage(dogimg2)
dog.scale=0.175
}
if(gameState===2){
  dog.addImage(dogimg1)
  dog.scale=0.175
  }
  var bath=createButton("i want to have bath")
  bath.position(620,105)
  if(bath.mousePressed(function(){
gameState=3
database.ref('/').update({'gameState':gameState});
}))
  if(gameState===3){
    dog.addImage(washroom)
    dog.scale=0.98
   dog.y=180;
    }

    var play=createButton("i want to play")
    play.position(520,105)
    if(play.mousePressed(function(){
  gameState=4
  database.ref('/').update({'gameState':gameState});
  }))
    if(gameState===4){
      dog.addImage(eating)
      dog.scale=0.98
     dog.y=180;
      }

      var sleep=createButton("i want a nap")
     sleep.position(400,105)
      if(sleep.mousePressed(function(){
    gameState=5
    database.ref('/').update({'gameState':gameState});
    }))
      if(gameState===5){
        dog.addImage(sleepDog)
        dog.scale=0.98
       dog.y=180;
        }

        var fun=createButton("lets have fun!")
        fun.position(300,105)
        if(fun.mousePressed(function(){
      gameState=6
      database.ref('/').update({'gameState':gameState});
      }))
        if(gameState===6){
          dog.addImage(player)
          dog.scale=0.98
         dog.y=180;
          }

          var vet=createButton("walk in the left")
          vet.position(180,425)
          if(vet.mousePressed(function(){
        gameState=7
        database.ref('/').update({'gameState':gameState});
        }))
          if(gameState===7){
            dog.addImage(covid)
            dog.scale=0.189
           dog.y=280;
            }

            var vvet=createButton("walk in the right")
            vvet.position(60,425)
            if(vvet.mousePressed(function(){
          gameState=8
          database.ref('/').update({'gameState':gameState});
          }))
            if(gameState===8){
              dog.addImage(noooo)
              dog.scale=0.189
             dog.y=280;
              }

              var avvet=createButton("i am feeling lazy")
              avvet.position(290,425)
              if(avvet.mousePressed(function(){
            gameState=9
            database.ref('/').update({'gameState':gameState});
            }))
              if(gameState===9){
                dog.addImage(lazyDog)
                dog.scale=0.189
               dog.y=280;
                }
  
                var tavvet=createButton("my vaccination schedule")
                tavvet.position(420,425)
                if(tavvet.mousePressed(function(){
              gameState=10
              database.ref('/').update({'gameState':gameState});
              }))
                if(gameState===10){
                  dog.addImage(vaccine)
                  dog.scale=0.4
                  
                 dog.y=280;
                  }



}
function readPosition(data){
  position = data.val();
  foodobject.updateFoodStock(position)
}

function showError(){
  console.log("Error in writing to the database");
}

function writePosition(nazo){
  if(nazo>0){
    nazo=nazo-1
  }
  else{
    nazo=0
  }
  database.ref('/').set({
    'Food': nazo
  })

}
function AddFood(){
position++
database.ref('/').update({
  Food:position
}

)
}
function FeedDog(){

dog.addImage(dogimg2)
foodobject.updateFoodStock(foodobject.getFoodStock()-1)
 database.ref('/').update({
   Food:foodobject.getFoodStock(),
   FeedTime:hour ()
 })
}












