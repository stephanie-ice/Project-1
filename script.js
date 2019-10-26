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