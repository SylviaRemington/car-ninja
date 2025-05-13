//Below is data for putting funny car insult comments and also congratulatory comments.

//ADDTL REMINDERS AND IDEAS:
//objects have key:valuePairs syntax,
//create a randomization of pulling these comments. Figure out how to do that in JS.

const carComments = [
    { text: "Oh noooo! I was driving to slow!" },//AI is saying I need consistent keys here and to name them all "text"/ask about this
    { text: "Bad cybertruck! Bad!" },
    { text: "What are you doing on the road, cybertruck? You don't fit!" },
    { text: "Slow drivers! Hiiiiya!!!" },
    { text: "Why are you driving slowly in the fast lane?!" } //Took off trailing comment here. Even though comma works with modern JS, doesn't work for older environments.
];

//This!.. is a CYBERTRUCK! CHOP IT! --EASTER EGG DOUG DEMURO CAR GUY & HIS INTONATION

const carClickCommentSounds = [
    {text: "hiyyyyyyyaaaaaaa!"},
    {text: "NINJA CHOP!"},
    {text: "kapow!"},
    {text: "Splat!"},
    {text: "Wham!"},
    {text: "Whack!"},
    {text: "Slice!"},
    {text: "Swoosh!"},
    {text: "Snap!"},
    {text: "Crack!"},
    {text: "Zing!"},
    {text: "Zoom!"},
    {text: "Bam!"},
    {text: "Ping!"},
    {text: "Smack!"},
    {text: "Strike!"},
    {text: "Crush!"},
    {text: "Flash!"},
    {text: "Silence. Target destroyed!"},
    {text: "Zoomf!"},
    {text: "Boomf!"},
    {text: "Chop Chop!"},
]

const congratsComments = [
    { text: "You're technique is very strong!" },
    { text: "You are like the Iron Fist, chopping through cars and saving people from horrible drivers!" },
    { text: "You are like Wolverine, cutting all these cars in half!" },
    { text: "You're doing grrrrreat!" },
    { text: "ALRIIIIGHT, YOU'VE CHOPPED ALL THE CYBERTRUCKS" },
    { text: "CHOPPING THE CAR CHOPPING THE CAR" }//BREAKING THE LAW SONG
];


const gameOverComments = [
    {text: "Gameover, man! Gameover!"}, //from the movie Aliens2. Maybe also add "Why don't you put her in charge?!"
    {text: "Dooooooooooooooode"},
    {text: "Breh, you're not good at this."},
    {text: "Beavis, I'm disappointed in you."},
    {text: "Settle down, Beavis, you lost"},
    {test: "Simmah down now! Simmah down nah!"}
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


