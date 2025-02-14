document.addEventListener('DOMContentLoaded', function() {
    const welcomepage = document.getElementById("welcome-page");
    const gamepage = document.getElementById("game-page");
    const startbtn = document.getElementById("startbutton");
    const homebtn = document.getElementById("homebutton");
    const menubtn=document.getElementById("menu")
    const menupage=document.getElementById("menupage")
    const homebutton2=document.getElementById("homebutton2")    
    const playerNameInput = document.getElementById("player-name");
    const scoresList = document.getElementById("scores-list");
    const clearScoresBtn = document.getElementById("clear-scores-button");

    startbtn.addEventListener("click", function() {
        //esta es la manera de como se eliminan los valores de un input
        document.getElementById("nombre").value=""
        welcomepage.style.display = "none";//permite que desaparezca
        gamepage.style.display = "block";//permite que aparezca
    });
    homebtn.addEventListener("click", function() {
        gamepage.style.display = "none";
        welcomepage.style.display = "block";
    });
    homebtn.addEventListener("click", function() {
        gamepage.style.display = "none";
        welcomepage.style.display = "block";
    });

    homebutton2.addEventListener("click",function(){
        menupage.style.display='none'
        welcomepage.style.display='block'
    })
    menubtn.addEventListener("click",function(){
        welcomepage.style.display="none"
        menupage.style.display='block'
    })


    // Función para actualizar el menú de victorias
    function updateScoresMenu() {
        scoresList.innerHTML = ''; 
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i); 
            const score = localStorage.getItem(key); 
            const listItem = document.createElement('li'); 
            listItem.textContent = `${key}: ${score} victorias`; 
            scoresList.appendChild(listItem); 
        }
    }


    // Evento de clic para el botón de inicio del juego
    startbtn.addEventListener("click", function() {
        const playerName = playerNameInput.value.trim(); 
        console.log("Nombre del jugador:", playerName); 
        if (!playerName) {
            alert("Por favor, ingresa tu nombre."); 
            console.log("No se ingresó nombre. Se muestra alerta."); 
            return; 
        }

        console.log("Nombre ingresado correctamente. Pasando a la página del juego."); 

        welcome.style.display = "none"; 
        game.style.display = "block"; 

        // Inicializa el puntaje del jugador en localStorage si no existe
        if (!localStorage.getItem(playerName)) {
            localStorage.setItem(playerName, '0');
        }
    });

    // Evento de clic para el botón "HOME" que regresa a la página de bienvenida
    homebtn.addEventListener("click", function() {
        game.style.display = "none"; 
        welcome.style.display = "block"; 
        updateScoresMenu(); 
    });

    // Evento de clic para el botón "Clear Scores" que borra todos los datos de localStorage
    clearScoresBtn.addEventListener("click", function() {
        localStorage.clear(); 
        updateScoresMenu(); 
        alert("Todos los puntajes han sido borrados."); 
    });

    // Función para actualizar el puntaje del jugador en localStorage
    function updatePlayerScore(playerName) {
        let currentScore = parseInt(localStorage.getItem(playerName)); 
        localStorage.setItem(playerName, (currentScore + 1).toString()); 
    }

    
    

    // Actualiza el menú de victorias cuando se carga la página
    updateScoresMenu();
});










