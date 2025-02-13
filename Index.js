document.addEventListener('DOMContentLoaded', function() {
    const welcomepage = document.getElementById("welcome-page");
    const gamepage = document.getElementById("game-page");
    const startbtn = document.getElementById("startbutton");
    const homebtn = document.getElementById("homebutton");
    const menubtn=document.getElementById("menu")
    const menupage=document.getElementById("menupage")
    const homebutton2=document.getElementById("homebutton2")
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

    homebutton2.addEventListener("click",function(){
        menupage.style.display='none'
        welcomepage.style.display='block'
    })
    menubtn.addEventListener("click",function(){
        welcomepage.style.display="none"
        menupage.style.display='block'
    })

});
