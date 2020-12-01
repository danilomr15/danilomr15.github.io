window.onscroll = function() {scroll()};

var header = document.getElementById("menu");
var sticky = header.offsetTop;

function scroll() {
    if (window.pageYOffset > (sticky + 500)) {
    header.classList.add("sticky");
    } else {
    header.classList.remove("sticky");
    }
}