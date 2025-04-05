
// Floating Hearts Animation
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 3 + 2 + "s";
    document.getElementById("hearts-container").appendChild(heart);
    setTimeout(() => {
        heart.remove();
    }, 5000);
}
setInterval(createHeart, 500);

// Music Toggle
let music = document.getElementById("bg-music");
let musicBtn = document.getElementById("music-btn");

function toggleMusic() {
    if (music.paused) {
        music.play();
        musicBtn.innerText = "🔇";
    } else {
        music.pause();
        musicBtn.innerText = "🎵";
    }
}

// Search Function (Only Shows Love Topics)
const loveTopics = [
    "Love Quotes",
    "Romantic Songs",
    "Relationship Advice",
    "Date Night Ideas",
    "Heartwarming Stories",
    "Love Poems",
    "Valentine's Day Ideas",
    "Anniversary Celebration Ideas",
    "Couple Goals",
    "Romantic Places to Visit"
];

document.getElementById("search-input").addEventListener("keyup", function () {
    let query = this.value.toLowerCase();
    let resultsBox = document.getElementById("search-results");
    resultsBox.innerHTML = "";

    if (query.length > 0) {
        loveTopics.forEach(topic => {
            if (topic.toLowerCase().includes(query)) {
                let resultItem = document.createElement("div");
                resultItem.innerText = topic;
                resultItem.classList.add("result-item");
                resultItem.onclick = function () {
                    window.open("https://www.google.com/search?q=" + encodeURIComponent(topic), "_blank");
                };
                resultsBox.appendChild(resultItem);
            }
        });

        resultsBox.style.display = "block";
    } else {
        resultsBox.style.display = "none";
    }
});

// Change Tab Color and Title when Switching Tabs
document.addEventListener("visibilitychange", function () {
    if (document.hidden) {
        document.querySelector("link[rel='icon']").href = "/static/heart-icon.png";
        document.title = "Lovers Platform❤️❤️";
    } else {
        document.title = "Lovers Platform❤️❤️";
    }
});
