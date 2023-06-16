window.onscroll = function() {headerShrink()};

function headerShrink(){
    if (document.body.scrollTop > 50){document.getElementById("header").style.fontSize = "20px;"}
}