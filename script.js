document.addEventListener("DOMContentLoaded", function() {
    hamburgMenu();
  });

window.onscroll = function() {headerShrink()};

function headerShrink(){
    if (document.body.scrollTop > 50){document.getElementById("header").style.fontSize = "20px;"}
}

function hamburgMenu(){
    const element = document.getElementById("links");
    if (element.className === "header-links") element.className+='-hamburg';
    else element.className = "header-links";
}

const menuButton = document.getElementById("hamburgMenu");
menuButton.addEventListener('click', hamburgMenu);