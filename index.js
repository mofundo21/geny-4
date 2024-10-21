// Array of MOFUNDO image URLs from Google Drive
const mofundoImages = [
    https://drive.google.com/file/d/1rX2x6tlrXkL5wO7uwJbsx7bJgpcGEkdh/view?usp=drive_link
    https://drive.google.com/file/d/1INOJaBCxZKJtDFaVnGNOKdemyBmpwpZ7/view?usp=drive_link
    ,https://drive.google.com/file/d/15TEMCHf2yrJEKFUGR7xSCCxrDJTDsRlj/view?usp=drive_link
    // Add more images as needed
];

// Get the button, image element, and download link
const generateBtn = document.getElementById('generate-btn');
const mofundoImage = document.getElementById('mofundo-image');
const downloadLink = document.getElementById('download-link');

// Function to generate a random image
generateBtn.addEventListener('click', function() {
    // Pick a random image from the array
    const randomIndex = Math.floor(Math.random() * mofundoImages.length);
    const selectedImage = mofundoImages[randomIndex];
    
    // Set the selected image in the img tag
    mofundoImage.src = selectedImage;
    mofundoImage.style.display = "block"; // Show the image
    
    // Update the download link
    downloadLink.href = selectedImage;
    downloadLink.style.display = "inline-block"; // Show the download link
});
