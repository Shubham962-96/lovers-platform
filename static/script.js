// Floating Hearts
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 3 + 2 + "s";
    document.getElementById("hearts-container").appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
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

// Love Topics Search
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

// Tab change effects
document.addEventListener("visibilitychange", function () {
    if (document.hidden) {
        document.querySelector("link[rel='icon']").href = "/static/heart-icon.png";
        document.title = "Lovers Platform❤️❤️";
    } else {
        document.title = "Lovers Platform❤️❤️";
    }
});

// Surprise Button Popup
function openSurprise() {
    const popup = window.open("", "_blank", "width=600,height=600");

    popup.document.write(`
        <html>
        <head>
            <title>❤️ Surprise Photos ❤️</title>
            <style>
                body {
                    background-color: pink;
                    margin: 0;
                    padding: 0;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                    height: 100vh;
                    font-family: Arial, sans-serif;
                }
                img {
                    max-width: 90%;
                    max-height: 70vh;
                    border-radius: 10px;
                    box-shadow: 0 0 10px rgba(0,0,0,0.5);
                }
                button {
                    margin-top: 20px;
                    padding: 10px 20px;
                    font-size: 18px;
                    background: white;
                    border: none;
                    border-radius: 10px;
                    cursor: pointer;
                    box-shadow: 0 0 5px rgba(0,0,0,0.3);
                }
            </style>
        </head>
        <body>
            <img id="popup-image" src="/static/images/her1.jpg" alt="Photo" />
            <button onclick="nextImage()">Next ❤️</button>
            <script>
                let images = [
                    "/static/images/her1.jpg",
                    "/static/images/her2.jpg",
                    "/static/images/her3.jpg",
                    "/static/images/her4.jpg",
                    "/static/images/her5.jpg",
                    "/static/images/her6.jpg",
                    "/static/images/her7.jpg",
                    "/static/images/her8.jpg",
                    "/static/images/her9.jpg",
                    "/static/images/her10.jpg"
                ];
                let index = 0;
                function nextImage() {
                    index = (index + 1) % images.length;
                    document.getElementById("popup-image").src = images[index];
                }
            <\/script>
        </body>
        </html>
    `);
}
