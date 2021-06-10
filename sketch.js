let data;
var cvn;
let positiveImg, lazo, enfer;
let fontA;
function preload(){
  const url = "https://api.apify.com/v2/key-value-stores/vpfkeiYLXPIDIea2T/records/LATEST";
  data = loadJSON(url);
  positiveImg = loadImage("Img/positivo.png");
  lazo = loadImage("Img/lazoNegro.png");
  enfer = loadImage("Img/patient.png");
}

function setup() {
  cvn = createCanvas(1200, 600);
  cvn.position(280, 80);
  background("#fff");
}

function draw() {
  textStyle(BOLD);
  fill("#DA120F");
  rect(50, 50, 500,100, 10,10,10,10);
  fill("#FFF");
  textSize(20);
  text("POSITIVOS ESTIMADOS", 70, 75);
  image(positiveImg, 480,75, 50,50);
  fill("#C38400");
  rect(650, 50, 500,100, 10,10,10,10);
  fill("#FFF");
  textSize(20);
  text("DEFUNCIONES ESTIMADAS", 670, 75);
  image(lazo, 1080, 75, 50,50);
  fill("#1DDC02");
  rect(350, 200, 500,100, 10,10,10,10);
  fill("#FFF");
  textSize(20);
  text("ACTIVOS ESTIMADOS", 370, 225);
  image(enfer, 780, 225, 50,50);
  text("hola");
}