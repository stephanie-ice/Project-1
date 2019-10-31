
    var listEl1 = document.getElementById("workshop1");
    var listEl2 = document.getElementById("workshop2");
    var listEl3 = document.getElementById("workshop3");
    var listEl4 = document.getElementById("workshop4");
    var listEl5 = document.getElementById("workshop5");

    
    listEl1.onclick = function() {
        var modal = document.getElementById("modal1")
        modal.style.display = "flex"; 

        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        };
    };
    
    listEl2.onclick = function() {
        var modal = document.getElementById("modal2")
        modal.style.display = "flex"; 

        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        };
    };

    listEl3.onclick = function() {
        var modal = document.getElementById("modal3")
        modal.style.display = "flex"; 

        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        };
    };

    listEl4.onclick = function() {
        var modal = document.getElementById("modal4")
        modal.style.display = "flex"; 

        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        };

    };

    listEl5.onclick = function() {
        var modal = document.getElementById("modal5")
        modal.style.display = "flex"; 

        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        };
    };
    


    
