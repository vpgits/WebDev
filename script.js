document.addEventListener("DOMContentLoaded", function() {
    setInterval(()=>{switchSlides(1,".slides")},8000);

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

const prevBtn = document.querySelector(".arrow-back");
const nxtBtn = document.querySelector(".arrow-front");





function switchSlides(n, classname) {

const slides = document.querySelectorAll(classname);
    if (n === 1) {
      let temp = slides[slides.length - 1];
      let parentElement = slides[0].parentNode;
      
      for (let i = slides.length - 1; i > 0; i--) {
        let referenceNode = slides[i];
        let newNode = slides[i - 1];
        parentElement.insertBefore(newNode, referenceNode);
      }
      parentElement.insertBefore(temp, slides[0]);
    }

    if (n === -1) {
        let temp = slides[0];
        let parentElement = slides[0].parentNode;
    
        for (let i = 0; i < slides.length - 1; i++) {
          let referenceNode = slides[slides.length - 1];
          let newNode = slides[i];
          parentElement.insertBefore(newNode, referenceNode);
        }
    
        parentElement.insertBefore(temp, slides[slides.length]);
      }
    // if (n === 10){
    //   let element  = document.getElementById(".stage-active");

    // }
}

  
nxtBtn.addEventListener('click', () => switchSlides(1,".slides"));
prevBtn.addEventListener('click', ()=> switchSlides(-1,".slides"));




// nxtBtn.addEventListener('click',() => console.log("yes"));
// nxtBtn.addEventListener('click', () => switchSlides(1));