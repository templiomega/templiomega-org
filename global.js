const menu = document.getElementById("menu");
const navLinks = document.getElementById("navLinks");

menu.addEventListener("click", menuCheck);


function menuCheck() {

    if (menu.innerHTML == "X") {

        menu.innerHTML = "≡";
        navLinks.style.display = "none";

    }

    else if (menu.innerHTML == "≡") {

        menu.innerHTML = "X";
        navLinks.style.display = "flex";
        
    }
    
}


function goHome() {

    window.location = "./";
    
}
