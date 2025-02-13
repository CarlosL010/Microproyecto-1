document.addEventListener('DOMContentLoaded', function() {
    const welcome = document.getElementById("welcome-page");
    const game = document.getElementById("game-page");
    const startbtn = document.getElementById("startbutton");
    const homebtn = document.getElementById("homebutton");

    startbtn.addEventListener("click", function() {
        welcome.style.display = "none";
        game.style.display = "block";
    });

    homebtn.addEventListener("click", function() {
        game.style.display = "none";
        welcome.style.display = "block";
    });
});
