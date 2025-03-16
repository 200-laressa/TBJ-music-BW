// Music Player Functionality
function playTrack(src, title) {
    const player = document.getElementById("audio-player");
    player.src = src;
    player.play();
    document.getElementById("track-title").textContent = "Now Playing: " + title;
}

// Contact Form Handling
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Thank you for your message!");
    this.reset();
});
