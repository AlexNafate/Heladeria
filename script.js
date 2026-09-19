// =====================================
// MENÚ HAMBURGUESA (MÓVIL)
// =====================================

document.addEventListener('DOMContentLoaded', function () {

    const menuBtn = document.getElementById('menuBtn');
    const nav = document.getElementById('nav');

    // Verificar que existan los elementos
    if (!menuBtn || !nav) {
        console.warn('No se encontró #menuBtn o #nav');
        return;
    }

    // Toggle del menú al hacer clic en el botón ☰
    menuBtn.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        nav.classList.toggle('active');
        menuBtn.classList.toggle('active');
    });

    // Cerrar menú al hacer clic en un enlace
    const enlaces = nav.querySelectorAll('a');

    enlaces.forEach(function (enlace) {
        enlace.addEventListener('click', function () {
            nav.classList.remove('active');
            menuBtn.classList.remove('active');
        });
    });

    // Cerrar menú al hacer clic fuera de él
    document.addEventListener('click', function (e) {
        if (!nav.contains(e.target) && !menuBtn.contains(e.target)) {
            nav.classList.remove('active');
            menuBtn.classList.remove('active');
        }
    });

});