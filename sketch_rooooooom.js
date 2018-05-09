var img;

function setup() {
  createCanvas(1600, 600);
  img = loadImage('assets/room.PNG');
  back();
}

function draw() {

  back();
  win();
  table();
  pic();
  pic2();
  mouse();
  chair();
  bed();
  grem();
  chair2();
mirror();
  image(img, 800, 0, 700, 600);
}

function back() {
  stroke(0);
  fill(76, 146, 198);
  rect(150, 0, 400, 300);
  quad(0, 0, 150, 0, 150, 300, 0, 450);
  quad(550, 0, 800, 0, 800, 450, 550, 300);

  fill(37, 121, 33);
  quad(150, 300, 550, 300, 1100, 600, -200, 600);
}

function mouse() {
  if (mouseX<670&&mouseX>600&&mouseY<70) {
    nopic();
  }
  if (mouseX<760&&mouseX>690&&mouseY<70) {
    nopic2();
  }
  if (mouseX<150&&mouseX>10&&mouseY>280) {
    nochair();
  }
  if (mouseX<760&&mouseX>390&&mouseY>160&&mouseY<550) {
    nobed();
  }

  if (mouseX<400&&mouseX>260&&mouseY>210&&mouseY<450) {
    nochair2();
  }
  if (mouseX>80&&mouseX<270&&mouseY>255&&mouseY<420) {
    notable();
  }

  if (mouseX>300&&mouseX<440&&mouseY>0&&mouseY<200) {
    nowin();
  }
  if(mouseX>450&&mouseX<550&&mouseY>30&&mouseY<160){
  nogrem();
  }
  if(mouseX>170&&mouseX<230&&mouseY>30&&mouseY<180){
  nomirror();
  }
  
}



function bed() {
  stroke(0);
  fill(214, 130, 19);
  rect(410, 180, 197, 175);

  rect(390, 160, 20, 210);
  rect(600, 160, 20, 210);

  fill(232, 232, 148);
  rect(420, 200, 90, 50);
  rect(520, 200, 90, 50);

  fill(214, 130, 19);
  rect(490, 230, 270, 250);

  rect(470, 210, 20, 300);
  rect(740, 210, 20, 300);

  quad(410, 250, 410, 340, 470, 480, 470, 330);
}

function nobed() {
  stroke(0);
  fill(214, 130, 19);
  rect(410+random(2), 180+random(2), 197+random(2), 175+random(2));

  rect(390+random(2), 160+random(2), 20+random(2), 210+random(2));
  rect(600+random(2), 160+random(2), 20+random(2), 210+random(2));

  fill(232, 232, 148);
  rect(420+random(2), 200+random(2), 90+random(2), 50+random(2));
  rect(520+random(2), 200+random(2), 90+random(2), 50+random(2));

  fill(214, 130, 19);
  rect(490+random(2), 230+random(2), 270+random(2), 250+random(2));

  rect(470+random(2), 210+random(2), 20+random(2), 300+random(2));
  rect(740+random(2), 210+random(2), 20+random(2), 300+random(2));

  quad(410+random(2), 250+random(2), 410+random(2), 340+random(2), 470+random(2), 480+random(2), 470+random(2), 330+random(2));
}


function chair() {
  noStroke();
  fill(206, 180, 85);
  rect(10, 300, 10, 250);
  rect(60, 280, 10, 250);

  rect(90, 450, 10, 130);
  rect(140, 430, 10, 130);

  quad(20, 430, 100, 460, 150, 430, 70, 400);

  quad(10, 290, 10, 320, 70, 290, 70, 260);

  quad(10, 330, 10, 350, 70, 320, 70, 300);
}

function nochair() {
  noStroke();
  fill(206, 180, 85);
  rect(10+random(2), 300+random(2), 10+random(2), 250+random(2));
  rect(60+random(2), 280+random(2), 10+random(2), 250+random(2));

  rect(90+random(2), 450+random(2), 10+random(2), 130+random(2));
  rect(140+random(2), 430+random(2), 10+random(2), 130+random(2));

  quad(20+random(2), 430+random(2), 100+random(2), 460+random(2), 150+random(2), 430+random(2), 70+random(2), 400+random(2));

  quad(10+random(2), 290+random(2), 10+random(2), 320+random(2), 70+random(2), 290+random(2), 70+random(2), 260+random(2));

  quad(10+random(2), 330+random(2), 10+random(2), 350+random(2), 70+random(2), 320+random(2), 70+random(2), 300+random(2));
}


function chair2() {

  noStroke();
  fill(206, 180, 85);
  rect(260, 230, 10, 200);
  rect(310, 210, 10, 200);

  rect(340, 350, 10, 100);
  rect(390, 330, 10, 100);

  quad(270, 330, 350, 360, 400, 330, 320, 300);

  quad(260, 230, 260, 250, 320, 220, 320, 200);
}

function nochair2() {

  noStroke();
  fill(206, 180, 85);
  rect(260+random(2), 230+random(2), 10+random(2), 200+random(2));
  rect(310+random(2), 210+random(2), 10+random(2), 200+random(2));

  rect(340+random(2), 350+random(2), 10+random(2), 100+random(2));
  rect(390+random(2), 330+random(2), 10+random(2), 100+random(2));

  quad(270+random(2), 330+random(2), 350+random(2), 360+random(2), 400+random(2), 330+random(2), 320+random(2), 300+random(2));

  quad(260+random(2), 230+random(2), 260+random(2), 250+random(2), 320+random(2), 220+random(2), 320+random(2), 200+random(2));
}

function pic() {
  fill(175, 110, 29);
  quad(600, 0, 670, 0, 670, 70, 600, 70);

  fill(100, 30, 30);
  quad(610, 0, 660, 0, 660, 60, 610, 60);
  image(img, 610, 0, 50, 60);
}


function nopic() {

  fill(175, 110, 29);
  quad(600+random(2), 0+random(2), 670+random(2), 0+random(2), 670+random(2), 70+random(2), 600+random(2), 70+random(2));

  fill(100, 30, 30);
  quad(610+random(2), 0+random(2), 660+random(2), 0+random(2), 660+random(2), 60+random(2), 610+random(2), 60+random(2));
  image(img, 610+random(2), 0+random(2), 50+random(2), 60+random(2));
}


function pic2() {
  fill(175, 110, 29);
  quad(690, 0, 760, 0, 760, 70, 690, 70);

  fill(100, 30, 30);
  quad(700, 0, 750, 0, 750, 60, 700, 60);
  image(img, 700, 0, 50, 60);
}


function nopic2() {

  fill(175, 110, 29);
  quad(690+random(2), 0+random(2), 760+random(2), 0+random(2), 760+random(2), 70+random(2), 690+random(2), 70+random(2));

  fill(100, 30, 30);
  quad(700+random(2), 0+random(2), 750+random(2), 0+random(2), 750+random(2), 60+random(2), 700+random(2), 60+random(2));
  image(img, 700+random(2), 0+random(2), 50+random(2), 60+random(2));
}

function table() {
  stroke(0);
  fill(178, 100, 48);
  rect(120, 300, 10, 90);
  rect(190, 300, 10, 90);

  quad(120, 263, 160, 280, 160, 320, 120, 300);

  rect(160, 280, 80, 40);

  quad(80, 255, 200, 255, 270, 285, 150, 285);

  rect(160, 320, 10, 100);
  rect(230, 320, 10, 100);
  fill(242, 232, 29);
  ellipse(200, 300, 10, 10);
}

function notable() {
  stroke(0);
  fill(178, 100, 48);
  rect(120+random(2), 300+random(2), 10+random(2), 90+random(2));
  rect(190+random(2), 300+random(2), 10+random(2), 90+random(2));

  quad(120+random(2), 263+random(2), 160+random(2), 280+random(2), 160+random(2), 320+random(2), 120+random(2), 300+random(2));

  rect(160+random(2), 280+random(2), 80+random(2), 40+random(2));

  quad(80+random(2), 255+random(2), 200+random(2), 255+random(2), 270+random(2), 285+random(2), 150+random(2), 285+random(2));

  rect(160+random(2), 320+random(2), 10+random(2), 100+random(2));
  rect(230+random(2), 320+random(2), 10+random(2), 100+random(2));
  fill(242, 232, 29);
  ellipse(200+random(2), 300+random(2), 10, 10);
}


function win() {
  stroke(0);
  fill(19, 98, 8);

  rect(300, 0, 70, 210);
  rect(370, 0, 70, 210);

  fill(198, 242, 147);
  rect(310, 0, 50, 60);
  rect(310, 70, 50, 60);
  rect(310, 140, 50, 60);

  rect(380, 0, 50, 60);
  rect(380, 70, 50, 60);
  rect(380, 140, 50, 60);
}

function nowin() {
  stroke(0);
  fill(19, 98, 8);

  rect(300+random(2), 0+random(2), 70+random(2), 210+random(2));
  rect(370+random(2), 0+random(2), 70+random(2), 210+random(2));

  fill(198, 242, 147);
  rect(310+random(2), 0+random(2), 50+random(2), 60+random(2));
  rect(310+random(2), 70+random(2), 50+random(2), 60+random(2));
  rect(310+random(2), 140+random(2), 50+random(2), 60+random(2));

  rect(380+random(2), 0+random(2), 50+random(2), 60+random(2));
  rect(380+random(2), 70+random(2), 50+random(2), 60+random(2));
  rect(380+random(2), 140+random(2), 50+random(2), 60+random(2));
}


function grem(){
stroke(0);
fill(255,244,50);
rect(450,80,100,80);

image(img,460,90,80,60);
line(500,30,450,80);
line(500,30,550,80);
}

function nogrem(){
stroke(0);
fill(255,244,50);
rect(450+random(2),80+random(2),100+random(2),80+random(2));

image(img,460+random(2),90+random(2),80+random(2),60+random(2));
line(500+random(2),30+random(2),450+random(2),80+random(2));
line(500+random(2),30+random(2),550+random(2),80+random(2));
}

function mirror(){
stroke(0);
fill(196,242,150);
rect(170,80,60,100);
rect(175,85,50,90);
line(200,30,170,80);
line(200,30,230,80);
}
function nomirror(){
stroke(0);
fill(196,242,150);
rect(170+random(2),80+random(2),60+random(2),100+random(2));
rect(175+random(2),85+random(2),50+random(2),90+random(2));
line(200+random(2),30+random(2),170+random(2),80+random(2));
line(200+random(2),30+random(2),230+random(2),80+random(2));
}