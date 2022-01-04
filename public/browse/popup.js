var btnabrirpop = document.getElementById("nuevo");
var overlay = document.getElementById("overlay");
var popup = document.getElementById("popup");
var btncerrar = document.getElementById("btn-cerrar-popup");

btnabrirpop.addEventListener('click', function(){
    overlay.classList.add('active');
    popup.classList.add('active');
});

btncerrar.addEventListener('click', function(){
    overlay.classList.remove('active');
    popup.classList.remove('active');
});
