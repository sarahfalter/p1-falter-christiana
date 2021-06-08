//Change photo based on window size
var responsive_photo = document.getElementById("responsive");

function swapPhoto() {
    if (window.innerWidth > 850) {
        responsive_photo.src = "images/about5.jpg";
    } else {
        responsive_photo.src = "images/about1.jpg";
    }
}

swapPhoto();

//This makes the swap happen if the user manually resizes the browser after load
window.addEventListener("resize", swapPhoto, false);



//Change photo based on window size
var responsive_photo2 = document.getElementById("responsive2");

function swapPhoto2() {
    if (window.innerWidth > 850) {
        responsive_photo2.src = "images/about6.jpg";
    } else {
        responsive_photo2.src = "images/about4.jpg";
    }
}

swapPhoto2();

//This makes the swap happen if the user manually resizes the browser after load
window.addEventListener("resize", swapPhoto2, false);