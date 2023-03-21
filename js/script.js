const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('nav ul');
let menuOpen = false;

menuBtn.addEventListener('click', () => {
if (!menuOpen) {
    menuBtn.classList.add('open');
    menu.classList.add('open');
    menuOpen = true;
} else {
    menuBtn.classList.remove('open');
    menu.classList.remove('open');
    menuOpen = false;
}
})

function loadNavigation() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById("nav-placeholder").innerHTML = this.responseText;
    }
    };
    xhttp.open("GET", "navigation.html", true);
    xhttp.send();
}

loadNavigation();
