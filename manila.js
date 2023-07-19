// Array of image URLs
const images = ["1.jpeg","2.jpeg","4.jpeg"];

// DOM element
const image = document.getElementById("image");

let currentIndex = 0;
const intervalTime = 3000; // Interval time in milliseconds

// Function to update the image source
function updateImage() {
  image.src = images[currentIndex];
}

// Function to switch to the next image
function nextImage() {
  currentIndex++;
  if (currentIndex >= images.length) {
    currentIndex = 0;
  }
  updateImage();
}

// Automatic image switching
setInterval(nextImage, intervalTime);

// Initial image update
updateImage();


 const runningText = document.getElementById("running-text");
runningText.textContent = "Cebu city, Quezon city.";
   




