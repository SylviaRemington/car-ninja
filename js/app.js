
// CAR NINJA GAME JS

console.log('JS LINKED AND WORKING');

//FOR INSTRUCTORS: Notes below (and the comments next to the code) are necessary for me to understand what I am doing currently.
//I am aware that in real world coding situations, I will need all of this gone. This is just helping me so that I can 
//get through this exercise and understand what I am doing. Thank you for understanding.
//I've also put thousands of lines of code, comments, and ideas in a "Code Graveyard" in another repository named "car-ninja-alternate-universe."

/*
✅ Create grid first in HTML CSS & JS - so have game's playing field needed for cars and potholes
Set Up Variables and Displays for score/lives/displays: ✅ Set up score, ✅ lives, and displays to track and show the game’s state.

✅ Set up these variables already:
let score, let lives, const gameGrid, const width, const height, const cellCount, const cells, const cell,
const gameplayScreen, const startButton, let gameTimer, let timeLeft, let countdownInterval,
const scoreDisplay, const countdownDisplay

✅Code the Instructions Screen 
✅ Code the Grid
✅ Code the Start Game Button Functionality
Code the Score Functionality
Code the Timer Functionality
Code the Car Spawning Functionality
Code the game over Functionality
Code the pothole spawning functionality
Code the win/loss conditions
Create click event where click on car and number generates for score
Create click event where click on a cell that doesn't have points, and number generates for score
*/

/* ------ADDTL VARIABLES ADDED TO THE TOP THAT I WAS MISSING ----------*/

let spawnLoop = null; //This remembers where the game's car spawning timer is, so I can stop it later
let isGameActive = false; // Like an on/off switch for the game - if false, means the game isn't active and running right now.
const livesDisplay = document.getElementById('tries-left'); //getting the element where I can show how many lives user has left. Ended up taking this off the game.
const countdownDisplay = document.getElementById('countdown-timer'); //getting the count-down timer so we can count down from 15 seconds
const gameOverScreen = document.getElementById('gameover-screen'); //gets the gameover-screen for when win or lose.


// /*-------- Temporary Code to Have For Gameplay Screen As Active Until I'm able to create code that moves from one screen to the next-----*/

//INSTRUCTIONS
// Get the elements
//1st we get the elements with getElementById or querySelector
const instructionsButton = document.getElementById('instructions');
const instructionsScreen = document.getElementById('instructions-screen');
const starterScreen = document.getElementById('starter-screen');
const gameplayScreen = document.getElementById('gameplay-screen');
const backButton = document.getElementById('back-button');

//Instructions button so it functions:
instructionsButton.addEventListener('click', () => { //Listen for a click on the instructions button
    // hiding all other screens first to prevent overlaps
    document.querySelectorAll('.screens').forEach(screen => { //find all elements with the class .screens
        screen.classList.remove('active'); //for each one, remove the active class, so it hides all screens
    });
    // to show only the instructions screen
    instructionsScreen.classList.add('active'); //find the instructions screen and mark it as active & adding the active css style tag to this element
});

// Back button so it can go back to gameplay screen and make instructions button as inactive:
backButton.addEventListener('click', () => { //When backButton gets clicked, run the following code inside.
    instructionsScreen.classList.remove('active'); //find instructions screen & remove active class from it
    gameplayScreen.classList.add('active'); // find the gameplay screen & add active class to it to make screen show up.
});

//-----------------------------------------------------------------------------------------------------------

//CREATING GRID
//CREATING gameplayScreen WITH gameGrid - finding and then making it active
// const gameplayScreen = document.getElementById('gameplay-screen'); // Find gameplay screen //already typed above
gameplayScreen.classList.add('active'); // Show gameplay screen - as active (as opposed to hidden)


// Creating gameGrid
// /* Using tools/example Tristan showed in class*/
const gameGrid = document.querySelector("#game-grid");//grabbing the grid in html
const width = 12; // columns - width usually refers to how many columns are in each row. 12 columns * 4 rows = 48 squares total
const height = 4; // rows
const cellCount = width * height; //12 * 4 = 48 --currently creating a game with 12 across and 4 high -- subject to change later
const cells = []; //creating an empty array that is meant to store each cell of the grid as I create them in a loop.
const cell = document.createElement("div"); //creating the cells
let score = 0; //creating score variable for tracking player's points
// let lives = 3; // creating lives variable for tracking player's lives (3 total)-going to create this after project presentations
let car = document.createElement('img'); //defining car in global scope

//Creating gameGrid Function - This function builds the grid when it is called.
function createGrid() {
        for (let i = 0; i < cellCount; i++) { //creating for loop that runs once for every cell in the grid, & goes one less than cellCount (thus 47 cells)
                const cell = document.createElement("div"); //this creates a new div, so eventually will have one cell for each div
                cells.push(cell); // adds the new <div> element to the cells array & lets you keep track of all the grid squares.
                gameGrid.appendChild(cell); //adds the grid to the page and it shows up on the browser
        }
}
createGrid(); //called the function so a grid can be built for the game


//-----------------------------------------------------------------------------------------------------------


//CREATING START BUTTON FUNCTIONALITY
const startButton = document.getElementById("start-game"); //find the element with id "start-game" & save it to a variable startButton
startButton.addEventListener('click', startGame); //listen for a click on the start-game button to start the game (& when clicked, startGame function.)

function startGame() { //When the game starts...
    score = 0; // Set the score back to zero.
    isGameActive = true; //Mark the game as active so it knows it is running.
    updateScore(); //Call a function that updates the score display on the screen.

    //clear any existing repeating or looping timers, or automatic countdown timers
    if (spawnLoop) clearInterval(spawnLoop); //If the game is already running, stop the old car-spawning timer and countdown timer, clear it.
    if (countdownInterval) clearInterval(countdownInterval); //If countdown timer is running, stop it and clear it. So that don't have multiple countdowns.

    // Reset screens
    document.getElementById('gameplay-screen').classList.add('active'); //get the gameplay screen and add the active class to it
    document.getElementById('gameover-screen').classList.remove('active');//get the gameover screen and remove the active class from it.

    //Start game functions
    spawnLoop = setInterval(spawnCar, 500); //start a repeating timer that runs every 1/2 second (500 milliseconds)
    //every time it runs, it calls the spawnCar function
    startGameTimer();//call the startGameTimer function and run it
}

startButton.addEventListener('click', () => { //listen for the start button click
    console.log('Start button clicked');//checking to see if the startButton works
    startGame(); //call the startGame function
});



//-----------------------------------------------------------------------------------------------------------

//PART OF CAR SPAWNING FUNCTIONALITY

//CREATING ADDING CYBERTRUCK
function addCyberTruck(cellNumber) { //creates a function & takes a cellNumber as input. Number tells it which cell to use.
    cells[cellNumber].classList.add("cybertruck");//go to the specific cell in the grid (using whatever the number is)
    //This shows the cybertruck in the cell.
}

// ------

//REMOVING CYBERTRUCK
function removeCyberTruck() {
    cells[cybertruckPosition].classList.remove("cybertruck");//go to the cell where the cybertruck is and remove cybertruck from cell
}


//-----------------------------------------------------------------------------------------------------------

//CREATING SPAWN CAR SECTION
// CAR SPAWNING FUNCTIONALITY

function spawnCar() { //Declaring a function called spawnCar that will run code to add a car image to the grid when called.
    if (!isGameActive) return; //If the game is not running, stop the code here at return and do nothing.
    const randomCellPick = Math.floor(Math.random() * cells.length); //pick and store a random number based on how many grid cells there are// This will choose a random cell.
    //Math.random()built in function generates decimal number and then it's multiplied by 48 //don't totally get it but it's working.
    const cell = cells[randomCellPick]; //Get the actual cell at that random number, saving to a variable cell.
    if (!cell.querySelector('img')) { // Check if cell is empty with no image in it, so it can put an image in there.
        const car = document.createElement('img'); //creates a new img html element (not shown yet)
        car.src = '../images/cybertruck.jpg'; //sets the picture to be a cybertruck.
        car.alt = 'Cybertruck Car'; //setting alt text for accessibility and screen readers
        car.style.width = '100%'; //newly created car is styled with the width of 100% of the cell
        car.style.height = '100%'; //newly created car is styled with the height of 100% of the cell
        car.classList.add('car'); // add a class of car to the image/ This also helps with styling and positioning
        cell.appendChild(car); //finally actually places the car image into the grid, into the cell
        car.addEventListener('click', () => { //When the car is clicked,
            if (isGameActive) { //check if the game is running.
                score++; // If it is, add 1 point to the score.
                updateScore(); //Update the score display.
                car.remove(); //Remove the car from the screen
            }
        });
        setTimeout(() => {
            car.remove();
        }, 3000); //removes car from grid after 3 seconds if not clicked
}
}


//-----------------------------------------------------------------------------------------------------------

//ADDING CLICK-TO-SCORE FUNCTIONALITY
const scoreDisplay = document.getElementById("points-earned"); //selecting and creating a variable for the score display element
//finding the element on the page with the id points-earned. Saving it to a variable. And then, this is the spot where the score will show up.

function updateScore() { //updates the score
    scoreDisplay.textContent = `Score: ${score}`; //changes the text inside the score display area
}

//-----------------------------------------------------------------------------------------------------------

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
 
    //-----------------------------------------------------------------------------------------------------------

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
    
        //WIN LOSE MESSAGE
        let message;
        if (score >=17) {
            message = 'You Win! Ninja Master!';
        } else {
            message = 'Game Over, man! You lose! Try Again.';
        }
        // const message = score >= 17 ? 'You Win! Ninja Master!' : 'Game Over, man! You lose! Try Again.'; //This is another version of the previous code I wrote. But more advanced.

        gameOverScreen.innerHTML = `<h2>${message}</h2><button id="play-again" class="buttons">Play Again!</button>`;
        document.getElementById('play-again').addEventListener('click', restartGame);
    }

    //-----------------------------------------------------------------------------------------------------------

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












// CODE GRAVEYARD ---------------------------------------------------------------
//I put my excess code and code ideas in another file since it's so large.
//If you want to see all the Code Graveyard code (thousands of lines with notes, ideas, etc), 
//you can find that on my github account under the repo name of "car-ninja-alternate-universe"


//ADDTL CODE GRAVEYARD INFO FROM DATA.JS PAGE - STILL WANT TO WORK ON THESE IDEAS AND HAVE THIS INFO HERE:

// CODE IDEAS:
//above create a startGame function within the Object like...
// startGame: function() {
//     console.log("Game started!");
// }

// Access properties
// console.log(carNinja.name); // "Ferrari Ninja"
// carNinja.startGame(); // "Game started!"

/*
INFORMATION ABOUT INCONSISTENT KEYS THAT CAN BE DELETED LATER AFTER I DELVE MORE INTO THIS AND BETTER UNDERSTAND IT:
Why Consistent Keys (e.g., text) Are Recommended

Iterating by index lets you access each object (e.g., carComments[0], carComments[1]), 
but the issue is accessing the comment text inside each object due to inconsistent keys 
(e.g. comment1, comment2, etc.). 

Here’s why this causes problems and why consistent keys help:
Problem with Inconsistent Keys
Each object has a different key (comment1, comment2, comment3, etc.), 
so to get the comment text, you need to know which key to use for each index:
carComments[0].comment1 gets “Oh noooo! I was driving to slow!”

carComments[1].comment2 gets “”, etc.

When iterating, you can’t use a single key to access the text. 
You’d need logic to match the index to the correct key 
(e.g., if index === 0, use comment1; if index === 1, use comment2), which is complex and error-prone.

For specific comment selection (e.g., picking “Oh noooo!” for a slow-driving scenario), 
you must hardcode the key (comment1) and index (0), making your function less flexible.

Why Consistent Keys Help:
Using the same key (e.g., text) for all objects means you can access the comment text with one key, regardless of index:
carComments[0].text, carComments[1].text, etc.

Iteration: In a loop (e.g., index++), you can always use carComments[index].text to get the comment, no extra logic needed.

Specific Selection: To pick a comment (e.g., “Oh noooo!”), use the index (carComments[0].text) or add an id/type property (e.g., { text: "Oh noooo!", type: "slow" }) for clarity, without needing unique keys.

Simpler Functions: A function to display or select comments can assume text as the key, making your code reusable and easier to maintain (user story #24).

Your Concern (No Confusion with Different Keys):
You think different keys (comment1, comment2) help identify comments to avoid confusion, especially for specific functions. However:
Indices Are Enough: The array’s index (0, 1, 2, ...) already identifies each comment uniquely. You can iterate with index++ and select by index (e.g., carComments[0] for “Oh noooo!”).

Unique Keys Add Complexity: Needing to know comment1 vs. comment2 in your function logic is harder than using text and relying on indices or an id property.

Example (no code): If you want “Oh noooo!” for a slow-driving function, check carComments[0].text or add { text: "Oh noooo!", id: "slow" } and filter by id, not comment1.
--Reference from chatGPT
*/

/*
MORE CODE GRAVEYARD STUFF FROM JS SECTION:









*/


// CAR NINJA GAME JS

// console.log('JS LINKED AND WORKING');

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

// ADDTL CODE FOR INSTRUCTIONS BUTTON THAT DIDN'T WORK AND COMMENTING OUT / OLDER VERSIONS
// Instructions button so it functions:
// instructionsButton.addEventListener('click', () => {
//     starterScreen.classList.remove('active');
//     gameplayScreen.classList.add('active'); 
    // instructionsScreen.classList.add('active');
// });

//getElementById - JS method that finds one specific element on page by its id name

// spawnCar is showing up in between cells and not hitting cells - Need to figure out why not working


// setInterval(spawnCar, 1000); // Spawn car every 1 second//! Commented out setInterval so that it doesn't immediately spawn cars immediately before game starts
//setInterval is a function that repeatedly calls a function at a set interval.


