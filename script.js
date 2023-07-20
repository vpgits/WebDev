//  Student Role: student_2
// Student Name: M.B.V.Pesanjith 

//shrinks the header when the window is being scrolled
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


//function to remove header links and convert it into a hamburg menu with dropdown lsit
function hamburgMenu(){
    const element = document.getElementById("links");
    if (element.className === "header-links") element.className+='-hamburg';
    else element.className = "header-links";
}

const menuButton = document.getElementById("hamburgMenu");
menuButton.addEventListener('click', hamburgMenu);

