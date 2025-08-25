const menu = document.getElementById("menu");
const navLinks = document.getElementById("navLinks");
const gospelImg = document.getElementById("gospelImg");

let imgInt = 0;

const gospelImages = [

    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg"

]

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


function changeGospelImg() {

    gospelImg.src = gospelImages[imgInt];
    imgInt++;

    if (imgInt > gospelImages.length - 1) {

	imgInt = 0;

    }

    setTimeout(changeGospelImg, 3000);

}


function goHome() {

    window.location = "./";
    
}


setTimeout(changeGospelImg, 3000);
