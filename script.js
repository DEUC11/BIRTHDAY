function viewImage(image) {
    var modal = document.getElementById('imageModal');
    var modalImage = document.getElementById('modalImage');
    var caption = document.getElementById('caption');
    
    modal.style.display = "block";
    modalImage.src = image;
    caption.textContent = "";  // Clear caption for image modal
}

function showBirthdayMessage() {
    var modal = document.getElementById('imageModal');
    var modalImage = document.getElementById('modalImage');
    var caption = document.getElementById('caption');
    
    modal.style.display = "block";
    modalImage.src = "";  // Clear the image src
    caption.innerHTML = `
        <div class="birthday-message">
            <h1>Happy Birthday, Dad!</h1>
            <p>Another year older, another year wiser. Thank you for doing the very best you can to support us in every way. We will always be grateful. Thank you for being the father that stepped up, I will never be who I am today without your endless love, support and wisdom. Please do enjoy your day. Love you so much!</p>
        </div>
    `;
}

function closeModal() {
    var modal = document.getElementById('imageModal');
    modal.style.display = "none";
}