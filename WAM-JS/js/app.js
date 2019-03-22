// Selector: dot means class
const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
const btnStart = document.querySelector('button');
const bonkSound = document.querySelector('audio');
const startScreen = document.querySelector('.start-screen');
const showScore = document.querySelector('.show-score');
const timer = document.querySelector('.timer');

let score = 0;
let lastHole;
let timeUp = false;
let popSeqence = [0,1,2,3,4,5,0,1,2,3,4,5];
let unitLenth = 5;
let maxRepeat = popSeqence / unitLenth;
let repeat = 0;


function randomTime(min, max) {
    
  return Math.round(Math.random() * (max - min) + min);
}

//function randomHole(holes) {
//  //const idx = Math.floor(Math.random() * holes.length);
//  const idx = popSeqence[i+1];
//  const hole = holes[idx];
//
//  if (hole === lastHole) {
//    return randomHole(holes);
//  }
//  lastHole = hole;
//  return hole;
//}

function selectPopHole(holes, i) {
  //const idx = Math.floor(Math.random() * holes.length);
  const idx = popSeqence[i];
  const hole = holes[idx];
  return hole;
}

let i = 0;
//let repeat = 0;
function peep() {
  const popTime = randomTime(300, 1000);
  //const hole = randomHole(holes);
  console.log('Peep!');
  if ( i >= holes.length ) { i = 0; }
  const hole = selectPopHole(holes, i++);
    
  hole.classList.add('up');
    
  // finish a peep in each unit game
  setTimeout(() => {
    hole.classList.remove('up');
    scoreBoard.classList.remove('add');
    if (!timeUp) peep();
  }, popTime);
}

function sleep(milliseconds) {
  console.log('Begin Sleep!');
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    console.log('counting!');
    if ((new Date().getTime() - start) > milliseconds){
      break;
      console.log('End Sleep!');
    }
  }
  console.log('End Sleep! Out For Loop');
}


function Start() {
  console.log('Unit Start!');
  score = 0;
  scoreBoard.textContent = score;
  timeUp = false;
  //timer.classList.add('hide');
  scoreBoard.classList.remove('add');
  startScreen.classList.add('hide');
  
  // start peep
  peep();
  // finish a unit game    
  setTimeout(() => {
    timeUp = true;
    repeat++;
    //if (repeat == 0) {
        
    //} else {
    timer.classList.remove('hide');
    //}
    
    
    startScreen.classList.remove('hide');
    btnStart.classList.add('hide');

    showScore.classList.add('show');
    const message = 'Your score: ' + score + (score >= 10 ? " GREAT!" : '');
    showScore.textContent = message;
      

  }, 2000);
    
  setTimeout(() => {
      btnStart.classList.remove('hide');
  }, 4000);

}

function bonk(e) {
  bonkSound.currentTime = 0;
  if (!timeUp) {
    bonkSound.play();
    scoreBoard.classList.add('add');
    score++;
    scoreBoard.textContent = score;
  }
}

moles.forEach(mole => {
  mole.addEventListener('click', bonk);
});

btnStart.addEventListener('click', Start);


function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
//    if (repeat == 0) {
//        timer.classList.add('.hide');
//    } else {
//        timer.classList.remove('.hide');
//    }
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

window.onload = function () {
    

    var Minutes = 60 * 4,
        display = document.querySelector('#time');
    startTimer(Minutes, display);
};
