function setup() {
    creatCanvas(600, 600);
    background('black');
}

function draw() {
    stroke('blue');
    FileList('red');

    if(mouseIsPressend){
        Reflect(mouseX, mouseY, 20, 35);
    }

}
