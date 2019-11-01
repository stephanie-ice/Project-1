/*This is the word generator for index.html*/
var words = ["pineapple", "pizza", "laundry", "Italy", "puppies", "portable", "defense", "salon", "outlaw", "pottery", "chivalry", "surprise", "chemistry", "coder", "sunburn", "Bali", "princess", "artist", "pork chop", "revenge", "hotel", "kaleidoscope", "attack", "gremlin", "vampire", "rain", "author", "remix", "diva", "pudding", "NASA", "moon rocks", "sandwich", "elephant", "elevator", "fork", "forgery", "sister", "agent", "eclipse", "fall", "disguise", "unlucky", "health", "shark", "Detroit", "shark", "practical", "fantasy",];

var getRandomWord = function () {
    return words[Math.floor(Math.random() * words.length)];
};

var word = getRandomWord();

console.log(word);

document.getElementById("word").textContent = word;