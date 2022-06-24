status = "";

function preload() {
    loadImage('bedroom.jpeg');
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    document.getElementById('status').innerHTML = "Detecting Objects..."
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
}

function modelLoaded() {
    status = "true";
    console.log("Model Loaded")
}

function gotResults(error, results) {
    if (error) {
        console.log(error);
    }

    console.log(results);
}