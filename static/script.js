/* General Background */
body {
    background: url("/static/background.jpg") no-repeat center center fixed;
    background-size: cover;
    text-align: center;
    font-family: Arial, sans-serif;
    color: white;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
}

/* Title */
#title {
    font-size: 100px;
    font-weight: bold;
    margin: 20px auto;
    text-shadow: 2px 2px 10px rgba(255, 0, 0, 0.8);
}

/* Search Form */
#search-form {
    display: flex;
    justify-content: center;
    margin-top: 20px;
    flex-direction: column;
    align-items: center;
}

#search-input {
    width: 400px;
    padding: 15px;
    font-size: 22px;
    border-radius: 25px;
    border: 2px solid white;
    outline: none;
    text-align: center;
    background: rgba(255, 255, 255, 0.3);
    color: white;
    margin-bottom: 10px;
}

#search-results {
    position: absolute;
    width: 400px;
    background: rgba(255, 255, 255, 0.9);
    border-radius: 10px;
    display: none;
    text-align: left;
    max-height: 200px;
    overflow-y: auto;
    font-size: 18px;
    color: black;
    margin-top: 5px;
    z-index: 5;
}

/* Carousel */
.carousel-container {
    max-width: 90%;
    margin: 50px auto;
    overflow-x: auto;
    white-space: nowrap;
}

.carousel-image {
    width: 300px;
    margin: 10px;
    border-radius: 15px;
    display: inline-block;
    box-shadow: 0 0 15px rgba(255, 105, 180, 0.8);
    transition: transform 0.3s;
}

.carousel-image:hover {
    transform: scale(1.05);
}

/* Floating Hearts */
#hearts-container {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
    overflow: hidden;
    z-index: 1;
}

.heart {
    position: absolute;
    color: red;
    font-size: 20px;
    animation: float 5s linear infinite;
}

@keyframes float {
    0% {
        transform: translateY(100vh);
        opacity: 1;
    }
    100% {
        transform: translateY(-10vh);
        opacity: 0;
    }
}

/* Buttons */
#music-btn, #surprise-btn {
    position: fixed;
    bottom: 20px;
    padding: 15px 25px;
    font-size: 20px;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    z-index: 10;
    box-shadow: 0 0 10px rgba(255, 105, 180, 0.7);
    transition: all 0.3s ease;
}

#music-btn {
    right: 100px;
    background-color: hotpink;
    color: white;
}

#music-btn:hover {
    background-color: deeppink;
}

#surprise-btn {
    right: 20px;
    background-color: lightgray;
    color: black;
}

#surprise-btn:hover {
    background-color: #f8f8f8;
    box-shadow: 0 0 15px pink;
}

/* Responsive Text Size */
@media (max-width: 768px) {
    #title {
        font-size: 60px;
    }

    #search-input {
        width: 80%;
        font-size: 18px;
    }

    #search-results {
        width: 80%;
    }

    .carousel-image {
        width: 250px;
    }

    #music-btn, #surprise-btn {
        font-size: 16px;
        padding: 10px 20px;
    }
}

/* Dark Mode Theme */
@media (prefers-color-scheme: dark) {
    body {
        background-color: #ff6b81;
    }

    #search-input {
        border: 2px solid pink;
        background: rgba(255, 255, 255, 0.2);
        color: white;
    }

    #search-results {
        background: rgba(255, 255, 255, 0.95);
    }
}
