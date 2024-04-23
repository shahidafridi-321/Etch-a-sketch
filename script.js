let nbrOfSquare = 16; // initial numbers of squares

const container = document.querySelector('.container');
const btn = document.querySelector('.btn');

btn.addEventListener('click', newGrid);

createGrid(nbrOfSquare); // squares creating function is called here
setInterval(rndcolor, 500); // called function which changes bg of container every 0.5 seconds

// function for creating grids/squares
function createGrid(number) {
  for (let i = 0; i < number * number; i++) {
    const square = document.createElement('div');
    container.appendChild(square);
    square.setAttribute('class', 'square');
    square.style.width = `${((400 - (2 * number)) / number)}px`;
    square.style.height = `${((400 - (2 * number)) / number)}px`;
  }
  setSqrBg(nbrOfSquare); // sets the background color of squares
}

//function for settinf background color
function setSqrBg(number) {
  let squares = document.querySelectorAll('.square');
  squares = Array.from(squares);
  squares.forEach(square => {
    square.addEventListener('mouseenter', randomColor);
  });
}

// packs random color
function randomColor(e) {
  e.target.style.backgroundColor = `rgb(${randomNumber(255)} ${randomNumber(255)} ${randomNumber(255)})`;
}
// packs random number
function randomNumber(number) {
  return Math.floor(Math.random() * number);
}

// for creating new grid when reset button is clicked
function newGrid() {

  document.querySelector('.container').innerHTML = ''; // clears the old grid

  let newNumber = prompt('how many sqrs ', 5); // ask user for number*number of squars
  if (newNumber <= 100) {
    createGrid(newNumber);
    setSqrBg(newNumber);
    btn.addEventListener('click', newGrid); // it is for resetting the container and adding new grid agian and again
  }
  else {
    alert('Number should be between 1 and 100');
    newGrid();
  }
}

// for random backround color(optional)
function rndcolor() {
  container.style.backgroundColor = `rgb(${randomNumber(255)} ${randomNumber(255)} ${randomNumber(255)})`;
}

