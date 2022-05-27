x = 0;
y = 0;

draw_apple = "";

screen_width  = 0;
 screen_height = 0;

 to_number =0;
 var i = 1;

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 

}
function preload() {
  apples = loadImage('apple.png');
}

function setup() {
 canvas = createCanvas(900,600);
 screen_width = window.innerWidth;
 screen_height = window.innerHeight;
  x= Math.floor(Math.random()*900);
  y = Math.floor(Math.random()*600);
}

function draw() {
  if(draw_apple == "set")
  {
    for(var i =1;i<= to_number; i++){
      x= Math.floor(Math.random()*900);
      y = Math.floor(Math.random()*600);
      image(apples,x,y,50,50);
    }
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    draw_apple = "";
    speak();
  }
}

function speak(){
    var synth = window.speechSynthesis;

    speak_data =  to_number + " Apples drawn";

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);
}
recognition.onresult = function(event){
  console.log(event);
  var content = event.results[0][0].transcript;
  document.getElementById('status').innerHTML = "The Speech Has Been Recognized As : " + content;
  to_number = Number(content);
  if(Number.isInteger(to_number)) {
    x= Math.floor(Math.random()*900);
    y = Math.floor(Math.random()*600);
    document.getElementById('status').innerHTML = "Started Drawing Apple";
    draw_apple = "set";
  }
  else{
    document.getElementById('status').innerHTML = "The speech has not recognized a number";
  }
  }