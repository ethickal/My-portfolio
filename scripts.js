let currentImageIndex = 0;
let images = [];  // Array to store images for the current project

// Open modal for images
function openModal(element) {
    var modal = document.getElementById("imageModal");
    var modalImg = document.getElementById("modalImage");
    var caption = document.getElementById("caption");

    modal.style.display = "block";

    // Get all the images within the current project item
    const projectImages = element.querySelectorAll("img");
    
    // Populate the images array with the src of all project images
    images = Array.from(projectImages).map(img => img.src);

    // Set the first image to show in the modal
    modalImg.src = images[currentImageIndex];

    // Set the caption (optional)
    caption.innerHTML = element.querySelector("h3") ? element.querySelector("h3").innerHTML : '';
}

// Close modal when the '×' button is clicked
function closeModal() {
    var modal = document.getElementById("imageModal");
    modal.style.display = "none";
}

// Change the image based on the direction (next or previous)
function changeImage(direction) {
    // Update the index to show the next or previous image
    currentImageIndex += direction;

    // Ensure the index stays within the bounds of available images
    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;  // Go to the last image
    } else if (currentImageIndex >= images.length) {
        currentImageIndex = 0;  // Go back to the first image
    }

    // Set the new image in the modal
    var modalImg = document.getElementById("modalImage");
    modalImg.src = images[currentImageIndex];
}

// Toggle the navigation menu on mobile
function toggleMenu() {
    var navbar = document.getElementById("navbar");
    navbar.classList.toggle("show");
}