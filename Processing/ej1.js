
  var programCode = function(processingInstance) {
    with (processingInstance) {
      size(400, 400);
      frameRate(30);
var xPos = 380;
var yPos = 120;

var xPos2 = 30;
var yPos2 = 0;

var xPosM = 350;
var yPosM = 100;
var sizeM = 40;

var xBuild = 0;
var yBuild = 250;

var xWindow = 0;
var yWindow = 0;


draw = function () {
  noStroke();
  background(29, 40, 115);

  //edificios de fondo
  fill(0, 0, 0);
  rect(xBuild + 80, yBuild - 50, 80, 200, 0);
  rect(xBuild + 330, yBuild + 10, 80, 140, 0);
  rect(xBuild + 250, yBuild - 70, 80, 250, 100);
  rect(xBuild - 80, yBuild + 30, 110, 200, 0);
  rect(xBuild - 150, yBuild + 100, 110, 100, 0);
  fill(15, 12, 15);
  rect(xBuild + 150, yBuild + 30, 110, 200, 0);
  rect(xBuild, yBuild, 90, 150, 0);


  //windows
  //ap#1
  fill(212, 212, 212);
  rect(xBuild + 90, yBuild - 40, 20, 20, 8);
  rect(xBuild + 130, yBuild - 40, 20, 20, 8);
  rect(xBuild + 90, yBuild - 10, 20, 20, 8);
  rect(xBuild + 130, yBuild - 10, 20, 20, 8);
  rect(xBuild + 90, yBuild + 20, 20, 20, 8);
  rect(xBuild + 130, yBuild + 20, 20, 20, 8);
  rect(xBuild + 90, yBuild + 50, 20, 20, 8);
  rect(xBuild + 130, yBuild + 50, 20, 20, 8);
  rect(xBuild + 90, yBuild + 80, 20, 20, 8);
  rect(xBuild + 130, yBuild + 80, 20, 20, 8);
  fill(237, 156, 237);
  rect(xBuild + 100, yBuild + 120, 40, 30, 0);

  //ap#2
  fill(212, 212, 212);
  ellipse(xBuild + 290, yBuild - 20, 60, 50);
  rect(xBuild + 260, yBuild + 30, 130, 20);
  rect(xBuild + 260, yBuild + 60, 130, 20);
  rect(xBuild + 260, yBuild + 90, 130, 20);
  fill(212, 163, 212);
  rect(xBuild + 260, yBuild + 120, 130, 30);

  //edificios frente
  fill(15, 12, 15);
  rect(xBuild + 150, yBuild + 30, 110, 200, 0);
  rect(xBuild, yBuild, 90, 150, 0);
  triangle(xBuild +280, 290, xBuild +130, 290, xBuild +200, 230);
  //windows
  //ap#1
  fill(255, 255, 255);
  rect(xBuild + 10, yBuild + 10, 30, 30, 8);
  rect(xBuild + 50, yBuild + 10, 30, 30, 8);
  rect(xBuild + 10, yBuild + 50, 30, 30, 8);
  rect(xBuild + 50, yBuild + 50, 30, 30, 8);
  rect(xBuild + 10, yBuild + 100, 70, 10, 0);
  fill(232, 178, 232);
  rect(xBuild + 20, yBuild + 110, 50, 40, 0);

  //ap#2
  fill(255, 255, 255);
  rect(xBuild + 155, yBuild + 35, 25, 30);
  rect(xBuild + 192, yBuild + 35, 25, 30);
  rect(xBuild + 230, yBuild + 35, 25, 30);
  rect(xBuild + 155, yBuild + 75, 25, 30);
  rect(xBuild + 192, yBuild + 75, 25, 30);
  rect(xBuild + 230, yBuild + 75, 25, 30);
  rect(xBuild + 155, yBuild + 115, 25, 30);
  rect(xBuild + 192, yBuild + 115, 25, 30);
  rect(xBuild + 230, yBuild + 115, 25, 30);

  //star#1
  fill(252, 239, 141);
  ellipse(xPos, yPos, 10, 10);
  fill(255, 242, 0);
  ellipse(xPos, yPos, 5, 5);
  xPos -= 2;
  yPos -= 0.1;

  //star#2
  fill(231, 240, 147);
  ellipse(xPos2, yPos2, 15, 15);
  fill(245, 245, 245);
  ellipse(xPos2, yPos2, 10, 10);
  xPos2 += 2;
  yPos2 += 0.5;

  //moon
  ellipse(xPosM, yPosM, sizeM, sizeM);
  xPosM -= 0.6;
  sizeM += 0.3;
  xBuild+=0.3;
};
    }};

  // Get the canvas that ProcessingJS will use
  var canvas = document.getElementById("mycanvas"); 
  // Pass the function to ProcessingJS constructor
  var processingInstance = new Processing(canvas, programCode); 
