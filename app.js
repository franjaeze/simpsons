const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.maggie')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')
const start = document.getElementById('start');
const gameBoard = document.querySelector(".grid");

let difficult = document.getElementById('difficult');
let scenario = document.getElementById('scenario');
let countDownTimerId

let result = 0
let hitPosition
let currentTime = 10
let timerId = null

let Easy= 1000;
let Medium = 750;
let Hard = 500;

function randomSquare() {
  squares.forEach(square => {
    square.classList.remove('maggie')
    square.classList.remove('bobo')
    square.classList.remove('girl')
    square.classList.remove('bear')
    square.classList.remove('monkey')
  })

  let randomSquare = squares[Math.floor(Math.random() * 35)]
  var rotate =Math.floor(Math.random()*300);
  randomSquare.classList.add('maggie')
 /*  randomSquare.style.setProperty('--rotate-deg', rotate +'deg'); */
  let someOtherRamdom  =  squares[Math.floor(Math.random() * 35)]
  someOtherRamdom.classList.add('bobo')
  let someOtherRamdom2  =  squares[Math.floor(Math.random() * 35)]
  someOtherRamdom2.classList.add('girl')
  let someOtherRamdom3  =  squares[Math.floor(Math.random() * 35)]
  someOtherRamdom3.classList.add('monkey')
  let someOtherRamdom4  =  squares[Math.floor(Math.random() * 35)]
  someOtherRamdom4.classList.add('bear')

  hitPosition = randomSquare.id
}

squares.forEach(square => {
  square.addEventListener('mousedown', () => {
    if (square.id == hitPosition) {
      result++
      score.textContent = result
      hitPosition = null
    }
  })
})

function moveMaggie(speed) {
  timerId = setInterval(randomSquare, speed)
}



function countDown() {


 currentTime--
 timeLeft.textContent = currentTime

 if (currentTime == 0) {
   clearInterval(countDownTimerId)
   clearInterval(timerId)
   alert('GAME OVER! Your final score is ' + result)
 }

}

const setDifficulty = () => {
  difficult = document.querySelector('select');
 if(difficult.value=='Hard'){
  moveMaggie(Hard)
 } else if(difficult.value=='Medium'){
  moveMaggie(Medium)
 } else {
 moveMaggie(Easy)
 }}

 const setScenario = ()=>{
  let scenario = document.getElementById('scenario');
  gameBoard.classList.remove('scenario1')
  gameBoard.classList.remove('scenario2')
  gameBoard.classList.remove('scenario3')
  

 if(scenario.value=='Hard'){
  gameBoard.classList.add('scenario3')
 } else if(scenario.value=='Medium'){
  gameBoard.classList.add('scenario2')
 } else {
  gameBoard.classList.add('scenario1')
 }
 }
 
const play = () =>{
   result = 0
 currentTime = 10
 timerId = null

 clearInterval(countDownTimerId)
 countDownTimerId = setInterval(countDown, 1000)

 
setScenario();
setDifficulty();
}

start.addEventListener( "click", play) 

