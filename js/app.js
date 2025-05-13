
// CAR NINJA GAME JS

console.log('JS LINKED AND WORKING');

/*
✅ Create grid first in HTML CSS & JS - so have game's playing field needed for cars and potholes
Set Up Variables and Displays for score/lives/displays: ✅ Set up score, ✅ lives, and displays to track and show the game’s state.

✅ Set up these variables already:
let score, let lives, const gameGrid, const width, const height, const cellCount, const cells, const cell,
const gameplayScreen, const startButton, let gameTimer, let timeLeft, let countdownInterval,
const scoreDisplay, const countdownDisplay

Code the Start Game Button Functionality
Code the Score Functionality
Code the Lives Functionality
Code the Timer Functionality
Code the Car Spawning Functionality
Code the game Over-Functionality
Code the pothole spawning functionality
Code the win/loss conditions
Code for 3 Round Functionality

create click event where click on car and number generates for score
create click event where click on a cell that doesn't have points, and number generates for score
*/

/* ------ADDTL VARIABLES ADDED TO THE TOP THAT I WAS MISSING ----------*/

let spawnLoop = null;
let isGameActive = false; // New game state flag
const livesDisplay = document.getElementById('tries-left');
const countdownDisplay = document.getElementById('countdown-timer');
const gameOverScreen = document.getElementById('gameover-screen');


// /*-------- Temporary Code to Have For Gameplay Screen As Active Until I'm able to create code that moves from one screen to the next-----*/

//INSTRUCTIONS
// Get the elements
const instructionsButton = document.getElementById('instructions');
const instructionsScreen = document.getElementById('instructions-screen');
const starterScreen = document.getElementById('starter-screen');
const gameplayScreen = document.getElementById('gameplay-screen');
const backButton = document.getElementById('back-button');

//Instructions button so it functions:
instructionsButton.addEventListener('click', () => {
    // hiding all other screens first to prevent overlaps
    document.querySelectorAll('.screens').forEach(screen => {
        screen.classList.remove('active');
    });
    // to show only the instructions screen
    instructionsScreen.classList.add('active');
});

// Instructions button so it functions:
// instructionsButton.addEventListener('click', () => {
//     starterScreen.classList.remove('active');
//     gameplayScreen.classList.add('active'); 
    // instructionsScreen.classList.add('active');
// });

// Back button so it functions:
backButton.addEventListener('click', () => {
    instructionsScreen.classList.remove('active');
    gameplayScreen.classList.add('active');
});



//CREATING GRID
//CREATING gameplayScreen WITH gameGrid - finding and then making it active
// const gameplayScreen = document.getElementById('gameplay-screen'); // Find gameplay screen //already typed above
gameplayScreen.classList.add('active'); // Show gameplay screen - as active (as opposed to hidden)


// Creating gameGrid
// /* Using tools/example Tristan showed in class*/
const gameGrid = document.querySelector("#game-grid");//grabbing the grid in html
const width = 12; // columns - width usually refers to how many columns are in each row. 12 columns * 12 rows = 144 squares total
const height = 4; // rows
const cellCount = width * height; //12 * 4 = 48 --currently creating a game with 12 across and 4 high -- subject to change later
const cells = []; //creating an empty array that is meant to store each cell of the grid as I create them in a loop.
const cell = document.createElement("div"); //creating the cells
let score = 0; //creating score variable for tracking player's points
// let lives = 3; // creating lives variable for tracking player's lives (3 total)
let car = document.createElement('img'); //defining car in global scope

function createGrid() {
        for (let i = 0; i < cellCount; i++) {
                const cell = document.createElement("div");
                cells.push(cell); // Store <div> elements, not numbers
                gameGrid.appendChild(cell);
        }
}
createGrid();


// ------------------------------


//CREATING START BUTTON FUNCTIONALITY
const startButton = document.getElementById("start-game");
startButton.addEventListener('click', startGame);

function startGame() {
    score = 0;
    isGameActive = true;
    updateScore();
    //clear any existing intervals
    if (spawnLoop) clearInterval(spawnLoop);
    if (countdownInterval) clearInterval(countdownInterval);

    // Reset screens
    document.getElementById('gameplay-screen').classList.add('active');
    document.getElementById('gameover-screen').classList.remove('active');

    //Start game functions
    spawnLoop = setInterval(spawnCar, 500);
    startGameTimer();
}

startButton.addEventListener('click', () => {
    console.log('Start button clicked');
    startGame();
});



// ------------------------------

//PART OF CAR SPAWNING FUNCTIONALITY
//CREATING ADDING AND REMOVING CYBERTRUCK
function addCyberTruck(cellNumber) {
    cells[cellNumber].classList.add("cybertruck");
}

// ------

function removeCyberTruck() {
    cells[cybertruckPosition].classList.remove("cybertruck");
}


// ------------------------------

//CREATING SPAWN CAR SECTION
// SPAWN CAR Section
// spawnCar is showing up in between cells and not hitting cells - Need to figure out why not working
function spawnCar() { //Declaring a function called spawnCar that will run code to add a car image to the grid when called
    if (!isGameActive) return;
    const randomCellPick = Math.floor(Math.random() * cells.length); //storing a random # to pick a grid cell
    //Math.random()built in function generates decimal number and then it's multiplied by 48 //don't totally get it but it's working
    const cell = cells[randomCellPick];
    if (!cell.querySelector('img')) { // Check if cell is empty with no image so it can put an image in there
        const car = document.createElement('img'); //creates a new img html element
        car.src = '../images/cybertruck.jpg'; //setting image source
        car.alt = 'Cybertruck Car'; //setting alt text for accessibility and screen readers
        car.style.width = '100%'; //newly created car is styled with the width of 100% of the cell
        car.style.height = '100%'; //newly created car is styled with the height of 100% of the cell
        car.classList.add('car'); // Ensure CSS positioning
        cell.appendChild(car); //adds car as child of cell
        car.addEventListener('click', () => {
            if (isGameActive) {
                score++;
                updateScore();
                car.remove();
            }
        });
        setTimeout(() => {
            car.remove();
        }, 3000); //removes car from grid after 3 seconds if not clicked
}
}


// setInterval(spawnCar, 1000); // Spawn car every 1 second//! Commented out setInterval so that it doesn't immediately spawn cars immediately before game starts
//setInterval is a function that repeatedly calls a function at a set interval.


// ------------------------------

//ADDING CLICK-TO-SCORE FUNCTIONALITY
const scoreDisplay = document.getElementById("points-earned"); //selecting and creating a variable for the score display element

function updateScore() { //updates the score
    scoreDisplay.textContent = `Score: ${score}`;
}

// ------------------------------

//ADDING COUNTDOWN TIMER FUNCTIONALITY, SO CODE DOESN'T GO ON INDEFINITELY
//getting help from chatgpt, deepseek, and grok big time for this one:

let gameTimer; // creating gameTimer for the 15-second timeout
let timeLeft = 15; //starting time for the 15-second timeout
let countdownInterval; //for live countdown display turning red in last 3 seconds

// const startButton = document.getElementById('start-game');//already declared
startButton.addEventListener('click', restartGame);


function startGameTimer() {
    const countdownDisplay = document.getElementById('countdown-timer');
    timeLeft = 15;
    countdownDisplay.textContent = `Time Left: ${timeLeft}`;

    if (countdownInterval) clearInterval(countdownInterval);
    if (gameTimer) clearTimeout(gameTimer);

    countdownInterval = setInterval(() => {
        if (timeLeft <= 0) {
            countdownDisplay.textContent = `Time Left: 0`;
            clearInterval(countdownInterval);
            triggerGameOver();
            return;
        }
        timeLeft--;
        countdownDisplay.textContent = `Time Left: ${timeLeft}`;
        if (timeLeft <= 3) {
            countdownDisplay.classList.add("low-time");
        } else {
            countdownDisplay.classList.remove("low-time");
        }
    }, 1000);
}

    // After 15 seconds, end the game
    gameTimer = setTimeout(() => {
      triggerGameOver();
    }, 15000);
 

    function triggerGameOver() {
        clearInterval(countdownInterval);
        if (spawnLoop) clearInterval(spawnLoop);
        spawnLoop = null;
        isGameActive = false;
    
        const cars = document.querySelectorAll('#game-grid img');
        cars.forEach(car => car.remove());
    
        const gameplayScreen = document.getElementById('gameplay-screen');
        const gameOverScreen = document.getElementById('gameover-screen');
        gameplayScreen.classList.remove('active');
        gameOverScreen.classList.add('active');
    
        const message = score >= 17 ? 'You Win! Ninja Master!' : 'Game Over, man! You lose! Try Again.';
        gameOverScreen.innerHTML = `<h2>${message}</h2><button id="play-again" class="buttons">Play Again!</button>`;
        document.getElementById('play-again').addEventListener('click', restartGame);
    }

    function restartGame() {
        // Reset score and timer display
        score = 0;
        timeLeft = 15;
        updateScore();
        document.getElementById('countdown-timer').textContent = `Time Left: ${timeLeft}`;
        
        // Clear any existing cars
        document.querySelectorAll('#game-grid img').forEach(img => img.remove());
        
        // Show gameplay screen, hide game over screen
        document.getElementById('gameplay-screen').classList.add('active');
        document.getElementById('gameover-screen').classList.remove('active');
        
        // Start the game
        startGame();
    }

// function restartGame() {
//     startGame();
// };




// Code Graveyard

/*
#gameover-screen {
    text-align: center; /* Centers everything */
    /* padding-top: 150px; /* Pushes everything down */
/* }

.game-message {
    color: cornflowerblue;
    font-size: 30px;
    margin-bottom: 30px; /* Space between message and button */
/* } */
/* 
#play-again {
    font-size: 15px;
    padding: 10px 20px;
} */
 
/* #gameover-screen {
    text-align: center;
} */