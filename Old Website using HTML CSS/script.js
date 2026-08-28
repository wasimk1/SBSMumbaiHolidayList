// Get the modal element
const modal = document.getElementById("imageModal");

// Get the image and insert it inside the modal
const modalImg = document.getElementById("modalImage");
const images = document.getElementsByClassName("zoomable");

// Loop through all images with the "zoomable" class
for (let i = 0; i < images.length; i++) {
  images[i].onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
  }
}

// Get the <span> element that closes the modal
const closeBtn = document.getElementsByClassName("close-button")[0];

// When the user clicks on <span> (x), close the modal
closeBtn.onclick = function() {
  modal.style.display = "none";
}

// Also close the modal if the user clicks on the background
modal.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
}