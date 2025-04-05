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

// Background music control
let musicPlaying = false;
const music = new Audio('/static/love-song.mp3');
music.loop = true;

document.getElementById('music-btn').addEventListener('click', () => {
    if (musicPlaying) {
        music.pause();
        document.getElementById('music-btn').innerText = '🎵';
    } else {
        music.play();
        document.getElementById('music-btn').innerText = '🔇';
    }
    musicPlaying = !musicPlaying;
});

// Surprise Image Popup Viewer
document.getElementById('surprise-btn').addEventListener('click', () => {
    const images = [
        '/static/gf1.jpg',
        '/static/gf2.jpg',
        '/static/gf3.jpg',
        '/static/gf4.jpg',
        '/static/gf5.jpg',
        '/static/gf6.jpg',
        '/static/gf7.jpg',
        '/static/gf8.jpg',
        '/static/gf9.jpg',
        '/static/gf10.jpg'
    ];

    let current = 0;
    const popup = window.open('', '_blank', 'width=600,height=800');

    popup.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Surprise ❤️</title>
            <style>
                body {
                    margin: 0;
                    background: black;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    height: 100vh;
                    flex-direction: column;
                }
                img {
                    max-width: 90%;
                    max-height: 80%;
                    border-radius: 20px;
                    box-shadow: 0 0 20px hotpink;
                    cursor: pointer;
                }
                button {
                    margin-top: 20px;
                    padding: 10px 20px;
                    font-size: 18px;
                    border-radius: 15px;
                    background-color: hotpink;
                    color: white;
                    border: none;
                    cursor: pointer;
                }
            </style>
        </head>
        <body>
            <img id="popup-img" src="" alt="Surprise Image" />
            <button onclick="nextImage()">Next 💖</button>
            <script>
                const images = ${JSON.stringify(images)};
                let current = 0;
                const img = document.getElementById("popup-img");
                function nextImage() {
                    if (current >= images.length) {
                        window.close();
                        return;
                    }
                    img.src = images[current];
                    current++;
                }
                nextImage();
            </script>
        </body>
        </html>
    `);
});

// Love-themed fake search
document.getElementById('search-input').addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
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

    if (query.trim().length === 0) {
        resultsBox.style.display = 'none';
        return;
    }

    const filtered = loveTopics.filter(item => item.toLowerCase().includes(query));
    resultsBox.innerHTML = filtered.map(item => `<div style="padding: 10px; cursor: pointer;">${item}</div>`).join('');
    resultsBox.style.display = filtered.length ? 'block' : 'none';
});
