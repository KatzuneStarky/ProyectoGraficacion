let data;

function preload(){
  const url = "https://api.apify.com/v2/key-value-stores/vpfkeiYLXPIDIea2T/records/LATEST";
  data = loadJSON(url);
}

function setup() {
	createCanvas(screen.width, 500);
  noLoop();
}

function draw() {
  background("#F11D1A");
}