/*This is the modal functionality for workshops.html; 
when <li> is clicked on, then the modal pops-up*/

var listEl1 = document.getElementById("workshop1");
var modal1 = document.getElementById("modal1");
var closeBtn = document.getElementsByClassName(".close-button");
/*This is the click event*/

listEl1.onclick = function() {
    modal1.style.display = "flex";
}

closeBtn.onclick = function() {
    modal1.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
    }
}

/*This is the word generator for index.html*/
var words = ["pineapple", "pizza", "laundry", "Italy", "puppies", "portable", "defense", "salon", "outlaw", "pottery", "chivalry", "surprise", "chemistry", "coder", "sunburn", "Bali", "princess", "artist", "pork chop", "revenge", "hotel", "kaleidoscope", "attack", "gremlin", "vampire", "rain", "author", "remix", "diva", "pudding", "NASA", "moon rocks", "sandwich", "elephant", "elevator",];

var getRandomWord = function () {
    return words[Math.floor(Math.random() * words.length)];
};

var word = getRandomWord();

console.log(word);

document.getElementById("word").textContent = word;