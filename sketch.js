var fireworks = [];
var gravity;
var whistle;
var boom;
function preload() {
    whistle = loadSound("whistle.mp3");
    boom = loadSound("boom.mp3");
}

function setup() {
    createCanvas(600, 400);
    colorMode(HSB);
    gravity = createVector(0, 0.2);
    fill(255);
    strokeWeight(4);
    background(0);
}

function draw() {
    colorMode(RGB);
    background(0, 0, 0, 25);
    if (random(1) < 0.05) {
        fireworks.push(new Firework);
        whistle.play();
        boom.play();
        console.log("boom");
    }
    for (var i = fireworks.length - 1; i >= 0; i--) {
        fireworks[i].update();
        fireworks[i].show();
        if (fireworks[i].done()) {
            fireworks.splice(i, 1);
        }
    }
    //console.log(fireworks.length);
}
