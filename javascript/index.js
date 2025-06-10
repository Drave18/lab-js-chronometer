const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');

const splitsElement = document.getElementById('splits');

function printTime() {
  printMinutes()
  printSeconds()
}

//Print minuts & seconds
function printMinutes() {

  const minutes = chronometer.getMinutes()
  const minutesValue = chronometer.computeTwoDigitNumber(minutes)

  minDecElement.innerHTML = minutesValue[0]
  minUniElement.innerHTML = minutesValue[1];
}

function printSeconds() {

  const seconds = chronometer.getSeconds();
  const secondsValue = chronometer.computeTwoDigitNumber(seconds);

  secDecElement.innerHTML = secondsValue[0];
  secUniElement.innerHTML = secondsValue[1];
}

//Display splits by creatin a li element with the value of split()
function printSplit() {
  //3. insert the li split inside the ol

  const split = document.createElement('li')
  split.innerText = chronometer.split()

  splitsElement.appendChild(split)


}

//Clear the ol element that store splits
function clearSplits() {
  splitsElement.innerHTML = '';

}

function setStartBtn() {
  btnLeftElement.className = "btn stop"
  btnLeftElement.innerText = "STOP"
  btnRightElement.className = "btn split"
  btnRightElement.innerText="SPLIT"
}

function setStopBtn() {
  btnLeftElement.className = 'btn start';
  btnLeftElement.innerText = 'START';
  btnRightElement.className = 'btn reset';
  btnRightElement.innerText = 'RESET';
}


function setResetBtn() {
  clearSplits()
  const spans = document.querySelectorAll('#sphere span:not(#dots)');
  spans.forEach((span) => {
    span.innerText = '0';
  });
}

function setSplitBtn() {
  printSplit()
}



// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if(btnLeftElement.classList.contains('start')){
    setStartBtn()
    chronometer.start(printTime);
  }
  else if (btnLeftElement.classList.contains('stop')){
    setStopBtn()
    chronometer.stop(printTime);
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if(btnRightElement.classList.contains('reset')){
    setResetBtn()
    chronometer.reset();
  }
  else if(btnRightElement.classList.contains('split')){
    setSplitBtn()
  }
});

