function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }
}
function randomNumber(){
    var aRanNum = Math.floor((Math.random())*16);
    switch (aRanNum){
      case 10: return 'a';
        break;
      case 11: return 'b';
        break;
      case 12: return 'c';
        break;
      case 13: return 'd';
        break;
      case 14: return 'e';
        break;
      case 15: return 'f';
        break;
      default:
        return aRanNum;
};
}
function fade(element) {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            element.style.display = 'none';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 50);
}

function randomColor(){
  var r1 = randomNumber();
  var r2 = randomNumber();
  var b1 = randomNumber();
  var b2 = randomNumber();
  var g1 = randomNumber();
  var g2 = randomNumber();
  var hexColor = '#'+r1+r2+b1+b2+g1+g2;
  return hexColor;
};

function makeCircle(){
  var c=document.getElementById("myCanvas");
  var ctx=c.getContext("2d");
  ctx.beginPath();
  ctx.ellipse(randomX(), randomY(), 25, 19, Math.PI / 1, 0, 2 * Math.PI);
  ctx.stroke();
  ctx.fillStyle = randomColor();
  ctx.fill();
};

function randomX(){
  var ranXNum = Math.floor((Math.random()*innerWidth)*.5);
  return ranXNum;
}

function randomY(){
  var ranYNum = Math.floor((Math.random()*innerHeight)*.15);
  return ranYNum;
}

function pressAKey(){
  document.addEventListener('keydown', function(event) {
    var key = event.key;
    switch (key) {
      case 'a':
        makeCircle();
        mySound=new sound('sounds/bubbles.mp3');
        mySound.play();
        break;
      case 'b':
        makeCircle();
        mySound=new sound('sounds/clay.mp3');
        mySound.play();
        break;
      case 'c':
        makeCircle();
        mySound=new sound('sounds/confetti.mp3');
        mySound.play();
        break;
      case 'd':
        makeCircle();
        mySound=new sound('sounds/corona.mp3');
        mySound.play();
        break;
      case 'h':
        makeCircle();
        mySound=new sound('sounds/moon.mp3');
        mySound.play();
        break;
      case 'i':
        makeCircle();
        mySound=new sound('sounds/dottedSpiral.mp3');
        mySound.play();
        break;
      case 'j':
        makeCircle();
        mySound=new sound('sounds/flash-1.mp3');
        mySound.play();
        break;
      case 'k':
        makeCircle();
        mySound=new sound('sounds/flash-2.mp3');
        mySound.play();
        break;
      case 'l':
        makeCircle();
        mySound=new sound('sounds/flash-3.mp3');
        mySound.play();
        break;
      case 'm':
        makeCircle();
        mySound=new sound('sounds/glimmer.mp3');
        mySound.play();
        break;
      case 'n':
        makeCircle();
        mySound=new sound('sounds/pinwheel.mp3');
        mySound.play();
        break;
      case 'o':
        makeCircle();
        mySound=new sound('sounds/prism-1.mp3');
        mySound.play();
        break;
      case 'p':
        makeCircle();
        mySound=new sound('sounds/prism-2.mp3');
        mySound.play();
        break;
      case 'q':
        makeCircle();
        mySound=new sound('sounds/prism-3.mp3');
        mySound.play();
        break;
      case 'r':
        makeCircle();
        mySound=new sound('sounds/splits.mp3');
        mySound.play();
        break;
      case 's':
        makeCircle();
        mySound=new sound('sounds/squiggle.mp3');
        mySound.play();
        break;
      case 't':
        makeCircle();
        mySound=new sound('sounds/strike.mp3');
        mySound.play();
        break;
      case 'u':
        makeCircle();
        mySound=new sound('sounds/suspension.mp3');
        mySound.play();
        break;
      case 'v':
        makeCircle();
        mySound=new sound('sounds/timer.mp3');
        mySound.play();
        break;
      case 'w':
        makeCircle();
        mySound=new sound('sounds/ufo.mp3');
        mySound.play();
        break;
      case 'x':
        makeCircle();
        mySound=new sound('sounds/veil.mp3');
        mySound.play();
        break;
      case 'y':
        makeCircle();
        mySound=new sound('sounds/wipe.mp3');
        mySound.play();
        break;
      case 'z':
        makeCircle();
        mySound=new sound('sounds/zig-zag.mp3');
        mySound.play();
        break;
      default:
        makeCircle();
        mySound=new sound('sounds/zig-zag.mp3');
        mySound.play();
    }
});
}
pressAKey();
