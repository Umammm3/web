//Navbar Fixed
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if(window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
}

// Hamburger & Nav Menu
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
})

//Light Dark Mode
//const themeToggle = document.getElementById('theme-toggle');
//const htmlElement = document.documentElement;
//        
//themeToggle.addEventListener('click', () => {
//    if (htmlElement.classList.contains('dark')) {
//        htmlElement.classList.remove('dark');
//        themeToggle.textContent = 'Dark Mode';
//    } else {
//        htmlElement.classList.add('dark');
//        themeToggle.textContent = 'Light Mode';
//    }
//});

document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('toggleMode');
    const html = document.documentElement;

    // Tambahkan efek transisi sebelum mengubah mode
    function applyTransition() {
        document.body.classList.add('transition-all', 'duration-5000');
    }

    // Cek mode yang tersimpan di localStorage
    if (localStorage.getItem('theme') === 'dark') {
        html.classList.add('dark');
        toggleButton.textContent = 'Light Mode';
    } else {
        toggleButton.textContent = 'Dark Mode';
    }

    toggleButton.addEventListener('click', () => {
        applyTransition();
        if (html.classList.contains('dark')) {
            html.classList.remove('dark');
            localStorage.setItem('theme', 'light');
            toggleButton.textContent = 'Dark Mode';
        } else {
            html.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            toggleButton.textContent = 'Light Mode';
        }
    });
});


