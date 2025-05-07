//data for putting car comments and also congratulatory comments


//objects have key:valuePairs,
//create a randomization of pulling these comments. Figure out how to do that in JS.
const carComments = [
    { comment1: "Oh noooo! I was driving to slow!" },//AI is saying I need consistent keys here and to name them all "text"/ask about this
    { comment2: "" },
    { comment3: "" },
    { comment4: "" },
    { comment5: "" } //Took off trailing comment here. Even though comma works with modern JS, doesn't work for older environments.
];


const congratsComments = [
    { congrats1: "You're technique is very strong!" },
    { congrats2: "" },
    { congrats3: "" },
    { congrats4: "" },
    { congrats5: "" }
];


const gameOverComments = [
    {gameOverComment1: "Gameover, man! Gameover!"}, //from the movie Aliens2. Maybe also add "Why don't you put her in charge?!"
    {gameOverComment2: "Dooooooooooooooode"},
    {gameOverComment3: ""},
    {gameOverComment4: ""},
    {gameOverComment5: ""} 
];


const carChoiceNinja = [
{
    name: "Ferrari Ninja",
    speed: 120, //or could do a string "The speed of sound."
    weapons: ["Sword", "Ninja Stars/Throwing Stars", "Nunchucks"],
    locations: ["Rome", "Australia", "Nepal", "Japan", "Underground", "Under water"], //where car typically likes to drive
},

{
    name: "Cybertruck Trashcan",
    speed: 20,
    weapons: "I'm a cybertruck. I look like a big weapon",
    locations: ["Rome", "Australia", "Nepal", "Japan", "Underground", "Under water"], 
}
];
//above create a startGame function within the Object like...
// startGame: function() {
//     console.log("Game started!");
// }

// Access properties
// console.log(carNinja.name); // "Ferrari Ninja"
// carNinja.startGame(); // "Game started!"

