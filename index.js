//cambiar estilos del header
let changeStyle = document.getElementById('header');
let idOptions = ['header', 'prueba', 'otra-prueba'];
let currentIndex = 0;

changeStyle.addEventListener('click', function () {
    // Cambiar el ID al siguiente en la lista idOptions
    currentIndex = (currentIndex + 1) % idOptions.length;
    changeStyle.id = idOptions[currentIndex];
})
//cambiar estilos del nav
let changeStyleMenu = document.getElementById('menu');
let idOptionsMenu = ['header-menu', 'prueba-menu', 'otra-prueba-menu'];
let currentIndexMenu = 0;

changeStyleMenu.addEventListener('click', function () {
    // Cambiar el ID al siguiente en la lista idOptions
    currentIndexMenu = (currentIndexMenu + 1) % idOptionsMenu.length;
    changeStyleMenu.id = idOptionsMenu[currentIndexMenu];
})
// //cambiar estilo del footer
// let changeStyleFooter = document.getElementById('contacto');
// let idOptionsFooter = ['contacto', 'contacto-impact', 'contacto-nice'];
// let currentIndexfooter = 0;

// changeStyleFooter.addEventListener('click', function(){
//     currentIndexfooter = (currentIndexfooter + 1) % idOptionsFooter.length;
//     changeStyleFooter = idOptionsFooter[currentIndexfooter];
// }) 
//cambiar estilos del nav
let changeStyleFooter = document.getElementById('contacto');
let idOptionsFooter = ['contacto', 'contacto-impact', 'contacto-nice'];
let currentIndexFooter = 0;

changeStyleFooter.addEventListener('click', function () {
    // Cambiar el ID al siguiente en la lista idOptions
    currentIndexFooter = (currentIndexFooter + 1) % idOptionsFooter.length;
    changeStyleFooter.id = idOptionsFooter[currentIndexFooter];})