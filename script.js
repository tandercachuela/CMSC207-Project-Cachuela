document.getElementById("click-me-btn").addEventListener("click", function() {
    var content = document.getElementById("fun-fact");
    content.classList.toggle("visible");

    if (content.classList.contains("visible")) {
        content.style.display = "block";
        this.textContent = "Hide this...";
    } else {
        content.style.display = "none";
        this.textContent = "Fun Fact...";
    }
});