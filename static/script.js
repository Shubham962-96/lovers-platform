// Floating hearts
function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (Math.random() * 2 + 3) + 's';
    heart.innerText = '❤️';
    document.getElementById('hearts-container').appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
}
setInterval(createHeart, 300);

// Background music
let musicPlaying = false;
const music = new Audio('/static/music.mp3');
music.loop = true;

document.addEventListener('DOMContentLoaded', () => {
    const musicBtn = document.getElementById('music-btn');
    if (musicBtn) {
        musicBtn.addEventListener('click', () => {
            if (musicPlaying) {
                music.pause();
                musicBtn.innerText = '🎵';
            } else {
                music.play();
                musicBtn.innerText = '🔇';
            }
            musicPlaying = !musicPlaying;
        });
    }

    const surpriseBtn = document.getElementById('surprise-btn');
    if (surpriseBtn) {
        surpriseBtn.addEventListener('click', () => {
            const popup = window.open('', '_blank', 'width=800,height=700');
            popup.document.write(`
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <title>SUPRISE 💖💖</title>
                    <style>
                        body {
                            margin: 0;
                            background: linear-gradient(135deg, #ffb6c1, #ff69b4, #ff1493);
                            background-size: 400% 400%;
                            animation: romanticBackground 15s ease infinite;
                            font-family: 'Comic Sans MS', cursive, sans-serif;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            height: 100vh;
                            flex-direction: column;
                            color: white;
                            text-shadow: 1px 1px 4px #ff1493;
                        }
                        @keyframes romanticBackground {
                            0% {background-position: 0% 50%;}
                            50% {background-position: 100% 50%;}
                            100% {background-position: 0% 50%;}
                        }
                        img {
                            width: 80%;
                            max-height: 80%;
                            border-radius: 20px;
                            box-shadow: 0 0 20px hotpink;
                            cursor: pointer;
                            margin-bottom: 20px;
                        }
                        button {
                            padding: 12px 24px;
                            font-size: 18px;
                            border-radius: 15px;
                            background-color: hotpink;
                            color: white;
                            border: none;
                            cursor: pointer;
                            box-shadow: 0 0 10px rgba(255, 105, 180, 0.7);
                        }
                        button:hover {
                            background-color: #ff85c1;
                        }
                    </style>
                </head>
                <body>
                    <img id="popup-img" src="" alt="Surprise Image" />
                    <button onclick="nextImage()">Click Next ⇢ 💖💖</button>
                    <script>
                        const images = ${JSON.stringify(popupImages)};
                        let current = 0;
                        const img = document.getElementById("popup-img");
                        function nextImage() {
                            if (current >= images.length) {
                                window.close();
                                return;
                            }
                            img.onload = () => current++;
                            img.onerror = () => {
                                alert("Could not load image.");
                                window.close();
                            };
                            img.src = images[current];
                        }
                        nextImage();
                    </script>
                </body>
                </html>
            `);
        });
    }

    const searchInput = document.getElementById('search-input');
    const resultsBox = document.getElementById('search-results');
    const loveTopics = [
        "Romantic messages for her",
        "Love quotes",
        "Date night ideas",
        "How to say I love you",
        "Cute nicknames",
        "Best couple songs",
        "Our anniversary gift ideas"
    ];

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase();
            if (query.trim().length === 0) {
                resultsBox.style.display = 'none';
                return;
            }
            const filtered = loveTopics.filter(item => item.toLowerCase().includes(query));
            resultsBox.innerHTML = filtered.map(item => `<div style="padding: 10px; cursor: pointer;">${item}</div>`).join('');
            resultsBox.style.display = filtered.length ? 'block' : 'none';
        });
    }
});
