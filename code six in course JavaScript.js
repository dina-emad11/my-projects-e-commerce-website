let clockInterval = null;

const startBtn = document.getElementById("startBtn");
const clockDiv = document.getElementById("clockDiv");

startBtn.addEventListener("click", function() {
    alert("Clock Started");
    
    
    if (clockInterval) clearInterval(clockInterval);

    updateClock();
    clockInterval = setInterval(updateClock, 1000);
});


function updateClock() {
    const now = new Date();
    
    clockDiv.innerText = now.toLocaleTimeString(); 
}


document.addEventListener("keydown", function(event) {
    if (event.altKey && (event.key === 'w' || event.key === 'W')) {
        if (clockInterval) {
            clearInterval(clockInterval); 
            clockInterval = null;
            alert("Clock stopped");
        }
    }
});


const firstNameInput = document.getElementById("firstName");

firstNameInput.addEventListener("keydown", function(event) {
    
    const allowedKeys = ["Backspace", "Delete", "ArrowLeft", "ArrowRight", "Tab"];
    if (allowedKeys.includes(event.key)) return;


    if (event.key >= '0' && event.key <= '9') {
        event.preventDefault();
    }
});


const images = [
    "./Images/imag1.jpeg",
    "./Images/imag2.jpeg",
    "./Images/imag3.jpeg",
    "./Images/ai2.jpeg"
];

let currentIndex = 0;
let galleryInterval = null;

const mainImage = document.getElementById("mainImage");
const playBtn = document.getElementById("playBtn");
const stopBtn = document.getElementById("stopBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");


function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    mainImage.src = images[currentIndex];
}


function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    mainImage.src = images[currentIndex];
}


function startGallery() {
    if (!galleryInterval) {
        galleryInterval = setInterval(nextImage, 1000);
    }
}


function stopGallery() {
    if (galleryInterval) {
        clearInterval(galleryInterval);
        galleryInterval = null;
    }
}


playBtn.addEventListener("click", startGallery);
stopBtn.addEventListener("click", stopGallery);
nextBtn.addEventListener("click", nextImage);
prevBtn.addEventListener("click", prevImage);


mainImage.addEventListener("mouseenter", function() {
    startGallery();

    mainImage.style.opacity = "0.3"; 
});


mainImage.addEventListener("mouseleave", function() {
    stopGallery();
    
    mainImage.style.opacity = "1"; 
});
