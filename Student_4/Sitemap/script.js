window.onscroll = function() {headerShrink()};

function headerShrink(){
  var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollTop > 50){
      document.getElementById("links").style.display = "none";
      document.getElementById("toTop").style.display ="block";

    } else {
      document.getElementById("links").style.display = "flex";
      document.getElementById("toTop").style.display ="none";

    }
}

function hamburgMenu(){
    const element = document.getElementById("links");
    if (element.className === "header-links") element.className+='-hamburg';
    else element.className = "header-links";
}

const menuButton = document.getElementById("hamburgMenu");
menuButton.addEventListener('click', hamburgMenu);

