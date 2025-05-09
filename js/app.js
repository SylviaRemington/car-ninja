// CAR NINJA GAME JS

//The code in the app adheres to coding conventions covered in lessons, 
// like using plural names for arrays.

// Render the game in the browser using the DOM manipulation techniques 
// demonstrated in lecture.

// The game is coded using proper indentation.

//!! MAIN FOCUS IS ON MVP AND GETTING GAMEPLAY SCREEN TO WORK

console.log('JS LINKED AND WORKING');

/*------------------------- Temporary Code to Have Gameplay Screen as active -------------------*/
// Find gameplay screen
const gameplayScreen = document.getElementById('gameplay-screen');

// Show gameplay screen
gameplayScreen.classList.add('active');

// Creating gameGrid
/* Using tools/example Tristan showed in class and this is the html I created for this previously <div id="game-grid"></div> */
const gameGrid = document.querySelector("#game-grid");//grabbing the grid in html
const width = 12; // columns - width usually refers to how many columns are in each row. 12 columns * 12 rows = 144 squares total
const height = 4; // rows
const cellCount = width * height; //12 * 4 = 48
const cells = [];

function createGrid() {
        for (let i = 0; i < cellCount; i++) {
                const cell = document.createElement("div");
                cell.textContent = i;
                cells.push(i);
                gameGrid.appendChild(cell);//append it to the DOM
        }
}
createGrid();




/*-------------------------------- Constants --------------------------------*/
//for creating a new element and saving it in memory
//e.g. const clickToAddParagraphButton = document.createElement('button')





/*-------------------------------- Variables --------------------------------*/

// let pointsEarned = '';

// Store score/lives in variables (score, lives).






/*------------------------ Cached Element References ------------------------*/
//Things I want to select so I can do something with them.
//e.g. const button = document.querySelector('button');
//e.g. const title = document.querySelector ('h1');

//button to start game
//button to adjust game speed
//button for fun facts --randomized
//selecting points earned area (might not be a button but something else)
//click on cars to create getting points (can you create a car as a button? Or an image?)






/*-------------------------------- Functions --------------------------------*/
//What it should do... e.g. text in the title should update
//e.g. function updateTitle(){
        // title.textContent = "Updated"}; 

//Create a function that connects to a different page to start the game
//Create a function that randomizes fun facts
//Create a function to add points earned
//Create a function that gives you instructions when you click on the Basic Instructions button

// USE THIS:
// updateScore() and updateLives() functions






/*----------------------------- Event Listeners -----------------------------*/
//e.g. button.addEventListener('click', updateTitle); //when you click on the button, it will update the title

//listen for clicks to create instructions
//listen for clicks to start game //Do they all have to be separate event listeners?
//listen for click to adjust game speed







//The part showing starting and ending game
//The part showing the "playing of the game/gameplay"
//Make subfunction categories - like button functions/ ninja functions/ word bubble functions/ sound functions


































// CODE GRAVEYARD
// HTML CODE GRAVEYARD /*----------------------------- HTML Code Graveyard -----------------------------*/
// HTML CODE GRAVEYARD /*----------------------------- HTML Code Graveyard -----------------------------*/
/*

TITLES FOR HTML COMMENTED OUT. I USED A LOT OF COMMENTS SO TRANSPLANTING THEM HERE IN CASE I WANT TO USE THEM AGAIN.
<!-- Header holds the game's title / Wanted to use Semantic Elements in HTML for better visibility & SEO on search engines. -->
<!-- Using Nav Bar for buttons at the top instead of div - better navigation for all & easier readbility for SEO/other coders-->
<!-- MAIN GAME SCREENS - houses the game's 4 screens of the Starter Screen, the Instructions Screen, the Gameplay Screen, and the GameOver Screen -->
 <!-- STARTER SCREEN -- chose to do section instead of div for each screen for better SEO & readibility -->
<!-- INSTRUCTIONS SCREEN -->
<!-- GAMEPLAY SCREEN -->
<!-- SCORE DISPLAY - recommended to use span because inline and because it's dynamic text-->
<!-- GAME-GRID -->
<!-- GAMEOVER SCREEN... have Bill Paxton saying "Game Over Man! Game Over! Why don't we put her in charge?" -->
<!-- FOOTER (perhaps only Visible on GAMEOVER SCREEN - where post-game actions live) -->

-----------------------------------------

IDEAS FOR "FUTURE PROOFING" MY CODE THAT I NEED TO FURTHER LOOK INTO SINCE IT WAS MENTIONED IN AI AS SUGGESTIONS:
<!-- AI suggestion for me improving this code. Need to look into this:
Image Optimization:
Consider adding loading="lazy" to game images
Add width and height attributes to maintain layout

Future-Proofing:
Add empty <div id="countdown"></div> for your "3-2-1" timer
Consider adding data- attributes for game state (e.g., data-score="0")

INFO ABOUT ADDING LAZY TO IMAGES FOR GAMING:
What loading="lazy" Means for Images
The loading="lazy" attribute is a performance optimization that tells the browser to delay loading an image until it's about to appear in the viewport (the visible part of the webpage). Here's why and how to use it in your game:
Key Benefits for Your Game
Faster Initial Load
Images load only when needed (e.g., when the player reaches the gameplay screen).
Reduces data usage and speeds up page startup.
Better Performance
Prevents loading all images (cars/potholes) upfront, which can slow down older devices.
Smoother Experience
Avoids stuttering when many images load simultaneously.-->

-----------------------------------------

CHANGING BUTTONS TO SCORE DISPLAY - FOR POINTS EARNED & TRIES LEFT
        <button id="points-earned" class="buttons">Points Earned</button> <!-- This Points Earned Button might be taken away, and instead use a SCORE DISPLAY or SCORE COUNTER -->
        <button id="tries-left" class="buttons">Tries Left Before Gameover</button><!-- This Tries Left Button might be taken away, and instead use a SCORE DISPLAY or SCORE COUNTER -->
        <!--Grok ai told me about better practices to use <span>s(class="display")for score and live displays as they are not interactive.
         <span id="points-earned" class="display">Score: 0</span>
        <span id="tries-left" class="display">Lives: 3</span> -->

When making a simple video game, using a score display (like text on the screen) instead of buttons is better because:
Buttons are for player input – Buttons are meant to be clicked or pressed by the player (like "Start" or "Pause").
Scores update automatically – The score changes quickly as the player earns points, so displaying it as text is cleaner and faster.
Less confusing – A button implies you can interact with it, but the score is just information.

-------------

            <!-- SCORE DISPLAY - recommended to use span because inline and because it's dynamic text-->
            <div class = "score-display"> <!-- Using class instead of id for reusability, in case create another screen with points earned. -->
                <span id="points-earned">Points Earned: 0</span>
                <!-- Could also change this to Score: 0 for better readability and simplicity-->
                <span id="tries-left">Tries Left: 3</span>
                <!-- Could also change this to Lives: 3 for better readability and simplicity -->
                CHANGING TO SCORE AND LIVES BECAUSE THESE ARE THE MOST COMMON TERMS IN GAMING

--------------

    <!-- MAIN GAME SCREENS - houses the game's 3 screens of the Starter Screen, the Instructions Screen, the Gameplay Screen, and the GameOver Screen -->
    <!-- The good stuff is in main...woot woot -->

-------------

May use these tabs for addtl parts of the website if I have time in the future:
    <section></section>
    <aside></aside>

-------------

LEVEL UP - ADDING FAKE FUNNY ADS TO NINJA CHOP - CREATE THIS LATER IF HAVE TIME
ADD THIS BACK FOR LEVEL UP! :)
        <!-- <button id="ninja-ads" class="buttons">Ads?! Ninja Chop Them!</button> -->
        <!-- create funny ads that pop up and then you ninja chop them randomly whether in the game or outside the game. -->

------------

CHANGING THIS CODE TO AN ORDERED LIST
        <!-- INSTRUCTIONS SCREEN -->
        <section id="instructions-screen" class="screen">
            <h2>Instructions</h2>
            <p>1. Click cars to score points. Don't you wanna get slow drivers, bad drivers, and cybertrucks off the road?</p>
            <p>2. Avoid potholes to keep lives. If you click on a pothole, you lose a life!</p>
            <p>3. Score 10+ points in 30 seconds to win!</p>


        ALSO TRIED THIS BUT IT LOOKED WEIRD... TRYING TO NAME AN OL DOESN'T SEEM TO WORK
        <!-- INSTRUCTIONS SCREEN -->
        <section id="instructions-screen" class="screen">
            <h2>Instructions</h2>
            <ol>Your challenge if you choose to accept it:
                <li>Click cars to score points. Don't you wanna get slow drivers, bad drivers, and cybertrucks off the road?</li>
                <li>Avoid potholes to keep lives. If you click on a pothole, you lose a life!</li>
                <li>Score 10+ points in 30 seconds to win!</li>
            </ol>

---------------

Also, just had an ai review my html on 5/8/25 and this is what they came up with:

Your HTML code is well-structured and functional - you're absolutely ready to start working on CSS and JavaScript! Here's a quick review:
✅ What's Working Great:

Perfect Document Structure
Correct DOCTYPE, html with lang, head with metadata, and body
Excellent semantic HTML (header, nav, main, footer, section)
Game Architecture
Clear screen separation (starter/instructions/gameplay/gameover)
Properly organized score display and game grid
Good button structure for controls
Readiness for CSS/JS
Logical ID/class naming (#points-earned, .score-display)
External files properly linked (app.js, data.js, style.css)

*/





// CSS CODE GRAVEYARD /*----------------------------- CSS Code Graveyard -----------------------------*/
// CSS CODE GRAVEYARD /*----------------------------- CSS Code Graveyard -----------------------------*/

/*

 ORIGINALLY FOR HEADER H1 trying this - Wanted to create a glimmer effect but it didn't hold up to the following standards: 
 Colors used on the site have appropriate contrast that meet the WCAG 2.0 level AA standard.
    font-size: 2.5em; chose em so that this h1 could scale with responsive designs depending on if computer or phone
    background: linear-gradient(to right, green, blue);
    display: flex;
    justify-content: center; 
    display: inline-block; Gradient hugs text
    padding: 0.2em 0.5em; Adds space around text

---------------------


/*******************************
  HIDING SCREENS -- original code, but changing it to .active to make screens more useable. Might go back to this.
********************************/
// .screens {
//         display: none;
//     }
    
//     #gameplay-screen {
//         display: block;
//     }


// ---------------------


/*****************************
 GRID //trying to figure out how to do grid again... gah!
*****************************/
// #game-grid {
//         display: grid;
//     }


//______________________________


//  FOR SCORE WHEN WITHIN GAME GRID... BUT THIS ONE MAKES ACCESSIBILITY HARD CAUSE OVERLAY:
//  .score-display {
//     position: absolute; Overlay on top of the game 
//     top: 10px;
//     left: 10px;
//     color: white;
//     font-size: 24px;
//     font-family: Arial, sans-serif;
//     background: rgba(0, 0, 0, 0.5); /* Semi-transparent background 
//     padding: 10px;
//     border-radius: 5px;
// }

// #points-earned, #tries-left {
//     margin-right: 20px; Space between score and lives
// }

// ------------------------------


/* ADDTL STUFF TRIED BUT DIDN'T WORK FOR WHAT I WAS TRYING TO CREATE
Remove default margins/padding */
// #instructions-screen p,
// #instructions-screen ol {
//   margin: 0;          /* Resets top/bottom margins */
//   padding: 0;         /* Resets left/right padding */
// }

/* Add custom spacing ONLY where needed */
// #instructions-screen p {
//   margin-bottom: 8px; /* Tight gap after the phrase */
// }

// #instructions-screen ol {
//   margin-top: 4px;    /* Small gap before the list */
//   padding-left: 20px; /* Adjust indentation */
// }

// -------------------------------




// JS CODE GRAVEYARD /*----------------------------- JS Code Graveyard -----------------------------*/
// JS CODE GRAVEYARD /*----------------------------- JS Code Graveyard -----------------------------*/

/*
GRID INFO
12 across × 4 down (48 cells) layout works great for certain types of games, especially:
✅ It’s Good For:
Click-to-score games like your car game (think of it like a 4-lane highway across 12 positions)
Fast reaction/timing games where cars “appear” in lanes to be clicked
Visually clear layouts without overwhelming the player

🧠 Why It Works:
12 columns gives you plenty of left-to-right space (like road lanes).
4 rows gives enough room to visually show different car positions.
Keeps it simple and focused — you’re not overwhelmed by too many squares.

🚧 When It Might Be Too Small:
If you later add movement/animation and want cars to visibly “travel” down a long path
If you want more complex mechanics like obstacles or combo scoring
✅ But for your current goal (clicking cars on screen), 12 × 4 is a solid choice.




*/

// DATA.JS CODE GRAVEYARD / // JS CODE GRAVEYARD /*----------------------------- DATA.JS CODE GRAVEYARD  -----------------------------*/
// DATA.JS CODE GRAVEYARD / // JS CODE GRAVEYARD /*----------------------------- DATA.JS CODE GRAVEYARD  -----------------------------*/
/*





*/

// README CODE GRAVEYARD / //  /*----------------------------- README CODE GRAVEYARD  -----------------------------*/
// README CODE GRAVEYARD / //  /*----------------------------- README CODE GRAVEYARD  -----------------------------*/
/*





*/

// LICENSE CODE GRAVEYARD / //  /*----------------------------- LICENSE CODE GRAVEYARD-----------------------------*/
// LICENSE CODE GRAVEYARD / //  /*----------------------------- LICENSE CODE GRAVEYARD-----------------------------*/
/*





*/