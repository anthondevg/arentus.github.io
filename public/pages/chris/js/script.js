function openNav() {
    document.getElementById("mySidenav").style.width = "350px";
    document.getElementById("mySidenav").style.paddingLeft = "30px";
    document.getElementById("mySidenav").style.paddingRight = "30px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("mySidenav").style.padding = "0px";
}

function escMenu(e) {
    if (e.keyCode == 27) {
        closeNav();
    }
}
// If a user clicks outside the menu on the overlay it will also trigger the event
// to hide the menu and overlay elements
window.addEventListener('click', function (event) {
    if (event.target === overlay) {
    }
})

/* accordion script */
var openCloseTab = document.getElementsByClassName('accordion-item__header');
var openCloseIcon = document.getElementsByClassName('open-close-icon');
for (var i = 0; i < openCloseTab.length; i++) {
    openCloseTab[i].addEventListener('click', function () {
        var textBlock = this.nextElementSibling;
        if (textBlock.style.maxHeight) {
            textBlock.style.maxHeight = null;
            this.style.backgroundColor = 'rgb(233,233,233)';
            this.firstElementChild.classList.remove('open');
        } else {
            this.style.backgroundColor = 'rgb(247,220,212)';
            textBlock.style.maxHeight = textBlock.scrollHeight + 'px';
            this.firstElementChild.classList.add('open');
        }
    });
}
