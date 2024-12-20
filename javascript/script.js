// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
//click
document.querySelector('#humberger-menu')
onclick = () => {
    navbarNav.classList.toggle('active');
};

//cliick dluar sidebar untuk menghilangkan nav

const humberger = document.querySelector('#humberger-menu');
document.addEventListener('click', function(e) {
    if(!humberger.contains(e. target) && !navbarNav.contains(e. target)) {
        navbarNav.classList.remove('active')
    }
})