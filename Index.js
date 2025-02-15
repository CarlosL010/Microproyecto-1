document.addEventListener('DOMContentLoaded', function () {
    const welcome = document.getElementById("welcome-page");
    const game = document.getElementById("game-page");
    const startbtn = document.getElementById("startbutton");
    const homebtn = document.getElementById("homebutton");
    const playerNameInput = document.getElementById("player-name");
    const scoresList = document.getElementById("scores-list");
    const clearScoresBtn = document.getElementById("clear-scores-button");
    const colorButtons = document.querySelectorAll(".color-btn");
    const startSequenceBtn = document.getElementById("start-sequence");
    const menubtn = document.getElementById("menu");
    const menupage = document.getElementById("menupage");

    let gameSequence = [];
    let playerSequence = [];
    let playerName = "";
    let level = 0;

    homebtn.addEventListener("click", function () {
        game.style.display = "none";
        welcome.style.display = "block";
    });

    function updateScoresMenu() {
        scoresList.innerHTML = '';
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            const score = localStorage.getItem(key);
            const listItem = document.createElement('li');
            listItem.textContent = `${key}: ${score} puntos`;
            scoresList.appendChild(listItem);
        }
    }

    document.getElementById('startbutton').addEventListener('click', function () {
        let audio = document.getElementById('sonido');
        audio.play();
    });

    startbtn.addEventListener("click", function (event) {
        event.preventDefault();
        playerName = playerNameInput.value.trim();
        if (!playerName) {
            alert("Por favor, ingresa tu nombre.");
            return;
        }

        welcome.style.display = "none";
        game.style.display = "block";

        if (!localStorage.getItem(playerName)) {
            localStorage.setItem(playerName, '0');
        }
    });

    homebtn.addEventListener("click", function () {
        game.style.display = "none";
        welcome.style.display = "block";
        updateScoresMenu();
    });

    clearScoresBtn.addEventListener("click", function () {
        localStorage.clear();
        updateScoresMenu();
        alert("Todos los puntajes han sido borrados.");
    });

    function updatePlayerScore() {
        let currentScore = parseInt(localStorage.getItem(playerName));
        localStorage.setItem(playerName, (currentScore + 1).toString());
    }

    function getRandomColor() {
        const colors = ["red", "blue", "green", "yellow"];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    function playSequence() {
        let delay = 1000;
        gameSequence.forEach((color, index) => {
            setTimeout(() => {
                let button = document.getElementById(color);
                let audio = document.getElementById(`${color}-sound`);
                button.classList.add("active");
                audio.play();
                setTimeout(() => {
                    button.classList.remove("active");
                }, 800);  // Aumenté el tiempo aquí para asegurarme de que el sonido y el color se sincronicen.
            }, delay * (index + 1));
        });
    }

    function checkPlayerInput() {
        for (let i = 0; i < playerSequence.length; i++) {
            if (playerSequence[i] !== gameSequence[i]) {
                alert("Juego terminado. Tu puntuación: " + level);
                gameSequence = [];
                playerSequence = [];
                level = 0;
                return;
            }
        }
        if (playerSequence.length === gameSequence.length) {
            updatePlayerScore();
            level++;
            playerSequence = [];
            setTimeout(nextRound, 1000);
        }
    }

    function nextRound() {
        gameSequence.push(getRandomColor());
        playSequence();
    }

    colorButtons.forEach(button => {
        button.addEventListener("click", function () {
            let color = this.id;
            let audio = document.getElementById(`${color}-sound`);
            playerSequence.push(color);
            audio.play();
            checkPlayerInput();
        });
    });

    startSequenceBtn.addEventListener("click", function () {
        gameSequence = [];
        playerSequence = [];
        level = 0;
        nextRound();
    });

    updateScoresMenu();
});
