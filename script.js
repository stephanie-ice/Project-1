// var listEl1 = document.getElementById("workshop1");
// var listEl2 = document.getElementById("workshop2");
// var listEl3 = document.getElementById("workshop3");
// var listEl4 = document.getElementById("workshop4");
// var listEl5 = document.getElementById("workshop5");

    
// listEl1.onclick = function() {
//     var modal = document.getElementById("modal1")
//     modal.style.display = "flex"; 

//     window.onclick = function(event) {
//         if (event.target == modal) {
//             modal.style.display = "none";
//         }
//     };
// };
    
// listEl2.onclick = function() {
//     var modal = document.getElementById("modal2")
//     modal.style.display = "flex"; 

//     window.onclick = function(event) {
//         if (event.target == modal) {
//             modal.style.display = "none";
//         }
//     };
// };

// listEl3.onclick = function() {
//     var modal = document.getElementById("modal3")
//     modal.style.display = "flex"; 

//     window.onclick = function(event) {
//         if (event.target == modal) {
//             modal.style.display = "none";
//         }
//     };
// };

// listEl4.onclick = function() {
//     var modal = document.getElementById("modal4")
//     modal.style.display = "flex"; 

//     window.onclick = function(event) {
//         if (event.target == modal) {
//             modal.style.display = "none";
//         }
//     };

// };

// listEl5.onclick = function() {
//     var modal = document.getElementById("modal5")
//     modal.style.display = "flex"; 

//     window.onclick = function(event) {
//         if (event.target == modal) {
//             modal.style.display = "none";
//         }
//     };
// };

/*This is the word generator for index.html*/
var words = ["pineapple", "pizza", "laundry", "Italy", "puppies", "portable", "defense", "salon", "outlaw", "pottery", "chivalry", "surprise", "chemistry", "coder", "sunburn", "Bali", "princess", "artist", "pork chop", "revenge", "hotel", "kaleidoscope", "attack", "gremlin", "vampire", "rain", "author", "remix", "diva", "pudding", "NASA", "moon rocks", "sandwich", "elephant", "elevator", "fork", "forgery", "sister", "agent", "eclipse", "fall", "disguise", "unlucky", "health", "shark", "Detroit", "shark", "practical", "fantasy",];

var getRandomWord = function () {
    return words[Math.floor(Math.random() * words.length)];
};

var word = getRandomWord();

console.log(word);

document.getElementById("word").textContent = word;